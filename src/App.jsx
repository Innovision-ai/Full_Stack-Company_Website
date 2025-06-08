import React from 'react';
import { Footer, Blog, Aifeature, Header, Services,Whoweare,Impact,HorizontalShowcase} from './containers';
import { Navbar } from './components';
import GlowingDots from './components/GlowingDots';
import './App.css';

function App() {
  return (
    <div className="App gradient__bg1" >
      <div className="gradient__bg">
       <GlowingDots />
        <Navbar />
        <Header />
      </div>
      <div className='gradient__bg2'>
      <Whoweare />
         <Aifeature />
      <Services />
         <Impact/>
        <Blog />
      <Footer />
      <HorizontalShowcase/>
   </div>
      </div>
    
  );
}

export default App;
