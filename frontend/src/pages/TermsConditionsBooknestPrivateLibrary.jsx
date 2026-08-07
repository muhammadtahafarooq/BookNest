import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './TermsConditionsBooknestPrivateLibrary.css';

export default function TermsConditionsBooknestPrivateLibrary() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary docked full-width top-0 shadow-md z-50">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
{/* Brand */}
<Link className="font-display-lg text-display-lg font-bold text-on-primary tracking-tight" to="/">
                BookNest
            </Link>
{/* Desktop Nav */}
<div className="hidden md:flex items-center space-x-8">
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/shop">Shop</Link>
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/categories">Categories</Link>
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/best-sellers">Best Sellers</Link>
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" to="/new-arrivals">New Arrivals</Link>
</div>
{/* Actions */}
<div className="flex items-center space-x-6 text-on-primary">
<button aria-label="Search" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/searchresultsbooknest')}>
<span className="material-symbols-outlined" data-icon="search" style={{fontVariationSettings: '\'FILL\' 0'}}>search</span>
</button>
<button aria-label="Favorites" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined" data-icon="favorite" style={{fontVariationSettings: '\'FILL\' 0'}}>favorite</span>
</button>
<button aria-label="Cart" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined" data-icon="shopping_cart" style={{fontVariationSettings: '\'FILL\' 0'}}>shopping_cart</span>
</button>
<button aria-label="Account" className="hover:bg-primary-container/50 transition-all duration-400 p-2 rounded-full scale-95 duration-200 ease-in-out" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined" data-icon="account_circle" style={{fontVariationSettings: '\'FILL\' 0'}}>account_circle</span>
</button>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
{/* Header */}
{/* <Navbar /> */}
<Navbar />
{/* Document Content */}
<article className="space-y-12">
<section>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">1. Website Usage</h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 leading-relaxed">
<p>Welcome to BookNest. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.</p>
<p>You must be at least 18 years old to make a purchase on our site. Minors may only use the site with the involvement of a parent or guardian.</p>
</div>
</section>
<section>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">2. Orders &amp; Availability</h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 leading-relaxed">
<p>All orders are subject to acceptance and availability. Items in your shopping basket are not reserved and may be purchased by other customers until checkout is complete.</p>
<p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.</p>
</div>
</section>
<section>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">3. Pricing &amp; Payments</h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 leading-relaxed">
<p>Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
<p>We accept major credit cards and other secure payment methods as indicated at checkout. By submitting your payment information, you grant us the right to provide the information to third parties for purposes of facilitating the transaction.</p>
</div>
</section>
<section>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">4. User Responsibilities</h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 leading-relaxed">
<p>You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
<p>You are prohibited from using the site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.</p>
</div>
</section>
<section>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">5. Limitations of Liability</h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 leading-relaxed">
<p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
<p>In no case shall BookNest, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.</p>
</div>
</section>
</article>
<div className="editorial-divider mt-16 mb-8"></div>
<div className="text-center">
<p className="font-body-sm text-body-sm text-outline-variant">If you have any questions regarding these terms, please contact us at support@booknest.com.</p>
</div>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
