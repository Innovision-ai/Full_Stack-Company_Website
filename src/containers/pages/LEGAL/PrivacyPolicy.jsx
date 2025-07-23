// src/pages/PrivacyPolicy.jsx
import React from 'react';
import './Legal.css'; // style separately
import Footer from '../../footer/Footer.jsx';
const PrivacyPolicy = () => {
  return (
    <>
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> July 23, 2025</p>

      <p>Welcome to InnovisonTech. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our website and use our AI-based tools and services.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> such as name, email address (if provided).</li>
        <li><strong>Uploaded Content:</strong> such as photos, sketches, or text input for AI tools.</li>
        <li><strong>Usage Data:</strong> device info, browser type, IP address, interaction patterns.</li>
        <li><strong>Cookies:</strong> We use cookies for analytics, functionality, and ad services (if applicable).</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>To deliver AI-generated results based on user input.</li>
        <li>To improve performance, user experience, and service quality.</li>
        <li>To display personalized or contextual advertisements.</li>
      </ul>

      <h2>3. Data Sharing & Storage</h2>
      <ul>
        <li>We do <strong>not sell</strong> your data.</li>
        <li>Uploaded content may be processed using third-party APIs or LLMs to provide results.</li>
        <li>Data may be temporarily stored to improve services but is not kept beyond what is necessary.</li>
      </ul>

      <h2>4. User Rights</h2>
      <ul>
        <li>You can request deletion of your data at any time.</li>
        <li>You may opt-out of non-essential cookies through our cookie banner.</li>
      </ul>

      <h2>5. Security</h2>
      <p>We implement security measures to protect your data. However, please understand that no method of transmission over the internet is 100% secure.</p>

      <h2>6. Third-Party Services</h2>
      <p>Our services may use third-party platforms like OpenAI (for LLM chatbot), image APIs, and advertising services like Google AdSense. Their privacy policies apply as well.</p>

      <h2>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. You will be notified through this page.</p>

      <h2>8. Contact</h2>
      <p>If you have any questions, please contact us at: <a href="mailto:innovisiontech@gmail.com">innovisiontech@gmail.com</a></p>

    </div>
     <div className='margin'><span> .</span></div>
        <Footer />
</>
  );
};

export default PrivacyPolicy;
