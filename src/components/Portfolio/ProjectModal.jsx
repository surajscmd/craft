import React, { useState } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose, onShare }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [enquiryForm, setEnquiryForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        quantity: 1
    });
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);

    if (!project) return null;

    const handleEnquiryChange = (e) => {
        setEnquiryForm({
            ...enquiryForm,
            [e.target.name]: e.target.value
        });
    };

    const handleEnquirySubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the enquiry to your backend
        console.log('Enquiry submitted:', {
            ...enquiryForm,
            projectTitle: project.title,
            projectId: project.id
        });
        // Reset form
        setEnquiryForm({
            name: '',
            email: '',
            phone: '',
            message: '',
            quantity: 1
        });
        setShowEnquiryForm(false);
    };

    const nextImage = () => {
        setActiveImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setActiveImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <div className="modal-gallery">
                    <div className="gallery-main">
                        <button className="gallery-nav prev" onClick={prevImage}>‹</button>
                        <img 
                            src={project.images[activeImageIndex]} 
                            alt={`${project.title} - View ${activeImageIndex + 1}`} 
                        />
                        <button className="gallery-nav next" onClick={nextImage}>›</button>
                    </div>
                    <div className="gallery-thumbnails">
                        {project.images.map((img, index) => (
                            <div 
                                key={index}
                                className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                                onClick={() => setActiveImageIndex(index)}
                            >
                                <img src={img} alt={`${project.title} thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="modal-details">
                    <div className="modal-header">
                        <div>
                            <h2>{project.title}</h2>
                            <p className="project-category">{project.category}</p>
                        </div>
                        <div className="modal-actions">
                            <button 
                                className="action-btn secondary"
                                onClick={() => onShare(project)}
                            >
                                Share
                            </button>
                            <button 
                                className="action-btn primary"
                                onClick={() => setShowEnquiryForm(true)}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                    
                    <div className="project-info">
                        <div className="info-group">
                            <h3>Description</h3>
                            <p>{project.description}</p>
                        </div>
                        
                        <div className="info-group">
                            <h3>Materials Used</h3>
                            <ul>
                                {project.materials?.map((material, index) => (
                                    <li key={index}>{material}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="info-group">
                            <h3>Specifications</h3>
                            <div className="specs-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Dimensions</span>
                                    <span className="spec-value">{project.dimensions}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Weight</span>
                                    <span className="spec-value">{project.weight}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Time to Create</span>
                                    <span className="spec-value">{project.timeToCreate}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Price</span>
                                    <span className="spec-value">{project.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showEnquiryForm && (
                    <div className="enquiry-form-container">
                        <h3>Enquire About This Item</h3>
                        <form onSubmit={handleEnquirySubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={enquiryForm.name}
                                    onChange={handleEnquiryChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={enquiryForm.email}
                                    onChange={handleEnquiryChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={enquiryForm.phone}
                                    onChange={handleEnquiryChange}
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="quantity"
                                    value={enquiryForm.quantity}
                                    onChange={handleEnquiryChange}
                                    min="1"
                                    placeholder="Quantity"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={enquiryForm.message}
                                    onChange={handleEnquiryChange}
                                    placeholder="Your Message"
                                    required
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="form-actions">
                                <button 
                                    type="button" 
                                    className="action-btn secondary"
                                    onClick={() => setShowEnquiryForm(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="action-btn primary">
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
