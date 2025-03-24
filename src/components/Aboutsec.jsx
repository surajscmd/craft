import React from 'react';
import './Aboutsec.css';

const Aboutsec = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1>Crafting Beauty<br/>in Every Detail</h1>
            <p className="hero-subtitle">Where artistry meets excellence in handcrafted masterpieces</p>
          </div>

          {/* <div className="hero-features">
            <div className="feature">
              <i className="fas fa-medal"></i>
              <span>Premium Quality</span>
            </div>
            <div className="feature">
              <i className="fas fa-hand-holding-heart"></i>
              <span>Handcrafted</span>
            </div>
            <div className="feature">
              <i className="fas fa-leaf"></i>
              <span>Sustainable</span>
            </div>
          </div> */}

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">1500+</span>
              <span className="stat-label">Artworks Created</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>

          <div className="hero-cta">
            <button className="cta-primary">View Our Work</button>
            <button className="cta-secondary">Contact Us</button>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Aboutsec;