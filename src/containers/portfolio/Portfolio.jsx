import { useState } from "react";
import "./portfolio.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
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

  const embedURL = `https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0&showinfo=0&controls=1`;

  return (
    <div className="portfolio" id="portfolio">
      <div className="our">
        <h2 className="portfolio-title">PORTFOLIO</h2>
        <h3>Check out our latest work</h3>
      </div>

      <div className="portfolio-content">
        <div className="video-info">
          <h3 className="video-title">{title}</h3>
          <p className="video-desc">{desc}</p>

          <div className="tech-tags">
            {tech.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
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
          <iframe
            className="video"
            src={embedURL}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            frameBorder="0"
          ></iframe>

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
