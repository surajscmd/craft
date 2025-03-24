import React from 'react';
import './App.css';
import Aboutsec from './components/Aboutsec';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="home">
        <Aboutsec />
      </section>
      
      <section id="about">
        <Portfolio />
      </section>
      
      <section id="products">
        <Team />
      </section>
      
      <section id="image">
        <Image />
      </section>
      
      <section id="blog">
        <BlogPage />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
