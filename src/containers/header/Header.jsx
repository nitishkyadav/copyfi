import React from 'react';
import './header.css';

import ai from '../../assets/ai.png';
const header = () => {
    return (
        <div className="copyfi__header section__padding" id="home">
          <div className="copyfi__header-content">
            <h1 className="gradient__text">Let’s revolutionize crypto  </h1>
            <p>CopyFi is an ecosysytem of various crypto services based on binance  smart chain including
Multichain bridge
Multichain Portfolio tracker for tokens and nfts 
Airdrop (dapp) 
Defi wallet 
AI Bot
</p>
            <div className="copyfi__header-content__input">
              <input type="email" placeholder="Your Email Address"/>
              <button type="button">Get started</button>
            </div>

            
          </div>
          <div className="copyfi__header-image">
            <img src={ai} alt="ai" />
          </div>
        </div>
    )
}

export default  header