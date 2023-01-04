import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <link rel="stylesheet" href="/css/all.min.css" />
      <nav className='navbar'>
        <a href="/">
          <i className="fas fa-home"></i>
          <i className="fas">Home </i>
        </a>
        <a href="/products">
          <i className="fas fa-shopping-bag"></i>
          <i className="fas">Products </i>
        </a>
        <a href="/login">
          <i className="fas fa-sign-in-alt"></i>
          <i className="fas">Log In </i>
        </a>
        <a href="/cart">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas">Cart</i>
        </a>
      </nav>
    </>
  );
}

