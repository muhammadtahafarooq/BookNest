import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './AuthorManagementBooknestAdminArchive.css';

export default function AuthorManagementBooknestAdminArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar (JSON Component) */}
<nav className="fixed left-0 top-0 h-screen flex flex-col py-margin-desktop bg-primary-container dark:bg-primary-container text-secondary-fixed dark:text-secondary-fixed-dim docked h-full w-64 left-0 top-0 shadow-md bg-midnight-ink hidden md:flex z-50">
<div className="px-6 mb-8 flex flex-col gap-1">
<h1 className="font-headline-lg text-headline-lg font-bold text-surface-bright">BookNest</h1>
<p className="font-body-sm text-body-sm text-on-primary-container opacity-80">Admin Console</p>
</div>
<div className="flex-grow overflow-y-auto mt-4 flex flex-col gap-2">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 opacity-90 transition-all duration-200" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined text-lg" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 opacity-90 transition-all duration-200" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined text-lg" data-icon="menu_book">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
{/* Active Tab */}
<Link className="flex items-center gap-3 text-antique-brass font-bold border-l-4 border-antique-brass pl-4 py-3 opacity-90 transition-all duration-200 bg-white/5" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined icon-fill text-lg" data-icon="person_edit">person_edit</span>
<span className="font-label-md text-label-md text-surface-bright">Author Management</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 opacity-90 transition-all duration-200" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined text-lg" data-icon="receipt_long">receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 opacity-90 transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined text-lg" data-icon="group">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 opacity-90 transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined text-lg" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</div>
<div className="px-6 mt-6">
<button className="w-full bg-antique-brass text-midnight-ink font-label-md text-label-md py-3 px-4 rounded-premium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-base">add</span>
                Add New Title
            </button>
</div>
<div className="mt-8 flex flex-col gap-2">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-2 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined text-lg" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
                <Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-2 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/contact">
<span className="material-symbols-outlined text-lg" data-icon="help_outline">help_outline</span>
                    <span className="font-label-md text-label-md">Support</span>
</Link>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-grow flex flex-col md:pl-64 min-h-screen">
{/* TopAppBar (JSON Component) */}
{/* <Navbar /> */}
<Navbar />
{/* Page Canvas */}
<div className="flex-grow pt-28 pb-12 px-margin-mobile md:px-margin-desktop w-full max-w-container-max-width mx-auto">
{/* Page Header Actions */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<div>
<h2 className="font-editorial text-4xl text-midnight-ink font-semibold">Author Archive</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage contributing authors, bios, and publication history.</p>
</div>
<div className="flex gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 rounded-premium border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 bg-white">
<span className="material-symbols-outlined text-sm">filter_list</span> Filter
                    </button>
<button className="flex-1 sm:flex-none px-5 py-2 rounded-premium bg-antique-brass text-midnight-ink font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold shadow-sm" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined text-sm">person_add</span> Add Author
                    </button>
</div>
</div>
{/* Author Grid/Table (Editorial Style) */}
<div className="bg-white rounded-premium border border-outline-variant shadow-sm overflow-hidden flex flex-col relative">
{/* Header Row */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant bg-surface-muted text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<div className="col-span-5 md:col-span-4">Author</div>
<div className="col-span-3 md:col-span-3 hidden sm:block">Specialty</div>
<div className="col-span-3 md:col-span-2 text-center">Titles</div>
<div className="col-span-4 md:col-span-2 text-center">Status</div>
<div className="col-span-3 md:col-span-1 text-right">Actions</div>
</div>
{/* Row 1 */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-surface-container-high items-center hover:bg-surface-muted transition-colors cursor-pointer group" onclick="toggleDetails('author-1')">
<div className="col-span-5 md:col-span-4 flex items-center gap-4">
<img alt="Author" className="w-12 h-12 rounded-full object-cover border border-outline-variant shadow-sm" data-alt="A black and white author portrait of a dignified older gentleman with glasses, shot in a classical studio style with dramatic rim lighting, exuding wisdom and literary depth, 4k." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgaS6l_qGCAESJ12RE-_A6GnX30v-_xp9nbS4SxUSrLtkq5_FSvWuTu1j-UMObliivZAmjN3qEx-42Q9gyqwHcbnrtUAeXMcpXBdRzTohoVFp2uz-05476io_f_ciTjexbyTyzlAptx5qfF6CGtS9soNEGpUExsQu95CTZR_KJA5QWyHuo6d6VFI3BU59N5Z5E3voubxhjxLW2iTNWc2lcDYsmfRfVYEOoeK8abO5F38mi6jLTz_le" />
<div>
<h3 className="font-editorial text-xl text-midnight-ink font-medium group-hover:text-antique-brass transition-colors">Arthur Penhaligon</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Joined 2019</p>
</div>
</div>
<div className="col-span-3 md:col-span-3 hidden sm:block">
<span className="font-body-md text-body-md text-on-surface">Historical Fiction</span>
</div>
<div className="col-span-3 md:col-span-2 text-center">
<span className="font-label-md text-label-md text-midnight-ink font-semibold">14</span>
</div>
<div className="col-span-4 md:col-span-2 flex justify-center">
<span className="px-2.5 py-1 rounded-full bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-success-emerald"></span> Active
                        </span>
</div>
<div className="col-span-3 md:col-span-1 flex justify-end gap-2">
<button className="p-1.5 text-on-surface-variant hover:text-antique-brass transition-colors rounded">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-midnight-ink transition-colors rounded">
<span className="material-symbols-outlined text-xl">more_vert</span>
</button>
</div>
</div>
{/* Expanded Detail Panel (Hidden by default, shown for Row 1 via JS class toggle) */}
<div className="hidden bg-surface-muted border-b border-surface-container-high p-6 flex-col md:flex-row gap-8 shadow-inner" id="author-1-details">
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-3">Biography Snippet</h4>
<p className="font-body-md text-body-md text-on-surface leading-relaxed border-l-2 border-antique-brass pl-4">
                            Arthur Penhaligon is an award-winning author specializing in meticulous historical fiction set during the late Victorian era. His works have been translated into 12 languages and feature heavily in academic reading lists.
                        </p>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-3">Recent Publications</h4>
<ul className="flex flex-col gap-2">
<li className="flex justify-between items-center bg-white p-2 rounded border border-surface-container-high">
<span className="font-body-sm text-body-sm text-midnight-ink font-medium">The Clockwork Crown</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2023</span>
</li>
<li className="flex justify-between items-center bg-white p-2 rounded border border-surface-container-high">
<span className="font-body-sm text-body-sm text-midnight-ink font-medium">Shadows of the Thames</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2021</span>
</li>
</ul>
</div>
<div className="flex flex-col justify-end gap-2 shrink-0">
<button className="px-4 py-2 rounded border border-outline-variant text-on-surface font-label-sm text-label-sm hover:bg-white transition-colors">View Full Profile</button>
</div>
</div>
{/* Row 2 */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-surface-container-high items-center hover:bg-surface-muted transition-colors cursor-pointer group">
<div className="col-span-5 md:col-span-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-midnight-ink flex items-center justify-center text-surface-bright font-editorial text-xl shadow-sm">
                            ES
                        </div>
<div>
<h3 className="font-editorial text-xl text-midnight-ink font-medium group-hover:text-antique-brass transition-colors">Eleanor Vance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Joined 2021</p>
</div>
</div>
<div className="col-span-3 md:col-span-3 hidden sm:block">
<span className="font-body-md text-body-md text-on-surface">Psychological Thriller</span>
</div>
<div className="col-span-3 md:col-span-2 text-center">
<span className="font-label-md text-label-md text-midnight-ink font-semibold">3</span>
</div>
<div className="col-span-4 md:col-span-2 flex justify-center">
<span className="px-2.5 py-1 rounded-full bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-success-emerald"></span> Active
                        </span>
</div>
<div className="col-span-3 md:col-span-1 flex justify-end gap-2">
<button className="p-1.5 text-on-surface-variant hover:text-antique-brass transition-colors rounded">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-midnight-ink transition-colors rounded">
<span className="material-symbols-outlined text-xl">more_vert</span>
</button>
</div>
</div>
{/* Row 3 (Archived) */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-surface-container-high items-center hover:bg-surface-muted transition-colors cursor-pointer group opacity-75">
<div className="col-span-5 md:col-span-4 flex items-center gap-4">
<img alt="Author" className="w-12 h-12 rounded-full object-cover border border-outline-variant shadow-sm grayscale" data-alt="A vintage, slightly sepia-toned author portrait of a woman in 1950s attire looking thoughtfully away from the camera, soft lighting, classic literary vibe, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXU2TVwazK2IAmo_JRIM2jTSl2TADKafuPeNVZjWXMVREYk24fE32RXY0JNdsjLYVznbJ3hFOu6EpTR9-DUqCKn-lzB7rcPxlChJw8okq3RBx4QX6PNeajJRwAHJdtJECdWEOiYvIcTYUM8iosGlr33zkw_i-3f3BfwKC_mK70AHbs96EduR533_3HZf9NGNt5hOfQrtlozbNRiSOHwX15B6pERC2mmkoz49zyzYswwHD8Fam3knPz" />
<div>
<h3 className="font-editorial text-xl text-on-surface-variant font-medium">Margaret St. Clair</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Joined 2015</p>
</div>
</div>
<div className="col-span-3 md:col-span-3 hidden sm:block">
<span className="font-body-md text-body-md text-on-surface-variant">Science Fiction</span>
</div>
<div className="col-span-3 md:col-span-2 text-center">
<span className="font-label-md text-label-md text-on-surface-variant font-semibold">22</span>
</div>
<div className="col-span-4 md:col-span-2 flex justify-center">
<span className="px-2.5 py-1 rounded-full bg-surface-tint/10 text-surface-tint font-label-sm text-label-sm flex items-center gap-1 border border-surface-tint/20">
<span className="w-1.5 h-1.5 rounded-full bg-surface-tint"></span> Archived
                        </span>
</div>
<div className="col-span-3 md:col-span-1 flex justify-end gap-2">
<button className="p-1.5 text-on-surface-variant hover:text-antique-brass transition-colors rounded">
<span className="material-symbols-outlined text-xl">unarchive</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-midnight-ink transition-colors rounded">
<span className="material-symbols-outlined text-xl">more_vert</span>
</button>
</div>
</div>
{/* Pagination Footer */}
<div className="px-6 py-4 bg-white flex justify-between items-center border-t border-outline-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1-3 of 156 Authors</span>
<div className="flex gap-1">
<button className="p-1.5 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-muted disabled:opacity-50"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="px-3 py-1.5 rounded bg-midnight-ink text-surface-bright font-label-sm text-label-sm">1</button>
<button className="px-3 py-1.5 rounded hover:bg-surface-muted text-on-surface font-label-sm text-label-sm">2</button>
<button className="px-3 py-1.5 rounded hover:bg-surface-muted text-on-surface font-label-sm text-label-sm">3</button>
<span className="px-2 py-1.5 text-on-surface-variant">...</span>
<button className="p-1.5 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-muted"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</div>
{/* Bento Stats Widget */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-midnight-ink text-surface-bright rounded-premium p-6 shadow-md relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<span className="material-symbols-outlined text-9xl">menu_book</span>
</div>
<h5 className="font-label-md text-label-md text-surface-dim uppercase tracking-wider mb-2">Total Managed</h5>
<div className="font-editorial text-5xl font-semibold text-antique-brass">156</div>
<p className="font-body-sm text-body-sm mt-2 text-surface-container-highest">+12 this quarter</p>
</div>
<div className="bg-white rounded-premium border border-outline-variant p-6 shadow-sm flex flex-col justify-center">
<h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Active Contracts</h5>
<div className="flex items-end gap-3">
<div className="font-editorial text-4xl font-semibold text-midnight-ink">89%</div>
<div className="font-body-sm text-body-sm text-success-emerald mb-1 flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> 2%</div>
</div>
</div>
<div className="bg-white rounded-premium border border-outline-variant p-6 shadow-sm flex flex-col justify-center">
<h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Needs Review</h5>
<div className="flex items-center gap-4">
<div className="font-editorial text-4xl font-semibold text-warning-amber">7</div>
<button className="px-3 py-1.5 rounded border border-warning-amber text-warning-amber font-label-sm text-label-sm hover:bg-warning-amber/10 transition-colors">Review Now</button>
</div>
</div>
</div>
</div>
</main>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
