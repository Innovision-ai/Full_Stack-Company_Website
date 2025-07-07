// frontend/containers/pages/JustMyPictures/Signup/Signup.jsx
import React, { useState, memo, useCallback, useMemo } from "react";
import axios from "axios";
import "./Signup.css";
import Login from "../Login/Login";
import { IoClose } from "react-icons/io5";
import googleicon from '../../../assets/google-icon.png';
import { useForm } from 'react-hook-form';

const Signup = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [username, setusername] = useState("");
  const [loading, setLoading] = useState(false);

  


  const handleSendOtp = async () => {
    if (!email.includes('@')) {
      setMessage("Please enter a valid email");
      return;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return;
    }
    if (!username || !email || !password) {
      setMessage("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://innovisionai-backend-1.onrender.com/api/auth/send-otp", {
        username,
        email,
        password,
      });
      setStep(2);
      setMessage("! OTP sent to your email");
    } catch (err) {
      setMessage(err.response?.data || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setMessage("Please enter the OTP");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://innovisionai-backend-1.onrender.com/api/auth/verify-otp", {
        email,
        otp,
      });
      setMessage("! Signup successful! You can now login.");
      setStep(3);
      setTimeout(() => {
        onClose(); // Close the modal after success
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };
  const loginWithGoogle = () => {
    window.open("https://innovisionai-backend-1.onrender.com/api/auth/google", "_self");
  };


  // ✅ If user wants to switch to login
  if (showLogin) {
    return <Login onClose={onClose} />;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="special-button">
    <button className="modal-close" onClick={onClose} aria-label="Close">
  X
</button>
  <div className="special-button-1">
        <h2>Sign Up</h2>

        {step === 1 && (
          <>
          <div className="form-group">
          <p>User Name</p>
           <input
              type="name"
              placeholder="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
              <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="button-wrapper">
            <button onClick={handleSendOtp} disabled={loading}>{loading ? "Sending OTP..." : "Send OTP"}</button>
            </div>
            <div className="divider">
             <hr />
              <span>Login With</span>
              <hr />
            </div>
            
            <p className="google-button" onClick={loginWithGoogle}>
              <img src={googleicon} alt="Google Icon" />
            </p>
            
            <p className="already">Have an account?{" "}
              <a className="link-button" onClick={() => setShowLogin(true)}>
                LOGIN
              </a>
            </p>
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
            <div className="button-wrapper">
            <button onClick={handleVerifyOtp}  disabled={loading}>{loading ? "Verifying OTP..." : "Verify OTP"}</button>
            </div>
          </>
        )}

        <p className={message.includes("!") ? "gradient-message" : "error-message"}>
  {message}
</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default memo(Signup);





