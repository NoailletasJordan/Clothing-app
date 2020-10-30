import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { firestore } from '../../Firebase/firebase.utils'
import Command from '../../component/Command/Command'
import Spinner from '../../component/Spinner/Spinner'

import './OrdersPage.scss'

const OrdersPage = (props) => {
  const emailCurrentUser = useSelector((state) => state.auth.email)
  const [isLoading, setIsLoading] = useState(true)
  const [orderList, setOrderList] = useState([])
  useEffect(() => {
    firestore
      .collection('user')
      .where('email', '==', emailCurrentUser)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          setOrderList(doc.data().orders)
          setIsLoading(false)
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })
  }, [])

  const handleRedirect = () => {
    props.history.push('/shop')
  }

  let content
  if (isLoading) {
    content = <Spinner />
  } else if (orderList !== undefined && orderList.length >= 1) {
    content = orderList
      .reverse()
      .map((order) => <Command key={Math.random()} {...order} />)
  } else {
    content = (
      <h2 className="orders-page__empty">
        You didnt ordered anything yet ! <br />
        <span className="orders-page__empty__cta" onClick={handleRedirect}>
          Start shoping Now →
        </span>
      </h2>
    )
  }

  return (
    <div className="container">
      <div className="orders-page">{content}</div>
    </div>
  )
}

export default OrdersPage
