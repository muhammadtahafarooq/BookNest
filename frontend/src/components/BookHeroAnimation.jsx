import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookHeroAnimation.css';

export default function BookHeroAnimation() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate('/categoriesexploration');
  };

  return (
    <div
      className="book-hero-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }} />
        ))}
      </div>

      {/* Three Books Display */}
      <div className={`books-showcase ${isHovered ? 'books-showcase--active' : ''}`}>
        {/* Left Book */}
        <div className="book-3d book-3d--left">
          <div className="book-3d__cover">
            <img src="/hero-book-left.jpg" alt="Featured Book" className="book-3d__image" />
            <div className="book-3d__shine" />
          </div>
          <div className="book-3d__spine book-3d__spine--red" />
          <div className="book-3d__pages" />
          <div className="book-3d__back book-3d__back--red" />
        </div>

        {/* Center Book (Main) */}
        <div className="book-3d book-3d--center">
          <div className="book-3d__cover">
            <img src="/hero-book.jpg" alt="Featured Book" className="book-3d__image" />
            <div className="book-3d__shine" />
          </div>
          <div className="book-3d__spine" />
          <div className="book-3d__pages" />
          <div className="book-3d__back" />
        </div>

        {/* Right Book */}
        <div className="book-3d book-3d--right">
          <div className="book-3d__cover">
            <img src="/hero-book-right.jpg" alt="Featured Book" className="book-3d__image" />
            <div className="book-3d__shine" />
          </div>
          <div className="book-3d__spine book-3d__spine--green" />
          <div className="book-3d__pages" />
          <div className="book-3d__back book-3d__back--green" />
        </div>
      </div>

      {/* CTA overlay on hover */}
      <div className={`book-hero-cta ${isHovered ? 'book-hero-cta--visible' : ''}`}>
        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>auto_stories</span>
        <p>Explore Categories</p>
      </div>

      {/* Glow effect */}
      <div className={`book-glow ${isHovered ? 'book-glow--active' : ''}`} />
    </div>
  );
}
