import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
      title: 'WHY WE ARE UNIQUE?',
      text: 'We have a saying within our team which goes like this, you want something go for it no matter the outcome and thats exactly what we are doing with CopyFi. With that thought process and aim in our mind, we are aiming to build a safe and secure ecosystem of all the tools and services under one roof which makes us unique in the space.',
    },
    {
      title: 'MULTICHAIN BRIDGE & SWAP',
      text: 'We are working with a well known team and developing an anonymous white label cross chain bridge and swapping feature with the lowest transaction fees and integration.',
    },
    {
      title: 'MULTICHAIN PORTFOLIO TRACKER',
      text: 'Our DeFi portfolio tracker that supports 365 DeFi farms across 25 blockchains.',
    },
    {
      title: 'INCUBATION AND MARKETING SERVICES',
      text: 'Web3 is the future and we must take advantage of it. The development team, perfectly prepared in the sector, through its rigorous selection process, would help and bring different projects under our Incubation program and would help them from it',
    }
  ];
  


const Features =() => {
    return(
        <div className="copyfi_features section__padding" id="Feature">
            <div className="copyfi__features-heading">
                <h1 className="gradient__text">The future is Now and you just Need To Realize it. Step into future Today & Make it Happen</h1>
                <p>Request Early to Get started</p>
            </div>
            <div className="copyfi__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
        </div>
    )
}

export default Features