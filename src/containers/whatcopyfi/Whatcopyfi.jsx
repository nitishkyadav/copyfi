import React from 'react';
import { Feature } from '../../components';
import card from '../../assets/card.webp';
import './whatcopyfi.css';

const Whatcopyfi = () => {
    return(
        <div className="copyfi__whatcopyfi section__margin"  id="Wcopyfi">
            <div className="copyfi__whatcopyfi-feature">
                <Feature title="What is CopyFi" text="CopyFi ia an ecosystem with wide variety of essential features and services required for any crypto trader for effectively managing thier trades and portfolio"/>
                <div className="copyfi__header-image">
            <img src={card} alt="card" />
          </div>
            </div>
            <div className="copyfi__whatcopyfi-heading">
                <h1 className="gradient__text"> The possibilities are beyound your imagination"</h1>
                <p>Explore The Library</p>
            </div>
            <div className="copyfi__whatcopyfi-container">
                
              <Feature title="Airdrop aggregator bot" text="Recent airdrops like optimism and aptos have shown how much wealth can be
made just by doing some simple tasks and being eligible for those airdrops.
Look no further. The holders of our token would have access to the airdrop
aggregator bot which will gather various upcoming and ongoing airdrop
opportunities available across twitter and telegram and aggregate them and
share them in the bot"/>
              <Feature title="AI BOT" text="Our AI bot will examine prices across exchanges and notify the holders of our
token in order to take advantage of any price discrepancies. Because the price
of a cryptocurrencies tends to vary somewhat from exchange to exchange,
bots that can move fast enough can give substantial profits to the traders"/>
              <Feature title="COPY TRADE BOT FOR DEFI AND FUTURES" text="For any new and old trader sometimes it is difficult to keep up with fast pace
of how the space moves and to understand the dynamics of how the defi and
CEX trading works. We are developing a bot for the holders of our token using
which they can follow whale wallets or any other wallet they wish to follow and
copy their trades across both the spectrum of crypto space i.e DEFI and CEXs."/>
            </div>
        </div>
    )
}


export default Whatcopyfi