import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './OrderTrackingBooknestPrivateLibrary.css';

export default function OrderTrackingBooknestPrivateLibrary() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<header className="w-full top-0 sticky bg-surface-bright shadow-sm z-50 transition-all duration-300">
<div className="max-w-container-max-width mx-auto flex justify-between items-center px-margin-desktop py-4">
<Link className="font-headline-lg text-headline-lg font-bold tracking-tight text-primary flex items-center gap-2" to="/">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>menu_book</span>
                BookNest
            </Link>
{/* Navigation Cluster (Hidden on mobile) */}
<nav className="hidden md:flex items-center gap-8">
<Link className="text-on-surface-variant transition-colors hover:text-secondary duration-400 font-label-md text-label-md" to="/catalogarchive">Catalog</Link>
<Link className="text-secondary border-b-2 border-secondary pb-1 font-label-md text-label-md opacity-80 scale-[0.99] transition-all" to="/shopbrowsebooks">Private Library</Link>
<Link className="text-on-surface-variant transition-colors hover:text-secondary duration-400 font-label-md text-label-md" to="/shopbrowsebooks">Journal</Link>
<Link className="text-on-surface-variant transition-colors hover:text-secondary duration-400 font-label-md text-label-md" to="/shopbrowsebooks">Curated</Link>
<Link className="text-on-surface-variant transition-colors hover:text-secondary duration-400 font-label-md text-label-md" to="/shopbrowsebooks">Archives</Link>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors duration-400" onClick={() => navigate('/searchresultsbooknest')}>
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary font-label-md text-label-md px-4 py-2 rounded-lg transition-all duration-400" onClick={() => navigate('/loginbooknestprivatelibrary')}>
                    Sign In
                </button>
<button className="md:hidden text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex flex-col items-center py-12 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto w-full gap-12">
{/* Tracking Search Section */}
<section className="w-full max-w-3xl flex flex-col items-center justify-center text-center gap-6">
<h1 className="font-display-lg text-display-lg text-primary-container">Track Your Volumes</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Enter your order details below to trace the journey of your selected literature from our private library to your reading nook.</p>
<div className="bg-surface-container-lowest rounded-xl shadow-ambient-low p-8 w-full border border-outline-variant/30 relative overflow-hidden mt-4">
{/* Subtle decorative background element */}
<div className="absolute -right-12 -top-12 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings: '\'FILL\' 1'}}>local_library</span>
</div>
<form className="flex flex-col md:flex-row gap-4 relative z-10 w-full">
<div className="flex-grow flex flex-col items-start gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="order-id">Order ID</label>
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">receipt_long</span>
</div>
<input className="w-full bg-surface-bright border border-outline-variant rounded-lg pl-10 pr-4 py-3 font-label-md text-label-md text-on-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all outline-none" id="order-id" placeholder="e.g. BN-1234-567" type="text" defaultValue="BN-7842-991" />
</div>
</div>
<div className="flex-grow flex flex-col items-start gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="email">Email or Phone</label>
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">mail</span>
</div>
<input className="w-full bg-surface-bright border border-outline-variant rounded-lg pl-10 pr-4 py-3 font-label-md text-label-md text-on-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all outline-none" id="email" placeholder="Contact info" type="text" defaultValue="scholar@example.com" />
</div>
</div>
<div className="flex flex-col justify-end">
<button className="golden-bookmark-btn h-[46px] px-8 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 whitespace-nowrap" type="button" onClick={() => navigate('/dashboard/ordertrackingbooknestprivatelibrary')}>
<span className="material-symbols-outlined text-sm">explore</span>
                            Track Order
                        </button>
</div>
</form>
</div>
</section>
{/* Dynamic Tracking Dashboard (Visible after search) */}
<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Left Column: Delivery Timeline & Shipping Details */}
<div className="lg:col-span-2 flex flex-col gap-8">
{/* Delivery Timeline */}
<section className="bg-surface-container-lowest rounded-xl shadow-ambient-low p-8 border border-outline-variant/30 flex flex-col gap-8">
<div className="flex justify-between items-center border-b border-surface-container pb-4">
<h2 className="font-headline-md text-headline-md text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-on-tertiary-container">timeline</span>
                            Journey Progress
                        </h2>
<span className="bg-secondary/10 text-secondary font-label-sm text-label-sm px-3 py-1 rounded-full">In Transit</span>
</div>
{/* Reading Progress Timeline */}
<div className="w-full py-4 overflow-x-auto">
<div className="flex items-center min-w-[600px] w-full px-4">
{/* Stage 1 */}
<div className="flex flex-col items-center gap-3 relative z-10 w-24">
<div className="w-10 h-10 rounded-full bg-on-tertiary-container text-surface-container-lowest flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
</div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-on-surface">Placed</div>
<div className="text-[10px] text-on-surface-variant font-body-sm mt-1">Oct 12</div>
</div>
</div>
<div className="progress-line active"></div>
{/* Stage 2 */}
<div className="flex flex-col items-center gap-3 relative z-10 w-24">
<div className="w-10 h-10 rounded-full bg-on-tertiary-container text-surface-container-lowest flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-on-surface">Confirmed</div>
<div className="text-[10px] text-on-surface-variant font-body-sm mt-1">Oct 12</div>
</div>
</div>
<div className="progress-line active"></div>
{/* Stage 3 */}
<div className="flex flex-col items-center gap-3 relative z-10 w-24">
<div className="w-10 h-10 rounded-full bg-on-tertiary-container text-surface-container-lowest flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">inventory_2</span>
</div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-on-surface">Processed</div>
<div className="text-[10px] text-on-surface-variant font-body-sm mt-1">Oct 13</div>
</div>
</div>
<div className="progress-line active"></div>
{/* Stage 4 (Current) */}
<div className="flex flex-col items-center gap-3 relative z-10 w-24">
<div className="w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-on-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-ambient-high ring-4 ring-on-tertiary-container/10">
<span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: '\'FILL\' 1'}}>local_shipping</span>
</div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-on-tertiary-container font-bold">Shipped</div>
<div className="text-[10px] text-on-surface-variant font-body-sm mt-1">Oct 14</div>
</div>
</div>
<div className="progress-line"></div>
{/* Stage 5 */}
<div className="flex flex-col items-center gap-3 relative z-10 w-24">
<div className="w-10 h-10 rounded-full bg-surface-bright border border-outline-variant text-outline flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">home</span>
</div>
<div className="text-center opacity-50">
<div className="font-label-sm text-label-sm text-on-surface">Delivered</div>
<div className="text-[10px] text-on-surface-variant font-body-sm mt-1">Est. Oct 16</div>
</div>
</div>
</div>
</div>
<div className="bg-surface-muted rounded-lg p-4 border border-outline-variant/20 flex items-start gap-4">
<span className="material-symbols-outlined text-info-sky mt-0.5">info</span>
<div>
<p className="font-label-sm text-label-sm text-on-surface mb-1">Latest Update: Departed Sort Facility</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Your volumes have left the regional sorting facility and are en route to your local distribution center.</p>
</div>
</div>
</section>
{/* Shipping Details */}
<section className="bg-surface-container-lowest rounded-xl shadow-ambient-low p-8 border border-outline-variant/30">
<h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">location_on</span>
                        Dispatch Information
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Destination</span>
<div className="bg-surface-bright p-4 rounded-lg border border-surface-container h-full">
<p className="font-body-md text-body-md text-on-surface font-medium">Eleanor Vance</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                                    1959 Hill House Lane<br />
                                    Apt 4B<br />
                                    Arkham, MA 01970
                                </p>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Method</span>
<div className="bg-surface-bright p-4 rounded-lg border border-surface-container flex items-center gap-3">
<span className="material-symbols-outlined text-on-tertiary-container">verified</span>
<div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Priority Archive Courier</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Signature Required</p>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Courier Tracking</span>
<div className="bg-surface-bright p-4 rounded-lg border border-surface-container flex items-center justify-between">
<p className="font-label-md text-label-md text-on-surface">FEDX-993821004</p>
<button className="text-secondary hover:text-secondary-container transition-colors">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
</div>
</div>
</div>
</section>
</div>
{/* Right Column: Order Summary (Floating Bookshelf) */}
<div className="lg:col-span-1">
<section className="bg-surface-container-lowest rounded-xl shadow-ambient-low p-6 border border-outline-variant/30 h-full flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">receipt</span>
                        Manifest
                    </h3>
{/* Floating Book Shelf System */}
<div className="flex-grow flex flex-col gap-6 mb-6">
{/* Book Item 1 */}
<div className="flex gap-4 items-center group relative">
{/* Mini Digital Shelf base (Visual only) */}
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container-highest rounded-full shelf-shadow opacity-50"></div>
<div className="w-16 h-24 rounded flex-shrink-0 overflow-hidden shadow-sm floating-book relative bg-surface-variant border border-outline-variant/20 z-10">
<img className="w-full h-full object-cover" data-alt="A vintage leather-bound book cover featuring gold foil geometric patterns on a deep crimson background. Professional studio lighting highlighting the texture of the aged leather. Modern corporate design aesthetic, clean composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxNsa_KsyqI9LLkBR9CNcZYypZFqxqb_NMgufmDCaSPaGCscsXwErCkwHSuNlCJ6tBkP2qW4nyhabQkpSYNNPQXvR0F_UXaAn4-I1YbpO1FLy1630C0XqUiHNrlW9lcHbyUFGK0M5YLO2llvjVZ2CdfsrYY-e6br1K7ADWst3j882YFMAGdCn6SWc9IGC3EA5q9ap61jhgWFy7N3iSxtkjgeZi6SMwmC6xY4V7WMPVS7r_gCNbALQX" />
</div>
<div className="flex flex-col gap-1 z-10 pb-2">
<h4 className="font-body-sm text-body-sm font-medium text-on-surface line-clamp-2">The Architecture of Reality</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">J. Borges</p>
<p className="font-label-sm text-label-sm text-on-surface mt-1">Qty: 1</p>
</div>
</div>
{/* Book Item 2 */}
<div className="flex gap-4 items-center group relative">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container-highest rounded-full shelf-shadow opacity-50"></div>
<div className="w-16 h-24 rounded flex-shrink-0 overflow-hidden shadow-sm floating-book relative bg-surface-variant border border-outline-variant/20 z-10">
<img className="w-full h-full object-cover" data-alt="A minimalist book cover design in deep navy blue with stark white, elegant typography. Clean lines, ample whitespace, evoking a professional, sophisticated financial technology aesthetic. High resolution, perfectly lit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMLCajOYRdw9lGKguiKyyV0W-ZE5uMhtvDUikJKkgAXHx2KWCnNcOgQ2cs8i0iD2qLVyjpTlbd3Y62g4QJ28d1yi5tNu4vv3dpv5brdiArjRJGihy-8V806Nk9gFeBcSqe88xGcpyHKbA8MoMcBhpzkxD9PVYioGCudHeM3wrrwl5UNJyDHQuZe_G_w5nADg36exiIAvT9dZMlEkxXupx7JLdTp51J-GA8vDPqKDM3C-URLxFjhXY3" />
</div>
<div className="flex flex-col gap-1 z-10 pb-2">
<h4 className="font-body-sm text-body-sm font-medium text-on-surface line-clamp-2">Systems of Control (First Ed)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">M. Foucault</p>
<p className="font-label-sm text-label-sm text-on-surface mt-1">Qty: 1</p>
</div>
</div>
</div>
{/* Metadata */}
<div className="mt-auto pt-6 border-t border-surface-container">
<div className="flex justify-between items-center mb-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Subtotal</span>
<span className="font-label-md text-label-md text-on-surface">$142.00</span>
</div>
<div className="flex justify-between items-center mb-4">
<span className="font-body-sm text-body-sm text-on-surface-variant">Archive Shipping</span>
<span className="font-label-md text-label-md text-on-surface">$15.00</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-surface-container border-dashed">
<span className="font-body-md text-body-md font-medium text-on-surface">Total</span>
<span className="font-label-md text-label-md text-primary-container font-bold text-lg">$157.00</span>
</div>
</div>
</section>
</div>
</div>
</main>
{/* Footer */}
<footer className="w-full bottom-0 bg-surface-container-low border-t border-outline-variant mt-12">
<div className="max-w-container-max-width mx-auto px-margin-desktop py-gutter flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-headline-md text-headline-md font-semibold text-primary">
                BookNest
            </div>
<div className="text-on-surface font-body-sm text-body-sm text-center md:text-left">
                © 2024 BookNest Private Library. All rights reserved. Registered Academic Partner.
            </div>
<nav className="flex flex-wrap justify-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
<Link className="hover:text-secondary underline transition-all duration-400" to="/shopbrowsebooks">Provenance</Link>
<Link className="hover:text-secondary underline transition-all duration-400" to="/shopbrowsebooks">Terms of Service</Link>
<Link className="hover:text-secondary underline transition-all duration-400" to="/shopbrowsebooks">Privacy Policy</Link>
<Link className="hover:text-secondary underline transition-all duration-400" to="/shopbrowsebooks">Institutional Access</Link>
<Link className="hover:text-secondary underline transition-all duration-400" to="/contactusbooknestsupport">Contact Librarian</Link>
</nav>
</div>
</footer>
    </>
  );
}
