import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-text">
        <p>
          We use cookies to enhance your experience, analyze site traffic, and serve tailored content. You can manage your preferences anytime.
        </p>
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
      <div className="cookie-actions">
        <button className="accept-btn" onClick={handleAccept}>
          Accept
        </button>
        <button className="reject-btn" onClick={handleReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
