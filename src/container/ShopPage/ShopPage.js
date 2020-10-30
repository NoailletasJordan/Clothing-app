import React, { useState, useEffect } from 'react'
import Collection from '../../component/ShopPage/Collection/Collection'
import Spinner from '../../component/Spinner/Spinner'
import shop_data from '../ShopPage/shop.datacustom'
import './ShopPage.styles.scss'

const ShopPage = (props) => {
  const itemList = [
    {
      title: 'MENS',
      routeName: 'mens',
      items: shop_data.filter((elt) => elt.tags.includes('mens')),
    },
    {
      title: 'WOMENS',
      routeName: 'womens',
      items: shop_data.filter((elt) => elt.tags.includes('womens')),
    },
    {
      title: 'SNEAKERS',
      routeName: 'sneakers',
      items: shop_data.filter((elt) => elt.tags.includes('sneakers')),
    },
    {
      title: 'HATS',
      routeName: 'hats',
      items: shop_data.filter((elt) => elt.tags.includes('hats')),
    },
    {
      title: 'JACKETS',
      routeName: 'jackets',
      items: shop_data.filter((elt) => elt.tags.includes('jackets')),
    },
  ]

  let isLoading = false
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="shopPage">
        {itemList.map((elt) => (
          <Collection
            key={elt.id + elt.title}
            name={elt.title}
            routeName={elt.routeName}
            items={elt.items}
            history={props.history}
          />
        ))}
      </div>
    </div>
  )
}

export default ShopPage
