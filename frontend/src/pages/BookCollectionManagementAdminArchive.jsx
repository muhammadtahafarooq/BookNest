import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './BookCollectionManagementAdminArchive.css';

export default function BookCollectionManagementAdminArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* Sidebar */}
<aside className="w-64 bg-midnight-ink flex-shrink-0 h-full flex flex-col hidden md:flex transition-all duration-300">
<div className="h-20 flex items-center px-6 border-b border-white/10">
<span className="font-fraunces text-2xl text-white font-bold tracking-tight">BookNest</span>
</div>
<nav className="flex-1 overflow-y-auto custom-scrollbar py-6 px-4 space-y-1">
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">dashboard</span>
<span className="font-inter text-sm font-medium">Dashboard</span>
</Link>
<Link className="flex items-center px-4 py-3 text-antique-brass bg-antique-brass/10 rounded-lg transition-colors group relative overflow-hidden" to="/catalogarchive">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-antique-brass rounded-r-full"></div>
<span className="material-symbols-outlined mr-3 text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>book</span>
<span className="font-inter text-sm font-medium">Books</span>
</Link>
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">category</span>
<span className="font-inter text-sm font-medium">Categories</span>
</Link>
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/aboutusourstorybooknest">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">history_edu</span>
<span className="font-inter text-sm font-medium">Authors</span>
</Link>
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">inventory_2</span>
<span className="font-inter text-sm font-medium">Inventory</span>
</Link>
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">receipt_long</span>
<span className="font-inter text-sm font-medium">Orders</span>
</Link>
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">group</span>
<span className="font-inter text-sm font-medium">Customers</span>
</Link>
</nav>
<div className="p-4 border-t border-white/10">
<Link className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-[20px] group-hover:text-white transition-colors">settings</span>
<span className="font-inter text-sm font-medium">Settings</span>
</Link>
<div className="mt-4 flex items-center px-4">
<img className="w-8 h-8 rounded-full object-cover border border-white/20" data-alt="A professional headshot of a distinguished librarian with silver hair and wire-rimmed glasses, soft natural lighting highlighting their features against a dark, out-of-focus background of ancient bookshelves. The mood is wise and approachable, with high-end corporate portraiture aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-IvHV0Do7tDz-7zbe5XxJQTfX3_fubbOAprnHU5cKqRKk3T2Ml-Q_hRUdwCDqBmAk9JsPVk5qRbcplw0ENcFOsE9k_PAopjnzIsFh14YwtTejqKy6WbOcYtVWdNOOILPo1-k3wDdqjJGEQAasvjUTl5GjYQ9ECiY-ZBDzUZR7RX18UybwfdAYetyw-688yDNI8BOt4mWn6XbowP4xSlU2Lv7PHQPALr3DcvxEhFloDndUsFiXmv-1" />
<div className="ml-3">
<p className="text-white text-xs font-medium">Eleanor Vance</p>
<p className="text-white/50 text-[10px]">Head Archivist</p>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col h-full bg-paper-mist overflow-hidden relative z-0">
{/* TopAppBar Placeholder (Hidden on desktop sidebar layout, but keeping semantic structure) */}
{/* <Navbar /> */}
<Navbar />
{/* Page Header & Actions */}
<div className="px-8 py-8 flex-shrink-0 z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h1 className="font-fraunces text-4xl text-midnight-ink font-semibold tracking-tight mb-2">Book Collection</h1>
<p className="font-inter text-sm text-on-surface-variant max-w-2xl">Manage the archive, update inventory status, and curate the digital library collection.</p>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-4 flex items-center justify-center gap-2 rounded-xl bg-white border border-outline-variant/50 text-midnight-ink text-sm font-medium hover:bg-surface-muted hover:shadow-ambient transition-all focus:outline-none focus:ring-2 focus:ring-secondary/20">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
<button className="h-10 px-5 flex items-center justify-center gap-2 rounded-xl bg-[#C89B3C] text-white text-sm font-medium hover:bg-[#b38a34] hover:shadow-ambient transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Add New Book
                    </button>
</div>
</div>
{/* Filters & Search Toolbar */}
<div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-ambient border border-outline-variant/20">
<div className="relative flex-1 w-full">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-muted border border-outline-variant/40 text-sm focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all text-midnight-ink font-inter placeholder:text-outline/70" placeholder="Search by title, author, or ISBN..." type="text" />
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative group">
<select className="h-11 pl-4 pr-10 appearance-none rounded-lg bg-white border border-outline-variant/40 text-sm text-midnight-ink font-medium focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all cursor-pointer hover:bg-surface-muted min-w-[140px]">
<option value={true}>All Genres</option>
<option value="fiction">Literary Fiction</option>
<option value="history">History</option>
<option value="science">Science</option>
<option value="rare">Rare Antiquities</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
<div className="relative group">
<select className="h-11 pl-4 pr-10 appearance-none rounded-lg bg-white border border-outline-variant/40 text-sm text-midnight-ink font-medium focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all cursor-pointer hover:bg-surface-muted min-w-[140px]">
<option value={true}>Status</option>
<option value="active">Active</option>
<option value="preorder">Pre-order</option>
<option value="outofstock">Out of Stock</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
<button className="h-11 w-11 flex items-center justify-center rounded-lg bg-white border border-outline-variant/40 text-on-surface-variant hover:bg-surface-muted transition-all tooltip-trigger relative">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
</div>
{/* Table Canvas */}
<div className="flex-1 overflow-hidden px-8 pb-8 z-0">
<div className="h-full bg-white rounded-xl shadow-ambient border border-outline-variant/20 flex flex-col overflow-hidden">
{/* Table Header */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-surface-variant bg-surface-muted/50 items-center">
<div className="col-span-1 flex justify-center">
<div className="w-4 h-4 rounded border border-outline-variant cursor-pointer hover:border-secondary transition-colors relative"></div>
</div>
<div className="col-span-4 font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Book</div>
<div className="col-span-2 font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Category</div>
<div className="col-span-2 font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Price &amp; Stock</div>
<div className="col-span-2 font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Status</div>
<div className="col-span-1 font-inter text-xs font-semibold text-on-surface-variant uppercase tracking-wider text-right">Actions</div>
</div>
{/* Table Body (Scrollable) */}
<div className="flex-1 overflow-y-auto custom-scrollbar">
{/* Row 1 */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-surface-variant/60 hover:bg-surface-muted/30 transition-colors items-center group">
<div className="col-span-1 flex justify-center">
<div className="w-4 h-4 rounded border border-outline-variant cursor-pointer hover:border-secondary transition-colors relative"></div>
</div>
<div className="col-span-4 flex items-center gap-4">
<div className="relative w-12 h-16 rounded shadow-md overflow-hidden bg-surface-variant flex-shrink-0 border border-outline-variant/10 group-hover:shadow-elevated transition-shadow duration-300">
<img className="w-full h-full object-cover" data-alt="A high-end book cover design featuring an elegant serif typography title 'The Atlas of Dreams' over a deep navy blue background with subtle gold foil geometric constellations. The style is modern minimalist yet classic, reminiscent of premium boutique publishing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1LlCm2mepZolISoPU8R1oEL0I_2zsXjaQB6UEjvtOzmaDDVZcw6RnyL3iWlRXRn8wFVy_3qPjv64jKlx9T15XYkrBdTUP74DW9vuDuxiMP96R7lqVEBu6pwsua7q8z6VxbBg6jqZUAaQ1TVDKzDMnV_cPsgsad5QtKmqHY7Qyq7xHjaEWVPYJdTHs5gp2sO5KVM8lBKJIgIPNA5EhXXZFB0jFGIEhfdZG4Bp6_5yuXJNmXG-PXPcU" />
</div>
<div>
<h3 className="font-fraunces text-base font-semibold text-midnight-ink mb-0.5 truncate pr-4">The Atlas of Dreams</h3>
<p className="font-inter text-sm text-on-surface-variant">Isabella Rossi</p>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface-variant/50 text-on-surface-variant border border-outline-variant/20 font-jetbrainsMono tracking-wide">
                                FICTION
                            </span>
</div>
<div className="col-span-2 flex flex-col justify-center gap-1.5">
<span className="font-jetbrainsMono text-sm font-semibold text-[#C89B3C]">$45.00</span>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-success-emerald rounded-full" style={{width: '85%'}}></div>
</div>
<span className="font-inter text-xs text-on-surface-variant">124</span>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success-emerald/10 text-success-emerald">
<span className="w-1.5 h-1.5 rounded-full bg-success-emerald"></span>
                                Active
                            </span>
</div>
<div className="col-span-1 flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded-md transition-colors" title="Edit">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-danger-rose hover:bg-danger-rose/10 rounded-md transition-colors" title="Archive">
<span className="material-symbols-outlined text-[18px]">inventory_2</span>
</button>
</div>
</div>
{/* Row 2 */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-surface-variant/60 hover:bg-surface-muted/30 transition-colors items-center group">
<div className="col-span-1 flex justify-center">
<div className="w-4 h-4 rounded border border-outline-variant cursor-pointer hover:border-secondary transition-colors relative"></div>
</div>
<div className="col-span-4 flex items-center gap-4">
<div className="relative w-12 h-16 rounded shadow-md overflow-hidden bg-surface-variant flex-shrink-0 border border-outline-variant/10 group-hover:shadow-elevated transition-shadow duration-300">
<img className="w-full h-full object-cover" data-alt="A striking minimalist book cover for a title called 'Silent Architecture'. The design features austere concrete textures with stark black modern sans-serif typography running vertically. A solitary bright orange square provides a single point of contrast. Premium architectural editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaQTzXEUu0Pl0CDtA02S9acVerUfOxGTCxJxf3gmok2l38M6eDBFDRX1Zthks9c7rrcvgOlNovbF7t0rZ53Bt9Wy4lbrLJvKcYaIX37rAknUcd4A82gTu3ioDxDms_YkTTMRDooA_3fOHs4cnFeuDKr0P4cn1ESZY0dysIiqr6gSocUQqm2SHD9Ii5c3EAd-xxLsRUZSG15ZPwis2Gb0XPCZrxSGu1KRDOllzzQu9K7WnTYBxiO4mm" />
</div>
<div>
<h3 className="font-fraunces text-base font-semibold text-midnight-ink mb-0.5 truncate pr-4">Silent Architecture</h3>
<p className="font-inter text-sm text-on-surface-variant">Marcus Chen</p>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface-variant/50 text-on-surface-variant border border-outline-variant/20 font-jetbrainsMono tracking-wide">
                                NON-FICTION
                            </span>
</div>
<div className="col-span-2 flex flex-col justify-center gap-1.5">
<span className="font-jetbrainsMono text-sm font-semibold text-[#C89B3C]">$85.00</span>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-danger-rose rounded-full" style={{width: '5%'}}></div>
</div>
<span className="font-inter text-xs text-danger-rose font-medium">2</span>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-warning-amber/10 text-warning-amber">
<span className="w-1.5 h-1.5 rounded-full bg-warning-amber"></span>
                                Low Stock
                            </span>
</div>
<div className="col-span-1 flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded-md transition-colors" title="Edit">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-danger-rose hover:bg-danger-rose/10 rounded-md transition-colors" title="Archive">
<span className="material-symbols-outlined text-[18px]">inventory_2</span>
</button>
</div>
</div>
{/* Row 3 */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-surface-variant/60 hover:bg-surface-muted/30 transition-colors items-center group opacity-75">
<div className="col-span-1 flex justify-center">
<div className="w-4 h-4 rounded border border-outline-variant cursor-pointer hover:border-secondary transition-colors relative"></div>
</div>
<div className="col-span-4 flex items-center gap-4">
<div className="relative w-12 h-16 rounded shadow-sm overflow-hidden bg-surface-variant flex-shrink-0 border border-outline-variant/10 grayscale">
<img className="w-full h-full object-cover" data-alt="An antique-style book cover with faded leather textures and embossed gold lettering reading 'Botanical Illustrations 1892'. The design looks aged and precious, fitting for a rare collections section in a high-end digital archive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHL7G8X6iqVdMNef9IxAydX9esZg96Jg-dUYmCjzSZUiEsXRirr6d4CJ10zkpXYXtR6L1GvqfFYpyrNz_paeq4ElW24OipwuYnXVstHopJfHKIQpEz25OvverkD6EnK55wdKWcyqRLYuH86GupEg1Igapb17q1Lk-04E50HF5ILk2YW7KfF78AZuyE5pidvKSKSU8uNziHta7ysYp2K4MfLYZudRH32kSrwc5eCllb1YsvMyifTm9I" />
</div>
<div>
<h3 className="font-fraunces text-base font-semibold text-midnight-ink mb-0.5 truncate pr-4">Botanical Illustrations</h3>
<p className="font-inter text-sm text-on-surface-variant">Archibald Smith</p>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface-variant/50 text-on-surface-variant border border-outline-variant/20 font-jetbrainsMono tracking-wide">
                                RARE FINDS
                            </span>
</div>
<div className="col-span-2 flex flex-col justify-center gap-1.5">
<span className="font-jetbrainsMono text-sm font-semibold text-outline-variant">$350.00</span>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-outline-variant rounded-full" style={{width: '0%'}}></div>
</div>
<span className="font-inter text-xs text-outline">0</span>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-variant text-outline">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                Out of Stock
                            </span>
</div>
<div className="col-span-1 flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded-md transition-colors" title="Edit">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded-md transition-colors" title="Restock" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Pagination Footer */}
<div className="px-6 py-4 border-t border-surface-variant bg-white flex items-center justify-between">
<span className="font-inter text-sm text-on-surface-variant">Showing 1 to 10 of 4,289 entries</span>
<div className="flex items-center gap-2">
<button className="h-8 px-3 flex items-center justify-center rounded-lg border border-outline-variant/40 text-sm font-medium text-midnight-ink hover:bg-surface-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-midnight-ink text-white text-sm font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-muted text-midnight-ink text-sm font-medium transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-muted text-midnight-ink text-sm font-medium transition-colors">3</button>
<span className="w-8 h-8 flex items-center justify-center text-outline">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-muted text-midnight-ink text-sm font-medium transition-colors">42</button>
</div>
<button className="h-8 px-3 flex items-center justify-center rounded-lg border border-outline-variant/40 text-sm font-medium text-midnight-ink hover:bg-surface-muted transition-colors">
                            Next
                        </button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
