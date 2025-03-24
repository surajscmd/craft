import React from 'react';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Master Craftsperson',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            bio: 'With over 15 years of experience in pottery and ceramics, Sarah leads our artisan team.',
            social: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Michael Chen',
            role: 'Wood Artist',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            bio: 'A master woodworker specializing in custom furniture and artistic installations.',
            social: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Emma Davis',
            role: 'Textile Designer',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            bio: 'Emma brings contemporary flair to traditional textile techniques.',
            social: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'James Wilson',
            role: 'Design Director',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            bio: 'Oversees design direction and ensures quality across all projects.',
            social: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        }
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <h2>Meet Our Team</h2>
                <p className="team-subtitle">The talented artisans behind our creations</p>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="team-member"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="member-image">
                                <img src={member.image} alt={member.name} />
                                <div className="member-social">
                                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
