import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './SignInPopup.css';
import { X } from 'lucide-react';

const SignInPopup = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Form submitted:', { email, password, name });
  };

  const popupContent = (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="popup-header">
          <h2>{isSignIn ? 'Sign In' : 'Create Account'}</h2>
          <p>Welcome to Craft Co.</p>
        </div>

        <form onSubmit={handleSubmit} className="popup-form">
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="popup-footer">
          <p>
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button 
              className="toggle-button"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(popupContent, document.body);
};

export default SignInPopup;
