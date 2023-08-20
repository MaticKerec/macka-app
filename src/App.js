import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DrinksOffer from './components/DrinksOffer';
import PhotoSection from './components/photoSection';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import FAQ from './components/FAQ';
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="domov">
        <Home />
      </section>
      <section id="ponudba">
        <DrinksOffer />
      </section>
      <section id="photoSection">
        <PhotoSection />
      </section>

      <section id="menu">
        <Menu />
      </section>
      <section id="about-us">
        <About />
      </section>
      <section id="reservate">
        <Reservation />
      </section>
      <section id="fa">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
};

export default App;
