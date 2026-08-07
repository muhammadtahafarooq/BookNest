import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './EditorialManagementArchive.css';

export default function EditorialManagementArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar */}
<aside className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface dark:bg-inverse-surface py-lg px-md fixed left-0 top-0 z-20">
<div className="flex items-center gap-3 mb-xl px-2">
<img alt="BookNest Library Insignia" className="w-10 h-10 rounded-full border border-outline-variant object-cover" data-alt="A small, elegant circular insignia depicting an antique feather quill and an open book, rendered in crisp black lines on a textured ivory background, embodying a timeless, scholarly aesthetic suitable for a private library brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3LTOvfhRD6o5YTEcRsizA7z97QGqjVB-_YGcH35GIooLEEQ7lKo2fTNCELRA32OBXFE1lyuzQ7XWHAAxSm9fVf18IrVBUOk1Zec_wcM1qfsAYkwydiP6O9EdbpSeTATvwhY6mU71rhV01-xRWIQF9f_9XvjUr87D2YZkbYEecU1-8IcM6rKuBDy5Mox0J7ybvBgorFgXlpGhmXB4cfQp62_kvuIovF3db-vFs--5yjlepJ3c1P89xcQ" />
<div>
<h1 className="font-headline-md text-headline-md text-primary dark:text-inverse-primary tracking-tight">BookNest</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant">Editorial Management</p>
</div>
</div>
<nav className="flex-1 space-y-2">
{/* Active Navigation Item */}
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container-high transition-colors duration-200 opacity-80 scale-95" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>menu_book</span>
<span className="font-label-md text-label-md">Article Registry</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-colors duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined">badge</span>
<span className="font-label-md text-label-md">Staff Registry</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-colors duration-200" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-label-md text-label-md">Inventory Control</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-colors duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined">insights</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-colors duration-200" to="/aboutusourstorybooknest">
<span className="material-symbols-outlined">history</span>
<span className="font-label-md text-label-md">Archives</span>
</Link>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant space-y-2">
<Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-colors duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-colors duration-200" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-md text-label-md">Support</span>
</Link>
</div>
</aside>
{/* Main Content Area Wrapper */}
<div className="flex-1 flex flex-col md:ml-64 w-full">
{/* TopAppBar */}
<header className="flex justify-between items-center px-gutter w-full bg-surface dark:bg-surface-dim docked full-width top-0 h-16 border-b border-outline-variant dark:border-outline shadow-sm z-10 sticky">
<div className="flex items-center gap-8">
<span className="font-headline-sm text-headline-sm text-primary font-bold md:hidden">BookNest</span>
<nav className="hidden md:flex gap-6">
<Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/dashboard/customerdashboardmypersonalbookshelf">Dashboard</Link>
<Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/shopbrowsebooks">Workflows</Link>
<Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1 scale-98" to="/shopbrowsebooks">Peer Review</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="bg-surface-container-lowest border border-outline-variant rounded-full py-1.5 px-4 pl-10 text-body-md focus:border-primary focus:ring-0 w-64 transition-colors" placeholder="Search archives..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant text-sm">search</span>
</div>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/* Main Workspace */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface max-w-[1280px] mx-auto w-full">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-xl gap-4">
<div>
<h2 className="font-display-lg text-display-lg text-primary mb-2">Editorial Management</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage your library's stories and archives.</p>
</div>
<button className="btn-brass font-label-md text-label-md px-6 py-3 rounded-md flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                    New Manuscript
                </button>
</div>
{/* Bento Grid Layout for Main Content */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* Article List (Takes up left 8 columns) */}
<div className="lg:col-span-8 bg-surface-container-lowest shadow-ambient-lvl1 rounded-xl p-lg flex flex-col h-[700px]">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant">
<h3 className="font-headline-sm text-headline-sm text-primary">Editorial Archive</h3>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded-md hover:border-primary transition-colors text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
<button className="p-2 border border-outline-variant rounded-md hover:border-primary transition-colors text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">sort</span>
</button>
</div>
</div>
{/* Table */}
<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant text-label-sm font-label-sm text-on-surface-variant">
<th className="pb-3 font-medium">Manuscript Title</th>
<th className="pb-3 font-medium hidden sm:table-cell">Author</th>
<th className="pb-3 font-medium">Archival Status</th>
<th className="pb-3 font-medium text-right">Date Modified</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md">
{/* Row 1 */}
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4">
<div className="font-headline-sm text-headline-sm text-primary text-lg">The Silent Meridian</div>
</td>
<td className="py-4 text-on-surface-variant hidden sm:table-cell">E. R. Thorne</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-[#191c1e] text-white">Published</span>
</td>
<td className="py-4 text-right text-on-surface-variant font-label-sm text-label-sm">Oct 24, 1899</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-outline-variant bg-surface-container hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4">
<div className="font-headline-sm text-headline-sm text-primary text-lg">Echoes of the Antiquary</div>
</td>
<td className="py-4 text-on-surface-variant hidden sm:table-cell">A. J. Vance</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm border border-outline text-on-surface-variant">Draft</span>
</td>
<td className="py-4 text-right text-on-surface-variant font-label-sm text-label-sm">Nov 02, 1901</td>
</tr>
{/* Row 3 */}
<tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4">
<div className="font-headline-sm text-headline-sm text-primary text-lg">Whispers in the Stacks</div>
</td>
<td className="py-4 text-on-surface-variant hidden sm:table-cell">M. L. Sterling</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-variant text-on-surface">Under Review</span>
</td>
<td className="py-4 text-right text-on-surface-variant font-label-sm text-label-sm">Yesterday</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4">
<div className="font-headline-sm text-headline-sm text-primary text-lg">The Clockwork Bindery</div>
</td>
<td className="py-4 text-on-surface-variant hidden sm:table-cell">H. C. Penhaligon</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-variant text-on-surface">Under Review</span>
</td>
<td className="py-4 text-right text-on-surface-variant font-label-sm text-label-sm">Today</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Focused Editor Panel (Right 4 Columns) */}
<div className="lg:col-span-4 bg-surface-container-lowest shadow-ambient-lvl2 rounded-xl border border-outline-variant flex flex-col h-[700px] overflow-hidden relative">
{/* Cover Image Placeholder */}
<div className="h-48 w-full bg-surface-container-high relative border-b border-outline-variant flex items-center justify-center group cursor-pointer" data-alt="A softly lit, empty wooden desk surface viewed from above, scattered with faint, elegant watermark patterns resembling antique map lines. The scene is illuminated by warm, indirect light, creating a calm, inspiring atmosphere for writing. The color palette consists of rich mahoganies and creamy ivories." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDL1LoNxpKw9AdOCFd1t_t4xrULbKZEb2BkFeqKBoYIoVGVtvAzoes-SFJYvgvA7K30OyCXUkUDUb5i8_YZg8xWBzq0WoRydt-RK0c-3GIpcSrGFCyHctc9XFYeyeqM3Y36SVylkoq6tmi6ppU87K-b_-HE2in7iHLsIYyjnIEf1_lvIGp9fPzaajy3TTSnpb6OK2tm40hjWhgqoj5jSZemEDIMdsuE4mVKj6Dx8i1RiiaK26ozuzge4g\')'}}>
<div className="absolute inset-0 bg-surface/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
<span className="material-symbols-outlined text-primary text-3xl">add_photo_alternate</span>
</div>
</div>
<div className="p-lg flex-1 overflow-y-auto space-y-6">
{/* Metadata Fields */}
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Manuscript Title</label>
<input className="w-full bg-transparent border-none p-0 font-headline-sm text-headline-sm text-primary focus:ring-0 placeholder:text-outline-variant" type="text" defaultValue="Echoes of the Antiquary" />
<div className="h-px w-full bg-outline-variant mt-1"></div>
</div>
</div>
{/* Content Editor Area */}
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wider">Draft Content</label>
<div className="bg-surface p-4 rounded border border-outline-variant font-headline-md text-headline-md min-h-[150px] text-on-surface-variant text-base leading-relaxed focus:outline-none" contentEditable="true">
                                The dusty tomes spoke in hushed tones, their leather bindings cracking with the weight of centuries...
                            </div>
</div>
{/* SEO & Metadata Sidebar Section */}
<div className="pt-6 border-t border-outline-variant space-y-4">
<h4 className="font-label-md text-label-md text-primary">SEO &amp; Indexing Metadata</h4>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">URL Slug</label>
<input className="w-full bg-surface border border-outline-variant rounded p-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors" type="text" defaultValue="/archives/echoes-antiquary" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Meta Description</label>
<textarea className="w-full bg-surface border border-outline-variant rounded p-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors resize-none" rows="2">An exploration into the forgotten artifacts of the early 19th century.</textarea>
</div>
</div>
</div>
{/* Editor Footer Actions */}
<div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
<button className="px-4 py-2 border border-outline-variant rounded-md font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors">Save Draft</button>
<button className="btn-brass px-4 py-2 rounded-md font-label-md text-label-md">Publish</button>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}
