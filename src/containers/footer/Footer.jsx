import React, { useCallback, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  const isOnPicturePage = location.pathname === "/justmypictures";
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbwmw1ZTAufRP9yMth-2p7jFrVqMdfWq35MNp6NwsSigUDv3le8yrJPwluDzpsRU22hxkA/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Please try again.");
    }
  };

  const handleNavigation = useCallback((e, section) => {
    e.preventDefault();
    
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
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><FaEnvelope /> innovisiontech.ai@gmail.com</p>
          <p><FaPhoneAlt /> +91 7869068581</p>
          <p><FaMapMarkerAlt /> Indore, MP</p>
        </div>

        {/* Contact Form */}
        <div className="footer-column center-form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </div>
            <textarea name="message" placeholder="Type a message..." value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Let's Get Started →</button>
          </form>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <p><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></p>
          <p><a href="#whoweare" onClick={(e) => handleNavigation(e, 'whoweare')}>About</a></p>
          <p><a href="#service" onClick={(e) => handleNavigation(e, 'service')}>Services</a></p>
          <p><a href="#blog" onClick={(e) => handleNavigation(e, 'blog')}>Blogs</a></p>
          <p><Link to="/product">AIPlayground</Link></p>
          <p><a href="#portfolio" onClick={(e) => handleNavigation(e, 'portfolio')}>Portfolio</a></p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bar" />
        <p>© 2025 All rights reserved by InnovisionAI</p>
      </div>
    </footer>
  );
}

export default Footer;
