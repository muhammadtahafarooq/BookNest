import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setSubscribeStatus('error');
      setSubscribeMessage('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubscribeStatus('error');
      setSubscribeMessage('Please enter a valid email address.');
      return;
    }

    setSubscribeStatus('success');
    setSubscribeMessage('Thanks for subscribing! You will receive our next update soon.');
    setEmail('');
  };

  return (
    <footer className="bg-primary border-t border-outline/20 text-on-primary mt-auto">
      <div className="w-full py-12 px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">

        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <Link className="font-headline-md font-bold text-on-primary font-editorial block mb-4" to="/">
            BookNest
          </Link>
          <p className="font-body-sm text-body-sm text-on-primary/60 mb-6">
            Books that find their way home. Your private library, curated with care.
          </p>
          <div className="flex space-x-4 mt-auto">
            <Link to="/shippingreturnsarchive" className="flex items-center justify-center rounded-full w-10 h-10 bg-on-primary/10 text-on-primary/70 hover:text-on-primary hover:bg-on-primary/20 transition-colors">
              <span className="material-symbols-outlined text-lg">payments</span>
            </Link>
            <Link to="/contact" className="flex items-center justify-center rounded-full w-10 h-10 bg-on-primary/10 text-on-primary/70 hover:text-on-primary hover:bg-on-primary/20 transition-colors">
              <span className="material-symbols-outlined text-lg">credit_card</span>
            </Link>
          </div>
        </div>

        {/* Links Columns */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-4 font-bold tracking-widest uppercase">Store</h4>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/shopbrowsebooks">Shop All</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/newarrivals">New Arrivals</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/bestsellers">Best Sellers</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/categoriesexploration">Categories</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/blogstoriesinspiration">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-4 font-bold tracking-widest uppercase">Support</h4>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/aboutusourstorybooknest">About Us</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/contact">Contact</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/faqbooknestsupport">FAQ</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/shippingreturnsarchive">Shipping & Returns</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/privacypolicyarchive">Privacy Policy</Link></li>
              <li><Link className="text-on-primary/60 hover:text-on-primary transition-colors duration-300 block" to="/termsconditionsbooknestprivatelibrary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-md text-label-md text-on-primary mb-4 font-bold tracking-widest uppercase">Stay Updated</h4>
          <p className="font-body-sm text-body-sm text-on-primary/60 mb-4">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-container text-on-primary border border-outline/30 rounded px-4 py-2 font-body-sm text-body-sm focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed outline-none w-full placeholder-on-primary/40"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold px-4 py-2 rounded hover:bg-secondary-fixed-dim transition-colors w-full mt-1"
              type="submit"
            >
              Subscribe
            </button>
            {subscribeStatus !== 'idle' && (
              <p className={`mt-2 text-sm ${subscribeStatus === 'success' ? 'text-emerald-300' : 'text-error'}`}>
                {subscribeMessage}
              </p>
            )}
          </form>
          <p className="mt-6">© 2024 BookNest Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link className="hover:text-on-primary transition-colors" to="/privacypolicyarchive">Privacy</Link>
            <Link className="hover:text-on-primary transition-colors" to="/termsconditionsbooknestprivatelibrary">Terms</Link>
            <Link className="hover:text-on-primary transition-colors" to="/contact">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
