import React, { useEffect } from 'react';
import './OurStoryArchive.css';

export default function OurStoryArchive() {
  
  useEffect(() => {
    // Simple Intersection Observer for fade-in animations
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
            });
        });
    return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar */}
<header className="bg-obsidian dark:bg-primary-container text-on-primary dark:text-on-primary-container font-headline-md text-headline-md font-body-md text-body-md docked full-width top-0 border-b border-outline-variant shadow-sm w-full sticky z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
<div className="flex items-center gap-4">
<a className="font-headline-md text-headline-md text-on-primary tracking-tight" href="#">
                    BookNest
                </a>
</div>
<div className="hidden md:flex items-center bg-surface-container-low/10 rounded-full px-4 py-2 border border-outline-variant/30 focus-within:border-on-primary transition-colors">
<span className="material-symbols-outlined text-on-primary-fixed-variant mr-2 text-[20px]" data-icon="search">search</span>
<input className="bg-transparent border-none outline-none text-on-primary font-body-md text-sm placeholder-on-primary-fixed-variant w-64 focus:ring-0 p-0" placeholder="Search the catalog..." type="text" />
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-6">
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">The Collection</a>
<a className="text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1" href="#">About Us</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Journal</a>
</nav>
<div className="flex items-center gap-4 text-on-primary">
<button aria-label="Favorite" className="hover:text-secondary-fixed transition-colors duration-200 flex items-center justify-center opacity-80">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
</button>
<button aria-label="Shopping Cart" className="hover:text-secondary-fixed transition-colors duration-200 flex items-center justify-center opacity-80">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button aria-label="Account Circle" className="hover:text-secondary-fixed transition-colors duration-200 flex items-center justify-center opacity-80">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">
{/* Hero Section */}
<section className="relative w-full overflow-hidden border-b border-outline-variant bg-[#F3F0E8] pt-xl pb-xxl px-margin-mobile md:px-margin-desktop fade-in-section">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[70vh]">
<div className="lg:col-span-5 flex flex-col gap-6 z-10">
<h1 className="font-display-lg text-display-lg text-on-surface">Where Every Book Finds Its Reader.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">BookNest brings carefully selected books into a beautiful digital library experience. Curated for the discerning mind.</p>
<div className="mt-4">
<button className="bg-[#B08953] text-primary px-8 py-4 font-label-md text-label-md rounded uppercase tracking-wider hover:opacity-90 transition-opacity">Explore Collection</button>
</div>
</div>
<div className="lg:col-span-7 relative h-[500px] w-full rounded-xl overflow-hidden editorial-shadow">
{/* 3D Scene Animation */}

{/* Fallback/Overlay just in case */}
<div className="absolute inset-0 bg-gradient-to-r from-[#F3F0E8] via-transparent to-transparent opacity-50 z-10 pointer-events-none lg:hidden"></div>
</div>
</div>
</section>
{/* Our Story */}
<section className="py-xxl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant fade-in-section">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-5 md:col-start-2 flex flex-col justify-center">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Our Story</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Born from a reverence for the physical tome, BookNest was established to bridge the tactile joy of discovering a great read with the boundless reach of a digital archive.</p>
<p className="font-body-lg text-body-lg text-on-surface-variant">We believe that a library is not merely a collection of texts, but a sanctuary of ideas. Every title in our catalog is selected with editorial rigor, ensuring that our readers engage only with works of enduring substance.</p>
</div>
<div className="md:col-span-5 md:col-start-8 grid grid-cols-2 gap-4">
<img className="w-full h-64 object-cover rounded-lg editorial-shadow" data-alt="A close-up, highly detailed shot of aged, textured paper pages of a vintage book, illuminated by warm, soft library lighting. The focus is sharp on the paper grain, conveying a luxury, historical editorial aesthetic. The mood is quiet and archival, with a sophisticated palette of ivory and deep shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS6HrExcvMM5eCU58pLwNZoFcXSSZUekRDqBCf-aUA2B6D4Q-pB5MkNzzjq71_MnCN11aMZOy0wnrLEcXU2-37rsEaZpWphnHtILO_lOUbJGQL3oA8A4A-Nui9Y21tU0uL6C7_snHh7NoXtKDWPtuFmMTYO31fqbwSv5Ehqla4boA4TjNyp6B4cxFMCaJqouXZRQ3WSKEHRhwnWerZHancSHmGV7KCcnR14uoIsClSIcf4GzMgyursMg" />
<img className="w-full h-64 object-cover rounded-lg editorial-shadow mt-12" data-alt="A beautifully organized reading desk made of dark mahogany wood, featuring a brass reading lamp casting a warm glow, a leather-bound notebook, and a classic fountain pen resting on handwritten notes. The lighting is high-contrast, creating an atmosphere of intellectual authority and quiet focus, aligning with a premium digital library style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfg_-nPEEbajxfffUxS_opok1q7-EOVKGP0p05FK8oe6_xXiJeh7yu8CPFJFYg5HLE96uhoIXFtefRh2LyjTddT9yYLVnKv9E-W99vqxO4kgsFAvLHHoMIjSA6uNWL-bmBLsD2tpcFfgWGR5An-3pY9itfQoTmpWNsH6MiP4mY0MpCK8h79YEx4ZrDixmA4aKIPX2E4F7_4ncvYyYTMvhyZ0yEFZcfg_6z6LEeBw6snaMS7LI38StqbQ" />
</div>
</div>
</section>
{/* Mission & Values */}
<section className="py-xxl px-margin-mobile md:px-margin-desktop bg-[#F3F0E8] fade-in-section border-b border-outline-variant">
<div className="max-w-[1280px] mx-auto">
<div className="text-center mb-xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Principles</h2>
<div className="w-16 h-px bg-outline-variant mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Curated Collection */}
<div className="bg-surface-container-lowest p-lg rounded-xl editorial-shadow editorial-shadow-hover transition-shadow border border-[#e5e2e1]">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Curated Collection</h3>
<p className="font-body-md text-body-md text-on-surface-variant">We meticulously select each volume, ensuring our shelves hold only works that provoke thought, inspire creativity, or preserve vital knowledge.</p>
</div>
{/* Reader Trust */}
<div className="bg-surface-container-lowest p-lg rounded-xl editorial-shadow editorial-shadow-hover transition-shadow border border-[#e5e2e1]">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Reader Trust</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Integrity is the spine of our archive. We stand behind the quality and authenticity of every edition we present to our discerning community.</p>
</div>
{/* Quality Books */}
<div className="bg-surface-container-lowest p-lg rounded-xl editorial-shadow editorial-shadow-hover transition-shadow border border-[#e5e2e1]">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Quality Editions</h3>
<p className="font-body-md text-body-md text-on-surface-variant">From the binding to the typography, we prioritize physical and digital formats that honor the craft of publishing and enhance the reading experience.</p>
</div>
{/* Easy Discovery */}
<div className="bg-surface-container-lowest p-lg rounded-xl editorial-shadow editorial-shadow-hover transition-shadow border border-[#e5e2e1]">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Intuitive Discovery</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Our catalog is organized with scholarly precision, allowing readers to traverse genres and eras seamlessly, stumbling upon unexpected literary treasures.</p>
</div>
</div>
</div>
</section>
{/* CTA Banner */}
<section className="bg-deep-forest text-on-primary py-xxl px-margin-mobile md:px-margin-desktop relative overflow-hidden fade-in-section">
<div className="max-w-[1280px] mx-auto text-center relative z-10">
<h2 className="font-display-lg text-display-lg mb-6 text-on-primary">Start Exploring The Collection</h2>
<p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">Join our community of readers and begin building your personal library today.</p>
<button className="bg-[#B08953] text-primary px-10 py-4 font-label-md text-label-md rounded uppercase tracking-wider hover:opacity-90 transition-opacity border-none">Enter the Archive</button>
</div>
{/* Abstract background pattern representing books */}
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #ffffff 20px, #ffffff 21px, transparent 21px, transparent 40px, #ffffff 40px, #ffffff 42px)'}}></div>
</section>
</main>
{/* Footer */}
<footer className="bg-obsidian dark:bg-primary-container text-on-primary dark:text-on-primary-container font-body-md text-body-md font-label-sm text-label-sm full-width py-xxl border-t border-outline-variant flat">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-[1280px] mx-auto gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="font-headline-sm text-headline-sm text-on-primary tracking-tight">BookNest</span>
<span className="text-on-primary-fixed-variant">© 2024 BookNest Digital Archive. All Rights Reserved.</span>
</div>
<nav className="flex flex-wrap justify-center gap-6">
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">The Collection</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Research Guides</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Archives</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Terms of Service</a>
</nav>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
