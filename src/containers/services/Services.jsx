
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import './services.css';

import dashboard from '../../assets/dashboard.webp';
import llm from '../../assets/llm.jpg';
import bot from '../../assets/bot.webp';
import prompt from '../../assets/prompt.webp';
import dashboard1 from '../../assets/dashboard1.webp';
import generative from '../../assets/generative.webp';
import Danda from '../../assets/Danda.png';
const services = [
  {
    title: "AI-Powered Data Solutions",
    desc: "We provide high-quality data annotation and custom dataset creation (text, image, video) to train accurate AI models. Our data analysis services help extract valuable insights from structured and unstructured data, enabling better decision-making.",
    iconSrc: dashboard,
  },
  {
    title: "Machine Learning & Model Development",
    desc: "We provide custom machine learning and deep learning models tailored to your needs, including AI solutions for image recognition, object detection, video analysis, and NLP applications such as text comprehension, chatbots, and sentiment analysis.",
    iconSrc: bot,
  },
  {
    title: "AI-Driven Automation & Optimization",
    desc: "We streamline workflows with AI-powered automation tools and create interactive dashboards using Streamlit and Plotly for real-time data visualization.",
    iconSrc: dashboard1,
  },
  {
    title: "Generative AI & Large Language Models (LLMs)",
    desc: "We specialize in custom model training and fine-tuning, developing domain-specific AI solutions for personalized applications. Our generative AI expertise enables the creation of high-quality text, images, and videos tailored to diverse needs.",
    iconSrc: llm,
  },
  {
    title: "Advanced Prompt Engineering",
    desc: "We specialize in crafting optimized prompts for LLMs to enhance accuracy and relevance, refining them for various applications like content generation, chatbots, and AI automation workflows.",
    iconSrc: prompt,
  },
  {
    title: "AI-Powered Business Process Optimization",
    desc: "We leverage AI-driven automation to streamline business operations, reduce manual effort, and enhance efficiency across departments. Our intelligent solutions optimize workflows, utilize advanced analytics, and provide data-driven insights to support better decision-making.",
    iconSrc: generative,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCardWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // for desktop scroll:
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const totalCards = services.length;
  const totalWidth = cardWidth * totalCards;
  const x = useTransform(scrollYProgress, [0, 1], [0, -(totalWidth - cardWidth)]);

  return (
    <section
      className="services-bg"
      ref={sectionRef}
      id="service"
      style={{
        position: 'relative',
        height: isMobile ? 'auto' : `${totalCards * 100}vh`,
        paddingBottom: isMobile ? '2rem' : 0,
      }}
    >
      <div
        className="horizontal-section"
        style={{
          position: isMobile ? 'relative' : 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: isMobile ? 'auto' : '100vh',
          overflow: isMobile ? 'visible' : 'hidden',
        }}
      >
      {isMobile ? (
  <div className="offer-static mobile-offer">
    <img src={Danda} alt="Danda" className="danda-image" />
    <div className="text-block">
      <h1>Our Services</h1>
      <p>Empowering Innovation with Advanced AI Services</p>
      
    </div>
  </div>
) : (
  <div className="offer-static desktop-offer">
    <div className="offer-left">
      <p>Empowering Innovation with Advanced AI Services</p>
    </div>
    <div className="offer-line">
      <img src={Danda} alt="Danda" />
    </div>
    <div className="offer-right">
      <h1>Our Services</h1>
    </div>
  </div>
)}



        {isMobile ? (
          <div className="mobile-services">
            {services.map(({ title, desc }, i) => (
              <div className="mobile-card" key={i}>
                <div className="section-number">{String(i + 1).padStart(2, '0')}</div>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="horizontal-wrapper"
            style={{ x, width: totalWidth, height: '100vh' }}
          >
            {services.map(({ title, desc, iconSrc }, i) => (
              <InView key={i} threshold={0.5} triggerOnce={false}>
                {({ inView, ref }) => (
                  <div className="hcard" ref={ref}>
                    <div className="card-image">
                      <picture className="icon-images">
                        <source srcSet={iconSrc} type="image/webp" />
                        <img
                          src={iconSrc}
                          alt={title}
                          className="Dashboard"
                          
                        />
                      </picture>
                    </div>
                    <div className="card-content">
                      <div className="section-number">{String(i + 1).padStart(2, '0')}</div>
                      <h2>{title}</h2>
                      <p>{desc}</p>
                    </div>
                  </div>
                )}
              </InView>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;