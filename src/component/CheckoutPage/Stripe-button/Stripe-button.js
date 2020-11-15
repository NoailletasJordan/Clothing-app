import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = (props) => {
  const priceForStripe = props.price * 100
  const publishableKey = 'pk_test_HH9F8QUx3XFpQdgAi7X60Los'

  const onToken = (token) => {
    props.addCommandToDatabase()
    console.log(token)
    props.handlePayment()
  }

  return (
    <StripeCheckout
      label="Pay with card"
      name="Clothing App"
      billingAdress
      shippingAdress
      image="https://drive.google.com/uc?export=download&id=1vHTGb7PFhC9ftj7sCQHyif8Up9qM4s9u"
      stripeKey={publishableKey}
      description={`Your total is $${props.price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      onClick={props.click}
      opened={props.click}
    />
  )
}

export default StripeButton
