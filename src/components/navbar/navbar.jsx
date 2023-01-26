import React,{usestate} from 'react'
import { RiMenu3Line} from 'react-icons/ri'; 
import { RicloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const Menu =() => (
    <>
    <p><a href="#home">Home</a></p>
                 <p><a href="#Wcopyfi">What is copyfi?</a></p>
                 <p><a href="#Feature">Feature</a></p>
                 <p><a href="#blog">Blog</a></p>
                 <p><a href="#possibility">Resources</a></p> 
                 
    </>             
) 




const navbar = () => {
    

 return (
        <div className="copyfi__navbar">
            <div className="copyfi__navbar-links">
                <div className="copyfi__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="copyfi__navbar-links_container">
                 <p><a href="#home">Home</a></p>
                 <p><a href="#Wcopyfi">What is copyfi?</a></p>
                 <p><a href="#Feature">Feature</a></p>
                 <p><a href="#blog">Blog</a></p>
                 <p><a href="#possibility">Resources</a></p> 
                </div>
            </div>
            <div className="copyfi__navbar-sign">
                <p>sign in</p>
                <button type="button">sign up</button>
            </div>
        </div>
    )
}

export default  navbar