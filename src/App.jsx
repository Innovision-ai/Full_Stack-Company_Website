import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar/Navbar';
import GlowingDots from './components/GlowingDots/GlowingDots';
import ScrollProgress from './containers/ScrollProgress/ScrollProgress';
import './App.css';

const Blog = lazy(() => import('./containers/blog/Blog'));
const Services = lazy(() => import('./containers/services/Services'));
const Whoweare = lazy(() => import('./containers/whoweare/Whoweare'));
const Impact = lazy(() => import('./containers/impact/Impact'));
const Portfolio = lazy(() => import('./containers/portfolio/Portfolio'));
const Testimonials = lazy(() => import('./containers/testimonials/Testimonials'));
const Footer = lazy(() => import('./containers/footer/Footer'));
const Header = lazy(() => import('./containers/header/Header'));
const ScrollToTopLinkedIn1 = lazy(() => import('./containers/ScrollToTopLinkedIn1'));

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
      disable: 'mobile',
    });
  }, []);

  return (
    <div className="App gradient__bg1">
      <ScrollProgress />

      <div className="gradient__bg">
        <Navbar />
        <Suspense fallback={<div></div>}>
          <Header />
        </Suspense>

        {!isMobile && (
          <Suspense fallback={<div></div>}>
            <GlowingDots />
          </Suspense>
        )}
      </div>

      <div className="gradient__bg2">
        <Suspense fallback={<div></div>}>
          <section id="Whoweare" data-aos="fade-up">
            <Whoweare />
          </section>

          <section id="service" data-aos="zoom-in">
            <Services />
          </section>

          <section data-aos="fade-left">
            <Impact />
          </section>

          <section id="portfolio" data-aos="fade-up">
            <Portfolio />
          </section>

          <section data-aos="fade-up">
            <Testimonials />
          </section>

          <section id="blog" data-aos="fade-up">
            <Blog />
          </section>

          <ScrollToTopLinkedIn1 />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
