import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <link rel="stylesheet" href="/css/all.min.css" />
      <nav className='navbar'>
        <a href="/">
          <i className="fas fa-home">Home</i>
        </a>
        <a href="/products">
          <i className="fas fa-shopping-bag">Products</i>
        </a>
        <a href="/login">
          <i className="fas fa-sign-in-alt">Log In</i>
        </a>
        <a href="/cart">
          <i className="fas fa-shopping-cart">Cart</i>
        </a>
      </nav>
    </>
  );
}

