import React from "react";
import "./footer.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer">
    <footer className="footer">
      <div className="footer-main">
        {/* Contact Section */}
        <div className="footer-contact">
          <h3 className="footer-title">Get in Touch</h3>
          <ul className="footer-contact-list">
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:9292929292">9292929292</a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Jaipur, Rajasthan</span>
            </li>
          </ul>
          <form className="footer-form">
            <div className="footer-form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><FaChevronRight className="footer-link-icon" /><a href="#home">Home</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#Whoweare">About us</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#service">Services</a></li>
            </ul>
          </div>
          <div>
            <h4>Our Services</h4>
            <ul>
              <li><FaChevronRight className="footer-link-icon" /><a href="#">AI-Powered Data Solutions</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#">Machine Learning & Model Development</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#">AI-Driven Automation & Optimization</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#">Generative AI & Large Language Models (LLMs)</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#">Advanced Prompt Engineering</a></li>
              <li><FaChevronRight className="footer-link-icon" /><a href="#">AI-Powered Business Process Optimization</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer-bottom">
        <hr />
        <p>© 2025 InnoVision.AI — All rights reserved.</p>
      </div>
    </footer>
    </section>
  );
}

export default Footer;
