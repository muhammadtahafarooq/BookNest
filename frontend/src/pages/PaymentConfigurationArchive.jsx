import React from 'react';

import { Link } from 'react-router-dom';
import './PaymentConfigurationArchive.css';

export default function PaymentConfigurationArchive() {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile, Visible on md+) */}
<nav className="hidden md:flex bg-primary-container dark:bg-surface-container-highest text-on-primary-fixed dark:text-on-surface font-label-md text-label-md fixed left-0 top-0 h-full w-64 border-r border-outline-variant shadow-sm flex-col py-lg px-md z-50">
<div className="mb-xl flex items-center gap-sm px-sm">
<span className="material-symbols-outlined text-[32px] text-on-primary dark:text-on-surface">book</span>
<div>
<h1 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-surface tracking-tight">BookNest Admin</h1>
<p className="font-label-sm text-label-sm text-on-primary-container mt-xs">Archival Management</p>
</div>
</div>
<ul className="flex flex-col gap-sm flex-1">
<li><Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200 scale-98 active:scale-95" to="/catalogarchive"><span className="material-symbols-outlined">menu_book</span> Books</Link></li>
<li><Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200 scale-98 active:scale-95" to="/shopbrowsebooks"><span className="material-symbols-outlined">category</span> Categories</Link></li>
<li><Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200 scale-98 active:scale-95" to="/shopbrowsebooks"><span className="material-symbols-outlined">shopping_bag</span> Orders</Link></li>
<li><Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200 scale-98 active:scale-95" to="/shopbrowsebooks"><span className="material-symbols-outlined">group</span> Customers</Link></li>
<li><Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200 scale-98 active:scale-95" to="/shopbrowsebooks"><span className="material-symbols-outlined">badge</span> Staff</Link></li>
<li><Link className="flex items-center gap-md px-md py-sm rounded-lg bg-secondary-container text-on-secondary-container font-semibold scale-98 active:scale-95 transition-transform" to="/shopbrowsebooks"><span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>settings</span> Settings</Link></li>
</ul>
<div className="mt-auto flex flex-col gap-sm border-t border-outline-variant pt-lg">
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200" to="/contactusbooknestsupport"><span className="material-symbols-outlined">help</span> Support</Link>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-200" to="/shopbrowsebooks"><span className="material-symbols-outlined">logout</span> Sign Out</Link>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-64 w-full flex flex-col min-h-screen">
{/* TopNavBar (Visible on Mobile, Hidden on md+) */}
<header className="md:hidden bg-surface dark:bg-surface-container-low w-full h-16 border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-mobile z-40 sticky top-0">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[24px] text-primary dark:text-on-surface">menu</span>
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-on-surface tracking-tight">BookNest</span>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">search</span>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A macro shot of luxurious ivory textured paper, lit softly to emphasize the grain, evoking a sense of refined age and archival quality. The paper serves as a backdrop, exuding a serene, premium aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2iz9D87S9R5s-5qTJ9nHzS2a70VKuRRqoKCRl6iJOhsSvg6JhpgRy4EKe8j9Tu3FtjDGqOcnk_gzKHLpqtWeab_xpbP-EWTrUNQjet3D9Zx8iiIjDVBdWW0Wr3lM5RdTxai-dHr3wTa4H0KQIApGDHxV6uyxs-SMoBY5Fkb4dBoBsWn6PgtR9IDYt24W51OlIvbibyqu9QUVaeGVMDy7XGrKxoe4Z8abP0U4p-MVqg-vCYiyVNYeWRg" />
</div>
</header>
{/* Page Content Canvas */}
<div className="flex-1 px-margin-mobile md:px-margin-desktop py-xl md:py-xxl max-w-[1280px] mx-auto w-full">
{/* Header Section */}
<div className="mb-xl md:mb-xxl max-w-3xl">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md tracking-tight">Payment Settings</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Configure secure payment gateways and customer transaction methods. Manage API keys and delivery constraints meticulously to ensure seamless archival acquisitions.</p>
</div>
{/* Complex Layout Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
{/* Left Column: Payment Methods Toggles (Bento-style grid) */}
<div className="md:col-span-4 flex flex-col gap-lg">
<h2 className="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-sm mb-sm">Active Methods</h2>
<div className="grid grid-cols-1 gap-md">
{/* Method Card: COD */}
<div className="bg-surface-container-lowest p-md rounded-lg lux-shadow lux-border flex items-center justify-between group lux-shadow-hover transition-all">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Cash On Delivery</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Standard manual collection</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox" value={true} />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Method Card: Cards */}
<div className="bg-surface-container-lowest p-md rounded-lg lux-shadow lux-border flex items-center justify-between group lux-shadow-hover transition-all">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined">credit_card</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Debit/Credit Cards</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Stripe Gateway</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox" value={true} />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Method Card: JazzCash */}
<div className="bg-surface-container-lowest p-md rounded-lg lux-shadow lux-border flex items-center justify-between group lux-shadow-hover transition-all opacity-70">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">account_balance_wallet</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">JazzCash</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Mobile Wallet (Inactive)</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value={true} />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Method Card: Easypaisa */}
<div className="bg-surface-container-lowest p-md rounded-lg lux-shadow lux-border flex items-center justify-between group lux-shadow-hover transition-all opacity-70">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Easypaisa</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Mobile Wallet (Inactive)</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value={true} />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
{/* Vertical Divider (Desktop Only) */}
<div className="hidden md:block col-span-1 flex justify-center">
<div className="divider-faded"></div>
</div>
{/* Right Column: Detailed Configuration Forms */}
<div className="md:col-span-7 flex flex-col gap-xl">
{/* COD Settings Form */}
<section className="bg-surface-container-lowest rounded-xl p-lg md:p-xl lux-shadow lux-border">
<div className="flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Cash On Delivery Configuration</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="flex flex-col gap-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="cod-min">Minimum Order Amount</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md">$</span>
<input className="w-full bg-surface font-label-md text-primary border-outline-variant rounded-md pl-8 py-2 focus:ring-0" id="cod-min" placeholder="0.00" type="number" defaultValue="10.00" />
</div>
</div>
<div className="flex flex-col gap-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="cod-max">Maximum Order Amount</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md">$</span>
<input className="w-full bg-surface font-label-md text-primary border-outline-variant rounded-md pl-8 py-2 focus:ring-0" id="cod-max" placeholder="0.00" type="number" defaultValue="500.00" />
</div>
</div>
<div className="col-span-1 md:col-span-2 flex flex-col gap-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="cod-instructions">Delivery Instructions</label>
<textarea className="w-full bg-surface font-label-md text-primary border-outline-variant rounded-md p-3 focus:ring-0 resize-none" id="cod-instructions" rows="3">Please have exact change ready. Couriers do not carry change exceeding $20.</textarea>
</div>
</div>
</section>
{/* Card Settings Form */}
<section className="bg-surface-container-lowest rounded-xl p-lg md:p-xl lux-shadow lux-border relative overflow-hidden">
{/* Decorative element mimicking a secure document stamp */}
<div className="absolute top-0 right-0 p-lg opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[120px]">verified_user</span>
</div>
<div className="flex items-center gap-sm mb-lg relative z-10">
<span className="material-symbols-outlined text-primary text-[28px]">credit_card</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Stripe API Configuration</h2>
</div>
<div className="flex flex-col gap-lg relative z-10">
<div className="flex flex-col gap-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="stripe-pub">Publishable Key</label>
<input className="w-full bg-surface font-mono text-sm text-primary border-outline-variant rounded-md p-3 focus:ring-0" id="stripe-pub" placeholder="pk_test_..." type="text" defaultValue="pk_test_51Nx...Archive" />
</div>
<div className="flex flex-col gap-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="stripe-sec">Secret Key</label>
<div className="relative">
<input className="w-full bg-surface font-mono text-sm text-primary border-outline-variant rounded-md p-3 pr-10 focus:ring-0" id="stripe-sec" type="password" defaultValue="sk_test_51Nx...Secure" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" title="Toggle visibility" type="button">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>
<div className="flex flex-col gap-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="stripe-web">Webhook Endpoint URL</label>
<div className="flex items-center gap-sm">
<input className="flex-1 bg-surface font-label-md text-primary border-outline-variant rounded-md p-3 focus:ring-0 bg-surface-container-high text-on-surface-variant cursor-not-allowed" id="stripe-web" readOnly={true} type="url" defaultValue="https://api.booknest.com/webhooks/stripe" />
<button className="p-3 border border-outline-variant rounded-md hover:bg-surface-container-high transition-colors text-primary" title="Copy to clipboard" type="button">
<span className="material-symbols-outlined text-[20px]">content_copy</span>
</button>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Generated securely. Cannot be modified here.</p>
</div>
</div>
</section>
{/* Action Buttons */}
<div className="flex justify-end gap-md mt-lg pt-lg border-t border-outline-variant">
<button className="px-lg py-3 rounded-md border border-outline text-primary font-label-md hover:bg-surface-container-high transition-colors" type="button">Discard Changes</button>
<button className="px-lg py-3 rounded-md bg-[#b89569] hover:bg-[#a68256] text-[#0b1f15] font-label-md font-bold transition-colors shadow-sm flex items-center gap-sm" type="button">
<span className="material-symbols-outlined text-[20px]">save</span>
                            Commit Settings
                        </button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
