import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'

import './Cart-icon.styles.scss'

const CartIcon = (props) => {
  return (
    <li>
      <div className="cart nav__component " onClick={props.handleToggleCart}>
        <ShoppingIcon className="cart__icon" />
        <span className="cart__count">{props.cartNumber}</span>
      </div>
    </li>
  )
}

export default CartIcon
