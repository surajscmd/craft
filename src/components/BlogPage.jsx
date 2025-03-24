import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Handcrafted Pottery',
    excerpt: 'Discover the ancient techniques and modern innovations in pottery making...',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    date: 'March 20, 2025',
    author: 'Sarah Johnson',
    category: 'Crafts'
  },
  {
    id: 2,
    title: 'Sustainable Materials in Modern Crafting',
    excerpt: 'How artisans are embracing eco-friendly materials and practices...',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    date: 'March 15, 2025',
    author: 'Michael Chen',
    category: 'Sustainability'
  },
  {
    id: 3,
    title: 'Digital Tools for Traditional Crafts',
    excerpt: 'Exploring how technology is enhancing traditional crafting methods...',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    date: 'March 10, 2025',
    author: 'Emma Davis',
    category: 'Technology'
  }
];

const BlogPage = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Latest from Our Blog</h2>
          <p>Discover stories, insights, and inspiration from the world of crafts</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-author">By {post.author}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <button className="read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-footer">
          <button className="load-more">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
