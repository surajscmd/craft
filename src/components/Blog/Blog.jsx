import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'The Art of Handcrafted Pottery',
            excerpt: 'Discover the ancient techniques and modern innovations in pottery making...',
            image: 'https://images.unsplash.com/photo-1565193298357-c394a6bf6519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            date: 'March 20, 2025',
            category: 'Pottery',
            author: 'Sarah Johnson'
        },
        {
            id: 2,
            title: 'Sustainable Woodworking Practices',
            excerpt: 'Learn about eco-friendly approaches to woodworking and furniture making...',
            image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            date: 'March 15, 2025',
            category: 'Woodwork',
            author: 'Michael Chen'
        },
        {
            id: 3,
            title: 'Modern Textile Design Trends',
            excerpt: 'Exploring contemporary patterns and sustainable materials in textile design...',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            date: 'March 10, 2025',
            category: 'Textile',
            author: 'Emma Davis'
        }
    ];

    return (
        <section className="blog-section">
            <div className="blog-container">
                <h2>Latest Articles</h2>
                <p className="blog-subtitle">Insights and stories from our craft journey</p>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <article 
                            key={post.id} 
                            className="blog-post"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="post-image">
                                <img src={post.image} alt={post.title} />
                                <div className="post-category">{post.category}</div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">{post.date}</span>
                                    <span className="post-author">By {post.author}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <button className="read-more">Read More</button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="blog-cta">
                    <button className="view-all-posts">View All Posts</button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
