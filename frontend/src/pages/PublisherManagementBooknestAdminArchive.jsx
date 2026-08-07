import React from 'react';
import './PublisherManagementBooknestAdminArchive.css';

export default function PublisherManagementBooknestAdminArchive() {
  return (
    <>
      {/* SideNavBar */}
<nav className="hidden md:flex flex-col bg-primary-container dark:bg-primary-container text-secondary-fixed dark:text-secondary-fixed-dim docked h-screen w-64 left-0 top-0 fixed shadow-md z-50">
<div className="p-6 border-b border-on-primary-fixed-variant/20 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-primary-container">auto_stories</span>
</div>
<div>
<h1 className="font-headline-lg text-[20px] font-bold text-surface-bright leading-tight">BookNest</h1>
<p className="font-label-sm text-label-sm opacity-80">Admin Console</p>
</div>
</div>
<div className="flex-1 py-6 overflow-y-auto">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-5 py-3 text-on-primary-container font-medium hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-5 py-3 text-on-primary-container font-medium hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-5 py-3 text-on-primary-container font-medium hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" href="#">
<span className="material-symbols-outlined">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</a>
</li>
<li>
{/* Active State */}
<a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed-dim font-bold border-l-4 border-secondary-fixed-dim bg-on-primary-fixed-variant/50" href="#">
<span className="material-symbols-outlined filled">account_balance</span>
<span className="font-label-md text-label-md">Publishing Partners</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-5 py-3 text-on-primary-container font-medium hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-5 py-3 text-on-primary-container font-medium hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Customers</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-5 py-3 text-on-primary-container font-medium hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</li>
</ul>
</div>
<div className="p-6 border-t border-on-primary-fixed-variant/20">
<button className="w-full py-2 px-4 bg-antique-brass hover:bg-[#b08630] text-surface-bright rounded font-label-md text-label-md transition-colors duration-300 flex items-center justify-center gap-2 mb-4">
<span className="material-symbols-outlined text-[18px]">add</span>
                Add New Title
            </button>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-2 py-2 text-on-primary-container font-medium hover:text-surface-bright transition-colors duration-300" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-2 text-on-primary-container font-medium hover:text-surface-bright transition-colors duration-300" href="#">
<span className="material-symbols-outlined text-[20px]">help_outline</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
</li>
</ul>
</div>
</nav>
{/* Main Content Wrapper */}
<div className="flex-1 flex flex-col md:ml-64 min-h-screen">
{/* TopAppBar */}
<header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary dark:text-primary-fixed-dim h-20 px-margin-desktop z-40 sticky top-0 flex justify-between items-center border-b border-outline-variant transition-transform">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 font-body-sm text-body-sm transition-all text-on-surface" placeholder="Publisher Search..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-secondary transition-colors duration-400">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-secondary transition-colors duration-400">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="flex items-center gap-3 pl-6 border-l border-outline-variant cursor-pointer group">
<img alt="Administrator Avatar" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a female administrator in a modern, well-lit office setting. High key lighting, sharp focus, light mode corporate aesthetic, conveying trust and competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Vl7imIIa88lf-YLa3AeX34bnx97MZOAOZ2L6YZn_CqYC0KdOl0vwiPp19VmQUWvvzP3s8Xyrwc6onlLCXpAeCX-JiaGtJA8vdZx_j-dht1GScfBLkalfoxE4uL-g22nm_L6B13yMnLwabgK6Jsjpt0I0Q0-aAjEDrtp4rqUOJG7p4FvTp04gQi3pOzlXiUzxhRuhk54QnuWJ7PqUOGYL4YSMT9FqblXTrYSt8HID5bFxtWeQToUR" />
<div className="hidden sm:block">
<p className="font-label-sm text-label-sm font-semibold text-on-surface group-hover:text-secondary transition-colors">Admin Profile</p>
</div>
</div>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop bg-[#fcf8fa] overflow-y-auto">
{/* Header Section */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface mb-2">Publishing Partners</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage global distribution and institutional partnerships.</p>
</div>
<button className="bg-antique-brass hover:bg-[#b08630] text-white px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]">domain_add</span>
                    Add Publisher
                </button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-4 gap-gutter">
{/* Main Table Area */}
<div className="xl:col-span-3 space-y-6">
{/* Stats Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest p-6 rounded-[12px] shadow-sm border border-outline-variant/30 flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Partners</p>
<p className="font-headline-lg text-headline-lg text-on-surface">42</p>
</div>
<div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">domain</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-[12px] shadow-sm border border-outline-variant/30 flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">New This Quarter</p>
<p className="font-headline-lg text-headline-lg text-on-surface flex items-baseline gap-2">
                                    3 <span className="font-label-md text-label-md text-success-emerald">+8%</span>
</p>
</div>
<div className="w-12 h-12 rounded-full bg-success-emerald/10 flex items-center justify-center text-success-emerald">
<span className="material-symbols-outlined">trending_up</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-[12px] shadow-sm border border-outline-variant/30 flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Distribution Reach</p>
<p className="font-headline-lg text-headline-lg text-on-surface">Worldwide</p>
</div>
<div className="w-12 h-12 rounded-full bg-antique-brass/10 flex items-center justify-center text-antique-brass">
<span className="material-symbols-outlined">public</span>
</div>
</div>
</div>
{/* Publisher Table Card */}
<div className="bg-paper-mist rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E2E8F0] overflow-hidden">
<div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center bg-surface-container-lowest">
<h3 className="font-headline-md text-headline-md text-on-surface">Directory</h3>
<button className="text-on-surface-variant hover:text-secondary flex items-center gap-1 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[#E2E8F0] bg-surface-container-low/50">
<th className="p-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Publisher</th>
<th className="p-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Active Titles</th>
<th className="p-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Status</th>
<th className="p-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Primary Contact</th>
<th className="p-4 font-label-sm text-label-sm text-on-surface-variant font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-[#E2E8F0] bg-surface-container-lowest">
{/* Row 1 */}
<tr className="hover:bg-surface-muted transition-colors group">
<td className="p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center overflow-hidden shrink-0">
<span className="material-symbols-outlined text-outline">book</span>
</div>
<span className="font-fraunces font-semibold text-[16px] text-on-surface">Penguin Random House</span>
</td>
<td className="p-4 font-label-md text-label-md text-on-surface-variant">1,245</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-library-forest/10 text-library-forest border border-library-forest/20">
                                                Active
                                            </span>
</td>
<td className="p-4">
<p className="font-body-sm text-body-sm text-on-surface">Sarah Jenkins</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">s.jenkins@prh.com</p>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors" title="View Archive">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors" title="Edit">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors" title="More">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-muted transition-colors group">
<td className="p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center overflow-hidden shrink-0">
<span className="material-symbols-outlined text-outline">import_contacts</span>
</div>
<span className="font-fraunces font-semibold text-[16px] text-on-surface">HarperCollins</span>
</td>
<td className="p-4 font-label-md text-label-md text-on-surface-variant">892</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-library-forest/10 text-library-forest border border-library-forest/20">
                                                Active
                                            </span>
</td>
<td className="p-4">
<p className="font-body-sm text-body-sm text-on-surface">David Chen</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">d.chen@harpercollins.com</p>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-muted transition-colors group">
<td className="p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center overflow-hidden shrink-0">
<span className="material-symbols-outlined text-outline">school</span>
</div>
<span className="font-fraunces font-semibold text-[16px] text-on-surface">Oxford University Press</span>
</td>
<td className="p-4 font-label-md text-label-md text-on-surface-variant">450</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-warning-amber/10 text-[#B45309] border border-warning-amber/20">
                                                Pending Review
                                            </span>
</td>
<td className="p-4">
<p className="font-body-sm text-body-sm text-on-surface">Eleanor Vance</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">e.vance@oup.com</p>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary rounded hover:bg-secondary-fixed/50 transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Right Side Panel: Quick View */}
<div className="xl:col-span-1">
<div className="bg-surface-container-lowest rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-6 sticky top-28">
<div className="flex items-center justify-between mb-6">
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Featured Partner</h3>
<button className="text-on-surface-variant hover:text-secondary">
<span className="material-symbols-outlined text-[20px]">open_in_new</span>
</button>
</div>
<div className="text-center mb-6">
<div className="w-20 h-20 mx-auto rounded-full bg-surface-muted border border-outline-variant/30 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[32px] text-outline">book</span>
</div>
<h4 className="font-fraunces text-[20px] font-semibold text-on-surface mb-1">Penguin Random House</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Global Publishing Conglomerate</p>
</div>
<div className="space-y-4 mb-6 border-t border-b border-outline-variant/30 py-4">
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Founded</span>
<span className="font-label-md text-label-md text-on-surface">2013</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Headquarters</span>
<span className="font-label-md text-label-md text-on-surface">New York, NY</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Account Tier</span>
<span className="font-label-md text-label-md text-antique-brass flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] filled">star</span> Premium
                                </span>
</div>
</div>
<div>
<h5 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">Top Titles Archive</h5>
<div className="relative h-32 w-full rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-low group cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A macro shot of three beautifully bound classic hardcover books resting on a polished wooden shelf. Soft, elegant library lighting, shallow depth of field, conveying a sense of heritage and premium quality in a light mode palette." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBwl5R6PaNAkYeG45OjK2zqopsxoshnWig2HO9Q-m-3emQ9fWF4IGIDnKnIQYDcfjiTcjVmBERAgXhQoQVv6fAWy3FPcL6UcOKdeCDEPzy06v6o6kKBR72yBvuqbsRORDUGW-MCtsa1kJkmDZP5MTaaOGRWH-KxE9Oh5eZdDPWtvEh-3A6ojzkIeRQpmF2glkxChNo4qSOfxUzNrwMMf0jJrBcuCnANQu1sKTfSrVRXDoMTVz6KGpAS\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 text-white">
<p className="font-label-sm text-[10px] uppercase opacity-80 mb-0.5">Bestsellers</p>
<p className="font-body-sm text-[13px] font-medium leading-tight line-clamp-2">The Archive Collection</p>
</div>
</div>
<button className="w-full mt-4 py-2 border border-outline-variant hover:border-secondary hover:text-secondary text-on-surface-variant rounded font-label-md text-label-md transition-colors duration-300">
                                View Full Catalog
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}
