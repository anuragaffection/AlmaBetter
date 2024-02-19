
import React, { useState } from "react"
import StripeCheckout from 'react-stripe-checkout'

function App() {

  const [product, setProudct] = useState({
    name: "Stripe Test Code ",
    price: 10,
    proudctBy: "By Anurag Affection"
  })

  const makePayment = (token) => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch('http://localhost:4000/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("response = ", response);
      const { status } = response;
      console.log("status = ", status)
    })
      .catch(err => console.log("Error", err))
  }

  return (
    <>
      <h1>Stripe Payment Integration </h1>
      <StripeCheckout
        stripeKey={import.meta.env.REACT_APP_STRIPE_KEY} // Add your own test key here
        token={makePayment}
        name="Buy Stripe Test Code "
        amount={product.price * 100}
      >
        <button style={{
          backgroundColor: 'blue',
          height: '32px',
          padding: '8px 16px',
          border: '16px'
        }}> {`Buy ${product.name} for ${product.price}`} </button>
      </StripeCheckout>
    </>
  )
}

export default App
