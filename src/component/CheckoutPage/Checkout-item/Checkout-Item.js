import React from 'react'
import './Checkout-item.styles.scss'

const CheckoutItem = (props) => {
  const style = {
    backgroundImage: `url(${props.imageUrl})`,
  }
  return (
    <div className="checkout-item">
      <figure className="checkout-item__image-container" style={style}></figure>
      <p className="checkout-item__name">{props.name}</p>
      <div className="checkout-item__wrapper">
        <i
          onClick={props.handleSubstractItem}
          className="icon-l fas fa-chevron-left"
        ></i>
        {props.number}
        <i
          onClick={props.handleAddItem}
          className="icon-r fas fa-chevron-right"
        ></i>
      </div>
      <div className="checkout-item__price">{props.price}$</div>
      <div className="checkout-item__remove-button">
        <i onClick={props.handleRemove} className="fas fa-trash"></i>
      </div>
    </div>
  )
}

export default CheckoutItem
