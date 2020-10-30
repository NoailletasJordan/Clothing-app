import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutItem from '../../component/CheckoutPage/Checkout-item/Checkout-Item'
import { cartAdd, cartSubstract, cartReset } from '../../actions/cart'
import StripeButton from '../../component/CheckoutPage/Stripe-button/Stripe-button'
import { notificationTrigger } from '../../actions/notification'
import { firestore } from '../../Firebase/firebase.utils'

import './Checkoutpage.styles.scss'

const CheckoutPage = (props) => {
  const cart = useSelector((state) => state.cart)
  const emailCurrentUser = useSelector((state) => state.auth.email)
  const dispatch = useDispatch()

  const [isShow, setIsShow] = useState(true)

  const handleClick = () => {
    setIsShow(true)
  }
  const content = cart.cartItems.map((item) => (
    <CheckoutItem
      key={item.id}
      {...item}
      handleAddItem={() => dispatch(cartAdd(item))}
      handleSubstractItem={() => dispatch(cartSubstract(item))}
      handleRemove={() => dispatch(cartSubstract({ ...item, removeOpt: true }))}
    />
  ))

  const handlePaymentStripe = () => {
    dispatch(notificationTrigger(true, 'payment'))
    dispatch(cartReset())
    props.history.push('/')
  }

  const handleRedirectToShop = () => {
    props.history.push('/shop')
  }

  const addCommandToDatabase = () => {
    firestore
      .collection('user')
      .where('email', '==', emailCurrentUser)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const NewOrderList = setUpNewOrderList(doc.data().orders)
          firestore
            .collection('user')
            .doc(doc.id)
            .update({ orders: NewOrderList })
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })
  }

  const setUpNewOrderList = (oldArr) => {
    const OrderedAt = new Date()
    const newOrder = {
      cartNumber: cart.cartNumber,
      cartItems: cart.cartItems,
      totalPrice: cart.totalPrice,
      OrderedAt,
    }
    if (oldArr !== undefined) return oldArr.concat(newOrder)
    else return [newOrder]
  }

  return cart.cartNumber >= 1 ? (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-page__header">
          <div className="checkout-page__header__block--phone-only">
            <span>Your Cart :</span>
          </div>
          <div className="checkout-page__header__block--1">
            <span className="checkout-page__header__block">Product</span>
          </div>
          <div className="checkout-page__header__block">
            <span>Description</span>
          </div>
          <div className="checkout-page__header__block">
            <span>Quantity</span>
          </div>
          <div className="checkout-page__header__block">
            <span>Price</span>
          </div>
          <div className="checkout-page__header__block">
            <span>Remove</span>
          </div>
        </div>
        {content}
        <div className="total">total: {cart.totalPrice}$</div>
        <div className="stripe-zone">
          {isShow ? (
            <p className="stripe-zone__infos">
              *false credit card* : 4242 4242 4242 4242 <br />
              Expire in : Future date <br />
              CVV: 123
            </p>
          ) : null}

          <div className="stripe-zone__stripe-button">
            <StripeButton
              click={handleClick}
              price={cart.totalPrice}
              handlePayment={handlePaymentStripe}
              addCommandToDatabase={addCommandToDatabase}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="checkout-page__empty">
      Your Cart is empty !{' '}
      <span
        onClick={handleRedirectToShop}
        className="checkout-page__empty__span"
      >
        Go back to shop →
      </span>
    </div>
  )
}

export default CheckoutPage
