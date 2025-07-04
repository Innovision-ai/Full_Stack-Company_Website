import React, { useEffect, useState } from 'react';
import './testimonials.css';
import Danda from '../../assets/Danda.png';

const testimonials = [
  {
    name: "Avinav Pandey",
    role: "Biz-Tech Analytics",
    rating: 5,
    text: "Working with InnoVision AI was a game-changer for our AI initiatives. Their expertise in leveraging LLMs to generate high-quality training data significantly improved our model performance. Not only did they deliver exceptional results, but their ability to understand our requirements and execute with precision was impressive. The project was completed on time, with meticulous attention to quality and consistency. We highly recommend InnoVisionAI for any AI-driven data solutions.",
  },
  {
    name: "Sinchana Shetty",
    role: "Interview Kickstart",
    rating: 5,
    text: "We had the pleasure of collaborating with InnoVision AI on developing a comprehensive Machine Learning course, and the experience was outstanding. Their deep technical knowledge, structured approach, and commitment to quality ensured an advanced and engaging curriculum. The lesson plans, materials, and assignments were meticulously designed, making complex concepts accessible and practical. Most importantly, everything was delivered on schedule without compromising quality. A true professional we’d love to work with again!",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 550);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

function StarRating({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </div>
  );
}

function Testimonials() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      {isMobile ? (
        <div className="testimonials-header testimonials-header-mobile">
          <div className="testimonials-icon-wrap">
            <img src={Danda} alt="Danda" className="testimonials-icon" />
          </div>
          <div className="testimonials-text-column">
            <h1 className="testimonials-badge">Testimonials</h1>
            <h2 className="testimonials-title">What Our Clients Think About Us</h2>
          </div>
        </div>
      ) : (
        <div className="testimonials-header testimonials-header-desktop">
          <div className="testimonials-left">
            <h1 className="testimonials-badge">Testimonials</h1>
          </div>
          <div className="testimonials-icon-wrap">
            <img src={Danda} alt="Danda" className="testimonials-icon" />
          </div>
          <div className="testimonials-right">
            <h2 className="testimonials-title">What Our Clients Think About Us</h2>
          </div>
        </div>
      )}

      <div className="testimonials-list">
        {isMobile ? (
          <div className="testimonials-mobile-carousel">
          
            
            <div className="testimonial-card">
              <div className="testimonial-container" style={{ position: 'relative' }}>
                <div className="testimonial-quote-mark left">"</div>
                <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                <div className="testimonial-quote-mark right">"</div>
              </div>
              <div className="testimonial-info">
                <div>
                  <span className="testimonial-name">{testimonials[currentIndex].name}</span>
                  <span className="testimonial-role">{testimonials[currentIndex].role}</span>
                </div>
                <StarRating count={testimonials[currentIndex].rating} />
              </div>
            </div>
  <button 
              className="carousel-arrow left" 
              onClick={prevTestimonial}
            >
              &#8592;
            </button>
            <button 
              className="carousel-arrow right" 
              onClick={nextTestimonial}
            >
              &#8594;
            </button>
          </div>
        ) : (
          testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-container" style={{ position: 'relative' }}>
                <div className="testimonial-quote-mark left">“</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-quote-mark right">”</div>
              </div>
              <div className="testimonial-info">
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Testimonials;
