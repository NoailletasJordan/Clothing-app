import React from 'react'
import './Cart-dropdown.styles.scss'
import CartItem from '../Cart-item/Cart-item'

const CartDropdown = (props) => {
  let content = <p className="cart-dropdown__empty">Your cart is empty !</p>
  if (props.cartItems.length) {
    content = props.cartItems.map((item) => (
      <CartItem
        key={item.id}
        itemName={item.name}
        imgUrl={item.imageUrl}
        itemNumber={item.number}
        itemPrice={item.price}
        handleAdd={(event) => props.handleAdd(item)}
        handleSubstract={(event) => props.handleSubstract(item)}
      />
    ))
  }

  return (
    <li
      className={
        props.cartIsShow
          ? 'cart-dropdown'
          : 'cart-dropdown cart-dropdown__hiddener'
      }
    >
      <div className="cart-dropdown__opener" onClick={props.handleToggleCart}>
        <div
          style={{ transition: 'transform 0.3s ease-in' }}
          className={props.cartIsShow ? 'cart-dropdown__opener--rotated' : null}
        >
          <i
            className={
              !props.cartIsShow && props.cartNumber
                ? 'fas fa-angle-double-left anim__opener--shake'
                : 'fas fa-angle-double-left'
            }
          ></i>
        </div>
      </div>

      <div className="cart-dropdown__items">{content}</div>
      <div className="cart-dropdown__totalPrice">
        Total : {props.totalPrice}$
      </div>
      <button className="btn" onClick={props.handleGoToCheckoutOrSignin}>
        {!props.isLogged
          ? 'Sign in to continue'
          : props.cartNumber < 1
          ? 'Add items to your cart'
          : 'Go to checkout'}
      </button>
    </li>
  )
}

export default CartDropdown
