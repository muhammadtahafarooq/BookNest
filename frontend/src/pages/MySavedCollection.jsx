import React from 'react';
import './MySavedCollection.css';

export default function MySavedCollection() {
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-headline-md text-headline-md font-body-md text-body-md font-label-md text-label-md sticky w-full top-0 border-b border-outline dark:border-outline-variant shadow-sm dark:shadow-none z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto hidden md:flex">
{/* Brand Logo */}
<a className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container tracking-tight scale-95 duration-200 ease-in-out hover:opacity-80 transition-opacity duration-300" href="#">
                BookNest
            </a>
{/* Navigation Links */}
<div className="flex items-center space-x-gutter">
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" href="#">Home</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" href="#">Shop</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" href="#">Categories</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" href="#">Blog</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" href="#">About</a>
</div>
{/* Trailing Icons */}
<div className="flex items-center space-x-md">
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out relative" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>shopping_bag</span>
</a>
<a className="text-on-primary dark:text-on-primary-container border-b-2 border-secondary pb-1 scale-95 duration-200 ease-in-out relative group" href="#">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span>
</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>person</span>
</a>
</div>
</div>
{/* Mobile Nav (simplified for demo) */}
<div className="flex md:hidden justify-between items-center w-full px-margin-mobile py-md">
<a className="font-headline-sm text-headline-sm font-bold text-on-primary tracking-tight" href="#">BookNest</a>
<div className="flex space-x-md">
<a className="text-secondary" href="#"><span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span></a>
<a className="text-on-primary" href="#"><span className="material-symbols-outlined">menu</span></a>
</div>
</div>
</nav>
{/* Main Content Canvas */}
<main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl min-h-screen">
{/* Page Header */}
<header className="page-reveal mb-xxl flex flex-col items-center text-center relative">
<div className="absolute top-0 w-px h-16 bg-gradient-to-b from-transparent to-outline opacity-30 mb-8 -mt-8"></div>
<span className="material-symbols-outlined text-secondary mb-sm text-4xl opacity-80" style={{fontVariationSettings: '\'FILL\' 0, \'wght\' 200'}}>bookmark_added</span>
<h1 className="font-display-lg text-display-lg text-primary mb-sm">My Saved Collection</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic">Books waiting to become part of your physical library.</p>
</header>
{/* Wishlist Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xxl">
{/* Book Card 1 */}
<article className="book-reveal bg-primary-container rounded-lg p-lg shadow-level-1 border border-surface-dim book-card-hover flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg"></div>
<div className="relative mb-lg flex justify-center perspective-[1000px]">
<div className="relative w-48 h-72 book-cover-img rounded-r-md rounded-l-sm shadow-md bg-white border-l-4 border-l-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A highly detailed, realistic book cover design for 'The Name of the Wind' in an editorial luxury style. The cover features deep emerald greens and burnished gold typography, with intricate filigree framing. The setting is a moody, ambient library lighting setup. Cinematic, 8k resolution, photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz27lbNwJY2SDrb0-6agEF7JLvWmZCc17zEe2UMIrHuo_Up2yiYOrdSXwY-0qbhRlg8KMYUXsPlTqOxscvDhvZpy5utW3603g0_xC3CHsUQZ8E0H8yKLVl5Tj-DB9TNQ3fG4jPH6pGVpepSQxzzOphxXeNBz8d4eyKTrLhveELK6KIqZE3rNwjqDR7SJUhu1hIfyuGsfDh97k-1R6bxKd5yzBPSolTF-nanJN8Lm3PWaWct3brva5rYg" />
<div className="absolute inset-y-0 left-0 w-2 book-spine"></div>
</div>
</div>
<div className="flex-grow flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs line-clamp-2">The Name of the Wind</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Patrick Rothfuss</p>
<div className="mt-auto pt-md border-t border-surface-dim/50 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">$34.00</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary/10 px-2 py-1 rounded-full">In Stock</span>
</div>
</div>
<div className="mt-lg flex flex-col gap-sm">
<button className="w-full bg-secondary text-white font-label-md text-label-md py-3 px-4 rounded hover:bg-secondary/90 transition-colors shadow-sm flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Move to Cart
                    </button>
<button className="w-full text-on-surface-variant font-label-sm text-label-sm py-2 px-4 rounded hover:text-error transition-colors flex justify-center items-center gap-1">
                        Remove
                    </button>
</div>
</article>
{/* Book Card 2 */}
<article className="book-reveal bg-primary-container rounded-lg p-lg shadow-level-1 border border-surface-dim book-card-hover flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg"></div>
<div className="relative mb-lg flex justify-center perspective-[1000px]">
<div className="relative w-48 h-72 book-cover-img rounded-r-md rounded-l-sm shadow-md bg-white border-l-4 border-l-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A luxurious, vintage-inspired book cover for 'Dune' by Frank Herbert. The cover showcases minimal, vast desert dunes in warm terracotta and burnt orange tones under a stark dual-sun sky. The title is in heavy, embossed gold serif typography. Soft, tactile paper texture visible. Elegant, timeless design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSZoUiV5TQwDIbT7T6LX7xjfJTGuE2mTwCCjX5Aaydg-050Um7LPTFTUh-NVDfLKW_K_3c3fkF6BaPsXA_PeK0xjaYQeFtTstfqYO5dHkHu2aXzedaZQTLzX9LuIJOKAyxhdZcOjWATdDEHOL1L0ky6T42gEjR1OIHbo4vzEm8RjRhPVI-nv2yGOKcTq9orZBaKte-efylJoyCkFm9_osBofrKCFm0wPRYPDtuwYj_qfv-MNqkZK_6Q" />
<div className="absolute inset-y-0 left-0 w-2 book-spine"></div>
</div>
</div>
<div className="flex-grow flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs line-clamp-2">Dune: Deluxe Edition</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Frank Herbert</p>
<div className="mt-auto pt-md border-t border-surface-dim/50 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">$45.00</span>
<span className="font-label-sm text-label-sm text-error bg-error/10 px-2 py-1 rounded-full">Low Stock</span>
</div>
</div>
<div className="mt-lg flex flex-col gap-sm">
<button className="w-full bg-secondary text-white font-label-md text-label-md py-3 px-4 rounded hover:bg-secondary/90 transition-colors shadow-sm flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Move to Cart
                    </button>
<button className="w-full text-on-surface-variant font-label-sm text-label-sm py-2 px-4 rounded hover:text-error transition-colors flex justify-center items-center gap-1">
                        Remove
                    </button>
</div>
</article>
{/* Book Card 3 */}
<article className="book-reveal bg-primary-container rounded-lg p-lg shadow-level-1 border border-surface-dim book-card-hover flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg"></div>
<div className="relative mb-lg flex justify-center perspective-[1000px]">
<div className="relative w-48 h-72 book-cover-img rounded-r-md rounded-l-sm shadow-md bg-white border-l-4 border-l-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A modern editorial book cover design for 'The Secret History' by Donna Tartt. Dark academia aesthetic with marble textures, muted dark blues, and subtle silver foil accents. The typography is striking and classical. The image feels heavy and prestigious, like an old university archive text." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwOiw41GHn6HUy3VKu7S3hJMeIcQ4gZYkkBRAIMLLRSaUJtarNSnKi2or9AG-Fa0Qr1-3NJHbWKlMkoo-VpEJ8zrMebyrCARX4ZJzZJmbW3oHL7f6r0MnXNEV5K-c4rZ0ffYmmw0LzGVC-e1ZRc8sjbNDgC_7A0QK-roDxi2Gd5QHNWtmyTDB_wCK6bTx1mlmHSuz1eGnn-53RNm-fWREqVU39OZwx6gCp_vFYpzxDgM1FW_lXBuiyjw" />
<div className="absolute inset-y-0 left-0 w-2 book-spine"></div>
</div>
</div>
<div className="flex-grow flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs line-clamp-2">The Secret History</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Donna Tartt</p>
<div className="mt-auto pt-md border-t border-surface-dim/50 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">$28.50</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary/10 px-2 py-1 rounded-full">In Stock</span>
</div>
</div>
<div className="mt-lg flex flex-col gap-sm">
<button className="w-full bg-secondary text-white font-label-md text-label-md py-3 px-4 rounded hover:bg-secondary/90 transition-colors shadow-sm flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Move to Cart
                    </button>
<button className="w-full text-on-surface-variant font-label-sm text-label-sm py-2 px-4 rounded hover:text-error transition-colors flex justify-center items-center gap-1">
                        Remove
                    </button>
</div>
</article>
{/* Book Card 4 */}
<article className="book-reveal bg-primary-container rounded-lg p-lg shadow-level-1 border border-surface-dim book-card-hover flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg"></div>
<div className="relative mb-lg flex justify-center perspective-[1000px]">
<div className="relative w-48 h-72 book-cover-img rounded-r-md rounded-l-sm shadow-md bg-white border-l-4 border-l-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A pristine, minimalist hardcover book design for a poetry collection. The cover is off-white linen texture with a simple, delicate blind-debossed illustration of a lone swallow in flight. Typography is tiny, elegant, and placed carefully in the center. Pure light-mode luxury publishing aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjHCBIFmxr3pbPtKlB5a5a5Vlbvw3V0Nlo8gBWGDGLWqFA7BEOs0-35lE3RIHhoZbc3xohiArRatlG3JgAeFVqULMQW2oFTfbteTLQyF4mkPh7qp5q3x43f9C3e9u9UkYt3OHjY5Bvqd_b7D6HLVQ7n21bD-MtNWyWaUJR7whd43Wa51xciDXZ1TagmYIucZfFzXBDBNwM68NTd-rKdlkTDmH-azgt8CVinnOpPgTb3CJNYviI2i2NvQ" />
<div className="absolute inset-y-0 left-0 w-2 book-spine"></div>
</div>
</div>
<div className="flex-grow flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs line-clamp-2">Selected Poems</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Mary Oliver</p>
<div className="mt-auto pt-md border-t border-surface-dim/50 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">$22.00</span>
<span className="font-label-sm text-label-sm text-outline bg-surface-dim/30 px-2 py-1 rounded-full">Backordered</span>
</div>
</div>
<div className="mt-lg flex flex-col gap-sm">
<button className="w-full border border-secondary text-primary font-label-md text-label-md py-3 px-4 rounded hover:bg-secondary/5 transition-colors flex justify-center items-center gap-2">
                        Notify Me
                    </button>
<button className="w-full text-on-surface-variant font-label-sm text-label-sm py-2 px-4 rounded hover:text-error transition-colors flex justify-center items-center gap-1">
                        Remove
                    </button>
</div>
</article>
</section>
{/* Empty State Logic (Hidden by default, shown for structure completeness) */}
{/* <section className="hidden flex-col items-center justify-center py-xxl text-center">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-md" style={{fontVariationSettings: '\'wght\' 200'}}>shelves</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-sm">Your collection is waiting</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">Discover new volumes to add to your personal archive.</p>
            <button className="bg-primary text-white font-label-md text-label-md py-3 px-6 rounded hover:bg-primary/90 transition-colors">
                Explore Books
            </button>
        </section> */}
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-headline-sm text-headline-sm font-body-md text-body-md font-label-sm text-label-sm full-width bottom-0 border-t border-outline dark:border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-xl max-w-[1280px] mx-auto">
<div className="font-headline-md text-headline-md text-on-primary mb-md md:mb-0">
                BookNest
            </div>
<div className="flex flex-wrap justify-center gap-md mb-md md:mb-0">
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Terms of Service</a>
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Archival Standards</a>
<a className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Contact Us</a>
</div>
<div className="text-on-primary-fixed-variant text-center md:text-right">
                © 2024 BookNest. The Private Collector's Digital Archive.
            </div>
</div>
</footer>
    </>
  );
}
