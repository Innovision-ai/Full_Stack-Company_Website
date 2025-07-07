import React, { useState, useEffect } from "react";

const ScrollToTopLinkedIn1 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    container: {
      position: "fixed",
      bottom: "40px",
      right: "40px",
      display: "flex",
      flexDirection: "row-reverse",
      gap: "16px",
      zIndex: 9999,
    },
    upArrow: {
      cursor: "pointer",
      backgroundColor: "#0A66C2",
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      fontSize: "30px",
      color: "#fff",
      boxShadow: "0 4px 12px rgba(10,102,194,0.6)",
      transition: "background-color 0.3s ease",
    },
    linkedinIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      backgroundColor: "#e1e9f8",
      borderRadius: "50%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "background-color 0.3s ease",
      textDecoration: "none",
    },
  };

  const mobileStyles = `
    @media (max-width: 480px) {
      .scroll-container {
        bottom: 20px !important;
        right: 20px !important;
        gap: 12px !important;
      }

      .scroll-up {
        width: 40px !important;
        height: 40px !important;
        font-size: 24px !important;
      }

      .linkedin-btn {
        width: 40px !important;
        height: 40px !important;
      }

      .linkedin-btn svg {
        width: 24px !important;
        height: 24px !important;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      {visible && (
        <div style={styles.container} className="scroll-container">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={styles.upArrow}
            className="scroll-up"
          >
            &#8679;
          </button>
          <a
            href="https://www.linkedin.com/company/innovisiontech/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={styles.linkedinIcon}
            className="linkedin-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#0A66C2"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
              style={{ display: "block" }}
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.3h.07c.67-1.27 2.3-2.6 4.75-2.6 5.08 0 6 3.35 6 7.7V24h-5v-7.7c0-1.85-.03-4.22-2.57-4.22-2.57 0-2.96 2-2.96 4.08V24h-5V8z" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollToTopLinkedIn1;
