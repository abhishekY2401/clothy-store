import "./Navbar.css";
import { useState } from "react";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import account from "../assets/userr.svg";

function Navbar() {
  const [clickSearch, setClickSearch] = useState(false);
  // const [NoOfitems, setNoOfItems] = useState(0);

  return (
    <div className="navbar">
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
              <span></span>
            </li>
          </ul>
        </nav>
        <div className="clothy-logo">
          <span className="cloth">Clothz</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          {clickSearch && (
            <input
              type="search"
              placeholder="Search Products..."
              className="search_items"
            />
          )}
        </div>

        <div className="iconss">
          <div className="search-icon">
            <img src={search} alt="search" />
          </div>

          <div className="my-cart">
            <img src={cart} alt="cart" />
          </div>

          <div className="user-account">
            <img src={account} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
