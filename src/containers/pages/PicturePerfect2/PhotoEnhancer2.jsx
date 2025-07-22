import React, { useState } from "react";
import "./PhotoEnhancer2.css";
import Footer from "../../footer/Footer.jsx";



export default function PhotoEnhancer2() {
  const [image, setImage] = useState(null);
  const [pixelValue, setPixelValue] = useState(50);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enhancingTool, setEnhancingTool] = useState("");

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

  const handleToolClick = async (tool) => {
    if (tool !== "AI Enhance") {
      alert(`${tool} is coming soon!`);
      return;
    }

    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);
    // formData.append("outscale", "2");

    setLoading(true);
    setEnhancingTool(tool);
    const startTime = Date.now();

    try {
      const response = await fetch(
        "https://anshmittal1-remove-bg.hf.space/remove-bg",
        {
          method: "POST",
          body: formData,
        }
      );

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`${tool} enhancement took ${duration}s`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Enhancement failed: ${response.status} ${response.statusText} - ${errorText}`
        );
      }

      const blob = await response.blob();
      const enhancedImageURL = URL.createObjectURL(blob);

      // Automatically download image
      const link = document.createElement("a");
      link.href = enhancedImageURL;
      link.download = `enhanced_${imageFile.name}`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Optional: show image
      setImage(enhancedImageURL);
      alert("Background removed successfully!");
    } catch (error) {
      console.error("Enhancement Error:", error);
      alert(`Failed to enhance image: ${error.message}`);
    } finally {
      setLoading(false);
      setEnhancingTool("");
    }
  };

  return (
    <>
    <div className="container">
      <h1 className="header-title">
        Picture <span>Perfect</span>
      </h1>
      <h2 className="subtitle">Best Background Remover To Instantly Clean Up Your Photos</h2>
      <p className="description">
        Our AI-driven background remover tool allows you to effortlessly eliminate unwanted backgrounds from your images, ensuring a clean and professional look in seconds.
      </p>

      <div className="main-content">
      

        <div className="upload-box-perfect">
          {image ? (
            <>
     <div className="image-preview-wrapper">
  <img src={image} alt="Uploaded" className="uploaded-preview" />
  <button className="close-button" onClick={() => setImage(null)}>×</button>
</div>

              <button className="upload-button" onClick={() => handleToolClick("AI Enhance")}>Upload</button>
            </>
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
       
      </div>

     
      {loading && (
        <p className="loading-text">Removing Background with "{enhancingTool}"...</p>
      )}
        
    </div>
      <div className='margin'>
                <span> .</span>
                </div>
                <Footer />
    </>
  );
}

function getIcon(tool) {
  switch (tool) {
    case "AI Enhance":
      return "magic-wand.svg";
    case "HD Boost":
      return "hd.svg";
    case "Edit":
      return "edit.svg";
    case "Face Retouch":
      return "group.svg";
    default:
      return "magic-wand.svg";
  }
}
