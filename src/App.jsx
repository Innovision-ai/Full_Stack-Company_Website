import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Footer, Blog, Aifeature, Header, Services, Whoweare, Impact, Portfolio, Testimonials, ScrollProgress } from './containers';
import { Navbar } from './components';
import {GlowingDots} from './components';
import ScrollToTopLinkedIn1 from "./containers/ScrollToTopLinkedIn1";
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="App gradient__bg1">
      <ScrollProgress />

     <div className="gradient__bg">
  <Navbar />
  
    <Header />

  <GlowingDots />
</div>


      <div className="gradient__bg2">
        {/* WhoWeAre with fade-up */}
        <section id="Whoweare" data-aos="fade-up">
          <Whoweare />
        </section>

        {/* Aifeature (commented out) */}
        {/* <section data-aos="zoom-in">
          <Aifeature />
        </section> */}

        {/* Services with zoom-in */}
        <section id="service" data-aos="zoom-in">
          <Services />
        </section>

        {/* Impact with fade-left */}
        <section>
          <Impact />
        </section>

        {/* Portfolio with flip-left */}
        <section id="portfolio" data-aos="fade-up">
          <Portfolio />
        </section>

        {/* Testimonials with fade-up */}
        <section data-aos="fade-up">
          <Testimonials />
        </section>

        {/* Blog with fade-up */}
        <section id="blog" data-aos="fade-up">
          <Blog />
        </section>

        <ScrollToTopLinkedIn1 />

        {/* Footer with fade-up */}
        
          <Footer />
      </div>
    </div>
  );
}

export default App;