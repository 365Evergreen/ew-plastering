import React from 'react';
import { Header } from '../Downloads/Plastering Services Website/src/components/Header';
import { Hero } from '../Downloads/Plastering Services Website/src/components/Hero';
import { About } from './About';
import { Services } from '../Downloads/Plastering Services Website/src/components/Services';
import { Portfolio } from '../Downloads/Plastering Services Website/src/components/Portfolio';
import { Contact } from '../Downloads/Plastering Services Website/src/components/Contact';
import { Footer } from '../Downloads/Plastering Services Website/src/components/Footer';
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
