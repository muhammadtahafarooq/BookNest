import React, { useEffect } from 'react';
import './PremiumBookDetails.css';

export default function PremiumBookDetails() {
  
  useEffect(() => {
    // Simple Intersection Observer to trigger reveal animations on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-reveal').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });
    return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container docked full-width top-0 border-b border-outline dark:border-outline-variant shadow-sm dark:shadow-none z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto">
<a className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container tracking-tight" href="#">BookNest</a>
<div className="hidden md:flex gap-lg items-center">
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary font-label-md text-label-md hover:opacity-80 transition-opacity duration-300" href="#">Home</a>
<a className="text-on-primary dark:text-on-primary-container border-b-2 border-on-secondary-container font-label-md text-label-md hover:opacity-80 transition-opacity duration-300 pb-1" href="#">Shop</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary font-label-md text-label-md hover:opacity-80 transition-opacity duration-300" href="#">Categories</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary font-label-md text-label-md hover:opacity-80 transition-opacity duration-300" href="#">Blog</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary font-label-md text-label-md hover:opacity-80 transition-opacity duration-300" href="#">About</a>
</div>
<div className="flex gap-md">
<button className="hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
<button className="hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">person</span>
</button>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow flex flex-col w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl gap-xl md:gap-xxl">
{/* Hero Section */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[60vh]">
{/* 3D Book Visual */}
<div className="md:col-span-6 h-[400px] md:h-[600px] relative rounded-xl overflow-hidden shadow-level-1 bg-archive-white animate-reveal">

{/* Fallback gradient if 3D fails to load */}
<div className="absolute inset-0 bg-gradient-to-tr from-stone-manuscript to-archive-white opacity-20 pointer-events-none"></div>
</div>
{/* Product Details */}
<div className="md:col-span-5 md:col-start-8 flex flex-col gap-lg animate-reveal delay-100">
<div className="flex flex-col gap-xs">
<span className="inline-block px-3 py-1 bg-deep-forest text-white rounded-full font-label-sm text-label-sm self-start mb-2">Philosophy / Archives</span>
<h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-obsidian-ink leading-tight">The Philosophy of Archival Sciences</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">By Dr. Elias Thorne</p>
<p className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-1">Royal Archive Press</p>
</div>
<div className="h-px w-full bg-stone-manuscript my-xs"></div>
<div className="flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-obsidian-ink">Rs. 4,500</span>
<span className="font-body-md text-body-md text-outline line-through">Rs. 5,200</span>
</div>
<div className="flex flex-col gap-md mt-sm">
<button className="btn-primary w-full py-4 rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider flex justify-center items-center gap-2">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_cart</span>
                        Add To Cart
                    </button>
<button className="btn-secondary w-full py-4 rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider flex justify-center items-center gap-2">
<span className="material-symbols-outlined">favorite</span>
                        Add to Wishlist
                    </button>
</div>
<div className="mt-md flex gap-4 text-sm text-on-surface-variant font-label-sm items-center">
<span className="material-symbols-outlined text-outline">local_shipping</span>
<span>Free Standard Shipping on premium editions.</span>
</div>
</div>
</section>
{/* The Manuscript Section */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-xl border-t border-stone-manuscript animate-reveal delay-200">
<div className="md:col-span-4">
<h2 className="font-headline-md text-headline-md text-obsidian-ink sticky top-24">The Manuscript</h2>
</div>
<div className="md:col-span-8 flex flex-col gap-lg font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
                    In "The Philosophy of Archival Sciences," Dr. Elias Thorne dismantles the traditional view of archives as mere repositories of dust and forgotten memory. Instead, he constructs a compelling framework where the archive is an active, breathing organism—a mechanism of power, identity, and profound philosophical inquiry.
                </p>
<p>
                    This meticulously bound volume explores the ontological weight of 'saving' versus 'discarding'. Thorne posits that every archival act is inherently political and deeply human, challenging historians and bibliophiles alike to confront the silence between the records.
                </p>
<p>
                    Printed on premium archival-grade Mohawk Superfine paper, this first edition features a tactile cloth cover and Smyth-sewn binding, designed to endure the very centuries it philosophizes over.
                </p>
</div>
</section>
{/* Archive Specifications */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-xl border-t border-stone-manuscript animate-reveal delay-300">
<div className="md:col-span-4">
<h2 className="font-headline-sm text-headline-sm text-obsidian-ink">Archive Specifications</h2>
</div>
<div className="md:col-span-8">
<div className="bg-archive-white rounded-xl shadow-level-1 overflow-hidden">
<ul className="flex flex-col">
<li className="flex justify-between py-4 px-6 border-b border-stone-manuscript">
<span className="font-label-md text-label-md text-on-surface-variant">Format</span>
<span className="font-body-md text-body-md text-obsidian-ink font-medium">Hardcover, Cloth-bound</span>
</li>
<li className="flex justify-between py-4 px-6 border-b border-stone-manuscript">
<span className="font-label-md text-label-md text-on-surface-variant">Pages</span>
<span className="font-body-md text-body-md text-obsidian-ink font-medium">412 pages</span>
</li>
<li className="flex justify-between py-4 px-6 border-b border-stone-manuscript">
<span className="font-label-md text-label-md text-on-surface-variant">Dimensions</span>
<span className="font-body-md text-body-md text-obsidian-ink font-medium">160 x 240 mm</span>
</li>
<li className="flex justify-between py-4 px-6 border-b border-stone-manuscript">
<span className="font-label-md text-label-md text-on-surface-variant">Paper</span>
<span className="font-body-md text-body-md text-obsidian-ink font-medium">120gsm Mohawk Superfine Eggshell</span>
</li>
<li className="flex justify-between py-4 px-6">
<span className="font-label-md text-label-md text-on-surface-variant">ISBN</span>
<span className="font-body-md text-body-md text-obsidian-ink font-medium">978-1-912345-67-8</span>
</li>
</ul>
</div>
</div>
</section>
{/* Readers Also Discovered (Curated Cards) */}
<section className="py-xl border-t border-stone-manuscript flex flex-col gap-lg">
<div className="flex justify-between items-end">
<h2 className="font-headline-md text-headline-md text-obsidian-ink">Readers Also Discovered</h2>
<a className="font-label-md text-label-md text-obsidian-ink underline hover:text-burnished-brass transition-colors" href="#">View All Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
{/* Book Card 1 */}
<div className="bg-archive-white rounded-xl shadow-level-1 card-tilt p-6 flex flex-col gap-md cursor-pointer h-full border border-stone-manuscript">
<div className="bg-cover bg-center w-full h-64 rounded-lg shadow-inner" data-alt="A moody, high-contrast flat lay photograph of a vintage, leather-bound book titled 'Silence in the Stacks'. The book rests on a rich mahogany desk, illuminated by a single, warm spotlight that highlights the gold foil lettering. The surrounding darkness creates an intimate, scholarly atmosphere consistent with a luxury editorial aesthetic." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuA1xBnhZFKoE0aTt4iRG7dEp0D1vy5VC79yHdD4QDgILvvRpAjZfAaEXzqv0c3mSQ3h7mKN0gAynn9frjgGimWD1hjjYrbwXcdHr8ZEW2_mATCBtdgRWvxsoUsUaPK4vbVK2zw_q3-gST7eiuzLvYMOyyW8r_ry2athG4Fe-XCBPGpVfX0cXu_UKtcdmOFtB_Qy5VMEmoxR3bThEQqqPt61zml-y1ZYMCTcp6G8C6PM4eiUs0XmQ2-Q0Q\')'}}></div>
<div className="flex flex-col flex-grow">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Archival Studies</span>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-1">Silence in the Stacks</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">A treatise on the undocumented history of marginalia.</p>
<span className="font-label-md text-label-md text-obsidian-ink">Rs. 3,200</span>
</div>
</div>
{/* Book Card 2 */}
<div className="bg-archive-white rounded-xl shadow-level-1 card-tilt p-6 flex flex-col gap-md cursor-pointer h-full border border-stone-manuscript">
<div className="bg-cover bg-center w-full h-64 rounded-lg shadow-inner" data-alt="A beautifully composed, high-end editorial shot of an open book featuring intricate botanical illustrations and old typography. The pages have a warm, aged ivory tone. A pair of antique brass reading glasses rests elegantly on the pages, casting a soft, physical shadow. The lighting is natural but highly controlled, evoking a sense of timeless intellect." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBHVutKvIFLccsWiKUo7TYSf6Q2fsnW9YRVbqZjM2VVcVmzfCOQcndjqRVc42YaIIQMGhlqCCtQs4T4Dj55_mmdttqoV0wfPpYBKiOfCtc5IHKIlL3ZQEJXc1zxr8P3-6KnjxuYJRsiF09J91_d2kO6f_VwEy4qRuX_y-mDc0s37h1m8CA07xOf-RuerApOMH2NhPgT3hhVd-yCDgDZSE-Y24X9ci_aOsmCY1vL4997jxC_Y5x-T83pzQ\')'}}></div>
<div className="flex flex-col flex-grow">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Typography</span>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-1">The Anatomy of Print</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Exploring the physical weight of words in the 19th century.</p>
<span className="font-label-md text-label-md text-obsidian-ink">Rs. 5,100</span>
</div>
</div>
{/* Book Card 3 */}
<div className="bg-archive-white rounded-xl shadow-level-1 card-tilt p-6 flex flex-col gap-md cursor-pointer h-full border border-stone-manuscript">
<div className="bg-cover bg-center w-full h-64 rounded-lg shadow-inner" data-alt="A striking minimalist product shot of a thick, minimalist black book with striking white debossed text. The book is stood upright slightly angled, casting a deep, sharp shadow on a crisp white surface. The stark contrast and clean lines embody a highly disciplined modern digital interface aesthetic mixed with physical object permanence." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCAWY513H67iSB-orCLSUlOiYA-9dZEdM6FxmINq_UcB4Sgrpv7O1rK2vixQTeqytX240NoL4_zaQmJPeC03QjgiN_6DSMDmLFRvCw2D1Gn0YneuqHZf0Hp8rWpQ-0EhIS52V_miUV4AU0JH9jxzns3JSG4m6Wd7gmFsl5_YvzmR6dHomX3qdscnunb8ibj28wurdzjit77D9XXGdtI11AFylWXTidfyIF_28e6OcVe_HnHuOBHfPg85A\')'}}></div>
<div className="flex flex-col flex-grow">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Philosophy</span>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-1">Ontology of Paper</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Why physical mediums persist in a digital epoch.</p>
<span className="font-label-md text-label-md text-obsidian-ink">Rs. 2,800</span>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container full-width bottom-0 border-t border-outline dark:border-outline-variant mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-xl max-w-[1280px] mx-auto gap-lg md:gap-0">
<div className="font-headline-md text-headline-md text-on-primary">
                BookNest
            </div>
<div className="flex flex-wrap justify-center gap-md md:gap-lg font-label-sm text-label-sm">
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Terms of Service</a>
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Archival Standards</a>
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Contact Us</a>
</div>
<div className="font-body-md text-body-md text-on-primary-fixed-variant text-center md:text-right">
                © 2024 BookNest. The Private Collector's Digital Archive.
            </div>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
