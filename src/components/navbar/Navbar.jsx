import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="inv__navbar">
      <div className="inv__navbar-links">
        <div className="inv__navbar-links_logo">
         <img src={logo1} alt='logo'/>
        </div>
      </div>

      <div className="inv__navbar-contact">
        <p><a href="#home">HOME</a></p>
        <p><a href="#Whoweare">ABOUT</a></p>
        <p><a href="#service">SERVICE</a></p>
        <p><a href="#portfolio">PORTFOLIO</a></p>
        <p><a href="#blog">BLOG</a></p>
        <div className="inv__navbar-contact_button">
          <button type="button">
            Contact Us
          </button>
        </div>
      </div>

      <div className="inv__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="inv__navbar-menu_container scale-up-center">
            <div className="inv__navbar-menu_container-links">
              <p><a href="#home">HOME</a></p>
              <p><a href="#winv">ABOUT</a></p>
              <p><a href="#possibility">SERVICE</a></p>
              <p><a href="#features">PORTFOLIO</a></p>
              <p><a href="#blog">BLOG</a></p>
            </div>
            <div className="inv__navbar-menu_container-links-contact">
              <button type="button">
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


