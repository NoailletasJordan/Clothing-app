import React, { useState, useRef, useEffect } from 'react'
import './ShopItem.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cartAdd, cartToggleShow } from '../../../actions/cart'

const ShopItem = ({ name, imageUrl, price, id, animation }) => {
  const dispatch = useDispatch()
  const { hasOpenCartThisSession } = useSelector((state) => state.cart)
  const [iconShow, setIconShow] = useState(false)
  const style = {
    backgroundImage: `url(${imageUrl})`,
  }
  const cartRef = useRef()

  const handleClick = () => {
    dispatch(cartAdd({ name, imageUrl, price, id }))
    if (!hasOpenCartThisSession) dispatch(cartToggleShow(true))
    setIconShow(true)
    cartRef.current.classList.add('bump')
    setTimeout(() => {
      cartRef.current.classList.remove('bump')
    }, 300)
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="ShopItem" data-aos="fade-right">
      <figure className="ShopItem__img__container" style={style}>
        <i
          ref={cartRef}
          className="ShopItem__icon-cart fas fa-cart-arrow-down"
          onClick={handleClick}
          style={iconShow ? { color: '#28a745', borderColor: '#28a745' } : null}
        />

        <div className="ShopItem__button__container">
          <button className="ShopItem__button btn" onClick={handleClick}>
            Add to cart
            <i
              className="icon-check fas fa-check"
              style={iconShow ? { opacity: 1 } : null}
            ></i>
          </button>
        </div>
      </figure>
      <div className="ShopItem__content">
        <div className="ShopItem__name">{name}</div>
        <div className="ShopItem__price">{price}$</div>
      </div>
    </div>
  )
}

export default ShopItem
