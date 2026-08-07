import React, { useEffect } from 'react';
import './TrackYourJourney.css';

export default function TrackYourJourney() {
  
  useEffect(() => {
    // Scroll Intersection Observer for fade-in effect
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
                        
                        // Trigger timeline animation when timeline section is visible
                        if(entry.target.querySelector('#progress-line')) {
                            setTimeout(() => {
                                // Calculate height to the second item (Out for delivery)
                                // Approximating based on spacing
                                document.getElementById('progress-line').style.height = 'calc(100% - 3.5rem)';
                            }, 300);
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach(section => {
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
<nav className="bg-primary dark:bg-primary-container docked full-width top-0 border-b border-outline dark:border-outline-variant shadow-sm dark:shadow-none z-50 sticky">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
<div className="flex items-center gap-xl">
<a className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container tracking-tight" href="#">BookNest</a>
<div className="hidden md:flex gap-lg items-center">
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Home</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Shop</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Categories</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Blog</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">About</a>
</div>
</div>
<div className="flex items-center gap-md">
<button className="text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>shopping_bag</span>
</button>
<button className="text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity duration-300 scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>person</span>
</button>
</div>
</div>
</nav>
<main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Header */}
<header className="text-center mb-xl fade-in-section">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#171A1C] mb-sm">Track Order</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Trace the journey of your next great read.</p>
</header>
{/* Tracking Search Section */}
<section className="max-w-2xl mx-auto mb-xxl fade-in-section">
<div className="soft-archive-white rounded-xl shadow-level-1 border border-[#D3D0C8] p-lg md:p-xl transition-shadow duration-300 hover:shadow-level-2">
<form className="flex flex-col gap-md">
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="order-id">Order Reference</label>
<input className="bg-transparent border-b border-[#D3D0C8] focus:border-[#171A1C] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#171A1C] transition-colors duration-200" id="order-id" placeholder="e.g. BN-8472-X" readOnly={true} type="text" defaultValue="BN-8472-X" />
</div>
<div className="flex flex-col gap-xs mt-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email or Phone</label>
<input className="bg-transparent border-b border-[#D3D0C8] focus:border-[#171A1C] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#171A1C] transition-colors duration-200" id="email" placeholder="Email address associated with order" readOnly={true} type="text" defaultValue="h.potter@example.com" />
</div>
{/* <button type="submit" className="mt-md bg-burnished-brass text-[#171A1C] font-label-md text-label-md py-md px-lg rounded flex items-center justify-center gap-sm hover:opacity-90 transition-opacity duration-200">
                        <span>Locate Parcel</span>
                        <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </button> */}
</form>
</div>
</section>
{/* Grid Layout for Order Details & Timeline */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-xl md:gap-gutter fade-in-section">
{/* Left Column: Order Summary & Delivery Info (8 cols) */}
<div className="md:col-span-8 flex flex-col gap-xl">
{/* Order Summary */}
<section className="soft-archive-white rounded-xl border border-[#D3D0C8] shadow-level-1 overflow-hidden">
<div className="p-lg md:p-xl border-b border-[#D3D0C8] flex justify-between items-end">
<div>
<h2 className="font-headline-sm text-headline-sm text-[#171A1C] mb-xs">Consignment Details</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Placed on October 24, 2024</p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm bg-[#D3D0C8] text-[#171A1C] px-sm py-xs rounded-full uppercase tracking-wider">In Transit</span>
</div>
</div>
<div className="p-lg md:p-xl">
<ul className="flex flex-col gap-md">
<li className="flex gap-md pb-md border-b border-[#D3D0C8] last:border-0 last:pb-0">
<img alt="Book Cover" className="w-16 h-24 object-cover rounded shadow-sm border border-[#D3D0C8]" data-alt="A vintage leather-bound book with gold foil lettering resting on a soft velvet surface. High contrast, luxury editorial style photography, soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvMghsiU0JG0B8K6QDO04sN2Byrl0trX6pn2rtzYhKAryhuZXtfM_nRsKeW-WTUt8q0jwYZBC8gWddJCyb-0MEPT6uqkHuNwKi5wSU1HUE0FXdSTLUh1ElHXHXsPDwz9LaZ552OfFOgNAjy_Bvv0JBhI_EnVRxDU9eIDl0Ju9fdjLWAzm2R1KBPKxXYipysE93lUv7HUdzD9NptbcbIOtA_3VVuaZUT0ETrt8LFVHKxxG9zul1BcZGvg" />
<div className="flex-1 flex justify-between">
<div>
<h3 className="font-body-lg text-body-lg font-medium text-[#171A1C]">The Shadow of the Wind</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Carlos Ruiz Zafón • First Edition</p>
</div>
<div className="text-right">
<p className="font-body-md text-body-md text-[#171A1C]">Qty: 1</p>
</div>
</div>
</li>
<li className="flex gap-md pb-md border-b border-[#D3D0C8] last:border-0 last:pb-0">
<img alt="Book Cover" className="w-16 h-24 object-cover rounded shadow-sm border border-[#D3D0C8]" data-alt="A meticulously bound collection of poetry with a minimalist embossed cover, resting on an aged ivory desk next to an antique brass magnifying glass. High contrast, luxury editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATmWZdRXb3MwqkHeVdgBHNhZVx98rZOg_PP-H8TzCi3MGwvNv-bvR9980TFbUBOOFFlotOaDrzigzwnStXQrMym62ZTjnHGYPXsZJ6w9tJhPFXR3brl3te7Ie02e24NtapBu9dW5gP8vTqTXc2szXX44DLWyzHH9ykgdEfKcLdnhsDVlP12A5XP37EdgFqRVs--hIcU1Cc3_JQNab1bPHrX02Yfv77HlD-9FejNpbgDS-SvqZyVddb0g" />
<div className="flex-1 flex justify-between">
<div>
<h3 className="font-body-lg text-body-lg font-medium text-[#171A1C]">Selected Poems</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">W.B. Yeats • Archival Binding</p>
</div>
<div className="text-right">
<p className="font-body-md text-body-md text-[#171A1C]">Qty: 1</p>
</div>
</div>
</li>
</ul>
</div>
</section>
{/* Delivery Information */}
<section className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
<div className="soft-archive-white p-lg rounded-xl border border-[#D3D0C8] shadow-level-1">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: '\'FILL\' 0'}}>location_on</span>
<h3 className="font-headline-sm text-headline-sm text-[#171A1C]">Destination</h3>
</div>
<address className="font-body-md text-body-md text-[#171A1C] not-italic leading-relaxed">
                            Hermione Granger<br />
                            4 Privet Drive, Cupboard Under the Stairs<br />
                            Little Whinging, Surrey<br />
                            KT8 9LQ, United Kingdom
                        </address>
</div>
<div className="soft-archive-white p-lg rounded-xl border border-[#D3D0C8] shadow-level-1">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: '\'FILL\' 0'}}>local_shipping</span>
<h3 className="font-headline-sm text-headline-sm text-[#171A1C]">Dispatch Method</h3>
</div>
<p className="font-body-md text-body-md text-[#171A1C] mb-xs">Express Courier (Signature Required)</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Estimated Arrival: Oct 28, 2024</p>
</div>
</section>
</div>
{/* Right Column: Status Timeline (4 cols) */}
<div className="md:col-span-4">
<section className="soft-archive-white rounded-xl border border-[#D3D0C8] shadow-level-1 p-lg md:p-xl sticky top-24">
<h2 className="font-headline-sm text-headline-sm text-[#171A1C] mb-xl">Journey Log</h2>
<div className="relative">
{/* Vertical Line (Background) */}
<div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#D3D0C8]"></div>
{/* Vertical Line (Progress) */}
<div className="absolute left-[11px] top-2 w-[2px] bg-burnished-brass timeline-progress h-0" id="progress-line"></div>
<ul className="flex flex-col gap-lg relative z-10">
{/* Step 1: Delivered (Pending) */}
<li className="flex gap-md items-start opacity-40">
<div className="w-6 h-6 rounded-full bg-[#FAF8F3] border-2 border-[#D3D0C8] flex items-center justify-center mt-1 z-10 relative bg-white">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
<div>
<h4 className="font-body-md text-body-md font-medium text-[#171A1C]">Delivered</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Pending</p>
</div>
</li>
{/* Step 2: Out for Delivery (Active) */}
<li className="flex gap-md items-start">
<div className="w-6 h-6 rounded-full bg-[#FAF8F3] border-2 border-burnished-brass flex items-center justify-center mt-1 z-10 relative bg-white">
<div className="w-2 h-2 rounded-full bg-burnished-brass"></div>
</div>
<div>
<h4 className="font-body-md text-body-md font-medium text-[#171A1C]">Out for Delivery</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Oct 28, 08:45 AM • Surrey Depot</p>
</div>
</li>
{/* Step 3: In Transit */}
<li className="flex gap-md items-start">
<div className="w-6 h-6 rounded-full bg-burnished-brass border-2 border-burnished-brass flex items-center justify-center mt-1 z-10 relative">
<span className="material-symbols-outlined text-white text-[12px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
</div>
<div>
<h4 className="font-body-md text-body-md font-medium text-[#171A1C]">In Transit</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Oct 26, 14:30 PM • Regional Sorting Hub</p>
</div>
</li>
{/* Step 4: Dispatched */}
<li className="flex gap-md items-start">
<div className="w-6 h-6 rounded-full bg-burnished-brass border-2 border-burnished-brass flex items-center justify-center mt-1 z-10 relative">
<span className="material-symbols-outlined text-white text-[12px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
</div>
<div>
<h4 className="font-body-md text-body-md font-medium text-[#171A1C]">Dispatched</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Oct 25, 09:15 AM • BookNest Archives</p>
</div>
</li>
{/* Step 5: Order Confirmed */}
<li className="flex gap-md items-start">
<div className="w-6 h-6 rounded-full bg-burnished-brass border-2 border-burnished-brass flex items-center justify-center mt-1 z-10 relative">
<span className="material-symbols-outlined text-white text-[12px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
</div>
<div>
<h4 className="font-body-md text-body-md font-medium text-[#171A1C]">Order Confirmed</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Oct 24, 18:02 PM</p>
</div>
</li>
</ul>
</div>
</section>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container full-width bottom-0 border-t border-outline dark:border-outline-variant mt-xxl">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-xl max-w-[1280px] mx-auto gap-lg">
<div className="font-headline-md text-headline-md text-on-primary">BookNest</div>
<div className="font-body-md text-body-md text-on-primary dark:text-on-primary-container text-center md:text-left">
                © 2024 BookNest. The Private Collector's Digital Archive.
            </div>
<div className="flex flex-wrap justify-center gap-md">
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Terms of Service</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Privacy Policy</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Archival Standards</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Contact Us</a>
</div>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
