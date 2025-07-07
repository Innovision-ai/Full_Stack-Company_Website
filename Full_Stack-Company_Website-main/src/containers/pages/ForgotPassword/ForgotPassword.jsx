import React, { useState } from "react";
import axios from "axios";
import "../Signup/Signup.css"; // Reuse same styles

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    if (!email) {
      setMessage("Email is required");
      return;
    }
    try {
      await axios.post("https://innovisionai-backend-1.onrender.com/api/auth/forgot-password/send-otp", {
        email,
      });
      setStep(2);
      setMessage("! OTP sent to your email");
    } catch (err) {
      setMessage(err.response?.data || "Failed to send OTP");
    }
  };

  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      setMessage("Please enter OTP and new password");
      return;
    }

    try {
      await axios.post("http://localhost:3333/api/auth/forgot-password/reset", {
        email,
        otp,
        newPassword,
      });
      setMessage("! Password reset successful! You can now log in.");
      setTimeout(() => {
        onClose(); // close modal after success
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data || "Failed to reset password");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="special-button-1">
        <h2>Forgot Password</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="button-wrapper">
            <button onClick={handleSendOtp}>Send OTP</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
             <div className="button-wrapper">
            <button onClick={handleResetPassword}>Reset Password</button>
            </div>
          </>
        )}
</div>
        {message && (

          <p className={message.includes("!") ? "gradient-message" : "error-message"}>{message}</p>
          
        )}
      </div>
    </div>
  );
}
