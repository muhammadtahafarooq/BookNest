import React from 'react';
import './TermsConditionsArchive.css';

export default function TermsConditionsArchive() {
  return (
    <>
      {/* TopNavBar: Standardized from Shared Components */}
<header className="bg-primary text-on-primary font-headline-md text-headline-md font-body-md text-body-md border-b border-outline-variant shadow-sm w-full top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
{/* Brand Logo */}
<div className="font-headline-md text-headline-md text-on-primary tracking-tight">
                BookNest
            </div>
{/* Empty Nav Links for T&C Page (Transactional/Info intent - suppress main nav cluster for focus) */}
<nav className="hidden md:flex gap-gutter items-center">
{/* Intentionally left blank as per Shell Visibility rules: relevance check fails for T&C */}
</nav>
{/* Trailing Icon Actions */}
<div className="flex gap-md items-center">
<button aria-label="favorite" className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200">
<span className="material-symbols-outlined text-body-lg">favorite</span>
</button>
<button aria-label="shopping_cart" className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200">
<span className="material-symbols-outlined text-body-lg">shopping_cart</span>
</button>
<button aria-label="account_circle" className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200">
<span className="material-symbols-outlined text-body-lg">account_circle</span>
</button>
</div>
</div>
</header>
{/* Main Content: T&C Document Layout */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xxl">
{/* Header Section with Animation */}
<div className="text-center mb-xl animate-manuscript-open">
<h1 className="font-display-lg text-display-lg md:text-display-lg text-obsidian-ink mb-md uppercase tracking-wide">
                Terms &amp; Conditions
            </h1>
<p className="font-label-md text-label-md text-surface-tint uppercase tracking-widest">
                Last Updated: October 2024
            </p>
<div className="divider-crease mt-lg max-w-md mx-auto"></div>
</div>
{/* Document Panel */}
<div className="bg-soft-archive-white border border-stone-manuscript shadow-level-1 rounded-lg p-lg md:p-xxl mx-auto max-w-4xl opacity-0 animate-manuscript-open" style={{animationDelay: '0.2s'}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Table of Contents Sidebar (Editorial Asymmetry) */}
<aside className="md:col-span-4 hidden md:block border-r border-stone-manuscript pr-lg">
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-md border-b border-stone-manuscript pb-sm">Contents</h3>
<ul className="space-y-sm font-label-md text-label-md">
<li><a className="text-surface-tint hover:text-obsidian-ink transition-colors" href="#account">1. Account Terms</a></li>
<li><a className="text-surface-tint hover:text-obsidian-ink transition-colors" href="#orders">2. Orders &amp; Shipping</a></li>
<li><a className="text-surface-tint hover:text-obsidian-ink transition-colors" href="#payments">3. Payments &amp; Security</a></li>
<li><a className="text-surface-tint hover:text-obsidian-ink transition-colors" href="#returns">4. Returns &amp; Archival Policy</a></li>
<li><a className="text-surface-tint hover:text-obsidian-ink transition-colors" href="#liability">5. Liability &amp; Governing Law</a></li>
</ul>
</aside>
{/* Main Legal Text */}
<div className="md:col-span-8 space-y-xl">
<section className="scroll-mt-xxl" id="account">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-sm">1. Account Terms</h2>
<div className="space-y-md font-body-md text-body-md text-surface-tint leading-relaxed">
<p>By registering for a BookNest account, you affirm that you are of legal age to form a binding contract. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
<p>We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or otherwise misuse our digital archive services.</p>
</div>
</section>
<section className="scroll-mt-xxl" id="orders">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-sm">2. Orders &amp; Shipping</h2>
<div className="space-y-md font-body-md text-body-md text-surface-tint leading-relaxed">
<p>All orders placed through BookNest are subject to acceptance and availability. Prices are subject to change without notice, though such changes will not affect orders that have already been dispatched.</p>
<p>Shipping timelines are estimates and commence from the date of dispatch. We cannot be held liable for unforeseen delays caused by customs, natural disasters, or carrier complications.</p>
</div>
</section>
<section className="scroll-mt-xxl" id="payments">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-sm">3. Payments &amp; Security</h2>
<div className="space-y-md font-body-md text-body-md text-surface-tint leading-relaxed">
<p>We accept major credit cards and verified digital payment methods. Your payment information is encrypted and processed securely. BookNest does not store complete credit card details on our servers.</p>
<p>In the event of a payment dispute, please contact our support team before initiating a chargeback with your financial institution.</p>
</div>
</section>
<section className="scroll-mt-xxl" id="returns">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-sm">4. Returns &amp; Archival Policy</h2>
<div className="space-y-md font-body-md text-body-md text-surface-tint leading-relaxed">
<p>Returns are accepted within 30 days of receipt, provided the items remain in their original, unread condition. Rare and archival items marked "Final Sale" are exempt from this return policy due to their delicate nature.</p>
<p>Digital purchases are final and non-refundable once the download has commenced or access has been granted.</p>
</div>
</section>
<section className="scroll-mt-xxl" id="liability">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-sm">5. Liability &amp; Governing Law</h2>
<div className="space-y-md font-body-md text-body-md text-surface-tint leading-relaxed">
<p>BookNest shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products. Our total liability is limited to the amount paid for the specific product or service in question.</p>
<p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which BookNest operates, without regard to its conflict of law provisions.</p>
</div>
</section>
</div>
</div>
</div>
{/* Action Area */}
<div className="mt-xl text-center opacity-0 animate-manuscript-open" style={{animationDelay: '0.4s'}}>
<button className="bg-burnished-brass text-obsidian-ink font-label-md text-label-md px-lg py-sm rounded border border-burnished-brass hover:bg-transparent hover:text-burnished-brass transition-colors duration-300">
                Acknowledge &amp; Continue
            </button>
</div>
</main>
{/* Footer: Standardized from Shared Components */}
<footer className="bg-primary text-on-primary font-body-md text-body-md border-t border-outline-variant w-full mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-xxl w-full max-w-[1280px] mx-auto gap-lg">
{/* Brand & Copyright */}
<div className="flex flex-col items-center md:items-start gap-sm">
<div className="font-headline-sm text-headline-sm text-on-primary">
                    BookNest
                </div>
<div className="font-label-sm text-label-sm text-on-primary-fixed-variant">
                    © 2024 BookNest Digital Archive. All Rights Reserved.
                </div>
</div>
{/* Footer Links */}
<div className="flex flex-wrap justify-center gap-md font-label-sm text-label-sm text-on-primary-fixed-variant">
<a className="hover:text-secondary-fixed transition-colors duration-200" href="#">The Collection</a>
<a className="hover:text-secondary-fixed transition-colors duration-200" href="#">Research Guides</a>
<a className="hover:text-secondary-fixed transition-colors duration-200" href="#">Archives</a>
<a className="text-on-primary font-bold" href="#">Privacy Policy</a>
<a className="text-on-primary font-bold" href="#">Terms of Service</a>
</div>
</div>
</footer>
    </>
  );
}
