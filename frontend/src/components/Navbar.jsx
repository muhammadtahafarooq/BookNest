import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { animate } from 'animejs';

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  
  const searchIconRef = useRef(null);
  const favIconRef = useRef(null);
  const cartIconRef = useRef(null);
  const accountIconRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleCartAdd = () => {
      if (cartIconRef.current) {
        animate(cartIconRef.current, {
          scale: [1, 1.4, 1],
          duration: 350,
          easing: 'easeOutElastic(1, .8)'
        });
      }
    };
    window.addEventListener('cart-updated', handleCartAdd);
    return () => window.removeEventListener('cart-updated', handleCartAdd);
  }, []);

  const animateSearch = () => {
    animate(searchIconRef.current, {
      rotate: [0, -15, 15, 0],
      duration: 400,
      easing: 'easeInOutSine'
    });
  };

  const animateFavorite = () => {
    animate(favIconRef.current, {
      scale: [1, 1.3, 0.9, 1.1, 1],
      duration: 500,
      easing: 'easeOutQuad'
    });
  };

  const animateAccount = () => {
    animate(accountIconRef.current, {
      rotateY: [0, 180, 360],
      duration: 600,
      easing: 'easeInOutSine'
    });
  };

  const animateMenu = () => {
    animate(menuIconRef.current, {
      scale: [1, 1.2, 1],
      duration: 300,
      easing: 'easeInOutSine'
    });
  };

  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  const performSearch = () => {
    const trimmed = searchQuery.trim();
    if (trimmed) {
      navigate(`/searchresultsbooknest?q=${encodeURIComponent(trimmed)}`);
      setShowSearchInput(false);
    } else {
      setShowSearchInput(true);
    }
  };

  const handleSearchKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  };

  return (
    <header className="bg-primary shadow-sm docked full-width top-0 z-50 sticky transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max-width mx-auto py-4">
        {/* Brand Logo */}
        <Link className="text-headline-lg font-display-lg font-bold text-on-primary" to="/">
          BookNest
        </Link>

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link className="text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1 font-label-md text-label-md transition-colors duration-300" to="/shopbrowsebooks">
            Shop
          </Link>
          <Link className="text-on-primary/80 hover:text-secondary-fixed font-label-md text-label-md transition-colors duration-300" to="/categoriesexploration">
            Categories
          </Link>
          <Link className="text-on-primary/80 hover:text-secondary-fixed font-label-md text-label-md transition-colors duration-300" to="/newarrivals">
            New Arrivals
          </Link>
          <Link className="text-on-primary/80 hover:text-secondary-fixed font-label-md text-label-md transition-colors duration-300" to="/blogstoriesinspiration">
            Blog
          </Link>
          <Link className="text-on-primary/80 hover:text-secondary-fixed font-label-md text-label-md transition-colors duration-300" to="/aboutusourstorybooknest">
            About
          </Link>
        </nav>

        {/* Trailing Icons */}
        <div className="flex items-center space-x-4">
          {showSearchInput && (
            <div className="flex items-center rounded-full border border-outline/20 bg-surface px-3 py-2 shadow-sm">
              <input
                ref={searchInputRef}
                className="bg-transparent outline-none text-on-primary placeholder:text-on-primary/50 text-sm w-44 sm:w-48"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKey}
              />
              <button
                type="button"
                className="text-on-primary/80 hover:text-on-primary transition-colors"
                onClick={performSearch}
                aria-label="search"
              >
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
          )}
          <button
            aria-label="search"
            className="relative text-on-primary hover:text-secondary-fixed transition-all duration-300 p-2 hover:scale-110"
            onMouseEnter={animateSearch}
            onClick={performSearch}
          >
            <span ref={searchIconRef} className="material-symbols-outlined inline-block">search</span>
          </button>

          <button
            aria-label="favorite"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2"
            onMouseEnter={animateFavorite}
            onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}
          >
            <span ref={favIconRef} className="material-symbols-outlined inline-block">favorite</span>
          </button>

          <button
            aria-label="shopping_cart"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2 relative"
            onClick={() => navigate('/shoppingcartyourbookcollection')}
          >
            <span ref={cartIconRef} className="material-symbols-outlined inline-block">shopping_cart</span>
          </button>

          <button
            aria-label="account_circle"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2"
            onMouseEnter={animateAccount}
            onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}
          >
            <span ref={accountIconRef} className="material-symbols-outlined inline-block" style={{ perspective: 1000 }}>account_circle</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="menu"
            className="md:hidden text-on-primary hover:text-secondary-fixed p-2 transition-colors duration-300"
            onMouseEnter={animateMenu}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span ref={menuIconRef} className="material-symbols-outlined inline-block">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-outline/20 px-6 py-4 flex flex-col space-y-4">
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/shopbrowsebooks" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/categoriesexploration" onClick={() => setMobileOpen(false)}>Categories</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/newarrivals" onClick={() => setMobileOpen(false)}>New Arrivals</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/blogstoriesinspiration" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/aboutusourstorybooknest" onClick={() => setMobileOpen(false)}>About</Link>
          <hr className="border-outline/20" />
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/loginbooknestprivatelibrary" onClick={() => setMobileOpen(false)}>Sign In</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/createaccountbooknest" onClick={() => setMobileOpen(false)}>Register</Link>
        </nav>
      )}
    </header>
  );
}
