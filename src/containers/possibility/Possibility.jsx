import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const possibility = () => (
  <div className="copyfi__possibility section__padding" id="possibility">
    <div className="copyfi__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="copyfi__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>(1) Airdrop aggregator bot.
         (2) Al copy trade bot for defi and futures.
(3)AI bot for arbitrage opportunities on dex and cex.
(4)Multichain Wallet Tracker Bot.
(5)Multichain bridge and Swap.
(6)Mulitchain Portfilio tracker for tokens and Nfts.
(7)Web 3 incubation and marketing services.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default possibility;