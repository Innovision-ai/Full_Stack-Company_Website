// // frontend/components/Navbar.jsx
// import React, { useState, useEffect, useContext, useCallback } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import axios from 'axios';
// import logo1 from '../../assets/logo1.png';
// import './navbar.css';
// import UserContext from '../../UserContext';
// import Signup from '../../containers/pages/Signup/Signup';
// import Login from '../../containers/pages/Login/Login';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const { user, setUser } = useContext(UserContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isOnPicturePage = location.pathname === "/justmypictures";

// useEffect(() => {
//   const token = localStorage.getItem("token");

//   axios.get("http://localhost:3333/api/auth/me", {
//     headers: token ? { Authorization: `Bearer ${token}` } : {},
//     withCredentials: true, // still send cookies for Google users
//   })
//     .then(res => setUser(res.data))
//     .catch(() => setUser(null));
// }, [setUser]);

// const handleLogout = () => {
//   // Remove JWT token (for manual login users)
//   localStorage.removeItem("token");

//   // Call backend logout (for Google OAuth users)
//   axios.get("http://localhost:3333/api/auth/logout", { withCredentials: true })
//     .then(() => {
//       setUser(null);
//       navigate("/justmypictures");
//     })
//     .catch(err => {
//       console.error("Logout error:", err);
//     });
// };


//   const renderActionButton = () => {
//     if (!isOnPicturePage) {
//       return <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>CONTACT US</button>;
//     }

//     if (user) {
//       return (
//         <>
//            <div className='signup-login-buttons'>
//           <button onClick={handleLogout}>LOGOUT</button>
//            </div>
//         </>
//       );
//     }

//     return (
//       <>
//       <div className='signup-login-buttons'>
//         {/* <button onClick={() => setShowSignup(true)}>SIGNUP</button> */}
//         <button onClick={() => setShowLogin(true)} style={{ marginLeft: '8px' }}>LOGIN</button>
//         </div>
//       </>
//     );
//   };

//   const handleNavigation = useCallback((e, section) => {
//     e.preventDefault();
//     setToggleMenu(false); // Close menu immediately

//     // Debounce navigation
//     setTimeout(() => {
//       if (isOnPicturePage) {
//         window.location.href = `/#${section}`;
//       } else {
//         const element = document.querySelector(`#${section}`);
//         if (element) {
//           element.scrollIntoView({ behavior: 'auto' }); // Change from smooth to auto on mobile
//         }
//       }
//     }, 100);
//   }, [isOnPicturePage]);

//   // Add this utility function
//   const isMobile = () => window.innerWidth <= 768;

//   return (
//     <>
//       <div className="inv__navbar" id='home'>
//         <div className="inv__navbar-links_logo">
//           <img src={logo1} alt="logo" />
//         </div>

//         <div className="inv__navbar-contact">
//           <p><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></p>
//           <p><a href="#Whoweare" onClick={(e) => handleNavigation(e, 'Whoweare')}>ABOUT</a></p>
//           <p><a href="#service" onClick={(e) => handleNavigation(e, 'service')}>SERVICES</a></p>
//           {/* {!isOnPicturePage && (
//             <>
//               <p><a href="#portfolio">PORTFOLIO</a></p>
//               <p><a href="#blog">BLOG</a></p>
//             </>
//           )} */}
//           <p><Link to="/justmypictures">JustMyPictures</Link></p>
//           <div className="inv__navbar-contact_button">
//             {renderActionButton()}
//           </div>
//         </div>

//         <div className="inv__navbar-menu">
//           {toggleMenu
//             ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
//             : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
//           }
//           {toggleMenu && (
//             <div className="inv__navbar-menu_container ">
//               <p>
//                 <a href="#home" onClick={(e) => {
//                   handleNavigation(e, 'home');
//                   if (isMobile()) {
//                     setToggleMenu(false);
//                   }
//                 }}>
//                   Home
//                 </a>
//               </p>
//               <p>
//                 <a href="#Whoweare" onClick={(e) => {
//                   handleNavigation(e, 'Whoweare');
//                   setToggleMenu(false);
//                 }}>
//                   ABOUT
//                 </a>
//               </p>
//               <p>
//                 <a href="#service" onClick={(e) => {
//                   handleNavigation(e, 'service');
//                   setToggleMenu(false);
//                 }}>
//                   SERVICES
//                 </a>
//               </p>
//               {!isOnPicturePage && (
//                 <>
//                   <p><a href="#portfolio" onClick={() => setToggleMenu(false)}>PORTFOLIO</a></p>
//                   <p><a href="#blog" onClick={() => setToggleMenu(false)}>BLOG</a></p>
//                 </>
//               )}
//               <p><Link to="/justmypictures" onClick={() => setToggleMenu(false)}>JustMyPictures</Link></p>
//               {renderActionButton()}
//             </div>
//           )}
//         </div>
//       </div>

//       {showSignup && <Signup onClose={() => setShowSignup(false)} />}
//       {showLogin && <Login onClose={() => setShowLogin(false)} />}
//     </>
//   );
// };

// export default Navbar;

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
      if (isOnPicturePage) {
        window.location.href = `/#${section}`;
      } else {
        const element = document.querySelector(`#${section}`);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    }, 100);
  }, [isOnPicturePage]);

  return (
    <>
      <div className="inv__navbar" id="home">
        {/* LEFT */}
        <div className="inv__navbar-left">
          <img src={logo1} alt="logo"  onClick={(e) => handleNavigation(e, 'home')} />
        </div>

        {/* CENTER */}
        <div className="inv__navbar-center">
          <p><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></p>
          <p><a href="#whoweare" onClick={(e) => handleNavigation(e, 'whoweare')}>About</a></p>
          <p><a href="#service" onClick={(e) => handleNavigation(e, 'service')}>Services</a></p>
               <p><a href="#blog" onClick={(e) => handleNavigation(e, 'blogs')}>Blogs</a></p>
          <p><Link to="/justmypictures">Products</Link></p>
               <p><a href="#portfolio" onClick={(e) => handleNavigation(e, 'portfolio')}>Portfolio</a></p>
        </div>

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
              <p><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></p>
              <p><a href="#whoweare" onClick={(e) => handleNavigation(e, 'whoweare')}>About</a></p>
              <p><a href="#service" onClick={(e) => handleNavigation(e, 'service')}>Services</a></p>
              <p><a href="#blog" onClick={(e) => handleNavigation(e, 'blogs')}>Blogs</a></p>
              <p><Link to="/justmypictures">Products</Link></p>
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
