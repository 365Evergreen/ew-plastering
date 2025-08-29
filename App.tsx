import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { Footer } from './Footer';
import '../styles/globals.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
