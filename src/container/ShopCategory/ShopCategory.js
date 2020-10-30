import React, { useEffect, useState } from 'react'
import ShopItem from '../../component/ShopPage/ShopItem/ShopItem'
import { Redirect } from 'react-router-dom'
import Spinner from '../../component/Spinner/Spinner'
import { shuffledData } from '../ShopPage/shop.datacustom'
import './ShopCategory.styles.scss'

const ShopCategory = (props) => {
  const [content, setContent] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userFilter, setUserFilter] = useState('both')
  const routeName = props.match.params.category

  const routeGuard = () => {
    const validRoutes = ['mens', 'womens', 'sneakers', 'hats', 'jackets']
    const index = validRoutes.findIndex((elt) => elt === routeName)
    if (index !== -1) return true
    else return false
  }
  const isAuthorizedRoute = routeGuard()

  const filteredList = () => {
    if (userFilter === 'both')
      return shuffledData.filter((elt) => elt.tags.includes(routeName))
    else
      return shuffledData.filter(
        (elt) => elt.tags.includes(routeName) && elt.tags.includes(userFilter)
      )
  }

  useEffect(() => {
    if (isAuthorizedRoute) {
      updadeState(filteredList())
    }
  }, [userFilter])

  const handleRedirectToShop = () => {
    props.history.push('/shop')
  }

  const capitilizeTitle = () => {
    let routeName = props.match.params.category
    routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1)
    return routeName
  }
  const title = capitilizeTitle()

  const updadeState = (items) => {
    setIsLoading(false)
    setContent(items)
  }

  const handleClickFilter = (selectedOption) => {
    setUserFilter(selectedOption.target.value)
  }

  return !isAuthorizedRoute ? (
    <Redirect to="/" />
  ) : isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="shop-category">
        <h2 className="shop-category__header">
          <div className="shop-category__title">{title}</div>

          {routeName !== 'mens' && routeName !== 'womens' ? (
            <select
              className="shop-category__select"
              name="genre"
              id="genre"
              onChange={handleClickFilter}
            >
              <option value="both">Genre - Both</option>
              <option value="mens">Men</option>
              <option value="womens">Women</option>
            </select>
          ) : (
            <select
              className="shop-category__select"
              name="type"
              id="type"
              onChange={handleClickFilter}
            >
              <option value="both">Products - all</option>
              <option value="hats">Hats</option>
              <option value="jackets">Jackets</option>
              <option value="sneakers">Sneakers</option>
            </select>
          )}

          <span
            className="shop-category__go-back"
            onClick={handleRedirectToShop}
          >
            <i className="shop-category__go-back__icon fas fa-reply"></i>
            <span className="shop-category__go-back__text">all categories</span>
          </span>
        </h2>
        {content.map((item) => (
          <ShopItem
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ShopCategory
