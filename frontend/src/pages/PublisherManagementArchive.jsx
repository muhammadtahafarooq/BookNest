import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import './PublisherManagementArchive.css';

export default function PublisherManagementArchive() {
  return (
    <>
      {/* Top Navigation Shell */}
<nav className="bg-primary dark:bg-primary-container font-headline-md text-headline-md. UI: font-label-md text-label-md. docked full-width top-0 border-b border-outline-variant dark:border-outline shadow-md sticky z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto hidden md:flex">
{/* Brand Logo */}
<Link className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container tracking-tight" to="/">
                BookNest
            </Link>
{/* Navigation Links */}
<div className="flex items-center gap-lg">
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform font-label-md text-label-md" to="/catalogarchive">
                    Catalog
                </Link>
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform font-label-md text-label-md" to="/browsecollections">
                    Collections
                </Link>
<Link className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform font-label-md text-label-md" to="/shopbrowsebooks">
                    Archives
                </Link>
<Link aria-current="page" className="text-on-primary dark:text-on-primary-container border-b-2 border-secondary-container pb-1 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform font-label-md text-label-md" to="/shopbrowsebooks">
                    Curations
                </Link>
</div>
{/* Actions */}
<div className="flex items-center gap-md">
<button className="text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity flex items-center justify-center p-sm rounded-full">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>menu_book</span>
</button>
<button className="text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity flex items-center justify-center p-sm rounded-full">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>history</span>
</button>
<Link className="font-label-md text-label-md bg-surface text-on-surface px-md py-sm rounded-DEFAULT border border-outline hover:bg-surface-variant transition-colors ml-sm shadow-ambient-1" to="/loginbooknestprivatelibrary">
                    Sign In
                </Link>
</div>
</div>
{/* Mobile Navigation Fallback (Simplified Top Bar for Mobile) */}
<div className="flex md:hidden justify-between items-center w-full px-margin-mobile py-md">
<Link className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container tracking-tight" to="/">
                BookNest
            </Link>
<button className="text-on-primary flex items-center justify-center p-sm">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Header Section */}
{/* <Navbar /> */}
<Navbar />
{/* Search and Filter Bar */}
<section className="mb-lg flex flex-col md:flex-row gap-md items-center justify-between bg-surface-container-lowest p-md rounded-lg shadow-ambient-1 border border-outline-variant/50">
<div className="relative w-full md:w-[400px]">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-[48px] pr-md py-sm bg-surface-container-lowest border-outline-variant text-on-background rounded-DEFAULT focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors font-body-md text-body-md placeholder-on-surface-variant/50" placeholder="Search publishers..." type="text" />
</div>
<div className="flex gap-md w-full md:w-auto">
<div className="relative flex-1 md:w-[180px]">
<select className="w-full appearance-none pl-md pr-[40px] py-sm bg-surface-container-lowest border-outline-variant text-on-background rounded-DEFAULT focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors font-body-md text-body-md">
<option value={true}>Status: All</option>
<option value="active">Active</option>
<option value="inactive">Inactive</option>
<option value="archived">Archived</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
</div>
<button className="p-sm bg-surface-container border border-outline-variant rounded-DEFAULT text-on-surface-variant hover:text-on-background hover:bg-surface-variant transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
</section>
{/* Publisher Data Table */}
<section className="bg-surface-container-lowest rounded-lg shadow-ambient-1 border border-outline-variant/50 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-outline-variant/50 bg-surface-container-low">
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-[40%]">Publisher Name</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-[20%] text-right">Books</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-[20%]">Status</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-[20%] text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 font-body-md text-body-md text-on-background">
{/* Row 1 */}
<tr className="group hover:bg-surface-container-low/50 transition-colors duration-200">
<td className="py-lg px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0 text-on-surface-variant font-headline-sm text-headline-sm">
                                        P
                                    </div>
<div>
<div className="font-headline-sm text-headline-sm text-on-background mb-xs">Penguin Classics</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">London, UK</div>
</div>
</div>
</td>
<td className="py-lg px-lg text-right font-body-md text-body-md">
                                4,218
                            </td>
<td className="py-lg px-lg">
<span className="inline-flex items-center gap-xs px-sm py-[2px] rounded-full bg-secondary-container/50 text-on-secondary-container border border-secondary/20 font-label-sm text-label-sm">
<span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
                                    Active
                                </span>
</td>
<td className="py-lg px-lg text-right">
<div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-[6px] text-on-surface-variant hover:text-tertiary transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-error transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-on-background transition-colors rounded-DEFAULT hover:bg-surface-variant" title="More">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="group hover:bg-surface-container-low/50 transition-colors duration-200">
<td className="py-lg px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0 text-on-surface-variant font-headline-sm text-headline-sm">
                                        V
                                    </div>
<div>
<div className="font-headline-sm text-headline-sm text-on-background mb-xs">Vintage Books</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">New York, USA</div>
</div>
</div>
</td>
<td className="py-lg px-lg text-right font-body-md text-body-md">
                                1,842
                            </td>
<td className="py-lg px-lg">
<span className="inline-flex items-center gap-xs px-sm py-[2px] rounded-full bg-secondary-container/50 text-on-secondary-container border border-secondary/20 font-label-sm text-label-sm">
<span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
                                    Active
                                </span>
</td>
<td className="py-lg px-lg text-right">
<div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-[6px] text-on-surface-variant hover:text-tertiary transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-error transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-on-background transition-colors rounded-DEFAULT hover:bg-surface-variant" title="More">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="group hover:bg-surface-container-low/50 transition-colors duration-200 bg-surface-container-low/30">
<td className="py-lg px-lg">
<div className="flex items-center gap-md opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0 text-on-surface-variant font-headline-sm text-headline-sm">
                                        E
                                    </div>
<div>
<div className="font-headline-sm text-headline-sm text-on-background mb-xs">Everyman's Library</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">London, UK</div>
</div>
</div>
</td>
<td className="py-lg px-lg text-right font-body-md text-body-md opacity-60">
                                950
                            </td>
<td className="py-lg px-lg">
<span className="inline-flex items-center gap-xs px-sm py-[2px] rounded-full bg-surface-variant text-on-surface-variant border border-outline-variant font-label-sm text-label-sm">
<span className="w-[6px] h-[6px] rounded-full bg-outline-variant"></span>
                                    Inactive
                                </span>
</td>
<td className="py-lg px-lg text-right">
<div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-[6px] text-on-surface-variant hover:text-tertiary transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-error transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-on-background transition-colors rounded-DEFAULT hover:bg-surface-variant" title="More">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 4 */}
<tr className="group hover:bg-surface-container-low/50 transition-colors duration-200">
<td className="py-lg px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0 text-on-surface-variant font-headline-sm text-headline-sm">
                                        F
                                    </div>
<div>
<div className="font-headline-sm text-headline-sm text-on-background mb-xs">Folio Society</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">London, UK</div>
</div>
</div>
</td>
<td className="py-lg px-lg text-right font-body-md text-body-md">
                                412
                            </td>
<td className="py-lg px-lg">
<span className="inline-flex items-center gap-xs px-sm py-[2px] rounded-full bg-secondary-container/50 text-on-secondary-container border border-secondary/20 font-label-sm text-label-sm">
<span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
                                    Active
                                </span>
</td>
<td className="py-lg px-lg text-right">
<div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-[6px] text-on-surface-variant hover:text-tertiary transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Edit">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-error transition-colors rounded-DEFAULT hover:bg-surface-variant" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
<button className="p-[6px] text-on-surface-variant hover:text-on-background transition-colors rounded-DEFAULT hover:bg-surface-variant" title="More">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="border-t border-outline-variant/50 p-md flex items-center justify-between bg-surface-container-low">
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Showing 1-4 of 124 publishers
                </div>
<div className="flex items-center gap-xs">
<button className="p-[6px] text-outline hover:text-on-background disabled:opacity-30 transition-colors" disabled={true}>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest border border-outline-variant text-on-background font-label-sm text-label-sm shadow-ambient-1">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-variant text-on-surface-variant transition-colors font-label-sm text-label-sm">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-variant text-on-surface-variant transition-colors font-label-sm text-label-sm">3</button>
<span className="px-xs text-on-surface-variant font-label-sm text-label-sm">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-variant text-on-surface-variant transition-colors font-label-sm text-label-sm">12</button>
<button className="p-[6px] text-on-surface-variant hover:text-on-background transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</section>
</main>
{/* Footer Shell */}
<Footer />
    </>
  );
}
