import React from 'react';
import './ShoppingCartYourBookCollection.css';

export default function ShoppingCartYourBookCollection() {
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-midnight-ink shadow-sm docked full-width top-0 sticky z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max-width mx-auto py-4">
<div className="flex items-center gap-8">
<a className="text-headline-lg font-display-lg font-bold text-on-primary" href="#">BookNest</a>
<div className="hidden md:flex gap-6">
<a className="text-on-primary/80 font-body-md text-body-md hover:text-antique-brass transition-colors duration-400" href="#">Shop</a>
<a className="text-on-primary/80 font-body-md text-body-md hover:text-antique-brass transition-colors duration-400" href="#">Categories</a>
<a className="text-on-primary/80 font-body-md text-body-md hover:text-antique-brass transition-colors duration-400" href="#">New Arrivals</a>
</div>
</div>
<div className="flex items-center gap-4 text-on-primary">
<button className="p-2 hover:text-antique-brass transition-colors duration-400">
<span className="material-symbols-outlined">search</span>
</button>
<button className="p-2 hover:text-antique-brass transition-colors duration-400 relative">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-antique-brass rounded-full"></span>
</button>
<button className="p-2 hover:text-antique-brass transition-colors duration-400">
<span className="material-symbols-outlined">person</span>
</button>
</div>
</div>
</nav>
<main className="w-full px-margin-desktop max-w-container-max-width mx-auto py-12">
{/* Header */}
<header className="mb-12">
<h1 className="font-display-lg text-display-lg text-midnight-ink mb-2">Your Book Collection</h1>
<p className="font-body-lg text-body-lg text-midnight-ink/70">Review your selected books before checkout.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Cart Items (Left Column) */}
<div className="lg:col-span-8 flex flex-col gap-8">
{/* Floating Book Shelf Item 1 */}
<div className="relative w-full">
<div className="absolute bottom-0 left-0 w-full h-4 bg-cloud-linen rounded-b-premium shelf-shadow -z-10"></div>
<div className="bg-surface rounded-premium p-6 flex gap-6 items-center border border-cloud-linen relative z-0">
<div className="w-24 h-36 flex-shrink-0 relative perspective-1000">
<img alt="The Midnight Library" className="w-full h-full object-cover rounded-sm book-shadow" data-alt="A hardcover copy of 'The Midnight Library' with a mystical dark blue and gold foil cover design, positioned upright on a miniature shelf. Soft warm lighting highlights the textured paper dust jacket. Editorial product photography style, high resolution, minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc04HaBLibyeUJm9Xbw1Pkj_DgnGhVcLRDmmAvc0tsp1LK0s_KKwWe1g3GyknXPkbp19xz0hkOVImeGtRmeJU_9fOACWbKXCdulnSrIzEYTJkw5jVDXcwVL8w7KPiWoLl3Ts2y0tHB-2EBlL3AvnTOsj0PlOfncztMEqKkWt4WImGmRcNb_618sa5XB5q_zNZm323YzapsObO4iSDNGnAU8lgPxsQhzB4Lp_d-2FmFkWrDRc4uXJBJ" />
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md text-midnight-ink mb-1">The Midnight Library</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/60 mb-3">Matt Haig</p>
<p className="font-label-md text-label-md text-antique-brass">$24.99</p>
</div>
<div className="flex flex-col items-end justify-between h-full py-2 gap-4">
<button className="text-midnight-ink/40 hover:text-danger-rose transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
<div className="flex items-center gap-3 bg-surface-muted rounded-full px-3 py-1 border border-cloud-linen">
<button className="text-midnight-ink/60 hover:text-midnight-ink"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>remove</span></button>
<span className="font-label-md text-label-md w-4 text-center">1</span>
<button className="text-midnight-ink/60 hover:text-midnight-ink"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>add</span></button>
</div>
</div>
</div>
</div>
{/* Floating Book Shelf Item 2 */}
<div className="relative w-full">
<div className="absolute bottom-0 left-0 w-full h-4 bg-cloud-linen rounded-b-premium shelf-shadow -z-10"></div>
<div className="bg-surface rounded-premium p-6 flex gap-6 items-center border border-cloud-linen relative z-0">
<div className="w-24 h-36 flex-shrink-0 relative perspective-1000">
<img alt="Dune" className="w-full h-full object-cover rounded-sm book-shadow" data-alt="A premium hardcover edition of 'Dune' by Frank Herbert, featuring minimalist desert landscape cover art with striking typography. Positioned upright on a miniature wooden shelf. Soft warm lighting, editorial product photography style, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL3kxJiwtsgXLe0EPm0mV7dsWdhG847iAAMXSUzVIYpIWm0OkyHT0Zch--PlGRiyy1c_cZfJjJTeajT48pzgwZ_dj0jZFPwENDJLrIxQ1vmT2n2oaryxbQGo9nGmEiR-WUEs4wafk7squjvW25ZWY5WQ1fZghmg9wzEeEfTc7vF6AYSwz6UXTrTDHZGp3A3snrm3zA8fAlfIDcqJ1hHw7fCytmDnwM2U5N1OJjHQ1zNBQ23JgYAd25" />
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md text-midnight-ink mb-1">Dune</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/60 mb-3">Frank Herbert</p>
<p className="font-label-md text-label-md text-antique-brass">$29.50</p>
</div>
<div className="flex flex-col items-end justify-between h-full py-2 gap-4">
<button className="text-midnight-ink/40 hover:text-danger-rose transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
<div className="flex items-center gap-3 bg-surface-muted rounded-full px-3 py-1 border border-cloud-linen">
<button className="text-midnight-ink/60 hover:text-midnight-ink"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>remove</span></button>
<span className="font-label-md text-label-md w-4 text-center">2</span>
<button className="text-midnight-ink/60 hover:text-midnight-ink"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>add</span></button>
</div>
</div>
</div>
</div>
</div>
{/* Order Summary & Coupon (Right Column) */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/* Order Summary Panel */}
<div className="bg-cloud-linen rounded-premium p-6 shelf-shadow border border-cloud-linen/80">
<h2 className="font-headline-md text-headline-md text-midnight-ink mb-6 border-b border-midnight-ink/10 pb-4">Order Summary</h2>
<div className="flex flex-col gap-4 mb-6">
<div className="flex justify-between items-center font-body-md text-body-md">
<span className="text-midnight-ink/70">Subtotal (3 items)</span>
<span className="font-label-md text-label-md text-midnight-ink">$83.99</span>
</div>
<div className="flex justify-between items-center font-body-md text-body-md">
<span className="text-midnight-ink/70">Shipping</span>
<span className="font-label-md text-label-md text-midnight-ink">Calculated at checkout</span>
</div>
<div className="flex justify-between items-center font-body-md text-body-md">
<span className="text-midnight-ink/70">Estimated Tax</span>
<span className="font-label-md text-label-md text-midnight-ink">$6.72</span>
</div>
</div>
<div className="flex justify-between items-center border-t border-midnight-ink/10 pt-4 mb-8">
<span className="font-headline-md text-headline-md text-midnight-ink">Total</span>
<span className="font-display-lg text-headline-lg text-antique-brass">$90.71</span>
</div>
<button className="w-full bg-antique-brass hover:bg-antique-brass/90 text-on-primary font-label-md text-label-md uppercase tracking-widest py-4 rounded-premium transition-all duration-300 shelf-shadow flex justify-center items-center gap-2">
                        Proceed to Checkout
                        <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
</button>
</div>
{/* Coupon Section */}
<div className="bg-surface rounded-premium p-6 border border-cloud-linen shelf-shadow">
<h3 className="font-body-md text-body-md font-semibold text-midnight-ink mb-3">Gift Card or Discount Code</h3>
<div className="flex gap-2">
<input className="w-full bg-paper-mist border border-cloud-linen rounded-lg px-4 py-3 font-body-sm text-body-sm focus:ring-2 focus:ring-antique-brass focus:border-antique-brass outline-none transition-all placeholder:text-midnight-ink/40" placeholder="Enter code" type="text" />
<button className="bg-midnight-ink hover:bg-midnight-ink/90 text-on-primary px-6 py-3 rounded-lg font-label-md text-label-sm transition-colors whitespace-nowrap">Apply</button>
</div>
</div>
</div>
</div>
{/* Recommendations */}
<section className="mt-24">
<h2 className="font-headline-lg text-headline-lg text-midnight-ink mb-8 text-center">Readers also discovered</h2>
<div className="relative w-full max-w-4xl mx-auto">
<div className="absolute bottom-0 left-0 w-full h-6 bg-cloud-linen rounded-b-xl shelf-shadow -z-10"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-4 px-8 items-end relative z-0">
<div className="flex flex-col items-center group cursor-pointer">
<div className="w-28 h-40 relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
<img alt="Circe" className="w-full h-full object-cover rounded-sm book-shadow" data-alt="A hardcover book titled 'Circe' by Madeline Miller with a striking black and gold cover, sitting on a wooden shelf. Warm library lighting, editorial style, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZakEYPd_3jIYTs3JFdBfKa5C61q7zUkBlK4m8xY68pqiSPQAtQBeZvVrlEGpbpQFxiV_NUxObfuaVW4XaU8yPT0MTHcueL3nGaf75mFDFc6jGivrxSAZXhikwjmnYM6yV4goScTNyMef9hyJxg_aZnYte_HyaUjU2jMwuvPUR1De5yjxEHAUUuvvbjTkWlKNao8tDLUq09ou5SaARyqsJ9XEdK5d3JgDp6uGmIlaQI3zfx8sSi3yA" />
</div>
<p className="font-label-sm text-label-sm text-midnight-ink text-center line-clamp-1">Circe</p>
</div>
<div className="flex flex-col items-center group cursor-pointer">
<div className="w-28 h-40 relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
<img alt="Project Hail Mary" className="w-full h-full object-cover rounded-sm book-shadow" data-alt="A hardcover book titled 'Project Hail Mary' by Andy Weir, featuring a deep space cover design, sitting upright on a wooden shelf. Warm ambient lighting, editorial product photography style, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZSPVFlwBVhNXcXdk1_KgNcjJNFffCxDaGchVw6wvi9y6n5FOfjT86-4Te8TvhELT0HO7uqhlZX6YM2gbS0NQHT7V1Tfrx0Yrtfl82qu29watgSOcbpa-jzM0fPV2ELDsUerfFYTJAttMf6qTak0x8WQ1euORk_hNyOvdlIQWev5Zt3iMYS7MY-4uwfZgIukaAOiKpKyyaIgV3cmmxCIq-IrQbJr1cwjIAKlc1CQ_3nAFBtrCky3T9" />
</div>
<p className="font-label-sm text-label-sm text-midnight-ink text-center line-clamp-1">Project Hail Mary</p>
</div>
<div className="flex flex-col items-center group cursor-pointer">
<div className="w-28 h-40 relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
<img alt="Tomorrow, and Tomorrow, and Tomorrow" className="w-full h-full object-cover rounded-sm book-shadow" data-alt="A hardcover book titled 'Tomorrow, and Tomorrow, and Tomorrow' by Gabrielle Zevin with a colorful retro gaming inspired cover, sitting on a shelf. Warm lighting, editorial style, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMoImGfppQUBJwa0P7JuPOMywRBbbfLpYYefSnoVa7Y_6xU9ZmDAHmHJIJiNSUIW3a9R_vn4Mz8U44wQ9QFLg5XTozituCdUCLOzYZoGAZuexL-yNiYGI62dqKoM8nB2HYcICfMh-22EYolOiuNA0qFjzealI5UzAZUXPnv0qqqZBt0FXKpk5ts76WF8vWmym2OcWEnrueUxlJQUKNioyGeFFWkrey-6v-X-TdFXLhJLxVIDoWmeK" />
</div>
<p className="font-label-sm text-label-sm text-midnight-ink text-center line-clamp-1">Tomorrow, and Tomorrow...</p>
</div>
<div className="flex flex-col items-center group cursor-pointer">
<div className="w-28 h-40 relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
<img alt="The Secret History" className="w-full h-full object-cover rounded-sm book-shadow" data-alt="A hardcover book titled 'The Secret History' by Donna Tartt with a minimalist classical aesthetic cover, sitting on a wooden shelf. Warm library lighting, editorial product photography style, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDtO4CiZt7IFpoDNl4vgI8n-OITe2m44KQk15HScL9KHKJW0j86n3PmaDJG4-M3fEQiN1lBM-L-RWfXe_CVfudhaIRswDgBQyWQuMZGUIKx-xGSx1dnLxKpos935P8e3LqafmZVVp0jooyeeBf7nOhqFHpiH1EtdmTsfOChVWaL5VBhCucp7ratPNOWOvDzbnH2GRV_OLYV7efcnYF-4bMRM_GQg4ue5-oXAGnzbR-H9tTDjPGJwsU" />
</div>
<p className="font-label-sm text-label-sm text-midnight-ink text-center line-clamp-1">The Secret History</p>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-midnight-ink w-full px-margin-desktop py-12 border-t border-midnight-ink/20 mt-12">
<div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div>
<a className="text-headline-md font-display-lg text-on-primary block mb-4" href="#">BookNest</a>
<p className="font-body-sm text-body-sm text-on-primary/60">© 2024 BookNest. All rights reserved.</p>
</div>
<div className="flex flex-col gap-3">
<a className="font-body-sm text-body-sm text-on-primary/60 hover:text-on-primary transition-colors duration-400 pointer-cursor" href="#">About Us</a>
<a className="font-body-sm text-body-sm text-on-primary/60 hover:text-on-primary transition-colors duration-400 pointer-cursor" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<a className="font-body-sm text-body-sm text-on-primary/60 hover:text-on-primary transition-colors duration-400 pointer-cursor" href="#">Shipping Policy</a>
<a className="font-body-sm text-body-sm text-on-primary/60 hover:text-on-primary transition-colors duration-400 pointer-cursor" href="#">Privacy Policy</a>
</div>
<div className="flex flex-col gap-3">
<a className="font-body-sm text-body-sm text-on-primary/60 hover:text-on-primary transition-colors duration-400 pointer-cursor" href="#">Newsletter</a>
</div>
</div>
</footer>
    </>
  );
}
