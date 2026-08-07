import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './ShippingReturnsBooknestGuide.css';

export default function ShippingReturnsBooknestGuide() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar (Shared Component) */}
<header className="bg-primary shadow-md sticky top-0 z-50 transition-all duration-300 w-full" id="top-nav">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
{/* Brand Logo */}
<Link className="font-display-lg text-display-lg font-bold text-on-primary" to="/">
                BookNest
            </Link>
{/* Navigation Links (Web) */}
<nav className="hidden md:flex gap-8">
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors py-2" to="/shopbrowsebooks">Shop</Link>
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors py-2" to="/shopbrowsebooks">Categories</Link>
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors py-2" to="/shopbrowsebooks">Best Sellers</Link>
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors py-2" to="/shopbrowsebooks">New Arrivals</Link>
</nav>
{/* Trailing Icons */}
<div className="flex items-center gap-4">
<button className="text-on-primary hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
</button>
<button className="text-on-primary hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button className="text-on-primary hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex-grow flex flex-col relative z-10">
{/* Hero Header */}
<section className="relative w-full overflow-hidden pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 z-10">
<p className="font-label-md text-label-md text-accent-brass uppercase tracking-widest mb-4">Customer Service</p>
<h1 className="text-editorial text-5xl md:text-7xl font-light leading-tight text-primary mb-6">
                    Delivery made<br />
<span className="italic font-light">simple</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8">
                    We believe the joy of a new book shouldn't be delayed. Experience our meticulous packaging and swift nationwide delivery network designed for bibliophiles.
                </p>
</div>
<div className="w-full md:w-1/2 relative z-0 h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
<img className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out" data-alt="A beautifully crafted, premium hardcover book being carefully wrapped in thick, textured craft paper and tied with a subtle golden string inside a minimalist, well-lit modern warehouse setting. Soft, natural lighting highlights the dust jacket's texture and the precise packaging process, evoking a sense of premium care and anticipation in a light-mode aesthetic with deep midnight blue and warm brass accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDima0xd2k2otAdOHbe1tJccrPht7Dj_mFV9NSjaybeGLsO0KdR7wj55THb1QaxYispKh2Vj1_0e_YWxiM5B4nd98TrG2NG9roOR834H_KNIjgno_pkcF0QaBP79k3y_EEbi3QHf-7pjPmdtnxvTOzuLiTop0jJQ7E-sXv3NWUX3tmr_zEiZP6yPXv_yVaHF-irrNpJOteVEcE1FCSY_Jp_28J8Io2J99Ylzr9X0TLahzKJZlmlIVmP" />
</div>
</section>
{/* Shipping Information & Methods (Bento Grid Style) */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
<div className="max-w-container-max-width mx-auto">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-editorial text-4xl text-primary mb-6">Our Delivery Network</h2>
<p className="font-body-md text-body-md text-on-surface-variant">We partner with top-tier couriers to ensure your literary treasures arrive pristine and on time, covering all major cities and remote areas across Pakistan.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Standard Shipping */}
<div className="col-span-1 md:col-span-2 bg-surface-muted rounded-xl p-8 border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Standard Delivery</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Reliable &amp; cost-effective</p>
</div>
<span className="bg-primary text-white font-label-md px-4 py-2 rounded-full">Rs. 150</span>
</div>
<div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-surface-container-highest">
<div>
<p className="font-label-sm text-label-sm text-outline uppercase mb-1">Timeline</p>
<p className="font-body-md text-body-md font-medium text-primary">3 - 5 Business Days</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-outline uppercase mb-1">Coverage</p>
<p className="font-body-md text-body-md font-medium text-primary">Nationwide</p>
</div>
</div>
</div>
{/* Express Shipping */}
<div className="col-span-1 bg-primary text-white rounded-xl p-8 shadow-lg relative overflow-hidden group">
{/* Decorative element */}
<div className="absolute top-0 right-0 w-32 h-32 bg-accent-brass/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="font-headline-md text-headline-md mb-2">Express Delivery</h3>
<p className="font-body-sm text-body-sm text-inverse-on-surface/80">For urgent reading needs</p>
</div>
<div className="mt-8">
<div className="flex items-baseline gap-2 mb-4">
<span className="text-3xl font-bold">Rs. 350</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-inverse-on-surface/60 uppercase mb-1">Timeline</p>
<p className="font-body-md text-body-md font-medium">1 - 2 Business Days</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Return Policy */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-[#F6F3EC]">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row gap-16 items-start">
<div className="w-full md:w-1/3 sticky top-32">
<h2 className="text-editorial text-4xl text-primary mb-4">Returns &amp; Refunds</h2>
<p className="font-body-md text-body-md text-on-surface-variant">We stand behind the quality of our collection. If a book arrives damaged or you received the wrong title, our seamless return process is here to help.</p>
</div>
<div className="w-full md:w-2/3 flex flex-col gap-8">
{/* Policy Rule 1 */}
<div className="glass-panel p-8 rounded-xl flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-accent-brass/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-accent-brass" data-icon="history">history</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary mb-2">7-Day Window</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Initiate a return within 7 days of receiving your order. The book must be unread, unmarked, and in its original pristine condition.</p>
</div>
</div>
{/* Policy Rule 2 */}
<div className="glass-panel p-8 rounded-xl flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-accent-brass/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-accent-brass" data-icon="sync_alt">sync_alt</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary mb-2">The Process</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Log into your account, select the order, and request a return. We will arrange a pickup from your location within 48 hours.</p>
</div>
</div>
{/* Policy Rule 3 */}
<div className="glass-panel p-8 rounded-xl flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-accent-brass/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-accent-brass" data-icon="payments">payments</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary mb-2">Refunds</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Once inspected at our facility, refunds are processed immediately to your original payment method, typically reflecting within 3-5 bank days.</p>
</div>
</div>
</div>
</div>
</section>
{/* Support CTA (Golden Bookmark Theme) */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
<div className="max-w-4xl mx-auto bg-primary rounded-2xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row">
{/* Decorative Golden Bookmark */}
<div className="absolute top-0 left-8 w-12 h-32 bg-accent-brass z-10 flex items-end justify-center pb-2 shadow-lg hidden md:flex" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)'}}>
<span className="material-symbols-outlined text-white/50 text-sm mb-2" data-icon="star">star</span>
</div>
<div className="p-12 md:pl-32 flex-grow relative z-20 flex flex-col justify-center">
<h2 className="text-editorial text-3xl md:text-4xl text-white mb-4">Still have questions?</h2>
<p className="font-body-md text-body-md text-inverse-on-surface/80 mb-8 max-w-md">Our dedicated support team is ready to assist you with tracking, special requests, or return queries.</p>
<div className="flex gap-4">
<button className="bg-accent-brass text-primary font-label-md px-6 py-3 rounded-lg hover:bg-white transition-colors duration-300 font-medium">
                            Contact Support
                        </button>
<button className="border border-outline text-white font-label-md px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300" onClick={() => navigate('/dashboard/ordertrackingbooknestprivatelibrary')}>
                            Track Order
                        </button>
</div>
</div>
<div className="w-full md:w-1/3 bg-primary-container hidden md:block">
<div className="bg-cover bg-center w-full h-full opacity-50 mix-blend-overlay" data-alt="A close up, abstract view of a golden silk bookmark resting between the pages of an antique book, illuminated by a warm, sophisticated desk lamp in a dark, midnight blue library setting. The aesthetic is premium, calming, and deeply textural." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBepnXH01iSr2Je0yx_webDUcIw7x_AcVdRkA3RDXJvDyY4aGfWe7s3gXTXGqKEm8UjbzYtwF0jwG3ZI6P2Dg0yHQoQvryskpduAdYadxYhqhtRVJ_PRPR0w2b0z5ZB1ku1Q62IIlEeWmtdB81jCQz8IFbCAaetjmZE5DBfQhnszgtXxkw9pkQDw3p5j4Rs9EBOhiYd01KUtEY7wHus0vbf4M-dXcO4mAog6AfYYa6UyFW0sTxGGzZ7\')'}}></div>
</div>
</div>
</section>
</main>
{/* Footer (Shared Component) */}
<footer className="bg-primary border-t border-outline/20 w-full mt-auto">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
{/* Brand */}
<div className="col-span-1 md:col-span-1">
<Link className="font-headline-md text-headline-md font-bold text-on-primary mb-4 block" to="/">
                    BookNest
                </Link>
<p className="font-body-sm text-body-sm text-outline-variant">
                    © 2024 BookNest Pakistan. All rights reserved.
                </p>
</div>
{/* Links */}
<div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1" to="/aboutusourstorybooknest">About Us</Link>
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1" to="/contactusbooknestsupport">Contact</Link>
<Link className="font-label-sm text-label-sm text-secondary-fixed font-bold opacity-80 hover:opacity-100 py-1" to="/shopbrowsebooks">Shipping Policy</Link>
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1" to="/shopbrowsebooks">Terms of Service</Link>
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1" to="/shopbrowsebooks">Privacy Policy</Link>
</div>
</div>
</footer>
    </>
  );
}
