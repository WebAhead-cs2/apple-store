import React, { useState } from 'react';

function Cart(products) {
  // State to store the list of products in the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      {/* Iterate over the list of products and display them */}
      {products.map(product => (
        <div key={product.id}>
          {/* Display the product details */}
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.price}</p>

          {/* Add to cart button */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      {/* Display the list of products in the cart */}
      <h2>Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}><h3>{product.model}</h3><h3>{product.price}</h3></li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;