import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-glass">
        <div className="footer-row">
          <div className="footer-col footer-contact">
            <h2>
              <span className="footer-accent">Get in Touch</span>
            </h2>
            <ul className="footer-info-list">
              <li>
                <span className="footer-info-icon">
                  <svg width="20" height="20" fill="none"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="#A4EFF2" strokeWidth="2"/><path d="M2 4l8 7 8-7" stroke="#A4EFF2" strokeWidth="2"/></svg>
                </span>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </li>
              <li>
                <span className="footer-info-icon">
                  <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="8" stroke="#A4EFF2" strokeWidth="2"/><path d="M10 6v4l2 2" stroke="#A4EFF2" strokeWidth="2"/></svg>
                </span>
                <a href="tel:+1234567890">9292929292</a>
              </li>
              <li>
                <span className="footer-info-icon">
                  <svg width="20" height="20" fill="none"><path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="#A4EFF2" strokeWidth="2"/><circle cx="10" cy="8" r="2" fill="#A4EFF2"/></svg>
                </span>
                <span>Jaipur,Rajasthan</span>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-form-col">
            <form className="footer-form" onSubmit={e => e.preventDefault()}>
              <div className="footer-form-row">
                <input className="footer-input" type="text" placeholder="Name" required />
                <input className="footer-input" type="email" placeholder="Email" required />
              </div>
              <textarea className="footer-textarea" placeholder="Message" required />
              <button className="footer-btn" type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-glow-line"></div>
          <span>
            &copy; {new Date().getFullYear()} InnoVision.AI &mdash; All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
