import React from 'react';
import './impact.css';
import Danda from '../../assets/Danda.png';
const Impact = () => {
    const impactData = [
        {
            title: "5+",
            description: "Happy clients",
        },
        {
            title: "10",
            description: "Projects",
        },
        {
            title: "1200",
            description: "Hours of support",
        },
        {
            title: "7",
            description: "Smart workers",
        },
    ];

    return (
        <div className='padding'>
        <div className='inv__impact'>
            <div className='inv__impact-header'>
                <img src={Danda} alt="Impact Icon" className='inv__impact-icon' />
                <h1>Delivering Impact Through Intelligent Solutions</h1>

            </div>
            <div className='inv__impact-main'>
            <div className='inv__impact-box'>
                <div className='inv__impact-content'>
                    {impactData.map((item, index) => (
                        <div key={index} className='inv__impact-item'>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
           </div>
            </div>
        
        
        </div>
    );
};

export default Impact;
