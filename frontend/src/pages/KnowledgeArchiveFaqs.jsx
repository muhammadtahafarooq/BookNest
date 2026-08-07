import React, { useEffect } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './KnowledgeArchiveFaqs.css';

export default function KnowledgeArchiveFaqs() {
  
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
            const accordions = document.querySelectorAll('.accordion-header');
            
            accordions.forEach(header => {
                header.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isActive = this.classList.contains('active');
                    
                    // Optional: Close all other accordions
                    accordions.forEach(otherHeader => {
                        if (otherHeader !== this) {
                            otherHeader.classList.remove('active');
                            otherHeader.setAttribute('aria-expanded', 'false');
                            otherHeader.nextElementSibling.classList.remove('open');
                        }
                    });

                    // Toggle current accordion
                    this.classList.toggle('active');
                    this.setAttribute('aria-expanded', !isActive);
                    content.classList.toggle('open');
                });
            });
        });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary-container dark:bg-tertiary-container sticky docked full-width top-0 shadow-md bg-primary-container border-b border-outline-variant z-50 transition-all duration-300 ease-in-out">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
{/* Left: Logo & Search (if applicable, but JSON says on_left) */}
<div className="flex items-center gap-gutter">
<Link className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-tertiary hover:opacity-80 transition-opacity" to="/">
                    BookNest
                </Link>
<div className="hidden md:flex items-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="search">search</span>
</div>
</div>
{/* Center: Navigation Links */}
<div className="hidden md:flex items-center gap-lg">
<Link className="font-label-md text-label-md text-on-primary-container/70 hover:text-on-primary transition-colors hover:bg-on-primary-fixed-variant/10 px-sm py-xs rounded" to="/catalogarchive">
                    Catalog
                </Link>
<Link className="font-label-md text-label-md text-on-primary-container/70 hover:text-on-primary transition-colors hover:bg-on-primary-fixed-variant/10 px-sm py-xs rounded" to="/shopbrowsebooks">
                    Curations
                </Link>
<Link className="font-label-md text-label-md text-on-primary-container/70 hover:text-on-primary transition-colors hover:bg-on-primary-fixed-variant/10 px-sm py-xs rounded" to="/shopbrowsebooks">
                    Archives
                </Link>
<Link className="font-label-md text-label-md text-on-primary border-b-2 border-surface-tint pb-1 px-sm py-xs hover:bg-on-primary-fixed-variant/10" to="/shopbrowsebooks">
                    Rare Finds
                </Link>
</div>
{/* Right: Actions */}
<div className="flex items-center gap-md">
<button className="text-on-primary-container hover:text-on-primary transition-colors flex items-center gap-xs" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined text-[20px]" data-icon="shopping_cart">shopping_cart</span>
<span className="hidden md:inline font-label-md text-label-md">Cart</span>
</button>
<button className="text-on-primary-container hover:text-on-primary transition-colors flex items-center gap-xs" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined text-[20px]" data-icon="person">person</span>
<span className="hidden md:inline font-label-md text-label-md">Account</span>
</button>
</div>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Header Section */}
<header className="text-center max-w-2xl mx-auto mb-xl fade-in-up">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md">Frequently Asked Questions</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Find answers about orders, shipping, payments, and accounts in our knowledge archive.</p>
</header>
{/* Layout Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Sidebar Navigation */}
<aside className="md:col-span-3 lg:col-span-3 fade-in-up delay-100">
<div className="sticky top-xxl">
<h3 className="font-label-md text-label-md text-outline uppercase tracking-widest mb-md">Categories</h3>
<nav className="flex flex-col gap-sm border-l border-outline-variant pl-md">
<button className="text-left font-label-md text-label-md text-on-surface hover:text-surface-tint transition-colors py-xs border-l-[3px] -ml-[17px] pl-md border-surface-tint">Orders</button>
<button className="text-left font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-xs">Shipping</button>
<button className="text-left font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-xs">Payments</button>
<button className="text-left font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-xs">Returns</button>
<button className="text-left font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-xs">Account</button>
</nav>
</div>
</aside>
{/* FAQ Content Area */}
<section className="md:col-span-9 lg:col-span-8 lg:col-start-5 fade-in-up delay-200">
<h2 className="font-headline-md text-headline-md text-on-surface mb-lg pb-sm border-b border-outline-variant">Orders</h2>
<div className="flex flex-col gap-md">
{/* Accordion Item 1 */}
<div className="bg-surface rounded-lg border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] overflow-hidden hover:shadow-[0_8px_30px_rgba(23,26,28,0.1)] transition-shadow duration-300">
<button aria-expanded="false" className="accordion-header w-full flex justify-between items-center p-lg text-left focus:outline-none">
<span className="font-headline-sm text-headline-sm text-on-surface">How do I track my rare book order?</span>
<span className="material-symbols-outlined text-outline accordion-icon" data-icon="expand_more">expand_more</span>
</button>
<div className="accordion-content px-lg text-on-surface-variant font-body-md text-body-md bg-surface">
<p>Once your order is meticulously packaged and dispatched from our archive, you will receive a tracking manifest via email. You can also view the status within your Account Dashboard under 'Recent Acquisitions'.</p>
</div>
</div>
{/* Accordion Item 2 */}
<div className="bg-surface rounded-lg border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] overflow-hidden hover:shadow-[0_8px_30px_rgba(23,26,28,0.1)] transition-shadow duration-300">
<button aria-expanded="false" className="accordion-header w-full flex justify-between items-center p-lg text-left focus:outline-none">
<span className="font-headline-sm text-headline-sm text-on-surface">Can I modify my order after placement?</span>
<span className="material-symbols-outlined text-outline accordion-icon" data-icon="expand_more">expand_more</span>
</button>
<div className="accordion-content px-lg text-on-surface-variant font-body-md text-body-md bg-surface">
<p>Given the bespoke nature of our curations, order modifications are only possible within a 2-hour window of placement. Please contact our archivists immediately if an adjustment is necessary.</p>
</div>
</div>
{/* Accordion Item 3 */}
<div className="bg-surface rounded-lg border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] overflow-hidden hover:shadow-[0_8px_30px_rgba(23,26,28,0.1)] transition-shadow duration-300">
<button aria-expanded="false" className="accordion-header w-full flex justify-between items-center p-lg text-left focus:outline-none">
<span className="font-headline-sm text-headline-sm text-on-surface">Do you provide certificates of authenticity?</span>
<span className="material-symbols-outlined text-outline accordion-icon" data-icon="expand_more">expand_more</span>
</button>
<div className="accordion-content px-lg text-on-surface-variant font-body-md text-body-md bg-surface">
<p>All items classified under 'Rare Finds' or first editions come accompanied by a physical certificate of authenticity, signed and stamped by our lead curator, ensuring the provenance of your volume.</p>
</div>
</div>
</div>
{/* CTA Section */}
<div className="mt-xxl text-center p-xl bg-surface rounded-lg border border-outline-variant flex flex-col items-center gap-md shadow-[0_4px_20px_rgba(23,26,28,0.05)] fade-in-up delay-300">
<span className="material-symbols-outlined text-[48px] text-surface-tint" data-icon="mail">mail</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Still Need Help?</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Our archivists are standing by to assist with any specialized inquiries regarding our collections or your recent acquisitions.</p>
<button className="mt-sm px-lg py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-inverse-surface transition-colors flex items-center gap-sm">
                        Contact Support
                        <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</section>
</div>
</main>
{/* Footer */}
<footer className="bg-primary-container dark:bg-tertiary-container full-width bottom-0 border-t border-outline-variant flat opacity-100 transition-opacity mt-auto">
<div className="w-full px-margin-mobile md:px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-center gap-lg max-w-[1280px] mx-auto">
<div className="flex flex-col items-center md:items-start gap-sm">
<span className="font-headline-sm text-headline-sm text-on-primary">BookNest</span>
<span className="font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container">© 2024 BookNest. Curating the weight of information.</span>
</div>
<nav className="flex flex-wrap justify-center gap-md md:gap-lg">
<Link className="font-label-sm text-label-sm text-on-primary-container/60 hover:text-on-primary underline decoration-surface-tint transition-all" to="/shopbrowsebooks">
                    Terms of Service
                </Link>
<Link className="font-label-sm text-label-sm text-on-primary-container/60 hover:text-on-primary underline decoration-surface-tint transition-all" to="/shopbrowsebooks">
                    Privacy Policy
                </Link>
<Link className="font-label-sm text-label-sm text-on-primary-container/60 hover:text-on-primary underline decoration-surface-tint transition-all" to="/shopbrowsebooks">
                    Shipping &amp; Returns
                </Link>
<Link className="font-label-sm text-label-sm text-on-primary-container/60 hover:text-on-primary underline decoration-surface-tint transition-all" to="/contactusbooknestsupport">
                    Contact Archive
                </Link>
</nav>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
