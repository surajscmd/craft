import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import SignInPopup from './SignInPopup';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight = document.querySelector('.nav-container').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add scroll padding to html element
  useEffect(() => {
    const navbar = document.querySelector('.nav-container');
    if (navbar) {
      const height = navbar.offsetHeight;
      document.documentElement.style.setProperty('--scroll-padding', height + 'px');
    }
  }, []);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <a href="#home" className="nav-logo" onClick={(e) => handleScroll(e, 'home')}>
          Craft Co.
        </a>

        <button 
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
            <li><a href="#products" onClick={(e) => handleScroll(e, 'products')}>Products</a></li>
            <li><a href="#blog" onClick={(e) => handleScroll(e, 'blog')}>Blog</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
          </ul>
          
          <div className="nav-buttons">
            <button onClick={() => setIsSignInOpen(true)} className="nav-btn primary">Sign In</button>
          </div>
        </div>
      </div>

      <SignInPopup isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </nav>
  );
};

export default Navbar;