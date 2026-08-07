import React from 'react';
import './FaqBooknestSupport.css';

export default function FaqBooknestSupport() {
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-surface-container-lowest shadow-sm docked full-width top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max-width mx-auto h-20">
<div className="flex items-center gap-8">
<a className="font-headline-lg text-primary font-bold tracking-tight" href="#">BookNest</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-400" href="#">Shop</a>
<a className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-400" href="#">Categories</a>
<a className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-400" href="#">Best Sellers</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-primary hover:text-secondary transition-colors duration-400">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
<button className="p-2 text-primary hover:text-secondary transition-colors duration-400">
<span className="material-symbols-outlined">person</span>
</button>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow">
{/* FAQ HERO */}
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto text-center">
<h1 className="font-headline-lg text-4xl md:text-5xl text-primary mb-6">How can we help?</h1>
<p className="font-body-lg text-on-surface-variant mb-12 text-lg">Find answers to frequently asked questions about our private library services.</p>
<div className="relative max-w-xl mx-auto">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md shadow-sm transition-all outline-none" placeholder="Search for answers..." type="text" />
</div>
</section>
{/* FAQ Content Grid */}
<section className="px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto pb-24 grid md:grid-cols-12 gap-12">
{/* Sidebar Categories */}
<aside className="md:col-span-3 space-y-2 sticky top-28 h-fit hidden md:block">
<button className="w-full text-left px-4 py-3 rounded-xl bg-primary text-on-primary font-body-md font-medium transition-colors">Orders</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-on-surface hover:bg-surface-container-highest font-body-md transition-colors">Payments</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-on-surface hover:bg-surface-container-highest font-body-md transition-colors">Shipping</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-on-surface hover:bg-surface-container-highest font-body-md transition-colors">Returns</button>
</aside>
{/* Accordions */}
<div className="md:col-span-9 space-y-16">
{/* Category: Orders */}
<div className="space-y-6">
<h2 className="font-headline-md text-2xl text-primary mb-6 border-b border-outline/10 pb-4">Orders</h2>
<div className="space-y-4">
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline/5 overflow-hidden accordion-btn cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center" onclick="this.parentElement.classList.toggle('active')">
<h3 className="font-headline-md text-[20px] font-semibold text-primary">How do I track my order?</h3>
<span className="material-symbols-outlined accordion-icon transition-transform text-secondary">expand_more</span>
</div>
<div className="accordion-content px-6 text-on-surface-variant font-body-md leading-[1.6]">
                                Once your order is shipped, you will receive an email containing a tracking number and a link to the courier's website. You can also view your tracking information by logging into your BookNest account and visiting the 'Order History' section.
                            </div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline/5 overflow-hidden accordion-btn cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center" onclick="this.parentElement.classList.toggle('active')">
<h3 className="font-headline-md text-[20px] font-semibold text-primary">Can I cancel a pre-order?</h3>
<span className="material-symbols-outlined accordion-icon transition-transform text-secondary">expand_more</span>
</div>
<div className="accordion-content px-6 text-on-surface-variant font-body-md leading-[1.6]">
                                Yes, pre-orders can be cancelled for a full refund up to 24 hours before the official release date. Please contact our support team with your order number to process the cancellation.
                            </div>
</div>
</div>
</div>
{/* Category: Payments */}
<div className="space-y-6">
<h2 className="font-headline-md text-2xl text-primary mb-6 border-b border-outline/10 pb-4">Payments</h2>
<div className="space-y-4">
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline/5 overflow-hidden accordion-btn cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center" onclick="this.parentElement.classList.toggle('active')">
<h3 className="font-headline-md text-[20px] font-semibold text-primary">Which payment methods do you accept?</h3>
<span className="material-symbols-outlined accordion-icon transition-transform text-secondary">expand_more</span>
</div>
<div className="accordion-content px-6 text-on-surface-variant font-body-md leading-[1.6]">
                                We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For corporate accounts, invoice-based billing can be arranged upon request.
                            </div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline/5 overflow-hidden accordion-btn cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center" onclick="this.parentElement.classList.toggle('active')">
<h3 className="font-headline-md text-[20px] font-semibold text-primary">Is my transaction secure?</h3>
<span className="material-symbols-outlined accordion-icon transition-transform text-secondary">expand_more</span>
</div>
<div className="accordion-content px-6 text-on-surface-variant font-body-md leading-[1.6]">
                                Absolutely. All transactions are encrypted using industry-standard SSL technology. We do not store your credit card information on our servers; payments are processed through secure, PCI-compliant payment gateways.
                            </div>
</div>
</div>
</div>
{/* Category: Shipping */}
<div className="space-y-6">
<h2 className="font-headline-md text-2xl text-primary mb-6 border-b border-outline/10 pb-4">Shipping</h2>
<div className="space-y-4">
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline/5 overflow-hidden accordion-btn cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center" onclick="this.parentElement.classList.toggle('active')">
<h3 className="font-headline-md text-[20px] font-semibold text-primary">What are your delivery times?</h3>
<span className="material-symbols-outlined accordion-icon transition-transform text-secondary">expand_more</span>
</div>
<div className="accordion-content px-6 text-on-surface-variant font-body-md leading-[1.6]">
                                Standard domestic shipping typically takes 3-5 business days. Expedited shipping is available at checkout for delivery within 1-2 business days.
                            </div>
</div>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="bg-primary text-on-primary py-16 px-margin-mobile text-center">
<h2 className="font-headline-md text-3xl mb-4">Still have questions?</h2>
<p className="font-body-md text-on-primary/80 mb-8 max-w-md mx-auto">Our dedicated concierge team is available to assist you with any inquiries regarding our private library services.</p>
<button className="bg-secondary text-primary font-body-md font-semibold py-3 px-8 rounded-xl hover:bg-secondary/90 transition-colors shadow-sm">Contact Support</button>
</section>
</main>
{/* Footer */}
<footer className="bg-primary-container text-on-primary-fixed w-full py-12 px-margin-desktop">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-gutter">
<div className="font-headline-md text-headline-md text-on-primary-fixed font-bold">BookNest</div>
<div className="flex gap-6">
<a className="font-body-sm text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-400" href="#">About Us</a>
<a className="font-body-sm text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-400" href="#">Contact</a>
<a className="font-body-sm text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-400" href="#">Policies</a>
</div>
<div className="font-body-sm text-on-primary-fixed-variant">© 2024 BookNest. All rights reserved.</div>
</div>
</footer>
    </>
  );
}
