import React from "react";
import Navbar from "./Navbar";
import tshirts from "../assets/black_tshirts.svg";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <header>
        <div className="clothy-intro">
          <div className="shop_clothes">
            <div className="custom_clothes">Shop Customized Clothy Wears</div>
            <div className="clothes_desc">
              We have custom wears ranging from shirts to pants, shoes and more.
            </div>
            <div className="shop">
              <a href="/" id="shop_btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="tshirt-img">
            <img src={tshirts} alt="tshirt" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
