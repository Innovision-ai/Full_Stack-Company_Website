import React from 'react';
import './services.css';

const services = [
  {
    title: "AI-Powered Data Solutions",
    desc: "We provide high-quality data annotation and custom dataset creation (text, image, video) to train accurate AI models. Our data analysis services help extract valuable insights from structured and unstructured data, enabling better decision-making.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="30" width="6" height="8" rx="2" fill="#42C6FF" />
        <rect x="21" y="22" width="6" height="16" rx="2" fill="#42C6FF" />
        <rect x="32" y="14" width="6" height="24" rx="2" fill="#42C6FF" />
      </svg>
    ),
    background: "linear-gradient(135deg, #42C6FF 0%, pink 100%)",
  },
  {
    title: "Machine Learning & Model Development",
    desc: "We provide custom machine learning and deep learning models tailored to your needs, including AI solutions for image recognition, object detection, video analysis, and NLP applications such as text comprehension, chatbots, and sentiment analysis.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#FFA726" strokeWidth="4" fill="none" />
        <path d="M24 14v10l7 7" stroke="#FFA726" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
     background: "linear-gradient(135deg, #42C6FF 0%, #A4EFF2 100%)",
  },
  {
    title: "AI-Driven Automation & Optimization",
    desc: "We streamline workflows with AI-powered automation tools and create interactive dashboards using Streamlit and Plotly for real-time data visualization.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="8" stroke="#00E1B4" strokeWidth="4" fill="none" />
        <circle cx="24" cy="24" r="6" fill="#00E1B4" />
      </svg>
    ),
     background: "linear-gradient(135deg, #42C6FF 0%, #A4EFF2 100%)",
  },
  {
    title: "Generative AI & Large Language Models (LLMs)",
    desc: "We specialize in custom model training and fine-tuning, developing domain-specific AI solutions for personalized applications. Our generative AI expertise enables the creation of high-quality text, images, and videos tailored to diverse needs.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
        <path d="M10 24C10 15.1634 17.1634 8 26 8s16 7.1634 16 16-7.1634 16-16 16-16-7.1634-16-16z" fill="#42C6FF" />
        <path d="M26 16v16M18 24h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
     background: "linear-gradient(135deg, #42C6FF 0%, #A4EFF2 100%)",
  },
  {
    title: "Advanced Prompt Engineering",
    desc: "We specialize in crafting optimized prompts for LLMs to enhance accuracy and relevance, refining them for various applications like content generation, chatbots, and AI automation workflows.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
        <path d="M8 12h32v24H8z" fill="#FFA726" />
        <path d="M12 16h24v2H12zM12 22h24v2H12zM12 28h16v2H12z" fill="#fff" />
      </svg>
    ),
     background: "linear-gradient(135deg, #42C6FF 0%, #A4EFF2 100%)",
  },
  {
    title: "AI-Powered Business Process Optimization",
    desc: "We leverage AI-driven automation to streamline business operations, reduce manual effort, and enhance efficiency across departments. Our intelligent solutions optimize workflows, utilize advanced analytics, and provide data-driven insights to support better decision-making.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#00E1B4" />
        <path d="M16 24h16M24 16v16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
     background: "linear-gradient(135deg, #42C6FF 0%, #A4EFF2 100%)",
  },
];

export default function Services() {
  return (
    <section className="poss-section">
      <h2 className="poss-title">
          <span className="poss-headline">Our Services</span>
        <span className="two-span">Empowering Innovation with Advanced AI Services</span>
      
      </h2>
      <div className="poss-cards-network">
        <div className="poss-cards-row">
          {services.map((service, i) => (
            <div className="poss-card" key={i} >
              <div className="poss-card-icon" >{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}