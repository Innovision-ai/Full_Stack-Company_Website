import { useState, useEffect } from "react";
import "./portfolio.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Danda from "../../assets/Danda.png";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 550);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const Portfolio = () => {
  const isMobile = useIsMobile();

  const projects = [
    {
      id: 1,
      title: "Customer Support Chatbot",
      desc:
        "Finetuned a Transformer-based Seq2Seq model on a customer support dataset to generate accurate responses to customer queries.",
      youtubeId: "dMhGuuEtiVo",
      tech: ["NLP", "LLM", "Data Science", "Transformers"],
    },
    {
      id: 2,
      title: "Yoga Pose Detection and Correction",
      desc:
        "A self-training tool that detects yoga poses and provides correction feedback. Built using custom datasets, CV techniques, and DL models.",
      youtubeId: "mhtXxwig8-Y",
      tech: ["Computer Vision", "Deep Learning", "Machine Learning"],
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextVideo = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevVideo = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const { title, desc, youtubeId, tech, demo } = projects[current];

  return (
    <div className="portfolio" id="portfolio">
      {isMobile ? (
        <div className="our our-mobile">
          <div className="our-line">
            <img src={Danda} alt="Danda" className="portfolio-icon" />
          </div>
          <div className="our-text-column">
              <h2 className="portfolio-title">PORTFOLIO</h2>
            <h3>Check out our latest work</h3>
          
          </div>
        </div>
      ) : (
        <div className="our our-desktop">
          <div className="our-left">
            <h3>Check out our latest work</h3>
          </div>
          <div className="our-line">
            <img src={Danda} alt="Danda" className="portfolio-icon" />
          </div>
          <div className="our-right">
            <h2 className="portfolio-title">PORTFOLIO</h2>
          </div>
        </div>
      )}

      <div className="video-header">
        <h3 className="video-title">{title}</h3>
      </div>

      <div className="portfolio-content">
        <div className="video-info">
          <div className="video-box">
            <p className="video-desc">{desc}</p>
            <div className="tech-tags">
              {tech.map((t, i) => (
                <span key={i} className="tech-tag"><li>{t}</li></span>
              ))}
            </div>
          </div>
          {demo && (
            <div className="video-buttons">
              <a href={demo} target="_blank" rel="noreferrer" className="btn">
                Live Demo
              </a>
            </div>
          )}
        </div>

        <div className="video-wrapper">
          <div
            className="video-thumbnail-container"
            onClick={() => window.open(`https://youtu.be/${youtubeId}`, "_blank")}
          >
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              className="video-thumbnail"
            />
            <div className="play-button">&#9658;</div>
          </div>

          <div className="arrows">
            <button onClick={prevVideo}><ChevronLeft size={24} /></button>
            <button onClick={nextVideo}><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
