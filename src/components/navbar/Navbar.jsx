

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import axios from 'axios';
import logo1 from '../../assets/logo1.png';
import './navbar.css';
import UserContext from '../../UserContext';
import Signup from '../../containers/pages/Signup/Signup';
import Login from '../../containers/pages/Login/Login';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isOnPicturePage = location.pathname === "/justmypictures";
  const isOnPicturePerfect = location.pathname === "/pictureperfect/PhotoEnhancer" || location.pathname === "/pictureperfect/BackgroundRemover";
  const isOnProductPage = location.pathname === "/AIPlayground";
  const isOnLegalPage = location.pathname === "/TermsAndConditions" || location.pathname === "/PrivacyPolicy";
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("https://innovisionai-backend-1.onrender.com/api/auth/me", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      withCredentials: true,
    })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    axios.get("https://innovisionai-backend-1.onrender.com/api/auth/logout", { withCredentials: true })
      .then(() => {
        setUser(null);
        navigate("/justmypictures");
      })
      .catch(err => console.error("Logout error:", err));
  };

  const renderActionButton = () => {
    if (isOnPicturePerfect || isOnLegalPage) {
      return <div className="signup-login-buttons">
        <button onClick={() => navigate("/")}>BACK TO HOME</button>
      </div>;
    }
    
    if (!isOnPicturePage) {
      return <div className="signup-login-buttons">
        <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>CONTACT US</button>
      </div>;
    }

    if (user) {
      return (
        <div className="signup-login-buttons">
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      );
    }

    return (
      <div className="signup-login-buttons">
        <button onClick={() => setShowLogin(true)}>LOGIN</button>
      </div>
    );
  };

  const handleNavigation = useCallback((e, section) => {
    e.preventDefault();
    setToggleMenu(false);
    setTimeout(() => {
      if (isOnPicturePage || isOnPicturePerfect || isOnProductPage || isOnLegalPage) {
        window.location.href = `/#${section}`;
      } else {
        const element = document.querySelector(`#${section}`);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    }, 100);
  }, [isOnPicturePage, isOnPicturePerfect, isOnProductPage, isOnLegalPage]);

  return (
    <>
      <div className="inv__navbar" id="home">
        {/* LEFT */}
        <div className="inv__navbar-left">
          <img src={logo1} alt="logo" onClick={() => isOnPicturePerfect ? navigate("/") : handleNavigation(new Event('click'), 'home')} />
        </div>

        {/* CENTER */}
        {!isOnPicturePerfect && (
          <div className="inv__navbar-center">
            <p><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></p>
            <p><a href="#whoweare" onClick={(e) => handleNavigation(e, 'whoweare')}>About</a></p>
            <p><a href="#service" onClick={(e) => handleNavigation(e, 'service')}>Services</a></p>
            <p><a href="#blog" onClick={(e) => handleNavigation(e, 'blog')}>Blogs</a></p>
            <p><Link to="/AIPlayground">AI PLAYGROUND</Link></p>
            <p><a href="#portfolio" onClick={(e) => handleNavigation(e, 'portfolio')}>Portfolio</a></p>
          </div>
        )}

        {/* Custom center for PicturePerfect */}
        {isOnPicturePerfect && (
          <div className="inv__navbar-center">
            {/* <p><Link to="/">Home</Link></p> */}
            <p>
              <Link 
                to="/pictureperfect/BackgroundRemover" 
                style={location.pathname === "/pictureperfect/BackgroundRemover" ? { textDecoration: 'underline', textUnderlineOffset: '5px' } : {}}
              >
                Background-Remover
              </Link>
            </p>
            <p>
              <Link 
                to="/pictureperfect/PhotoEnhancer" 
                style={location.pathname === "/pictureperfect/PhotoEnhancer" ? { textDecoration: 'underline', textUnderlineOffset: '5px' } : {}}
              >
                Picture-Enhancer
              </Link>
            </p>
          </div>
        )}

        {/* RIGHT */}
        <div className="inv__navbar-right">
          {renderActionButton()}
        </div>

        {/* Mobile Menu */}
        <div className="inv__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="inv__navbar-menu_container scale-up-center">
              {!isOnPicturePerfect ? (
                <>
                  <p><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></p>
                  <p><a href="#whoweare" onClick={(e) => handleNavigation(e, 'whoweare')}>About</a></p>
                  <p><a href="#service" onClick={(e) => handleNavigation(e, 'service')}>Services</a></p>
                  <p><a href="#blog" onClick={(e) => handleNavigation(e, 'blog')}>Blogs</a></p>
                  <p><Link to="/AIPlayground" onClick={() => setToggleMenu(false)}>AI Playground</Link></p>
                </>
              ) : (
                <>
                  <p><Link to="/pictureperfect/BackgroundRemover" onClick={() => setToggleMenu(false)}>Background-Remover</Link></p>
                  <p><Link to="/pictureperfect/PhotoEnhancer" onClick={() => setToggleMenu(false)}>Picture-Enhancer</Link></p>
                </>
              )}
              {renderActionButton()}
            </div>
          )}
        </div>
      </div>

      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
