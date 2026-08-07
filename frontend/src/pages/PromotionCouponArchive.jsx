import React from 'react';
import './PromotionCouponArchive.css';

export default function PromotionCouponArchive() {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
<nav className="bg-surface dark:bg-surface-container-low h-screen w-64 fixed left-0 top-0 border-r border-outline-variant dark:border-outline shadow-sm dark:shadow-none flex flex-col py-xl px-md z-50">
<div className="mb-xl px-md">
<h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim tracking-tight">BookNest Admin</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-sm">Private Collector's Edition</p>
</div>
<div className="flex-1 overflow-y-auto">
<ul className="space-y-sm">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant opacity-70 hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 scale-95 active:opacity-80 transition-all font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
                        Catalog
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary dark:text-primary-fixed font-bold border-r-4 border-primary dark:border-primary-fixed bg-surface-container-high dark:bg-surface-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 scale-95 active:opacity-80 transition-all font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                        Acquisitions
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant opacity-70 hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 scale-95 active:opacity-80 transition-all font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="swap_horiz">swap_horiz</span>
                        Circulation
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant opacity-70 hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 scale-95 active:opacity-80 transition-all font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                        Analytics
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant opacity-70 hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 scale-95 active:opacity-80 transition-all font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Settings
                    </a>
</li>
</ul>
</div>
<div className="mt-auto pt-xl">
<button className="w-full bg-[#B8977E] text-tertiary font-label-md text-label-md py-md px-lg rounded-full mb-lg hover:bg-opacity-90 transition-opacity">
                Create Campaign
            </button>
<ul className="space-y-sm">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant opacity-70 hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                        Support
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant opacity-70 hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                        Sign Out
                    </a>
</li>
</ul>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 ml-64 flex flex-col min-h-screen">
{/* TopAppBar (Shared Component) */}
<header className="bg-surface dark:bg-surface-dim top-0 sticky z-40 border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-xl py-md">
<div className="flex items-center gap-xl">
<span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">BookNest Control</span>
<nav className="hidden md:flex gap-lg">
<a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity cursor-pointer active:opacity-70 font-label-sm text-label-sm" href="#">Dashboard</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 font-label-sm text-label-sm" href="#">Promotions</a>
<a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity cursor-pointer active:opacity-70 font-label-sm text-label-sm" href="#">Archives</a>
</nav>
</div>
<div className="flex items-center gap-lg">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-xl pr-md py-sm rounded-full bg-surface-container-highest border-none text-body-md focus:ring-1 focus:ring-primary w-64 text-on-surface placeholder:text-on-surface-variant" placeholder="Search archive..." type="text" />
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
<img alt="Manager Avatar" className="w-10 h-10 rounded-full border border-outline-variant object-cover" data-alt="A small circular avatar image showing a professional, elegantly dressed library manager in a softly lit, wood-paneled room. The lighting is warm and the style is sophisticated and editorial." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtBi0EZXvh8U5pkSfP1vJ8C505UWoZ8JlwdRzjT5TBvKuJT5Oob081CAW6du2DelJnGNt4XXzvd50F40gAB5PXc5Yin6749F1wKFrZYyOJGQNVyGNlOYl6iDZYrApbiULQ6VC52bJ_mVqm4m_scv9WJGCbdQNtcnW7O_5T4XAjK3hkFdUntNrPUL0R1A4ywQSMdy6poaDrKD12ifYSJilyPDKDD3acb3ktDxaeh25IKV6cfkoFiYeg6w" />
</div>
</header>
{/* Page Content Grid */}
<div className="flex-1 p-xl grid grid-cols-1 lg:grid-cols-12 gap-xl max-w-[1440px] mx-auto w-full">
{/* Left Column: Coupons List */}
<div className="lg:col-span-8 flex flex-col gap-lg">
<header className="mb-lg">
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Promotion Archive &amp; Coupons</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Manage active campaigns and review historical discount performance.</p>
</header>
{/* Filter Tabs */}
<div className="flex gap-md border-b border-outline-variant pb-xs mb-md">
<button className="px-md py-sm font-label-md text-label-md text-primary border-b-2 border-primary">Active (12)</button>
<button className="px-md py-sm font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Scheduled (4)</button>
<button className="px-md py-sm font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Expired (89)</button>
</div>
{/* Bento Card: Coupons Table */}
<div className="bg-surface-container-lowest rounded-xl luxury-shadow border border-outline-variant overflow-hidden p-lg">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant">
<th className="py-md px-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Code</th>
<th className="py-md px-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Discount</th>
<th className="py-md px-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Expiry</th>
<th className="py-md px-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-right">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-md px-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">sell</span>
<span className="font-label-md text-label-md text-primary">ARCHIVE20</span>
</div>
</td>
<td className="py-md px-sm text-on-surface-variant">20% Off Complete Collections</td>
<td className="py-md px-sm text-on-surface-variant">Dec 31, 2024</td>
<td className="py-md px-sm text-right">
<span className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">Active</span>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-md px-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">sell</span>
<span className="font-label-md text-label-md text-primary">RAREBOOK</span>
</div>
</td>
<td className="py-md px-sm text-on-surface-variant">$50 Fixed Discount</td>
<td className="py-md px-sm text-on-surface-variant">Nov 15, 2024</td>
<td className="py-md px-sm text-right">
<span className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">Active</span>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-md px-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">schedule</span>
<span className="font-label-md text-label-md text-primary">LITERALY</span>
</div>
</td>
<td className="py-md px-sm text-on-surface-variant">10% Off First Editions</td>
<td className="py-md px-sm text-on-surface-variant">Starts Jan 1, 2025</td>
<td className="py-md px-sm text-right">
<span className="inline-block px-sm py-xs bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">Scheduled</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer opacity-60">
<td className="py-md px-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">block</span>
<span className="font-label-md text-label-md text-on-surface-variant line-through">SUMMERREAD</span>
</div>
</td>
<td className="py-md px-sm text-on-surface-variant">15% Off All Stock</td>
<td className="py-md px-sm text-on-surface-variant">Aug 31, 2023</td>
<td className="py-md px-sm text-right">
<span className="inline-block px-sm py-xs bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">Expired</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Right Column: Draft New Promotion */}
<div className="lg:col-span-4">
<div className="bg-surface-container-lowest rounded-xl luxury-shadow border border-outline-variant p-lg sticky top-32">
<h3 className="font-headline-sm text-headline-sm text-primary mb-md border-b border-outline-variant pb-sm">Draft New Promotion</h3>
<form className="space-y-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Promotion Code</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-md py-sm font-label-md text-label-md text-primary uppercase focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. WINTERTALE" type="text" />
</div>
<div className="grid grid-cols-2 gap-sm">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Discount Type</label>
<select className="w-full bg-surface border border-outline-variant rounded-md px-md py-sm font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors">
<option>Percentage (%)</option>
<option>Fixed Amount ($)</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Value</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-md py-sm font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors text-right" placeholder="0.00" type="number" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Expiry Date</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-md py-sm font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors" type="date" />
</div>
<div className="pt-sm border-t border-outline-variant">
<h4 className="font-label-md text-label-md text-primary mb-sm">Discount Rules</h4>
<div className="space-y-sm">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Minimum Order Value ($)</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-md py-sm font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors" placeholder="Optional" type="number" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Category Exclusions</label>
<select className="w-full bg-surface border border-outline-variant rounded-md px-md py-sm font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors h-24" multiple={true}>
<option>Antiquarian</option>
<option>First Editions</option>
<option>Manuscripts</option>
<option>Modern Classics</option>
</select>
<p className="font-label-sm text-label-sm text-outline mt-xs text-xs">Hold Cmd/Ctrl to select multiple.</p>
</div>
</div>
</div>
<div className="pt-md mt-lg flex gap-md">
<button className="flex-1 py-sm px-md border border-outline-variant text-primary font-label-md text-label-md rounded-md hover:bg-surface-container-low transition-colors" type="button">
                                Save Draft
                            </button>
<button className="flex-1 py-sm px-md bg-[#B8977E] text-tertiary font-label-md text-label-md rounded-md hover:bg-opacity-90 transition-opacity" type="button">
                                Publish Code
                            </button>
</div>
</form>
</div>
</div>
</div>
</main>
    </>
  );
}
