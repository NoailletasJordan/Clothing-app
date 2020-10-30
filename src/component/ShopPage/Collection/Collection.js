import React, { useEffect, useState } from 'react'
import ShopItem from '../ShopItem/ShopItem'
import './Collection.scss'

const Collection = (props) => {
  const [newItem, setNewItem] = useState([])
  useEffect(() => {
    setNewItem(shuffle(props.items).slice(0, 4))
  }, [])

  const handleRedirect = () => {
    props.history.push(`/shop/${props.name.toLowerCase()}`)
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  return (
    <div className="collection">
      <h2 className="collection__name" onClick={handleRedirect}>
        {props.name}
        <div className="collection__name__container">
          <span className="collection__name__hover-text">See all</span>
          <span className="collection__name__hover-arrow">
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </h2>
      {newItem.map((item) => (
        <ShopItem
          key={item.id}
          id={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default Collection
