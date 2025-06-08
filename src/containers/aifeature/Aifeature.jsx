


import React from 'react';
import './aifeature.css';
import bolb from '../../assets/bolb.png';
import machine from '../../assets/machine.svg';
const features = [
  {
    title: "Real-Time Analytics",
    icon: (
      <svg width="32" height="32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="black" strokeWidth="3"/>
        <rect x="14" y="10" width="4" height="12" fill="black"/>
      </svg>
    ),
  },
  {
    title: "Conversational AI",
    icon: (
      <svg width="32" height="32" fill="none">
        <rect x="6" y="8" width="20" height="16" rx="6" stroke="black" strokeWidth="3"/>
        <circle cx="16" cy="16" r="2" fill="black"/>
      </svg>
    ),
  },
  {
    title: "Smart Automation",
    icon: (
      <svg width="32" height="32" fill="none">
        <rect x="8" y="8" width="16" height="16" rx="8" stroke="black" strokeWidth="3"/>
        <circle cx="16" cy="16" r="4" fill="black"/>
      </svg>
    ),
  },
  {
    title: "Vision Intelligence",
    icon: (
      <svg width="32" height="32" fill="none">
        <ellipse cx="16" cy="16" rx="12" ry="8" stroke="black" strokeWidth="3"/>
        <circle cx="16" cy="16" r="3" fill="black"/>
      </svg>
    ),
  },
  {
    title: "Predictive Insights",
    icon: (
      <svg width="32" height="32" fill="none">
        <polygon points="8,24 16,8 24,24" stroke="black" strokeWidth="3" fill="none"/>
        <circle cx="16" cy="22" r="2" fill="black"/>
      </svg>
    ),
  },
];

 function Aifeature() {
  const radius = 290;
  const centerX = 320, centerY = 320;

  return (
    <div className="cta-header">
      
      <div className='inv__feature-header'>
        <h1 className="ai-banner">
         
          <span className="our">Our Advance</span>
          <span className="AI flip-text">AI</span>
          <span className="features">Features</span>
        </h1>
        <p>Going beyond the basics, we provide top-tier services, placing you at the leading edge of innovation and advancement</p>
      </div>
  
      <section className="cta-section">
        <div className="cta-visual">
          <div className="cta-center">
            <svg width="200" height="200" viewBox="0 0 90 90" className="cta-center-shape">
              <defs>
                <radialGradient id="center-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#42C6FF" />
                  <stop offset="100%" stopColor="#092229" />
                </radialGradient>
              </defs>
              <circle cx="40" cy="40" r="40" fill="url(#center-grad)" opacity="0.95" />
              <path d="M30 55 Q45 35 60 55" stroke="#A4EFF2" strokeWidth="3" fill="none" />
              <circle cx="45" cy="45" r="6" fill="#fff" opacity="0.8" />
            </svg>
            <span className="cta-center-text">AI</span>
          </div>

          {features.map((f, i) => {
            const angle = (2 * Math.PI * i) / features.length - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const cornerX = x;
            const cornerY = centerY;

            return (
              <React.Fragment key={i}>
                <svg
                  className="cta-connector"
                  style={{ left: centerX, top: centerY }}
                  width={Math.abs(cornerX - centerX)}
                  height={Math.abs(y - centerY)}
                  >
                  <line
                    x1={0}
                    y1={0}
                    x2={cornerX - centerX}
                    y2={0}
                    stroke="white"
                    strokeWidth="2.2"
                    strokeDasharray="6 5"
                  />
                  <line
                    x1={cornerX - centerX}
                    y1={0}
                    x2={cornerX - centerX}
                    y2={y - centerY}
                    stroke="white"
                    strokeWidth="2.2"
                    strokeDasharray="6 5"
                  />
                  <circle
                    className="cta-moving-dot"
                    r="4"
                    fill="lightyellow"
                  >
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      keyPoints="0;0.5;1"
                      keyTimes="0;0.5;1"
                      calcMode="linear"
                     path={`M 0 0 L ${cornerX - centerX} 0 L ${cornerX - centerX} ${y - centerY}`}
                    />
                  </circle>
                </svg>

                <div
                  className="cta-feature-icon"
                  style={{
                    left: x - 25,
                    top: y - 26,
                  }}
                >
                  {f.icon}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="cta-feature-list-wrapper">
          {features.map((f, i) => (
            <div className="cta-feature-box" key={i}>
              <div className="cta-list-icon">{f.icon}</div>
              <div className="cta-list-title">{f.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


export default Aifeature;
