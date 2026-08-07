import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './CatalogArchive.css';

export default function CatalogArchive() {
  
  useEffect(() => {
    // Simple scroll observer for progressive reveal on cards
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.book-card').forEach((card, index) => {
                // Set initial state for cards
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)`;
                observer.observe(card);
            });
        });
      const navigate = useNavigate();
  return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary-container docked full-width top-0 border-b border-outline dark:border-outline-variant shadow-sm dark:shadow-none sticky z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
<Link className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container tracking-tight" to="/">BookNest</Link>
<div className="hidden md:flex items-center space-x-lg">
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 font-label-md text-label-md" to="/">Home</Link>
<Link className="text-on-primary dark:text-on-primary-container border-b-2 border-on-secondary-container hover:opacity-80 transition-opacity duration-300 font-label-md text-label-md" to="/shopbrowsebooks">Shop</Link>
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 font-label-md text-label-md" to="/shopbrowsebooks">Categories</Link>
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 font-label-md text-label-md" to="/shopbrowsebooks">Blog</Link>
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 font-label-md text-label-md" to="/aboutusourstorybooknest">About</Link>
</div>
<div className="flex items-center space-x-sm">
<button aria-label="Shopping Bag" className="p-sm text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
<button aria-label="Person" className="p-sm text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined" data-icon="person">person</span>
</button>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
{/* Page Header */}
{/* <Navbar /> */}
<Navbar />
{/* Search Area */}
<div className="mb-xl fade-in-up stagger-1">
<div className="relative w-full max-w-3xl mx-auto md:mx-0">
<input className="w-full bg-soft-archive-white border border-stone-manuscript text-obsidian-ink rounded-lg py-3 pl-12 pr-4 focus:ring-1 focus:ring-obsidian-ink focus:border-obsidian-ink transition-colors font-body-md shadow-sm" placeholder="Search by title, author, ISBN, publisher..." type="text" />
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
</div>
</div>
{/* 12-Column Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
{/* Filter Sidebar (Cols 1-3) */}
<aside className="md:col-span-3 hidden md:block border-r border-stone-manuscript pr-lg sticky top-[100px] h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar fade-in-up stagger-2">
<h2 className="font-headline-sm text-headline-sm text-obsidian-ink mb-lg border-b border-stone-manuscript pb-sm">Filters</h2>
{/* Category Filter */}
<div className="mb-lg">
<h3 className="font-label-md text-label-md text-obsidian-ink mb-sm uppercase tracking-wider">Category</h3>
<ul className="space-y-2">
<li>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-burnished-brass border-stone-manuscript rounded-sm focus:ring-burnished-brass filter-checkbox transition-colors" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-obsidian-ink transition-colors">Fiction (342)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-burnished-brass border-stone-manuscript rounded-sm focus:ring-burnished-brass filter-checkbox transition-colors" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-obsidian-ink transition-colors">History (128)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-burnished-brass border-stone-manuscript rounded-sm focus:ring-burnished-brass filter-checkbox transition-colors" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-obsidian-ink transition-colors">Science (89)</span>
</label>
</li>
</ul>
</div>
{/* Price Filter */}
<div className="mb-lg">
<h3 className="font-label-md text-label-md text-obsidian-ink mb-sm uppercase tracking-wider">Price Range</h3>
<div className="space-y-2">
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-radio h-4 w-4 text-burnished-brass border-stone-manuscript focus:ring-burnished-brass transition-colors" name="price" type="radio" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-obsidian-ink transition-colors">Under $50</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-radio h-4 w-4 text-burnished-brass border-stone-manuscript focus:ring-burnished-brass transition-colors" name="price" type="radio" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-obsidian-ink transition-colors">$50 - $150</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-radio h-4 w-4 text-burnished-brass border-stone-manuscript focus:ring-burnished-brass transition-colors" name="price" type="radio" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-obsidian-ink transition-colors">Rare &amp; Collectible ($150+)</span>
</label>
</div>
</div>
</aside>
{/* Main Content Area (Cols 4-12) */}
<div className="md:col-span-9 flex flex-col fade-in-up stagger-3">
{/* Sorting Toolbar */}
<div className="flex flex-col sm:flex-row justify-between items-center mb-lg pb-sm border-b border-stone-manuscript">
<p className="font-label-md text-label-md text-on-surface-variant mb-sm sm:mb-0">Showing 1-12 of 559 Items</p>
<div className="flex items-center space-x-md">
<div className="flex items-center space-x-2">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="sort">Sort By:</label>
<select className="bg-transparent border-none text-obsidian-ink font-label-md focus:ring-0 cursor-pointer pr-8" id="sort">
<option>Newest Arrivals</option>
<option>Price: High to Low</option>
<option>Price: Low to High</option>
<option>Popularity</option>
</select>
</div>
<div className="hidden sm:flex border-l border-stone-manuscript pl-md space-x-1">
<button aria-label="Grid View" className="p-1 text-obsidian-ink hover:text-burnished-brass transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view" style={{fontVariationSettings: '\'FILL\' 1'}}>grid_view</span>
</button>
<button aria-label="List View" className="p-1 text-outline hover:text-obsidian-ink transition-colors">
<span className="material-symbols-outlined" data-icon="view_list">view_list</span>
</button>
</div>
</div>
</div>
{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg mb-xl">
{/* Book Card 1 */}
<article className="book-card bg-soft-archive-white rounded-lg p-lg border border-stone-manuscript flex flex-col shadow-[0_4px_20px_rgba(23,26,28,0.05)] relative group cursor-pointer">
<div className="w-full h-64 mb-md rounded bg-surface-container-low flex items-center justify-center overflow-hidden">
<img className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A vintage, leather-bound first edition book sitting on an elegant desk with subtle warm library lighting illuminating gold foil lettering on the spine, shot in a highly detailed product photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEI-eplEFU8Fd9Ehrl2yWB9bMKaPdw01BAqSMx-8CTumB1MvqcDntGc7QWUYGXjby_lgwAymZ2SWwzDq-frly_BsBtERyQLxJaQGIOZuAHZKKfk6ltwd3ekxNwkVA_7byNCguWWA3Ww1sCsUdD84R6kBsnJbYCYqK2jM6TO2AehbrLA6_Ld9lSS_bpXXPdd-Lf7b_Ygglmciq_PzSzz0mjWp5iELcO2_p3-yl0Ny7T1vyhmSAiam6v5w" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="bg-deep-forest text-white px-2 py-0.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider">First Edition</span>
<span className="material-symbols-outlined text-burnished-brass text-sm" data-icon="star" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-1 line-clamp-2 leading-tight">The Architecture of Time</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">E.L. Sterling</p>
<div className="mt-auto flex items-center justify-between pt-md border-t border-stone-manuscript border-opacity-50">
<span className="font-headline-sm text-headline-sm text-obsidian-ink">$145.00</span>
<button aria-label="Add to cart" className="bg-burnished-brass hover:bg-obsidian-ink text-white p-2 rounded-full transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Book Card 2 */}
<article className="book-card bg-soft-archive-white rounded-lg p-lg border border-stone-manuscript flex flex-col shadow-[0_4px_20px_rgba(23,26,28,0.05)] relative group cursor-pointer">
<div className="w-full h-64 mb-md rounded bg-surface-container-low flex items-center justify-center overflow-hidden">
<img className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist hardcover book featuring abstract geometric cover art in deep forest green and ivory, resting on a flat archival surface with soft diffused natural light, conveying a modern premium editorial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg0KurfTj29ULlb6kV2B_A1ScmrAHlasIumuvii1p_B-SVfTPD5qRWfuJzmCeFbABMeYPn4iOChwnWYLoUWIV_B819eHE75bPt5ENnJduU2P9qn_XPOABd6K5Wo6Aq7RYynsK6bATtUEqCA6C_QEyGJlUnh1x7sL-JndjamNaLW3Xxyu8HyRAN3u48qF4gQLCNo5EUID_7NCJvzWwm4jzXkRgdx-7DyPv_qxALNVdO8iIy3mniOAleGg" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider">Hardcover</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-1 line-clamp-2 leading-tight">Silent Typographies</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Marcus Vance</p>
<div className="mt-auto flex items-center justify-between pt-md border-t border-stone-manuscript border-opacity-50">
<span className="font-headline-sm text-headline-sm text-obsidian-ink">$68.00</span>
<button aria-label="Add to cart" className="bg-burnished-brass hover:bg-obsidian-ink text-white p-2 rounded-full transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Book Card 3 */}
<article className="book-card bg-soft-archive-white rounded-lg p-lg border border-stone-manuscript flex flex-col shadow-[0_4px_20px_rgba(23,26,28,0.05)] relative group cursor-pointer">
<div className="w-full h-64 mb-md rounded bg-surface-container-low flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-black/10 z-10 hidden group-hover:flex items-center justify-center transition-all duration-300">
<span className="bg-white/90 text-obsidian-ink px-4 py-2 rounded-full font-label-sm font-semibold shadow-sm">Quick View</span>
</div>
<img className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A collection of beautifully preserved botanical illustration books stacked elegantly, showing detailed leaf patterns on the spines, captured in a bright, soft-archive white environment signifying high-end curation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtNY9axHg2XnsfO5CC047bOvkhrVR0TGWp4dXQS9p5aq_xplJYnAVuZD1r3Bd03rpTwvMQ-CR39y8Ov6f64el0AKnjQ4Vz_MSdgA8RiDpwQ9QTmqQLUAa4QftN-CXanIjGld5_U0c93JlzBDfn4xInsjRPIFLYcJCu3BZzVGAjd53SErc7LB_D4tLscEoNZZ8n1T1P1kARMlCa4kaAcPayAMUk_mUqxmJ20nig7EYNNQEcBrIJ-zp6uQ" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="bg-deep-forest text-white px-2 py-0.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider">Rare</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-1 line-clamp-2 leading-tight">Flora Borealis</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Dr. Helena Croft</p>
<div className="mt-auto flex items-center justify-between pt-md border-t border-stone-manuscript border-opacity-50">
<span className="font-headline-sm text-headline-sm text-obsidian-ink">$320.00</span>
<button aria-label="Add to cart" className="bg-burnished-brass hover:bg-obsidian-ink text-white p-2 rounded-full transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>
</div>
</div>
</article>
</div>
{/* Pagination */}
<div className="flex justify-center items-center space-x-2 mt-auto border-t border-stone-manuscript pt-lg pb-md">
<button className="w-10 h-10 flex items-center justify-center rounded border border-stone-manuscript text-outline hover:text-obsidian-ink hover:border-obsidian-ink transition-colors disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded bg-obsidian-ink text-white font-label-md">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-transparent text-on-surface-variant hover:bg-stone-manuscript hover:text-obsidian-ink transition-colors font-label-md">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-transparent text-on-surface-variant hover:bg-stone-manuscript hover:text-obsidian-ink transition-colors font-label-md">3</button>
<span className="text-outline px-2">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded border border-transparent text-on-surface-variant hover:bg-stone-manuscript hover:text-obsidian-ink transition-colors font-label-md">47</button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-stone-manuscript text-obsidian-ink hover:bg-stone-manuscript transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
{/* Footer */}
<Footer />
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
