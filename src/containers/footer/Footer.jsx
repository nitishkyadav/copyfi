import React from 'react';
import logo from '../../assets/logo.jpg';
import './footer.css';

const footer = () => (
  <div className="copyfi__footer section__padding">
    <div className="copyfi__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="copyfi__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="copyfi__footer-links">
      <div className="copyfi__footer-links_logo">
        <img src={logo} alt="logo" />
        <p> All Rights Reserved</p>
      </div>
      <div className="copyfi__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="copyfi__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="copyfi__footer-links_div">
        <h4>Get in touch</h4>
        <p>nitishkumar9622@gmail.com</p>
        <p>https://twitter.com/fi_copy</p>
        <p>https://t.me/CopyFiAnn</p>
      </div>
    </div>

    <div className="copyfi__footer-copyright">
      <p>@2023 copyfi. All rights reserved.</p>
    </div>
  </div>
);

export default footer;