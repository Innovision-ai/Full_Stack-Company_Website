import React from 'react';
import './ThirdProduct.css';
import twophoto from "../../../../assets/twophoto.png";
import tick from "../../../../assets/tick.png";
import { useNavigate } from 'react-router-dom';

const ThirdProduct = () => {
    const navigate = useNavigate();
    
    // Add this function to handle navigation with scroll reset
    const handleNavigate = () => {
        navigate("/pictureperfect/PhotoEnhancer");
        window.scrollTo(0, 0); // Scroll to top after navigation
    };
    
    return (
        <div className="container1">
            <div className="container">
                <div className="header-box">
                    <h1 className="title">Picture Perf<span className="accent">e</span>ct</h1>
                </div>
                <div className="subtitle-box">
                    <span className="subtitle">Make Your Picture Perf<span className="accent">e</span>ct With AI Editing Tools</span>
                </div>

                <div className="content">
                    <div className='main'>
                        <div className="left-panel">
                            <button className="feature-button"><img src={tick} alt="Tick" /> Quality Enhance</button>
                            <button className="feature-button"><img src={tick} alt="Tick" /> Picture TO Sketch</button>
                            <button className="feature-button"><img src={tick} alt="Tick" /> Picture Enlargement</button>
                            <button className="feature-button"><img src={tick} alt="Tick" /> Cropping Tool</button>
                            <button className="feature-button">More..</button>
                        </div>

                        <div className="right-panel">
                            <img src={twophoto} alt="Picture Perfect" className="product-image" />
                        </div>
                    </div>
                    <div className="cta-container">
                        <button className="cta-button" onClick={handleNavigate}>Explore AI</button>
                    </div>

                    <div className="background-decor decor-left"></div>
                    <div className="background-decor decor-right"></div>
                </div>
            </div>
            <div className='margin'>
                <span> .</span>
            </div>
        </div>
    );
};

export default ThirdProduct;
