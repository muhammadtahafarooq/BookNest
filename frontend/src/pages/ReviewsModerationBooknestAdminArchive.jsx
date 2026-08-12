import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './ReviewsModerationBooknestAdminArchive.css';

export default function ReviewsModerationBooknestAdminArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar (Generated from JSON guidance) */}
<nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col py-margin-desktop bg-primary-container dark:bg-primary-container shadow-md z-50">
<div className="px-6 mb-8 flex items-center space-x-3">
<span className="material-symbols-outlined font-headline-lg text-headline-lg font-bold text-surface-bright" data-icon="menu_book">menu_book</span>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-bright">BookNest</h1>
<p className="font-label-md text-label-md text-secondary-fixed dark:text-secondary-fixed-dim opacity-80">Admin Console</p>
</div>
</div>
<ul className="flex-1 space-y-2 mt-4">
<li>
<Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
</li>
<li>
<Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
</li>
<li>
<Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" data-icon="person_edit">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</Link>
</li>
<li>
<Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</Link>
</li>
<li>
<Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
</li>
{/* Active State */}
<li>
<Link className="flex items-center space-x-3 text-secondary-fixed-dim font-bold border-l-4 border-secondary-fixed-dim pl-4 py-3 bg-on-primary-fixed-variant opacity-90 transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</li>
</ul>
<div className="px-5 mt-auto">
<button className="w-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md py-3 rounded-DEFAULT hover:bg-secondary-fixed-dim transition-colors duration-400 flex items-center justify-center space-x-2">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span>Add New Title</span>
</button>
</div>
<ul className="mt-8 space-y-2 border-t border-on-primary-container/20 pt-4 px-2">
<li>
<Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-3 py-2 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-DEFAULT" to="/shopbrowsebooks">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
</li>
<li>
            <Link className="flex items-center space-x-3 text-on-primary-container font-medium pl-3 py-2 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-DEFAULT" to="/contact">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span className="font-label-md text-label-md">Support</span>
</Link>
</li>
</ul>
</nav>
{/* TopAppBar (Generated from JSON guidance) */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content Area */}
<main className="md:ml-64 pt-24 min-h-screen px-margin-mobile md:px-margin-desktop pb-12">
<div className="max-w-container-max-width mx-auto">
{/* Filter Tabs */}
<div className="mb-8 border-b border-outline-variant flex space-x-8">
<button className="font-label-md text-label-md text-secondary font-bold border-b-2 border-secondary pb-4 px-2 hover:bg-surface-container-low transition-colors duration-400">
                    Pending Curation (12)
                </button>
<button className="font-label-md text-label-md text-on-surface-variant pb-4 px-2 hover:text-secondary hover:bg-surface-container-low transition-colors duration-400">
                    Approved
                </button>
<button className="font-label-md text-label-md text-on-surface-variant pb-4 px-2 hover:text-secondary hover:bg-surface-container-low transition-colors duration-400">
                    Rejected
                </button>
</div>
{/* Reviews Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Review Card 1 (Spans full width for premium feel) */}
<div className="md:col-span-12 bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-surface-container-highest relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
<div className="flex items-center space-x-4 mb-4 md:mb-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-headline-md font-bold">
                                E
                            </div>
<div>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">Eleanor Vance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023</p>
</div>
</div>
<div className="flex items-center space-x-1 star-rating">
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" data-icon="star">star</span>
</div>
</div>
<div className="mb-4">
<p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider mb-2">Reviewed Work:</p>
<Link className="font-headline-lg text-headline-lg font-semibold text-primary hover:text-secondary transition-colors inline-block mb-3 border-b border-transparent hover:border-secondary" to="/shopbrowsebooks">The Haunting of Hill House</Link>
<p className="font-body-md text-body-md text-on-surface leading-relaxed max-w-3xl">
                            "A masterclass in psychological terror. The prose is elegant, almost melodic, winding around you until you realize you're trapped. I found myself checking over my shoulder while reading in broad daylight. Highly recommended for those who prefer their horror to creep in rather than jump out."
                        </p>
</div>
<div className="flex space-x-4 mt-6 pt-4 border-t border-surface-container-highest">
<button className="bg-[#D4AF37] text-white font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-[#C5A017] transition-colors duration-400 flex items-center space-x-2">
<span className="material-symbols-outlined" data-icon="check">check</span>
<span>Approve</span>
</button>
<button className="border border-outline text-on-surface font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-surface-container hover:text-on-surface transition-colors duration-400 flex items-center space-x-2">
<span className="material-symbols-outlined" data-icon="close">close</span>
<span>Reject</span>
</button>
</div>
</div>
{/* Review Card 2 */}
<div className="md:col-span-6 bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-surface-container-highest relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-body-lg font-bold">
                                M
                            </div>
<div>
<h3 className="font-headline-md text-body-md font-semibold text-on-surface">Marcus Reed</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Oct 23, 2023</p>
</div>
</div>
<div className="flex items-center space-x-1 star-rating text-sm">
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm" data-icon="star">star</span>
</div>
</div>
<div className="mb-4">
<Link className="font-headline-md text-body-lg font-semibold text-primary hover:text-secondary transition-colors block mb-2" to="/shopbrowsebooks">Dune</Link>
<p className="font-body-md text-body-md text-on-surface leading-relaxed text-sm line-clamp-3">
                            "The world-building is undeniably brilliant, vast and detailed. However, the pacing in the middle third dragged significantly for me. I respect its place in the canon, but it was a chore to finish."
                        </p>
</div>
<div className="flex space-x-3 mt-4 pt-4 border-t border-surface-container-highest">
<button className="bg-[#D4AF37] text-white font-label-md text-label-sm px-4 py-1.5 rounded-DEFAULT hover:bg-[#C5A017] transition-colors duration-400">
                            Approve
                        </button>
<button className="border border-outline text-on-surface font-label-md text-label-sm px-4 py-1.5 rounded-DEFAULT hover:bg-surface-container transition-colors duration-400">
                            Reject
                        </button>
</div>
</div>
{/* Review Card 3 */}
<div className="md:col-span-6 bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-surface-container-highest relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-body-lg font-bold">
                                S
                            </div>
<div>
<h3 className="font-headline-md text-body-md font-semibold text-on-surface">Sarah Jenkins</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Oct 21, 2023</p>
</div>
</div>
<div className="flex items-center space-x-1 star-rating text-sm">
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
</div>
<div className="mb-4">
<Link className="font-headline-md text-body-lg font-semibold text-primary hover:text-secondary transition-colors block mb-2" to="/aboutusourstorybooknest">The Secret History</Link>
<p className="font-body-md text-body-md text-on-surface leading-relaxed text-sm line-clamp-3">
                            "Absolutely intoxicating. Tartt weaves a narrative that is both deeply intellectual and incredibly suspenseful. The atmosphere of the college campus is captured perfectly. I couldn't put it down."
                        </p>
</div>
<div className="flex space-x-3 mt-4 pt-4 border-t border-surface-container-highest">
<button className="bg-[#D4AF37] text-white font-label-md text-label-sm px-4 py-1.5 rounded-DEFAULT hover:bg-[#C5A017] transition-colors duration-400">
                            Approve
                        </button>
<button className="border border-outline text-on-surface font-label-md text-label-sm px-4 py-1.5 rounded-DEFAULT hover:bg-surface-container transition-colors duration-400">
                            Reject
                        </button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
