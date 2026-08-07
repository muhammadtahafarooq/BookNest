import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './BlogManagementBooknestPublishingRoom.css';

export default function BlogManagementBooknestPublishingRoom() {
    const navigate = useNavigate();
  return (
    <>
      {/* Side Navigation Shell */}
<nav aria-label="Sidebar Navigation" className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-primary-container z-50 py-margin-desktop shadow-md transition-all duration-200">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>book</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg font-bold text-surface-bright leading-none">BookNest</h1>
<p className="font-label-sm text-label-sm text-on-primary-container mt-1">Admin Console</p>
</div>
</div>
<div className="flex-1 px-4 space-y-1">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
<Link className="flex items-center gap-3 text-secondary-fixed-dim font-bold border-l-4 border-secondary-fixed-dim pl-4 py-3 bg-on-primary-fixed-variant rounded-r-lg opacity-90 transition-all duration-200" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</div>
<div className="px-6 mt-8">
<button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-3 rounded-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-400 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">add</span>
                Add New Title
            </button>
</div>
<div className="px-4 mt-8 space-y-1">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 rounded-lg hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-md text-label-md">Support</span>
</Link>
</div>
</nav>
{/* Main Canvas */}
<main className="flex-1 ml-0 md:ml-64 min-h-screen relative overflow-hidden flex flex-col">
{/* Top App Bar */}
{/* <Navbar /> */}
<Navbar />
{/* Content Area */}
<div className="pt-28 px-margin-mobile md:px-margin-desktop pb-12 flex-1 max-w-container-max-width w-full mx-auto flex flex-col md:flex-row gap-gutter">
{/* Article List (Main View) */}
<div className="flex-1 flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-variant overflow-hidden">
{/* Toolbar */}
<div className="p-6 border-b border-surface-variant flex flex-wrap items-center justify-between gap-4 bg-surface-muted">
<div className="flex items-center gap-3">
<select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-1.5 font-label-md text-label-md text-on-surface focus:ring-2 focus:ring-secondary outline-none">
<option>All Categories</option>
<option>Fiction Trends</option>
<option>Author Interviews</option>
<option>Industry News</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-1.5 font-label-md text-label-md text-on-surface focus:ring-2 focus:ring-secondary outline-none">
<option>All Authors</option>
<option>Sarah Jenkins</option>
<option>Marcus Cole</option>
</select>
</div>
</div>
{/* Table */}
<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-variant bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="p-4 font-medium pl-6">Article</th>
<th className="p-4 font-medium">Author</th>
<th className="p-4 font-medium">Date</th>
<th className="p-4 font-medium">Status</th>
<th className="p-4 font-medium text-right pr-6">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant font-body-sm text-body-sm text-on-surface">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors duration-200 group cursor-pointer">
<td className="p-4 pl-6">
<div className="flex items-center gap-4">
<div className="w-16 h-12 rounded bg-surface-variant overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="A close up shot of an antique typewriter on a wooden desk, soft warm lighting, shallow depth of field, conveying a sense of classic literature and storytelling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAQWCP7vQ2Qbp45GGFA1zNCpn8zehptC2Kxb-rrp83aNmt4_5Mt6AVq22fWidEecQEwjeAKpp_Sf5PC-Isms0CUNikSUj_gl_O_WZIVS_ilUYkkJBdLf6_aGcyM8r6KRiQZc28zpoM5F5_kyKyTJ8p69MRTo9gdHGt6vdXyQnTL0ZWZLAlVz2kJNtNhpLmPRXZ_jlHIEZKneErO1xSUAkRb3MAH7kjl-QKh60FyEQzrozJhNwrVw9" />
</div>
<div>
<p className="font-headline-md text-body-md font-semibold text-on-surface line-clamp-1">The Resurgence of Print in a Digital Age</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Industry News</p>
</div>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-fixed-dim text-on-primary-fixed text-xs flex items-center justify-center font-bold">SJ</div>
<span>Sarah Jenkins</span>
</div>
</td>
<td className="p-4 text-on-surface-variant font-label-md">Oct 24, 2023</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm">Published</span>
</td>
<td className="p-4 text-right pr-6">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-1 text-on-surface-variant hover:text-secondary"><span className="material-symbols-outlined text-[20px]">edit</span></button>
<button className="p-1 text-on-surface-variant hover:text-secondary"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors duration-200 group cursor-pointer">
<td className="p-4 pl-6">
<div className="flex items-center gap-4">
<div className="w-16 h-12 rounded bg-surface-variant overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="A modern minimalist bookshelf with perfectly aligned colorful spines, brightly lit room, clean architectural lines, conveying organization and modern publishing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACk2DLh3A_qHrmqGfFiOWZpsG3mpW7LOh_W-dy_GBc1gqshkfmToEKoU1M8cXzNJjEC7T6O9ST0RLS1za_1c_gmv5gZS9J86jUsDI1pdxge4gTi4Lr5FI20vkvCW_bjEl19fHWDMxh93ILgSgzBtjhOEiTcOJSczX0xFs3izsMb0ezUKyYvneiMUQuDK_u4va17UWMvWVjLVAOWn2dM0RSohlSYghdjAkM2uIsyRPJL-I5T8EbgOv4" />
</div>
<div>
<p className="font-headline-md text-body-md font-semibold text-on-surface line-clamp-1">Interview: Bestselling Author Marcus Cole</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Author Spotlights</p>
</div>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-xs flex items-center justify-center font-bold">EL</div>
<span>Emma Lin</span>
</div>
</td>
<td className="p-4 text-on-surface-variant font-label-md">Oct 28, 2023</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-warning-amber/10 text-warning-amber font-label-sm text-label-sm">Draft</span>
</td>
<td className="p-4 text-right pr-6">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-1 text-on-surface-variant hover:text-secondary"><span className="material-symbols-outlined text-[20px]">edit</span></button>
<button className="p-1 text-on-surface-variant hover:text-secondary"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Editor Preview Panel (Right Side Drawer concept) */}
<aside className="w-full md:w-96 shrink-0 flex flex-col gap-6">
{/* Publish Controls Card */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-variant p-6">
<h3 className="font-headline-md text-body-lg font-semibold mb-4 text-on-surface">Publishing Options</h3>
<div className="space-y-4">
<button className="w-full py-2.5 px-4 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant hover:bg-surface-container transition-colors duration-200">Save as Draft</button>
<button className="w-full py-2.5 px-4 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant hover:bg-surface-container transition-colors duration-200">Schedule...</button>
<button className="w-full py-2.5 px-4 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:bg-secondary-container transition-colors duration-200 shadow-sm">Publish Now</button>
</div>
</div>
{/* Editor Preview Card */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-variant p-6 flex-1 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">Quick Edit Preview</h3>
<button className="text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">open_in_full</span></button>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-6">
{/* Cover Image Upload Area */}
<div className="w-full h-32 rounded-lg border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-on-surface-variant bg-surface-muted hover:bg-surface-container-low transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-[28px] mb-2 group-hover:text-secondary transition-colors">add_photo_alternate</span>
<span className="font-label-sm text-label-sm">Upload Cover Image</span>
</div>
{/* Title Input */}
<input className="w-full text-headline-md font-headline-md font-bold text-on-surface border-none bg-transparent p-0 focus:ring-0 placeholder:text-outline-variant" placeholder="Article Title..." type="text" defaultValue="The Resurgence of Print" />
{/* Content Area (Mock) */}
<div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<p>In an era dominated by screens and immediate digital gratification, a surprising trend is steadily gathering momentum: the return of physical books. The tactile sensation of turning a page...</p>
<div className="h-24 w-full bg-surface-container-low rounded border border-surface-variant flex items-center justify-center text-outline">
<span className="material-symbols-outlined">format_quote</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>
    </>
  );
}
