// import React, { useState } from "react";
// import "./footer.css";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
// import axios from "axios";

// function Footer() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   const scriptURL = "https://script.google.com/macros/s/AKfycbwmw1ZTAufRP9yMth-2p7jFrVqMdfWq35MNp6NwsSigUDv3le8yrJPwluDzpsRU22hxkA/exec";

//   try {
//     await fetch(scriptURL, {
//       method: "POST",
//       mode: "no-cors", // <-- Important
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     alert("Message sent successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Error sending message. Please try again.");
//   }
// };


//   return (
//     <section id="footer">
//       <footer className="footer">
//         <div className="footer-main">
//           <div className="footer-contact">
//             <h3 className="footer-title">Get in Touch</h3>
//             <ul className="footer-contact-list">
//               <li>
//                 <FaEnvelope className="footer-icon" />
//                 <a href="mailto:hello@example.com">innovisiontech.ai@gmail.com</a>
//               </li>
//               <li>
//                 <FaPhoneAlt className="footer-icon" />
//                 <a href="tel:9292929292">+91 78690 68581</a>
//               </li>
//               <li>
//                 <FaMapMarkerAlt className="footer-icon" />
//                 <span>Indore,MP</span>
//               </li>
//             </ul>

//             {/* ✅ UPDATED FORM */}
//             <form className="footer-form" onSubmit={handleSubmit}>
//               <div className="footer-form-row">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>

//           {/* Links Section */}
//           <div className="footer-links">
//             <div>
//               <h4>Useful Links</h4>
//               <ul>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#home">Home</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#Whoweare">About us</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#service">Services</a></li>
//                  <li><FaChevronRight className="footer-link-icon" /><a href="/justmypictures">JustMyPictures</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4>Our Services</h4>
//               <ul>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#">AI-Powered Data Solutions</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#">Machine Learning & Model Development</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#">AI-Driven Automation & Optimization</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#">Generative AI & Large Language Models (LLMs)</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#">Advanced Prompt Engineering</a></li>
//                 <li><FaChevronRight className="footer-link-icon" /><a href="#">AI-Powered Business Process Optimization</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="footer-bottom">
//           <hr />
//           <p>© 2025 InnoVision.AI — All rights reserved.</p>
//         </div>
//       </footer>
//     </section>
//   );
// }

// export default Footer;

import React, { useState } from "react";
import "./footer.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

function Footer() {
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
            <textarea name="message" placeholder="Type a message……" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Lets Started →</button>
          </form>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li onClick={() => window.location.href = '#home'}>› Home</li>
            <li onClick={() => window.location.href = '#whoweare'}>› About</li>
            <li onClick={() => window.location.href = '#service'}>› Services</li>
            <li onClick={() => window.location.href = '/justmypictures'}>› Products</li>
            <li onClick={() => window.location.href = '#portfolio'}>› Portfolio</li>
          </ul>
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
