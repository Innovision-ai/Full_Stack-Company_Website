import React from 'react';
import "./Legal.css"; // style separately
import Footer from '../../footer/Footer.jsx';
const TermsAndConditions = () => {
  return (
    <>
    <div className="legal-container">
      <h1>Terms and Conditions</h1>

      <p>Last updated: July 23, 2025</p>

      <p>Welcome to InnovisonTech! These terms and conditions outline the rules and regulations for the use of our website and AI tools.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing this website and using our services, including AI tools, chatbots, or image-based applications, you agree to these terms. If you do not agree with any part, please discontinue use of the site.
      </p>

      <h2>2. User Responsibilities</h2>
      <p>
        You are responsible for the accuracy and legality of the data you provide to our tools (e.g. images, text prompts). You must not upload any content that is unlawful, harmful, or infringes on others' rights.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content and tools on InnovisonTech, including text, graphics, code, and AI models, are the property of InnovisonTech and are protected by copyright and other laws.
      </p>

      <h2>4. Limitations of Liability</h2>
      <p>
        InnovisonTech will not be held liable for any damages arising from the use or inability to use our tools, including loss of data, income, or productivity.
      </p>

      <h2>5. Service Changes and Termination</h2>
      <p>
        We reserve the right to modify or discontinue our services (including free/paid tools or accounts) at any time, with or without notice.
      </p>

      <h2>6. Privacy and Data Use</h2>
      <p>
        Please review our <a href="/PrivacyPolicy" style={{ color: 'blue' }}>Privacy Policy</a> to understand how we collect, use, and protect your data.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of India, and any disputes will be handled in Indian courts.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For any questions regarding these terms, you can contact us at <a href="mailto:innovisiontech.ai@gmail.com">innovisiontech.ai@gmail.com</a>.
      </p>
    </div>
    <div className='margin'><span> .</span></div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
