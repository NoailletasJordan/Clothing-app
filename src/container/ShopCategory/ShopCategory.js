import React, { useEffect, useState } from "react"
import ShopItem from "../../component/ShopPage/ShopItem/ShopItem"
import { Redirect } from "react-router-dom"
import Spinner from "../../component/Spinner/Spinner"
import { shuffledData } from "../ShopPage/shop.datacustom"
import "./ShopCategory.styles.scss"
import { useMediaQuery } from "@material-ui/core"

const ShopCategory = (props) => {
  const [content, setContent] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userFilter, setUserFilter] = useState("both")
  const [currentPagination, setCurrentPagination] = useState(1)
  const [arrayLentghNumberPage, setArrayLentghNumberPage] = useState(["1"])

  const routeGuard = () => {
    const validRoutes = ["mens", "womens", "sneakers", "hats", "jackets"]
    const index = validRoutes.findIndex((elt) => elt === routeName)
    if (index !== -1) return true
    else return false
  }

  let routeName = props.match.params.category
  const isAuthorizedRoute = routeGuard()
  const numberOfItemPerPage = 20
  const userOnSmartphone = useMediaQuery("(max-width:600px)")

  const filteredList = () => {
    if (userFilter === "both")
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

  // Update pagination array when content change
  useEffect(() => {
    const array = []
    for (
      let i = 0;
      i < Math.floor((content.length - 1) / numberOfItemPerPage);
      i++
    ) {
      array.push(i + 1)
    }
    setArrayLentghNumberPage(array)
  }, [content])

  const handleRedirectToShop = () => {
    props.history.push("/shop")
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
    setCurrentPagination(1)
  }

  const handleChangePage = (page) => {
    // Guard
    if (
      page < 1 ||
      page === currentPagination ||
      page > arrayLentghNumberPage.length
    )
      return

    setCurrentPagination(page)
  }

  return !isAuthorizedRoute ? (
    <Redirect to="/" />
  ) : isLoading ? (
    <Spinner />
  ) : (
    <div className="container" id="top">
      <div className="shop-category">
        <h2 className="shop-category__header">
          <div className="shop-category__title">{title}</div>

          {routeName !== "mens" && routeName !== "womens" ? (
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
        {content
          .slice(
            Number(currentPagination * numberOfItemPerPage) - 1,
            Number(currentPagination * numberOfItemPerPage) -
              1 +
              numberOfItemPerPage
          )
          .map((item) => (
            <ShopItem
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
      <div className="shop-category__pagination">
        <div
          className="shop-category__pagination__item pagination-previous"
          onClick={() => handleChangePage(currentPagination - 1)}
        >
          {"<"}
        </div>
        {!userOnSmartphone
          ? arrayLentghNumberPage.map((item) => (
              <div
                key={item}
                onClick={(e) => handleChangePage(item)}
                className={
                  item === currentPagination
                    ? "shop-category__pagination__item pagination-selected"
                    : "shop-category__pagination__item"
                }
              >
                {item}
              </div>
            ))
          : [currentPagination].map((item) => (
              <div
                key={item}
                onClick={(e) => handleChangePage(item)}
                className={
                  item === currentPagination
                    ? "shop-category__pagination__item pagination-selected"
                    : "shop-category__pagination__item"
                }
              >
                {item}
              </div>
            ))}
        <div
          className="shop-category__pagination__item pagination-next"
          onClick={() => handleChangePage(Number(currentPagination) + 1)}
        >
          {">"}
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
