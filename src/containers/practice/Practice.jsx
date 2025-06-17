import React, { useRef } from 'react';
import './practice.css'; // we'll add styling here

const card = [
  {
    title: "Innovative AI Solutions",
    description: "We build smart and scalable AI systems that solve real-world problems using machine learning and deep learning techniques.",
    bg: "/ai-solutions.jpg",
  },
  {
    title: "Data-Driven Insights",
    description: "Our models uncover hidden patterns in your data to help you make informed business decisions with confidence.",
    bg: "/data-insights.jpg",
  },
  {
    title: "Custom Automation Tools",
    description: "We develop automation pipelines tailored to your workflow to save time, reduce human error, and boost productivity.",
    bg: "/automation-tools.jpg",
  },
  {
    title: "Scalable Infrastructure",
    description: "From prototyping to deployment, our AI infrastructure scales with your needs, ensuring performance and reliability.",
    bg: "/scalable-infra.jpg",
  },
];

const Practice = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // adjust scroll distance
      behavior: 'smooth',
    });
  };

  return (
    <div className='wrapper'>
      <button className='scroll-btn' onClick={scrollRight}>➡</button>
      
      <div className='card-container' ref={scrollRef}>
        {card.map((item, index) => (
          <div className='card' key={index}>
            <p>{item.title}</p>
            <h1>{item.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
