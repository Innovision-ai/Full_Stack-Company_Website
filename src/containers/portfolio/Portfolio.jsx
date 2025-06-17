import { useState } from "react"
import "./portfolio.css"
import { ChevronLeft, ChevronRight } from "lucide-react";
import yoga from '../../assets/yoga.mp4';
import chatbot from '../../assets/chatbot.mp4';
const Portfolio = () => {
 const projects = [
  {
    id: 1,
    title: "Customer Support Chatbot",
    desc: "Finetuned a Transformer-based Seq2Seq model on a customer support dataset to generate accurate responses to customer queries.",
    src: chatbot,
    tech: ["NLP", "LLM", "Data Science", "Transformers"],
  },
  {
    id: 2,
    title: "Yoga Pose Detection and Correction",
    desc: "A self-training tool that detects yoga poses and provides correction feedback. Built using custom datasets, CV techniques, and DL models.",
    src: yoga,
    tech: ["Computer Vision", "Deep Learning", "Machine Learning"],
  }
]

  const [current, setCurrent] = useState(0)

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % projects.length)
  }

  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const { title, desc, src, tech, demo } = projects[current]

  return (
    <div className="portfolio" id="portfolio">
        <div className="our">
      <h2 className="portfolio-title">PORTFOLIO</h2>
      <h3 >Check out our latest work</h3>
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

          <div className="video-buttons">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="btn">Live Demo</a>
            )}
          </div>
        </div>

        <div className="video-wrapper">
         <video
  key={src}
  className="video"
  src={src}
  controls
  controlsList="nodownload"
  disablePictureInPicture
  disableRemotePlayback
  onContextMenu={(e) => e.preventDefault()}
/>
          <div className="arrows">
            <button onClick={prevVideo}><ChevronLeft size={28} /></button>
            <button onClick={nextVideo}><ChevronRight size={28} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
