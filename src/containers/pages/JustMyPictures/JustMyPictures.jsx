import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './JustMyPictures.css';
import UserContext from '../../../UserContext';
import justmy1 from '../../../assets/justmy1.png';
import justmy2 from '../../../assets/justmy2.png';
import justmy3 from '../../../assets/justmy3.png';
import Login from '../Login/Login';

const ML_BASE_URL = "https://cv-tremendous-coral-cause.trycloudflare.com";

export default function JustMyPictures() {
  const { user, setUser } = useContext(UserContext);
  const [zipFile, setZipFile] = useState(null);
  const [refImage, setRefImage] = useState(null);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");

      axios.get("http://localhost:3333/api/auth/me", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        withCredentials: true,
      })
        .then(res => setUser(res.data))
        .catch(() => setUser(null));
    };

    checkAuth();
    window.addEventListener('popstate', checkAuth);
    return () => window.removeEventListener('popstate', checkAuth);
  }, [setUser]);

  // Add this effect to watch for user changes
  useEffect(() => {
    if (!user) {
      // Clear all states when user logs out
      setZipFile(null);
      setRefImage(null);
      setResult(null);
      setStep(1);
      setError('');
      setFolderName('');
      setLoading(false);
    }
  }, [user]);

  const handleZipSubmit = async () => {
    if(!user) {
      setShowLogin(true);
      return;
    }
    if (user && !zipFile) {
      setError("Please select a ZIP file to upload.");
      return;
    }

    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', zipFile);

      const res = await axios.post('http://localhost:3333/api/upload-photos', formData, {
        withCredentials: true,
      });

      const folder = res.data.mlResponse.folder_name || 'subfolder_index';
      setFolderName(folder);
      setStep(2);
    } catch (err) {
      setError("Error uploading ZIP.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefSubmit = async () => {
    if (!refImage || !user) {
      setError("Please login and select a reference image.");
      return;
    }

    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', refImage);
      formData.append('folder_name', folderName || 'fallback');

      const res = await axios.post(
        'http://localhost:3333/api/upload-target-image',
        formData,
        { withCredentials: true }
      );

      setResult(res.data);
      setStep(3);
    } catch (err) {
      setError("Error uploading reference image.");
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    setZipFile(null);
    setRefImage(null);
    setResult(null);
    setStep(1);
    setError('');
  };

  if (showLogin) {
    return <Login onClose={() => setShowLogin(false)} />;
  }

  return (
    <div className="justmypictures">
      <header className="header-banner">
        <h1><span>Just</span> My <b>Pictures</b></h1>
        <p className="subtitle">Sorting Pictures With <span className="ai-highlight">AI</span></p>
        <p className="sub-subtitle">Upload Your Files Here</p>
      </header>

      {/* Remove the welcome message and only show when logged in */}
      {user && (
        <p className="welcome">
          Welcome, {user.username || user.displayName}!
        </p>
      )}

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {step === 1 && (
        <div className="upload-area">
          <input
            id="zipUpload"
            type="file"
            accept=".zip"
            onChange={e => setZipFile(e.target.files[0])}
          />
          <p>or drag and drop</p>
          <button
            onClick={() => {
              if (!user) {
                setShowLogin(true);
              } else {
                handleZipSubmit();
              }
            }}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload ZIP"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="upload-area">
          <input
            id="refUpload"
            type="file"
            accept="image/*"
            onChange={e => setRefImage(e.target.files[0])}
          />
          <button
            onClick={() => {
              if (!user) {
                setShowLogin(true);
              } else {
                handleRefSubmit();
              }
            }}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Reference"}
          </button>
        </div>
      )}

      {step === 3 && result && (
        <div className="results-preview">
          <h3>Sorted Results</h3>
          <div className="image-list">
            {result.images?.length > 0
              ? result.images.map((img, i) => (
                  <img key={i} src={`${ML_BASE_URL}${img}`} alt={`result-${i}`} />
                ))
              : <p>No sorted images found.</p>}
          </div>
          <button onClick={resetAll} style={{ marginTop: '2rem', background: '#333' }}>
            Start Over
          </button>
        </div>
      )}

      <div className="how-it-works">
        <p className="quote">“Let AI Do The Sorting For You!”</p>
        <div className="how-it-works-images">
          <div>
            <img src={justmy1} alt="justmy1" />
            <p>Picture File</p>
          </div>
          <div className="arrow">➡️</div>
          <div>
            <img src={justmy2} alt="Reference" />
            <p>Reference Picture</p>
          </div>
        </div>
        <div className='sorted'>
          <img src={justmy3} alt="sorted" />
        </div>
      </div>
    </div>
  );
}
