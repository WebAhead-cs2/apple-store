import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const toggleDescriptionVisibility = () => {
    setDescriptionVisibility(!isDescriptionVisible);
  };

  return (
    <div className={`card ${isDescriptionVisible ? "expanded" : ""}`}>
      <div>
        <br />
        <br />
        <img src={product.image} alt="rel" />
      </div>

      <div>
        <h4>{product.name}</h4>
        <h4>{product.model}</h4>
        <h4>{product.price} NIS</h4>

        <button onClick={() => addToCart(product)}>  Add To Cart + </button>
        <button onClick={toggleDescriptionVisibility}>See More</button>
        {isDescriptionVisible && (
          <div className={`product-description ${isDescriptionVisible ? "visible" : ""}`}>
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
