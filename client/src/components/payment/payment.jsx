import React from 'react'
import "./payment.css"
import PaymentForm from "./paymentForm";

export default function Payment() {
  let newCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
  let total = newCart.reduce((acc, product) => acc +  +product.price * product.quantity, 0); //loop on the array to calculate the total price of all the products in the cart
  total = total.toFixed(2) 
  return (
    <div>
      <h1>Payment</h1>
      <div className='container2'>
      <div className="paymentCart">
             {/* on click update the state in of "isvisble" function*/ }
      <ul >  {/* on click check the isVisble state and update the list's style true/false visble list in the cart or hidden */}
        {newCart.map(product => (   
          <li key={product.id}>
            <button className="paymentRemoveBtn"></button>
            <img src={product.image} alt="rel" />
            <h3>{product.name}</h3>
            <h5>{product.model}</h5>
            <h3>{product.price} NIS</h3>
            <h4>Quantity: {product.quantity}</h4>
          </li>
          ))}
      <h2>total : {total} NIS</h2>
      </ul>

      </div>
      <div>
      <PaymentForm />
      </div>
    </div>
    </div>
  )
}
