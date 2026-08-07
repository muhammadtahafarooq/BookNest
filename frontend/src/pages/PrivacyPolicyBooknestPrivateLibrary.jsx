import React from 'react';

import { Link } from 'react-router-dom';
import './PrivacyPolicyBooknestPrivateLibrary.css';

export default function PrivacyPolicyBooknestPrivateLibrary() {
  return (
    <>
      {/* TopNavBar (Suppressed due to linear/transactional intent of a pure document page, prioritizing content canvas) */}
<main className="flex-grow pt-24 pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-container-max-width mx-auto">
<header className="text-center mb-16 md:mb-24">
<h1 className="font-fraunces text-4xl md:text-5xl lg:text-[64px] font-semibold leading-tight tracking-tight mb-4 text-[#102A43]">Privacy Policy</h1>
<p className="font-body-sm text-body-sm text-outline uppercase tracking-wider">Last updated: October 24, 2024</p>
</header>
<article className="max-w-[800px] mx-auto content-prose">
<p className="font-body-lg text-body-lg text-[#102A43]/80">At BookNest, we believe in the sanctity of your reading sanctuary. This Privacy Policy details the care with which we handle your personal information as you navigate our collection, ensuring your literary journey remains private and secure.</p>
<h2 className="font-fraunces text-2xl md:text-3xl font-semibold text-[#102A43]">Data Collection</h2>
<p>We gracefully collect only the information necessary to provide you with a curated and seamless experience. This includes details you willingly share when creating an account, curating your wishlists, or purchasing a title. We may also gather subtle, ambient data regarding your navigation through our shelves to better arrange the books you might love.</p>
<p>Your reading habits—the genres you linger on, the authors you follow—are treated with the utmost respect, acting merely as a guide for our personal recommendations.</p>
<h2 className="font-fraunces text-2xl md:text-3xl font-semibold text-[#102A43]">User Information</h2>
<p>Your personal information is a private manuscript. We utilize it to fulfill your orders, communicate with you regarding your selections, and tailor your experience. We do not sell your narrative to third-party advertisers. Your email address will only be used to send you receipts, tracking information, and, if you opt-in, curated literary dispatches from our editorial team.</p>
<h2 className="font-fraunces text-2xl md:text-3xl font-semibold text-[#102A43]">Security</h2>
<p>We employ rigorous, modern security measures to ensure your data remains safely bound within our system. Our digital shelves are protected by industry-standard encryption protocols, safeguarding your payment details and personal identifiers against unauthorized access. We continuously monitor our infrastructure, much like a meticulous archivist protecting rare volumes.</p>
<h2 className="font-fraunces text-2xl md:text-3xl font-semibold text-[#102A43]">Cookies</h2>
<p>Like a subtle bookmark, we use cookies to remember your place in our store. These small data files allow us to keep your cart intact while you browse and to recognize you upon your return. You have the freedom to adjust your browser settings to decline these bookmarks, though it may alter the fluidity of your experience within BookNest.</p>
<h2 className="font-fraunces text-2xl md:text-3xl font-semibold text-[#102A43]">Third-party Services</h2>
<p>To deliver your books and process your payments, we occasionally rely on trusted partners—our couriers and payment gateways. We share only the specific chapters of your information required for them to perform their designated roles. We strictly select partners whose commitment to privacy echoes our own.</p>
</article>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary text-on-primary dark:text-on-primary border-t border-outline/20">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-2">
<span className="font-headline-md text-headline-md font-bold text-on-primary block mb-6">BookNest</span>
<p className="font-body-sm text-body-sm text-outline-variant mb-4">© 2024 BookNest Pakistan. All rights reserved.</p>
</div>
<div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-8 md:justify-end">
<div className="flex flex-col gap-4">
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" to="/aboutusourstorybooknest">About Us</Link>
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" to="/contactusbooknestsupport">Contact</Link>
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" to="/shopbrowsebooks">Shipping Policy</Link>
</div>
<div className="flex flex-col gap-4">
<Link className="font-label-sm text-label-sm text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100" to="/shopbrowsebooks">Terms of Service</Link>
<Link className="font-label-sm text-label-sm text-secondary-fixed font-bold opacity-80 hover:opacity-100 transition-opacity" to="/shopbrowsebooks">Privacy Policy</Link>
</div>
</div>
</div>
</footer>
    </>
  );
}
