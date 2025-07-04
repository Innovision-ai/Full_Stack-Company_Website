// frontend/containers/pages/JustMyPictures/Login/Login.jsx
import React, { useState, useContext, memo } from "react";
import axios from "axios";
import UserContext from "../../../UserContext";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.css"; // Reuse Signup styles
import Signup from "../Signup/Signup";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import googleicon from '../../../assets/google-icon.png';

export default memo(function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Email and password are required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://innovisionai-backend-1.onrender.com/api/auth/login", {
        email,
        password,
      });

      const { token, username, email: returnedEmail } = res.data;

      localStorage.setItem("token", token);
      setUser({ username, email: returnedEmail }); // ✅ Now username won't be undefined

      setMessage("! Logged in!");
      setTimeout(() => {
        onClose();
        navigate("/justmypictures");
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = () => {
    window.open("https://innovisionai-backend-1.onrender.com/api/auth/google", "_self");
  };

  // ✅ If user clicks "Signup", switch modal
  if (showSignup) {
    return <Signup onClose={onClose} />;
  }

  if (showForgot) return <ForgotPassword onClose={onClose} />;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="special-button">
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="special-button-1">
            <h2>Login</h2>
            <div className="form-group">
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
              <a className="link-button" onClick={() => setShowForgot(true)}>Forgot Password?</a>
            </div>
            <div className="button-wrapper">
              <button onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
              <p style={{paddingTop:"9px"}}>or</p>
              <div className="divider">
                <hr />
                <span>Login With</span>
                <hr />
              </div>

              <p className="google-button" onClick={loginWithGoogle}>
                <img src={googleicon} alt="Google Icon" />
              </p>

              <p className="already">Don't have an account?{" "}
                <a className="link-button" onClick={() => setShowSignup(true)}>Signup</a>
              </p>
            </div>
            {message && (
               <p className={message.includes("!") ? "gradient-message" : "error-message"}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
})
