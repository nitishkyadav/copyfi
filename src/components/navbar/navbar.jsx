import React,{usestate} from 'react'
import { RiMenu3Line} from 'react-icons/ri'; 
import { RicloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';


const navbar = () => {
    

 return (
        <div className="copyfi__navbar">
                <div className="copyfi__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div >
                <div aria-expanded="false" data-visible="false">
                <ul className="copyfi__navbar-links_container" >
                 <li><a href="#home">Home</a></li>
                 <li><a href="#Wcopyfi">What is copyfi?</a></li>
                 <li><a href="#Feature">Feature</a></li>
                 <li><a href="#blog">Blog</a></li>
                 <li><a href="#possibility">Resources</a></li> 
                </ul>
                </div>
            </div>
    )
}

export default  navbar