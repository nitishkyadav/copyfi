import React from "react";
import "./header.css";

import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="header">
      <div className="copyfi__header" id="home">
        <div className="copyfi__header-content">
          <h1 className="gradient__text">Let’s revolutionize crypto </h1>
          <p>
            CopyFi is an ecosysytem of various Crypto Services based on
            <span className="keywords">Binance Smart Chain(BSC)</span> including
            <span className="keywords"> Multichain bridge</span>,{" "}
            <span className="keywords">Multichain Portfolio Tracker dApp</span>,{" "}
            <span className="keywords">Defi Wallet</span>, and{" "}
            <span className="keywords">AI Bot</span>
          </p>
        </div>
        <div className="copyfi__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
