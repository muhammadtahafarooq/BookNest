import React, { useEffect } from 'react';
import './ReaderCommandCenter.css';

export default function ReaderCommandCenter() {
  
  useEffect(() => {
    // Simple scroll reveal interaction
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
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
<nav className="bg-primary dark:bg-primary-container docked full-width top-0 border-b border-outline dark:border-outline-variant shadow-sm dark:shadow-none sticky z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
{/* Brand */}
<a className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-on-primary-container tracking-tight" href="#">BookNest</a>
{/* Navigation Links (Web) */}
<div className="hidden md:flex space-x-lg">
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Home</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Shop</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Categories</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">Blog</a>
<a className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed-variant hover:text-on-primary hover:opacity-80 transition-opacity duration-300" href="#">About</a>
{/* We consider Profile as active here logically, but it's not in the main links array. We highlight nothing in main nav for dashboard if not listed */}
</div>
{/* Actions & Search */}
<div className="flex items-center space-x-md text-on-primary dark:text-on-primary-container">
<button className="scale-95 duration-200 ease-in-out hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>shopping_bag</span>
</button>
<button className="scale-95 duration-200 ease-in-out hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>person</span>
</button>
</div>
</div>
</nav>
{/* Main Content Canvas */}
<main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
{/* Welcome Header */}
<header className="relative mb-xxl flex flex-col items-center text-center">
{/* Subtle floating bookmark SVG graphic */}
<div aria-hidden="true" className="absolute top-0 right-10 md:right-32 text-[#A67C42] animate-bookmark opacity-80">
<svg fill="currentColor" height="60" viewbox="0 0 40 60" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H40V60L20 45L0 60V0Z"></path>
</svg>
</div>
<h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-md mt-lg">Welcome Back, Reader</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Your private archive awaits. Continue your literary journey where you left off.</p>
<div className="w-24 h-[1px] bg-outline-variant mt-lg opacity-50"></div>
</header>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg md:gap-xl">
{/* Sidebar / Quick Actions (4 cols) */}
<aside className="md:col-span-4 flex flex-col gap-lg">
<div className="bg-surface-container-lowest rounded-lg p-lg book-shadow border border-outline-variant/30 flex flex-col gap-md">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Command Center</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Manage your literary acquisitions and archive settings.</p>
<button className="w-full text-left bg-surface-container-low hover:bg-surface-variant transition-colors rounded p-md flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">local_shipping</span>
<span className="font-label-md text-label-md">Track Active Orders</span>
</button>
<button className="w-full text-left bg-surface-container-low hover:bg-surface-variant transition-colors rounded p-md flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">favorite</span>
<span className="font-label-md text-label-md">View Wishlist Archive</span>
</button>
<button className="w-full text-left bg-surface-container-low hover:bg-surface-variant transition-colors rounded p-md flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">settings</span>
<span className="font-label-md text-label-md">Library Settings</span>
</button>
</div>
{/* Account Summary Cards */}
<div className="grid grid-cols-2 gap-md">
<div className="bg-ivory rounded-lg p-md book-shadow border border-outline-variant/30 text-center">
<span className="font-display-lg text-display-lg text-primary block mb-xs">42</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Total Volumes</span>
</div>
<div className="bg-ivory rounded-lg p-md book-shadow border border-outline-variant/30 text-center">
<span className="font-display-lg text-display-lg text-primary block mb-xs">18</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Wishlist</span>
</div>
</div>
</aside>
{/* Main Content Area (8 cols) */}
<div className="md:col-span-8 flex flex-col gap-xl">
{/* Recent Orders */}
<section>
<div className="flex justify-between items-end mb-md border-b border-outline-variant pb-xs">
<h2 className="font-headline-md text-headline-md text-primary">Recent Acquisitions</h2>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">View Complete Ledger</a>
</div>
<div className="flex flex-col gap-md">
{/* Order Card 1 */}
<div className="bg-surface-container-lowest rounded-lg p-md book-shadow-hover transition-shadow flex items-center gap-lg border border-outline-variant/30">
<div className="w-16 h-24 bg-surface-container flex-shrink-0 rounded shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vintage book cover design with gold foil stamping on dark green leather, subtle wear on the edges, illuminated by soft warm library light, conveying a sense of history and premium editorial luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAQUMRdv8LKq0OcFvCDy2DYPGu9-ECN7c-VF99KNatMlF4L9q1hYzojb_jMRZV0Kn5fRS2FbCaE8l8CKG6b2M38rKMBIj84ARTjf5LAooidWLe1u9OSh-8-bez1UPGLazFFnRxbq3SILaCuS4h2kj6M9xU8-pEZOadAN5typCUoqzudeGijM6VS8kS8-92MpFkr9AFAnp8skXWD4_-_RxgEYT_4CjuV93OQ12_fjoTZMlsMeamXeiquQ" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">The Architecture of Happiness</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Alain de Botton</p>
</div>
<span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed-variant px-sm py-xs rounded-full">In Transit</span>
</div>
<div className="mt-md flex justify-between items-end">
<span className="font-label-sm text-label-sm text-outline">Ordered: Oct 12, 2023</span>
<button className="font-label-sm text-label-sm text-primary underline decoration-outline-variant hover:decoration-primary transition-colors">Track Shipment</button>
</div>
</div>
</div>
{/* Order Card 2 */}
<div className="bg-surface-container-lowest rounded-lg p-md book-shadow-hover transition-shadow flex items-center gap-lg border border-outline-variant/30">
<div className="w-16 h-24 bg-surface-container flex-shrink-0 rounded shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A minimalist modern classic book cover in stark black and white typography, resting on a textured cream paper surface, soft directional lighting highlighting the embossed title." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCryGgjXCq7AeLv4zKKdsUVQsqvOqc0patIqVGMBe18JF_CeZZKxSs15pdhrlI55Y-IbzIuyheerO5ZCN-RcelPpK-Zdlv4GTbCGLH4XJXZttp-64npZQvmCDqbVehTgZ9GGj2HgEONG7Q4Y-aNgsKjAkI3c7cryVxOqFOpkpjoiXRAJVpNYh_eE5iCSJ5E0qDqQ0TXkiw6ZogQh7BneJw1CXo2N35ONV7Nz1ZMKzoWn2yYqNfL5sLSPg" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Design of Everyday Things</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Don Norman</p>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface px-sm py-xs rounded-full">Delivered</span>
</div>
<div className="mt-md flex justify-between items-end">
<span className="font-label-sm text-label-sm text-outline">Ordered: Sep 28, 2023</span>
<button className="font-label-sm text-label-sm text-primary underline decoration-outline-variant hover:decoration-primary transition-colors">Leave Review</button>
</div>
</div>
</div>
</div>
</section>
{/* Recommendations Shelf */}
<section className="reveal-on-scroll">
<div className="flex justify-between items-end mb-md border-b border-outline-variant pb-xs">
<h2 className="font-headline-md text-headline-md text-primary">Curated for Your Library</h2>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Browse Collections</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
{/* Book 1 */}
<div className="flex flex-col gap-sm group">
<div className="aspect-[2/3] rounded bg-surface-container overflow-hidden book-shadow-hover transition-all duration-300 group-hover:-translate-y-1 cursor-pointer relative">
<img className="w-full h-full object-cover" data-alt="An elegant hardcover book featuring abstract botanical illustrations in muted sage and ochre tones, sitting on a polished mahogany surface in a dimly lit, luxurious reading room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbd0KVLObqq3hkSDc7vB0RR4JvD9PUtsUG0sKipvxie66m7kW0Yi9lFi5ERN9o6zx6g8Kept-HwYdv-YGQGQSnv4ramEvIVhPLDxHtQ4eb6gNcvbEW2BxlrWl0Vt60IDUL2khwp8iNgxU85vdyiqRYHmBv1aXQoLgghL2onL4m3HdnMIL1C6MGR80S8nakfeMf66ptD4IMuDselOe0-70TdzOAdpTqdJTxCwVk8RGZhnoK1HrHto2qFw" />
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary line-clamp-1">The Poetics of Space</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Gaston Bachelard</p>
</div>
</div>
{/* Book 2 */}
<div className="flex flex-col gap-sm group">
<div className="aspect-[2/3] rounded bg-surface-container overflow-hidden book-shadow-hover transition-all duration-300 group-hover:-translate-y-1 cursor-pointer relative">
<img className="w-full h-full object-cover" data-alt="A vintage leather-bound edition of classic literature, deep burgundy cover with faded gold lettering, resting on a stark white pedestal, illuminated by a spotlight against a dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjnegC_XrMlQ2mAAY29yfP40tZIkaw1lPfuxAgPuhN584atlqqDOm-l_-Eg7s2nbUBaMwtHcATaxZ5yCdP7jcPjyxf_3-dQyX_uLTjXWFd3HggcW-6F4QYmM7LeX5oVK_zbkqEoqbl1hlvucMnyH_MfNGY11TpgiBpPy6boSthI-Z6Yaps-96sds3E3TnIlbCSIdHpraeI4coBxbV33-W5-cTnvwV4B1g_YXoAj-KXeXt1s74Kf3L-2Q" />
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary line-clamp-1">Ways of Seeing</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">John Berger</p>
</div>
</div>
{/* Book 3 */}
<div className="flex flex-col gap-sm group">
<div className="aspect-[2/3] rounded bg-surface-container overflow-hidden book-shadow-hover transition-all duration-300 group-hover:-translate-y-1 cursor-pointer relative">
<img className="w-full h-full object-cover" data-alt="A heavy, art-book style volume with a thick spine, featuring a monochrome photographic cover, resting horizontally on a stack of manuscript papers in a sophisticated editor's office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSyCPAXYeg7A7YJLmeYOiBOUceDKKvsJ60nu5-eXHGltN8S8NN5Qb7uljz0inoVMnvmgkBv1JBPc6HhLLEvs9ssOpVLEnpBpgT9qjEeU5IZqWH5HR8zzmJaZft5af_bb9Wmg0TrWn6Om2I_1aeKDALRHdclBUaptxV9oHVxmMJ9ZUzC9-QN3z2p6b90vuPOiQrsRPZAylierxHWTUSPG0yH_d-NlX6PBbS3Fnkb1LYOE3Pei2J6oeeuQ" />
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary line-clamp-1">Thinking, Fast and Slow</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Daniel Kahneman</p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container full-width bottom-0 border-t border-outline dark:border-outline-variant flat no shadows mt-xxl">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-xl max-w-[1280px] mx-auto gap-lg md:gap-0">
{/* Brand */}
<div className="font-headline-md text-headline-md text-on-primary">BookNest</div>
{/* Links */}
<div className="flex flex-wrap justify-center gap-md">
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Terms of Service</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Privacy Policy</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Archival Standards</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" href="#">Contact Us</a>
</div>
{/* Copyright */}
<div className="font-body-md text-body-md text-on-primary-fixed-variant text-center md:text-right text-sm">
                © 2024 BookNest. The Private Collector's Digital Archive.
            </div>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
