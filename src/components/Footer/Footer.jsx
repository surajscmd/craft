import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We are dedicated to creating beautiful, handcrafted pieces that bring art and functionality to your space. Our team of skilled artisans combines traditional techniques with modern design.</p>
                        <div className="social-links">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#pottery">Custom Pottery</a></li>
                            <li><a href="#woodwork">Woodworking</a></li>
                            <li><a href="#textile">Textile Design</a></li>
                            <li><a href="#restoration">Restoration</a></li>
                            <li><a href="#installation">Installation</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                123 Craft Street, Artisan City, AC 12345
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                +1 234 567 8900
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                info@craftcompany.com
                            </li>
                            <li>
                                <i className="fas fa-clock"></i>
                                Mon - Fri: 9:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {new Date().getFullYear()} Craft Company. All rights reserved.
                    </div>
                    <div className="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#faq">FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
