import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './YourReadingArchive.css';

export default function YourReadingArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<header className="bg-background dark:bg-surface-container-highest font-headline-sm text-headline-sm font-label-md text-label-md sticky w-full top-0 border-b border-surface-variant dark:border-outline-variant z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-[1280px] mx-auto h-20">
<div className="font-headline-md text-headline-md font-bold text-primary dark:text-on-primary-fixed">BookNest</div>
<nav className="hidden md:flex space-x-lg items-center">
<Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" to="/shopbrowsebooks">Archive</Link>
<Link className="text-primary dark:text-on-primary-fixed border-b-2 border-primary dark:border-on-primary-fixed pb-1 opacity-80 transition-opacity" to="/browsecollections">Collection</Link>
<Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" to="/dashboard/myreadingshelfbooknestwishlist">Wishlist</Link>
<Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" to="/shopbrowsebooks">Journal</Link>
</nav>
<div className="flex items-center space-x-md text-primary dark:text-on-primary-fixed">
<button className="hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
<button className="hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Page Header */}
<header className="mb-xl fade-in-up">
<h1 className="font-display-lg text-display-lg text-primary mb-sm">Your Reading Archive</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A curated history of your acquisitions. Delve into the provenance of your personal library.</p>
</header>
{/* Orders List */}
<div className="space-y-lg">
{/* Expanded Order Card */}
<article className="bg-surface-container-lowest rounded-lg border border-surface-variant shadow-level-1 hover:shadow-level-2 transition-shadow duration-300 p-lg md:p-gutter fade-in-up delay-100 flex flex-col">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-md border-b border-surface-variant pb-md">
<div>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-unit">Order #BN-2024-001</h2>
<time className="font-label-sm text-label-sm text-outline">October 14, 2024</time>
</div>
<div className="mt-sm md:mt-0 flex items-center space-x-md">
<span className="font-label-md text-label-md text-primary bg-secondary-container px-sm py-unit rounded-full">Delivered</span>
<span className="font-headline-sm text-headline-sm text-primary">$142.50</span>
</div>
</div>
<div className="flex flex-col md:flex-row gap-lg py-md">
{/* Book Items */}
<div className="flex-1 flex gap-md overflow-x-auto pb-sm">
<div className="flex gap-md min-w-max">
<div className="w-24 h-36 bg-surface-variant rounded flex-shrink-0 relative overflow-hidden border border-outline-variant">
<img className="object-cover w-full h-full" data-alt="A vintage, leather-bound first edition book cover in deep crimson and gold embossing, resting on an oak desk under soft, warm library lighting. The scene evokes a luxurious, historical editorial style with high contrast and sharp focus on the textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB35jZKwl-Q_OhtiA1KgrDMY7UZ9qBtzuo2XG2fR6o4KUPmoZj17sGPk0EEc7eHHU36CkLA9b0CzXvABK5n7D4o4vN-n9fLbVV3AnForOqRxpnRj6kUEfwAFO0hzzny2OwRHwmP_qGYwFSf0w9ME63WrY7QJtW-sxU-eqaAckju4-Rf7_kk8efTUBWKaMbeW1IjrgPRKb7pYgVX_suI9vzucPL-xp6v7atPXpNOqJYYMTEkVjgqOaRW4w" />
</div>
<div className="flex flex-col justify-center max-w-[200px]">
<span className="font-label-md text-label-md text-primary truncate">The Great Gatsby</span>
<span className="font-label-sm text-label-sm text-outline truncate">F. Scott Fitzgerald</span>
</div>
</div>
<div className="flex gap-md min-w-max">
<div className="w-24 h-36 bg-surface-variant rounded flex-shrink-0 relative overflow-hidden border border-outline-variant">
<img className="object-cover w-full h-full" data-alt="An elegant, minimalist modern hardcover book in slate grey with minimalist debossed typography, laid flat on textured ivory archival paper. The lighting is bright and diffuse, creating subtle ambient shadows indicative of a premium, clean design language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfoULnMmt_nGnIHVIZVKVO8p4Q8lNcup_IvIhnZALvEXY9VcQiFSIxOAPg72z3CWyikoy8Va_rmM-PANgPORE9YQ97f4KYJ25elrb_r-1LBYKx0Q3q0jWWqlpxszmR-yGuTM_w3rJZ8Pv0G28rGNxiHSAKJuH4zHsOQBVhv5eLWibKJ-xFCkDbMDXNy_2Ks9pzgalgwLG6xTnQ_t1cUWZ4W6xgoZHFzUwvQtUL7ocmhXMmgGae2AzDsA" />
</div>
<div className="flex flex-col justify-center max-w-[200px]">
<span className="font-label-md text-label-md text-primary truncate">A Brief History of Time</span>
<span className="font-label-sm text-label-sm text-outline truncate">Stephen Hawking</span>
</div>
</div>
</div>
</div>
{/* Expanded Details */}
<div className="mt-md pt-md border-t border-surface-variant grid grid-cols-1 md:grid-cols-3 gap-lg bg-surface-container-low p-md rounded-md">
<div>
<h3 className="font-label-md text-label-md text-primary mb-sm">Shipping Destination</h3>
<p className="font-body-md text-body-md text-on-surface-variant">123 Heritage Lane<br />Archival District, AD 90210</p>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary mb-sm">Payment Method</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-outline">credit_card</span>
                            Visa ending in 4242
                        </p>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary mb-sm">Order Summary</h3>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant mb-unit">
<span>Subtotal</span><span>$125.00</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant mb-unit">
<span>Tax &amp; Shipping</span><span>$17.50</span>
</div>
<div className="flex justify-between font-label-md text-label-md text-primary border-t border-outline-variant pt-unit mt-unit">
<span>Total</span><span>$142.50</span>
</div>
</div>
</div>
<div className="mt-md flex justify-end">
<button className="font-label-md text-label-md text-primary flex items-center gap-xs hover:text-on-surface-variant transition-colors">
                        Hide Details <span className="material-symbols-outlined text-[16px]">expand_less</span>
</button>
</div>
</article>
{/* Collapsed Order Card */}
<article className="bg-surface-container-lowest rounded-lg border border-surface-variant shadow-level-1 hover:shadow-level-2 transition-shadow duration-300 p-lg fade-in-up delay-200">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-md border-b border-surface-variant pb-md">
<div>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-unit">Order #BN-2023-089</h2>
<time className="font-label-sm text-label-sm text-outline">September 02, 2023</time>
</div>
<div className="mt-sm md:mt-0 flex items-center space-x-md">
<span className="font-label-md text-label-md text-primary bg-surface-container px-sm py-unit rounded-full border border-outline-variant">Archived</span>
<span className="font-headline-sm text-headline-sm text-primary">$85.00</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-lg pt-sm">
<div className="flex-1 flex gap-md w-full overflow-hidden">
<div className="flex gap-md min-w-max">
<div className="w-16 h-24 bg-surface-variant rounded flex-shrink-0 relative overflow-hidden border border-outline-variant">
<img className="object-cover w-full h-full" data-alt="A collection of antique brass bookmarks resting beside an open manuscript on textured archival paper. The lighting is soft and directional, highlighting the metallic sheen and the aged ivory color of the paper, reflecting a high-end editorial luxury style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRZdn1CdLWfE_O3Qx881z9oFpmVGCDGPneRDjUjy9nW5AyFaqbK8SedXilFtw-WDKyS2nhIBH2ZhDhNpfhBqBNP00_eSSCTLT42QaFVj1eI2vZIYECpwAwYU-4VPNs7oDc9N6klQwtkDkuQXDay1R2ESQR9hgLF7yRMXvaHLnJ5grrcqh3CHyrVXCwj5GdA2gudsP1VBOofRlKiAYtn5ssyD34df4fg1LO7w7CQ95EcmqfOxtTwLAb6A" />
</div>
<div className="flex flex-col justify-center">
<span className="font-label-md text-label-md text-primary">Meditations</span>
<span className="font-label-sm text-label-sm text-outline">Marcus Aurelius</span>
</div>
</div>
</div>
<button className="font-label-md text-label-md text-primary flex items-center gap-xs hover:text-on-surface-variant transition-colors whitespace-nowrap">
                        View Details <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</article>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto border-t border-surface-variant dark:border-outline-variant mt-auto">
<div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-on-primary-fixed mb-md md:mb-0">
            BookNest
        </div>
<nav className="flex flex-wrap justify-center gap-md font-body-md text-body-md font-label-sm text-label-sm mb-md md:mb-0">
<Link className="text-on-surface dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/shopbrowsebooks">Terms of Service</Link>
<Link className="text-on-surface dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/shopbrowsebooks">Privacy Policy</Link>
<Link className="text-on-surface dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/shopbrowsebooks">Archival Guidelines</Link>
<Link className="text-on-surface dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/contactusbooknestsupport">Support</Link>
</nav>
<div className="text-on-surface dark:text-on-surface-variant font-label-sm text-label-sm">
            © 2024 BookNest Archive. All rights reserved.
        </div>
</footer>
    </>
  );
}
