import React, { Fragment } from "react";
import { Feature } from "../../components";
import Utility from "../Utilities/Utility";
import "./AboutCopyFi.css";
import airdrop from "../../assets/utilities/airdrop-64.png";
import tradeBot from "../../assets/utilities/chatgpt/chatgpt-64.png";
import bridge from "../../assets/utilities/multichain-64.png";
import wallet from "../../assets/utilities/wallet-64.png";
import marketing from "../../assets/utilities/marketing-64.png";

const AboutCopyFi = () => {
  const utilitiesData = [
    { image: airdrop, utilName: "Airdrop Aggregator", alt: "airdrop" },
    { utilName: "AI Trade Bot", image: tradeBot, alt: "Trade Bot" },
    {
      utilName: "MultiChain Portfolio Tracker",
      image: wallet,
      alt: "Portfolio Tracker",
    },
    {
      utilName: "MultiChain Bridge and Swap",
      image: bridge,
      alt: "Multichain Bridge and Swap",
    },
    {
      utilName: "Marketing and Incubation Services",
      image: marketing,
      alt: "Marketing and Incubation Services",
    },
  ];

  return (
    <div className="aboutCopyFi_container">
      <div className="copyfi__whatcopyfi" id="Wcopyfi">
        <div className="copyfi__whatcopyfi-feature">
          <div className="aboutCopyFi">
            <h1 className="gradient__text">About CopyFi</h1>
            <p>
              CopyFi ia an Ecosystem with wide variety of essential features and
              Services required for any crypto trader to effectively managing
              their Trades and Portfolios.
            </p>
          </div>
        </div>
        <div className="copyfi__whatcopyfi-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination"
          </h1>
          <p>Explore The Library</p>
        </div>

        <div className="utilities_container">
          <div>
            <h1>CopyFi Utilities</h1>
          </div>

          <div className="utilities">
            {utilitiesData.map((data) => (
              <Utility
                image={data.image}
                utilName={data.utilName}
                alt={data.alt}
              />
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCopyFi;
