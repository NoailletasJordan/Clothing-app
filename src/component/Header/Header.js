import React, { useState, useEffect } from 'react'
import Logo from './Logo/Logo'
import NavComponent from './NavComponent/NavComponent'
import CartIcon from './Cart-icon/Cart-icon'
import CartDropdown from '../Cart-dropdown/Cart-dropdown'
import './Header.styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { cartToggleShow } from '../../actions/cart'
import { cartAdd, cartSubstract } from '../../actions/cart'
import { withRouter } from 'react-router-dom'

const Header = (props) => {
  const cartIsShow = useSelector((state) => state.cart.isShow)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const cartNumber = useSelector((state) => state.cart.cartNumber)
  const { isLogged } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const [isCheckoutPage, setIsCheckoutPage] = useState(false)

  useEffect(() => {
    if (props.history.location.pathname === '/checkout') setIsCheckoutPage(true)
    else setIsCheckoutPage(false)
  }, [props.history.location.pathname])

  const handleToggleCart = () => {
    dispatch(cartToggleShow())
  }

  const handleAdd = (item) => {
    dispatch(cartAdd(item))
  }

  const handleSubstract = (item) => {
    dispatch(cartSubstract(item))
  }

  const handleCloseDropdown = () => {
    dispatch(cartToggleShow(false))
  }

  const handleGoToCheckoutOrSignin = () => {
    handleToggleCart()
    if (isLogged) {
      if (cartNumber < 1) {
        return props.history.push('/shop')
      }
      props.history.push('/checkout')
    } else {
      props.history.push('/signin')
    }
  }

  return (
    <div className="container">
      <header className="header">
        <Logo />
        <ul className="nav">
          <NavComponent linkTo="/shop">Shop</NavComponent>

          {props.isLogged ? (
            <NavComponent linkTo="/orders">My orders</NavComponent>
          ) : null}

          {!props.isLogged ? (
            <NavComponent linkTo="/signin">Sign in</NavComponent>
          ) : props.isLogged && !isCheckoutPage ? (
            <li className="nav__component">
              <div
                onClick={props.handleClick}
                className="nav__component__navlink"
              >
                Sign Out
              </div>
            </li>
          ) : null}

          <CartIcon
            handleToggleCart={handleToggleCart}
            cartNumber={cartNumber}
          />
        </ul>
        {!isCheckoutPage ? (
          <CartDropdown
            cartItems={cartItems}
            cartIsShow={cartIsShow}
            totalPrice={totalPrice}
            handleSubstract={handleSubstract}
            handleAdd={handleAdd}
            handleGoToCheckoutOrSignin={handleGoToCheckoutOrSignin}
            isLogged={isLogged}
            handleClose={handleCloseDropdown}
            handleToggleCart={handleToggleCart}
            cartNumber={cartNumber}
          />
        ) : null}
      </header>
    </div>
  )
}

export default withRouter(Header)
