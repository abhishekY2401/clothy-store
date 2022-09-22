import React from "react";
import "./Navbar.css";
import myCart from "../assets/cart.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="clothy-logo">
          <span className="cloth">CLOTHY</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Offers</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
        <div>
          <input type="search" placeholder="Search Products..." />
        </div>
        <div className="my-cart">
          <img src={myCart} alt="cart" />
          <p>My Cart</p>
          <p>items</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
