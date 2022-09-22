import React from "react";
import Navbar from "./Navbar";
import shirts from "../assets/shirts.svg";
import tshirts from "../assets/t_shirt1.svg";
import design_shirt from "../assets/design_shirt.svg";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <header>
          <div>
            <div></div>
            <div>
              <img src={shirts} alt="shirt" />
              <img src={tshirts} alt="tshirt" />
              <img src={design_shirt} alt="tshirt" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Home;
