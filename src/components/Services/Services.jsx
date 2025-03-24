import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🎨',
            title: 'Custom Design',
            description: 'Unique and personalized designs tailored to your vision and requirements.'
        },
        {
            icon: '🛠️',
            title: 'Handcrafted',
            description: 'Each piece carefully crafted by skilled artisans using traditional techniques.'
        },
        {
            icon: '✨',
            title: 'Restoration',
            description: 'Expert restoration services to bring your cherished pieces back to life.'
        },
        {
            icon: '📐',
            title: 'Custom Sizing',
            description: 'Perfect fit guaranteed with our custom sizing and modification services.'
        },
        {
            icon: '🎁',
            title: 'Gift Services',
            description: 'Special gift wrapping and customization for your special occasions.'
        },
        {
            icon: '🏠',
            title: 'Installation',
            description: 'Professional installation services for all our crafted pieces.'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <h2>Our Services</h2>
                <p className="services-subtitle">Discover our range of specialized craft services</p>
                
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            className="service-card" 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
