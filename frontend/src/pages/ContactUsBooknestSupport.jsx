import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './ContactUsBooknestSupport.css';

export default function ContactUsBooknestSupport() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<header className="bg-primary dark:bg-primary docked full-width top-0 shadow-md z-50 transition-all duration-300">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
{/* Brand */}
<Link className="font-display-lg text-display-lg font-bold text-on-primary tracking-tight" to="/">BookNest</Link>
{/* Navigation Links */}
<nav className="hidden md:flex items-center space-x-8">
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/shopbrowsebooks">Shop</Link>
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/shopbrowsebooks">Categories</Link>
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/shopbrowsebooks">Best Sellers</Link>
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/shopbrowsebooks">New Arrivals</Link>
</nav>
{/* Trailing Icons */}
<div className="flex items-center space-x-6 text-on-primary">
<button aria-label="Favorite" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined font-light text-2xl" data-icon="favorite">favorite</span>
</button>
<button aria-label="Shopping Cart" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined font-light text-2xl" data-icon="shopping_cart">shopping_cart</span>
</button>
<button aria-label="Account" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined font-light text-2xl" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex-grow">
{/* CONTACT HERO */}
<section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-[#EAE7E2]">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-60 mix-blend-multiply" data-alt="A high-quality, calm interior of a classic, elegant bookstore or private library. Soft natural light filters through large windows, illuminating neatly organized wooden bookshelves filled with hardcover books. The atmosphere is warm, inviting, and intellectual, evoking a sense of trust and quiet sophistication. The color palette features rich mahogany browns, soft warm whites (Paper Mist), and subtle golden accents, complementing a modern corporate yet human aesthetic." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAaLX1o8ETIgfsCDcZ9f2df2SVtd1DL91Uu7Xjj9YYpKppn2N-QEpz0fLQpv_2N4SPMThnCI91l7eStGZo6BuDZyXH_UEfzhb_bpnf5gmia9QjoduJ6jYJb2eT5aMiThtwZolSjsNS9AjeR_0-rubPfPJxmPVeGbceYhj3Ex8u4dm-WmcdzJG7QTMd--NG_dzLc7fxZwCrSRXRHi3gegrd2kuvMhu-IoNP9t9Eiev57dptpzigxZzxS\')'}}></div>
</div>
<div className="relative z-10 max-w-container-max-width mx-auto px-margin-desktop text-center py-20">
<h1 className="font-fraunces text-5xl md:text-6xl font-light text-[#102A43] mb-6 tracking-tight">We are here to help.</h1>
<p className="font-body-lg text-lg md:text-xl text-[#102A43]/80 max-w-2xl mx-auto font-light">Whether you have a question about an order, need a recommendation, or just want to talk about books, our team is ready.</p>
</div>
</section>
<div className="max-w-container-max-width mx-auto px-margin-desktop -mt-16 relative z-20 mb-24">
{/* CONTACT INFORMATION CARDS (Bento Grid Style) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
{/* Phone */}
<div className="bg-[#F9F8F6] rounded-xl p-8 shadow-ambient border border-white/40 glass-panel transition-transform duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-[#F0EDEF] flex items-center justify-center mb-6 text-[#102A43]">
<span className="material-symbols-outlined" data-icon="call">call</span>
</div>
<h3 className="font-fraunces text-xl font-medium text-[#102A43] mb-2">Phone</h3>
<p className="font-body-md text-[#102A43]/70 mb-4">Mon-Fri from 9am to 6pm PKT.</p>
<Link className="font-label-md text-label-md text-[#C89B3C] hover:text-[#102A43] transition-colors" to="tel:+923001234567">+92 300 123 4567</Link>
</div>
{/* Email */}
<div className="bg-[#F9F8F6] rounded-xl p-8 shadow-ambient border border-white/40 glass-panel transition-transform duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-[#F0EDEF] flex items-center justify-center mb-6 text-[#102A43]">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<h3 className="font-fraunces text-xl font-medium text-[#102A43] mb-2">Email</h3>
<p className="font-body-md text-[#102A43]/70 mb-4">Our friendly team is here to help.</p>
<Link className="font-label-md text-label-md text-[#C89B3C] hover:text-[#102A43] transition-colors" to="mailto:hello@booknest.pk">hello@booknest.pk</Link>
</div>
{/* Location */}
<div className="bg-[#F9F8F6] rounded-xl p-8 shadow-ambient border border-white/40 glass-panel transition-transform duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-[#F0EDEF] flex items-center justify-center mb-6 text-[#102A43]">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</div>
<h3 className="font-fraunces text-xl font-medium text-[#102A43] mb-2">Office</h3>
<p className="font-body-md text-[#102A43]/70 mb-4">Come say hello at our HQ.</p>
<address className="font-label-md text-label-md text-[#C89B3C] not-italic">
                        100 Literary Lane<br />
                        Gulberg III, Lahore<br />
                        Pakistan
                    </address>
</div>
</div>
{/* Main Content Area: Form & FAQs */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
{/* CONTACT FORM */}
<div className="lg:col-span-7 bg-white rounded-xl p-8 md:p-10 shadow-ambient border border-[#E2E8F0]">
<h2 className="font-fraunces text-3xl font-medium text-[#102A43] mb-8">Send us a message</h2>
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="first-name">First name</label>
<input className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none" id="first-name" name="first-name" placeholder="Jane" type="text" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="last-name">Last name</label>
<input className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none" id="last-name" name="last-name" placeholder="Doe" type="text" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="email">Email address</label>
<input className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none" id="email" name="email" placeholder="jane@example.com" type="email" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="subject">Subject</label>
<select className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none" id="subject" name="subject">
<option value="general">General Inquiry</option>
<option value="order">Order Status</option>
<option value="returns">Returns &amp; Exchanges</option>
<option value="press">Press &amp; Media</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="message">Message</label>
<textarea className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none resize-none" id="message" name="message" placeholder="How can we help you today?" rows="5"></textarea>
</div>
<div className="pt-2">
<button className="w-full sm:w-auto px-8 py-4 bg-antique-brass hover:bg-[#B58B35] text-white font-label-md text-label-md rounded-lg transition-all duration-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-antique-brass flex items-center justify-center space-x-2" type="submit">
<span>Send Message</span>
<span className="material-symbols-outlined text-sm" data-icon="send">send</span>
</button>
</div>
</form>
</div>
{/* FAQ SHORTCUT SECTION */}
<div className="lg:col-span-5 flex flex-col space-y-10 mt-10 lg:mt-0">
<div>
<h2 className="font-fraunces text-2xl font-medium text-[#102A43] mb-6">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="group border-b border-[#E2E8F0] pb-4">
<h4 className="font-label-md text-label-md text-[#102A43] mb-2 group-hover:text-[#C89B3C] transition-colors flex items-center justify-between cursor-pointer">
                                    How can I track my order?
                                    <span className="material-symbols-outlined text-sm text-[#76777d]" data-icon="arrow_forward">arrow_forward</span>
</h4>
<p className="font-body-sm text-[#102A43]/70">Once your order ships, you'll receive an email with a tracking link allowing you to follow its journey to your doorstep.</p>
</div>
<div className="group border-b border-[#E2E8F0] pb-4">
<h4 className="font-label-md text-label-md text-[#102A43] mb-2 group-hover:text-[#C89B3C] transition-colors flex items-center justify-between cursor-pointer">
                                    What is your return policy?
                                    <span className="material-symbols-outlined text-sm text-[#76777d]" data-icon="arrow_forward">arrow_forward</span>
</h4>
<p className="font-body-sm text-[#102A43]/70">We accept returns on unread books in original condition within 14 days of delivery for a full refund or store credit.</p>
</div>
<div className="group border-b border-[#E2E8F0] pb-4">
<h4 className="font-label-md text-label-md text-[#102A43] mb-2 group-hover:text-[#C89B3C] transition-colors flex items-center justify-between cursor-pointer">
                                    Do you ship internationally?
                                    <span className="material-symbols-outlined text-sm text-[#76777d]" data-icon="arrow_forward">arrow_forward</span>
</h4>
<p className="font-body-sm text-[#102A43]/70">Currently, we only ship within Pakistan, but we are looking to expand our reach in the near future.</p>
</div>
</div>
<Link className="inline-flex items-center space-x-2 mt-6 font-label-sm text-label-sm text-[#C89B3C] hover:text-[#102A43] transition-colors uppercase tracking-wider" to="/faqbooknestsupport">
<span>View All FAQs</span>
<span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
</Link>
</div>
</div>
</div>
</div>
{/* MAP / LOCATION SECTION */}
<section className="w-full h-[400px] relative overflow-hidden bg-[#F0EDEF]">
{/* Map Image Placeholder with data-location */}
<img className="w-full h-full object-cover mix-blend-luminosity opacity-80 grayscale" data-alt="A highly stylized, minimal digital map of Lahore, Pakistan, rendered in a sophisticated, muted color palette featuring deep navy blues (Midnight Ink) and soft creams (Paper Mist), with subtle golden accents highlighting the central area. The visual style is clean, modern, and high-end, fitting a premium corporate aesthetic, avoiding cluttered street names or overly realistic satellite imagery, focusing instead on elegant geometric abstraction." data-location="Lahore, Pakistan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVKAWDqMPRpUJu7os48hDwSRKekukeuar2hxquibPvo_H4XrB1eQvxjN2Ox9Jug1JqX1gjqJYDh8In_IFo_4lPeXMV9JE8qZke5oeTw5Z89REBHLiv8MkJYX6_pz8kfY38viyMydENdHTg69MiaO_HtMKZ5VGDp--kc5SAU_tT5FU5b3In5fKf8uTzzoL0QQu0KTUtzfI5J8E-LQ8EbRmwe8wp7f3HLkevHXv2fnIpv-upERu_JMEh" />
<div className="absolute inset-0 bg-gradient-to-t from-[#F6F3EC] via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-ambient border border-white flex items-center space-x-4">
<div className="w-10 h-10 rounded-full bg-[#102A43] flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="storefront">storefront</span>
</div>
<div>
<h4 className="font-fraunces text-lg font-medium text-[#102A43]">Lahore Headquarters</h4>
<p className="font-body-sm text-[#102A43]/70">Gulberg III, Pakistan</p>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary border-t border-outline/20">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
{/* Brand */}
<div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
<span className="font-headline-md text-headline-md font-bold text-on-primary">BookNest</span>
<p className="font-body-sm text-body-sm text-outline-variant">© 2024 BookNest Pakistan. All rights reserved.</p>
</div>
{/* Links Area (Span 3 cols for layout) */}
<div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end items-center">
<Link className="text-outline-variant hover:text-on-primary transition-all font-label-sm text-label-sm opacity-80 hover:opacity-100 transition-opacity" to="/aboutusourstorybooknest">About Us</Link>
<Link className="text-secondary-fixed font-bold font-label-sm text-label-sm opacity-80 hover:opacity-100 transition-opacity" to="/contactusbooknestsupport">Contact</Link>
<Link className="text-outline-variant hover:text-on-primary transition-all font-label-sm text-label-sm opacity-80 hover:opacity-100 transition-opacity" to="/shopbrowsebooks">Shipping Policy</Link>
<Link className="text-outline-variant hover:text-on-primary transition-all font-label-sm text-label-sm opacity-80 hover:opacity-100 transition-opacity" to="/shopbrowsebooks">Terms of Service</Link>
<Link className="text-outline-variant hover:text-on-primary transition-all font-label-sm text-label-sm opacity-80 hover:opacity-100 transition-opacity" to="/shopbrowsebooks">Privacy Policy</Link>
</div>
</div>
</footer>
    </>
  );
}
