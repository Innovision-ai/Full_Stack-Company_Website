import React from 'react';
import './impact.css';

const Impact = () => {
    const impactData = [
        {
            title: "495+",
            description: "Happy clients",
        },
        {
            title: "95",
            description: "Projects",
        },
        {
            title: "1200",
            description: "Hours of support",
        },
        {
            title: "30",
            description: "Smart workers",
        },
    ];

    return (
        <div className='padding'>
        <div className='inv__impact'>
            <div className='inv__impact-header'>
                <h1>Delivering Impact Through Intelligent Solutions</h1>

            </div>
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
        
         <div className='margin'>
                <span> .</span>
                </div>
        </div>
    );
};

export default Impact;
