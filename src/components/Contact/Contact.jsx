import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2>Get in Touch</h2>
                <p className="contact-subtitle">Have a question or want to work together?</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <h3>Our Location</h3>
                            <p>123 Craft Street, Artisan City, AC 12345</p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📧</div>
                            <h3>Email Us</h3>
                            <p>info@craftcompany.com</p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <h3>Call Us</h3>
                            <p>+1 234 567 8900</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows="6"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
