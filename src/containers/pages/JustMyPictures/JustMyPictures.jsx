// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './JustMyPictures.css';
// import UserContext from '../../../UserContext';

// import justmy1 from '../../../assets/justmy1.png';
// import justmy2 from '../../../assets/justmy2.png';
// import justmy3 from '../../../assets/justmy3.png';
// import Arrowimg from '../../../assets/Arrowimg.png';
// import Star from '../../../assets/Star.png';
// import collage from '../../../assets/collagee.png';
// import Login from '../Login/Login';
// import Vector from '../../../assets/Vector.png';
// import Footer from '../../../containers/footer/Footer';

// const ML_BASE_URL = "https://tel-pending-leo-status.trycloudflare.com";

// export default function JustMyPictures() {
//   const { user, setUser } = useContext(UserContext);
//   const [zipFile, setZipFile] = useState(null);
//   const [refImage, setRefImage] = useState(null);
//   const [result, setResult] = useState(null);
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [folderName, setFolderName] = useState('');
//   const [showLogin, setShowLogin] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem("token");

//       // Try manual (JWT) login first
//       if (token) {
//         try {
//           const res = await axios.get("https://innovisionai-backend-1.onrender.com/api/auth/me", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setUser(res.data);
//           return;
//         } catch {
//           // Token might be expired or invalid
//         }
//       }

//       // Then try Google login (cookie/session-based)
//       try {
//         const res = await axios.get("https://innovisionai-backend-1.onrender.com/api/auth/me", {
//           withCredentials: true, // only send cookies
//         });
//         setUser(res.data);
//       } catch {
//         setUser(null);
//       }
//     };

//     checkAuth();
//     window.addEventListener('popstate', checkAuth);
//     return () => window.removeEventListener('popstate', checkAuth);
//   }, [setUser]);

//   useEffect(() => {
//     if (!user) {
//       setZipFile(null);
//       setRefImage(null);
//       setResult(null);
//       setStep(1);
//       setError('');
//       setFolderName('');
//       setLoading(false);
//     }
//   }, [user]);

//   const handleZipSubmit = async () => {
//     if (!user) {
//       setShowLogin(true);
//       return;
//     }

//     if (!zipFile) {
//       setError("Please select a ZIP file to upload.");
//       setTimeout(() => setError(""), 2000);
//       return;
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const formData = new FormData();
//       formData.append('file', zipFile);

//       const res = await axios.post('https://innovisionai-backend-1.onrender.com/api/upload-photos', formData, {
//         withCredentials: true,
//       });

//       const folder = res.data.mlResponse.folder_name || 'subfolder_index';
//       setFolderName(folder);
//       setStep(2);
//     } catch (err) {
//       setError("Error uploading ZIP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefSubmit = async () => {
//     if (!refImage || !user) {
//       setError("Please login and select a reference image.");
//       return;
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const formData = new FormData();
//       formData.append('file', refImage);
//       formData.append('folder_name', folderName || 'fallback');

//       const res = await axios.post(
//         'https://innovisionai-backend-1.onrender.com/api/upload-target-image',
//         formData,
//         { withCredentials: true }
//       );

//       setResult(res.data);
//       setStep(3);
//     } catch (err) {
//       setError("Error uploading reference image.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetAll = () => {
//     setZipFile(null);
//     setRefImage(null);
//     setResult(null);
//     setStep(1);
//     setError('');
//   };

//   if (showLogin) {
//     return <Login onClose={() => setShowLogin(false)} />;
//   }

//   return (
//     <>
//       <div className="justmypictures" id='justmypictures'>
//         <header className="header-banner">
//           <h1><span>Just</span> My <b>Pictures</b></h1>
//           <p className="comming-soon">Coming Soon...</p>
//           <p className="subtitle">Sorting Pictures With <span className="ai-highlight">AI</span></p>
//         </header>

//         {user && (
//           <p className="welcome">
//             Welcome {user.username || user.displayName}
//           </p>
//         )}

//         {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

//         <p className="sub-subtitle">Upload Your Files Here</p>

//         {step === 1 && (
//           <div className="upload-area">
//             <input
//               id="zipUpload"
//               type="file"
//               // accept=".zip"
//               // onChange={e => setZipFile(e.target.files[0])}
//             />
//             <br />
//             <p>or drag and drop</p>
//             <br />
//             <button
//               // onClick={handleZipSubmit}
//               disabled={loading}
//             >
//               {loading ? "Uploading..." : "Upload ZIP"}
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="upload-area">
//             <input
//               id="refUpload"
//               type="file"
//               accept="image/*"
//               onChange={e => setRefImage(e.target.files[0])}
//             />
//             <br /><br /><br />
//             <button
//               onClick={handleRefSubmit}
//               disabled={loading}
//             >
//               {loading ? "Uploading..." : "Upload Reference"}
//             </button>
//           </div>
//         )}

//         {step === 3 && result && (
//           <div className="results-preview">
//             <h3>Sorted Results</h3>
//             <div className="image-list">
//               {result.images?.length > 0
//                 ? result.images.map((img, i) => (
//                   <img key={i} src={`${ML_BASE_URL}${img}`} alt={`result-${i}`} />
//                 ))
//                 : <p>No sorted images found.</p>}
//             </div>
//             <button onClick={resetAll} style={{ marginTop: '2rem', background: '#333' }}>
//               Start Over
//             </button>
//           </div>
//         )}

//         <div className="how-it-works">
//           <p className="quote">“Let AI Do The Sorting For You!”</p>
//           <div className="how-it-works-images">
//             <div>
//               <img src={justmy1} alt="justmy1" />
//               <p>Picture File</p>
//             </div>
//             <div className="arrow-container">
//               <img src={Arrowimg} alt="Arrow" className="arrow" />
//             </div>
//             <div>
//               <img src={justmy2} alt="Reference" />
//               <p>Reference Picture</p>
//             </div>
//             <div className="arrow-container">
//               <img src={Arrowimg} alt="Arrow" className="arrow" />
//             </div>
//           </div>
//           <div className='sorted'>
//             <img src={Star} alt="sorted" />
//             <img src={justmy3} alt="sorted" />
//           </div>
//         </div>

//         <div className="gradient-strip"></div>
//         <div className='How-works'>
//           <div className='howitworks'>
//             <h1>Just My Pictures</h1>
//             <p1>Just My Pictures is a smart, privacy-first web app that helps you find all the photos of a specific person from a large album — in seconds. Perfect for weddings, trips, or events, it uses face recognition to extract only the pictures you care about without storing your data.</p1>
//           </div>
//           <div className='collage'>
//             <img src={collage} alt="Collage" />
//             <div className='collage-text'>
//               <h1>How It Works?</h1>
//               <p>To get started, simply upload a ZIP folder containing your photos along with 1–2 reference images of the person you want to find. Our AI scans the album, detects faces, and matches them with the reference images. Within seconds, you’ll get a preview of all the photos that contain the selected person. You can then download just those matched images — and all data is automatically deleted after processing to ensure privacy.</p>
//             </div>
//           </div>
//           <div className='vector'>
//             <img src={Vector} alt="Vector" />
//           </div>
//         </div>
//       </div>

//       <div className='margin'>
//         <span> .</span>
//       </div>
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './JustMyPictures.css';
import UserContext from '../../../UserContext';

import justmy1 from '../../../assets/justmy1.png';
import justmy2 from '../../../assets/justmy2.png';
import justmy3 from '../../../assets/justmy3.png';
import Arrowimg from '../../../assets/Arrowimg.png';
import Star from '../../../assets/Star.png';
import collage from '../../../assets/collagee.png';
import Login from '../Login/Login';
import Vector from '../../../assets/Vector.png';
import Footer from '../../../containers/footer/Footer';

const BACKEND_BASE_URL = "https://innovisionai-backend-1.onrender.com";

export default function JustMyPictures() {
   const { user, setUser } = useContext(UserContext);
  const [zipFile, setZipFile] = useState(null);
  const [refImage, setRefImage] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [sortedImages, setSortedImages] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${BACKEND_BASE_URL}/api/auth/me`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };

    checkAuth();
    window.addEventListener('popstate', checkAuth);
    return () => window.removeEventListener('popstate', checkAuth);
  }, [setUser]);

  useEffect(() => {
    if (!user) {
      resetAll();
    }
  }, [user]);

  const handleZipSubmit = async () => {
    if (!user) return setShowLogin(true);
    if (!zipFile) {
      setError("Please select a ZIP file to upload.");
      return;
    }

    setLoading(true);
    setError('');
    try {
      await axios.get(`${BACKEND_BASE_URL}/`);

      const formData = new FormData();
      formData.append('file', zipFile);

      const res = await axios.post(`${BACKEND_BASE_URL}/api/upload-photos`, formData, {
        withCredentials: true,
        timeout: 120000,
        headers: { 'Content-Type': 'multipart/form-data' },
        maxBodyLength: Infinity,
        maxContentLength: Infinity
      });

     const folder = res.data.mlResponse?.folder_name || res.data.mlResponse?.output;
       if (!folder) {
        setError("No folder name/id returned from upload.");
        setLoading(false);
        return;
      }

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

    // ⬆️ Upload the reference image
    const res = await axios.post(
      `${BACKEND_BASE_URL}/api/upload-target-image`,
      formData,
      { withCredentials: true }
    );

     const folderId = res.data.folder_id || res.data.output || folderName;
    console.log("🎯 Reference image upload result:", res.data);

    if (!folderId) {
        setError("No folder ID returned.");
        setLoading(false);
        return;
      }

    // ✅ After ML processing, fetch sorted image list from backend
     const sortedRes = await axios.get(`${BACKEND_BASE_URL}/api/drive/get-images/${folderId}`);

      const images = sortedRes.data.images || [];

      // Filter duplicates by name (case insensitive)
      const uniqueImagesMap = new Map();
      for (const img of images) {
        const lowerName = img.name.toLowerCase();
        if (!uniqueImagesMap.has(lowerName)) {
          uniqueImagesMap.set(lowerName, img);
        }
      }
      const uniqueImages = Array.from(uniqueImagesMap.values());

      // Sort images by name (case insensitive)
      uniqueImages.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

      setSortedImages(uniqueImages);
      setStep(3);

  } catch (err) {
    console.error("❌ Ref image error:", err?.response?.data || err.message);
    setError("Error uploading reference image.");
  } finally {
    setLoading(false);
  }
};

  const downloadSortedZip = async () => {
    if (!sortedImages || sortedImages.length === 0) {
      setError("No images to download");
      return;
    }
    try {
      // Use file IDs for backend to zip only sorted images
      const fileIds = sortedImages.map(img => img.id);

      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/drive/download-zip`,
        { fileIds },
        { responseType: 'blob', withCredentials: true }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'sorted-images.zip');
      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      console.error("Error downloading ZIP:", error);
      setError("Failed to download ZIP file.");
    }
  };

  const resetAll = () => {
    setZipFile(null);
    setRefImage(null);
    setFolderName('');
    setSortedImages([]);
    setStep(1);
    setError('');
  };


  if (showLogin) return <Login onClose={() => setShowLogin(false)} />;

  return (
    <>
      <div className="justmypictures" id='justmypictures'>
        <header className="header-banner">
          <h1><span>Just</span> My <b>Pictures</b></h1>
          <p className="comming-soon">Coming Soon...</p>
          <p className="subtitle">Sorting Pictures With <span className="ai-highlight">AI</span></p>
        </header>

        {user && <p className="welcome">Welcome {user.username || user.displayName}</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <p className="sub-subtitle">Upload Your Files Here</p>

        {step === 1 && (
          <div className="upload-area">
            <input type="file" accept=".zip" onChange={e => setZipFile(e.target.files[0])} />
            <p>or drag and drop</p>
            <button onClick={handleZipSubmit} disabled={loading}>
              {loading ? "Uploading..." : "Upload ZIP"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="upload-area">
            <input type="file" accept="image/*" onChange={e => setRefImage(e.target.files[0])} />
            <button onClick={handleRefSubmit} disabled={loading}>
              {loading ? "Uploading..." : "Upload Reference"}
            </button>
          </div>
        )}

        {step === 3 && sortedImages.length > 0 && (
          <div className="results-preview">
            <h3>Sorted Results</h3>
            <div className="image-grid">
              {sortedImages.map((img, i) => (
                <a key={i} href={img.webViewLink} target="_blank" rel="noopener noreferrer">
                  <img src={img.webContentLink} alt={img.name} />
                </a>
              ))}
               <button
                onClick={downloadSortedZip}
                style={{ marginTop: '1rem', background: '#28a745', color: 'white' }}
              >
                📥 Download All as ZIP
              </button>
            </div>
            <button onClick={resetAll} style={{ marginTop: '2rem', background: '#333' }}>
              Start Over
            </button>
          </div>
        )}

       
        <div className="how-it-works">
          <p className="quote">“Let AI Do The Sorting For You!”</p>
          <div className="how-it-works-images">
            <div><img src={justmy1} alt="justmy1" /><p>Picture File</p></div>
            <div className="arrow-container"><img src={Arrowimg} alt="Arrow" className="arrow" /></div>
            <div><img src={justmy2} alt="Reference" /><p>Reference Picture</p></div>
            <div className="arrow-container"><img src={Arrowimg} alt="Arrow" className="arrow" /></div>
          </div>
          <div className='sorted'>
            <img src={Star} alt="sorted" />
            <img src={justmy3} alt="sorted" />
          </div>
        </div>

        <div className="gradient-strip"></div>
        <div className='How-works'>
          <div className='howitworks'>
            <h1>Just My Pictures</h1>
            <p>Just My Pictures is a smart, privacy-first web app that helps you find all the photos of a specific person from a large album — in seconds. Perfect for weddings, trips, or events, it uses face recognition to extract only the pictures you care about without storing your data.</p>
          </div>
          <div className='collage'>
            <img src={collage} alt="Collage" />
            <div className='collage-text'>
              <h1>How It Works?</h1>
              <p>To get started, simply upload a ZIP folder containing your photos along with 1–2 reference images of the person you want to find. Our AI scans the album, detects faces, and matches them with the reference images. Within seconds, you’ll get a preview of all the photos that contain the selected person. You can then download just those matched images — and all data is automatically deleted after processing to ensure privacy.</p>
            </div>
          </div>
          <div className='vector'>
            <img src={Vector} alt="Vector" />
          </div>
        </div>
      </div>

      <div className='margin'><span>.</span></div>
      <Footer />
    </>
  );
}
