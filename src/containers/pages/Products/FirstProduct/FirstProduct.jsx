import React from 'react'
import just1 from "../../../../assets/just1.png";
import just2 from "../../../../assets/just2.png";
import just3 from "../../../../assets/just3.png";
import just4 from "../../../../assets/just4.png";
import just5 from "../../../../assets/just5.png";
import "./FirstProduct.css";
import { useNavigate } from 'react-router-dom';
const images = {
    image1: just1,
    image2: just2,
    image3: just3,
    image4: just4,
    image5: just5,
}

const FirstProduct = () => {
    const navigate = useNavigate()
    return (
        <div className="Product-container">
            <div className='heading'>
                <h1>Just My Pictures</h1>
            </div>
            <div className='Product-content'>
                <h1>Let AI Do The Sorting For You !</h1>
                <p>Say goodbye to manual sorting and let our AI do the work for you.
                    Experience faster, smarter results tailored just for you.
                    Join thousands already saving time with intelligent automation.</p>
                <button onClick={() => navigate('/justmypictures')}>Explore AI</button>
            </div>
            <div className='Product-image'>
                {Object.values(images).map((image, index) => {
                    return (
                        <img key={index} src={image} alt={`Product ${index}`} />
                    )
                })}
            </div>
        </div>
    )
}

export default FirstProduct