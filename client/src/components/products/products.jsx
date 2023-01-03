import React from "react";
import { useState } from "react";
import "./products.css"
// import Cart from "../cart/cart"

export default function Products() {
  const [list, setList] = React.useState([]);
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const [activeProductId, setActiveProductId] = useState(null);
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);


  const toggleDescriptionVisibility = (productId) => {
    setActiveProductId(productId);
    setDescriptionVisibility(!isDescriptionVisible);
  };
  const Data = async () => {
    try {
      let res = await fetch("products");
      let resj = await res.json();
      setList(resj);
    } catch (err) {
    }
  };
 
  React.useEffect(() => {
    Data();
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
    
  }
  function emptyCart(cart){
    setCart([]);
  }
  
  let total = cart.reduce((acc, product) => acc +  +product.price, 0);
  total = total.toFixed(2)
  return (
    <div className="products">
      {/* cart */}
      <h1>Our Products</h1>
      <div className="cart">
      <button onClick={() => setIsVisible(!isVisible)}>Cart</button>
      <ul style={{ display: isVisible ? 'block' : 'none' }}>
        {cart.map(product => (
          <li key={product.id}><img src={product.image} alt="rel"/><h3>{product.name}</h3><h5>{product.model}</h5><h3>{product.price} NIS</h3></li>
          ))}
      <h2>total : {total} NIS</h2>
        <button onClick={emptyCart}>empty Cart</button>
      <button onClick={"/home"}>Move To Payment</button>  
      </ul>

      </div>
      {/* ------- */}
       {/* products */}
      <div className="container">
        {list.map((e) => (
          <div className={`card ${isDescriptionVisible ? "expanded" : ""}`}>
            <div key={e.id}>
              <div>
                <br />
                <br />
                <img src={e.image} alt="rel" />
              </div>

              <div>
                <h4>{e.name}</h4>
                <h4>{e.model}</h4>
                <h4>{e.price} NIS</h4>

                <button  onClick={() => {toggleDescriptionVisibility(e.id);}}>
                See More </button>
                {activeProductId === e.id && isDescriptionVisible && (
                  <div
                    className={`product-description ${
                      isDescriptionVisible ? "visible" : ""
                    }`}
                  >
                    <p>{e.description}</p>
                    <button onClick={() => addToCart(e)}>
                      Add To Cart +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ------ */}
    </div>
  );
}
