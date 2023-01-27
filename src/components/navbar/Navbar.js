import React, { useRef, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RicloseLine } from "react-icons/ri";
import logo from "../../assets/logo-new.png";
import "./navbar.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState("false");
  const [isDataVisible, setIsDataVisible] = useState("false");

  const onClickHandler = () => {
    if (isExpanded === "false") {
      setIsExpanded("true");
      setIsDataVisible("true");
    } else {
      setIsExpanded("false");
      setIsDataVisible("false");
    }
    console.log(isExpanded);
  };

  return (
    <div className="copyfi__navbar">
      <div className="copyfi__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isExpanded}
        onClick={onClickHandler}
      ></button>
      <ul
        id="primary-navigation"
        className="copyfi__navbar-links_container"
        data-visible={isDataVisible}
      >
        <li>
          <a href="#about-copyfi">About CopyFi?</a>
        </li>
        <li>
          <a href="#utilities">Utilities</a>
        </li>
        <li>
          <a href="#tokenomics">Tokenomics</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#possibility">Team</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
