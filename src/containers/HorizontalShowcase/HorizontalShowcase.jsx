import React from 'react';
import './HorizontalShowcase.css';

const sections = [
  {
    id: 'ai-features',
    title: 'Advanced AI Features',
    cards: [
      {
        title: 'Real-Time Analytics',
        img: 'https://source.unsplash.com/featured/?ai,data',
      },
      {
        title: 'Conversational AI',
        img: 'https://source.unsplash.com/featured/?chatbot,technology',
      },
      {
        title: 'Smart Automation',
        img: 'https://source.unsplash.com/featured/?automation,robotics',
      },
    ],
  },
  {
    id: 'services',
    title: 'Our Services',
    cards: [
      {
        title: 'AI‑Powered Data Solutions',
        img: 'https://source.unsplash.com/featured/?data,cloud',
      },
      {
        title: 'LLM Fine-Tuning',
        img: 'https://source.unsplash.com/featured/?llm,code',
      },
      {
        title: 'Generative AI Integration',
        img: 'https://source.unsplash.com/featured/?generative,ai',
      },
    ],
  },
];

const HorizontalShowcase = () => {
  return (
    <div className="horizontal-container">
      <div className="horizontal-wrapper">
        {sections.map((section) => (
          <div key={section.id} className="horizontal-slide">
            <h2 className="slide-title">{section.title}</h2>
            <div className="card-group">
              {section.cards.map((card, idx) => (
                <div className="card" key={idx}>
                  <img src={card.img} alt={card.title} className="card-img" />
                  <div className="card-body">
                    <h3>{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalShowcase;
