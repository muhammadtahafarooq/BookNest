import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import './CategoryManagementBooknestAdmin.css';

export default function CategoryManagementBooknestAdmin() {
  return (
    <>
      {/* Admin Sidebar */}
<aside className="w-64 bg-primary-container text-on-primary-container hidden md:flex flex-col flex-shrink-0 border-r border-outline-variant/20 shadow-[4px_0_12px_rgba(0,0,0,0.04)]">
<div className="h-20 flex items-center px-6 border-b border-outline-variant/10">
<span className="font-display-lg text-display-lg text-on-primary-fixed tracking-tight">BookNest</span>
</div>
<nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-primary-container hover:bg-surface-tint/10 transition-colors" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</Link>
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-primary-container hover:bg-surface-tint/10 transition-colors" to="/catalogarchive">
<span className="material-symbols-outlined">library_books</span>
<span className="font-body-md text-body-md">Books</span>
</Link>
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-surface-tint/20 text-on-primary-fixed border-l-2 border-secondary font-medium transition-colors" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>category</span>
<span className="font-body-md text-body-md">Categories</span>
</Link>
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-primary-container hover:bg-surface-tint/10 transition-colors" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-body-md text-body-md">Orders</span>
</Link>
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-primary-container hover:bg-surface-tint/10 transition-colors" to="/shopbrowsebooks">
<span className="material-symbols-outlined">group</span>
<span className="font-body-md text-body-md">Customers</span>
</Link>
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-primary-container hover:bg-surface-tint/10 transition-colors" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</Link>
</nav>
<div className="p-4 border-t border-outline-variant/10">
<Link className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-primary-container hover:bg-surface-tint/10 transition-colors" to="/shopbrowsebooks">
<span className="material-symbols-outlined">logout</span>
<span className="font-body-md text-body-md">Log Out</span>
</Link>
</div>
</aside>
{/* Main Content */}
<div className="flex-1 flex flex-col min-h-screen overflow-hidden">
{/* Header */}
{/* <Navbar /> */}
<Navbar />
{/* Main Canvas */}
<main className="flex-1 overflow-y-auto p-margin-desktop space-y-gutter">
{/* Statistics Section */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Popular Categories Card */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/10">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Most Popular Collections</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-surface-container p-4 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/20 hover:shadow-md transition-shadow">
<span className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">Fiction</span>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-primary">1,245</span>
<span className="material-symbols-outlined text-secondary mb-1">auto_stories</span>
</div>
</div>
<div className="bg-surface-container p-4 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/20 hover:shadow-md transition-shadow">
<span className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">Academic</span>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-primary">892</span>
<span className="material-symbols-outlined text-secondary mb-1">school</span>
</div>
</div>
<div className="bg-surface-container p-4 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/20 hover:shadow-md transition-shadow">
<span className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">Rare Finds</span>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-primary">156</span>
<span className="material-symbols-outlined text-on-tertiary-container mb-1" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
</div>
</div>
</div>
{/* Distribution Card */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/10">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Distribution</h2>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Fiction</span>
<span className="font-label-sm text-label-sm text-primary">54%</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-secondary h-2 rounded-full" style={{width: '54%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Academic</span>
<span className="font-label-sm text-label-sm text-primary">38%</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-primary-container h-2 rounded-full" style={{width: '38%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Rare Finds</span>
<span className="font-label-sm text-label-sm text-primary">8%</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-on-tertiary-container h-2 rounded-full" style={{width: '8%'}}></div>
</div>
</div>
</div>
</div>
</section>
{/* Table Section */}
<section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/10 overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
<h2 className="font-headline-md text-headline-md text-primary">All Categories</h2>
<button className="text-secondary hover:text-secondary-fixed-dim transition-colors font-body-sm text-body-sm flex items-center space-x-1">
<span>Filter</span>
<span className="material-symbols-outlined" style={{fontSize: '16px'}}>filter_list</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant/20">
<th className="py-4 px-6 font-body-sm text-body-sm font-semibold uppercase tracking-wider">Category Name</th>
<th className="py-4 px-6 font-body-sm text-body-sm font-semibold uppercase tracking-wider">Book Count</th>
<th className="py-4 px-6 font-body-sm text-body-sm font-semibold uppercase tracking-wider">Status</th>
<th className="py-4 px-6 font-body-sm text-body-sm font-semibold uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant/50">
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">menu_book</span>
</div>
<span className="font-body-md text-body-md font-medium text-primary">Fiction</span>
</div>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-on-surface">1,245</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-success-emerald/10 text-success-emerald">
                                        Active
                                    </span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-secondary transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>edit</span>
</button>
<button className="text-on-surface-variant hover:text-danger-rose transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>delete</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">science</span>
</div>
<span className="font-body-md text-body-md font-medium text-primary">Academic</span>
</div>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-on-surface">892</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-success-emerald/10 text-success-emerald">
                                        Active
                                    </span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-secondary transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>edit</span>
</button>
<button className="text-on-surface-variant hover:text-danger-rose transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>delete</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined">diamond</span>
</div>
<span className="font-body-md text-body-md font-medium text-primary">Rare Finds</span>
</div>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-on-surface">156</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-outline-variant/30 text-on-surface-variant">
                                        Draft
                                    </span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-secondary transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>edit</span>
</button>
<button className="text-on-surface-variant hover:text-danger-rose transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>delete</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-muted/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">child_care</span>
</div>
<span className="font-body-md text-body-md font-medium text-primary">Children's Books</span>
</div>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-on-surface">430</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-success-emerald/10 text-success-emerald">
                                        Active
                                    </span>
</td>
<td className="py-4 px-6 text-right space-x-2">
<button className="text-on-surface-variant hover:text-secondary transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>edit</span>
</button>
<button className="text-on-surface-variant hover:text-danger-rose transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 4 of 24 entries</span>
<div className="flex space-x-1">
<button className="px-3 py-1 rounded border border-outline-variant/50 text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm disabled:opacity-50">Prev</button>
<button className="px-3 py-1 rounded bg-secondary text-surface-container-lowest font-body-sm text-body-sm">1</button>
<button className="px-3 py-1 rounded border border-outline-variant/50 text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm">2</button>
<button className="px-3 py-1 rounded border border-outline-variant/50 text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm">3</button>
<button className="px-3 py-1 rounded border border-outline-variant/50 text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm">Next</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<Footer />
</div>
    </>
  );
}
