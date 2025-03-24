import React, { useState } from 'react';
import './Portfolio.css';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Handcrafted Vase',
            category: 'pottery',
            images: [
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
                'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=675&q=80',
                'https://images.unsplash.com/photo-1612196808214-b0b1e0f1b627?ixlib=rb-4.0.3&auto=format&fit=crop&w=675&q=80'
            ],
            image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
            description: 'A beautifully handcrafted ceramic vase with intricate patterns and a unique glazing technique.',
            materials: ['Premium Clay', 'Natural Glazes', 'Organic Pigments'],
            dimensions: '25cm x 15cm x 15cm',
            weight: '1.2 kg',
            timeToCreate: '5-7 days',
            price: '$180'
        },
        {
            id: 2,
            title: 'Wooden Table',
            category: 'woodwork',
            images: [
                'https://images.unsplash.com/photo-1604074131665-7a4b13870ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1594224457101-9eca90c05e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
            ],
            image: 'https://images.unsplash.com/photo-1607827447451-3eaa66b96c67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdvb2RlbiUyMFRhYmxlfGVufDB8fDB8fHww',
            description: 'Modern minimalist dining table crafted from solid oak with a natural finish.',
            materials: ['Solid Oak', 'Natural Oil Finish', 'Steel Hardware'],
            dimensions: '180cm x 90cm x 75cm',
            weight: '45 kg',
            timeToCreate: '14-18 days',
            price: '$1,200'
        },
        {
            id: 3,
            title: 'Ceramic Set',
            category: 'pottery',
            images: [
                'https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
                'https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
                'https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
            ],
            image: 'https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
            description: 'Complete dining set including plates, bowls, and cups in a harmonious design.',
            materials: ['Porcelain', 'Food-safe Glaze', 'Natural Pigments'],
            dimensions: 'Various sizes',
            weight: '3.5 kg (set)',
            timeToCreate: '10-12 days',
            price: '$300'
        },
        {
            id: 4,
            title: 'Woven Basket',
            category: 'textile',
            images: [
                'https://images.unsplash.com/photo-1619411302763-0a2c2356ddcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1619411302763-0a2c2356ddcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1619411302763-0a2c2356ddcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            ],
            image: 'https://images.unsplash.com/photo-1544914167-c71759753c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d292ZW4lMjBiYXNrZXR8ZW58MHx8MHx8fDA%3D',
            description: 'Hand-woven storage basket using traditional techniques and sustainable materials.',
            materials: ['Natural Fibers', 'Organic Dyes', 'Bamboo Support'],
            dimensions: '40cm x 40cm x 35cm',
            weight: '0.8 kg',
            timeToCreate: '3-4 days',
            price: '$80'
        },
        {
            id: 5,
            title: 'Wooden Chair',
            category: 'woodwork',
            images: [
                'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            ],
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            description: 'Contemporary dining chair combining comfort with modern design aesthetics.',
            materials: ['Walnut Wood', 'Premium Upholstery', 'Brass Details'],
            dimensions: '45cm x 50cm x 85cm',
            weight: '6.5 kg',
            timeToCreate: '7-9 days',
            price: '$250'
        },
        {
            id: 6,
            title: 'Woven Rug',
            category: 'textile',
            images: [
                'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            ],
            image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            description: 'Hand-woven area rug featuring traditional patterns with contemporary colors.',
            materials: ['Wool', 'Cotton', 'Natural Dyes'],
            dimensions: '200cm x 150cm',
            weight: '4.2 kg',
            timeToCreate: '15-20 days',
            price: '$400'
        }
    ];

    const filters = ['all', 'pottery', 'woodwork', 'textile'];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    const handleShare = async (project) => {
        const shareData = {
            title: project.title,
            text: `Check out this amazing ${project.title} from our craft collection!`,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback for browsers that don't support Web Share API
                const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
                window.open(shareUrl, '_blank');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <h2>Our Portfolio</h2>
                <p className="portfolio-subtitle">Explore our latest crafted pieces</p>

                <div className="portfolio-filters">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="portfolio-item"
                            data-aos="fade-up"
                            data-aos-delay={(project.id % 3) * 100}
                        >
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.category}</p>
                                    <button 
                                        className="view-project"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)}
                    onShare={handleShare}
                />
            )}
        </section>
    );
};

export default Portfolio;
