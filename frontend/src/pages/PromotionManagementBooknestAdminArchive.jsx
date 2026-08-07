import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './PromotionManagementBooknestAdminArchive.css';

export default function PromotionManagementBooknestAdminArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar */}
<aside className="hidden md:flex flex-col h-full w-64 bg-primary-container dark:bg-primary-container shadow-md fixed left-0 top-0 py-margin-desktop z-50">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-10 h-10 bg-tertiary-fixed rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined filled text-tertiary-container" data-icon="auto_stories">auto_stories</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg font-bold text-surface-bright">BookNest</h1>
<p className="font-body-sm text-body-sm text-on-primary-container">Admin Console</p>
</div>
</div>
<div className="px-6 mb-6">
<button className="w-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-colors duration-400 font-label-md text-label-md py-3 rounded-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="add">add</span>
                Add New Title
            </button>
</div>
<nav className="flex-1 overflow-y-auto px-4">
<ul className="space-y-1">
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" data-icon="person_edit">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-secondary-fixed-dim font-bold border-l-4 border-secondary-fixed-dim pl-4 py-3 bg-on-primary-fixed-variant text-surface-bright rounded-r-lg opacity-90 transition-all duration-200" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined filled" data-icon="receipt_long">receipt_long</span>
<span className="font-label-md text-label-md">Orders &amp; Promotions</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</li>
</ul>
</nav>
<div className="px-4 mt-auto pt-6 border-t border-on-primary-fixed-variant">
<ul className="space-y-1">
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/contactusbooknestsupport">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span className="font-label-md text-label-md">Support</span>
</Link>
</li>
</ul>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 ml-0 md:ml-64 flex flex-col h-full bg-surface-muted overflow-hidden relative">
{/* TopAppBar */}
{/* <Navbar /> */}
<Navbar />
{/* Scrollable Canvas */}
<div className="flex-1 overflow-y-auto p-margin-desktop">
<div className="max-w-container-max-width mx-auto flex flex-col xl:flex-row gap-8">
{/* Left Column (Stats & Table) */}
<div className="flex-1 flex flex-col gap-8">
{/* Top Actions & Stats */}
<div className="flex flex-col gap-6">
<div className="flex justify-between items-end">
<div>
<h3 className="font-headline-md text-headline-md font-semibold text-primary">Campaign Overview</h3>
<p className="text-on-surface-variant font-body-sm mt-1">Track and manage active discount codes and promotional events.</p>
</div>
<button className="bg-[#C89B3C] text-white px-6 py-2.5 rounded-lg font-label-md flex items-center gap-2 hover:bg-[#b08630] transition-colors shadow-sm">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                                Add New Coupon
                            </button>
</div>
{/* Stat Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-6 rounded-[12px] border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between mb-4">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Active Campaigns</span>
<span className="material-symbols-outlined text-info-sky bg-info-sky/10 p-2 rounded-full" data-icon="campaign">campaign</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-primary">14</span>
<span className="text-success-emerald font-label-sm text-label-sm flex items-center"><span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span> +2 this week</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-[12px] border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between mb-4">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Total Redemptions</span>
<span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-full" data-icon="confirmation_number">confirmation_number</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-primary">8,492</span>
<span className="text-on-surface-variant font-body-sm">YTD</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-[12px] border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between mb-4">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Est. Revenue Impact</span>
<span className="material-symbols-outlined text-tertiary-container bg-tertiary-fixed p-2 rounded-full" data-icon="payments">payments</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-primary font-label-sm tracking-normal">-$12.4k</span>
</div>
</div>
</div>
</div>
{/* Main Table */}
<div className="bg-surface-container-lowest rounded-[12px] border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col flex-1 min-h-[400px]">
<div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-muted/50">
<h4 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Coupon Directory</h4>
<div className="flex gap-2">
<button className="p-2 text-on-surface-variant border border-outline-variant rounded-md hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined" data-icon="filter_list">filter_list</span></button>
<button className="p-2 text-on-surface-variant border border-outline-variant rounded-md hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined" data-icon="download">download</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-variant bg-surface-muted text-on-surface-variant font-label-sm text-label-sm uppercase">
<th className="p-4 pl-6 font-medium">Code</th>
<th className="p-4 font-medium">Type</th>
<th className="p-4 font-medium">Value</th>
<th className="p-4 font-medium">Usage</th>
<th className="p-4 font-medium">Expiry</th>
<th className="p-4 font-medium">Status</th>
<th className="p-4 pr-6 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-surface-variant">
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="p-4 pl-6 font-label-md text-primary">SUMMERREADS24</td>
<td className="p-4 text-on-surface-variant">Percentage</td>
<td className="p-4 font-label-md text-secondary">20%</td>
<td className="p-4 font-label-md text-on-surface-variant">450 / 1000</td>
<td className="p-4 text-on-surface-variant">Aug 31, 2024</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-emerald/10 text-success-emerald border border-success-emerald/20">Active</span>
</td>
<td className="p-4 pr-6 text-right">
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="p-4 pl-6 font-label-md text-primary">NEWAUTHOR5</td>
<td className="p-4 text-on-surface-variant">Fixed Amount</td>
<td className="p-4 font-label-md text-secondary">$5.00</td>
<td className="p-4 font-label-md text-on-surface-variant">1,204 / ∞</td>
<td className="p-4 text-on-surface-variant">Dec 31, 2024</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-emerald/10 text-success-emerald border border-success-emerald/20">Active</span>
</td>
<td className="p-4 pr-6 text-right">
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-surface-muted/50 transition-colors group bg-surface-dim/20">
<td className="p-4 pl-6 font-label-md text-on-surface-variant">SPRINGCLEAN</td>
<td className="p-4 text-on-surface-variant">Percentage</td>
<td className="p-4 font-label-md text-on-surface-variant">15%</td>
<td className="p-4 font-label-md text-on-surface-variant">890 / 890</td>
<td className="p-4 text-on-surface-variant">May 1, 2024</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant border border-outline-variant/50">Expired</span>
</td>
<td className="p-4 pr-6 text-right">
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="p-4 pl-6 font-label-md text-primary">BFCM2024</td>
<td className="p-4 text-on-surface-variant">Percentage</td>
<td className="p-4 font-label-md text-secondary">30%</td>
<td className="p-4 font-label-md text-on-surface-variant">0 / 5000</td>
<td className="p-4 text-on-surface-variant">Nov 29, 2024</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-info-sky/10 text-info-sky border border-info-sky/20">Scheduled</span>
</td>
<td className="p-4 pr-6 text-right">
<button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-surface-variant bg-surface-muted mt-auto flex justify-between items-center text-body-sm text-on-surface-variant">
<span>Showing 1 to 4 of 24 campaigns</span>
<div className="flex gap-1">
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface disabled:opacity-50" disabled={true}>Prev</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface bg-surface-container">1</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface">2</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface">3</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface">Next</button>
</div>
</div>
</div>
</div>
{/* Right Column (Form Panel) */}
<div className="w-full xl:w-96 flex-shrink-0">
<div className="bg-surface-container-lowest rounded-[12px] border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-6 sticky top-28">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-variant">
<span className="material-symbols-outlined text-[#C89B3C]" data-icon="edit_document">edit_document</span>
<h4 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Draft Promotion</h4>
</div>
<form className="space-y-5">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Campaign Name</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all placeholder:text-outline" placeholder="e.g. Back to School 2024" type="text" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Coupon Code</label>
<div className="relative">
<input className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 font-label-md text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all uppercase placeholder:normal-case placeholder:font-body-sm placeholder:text-outline" placeholder="B2SCHOOL24" type="text" />
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary font-label-sm hover:text-secondary-container" type="button"><span className="material-symbols-outlined text-[18px]" data-icon="autorenew">autorenew</span></button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Discount Type</label>
<select className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-on-surface appearance-none">
<option>Percentage (%)</option>
<option>Fixed Amount ($)</option>
<option>Free Shipping</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Amount</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 font-label-md focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all" placeholder="20" type="number" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Usage Limits</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded-[4px] text-secondary border-outline-variant focus:ring-secondary/50 w-4 h-4 bg-surface" type="checkbox" />
<span className="text-body-sm text-on-surface">Limit total redemptions</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded-[4px] text-secondary border-outline-variant focus:ring-secondary/50 w-4 h-4 bg-surface" type="checkbox" />
<span className="text-body-sm text-on-surface">Limit to one per customer</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded-[4px] text-secondary border-outline-variant focus:ring-secondary/50 w-4 h-4 bg-surface" type="checkbox" />
<span className="text-body-sm text-on-surface">Minimum purchase requirement</span>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Start Date</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-on-surface" type="date" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">End Date</label>
<input className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-on-surface" type="date" />
</div>
</div>
<div className="pt-4 flex gap-3">
<button className="flex-1 bg-surface-variant text-on-surface-variant hover:bg-surface-dim transition-colors py-2.5 rounded-lg font-label-md" type="button">Save Draft</button>
<button className="flex-1 bg-secondary text-white hover:bg-secondary-container transition-colors py-2.5 rounded-lg font-label-md shadow-sm" type="button">Publish</button>
</div>
</form>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
