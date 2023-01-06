import React from 'react';

const Cart = ({ cart, removeFromCart, emptyCart }) => {
  let total = cart.reduce((acc, product) => acc +  +product.price * product.quantity, 0);
  total = total.toFixed(2)
  return (
    <div className="cart">
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="rel" />
            <h3>{product.name}</h3>
            <h5>{product.model}</h5>
            <h3>{product.price} NIS</h3>
            <h4>Quantity: {product.quantity}</h4>
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          </li>
        ))}
      <h2>total : {total} NIS</h2>
        <button onClick={emptyCart}>empty Cart</button>
      <button onClick={"/home"}>Move To Payment</button>  
      </ul>
    </div>
  );
}

export default Cart;
