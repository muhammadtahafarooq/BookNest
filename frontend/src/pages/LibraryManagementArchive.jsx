import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import './LibraryManagementArchive.css';

export default function LibraryManagementArchive() {
  return (
    <>
      {/* Fixed Sidebar */}
<aside className="sidebar w-64 flex-shrink-0 flex flex-col justify-between py-margin-desktop px-gutter h-full text-on-primary">
<div>
<div className="mb-xxl flex items-center gap-sm">
<span className="material-symbols-outlined text-headline-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>local_library</span>
<span className="font-headline-sm text-headline-sm">BookNest</span>
</div>
<nav className="flex flex-col gap-md">
<Link className="sidebar-active flex items-center gap-sm font-label-md text-label-md" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </Link>
<Link className="sidebar-inactive hover:text-white transition-colors duration-300 flex items-center gap-sm font-label-md text-label-md" to="/browsecollections">
<span className="material-symbols-outlined">collections_bookmark</span>
                    Catalog Management
                </Link>
<Link className="sidebar-inactive hover:text-white transition-colors duration-300 flex items-center gap-sm font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">shopping_cart</span>
                    Acquisition Orders
                </Link>
<Link className="sidebar-inactive hover:text-white transition-colors duration-300 flex items-center gap-sm font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">group</span>
                    Reader Archive
                </Link>
<Link className="sidebar-inactive hover:text-white transition-colors duration-300 flex items-center gap-sm font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
                    System Settings
                </Link>
</nav>
</div>
<div className="font-label-sm text-label-sm text-outline-variant">
            v2.4.1 Admin Shell
        </div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col h-full overflow-y-auto">
{/* Top Bar */}
{/* <Navbar /> */}
<Navbar />
{/* Dashboard Content */}
<div className="p-margin-desktop max-w-[1280px] mx-auto w-full fade-in-up">
<div className="flex justify-between items-end mb-xl">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Library Overview</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Operational metrics and recent acquisitions.</p>
</div>
<div className="flex gap-md">
<button className="px-lg py-sm border border-[#171A1C] text-[#171A1C] rounded-DEFAULT font-label-md text-label-md hover:bg-[#171A1C] hover:text-white transition-colors">
                        Generate Report
                    </button>
<button className="px-lg py-sm bg-brass text-white rounded-DEFAULT font-label-md text-label-md hover:bg-[#8f6a38] transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New Volume
                    </button>
</div>
</div>
{/* Key Metrics */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl fade-in-up delay-100">
<div className="card p-lg border">
<div className="flex justify-between items-start mb-md">
<div className="font-headline-sm text-headline-sm text-primary">Total Volumes</div>
<span className="material-symbols-outlined text-outline">library_books</span>
</div>
<div className="font-display-lg text-display-lg text-primary">124,592</div>
<div className="font-label-sm text-label-sm text-[#23372B] mt-2">+314 this month</div>
</div>
<div className="card p-lg border">
<div className="flex justify-between items-start mb-md">
<div className="font-headline-sm text-headline-sm text-primary">Active Readers</div>
<span className="material-symbols-outlined text-outline">groups</span>
</div>
<div className="font-display-lg text-display-lg text-primary">8,942</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-2">Consistent activity</div>
</div>
<div className="card p-lg border">
<div className="flex justify-between items-start mb-md">
<div className="font-headline-sm text-headline-sm text-primary">Rare Processing</div>
<span className="material-symbols-outlined text-outline">auto_awesome</span>
</div>
<div className="font-display-lg text-display-lg text-brass">17</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-2">Requires conservation</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-xl fade-in-up delay-200">
{/* Recent Acquisitions Table */}
<div className="lg:col-span-2 card p-lg border">
<div className="flex justify-between items-center mb-lg">
<h2 className="font-headline-md text-headline-md text-primary">Recent Acquisitions</h2>
<Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" to="/shopbrowsebooks">View All</Link>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone font-label-md text-label-md text-on-surface-variant">
<th className="pb-md font-medium">Title</th>
<th className="pb-md font-medium">Author</th>
<th className="pb-md font-medium">Status</th>
<th className="pb-md font-medium">Date Added</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-stone border-opacity-50 table-row-hover transition-colors">
<td className="py-md pr-4 text-primary font-medium">The Letters of Pliny</td>
<td className="py-md pr-4 text-on-surface-variant">Pliny the Younger</td>
<td className="py-md pr-4">
<span className="inline-block px-2 py-1 rounded-full bg-[#171A1C] text-white font-label-sm text-[10px]">Archived</span>
</td>
<td className="py-md text-on-surface-variant">Oct 24, 2024</td>
</tr>
<tr className="border-b border-stone border-opacity-50 table-row-hover transition-colors">
<td className="py-md pr-4 text-primary font-medium">On the Nature of Things</td>
<td className="py-md pr-4 text-on-surface-variant">Lucretius</td>
<td className="py-md pr-4">
<span className="inline-block px-2 py-1 rounded-full bg-brass text-white font-label-sm text-[10px]">Rare</span>
</td>
<td className="py-md text-on-surface-variant">Oct 22, 2024</td>
</tr>
<tr className="border-b border-stone border-opacity-50 table-row-hover transition-colors">
<td className="py-md pr-4 text-primary font-medium">Meditations</td>
<td className="py-md pr-4 text-on-surface-variant">Marcus Aurelius</td>
<td className="py-md pr-4">
<span className="inline-block px-2 py-1 rounded-full border border-stone text-on-surface font-label-sm text-[10px]">Processing</span>
</td>
<td className="py-md text-on-surface-variant">Oct 21, 2024</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="py-md pr-4 text-primary font-medium">Histories</td>
<td className="py-md pr-4 text-on-surface-variant">Herodotus</td>
<td className="py-md pr-4">
<span className="inline-block px-2 py-1 rounded-full bg-[#171A1C] text-white font-label-sm text-[10px]">Archived</span>
</td>
<td className="py-md text-on-surface-variant">Oct 19, 2024</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Side Actions & Mini Chart Placeholder */}
<div className="flex flex-col gap-lg">
<div className="card p-lg border h-64 flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-primary mb-md">Library Growth</h2>
<div className="flex-1 relative border-b border-l border-stone">
{/* Abstract Representation of a minimalist chart */}
<div className="absolute bottom-0 left-0 w-full h-full flex items-end opacity-70">
<div className="w-1/6 bg-[#23372B] h-[20%] mx-1 rounded-t-sm"></div>
<div className="w-1/6 bg-[#23372B] h-[35%] mx-1 rounded-t-sm"></div>
<div className="w-1/6 bg-[#23372B] h-[30%] mx-1 rounded-t-sm"></div>
<div className="w-1/6 bg-brass h-[50%] mx-1 rounded-t-sm"></div>
<div className="w-1/6 bg-[#23372B] h-[65%] mx-1 rounded-t-sm"></div>
<div className="w-1/6 bg-[#23372B] h-[85%] mx-1 rounded-t-sm"></div>
</div>
</div>
</div>
<div className="card p-lg border">
<h2 className="font-headline-sm text-headline-sm text-primary mb-md">Quick Actions</h2>
<div className="flex flex-col gap-sm">
<button className="w-full text-left px-md py-sm border border-stone rounded-DEFAULT font-label-md text-label-md hover:border-[#171A1C] transition-colors flex items-center justify-between">
                                Manage Curations
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button className="w-full text-left px-md py-sm border border-stone rounded-DEFAULT font-label-md text-label-md hover:border-[#171A1C] transition-colors flex items-center justify-between">
                                Review Flagged Items
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
{/* Footer component placeholder */}
<Footer />
</div>
</main>
    </>
  );
}
