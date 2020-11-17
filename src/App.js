import React, { useEffect, useState, lazy, Suspense, Fragment } from 'react'
import './style/main.scss'
import Header from './component/Header/Header'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SignInSignUpPage from './container/Sign-in-sign-up/Sign-in-sign-up'
import Notification from './component/Notification/Notification'
import { notificationTrigger } from './actions/notification'
import Spinner from './component/Spinner/Spinner'
import Footer from './component/Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { authLogOut, authSignIn } from './actions/auth'
import {
  cartUpdateTotalPrice,
  cartUpdateCartNumber,
  cartGetFromLocalStorage,
} from './actions/cart'
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './Firebase/firebase.utils'

const ShopPage = lazy(() => import('./container/ShopPage/ShopPage'))
const Homepage = lazy(() => import('./container/homepage/homepage'))
const CheckoutPage = lazy(() => import('./container/CheckoutPage/CheckoutPage'))
const OrdersPage = lazy(() => import('./container/OrdersPage/OrdersPage'))
const ShopCategory = lazy(() => import('./container/ShopCategory/ShopCategory'))

function App() {
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state.auth.isLogged)
  const cartItems = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    getFromStorage()
    // Firebase Auth Listener
    let unsubscribeFromAuth = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const { email, displayName } = firebaseUser
        if (displayName) {
          // si auth via service tier (google etc)
          createUserProfileDocument(firebaseUser, displayName)
          dispatch(authSignIn(email, displayName))
          if (displayName !== window.sessionStorage.getItem('loggedAs')) {
            dispatch(notificationTrigger(true, 'log')) // print notification
            window.sessionStorage.setItem('loggedAs', displayName)
          }
        } else {
          // custom auth , extra firebase req to get the displayName
          const docRef = firestore.collection('user').doc(firebaseUser.uid)
          docRef
            .get()
            .then(function (doc) {
              if (doc.exists) {
                const { displayName } = doc.data()
                dispatch(authSignIn(email, displayName))
                if (displayName !== window.sessionStorage.getItem('loggedAs')) {
                  //put displayname in cache
                  dispatch(notificationTrigger(true, 'log')) // print notification
                  window.sessionStorage.setItem('loggedAs', displayName)
                }
              } else {
                console.log('No such document!')
                dispatch(authSignIn(email))
              }
            })
            .catch(function (error) {
              console.log('Error getting document:', error)
            })
        }
      } else {
      } // not logged in
    })

    return () => {
      unsubscribeFromAuth() //cleanup observer
      window.removeEventListener('scroll')
    }
  }, [])

  useEffect(() => {
    // triggers every time the cart is changed
    UpdatePrice()
    UpdateCartNumber()
    window.localStorage.setItem('clothesAppCart', JSON.stringify(cartItems))
  }, [cartItems])

  const getFromStorage = () => {
    const fromStorage = JSON.parse(
      window.localStorage.getItem('clothesAppCart')
    )
    if (fromStorage !== null && fromStorage.length >= 1) {
      dispatch(cartGetFromLocalStorage(fromStorage))
    }
  }

  const UpdatePrice = () => {
    dispatch(cartUpdateTotalPrice())
  }

  const UpdateCartNumber = () => {
    dispatch(cartUpdateCartNumber())
  }

  const handleClickLogOut = (event) => {
    if (isLogged) {
      dispatch(authLogOut())
    }
  }

  let root = null
  if (isLogged) {
    root = ( // logged
      <Fragment>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/shop/:category" component={ShopCategory} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Suspense>
      </Fragment>
    )
  } else {
    // not logged
    root = (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/:category" component={ShopCategory} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/signin" exact component={SignInSignUpPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Suspense>
    )
  }

  // homepage placed here to prevent rerender on logout
  return (
    <BrowserRouter>
      <Header isLogged={isLogged} handleClick={handleClickLogOut} />
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
      </Suspense>

      {root}

      <Notification />
    </BrowserRouter>
  )
}

export default App
