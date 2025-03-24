import React, { useState, useEffect } from 'react';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        rating: 5,
        comment: ''
    });

    // Sample reviews data (replace with actual API calls)
    const sampleReviews = [
        {
            id: 1,
            name: "John Doe",
            rating: 5,
            comment: "Excellent service and great products!",
            createdAt: "2025-03-24"
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            comment: "Very satisfied with my purchase.",
            createdAt: "2025-03-23"
        }
    ];

    useEffect(() => {
        // In a real application, you would fetch reviews from an API
        setReviews(sampleReviews);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Add the new review to the list
        const review = {
            id: reviews.length + 1,
            ...newReview,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        setReviews(prev => [review, ...prev]);
        
        // Reset form
        setNewReview({
            name: '',
            rating: 5,
            comment: ''
        });
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
                ★
            </span>
        ));
    };

    return (
        <section className="reviews-section">
            <h2>Customer Reviews</h2>
            
            {/* Review Form */}
            <div className="review-form-container">
                <h3>Write a Review</h3>
                <form onSubmit={handleSubmit} className="review-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newReview.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <select
                            id="rating"
                            name="rating"
                            value={newReview.rating}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Very Good</option>
                            <option value="3">3 - Good</option>
                            <option value="2">2 - Fair</option>
                            <option value="1">1 - Poor</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={newReview.comment}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="submit-btn">
                        Submit Review
                    </button>
                </form>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <h4>{review.name}</h4>
                            <div className="rating">
                                {renderStars(review.rating)}
                            </div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                        <span className="review-date">{review.createdAt}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
