import React, { useEffect, useState, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';

import {
  Footer,
  Blog,
  Header,
  Services,
  Whoweare,
  Impact,
  Portfolio,
  Testimonials,
  ScrollProgress
} from './containers';

import { Navbar, GlowingDots } from './components';
import ScrollToTopLinkedIn1 from "./containers/ScrollToTopLinkedIn1";
import ProductPage from './ProductPage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import UserContext from './UserContext';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import JustMyPictures from './containers/pages/JustMyPictures/JustMyPictures';
import PhotoEnhancer from './containers/pages/PicturePerfect/PhotoEnhancer';
import Login from './containers/pages/Login/Login';
import Signup from './containers/pages/Signup/Signup';
import Notfound from './containers/Notfound';
import PhotoEnhancer2 from './containers/pages/PicturePerfect2/PhotoEnhancer2';

function AppContent() {
  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      retry: 1
    }
  }
});
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App gradient__bg1">
        <ScrollProgress />

        <div className="gradient__bg">
          <Navbar />
          {isHomePage && !isMobile && <GlowingDots />} {/* Only show on desktop */}
          {isHomePage && (
            <div className="gradient_bg">
              <Header />
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={
            <>
             <CookieConsent />
              <div className="gradient__bg2">
                <section id="Whoweare" data-aos="fade-up">
                  <Whoweare />
                </section>
                <section id="service" data-aos="zoom-in">
                  <Services />
                </section>
                <section>
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
                
              </div>
            </>
          } />

          <Route path="/justmypictures" element={<JustMyPictures />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path ="*" element ={<Notfound/>}  />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pictureperfect" element={<PhotoEnhancer />} />
            <Route path="/pictureperfect2" element={<PhotoEnhancer2 />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

function App() {
  useEffect(() => {
    // Preload routes on mobile
    if (window.innerWidth <= 768) {
      const routes = ['/', '/justmypictures'];
      routes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <AppContent />
      </Suspense>
    </Router>
  );
}

export default App;
