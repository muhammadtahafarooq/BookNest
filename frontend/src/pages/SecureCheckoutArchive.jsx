import React from 'react';
import './SecureCheckoutArchive.css';

export default function SecureCheckoutArchive() {
  return (
    <>
      {/* TopNavBar (Simplified for Checkout) */}
<header className="bg-soft-archive-white border-b border-stone-manuscript shadow-ambient-1 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
<a className="font-headline-sm text-headline-sm font-bold text-obsidian-ink tracking-tight" href="#">BookNest</a>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-outline">lock</span>
<span className="font-label-md text-label-md text-outline">Secure Checkout</span>
</div>
</div>
</header>
{/* Main Checkout Canvas */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Progress Indicator */}
<div className="w-full mb-xl opacity-0 animate-reveal">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-obsidian-ink mb-lg">Checkout</h1>
<div className="flex items-center justify-between relative max-w-2xl">
{/* Progress Track */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-stone-manuscript -z-10"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[33%] h-[2px] bg-burnished-brass -z-10 transition-all duration-500"></div>
{/* Steps */}
<div className="flex flex-col items-center gap-xs">
<div className="w-6 h-6 rounded-full bg-burnished-brass flex items-center justify-center">
<span className="material-symbols-outlined text-soft-archive-white text-[14px]">check</span>
</div>
<span className="font-label-sm text-label-sm text-burnished-brass">Information</span>
</div>
<div className="flex flex-col items-center gap-xs">
<div className="w-6 h-6 rounded-full bg-burnished-brass flex items-center justify-center">
<span className="font-label-sm text-label-sm text-soft-archive-white">2</span>
</div>
<span className="font-label-sm text-label-sm text-burnished-brass">Shipping</span>
</div>
<div className="flex flex-col items-center gap-xs">
<div className="w-6 h-6 rounded-full bg-soft-archive-white border-2 border-stone-manuscript flex items-center justify-center">
<span className="font-label-sm text-label-sm text-outline">3</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Payment</span>
</div>
</div>
</div>
{/* Two Column Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative items-start">
{/* Left Column: Forms (8 cols) */}
<div className="md:col-span-8 flex flex-col gap-xl">
{/* Shipping Address Section */}
<section className="bg-soft-archive-white border border-stone-manuscript rounded-card p-lg shadow-ambient-1 opacity-0 animate-reveal delay-100">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-lg border-b border-stone-manuscript pb-sm">Shipping Address</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="md:col-span-1">
<label className="booknest-label">First Name</label>
<input className="booknest-input" placeholder="Eleanor" type="text" />
</div>
<div className="md:col-span-1">
<label className="booknest-label">Last Name</label>
<input className="booknest-input" placeholder="Vance" type="text" />
</div>
<div className="md:col-span-2">
<label className="booknest-label">Address</label>
<input className="booknest-input" placeholder="123 Hill House Lane" type="text" />
</div>
<div className="md:col-span-1">
<label className="booknest-label">City</label>
<input className="booknest-input" placeholder="Arkham" type="text" />
</div>
<div className="md:col-span-1">
<label className="booknest-label">Province / State</label>
<select className="booknest-input appearance-none">
<option>Massachusetts</option>
<option>New York</option>
<option>California</option>
</select>
</div>
<div className="md:col-span-1">
<label className="booknest-label">Postal Code</label>
<input className="booknest-input" placeholder="01915" type="text" />
</div>
<div className="md:col-span-1">
<label className="booknest-label">Phone</label>
<input className="booknest-input" placeholder="(555) 019-1523" type="tel" />
</div>
</div>
</section>
{/* Shipping Method Section */}
<section className="bg-soft-archive-white border border-stone-manuscript rounded-card p-lg shadow-ambient-1 opacity-0 animate-reveal delay-200">
<h2 className="font-headline-md text-headline-md text-obsidian-ink mb-lg border-b border-stone-manuscript pb-sm">Shipping Method</h2>
<div className="flex flex-col gap-sm">
{/* Standard */}
<label className="flex items-center justify-between p-md border border-stone-manuscript rounded-input cursor-pointer hover:bg-aged-ivory transition-colors has-[:checked]:border-burnished-brass has-[:checked]:bg-aged-ivory">
<div className="flex items-center gap-md">
<input defaultChecked={true} className="booknest-radio w-5 h-5" name="shipping" type="radio" />
<div>
<span className="font-label-md text-label-md text-obsidian-ink block">Standard Library Rate</span>
<span className="font-body-md text-body-md text-outline block text-sm">5-7 Business Days</span>
</div>
</div>
<span className="font-label-md text-label-md text-obsidian-ink">$4.50</span>
</label>
{/* Express */}
<label className="flex items-center justify-between p-md border border-stone-manuscript rounded-input cursor-pointer hover:bg-aged-ivory transition-colors has-[:checked]:border-burnished-brass has-[:checked]:bg-aged-ivory">
<div className="flex items-center gap-md">
<input className="booknest-radio w-5 h-5" name="shipping" type="radio" />
<div>
<span className="font-label-md text-label-md text-obsidian-ink block">Express Courier</span>
<span className="font-body-md text-body-md text-outline block text-sm">1-2 Business Days</span>
</div>
</div>
<span className="font-label-md text-label-md text-obsidian-ink">$15.00</span>
</label>
</div>
</section>
</div>
{/* Right Column: Order Summary (4 cols, Sticky) */}
<div className="md:col-span-4 sticky top-gutter opacity-0 animate-reveal delay-300">
<div className="bg-soft-archive-white border border-stone-manuscript rounded-card p-lg shadow-ambient-2">
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-md border-b border-stone-manuscript pb-sm">Order Summary</h3>
{/* Items */}
<div className="flex flex-col gap-md mb-lg">
<div className="flex items-start gap-md">
<div className="w-16 h-24 bg-aged-ivory border border-stone-manuscript flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="A beautifully bound hardcover edition of a classic gothic novel, deep burgundy leather with gold foil stamping on the spine. It rests on a clean, soft white archival surface under soft, diffused gallery lighting. The aesthetic is high-end editorial, conveying luxury, permanence, and serious literary focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBoEJvNqwyQNRfW1TdIsHQ-Z6NvZeMBwoBHJaDA8zbE3m5l-l_4KPXBa3_zLfmLjheWwojFAkZUzZ9aqFItp50XotCwSPKUTnTY5FZPq1Imf-UPfijYkavzz64Mypdtc6tiNYq0rBOM4rzKX99-ym2Tu9VvgKiqmftmCLX1eV3CUZQQo7ttHdwxQRws_IkqfmZlWLxu0qYNYAXHzFhRrs1DHvOwtTEKtkm3RKmzl0JufVznJ_HgZWWbw" />
<span className="absolute -top-2 -right-2 w-5 h-5 bg-stone-manuscript rounded-full flex items-center justify-center font-label-sm text-label-sm text-obsidian-ink">1</span>
</div>
<div className="flex-grow">
<h4 className="font-label-md text-label-md text-obsidian-ink">The Haunting of Hill House</h4>
<p className="font-label-sm text-label-sm text-outline mb-xs">First Edition Facsimile</p>
<span className="font-label-md text-label-md text-obsidian-ink">$45.00</span>
</div>
</div>
</div>
{/* Discount Input */}
<div className="flex gap-sm mb-lg pt-md border-t border-stone-manuscript border-dashed">
<input className="booknest-input flex-grow" placeholder="Discount Code" type="text" />
<button className="px-md py-sm bg-stone-manuscript text-obsidian-ink font-label-md text-label-md rounded-input hover:bg-outline-variant transition-colors">Apply</button>
</div>
{/* Totals */}
<div className="flex flex-col gap-sm mb-lg pt-md border-t border-stone-manuscript">
<div className="flex justify-between">
<span className="font-body-md text-body-md text-outline">Subtotal</span>
<span className="font-body-md text-body-md text-obsidian-ink">$45.00</span>
</div>
<div className="flex justify-between">
<span className="font-body-md text-body-md text-outline">Shipping</span>
<span className="font-body-md text-body-md text-obsidian-ink">$4.50</span>
</div>
<div className="flex justify-between mt-sm pt-sm border-t border-stone-manuscript border-dashed">
<span className="font-headline-sm text-headline-sm text-obsidian-ink">Total</span>
<span className="font-headline-sm text-headline-sm text-obsidian-ink">
<span className="text-sm font-label-sm text-outline mr-1">USD</span>$49.50
                            </span>
</div>
</div>
{/* Action */}
<button className="w-full py-md bg-[#A67C42] text-soft-archive-white font-label-md text-label-md rounded-input hover:bg-obsidian-ink transition-colors duration-300 shadow-ambient-1 flex items-center justify-center gap-sm">
                        Continue to Payment
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-soft-archive-white border-t border-stone-manuscript mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-xl max-w-[1280px] mx-auto">
<span className="font-headline-sm text-headline-sm text-obsidian-ink mb-md md:mb-0">BookNest</span>
<div className="flex flex-col md:flex-row items-center gap-md">
<span className="font-label-sm text-label-sm text-outline">© 2024 BookNest. The Private Collector's Digital Archive.</span>
<div className="flex gap-md font-label-sm text-label-sm text-outline">
<a className="hover:text-obsidian-ink transition-colors" href="#">Terms of Service</a>
<a className="hover:text-obsidian-ink transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
