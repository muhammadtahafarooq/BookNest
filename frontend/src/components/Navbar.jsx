import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link className="text-on-primary/80 hover:text-secondary-fixed font-label-md text-label-md transition-colors duration-300" to="/shopbrowsebooks">
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
          <button
            aria-label="search"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2"
            onClick={() => navigate('/searchresultsbooknest')}
          >
            <span className="material-symbols-outlined">search</span>
          </button>

          <button
            aria-label="favorite"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2"
            onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}
          >
            <span className="material-symbols-outlined">favorite</span>
          </button>

          <button
            aria-label="shopping_cart"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2 relative"
            onClick={() => navigate('/shoppingcartyourbookcollection')}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>

          <button
            aria-label="account_circle"
            className="text-on-primary hover:text-secondary-fixed transition-colors duration-300 p-2"
            onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="menu"
            className="md:hidden text-on-primary hover:text-secondary-fixed p-2 transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-outline/20 px-6 py-4 flex flex-col space-y-4">
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/shopbrowsebooks" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/categoriesexploration" onClick={() => setMobileOpen(false)}>Categories</Link>
          <Link className="text-on-primary font-label-md text-label-md hover:text-secondary-fixed transition-colors" to="/shopbrowsebooks" onClick={() => setMobileOpen(false)}>New Arrivals</Link>
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
