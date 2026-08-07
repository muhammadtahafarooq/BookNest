import React from 'react';
import './CustomerDashboardMyPersonalBookshelf.css';

export default function CustomerDashboardMyPersonalBookshelf() {
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary docked full-width top-0 shadow-md z-50">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
<div className="flex items-center gap-8">
<a className="font-display-lg text-display-lg font-bold text-on-primary tracking-tight" href="#">BookNest</a>
{/* Navigation Links */}
<div className="hidden md:flex gap-6 items-center">
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Shop</a>
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Categories</a>
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Best Sellers</a>
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">New Arrivals</a>
</div>
</div>
{/* Trailing Icons */}
<div className="flex items-center gap-4">
<button className="text-on-primary hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="text-on-primary hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
</button>
<button className="text-on-primary hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button className="text-on-primary border-b-2 border-secondary-fixed pb-1 hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
{/* Main Content Layout */}
<div className="flex-1 w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col md:flex-row gap-8">
{/* Sidebar Navigation */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="bg-surface-container-lowest rounded-xl shadow-ambient p-6 sticky top-28">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-headline-md text-headline-md font-bold">
                        A
                    </div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Ahmed</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Member since 2023</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-highest text-on-surface font-body-md text-body-md font-medium transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
                        Profile
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
                        Orders
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
                        Wishlist
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
                        Addresses
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="star_outline">star_outline</span>
                        Reviews
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Account Settings
                    </a>
</nav>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col gap-10">
{/* Welcome & Summary */}
<section>
<h1 className="font-display-lg text-display-lg text-on-background mb-8">Welcome back, Ahmed</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-tertiary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Total Orders</p>
<p className="font-headline-lg text-headline-lg text-on-surface">24</p>
</div>
<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-tertiary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Wishlist Books</p>
<p className="font-headline-lg text-headline-lg text-on-surface">12</p>
</div>
<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-tertiary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Reviews Written</p>
<p className="font-headline-lg text-headline-lg text-on-surface">8</p>
</div>
<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-tertiary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Saved Addresses</p>
<p className="font-headline-lg text-headline-lg text-on-surface">2</p>
</div>
</div>
</section>
{/* Recent Orders */}
<section>
<div className="flex justify-between items-end mb-6">
<h2 className="font-headline-lg text-headline-lg text-on-background">Recent Discoveries</h2>
<a className="font-label-md text-label-md text-secondary hover:underline" href="#">View all orders</a>
</div>
<div className="flex flex-col gap-4">
{/* Order Item 1 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient flex flex-col md:flex-row gap-6 items-center md:items-start group hover:shadow-hover transition-shadow">
<div className="w-32 h-48 flex-shrink-0 relative">
<img className="w-full h-full object-cover rounded shadow-lg group-hover:-translate-y-1 transition-transform duration-300" data-alt="A pristine hardcover book with an elegant, minimalist dust jacket design featuring muted tones and fine typography, sitting upright slightly angled on a bright, clean white surface. Soft, high-key studio lighting casts a subtle, realistic shadow, giving it a premium, intellectual aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwtN4L5DFpzZamIqvdFTDmJxQyRU63H9rxSOunfkh_ErUy29Bm_2bnJ5WtGx4Rrn-kYKJEYg8lydBeiq6G1NFAFUrr8Fsqdb7riHsL1amurE4b-67U82WXzEHLd1LwLeBPsMwnghZIA_m68GxBZAXTYMbM6NhciJlhlalvDYKlhPZeJWVz_YD8JOvR3oI3NnJVTVvPamIZdyEZx0Io5aCxhYaTJdX7dU-AvoqLjm_-DMmu192EsoQS" />
</div>
<div className="flex-1 w-full">
<div className="flex justify-between items-start mb-2">
<div>
<span className="inline-block px-2 py-1 bg-tertiary-fixed/30 text-on-tertiary-fixed font-label-sm text-label-sm rounded mb-2">In Transit</span>
<h3 className="font-headline-md text-headline-md text-on-surface">The Architecture of Happiness</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Alain de Botton</p>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Order #BN-9823</span>
</div>
<div className="mt-6 flex gap-4">
<button className="px-6 py-2 bg-on-tertiary-fixed text-tertiary-fixed rounded font-label-md text-label-md hover:bg-on-tertiary-fixed-variant transition-colors">Track Order</button>
<button className="px-6 py-2 border border-outline text-on-surface rounded font-label-md text-label-md hover:bg-surface-container transition-colors">View Details</button>
</div>
</div>
</div>
{/* Order Item 2 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient flex flex-col md:flex-row gap-6 items-center md:items-start group hover:shadow-hover transition-shadow">
<div className="w-32 h-48 flex-shrink-0 relative">
<img className="w-full h-full object-cover rounded shadow-lg group-hover:-translate-y-1 transition-transform duration-300" data-alt="A classic literary fiction paperback book with a sophisticated, textured cover featuring subtle, abstract art in soft whites and deep navy blues. It is resting slightly open on a bright, clean white desk surface under soft, natural lighting, conveying a calm, intellectual reading environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbctSq_AJxLMp2lDU99SXbPjHXdH3ePJWZhe0m6taHZthAHM10EN1l-WSjGtsRkPDFRj5Jn3YjDpOROnWqinJDXdkSvllR13MjHKKAzytbdxz7B21Zr2WcBRg0cz02MoGecD4DOZ93vT-CarTXOSDPIEkU3Ip-A5dyl5TFEd0osN5FuPF1ZqqddnrEZPstmy66ulN6uQIOOpDFJLtdQNhNkCw62JpqDr_2fRufM_7d8AHEXk8lq3Ti" />
</div>
<div className="flex-1 w-full">
<div className="flex justify-between items-start mb-2">
<div>
<span className="inline-block px-2 py-1 bg-surface-variant text-on-surface font-label-sm text-label-sm rounded mb-2">Delivered</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Invisible Cities</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Italo Calvino</p>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Order #BN-9710</span>
</div>
<div className="mt-6 flex gap-4">
<button className="px-6 py-2 bg-on-tertiary-fixed text-tertiary-fixed rounded font-label-md text-label-md hover:bg-on-tertiary-fixed-variant transition-colors">Write Review</button>
<button className="px-6 py-2 border border-outline text-on-surface rounded font-label-md text-label-md hover:bg-surface-container transition-colors">Buy Again</button>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
{/* Footer */}
<footer className="bg-primary dark:bg-primary border-t border-outline/20 mt-auto">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1">
<p className="font-headline-md text-headline-md font-bold text-on-primary mb-4">BookNest</p>
<p className="font-body-sm text-body-sm text-outline-variant opacity-80">© 2024 BookNest Pakistan. All rights reserved.</p>
</div>
<div className="col-span-1 flex flex-col gap-2">
<a className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" href="#">About Us</a>
<a className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" href="#">Contact</a>
</div>
<div className="col-span-1 flex flex-col gap-2">
<a className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" href="#">Shipping Policy</a>
<a className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
</div>
<div className="col-span-1 flex flex-col gap-2">
<a className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
</div>
</div>
</footer>
    </>
  );
}
