import React, { useEffect, useRef } from 'react'
import './Notification.scss'
import { useSelector, useDispatch } from 'react-redux'
import { notificationOff } from '../../actions/notification'

const Notification = (props) => {
  const { isShown, isSuccess, category, customMessage } = useSelector(
    (state) => state.notification
  )
  const displayName = useSelector((state) => state.auth.displayName)
  const dispatch = useDispatch()
  let notifBox = useRef(null)

  let message = ''

  useEffect(() => {
    if (isShown) {
      setTimeout(() => {
        dispatch(notificationOff())
      }, 5000)
    }
  }, [isShown])

  if (category === 'log') {
    if (isSuccess === true) {
      message = `Welcome ${displayName != null ? displayName : ''}!`
    } else {
      message = 'An error Appeared'
    }
  }

  if (category === 'unlog') {
    //cause errors, better not use
    if (isSuccess === true) {
      message = 'You successfully unlogged !'
    } else {
      message = 'An error Appeared'
    }
  }

  if (category === 'payment') {
    if (isSuccess === true) {
      message = 'Payment successful ! Check your orders page :)'
    } else {
      message = 'An error appeared with the payment'
    }
  }

  if (category === 'signup') {
    if (isSuccess === true) {
      message = 'You successfully signed up ! Welcome'
    } else {
      message = 'Oops, sign up failed'
    }
  }

  if (category === 'passwordMatch') {
    if (isSuccess === true) {
      message = ''
    } else {
      message = 'Looks like the passwords dont match !'
    }
  }

  if (category === 'passwordLength') {
    if (isSuccess === true) {
      message = ''
    } else {
      message = 'Password too short, should be at least 6 caracters'
    }
  }

  if (category === 'custom') {
    if (isSuccess === true) {
      message = customMessage
    } else {
      message = customMessage
    }
  }

  return (
    <div
      className={`notification ${isShown ? 'isShown' : null} ${
        isSuccess ? null : 'error'
      }`}
      ref={(elt) => {
        notifBox = elt
      }}
    >
      {message}
    </div>
  )
}

export default Notification
