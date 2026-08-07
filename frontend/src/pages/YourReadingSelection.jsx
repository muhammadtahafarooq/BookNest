import React, { useEffect } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './YourReadingSelection.css';

export default function YourReadingSelection() {
  
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
            // Simple intersection observer to trigger shelf slide-in when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-slide-in-shelf').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });
      const navigate = useNavigate();
  return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary-container font-headline-md text-headline-md font-body-md text-body-md docked full-width top-0 border-b border-outline-variant shadow-sm w-full sticky z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
{/* Brand */}
<Link className="font-headline-md text-headline-md text-on-primary tracking-tight" to="/">BookNest</Link>
{/* Trailing Icons */}
<div className="flex items-center gap-lg">
<Link aria-label="favorite" className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/dashboard/myreadingshelfbooknestwishlist">
<span className="material-symbols-outlined">favorite</span>
</Link>
<Link aria-label="shopping_cart" className="text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-xs hover:text-secondary-fixed transition-colors duration-200 opacity-80" to="/shopbrowsebooks">
<span className="material-symbols-outlined">shopping_cart</span>
</Link>
<Link aria-label="account_circle" className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">account_circle</span>
</Link>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xxl">
{/* Cart Header */}
<header className="mb-xl">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-obsidian-ink mb-sm">Your Reading Selection</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Review your chosen books before checkout.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/* Cart Items List (8 Columns) */}
<div className="lg:col-span-8 flex flex-col gap-lg border-t border-outline-variant pt-lg">
{/* Book Item 1 */}
<article className="flex flex-col sm:flex-row gap-lg py-md border-b border-outline-variant pb-xl">
<div className="w-32 h-48 shrink-0 bg-surface-container-high rounded shadow-level-1 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A vintage, leather-bound hardcover book lying flat on an aged mahogany desk. Soft, warm library lighting illuminates the embossed gold text on the cover. The scene evokes a sense of historical intellectualism, with a color palette dominated by deep browns, archive whites, and subtle gold accents. High-contrast editorial style photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4tb1J-Uq3-OTSwchkXKeRMbdVJJ4BXsOakZJRxPurxbMVPOrw-OuI7yPflRq8_nG_18v95CZBVGC8wkJE0xPiiRNKra4-BNTgcXVG2QYG7J_EzMdYSyOCPRj0R594-NJwDOjuhROfP65ilkEcnpM88SEA_mqB65y1HKDNknEqWWJpv01wLspfLM5Tf-U8iAhwGB87msL5MCRJ10f8HxHEKiMqvWpTO5U9Z8JFJGjXna0VK22XP8p7rw" />
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink">The Architecture of Happiness</h3>
<button aria-label="Remove item" className="text-outline hover:text-error transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Alain de Botton</p>
<p className="font-label-sm text-label-sm bg-[#374b3e] text-white px-md py-xs rounded-full inline-block mb-md">Philosophy / Design</p>
</div>
<div className="flex justify-between items-center mt-auto pt-sm">
{/* Quantity Selector Minimal */}
<div className="flex items-center border border-outline-variant rounded bg-soft-archive-white">
<button aria-label="Decrease quantity" className="p-xs text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">remove</span>
</button>
<span className="font-label-md text-label-md px-md w-8 text-center">1</span>
<button aria-label="Increase quantity" className="p-xs text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">add</span>
</button>
</div>
<div className="font-headline-md text-headline-md text-obsidian-ink">$28.00</div>
</div>
</div>
</article>
{/* Book Item 2 */}
<article className="flex flex-col sm:flex-row gap-lg py-md border-b border-outline-variant pb-xl">
<div className="w-32 h-48 shrink-0 bg-surface-container-high rounded shadow-level-1 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A minimalist modern art exhibition catalog with a clean white cover, featuring a single, striking geometric shape in muted charcoal. The book is resting on a pristine, soft archive white surface in bright, diffuse daylight. The setting is clean, modern, and highly disciplined, reflecting high-end editorial aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhMEV5Rq63Rfey9wlnabSzIp4hqVtSd3dcvFMSWM9_yZst75EdXDbRja1MCIyenC_M-lJOdKT-8b5Q0BnycaETIyIIgYQSCB1HHVdeRAoQdqEsmw1k8U90nkuAlel2qGADZFxJcv9h6A986tyqTfoBWEqiVT2QpmtJxFbl3Tqm4B89px5JP3XEWnaAjhqC7cz6ySlTv_iq3unU81jbOnpXXo_ls8VOaj4E5yiuwAcDeSYvCIuxS0Hq6Q" />
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink">Wabi-Sabi for Artists</h3>
<button aria-label="Remove item" className="text-outline hover:text-error transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Leonard Koren</p>
<p className="font-label-sm text-label-sm bg-[#374b3e] text-white px-md py-xs rounded-full inline-block mb-md">Aesthetics</p>
</div>
<div className="flex justify-between items-center mt-auto pt-sm">
<div className="flex items-center border border-outline-variant rounded bg-soft-archive-white">
<button aria-label="Decrease quantity" className="p-xs text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">remove</span>
</button>
<span className="font-label-md text-label-md px-md w-8 text-center">1</span>
<button aria-label="Increase quantity" className="p-xs text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">add</span>
</button>
</div>
<div className="font-headline-md text-headline-md text-obsidian-ink">$16.50</div>
</div>
</div>
</article>
</div>
{/* Cart Summary & Ledger (4 Columns) */}
<div className="lg:col-span-4">
<div className="bg-soft-archive-white p-lg rounded-lg shadow-level-1 border border-outline-variant animate-fade-up-ledger sticky top-32">
<h2 className="font-headline-sm text-headline-sm text-obsidian-ink mb-lg border-b border-outline-variant pb-md">Order Summary</h2>
{/* Voucher Input */}
<div className="mb-lg">
<label className="font-label-md text-label-md text-on-surface-variant block mb-sm" htmlFor="voucher">Complete Your Collection</label>
<div className="flex gap-sm">
<input className="flex-grow bg-soft-archive-white border border-outline-variant focus:border-obsidian-ink focus:ring-0 rounded p-sm font-body-md text-body-md" id="voucher" placeholder="Enter collection code" type="text" />
<button className="border border-outline-variant text-obsidian-ink px-md py-sm rounded font-label-md text-label-md hover:bg-surface-variant transition-colors">Apply</button>
</div>
</div>
{/* Ledger Breakdown */}
<div className="space-y-sm font-body-md text-body-md mb-lg border-t border-outline-variant pt-lg">
<div className="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span className="text-obsidian-ink">$44.50</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Shipping estimate</span>
<span className="text-obsidian-ink">$5.00</span>
</div>
<div className="flex justify-between text-secondary">
<span>Member Discount</span>
<span>-$4.50</span>
</div>
</div>
{/* Total */}
<div className="flex justify-between items-center border-t border-outline-variant pt-md mb-xl">
<span className="font-headline-sm text-headline-sm text-obsidian-ink">Total</span>
<span className="font-headline-md text-headline-md text-obsidian-ink">$45.00</span>
</div>
{/* CTA */}
<button className="w-full bg-[#171A1C] text-[#FAF8F3] font-label-md text-label-md py-md rounded hover:opacity-90 transition-opacity flex justify-center items-center gap-sm" onClick={() => navigate('/securecheckoutarchive')}>
                        Proceed To Checkout
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Recommended Section (Complete Your Collection) */}
<section className="mt-xxl border-t border-outline-variant pt-xl">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-lg">Complete Your Collection</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
{/* Rec Book 1 */}
<div className="bg-soft-archive-white p-md rounded shadow-level-1 border border-outline-variant shadow-level-2 animate-slide-in-shelf delay-1">
<div className="aspect-[2/3] bg-surface-container-high mb-md relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A thick, premium paperback book with a subtle textured cream cover resting vertically against an invisible support. The lighting casts a long, elegant shadow on the soft archive white ground. The style is minimalist and intellectual, highlighting the physical presence of the printed object." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQA8snOLP9azD2gSd_a06oZ2rVV3SMl2Vx7sOINb5fC7vJ9g9Vl-GtdlgkZwpt1BBEKDr34PmSj0ZTtCSs_k2BLIu7_tNztdNYQIRJbGaUFoO6xz2YfbCo11yl4GsuTgIQZ_Kg19XA6cW9KUDEZE98RUVxraDZA7syurN8f1fctxr10gKmcJmfdSX8sDActmP8NyWN52yieDhskH41Wo92-XS7xJfGPDYXRiIFgWdNDGP1FEpWd9EZSw" />
</div>
<h4 className="font-label-md text-label-md text-obsidian-ink line-clamp-1">Ways of Seeing</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">John Berger</p>
<div className="mt-sm font-label-md text-label-md text-obsidian-ink">$14.00</div>
</div>
{/* Rec Book 2 */}
<div className="bg-soft-archive-white p-md rounded shadow-level-1 border border-outline-variant shadow-level-2 animate-slide-in-shelf delay-2">
<div className="aspect-[2/3] bg-surface-container-high mb-md relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A sleek, dark grey hardcover book with minimal typography, sitting elegantly on a desk. The lighting is soft and directional, emphasizing the texture of the cover material. The overall tone is sophisticated and serious, perfect for a high-end editorial display." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2E5XeCqFjcL9mU2skI3eEndSGFFPlB2xp2CPtEzO3ujlg50_-icCSaiB8Ga7yKuBTHscRO4uCyDpEGID5cCnaxTK-cjCLoFZUAhF-IQx9yscAufQ-pYsOpX9RPONz7GYvyVaXP5v3yoR6-Pn9qCFFwtB1hpiTqK71IUu0nusWjhpUfqunjqsNZxnXVSqIyrqVULG5A4ZS98VZZeKCKv4daCZFe1xDR49qje6sS8YjSaKGpxFlLPNUmA" />
</div>
<h4 className="font-label-md text-label-md text-obsidian-ink line-clamp-1">In Praise of Shadows</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Jun'ichirō Tanizaki</p>
<div className="mt-sm font-label-md text-label-md text-obsidian-ink">$12.00</div>
</div>
{/* Rec Book 3 */}
<div className="bg-soft-archive-white p-md rounded shadow-level-1 border border-outline-variant shadow-level-2 animate-slide-in-shelf delay-3 hidden md:block">
<div className="aspect-[2/3] bg-surface-container-high mb-md relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A visually striking book cover featuring abstract architectural patterns in muted greens and stone colors. The book is presented flat, slightly angled, as if just placed down by a reader. The aesthetic is clean, academic, and quietly luxurious, matching a premium digital library interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv8wdAp8KgdPDt0t63BsanAVZlDWzBtwm95U0lWCSgVtr-IK9imezLCgao4mVdslv1ZkQjP_XVtvsdK5DTqbx83rO0QdPidEqV4UyyUwl9Eb7FBzi0GKdMWRT4QEXot2GgjORrLh6UyXLtaD_MCbpGAk37qMnHDA9qov00vXk_qVRFdQ2IN5YrOMZgg0CFkuHj-Q5YeQwR7EZioWOxo2SEvpC_Fg5oVeAOWchDUml7_Yz6y6j3p46YUA" />
</div>
<h4 className="font-label-md text-label-md text-obsidian-ink line-clamp-1">Thinking Architecture</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Peter Zumthor</p>
<div className="mt-sm font-label-md text-label-md text-obsidian-ink">$35.00</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-body-md text-body-md font-label-sm text-label-sm full-width py-xxl border-t border-outline-variant mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-[1280px] mx-auto gap-xl">
{/* Brand */}
<div className="font-headline-sm text-headline-sm text-on-primary">BookNest</div>
{/* Links */}
<ul className="flex flex-wrap justify-center gap-md md:gap-lg">
<li><Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/browsecollections">The Collection</Link></li>
<li><Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/searchresultsbooknest">Research Guides</Link></li>
<li><Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/shopbrowsebooks">Archives</Link></li>
<li><Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/shopbrowsebooks">Privacy Policy</Link></li>
<li><Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/shopbrowsebooks">Terms of Service</Link></li>
</ul>
{/* Copyright */}
<div className="text-on-primary-fixed-variant font-label-sm text-label-sm text-center md:text-right">
                © 2024 BookNest Digital Archive. All Rights Reserved.
            </div>
</div>
</footer>
{/* Interactive Script for micro-interactions (optional embellishment) */}
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
