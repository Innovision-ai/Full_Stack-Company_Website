import React, { useState } from "react";
import "./PhotoEnhancer.css";
import Footer from "../../footer/Footer.jsx";

export default function PhotoEnhancer2() {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enhancingTool, setEnhancingTool] = useState("");
  const [update, setUpdate] = useState(0);
  
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleToolClick = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }
    setUpdate(1); // Set update to 1 to disable the button
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("outscale", "2");
    setLoading(true);
    setEnhancingTool("AI Enhance");
    const startTime = Date.now();

    try {
      const response = await fetch(
        "https://anshmittal1-upscaler.hf.space/upscale",
        {
          method: "POST",
          body: formData,
        }
      );

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`Enhancement took ${duration}s`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Enhancement failed: ${errorText}`);
      }

      const blob = await response.blob();
      const enhancedImageURL = URL.createObjectURL(blob);
      setResultImage(enhancedImageURL);
    } catch (error) {
      console.error("Error:", error);
      alert(`Enhancement failed: ${error.message}`);
    } finally {
      setLoading(false);
      setEnhancingTool("");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resultImage;
    link.download = `enhanced_${imageFile.name}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleReset = () => {
    setImage(null);
    setImageFile(null);
    setResultImage(null);
    setUpdate(0); // Reset update state to re-enable the button
  };
 
  return (
    <>
      <div className="container">
        <h1 className="header-title">
          Picture <span>Perfect</span>
        </h1>
        <h2 className="subtitle">
          Best AI Photo Enhancer Tool to Instantly increase Image Resolution
        </h2>

        <div className="image-panel-wrapper">
          {/* Input box */}
          <div className="image-box input-box">
            {image ? (
              <div className="image-preview-wrapper">
                <img src={image} alt="Input" className="uploaded-preview" />
                <button className="close-button" onClick={handleReset}>×</button>
                <div>
                  <button 
                    className="upload-button" 
                    onClick={handleToolClick}
                    disabled={update === 1}
                    style={{ 
                      opacity: update === 1 ? 0.6 : 1,
                      cursor: update === 1 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {update === 1 ? "Processing..." : "Upload"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="upload-area-perfect">
                <label htmlFor="upload-input" className="upload-button">
                  Picture Upload
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  id="upload-input"
                  style={{ display: "none" }}
                />
                <p className="upload-subtext">or drag and drop picture</p>
              </div>
            )}
          </div>

          {/* Output box */}
          {resultImage && (
            <div className="image-box output-box">
              <img src={resultImage} alt="Result" className="uploaded-preview" />
              <div className="result-buttons">
                <button className="action-button" onClick={handleDownload}>Download</button>
                <button className="action-button" onClick={handleReset}>Start Over</button>
              </div>
            </div>
          )}
        </div>

        {loading && (
          <p className="loading-text">
            Enhancing Image with "{enhancingTool}"...
          </p>
        )}
      </div>

      <div className="margin">
        <span>.</span>
      </div>
      <Footer />
    </>
  );
}


