// import React, { useState, useEffect } from 'react';
// import './whoweare.css';

// const values = [
//   {
//     title: "Excellence In AI Solution",
//     description:
//       "We strive for perfection in every AI solution we deliver. Our commitment to quality ensures that our clients receive the most efficient, accurate, and innovative AI-driven solutions tailored to their unique needs.",
//     bg: "/touch.jpg",
//   },
//   {
//     title: "Precision & Reliability",
//     description:
//       "We believe in delivering the best, error-free AI solutions that integrate seamlessly into your business operations. Every project undergoes rigorous testing and optimization to ensure top-tier performance.",
//     bg: "/histogram.jpg",
//   },
//   {
//     title: "On-Time Delivery",
//     description:
//       "We understand the value of time in business. Our streamlined workflows and agile methodologies ensure that we meet deadlines without compromising on quality, providing you with AI solutions exactly when you need them.",
//     bg: "/desktop.jpg",
//   },
// ];

// const Whoweare = () => {
//   const [expanded, setExpanded] = useState(0);
//   const [paraText, setParaText] = useState(
//     "Building Intelligent Solutions for a Smarter Future"
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.matchMedia('(max-width: 600px)').matches) {
//         setParaText("We provide cutting-edge AI solutions to revolutionize businesses through intelligent automation and data-driven insights. Our expert team crafts custom models that boost efficiency and improve decision-making.");
//       } else {
//         setParaText("  We are a cutting-edge AI solutions provider dedicated to revolutionizing businesses with intelligent automation, data-driven insights, and innovative machine learning models. Our team of AI experts, data scientists, and engineers work tirelessly to develop custom solutions that optimize efficiency, enhance decision-making, and drive digital transformation. Whether you're a startup or an enterprise, we empower you with AI-driven strategies that deliver real-world impact.");
//       }
//     };

//     handleResize(); // Initialize on mount
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section id="Whoweare">
//       <div className="inv__who u-cut-top">
//         <div className="inv__who-about">
//           <h1>WHO WE ARE</h1>
//           <p>Building Intelligent Solutions for a Smarter Future</p>
//           <div className="inv__who-about-text">
//             <p>
//              {paraText}
//             </p>
//           </div>
//         </div>

//         <div className="inv__who-ourvalues">
//           <div className="inv__who-ourvalues-border">
//             <h3>OUR VALUES</h3>
//           </div>

//           <div className="inv__who-ourvalues-container">
//             {values.map((val, idx) => (
//               <div
//                 key={val.title}
//                 className={`value-card${expanded === idx ? ' expanded' : ''}`}
//                 style={{
//                   backgroundImage: val.bg
//                     ? `linear-gradient(rgba(9,34,41,0.7), rgba(9,34,41,0.7)), url('${val.bg}')`
//                     : `linear-gradient(rgba(9,34,41,0.7), rgba(9,34,41,0.7))`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                 }}
//               >
//                 <div className={`value-card-header${expanded === idx ? ' top' : ' center'}`}>
//                   <span>{val.title}</span>
//                   {expanded !== idx && (
//                     <button
//                       className="expand-btn"
//                       onClick={() => setExpanded(idx)}
//                       aria-label={`Expand ${val.title}`}
//                     >
//                       +
//                     </button>
//                   )}
//                 </div>
//                 <div className="value-card-content">
//                   {expanded === idx && <p>{val.description}</p>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Whoweare;
import React, { useState } from 'react';
import './whoweare.css';
import Danda from '../../assets/Danda.png';
const values = [
  {
    title: "Excellence In AI Solution",
    description:
      "We strive for perfection in every AI solution we deliver. Our commitment to quality ensures that our clients receive the most efficient, accurate, and innovative AI-driven solutions tailored to their unique needs.",
    bg: "/touch.jpg",
  },
  {
    title: "Precision & Reliability",
    description:
      "We believe in delivering the best, error-free AI solutions that integrate seamlessly into your business operations. Every project undergoes rigorous testing and optimization to ensure top-tier performance.",
    bg: "/histogram.jpg",
  },
  {
    title: "On-Time Delivery",
    description:
      "We understand the value of time in business. Our streamlined workflows and agile methodologies ensure that we meet deadlines without compromising on quality, providing you with AI solutions exactly when you need them.",
    bg: "/desktop.jpg",
  },
];

const Whoweare = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % values.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  const expandedIndex = index;
  const previewIndex = (index + 1) % values.length;

  const expandedCard = values[expandedIndex];
  const previewCard = values[previewIndex];

  return (
    <div className="about-container" id="whoweare">
      <div className="about-left">
        <div className="danda">
        <img src={Danda} alt="Danda" />
        <h2>About Us</h2>
        </div>
        <p>
          We are a cutting-edge AI solutions provider dedicated to revolutionizing businesses with
          intelligent automation, data-driven insights, and innovative machine learning models.
          Our team of AI experts, data scientists, and engineers work tirelessly to develop custom
          solutions that optimize efficiency, enhance decision-making, and drive digital transformation.
        </p>
        <div className='contact'>
        <button className="contact-btn" onClick={() => window.location.href = '#footer'}>Get In Touch →</button>
        </div>
      </div>

      <div className="about-right">
        <h3>
          Building <span className="highlight">Intelligent Solutions</span><br />
          for a <span className="highlight">Smarter Future</span>
        </h3>

        <div className="card-area">
          {/* Expanded Card */}
          <div
            className="card expanded"
            style={{ backgroundImage: `url(${expandedCard.bg})` }}
          >
            <div className="card-overlay">
              <h4>{expandedCard.title}</h4>
              <p>{expandedCard.description}</p>
            </div>
          </div>

          {/* Preview Card */}
          <div
            className="card preview"
            style={{ backgroundImage: `url(${previewCard.bg})` }}
          >
            <div className="card-overlay">
              <h4>{previewCard.title}</h4>
              {/* No description in preview */}
            </div>
          </div>
        </div>

        <div className="carousel-controls">
          <span className="arrow" onClick={prevCard}>←</span>
          <span className="arrow" onClick={nextCard}>→</span>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;

