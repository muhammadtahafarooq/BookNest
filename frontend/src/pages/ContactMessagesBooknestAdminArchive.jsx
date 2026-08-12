import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './ContactMessagesBooknestAdminArchive.css';

export default function ContactMessagesBooknestAdminArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar */}
<nav className="hidden md:flex bg-primary-container dark:bg-primary-container docked h-full w-64 left-0 top-0 shadow-md fixed flex-col py-margin-desktop z-50">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary-container">auto_stories</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg font-bold text-surface-bright">BookNest</h1>
<p className="font-body-sm text-body-sm text-primary-fixed-dim opacity-80">Admin Console</p>
</div>
</div>
<div className="px-4 mb-6">
<button className="w-full flex items-center justify-center gap-2 bg-secondary text-on-secondary rounded-lg py-3 px-4 font-label-md text-label-md hover:bg-secondary-container transition-colors duration-400">
<span className="material-symbols-outlined text-sm">add</span>
                Add New Title
            </button>
</div>
<div className="flex-1 overflow-y-auto w-full">
<ul className="space-y-1 w-full">
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
</li>
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
</li>
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</Link>
</li>
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</Link>
</li>
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/shopbrowsebooks">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
</li>
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/shopbrowsebooks">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</li>
</ul>
</div>
<div className="mt-auto w-full pt-4 border-t border-on-primary-fixed-variant/30">
<ul className="space-y-1 w-full">
<li className="w-full">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 w-full group" to="/shopbrowsebooks">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
</li>
<li className="w-full">
{/* Active State Applied Here to Support (closest match to Customer Messages) */}
            <Link className="flex items-center gap-3 text-secondary-fixed-dim font-bold border-l-4 border-secondary-fixed-dim pl-4 py-3 opacity-90 transition-all duration-200 w-full bg-on-primary-fixed-variant/20" to="/contact">
<span className="material-symbols-outlined icon-fill">help_outline</span>
<span className="font-label-md text-label-md">Support</span>
</Link>
</li>
</ul>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-64 flex flex-col h-full bg-background relative overflow-hidden">
{/* TopAppBar */}
{/* <Navbar /> */}
<Navbar />
{/* Page Content */}
<div className="flex-1 overflow-hidden flex flex-col p-margin-desktop">
{/* Page Header & Filters */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
<div>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-1">Customer Messages</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Manage and resolve inquiries from your readers.</p>
</div>
<div className="flex items-center gap-3 bg-surface rounded-lg p-1 border border-outline-variant shadow-sm shrink-0 overflow-x-auto">
<button className="px-4 py-1.5 rounded-md bg-secondary text-on-secondary font-label-sm text-label-sm whitespace-nowrap shadow-sm transition-all">All</button>
<button className="px-4 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm whitespace-nowrap transition-all">Pending</button>
<button className="px-4 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm whitespace-nowrap transition-all">Resolved</button>
</div>
</div>
{/* Content Split Layout */}
<div className="flex-1 flex gap-6 overflow-hidden min-h-0">
{/* Inbox List (Left Side) */}
<div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden flex-shrink-0">
<div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center shrink-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">Inbox (42)</span>
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">filter_list</span></button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-2">
{/* Message Item 1 (Selected) */}
<div className="p-4 rounded-lg bg-secondary-fixed border border-secondary-fixed-dim cursor-pointer relative overflow-hidden transition-all group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary text-xs font-bold flex items-center justify-center shrink-0">EW</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate pr-2">Eleanor Vance</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap text-xs">10:42 AM</span>
</div>
<h4 className="font-body-md text-body-md font-semibold text-on-surface mb-1 truncate pr-8">Inquiry regarding limited edition pressing</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">I received my copy of the special edition yesterday, but it seems to be missing the signed bookplate that was promised during the pre-order phase...</p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-warning-amber/10 text-warning-amber font-label-sm text-label-sm text-[10px]">Pending</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm text-[10px]">Order #8921</span>
</div>
</div>
{/* Message Item 2 */}
<div className="p-4 rounded-lg bg-surface hover:bg-surface-container-low border border-transparent hover:border-outline-variant cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="A small circular avatar portrait of an older gentleman with glasses, looking thoughtful. Studio lighting, light neutral background, suitable for a professional profile picture in a light-mode UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUz9E1SJq_GmoAvLTVby7DmG-dlbtd8_oV3Ye5nXh_7B3u6h0CPHoxSIge-4lzX4MA7fN64bEnMoAU73haegXQQK_NX67sN4PHVImzfjHCX1wZIL9kXkd42xO__ElpA7rjZ2GNpcSddd6jL08ukelnVccrOeDvRUWhblE5l_jl56gILwpYU7wapUoporvxKZK3iYDD-igJjxqBBvVli-H3uhADd95c9vQGikCfmq0aEjrc3iU2L-P-" />
<div className="font-label-md text-label-md font-medium text-on-surface truncate pr-2">Arthur Pendelton</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap text-xs">Yesterday</span>
</div>
<h4 className="font-body-md text-body-md font-medium text-on-surface mb-1 truncate pr-8">Shipping address update</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">Hello, I recently moved and need to update the shipping address for my upcoming subscription box before it ships out next week.</p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-warning-amber/10 text-warning-amber font-label-sm text-label-sm text-[10px]">Pending</span>
</div>
</div>
{/* Message Item 3 */}
<div className="p-4 rounded-lg bg-surface hover:bg-surface-container-low border border-transparent hover:border-outline-variant cursor-pointer transition-all group opacity-70">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-bold flex items-center justify-center shrink-0">MS</div>
<div className="font-label-md text-label-md font-medium text-on-surface truncate pr-2">Margaret Sterling</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap text-xs">Oct 24</span>
</div>
<h4 className="font-body-md text-body-md font-medium text-on-surface mb-1 truncate pr-8">Thank you for the prompt replacement</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">I just wanted to drop a quick note to say thank you for sending a replacement copy so quickly. The new one arrived in perfect condition.</p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm text-[10px]">Resolved</span>
</div>
</div>
</div>
</div>
{/* Message Detail (Right Side) */}
<div className="hidden lg:flex flex-1 bg-surface rounded-xl border border-outline-variant shadow-sm flex-col overflow-hidden relative">
{/* Glassmorphism accent layer */}
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
{/* Detail Header */}
<div className="p-8 border-b border-outline-variant/50 shrink-0 z-10">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container text-on-primary text-lg font-bold flex items-center justify-center shadow-sm">EW</div>
<div>
<h3 className="font-headline-md text-headline-md font-bold text-on-surface">Eleanor Vance</h3>
<div className="flex items-center gap-2 text-on-surface-variant mt-1">
<span className="font-label-sm text-label-sm">eleanor.vance@example.com</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm">+1 (555) 019-8273</span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed rounded-lg transition-colors" title="Reply">
<span className="material-symbols-outlined">reply</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-danger-rose hover:bg-error-container rounded-lg transition-colors" title="Archive">
<span className="material-symbols-outlined">archive</span>
</button>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/30 flex justify-between items-center">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Related Order</span>
<Link className="font-label-md text-label-md font-semibold text-secondary hover:underline" to="/shopbrowsebooks">#8921 - The Shadow of the Wind (Limited Edition)</Link>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Placed On</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Oct 12, 2023</span>
</div>
</div>
</div>
{/* Message Body */}
<div className="p-8 flex-1 overflow-y-auto z-10">
<div className="flex justify-between items-end mb-6">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">Inquiry regarding limited edition pressing</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">Today, 10:42 AM</span>
</div>
<div className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant leading-loose space-y-6">
<p>Dear BookNest Support Team,</p>
<p>I hope this email finds you well.</p>
<p>I received my copy of the special edition of "The Shadow of the Wind" yesterday (Order #8921), and while the book itself is absolutely stunning and arrived in perfect condition, it seems to be missing the signed bookplate that was promised during the pre-order phase.</p>
<p>I have checked all the packaging thoroughly just in case it slipped out, but it doesn't appear to be there. As an avid collector, the signed plate was one of the main reasons I opted for this particular edition.</p>
<p>Could you please look into this and let me know if it's possible to have the bookplate sent separately?</p>
<p>Thank you for your time and assistance.</p>
<p>Warm regards,<br />Eleanor Vance</p>
</div>
</div>
{/* Detail Footer Actions */}
<div className="p-6 border-t border-outline-variant/50 bg-surface-container-lowest shrink-0 flex justify-between items-center z-10">
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Current Status:</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning-amber/10 text-warning-amber font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-warning-amber"></span>
                                Pending Review
                            </span>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-lg border border-outline text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium transition-colors shadow-sm">
                                Write Reply
                            </button>
<button className="px-6 py-2.5 rounded-lg bg-on-tertiary-container text-on-tertiary font-label-md text-label-md font-medium shadow-md hover:opacity-90 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Mark as Resolved
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
