import React from 'react'
import './Cart-item.styles.scss'

const CartItem = (props) => {
  const style = {
    backgroundImage: `url(${props.imgUrl})`,
  }

  function TextAbstract(text, length) {
    if (text == null) {
      return ''
    }
    if (text.length <= length) {
      return text
    }
    text = text.substring(0, length)
    const last = text.lastIndexOf(' ')
    text = text.substring(0, last)
    return text + '...'
  }

  return (
    <div className="cart-item">
      <figure className="cart-item__img" style={style} />

      <div className="cart-item__details">
        <h3 className="cart-item__name">{TextAbstract(props.itemName, 30)}</h3>
        <div className="cart-item__wrapper">
          <i
            className="fas fa-chevron-left cart-item__arrow--left"
            onClick={props.handleSubstract}
          />
          {`${props.itemNumber} x ${props.itemPrice}$`}
          <i
            className="fas fa-chevron-right cart-item__arrow--right"
            onClick={props.handleAdd}
          />
        </div>
      </div>
    </div>
  )
}

export default CartItem
