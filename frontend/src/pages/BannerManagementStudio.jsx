import React from 'react';
import './BannerManagementStudio.css';

export default function BannerManagementStudio() {
  return (
    <>
      {/* Sidebar: Marketing Intent implies Marketing Tab is Active */}
<nav className="flex flex-col h-screen fixed left-0 top-0 py-xl px-md bg-primary-container dark:bg-primary-container border-r border-outline-variant dark:border-outline shadow-md docked left-0 h-full w-64 z-50">
<div className="mb-xl px-md">
<h1 className="font-display-lg text-headline-md text-on-primary-fixed dark:text-primary-fixed-dim tracking-tight">The Archive</h1>
<p className="font-label-sm text-label-sm text-on-primary-container mt-xs">Institutional Access</p>
</div>
<ul className="flex flex-col gap-sm flex-1 font-label-md text-label-md">
<li>
<a className="flex items-center gap-md text-on-primary-container dark:text-on-primary-fixed-variant px-md py-sm hover:bg-surface-variant/10 dark:hover:bg-surface-variant/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-95 transition-transform duration-150" data-icon="menu_book">menu_book</span>
                    Library Archive
                </a>
</li>
<li>
<a className="flex items-center gap-md text-on-primary-container dark:text-on-primary-fixed-variant px-md py-sm hover:bg-surface-variant/10 dark:hover:bg-surface-variant/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-95 transition-transform duration-150" data-icon="inventory_2">inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-md text-on-primary-container dark:text-on-primary-fixed-variant px-md py-sm hover:bg-surface-variant/10 dark:hover:bg-surface-variant/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-95 transition-transform duration-150" data-icon="badge">badge</span>
                    Staff Registry
                </a>
</li>
<li>
<a className="flex items-center gap-md bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-lg px-md py-sm group active:scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined text-xl" data-icon="campaign" style={{fontVariationSettings: '\'FILL\' 1'}}>campaign</span>
                    Marketing
                </a>
</li>
<li>
<a className="flex items-center gap-md text-on-primary-container dark:text-on-primary-fixed-variant px-md py-sm hover:bg-surface-variant/10 dark:hover:bg-surface-variant/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-95 transition-transform duration-150" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="mt-auto pt-lg border-t border-on-primary-container/20">
<button className="w-full mb-md brass-gradient text-primary font-label-md text-label-md py-sm px-md rounded-DEFAULT shadow-sm hover:brightness-110 transition-all flex items-center justify-center gap-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                New Acquisition
            </button>
<ul className="flex flex-col gap-sm font-label-md text-label-md">
<li>
<a className="flex items-center gap-md text-on-primary-container px-md py-sm hover:bg-surface-variant/10 transition-colors" href="#">
<span className="material-symbols-outlined text-xl" data-icon="help">help</span> Support
                    </a>
</li>
<li>
<a className="flex items-center gap-md text-on-primary-container px-md py-sm hover:bg-surface-variant/10 transition-colors" href="#">
<span className="material-symbols-outlined text-xl" data-icon="logout">logout</span> Log Out
                    </a>
</li>
</ul>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 ml-64 min-h-screen flex flex-col bg-background">
{/* Top App Bar */}
<header className="flex justify-between items-center w-full px-xxl h-20 bg-background dark:bg-surface border-b border-outline-variant dark:border-outline flat no shadows docked top-0 full-width sticky z-40">
<div className="flex items-center gap-xl">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-on-surface tracking-tight">Lexicon Manager</span>
<nav className="hidden md:flex gap-md h-full items-center">
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md h-full flex items-center px-sm" href="#">Promotions</a>
<a className="text-primary font-bold border-b-2 border-primary hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md h-full flex items-center px-sm" href="#">Banners</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md h-full flex items-center px-sm" href="#">Newsletters</a>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" data-icon="search">search</span>
<input className="input-editorial pl-xl pr-sm py-xs rounded-full text-label-sm font-label-sm w-48 focus:w-64 transition-all bg-surface-container-low border-none" placeholder="Search resources..." type="text" />
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-variant focus:outline-none ring-1 ring-outline">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-variant focus:outline-none ring-1 ring-outline">
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-sm cursor-pointer">
<img alt="Administrator Avatar" className="w-full h-full object-cover" data-alt="A distinguished black and white portrait of a librarian administrator in sharp focus, classic lighting, conveying authority and intellect in a modern digital library context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuztgY4nEoC5WQXZZg8mi95_MHdenVzC5tNehNC11aaUaVR8rJ8yM4fY0_F3z7Zc1prMKihwjUOZxf3pvvnLlKuPUPPbjBB5m_KcCIE47PbA78ICNqatNfH0Naq9ieUkFwQDbq7SOJxDw22tsJc7R2nA_W2DbyhHcip3tmt94hPodWbXkQyCRtqHqtLNH9gPHNJBmKQ477lagFKFGse804uoTixhGFhe_yYHsLdTqPswitR2WRnBiXFQ" />
</div>
</div>
</header>
{/* Workspace */}
<div className="flex-1 p-margin-desktop grid grid-cols-12 gap-gutter max-w-[1600px] mx-auto w-full">
{/* Header & List Section (Left Column) */}
<div className="col-span-12 xl:col-span-4 flex flex-col gap-lg h-full">
<div className="flex justify-between items-end mb-sm">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Banner Content Studio</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Curate and schedule visual campaigns across the archive.</p>
</div>
</div>
{/* List Card */}
<div className="bg-surface-container-lowest rounded-xl border border-surface-dim ambient-shadow-1 overflow-hidden flex-1 flex flex-col">
<div className="p-md border-b border-surface-dim bg-surface-container-low flex justify-between items-center">
<span className="font-label-md text-label-md text-primary">Active Campaigns</span>
<button className="text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
</button>
</div>
<div className="overflow-y-auto flex-1 p-sm">
{/* Item 1 (Active) */}
<div className="group flex items-center justify-between p-md rounded-lg bg-surface-container-low border border-outline-variant mb-sm cursor-pointer hover:ambient-shadow-2 transition-all">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-DEFAULT overflow-hidden border border-surface-dim">
<img className="w-full h-full object-cover" data-alt="A moody, high-contrast flat lay of classic leather-bound books mixed with modern minimalist typography on aged paper, conveying a premium editorial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjDkWv0RPJSLO4hYIkWKtHfk2pHAaRra9oNF_LC38MWbSgMDGF9wIs_xtkj9gft66FwjZ-6bXvpQUhfF1LXjIVm0ElaH1myvuS77dG0F_vLYW91EquqBt1lDjkKLhP0v3LTZtCsHTeYJlUJUX_rVndPJA2_1ZBjAsmb6d7W4RHJ-0OyNjkBGWGzVRE65Pdfvhp95EaxzLUuaFhBWrYMMiIv3tOi5vfq8Qh8QhtxRGRvmH0cIZCkr9HQQ" />
</div>
<div>
<h4 className="font-label-md text-label-md text-primary group-hover:underline decoration-1 underline-offset-2">Autumn Classics Collection</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Hero Position • Currently Live</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
</div>
{/* Item 2 */}
<div className="group flex items-center justify-between p-md rounded-lg hover:bg-surface-container-low border border-transparent hover:border-outline-variant mb-sm cursor-pointer transition-all">
<div className="flex items-center gap-md opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-DEFAULT overflow-hidden border border-surface-dim bg-surface-variant">
</div>
<div>
<h4 className="font-label-md text-label-md text-primary">Winter Poetry Showcase</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Featured Grid • Draft</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant" data-icon="edit_document">edit_document</span>
</div>
</div>
<div className="p-md border-t border-surface-dim">
<button className="w-full brass-gradient text-primary font-label-md text-label-md py-sm px-md rounded-DEFAULT shadow-sm hover:brightness-110 transition-all flex items-center justify-center gap-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                            New Banner
                        </button>
</div>
</div>
</div>
{/* Editor & Preview Section (Right Columns) */}
<div className="col-span-12 xl:col-span-8 flex flex-col gap-lg h-full">
{/* Preview Canvas */}
<div className="bg-surface-container-highest rounded-xl border border-surface-dim flex-1 flex flex-col overflow-hidden relative ambient-shadow-1">
{/* Canvas Toolbar */}
<div className="h-12 bg-surface-container-lowest border-b border-surface-dim flex justify-between items-center px-md">
<div className="flex gap-md font-label-md text-label-md text-on-surface-variant">
<button className="flex items-center gap-xs hover:text-primary transition-colors text-primary border-b-2 border-primary h-12 px-xs">
<span className="material-symbols-outlined text-lg" data-icon="desktop_mac">desktop_mac</span> Desktop
                            </button>
<button className="flex items-center gap-xs hover:text-primary transition-colors h-12 px-xs">
<span className="material-symbols-outlined text-lg" data-icon="smartphone">smartphone</span> Mobile
                            </button>
</div>
<span className="font-label-sm text-label-sm text-outline px-sm py-xs border border-outline-variant rounded-full">Live Preview</span>
</div>
{/* Canvas Area */}
<div className="flex-1 bg-surface-dim flex items-center justify-center p-xl relative overflow-hidden">
{/* Desktop Preview Frame (16:9 approx) */}
<div className="w-full max-w-[800px] aspect-video bg-surface-container-lowest ambient-shadow-2 rounded-lg overflow-hidden relative group preview-fade">
{/* Background Image */}
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A moody, high-contrast flat lay of classic leather-bound books mixed with modern minimalist typography on aged paper, conveying a premium editorial aesthetic. Subtle warm lighting." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAxn6uVGljDYkS8cV8azdcJr_74x-yIPVM06k2YSn5kBx8eRIFsfRmVHkXDBts8lFIvma4g_-OTqtluxJ-C3sHACcmUqvy5nZqJ3Uif6ZNARt7taIjDh3bRv3GZz_8g1BwYpuY3qbaWI3ocbCyUuIvaapCGDJSoCLkWfSv4T57Ib7eUbDwLimyk13i2OX8JUlpaiz2Ps-GU7VomJpNVeyTqlrs0SrS5wEGbBn8vo7gRl1B3mClib47bvg\')'}}>
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 to-transparent"></div>
</div>
{/* Content overlay */}
<div className="absolute inset-0 p-xl flex flex-col justify-center w-2/3">
<span className="font-label-sm text-label-sm text-secondary-fixed mb-sm uppercase tracking-widest">Curator's Choice</span>
<h3 className="font-headline-lg text-headline-lg text-on-primary mb-md leading-tight">Autumn Classics Collection</h3>
<p className="font-body-md text-body-md text-surface-variant mb-lg">Rediscover the definitive editions of literary masterpieces, meticulously bound and restored for the modern archivist.</p>
<div>
<button className="bg-surface-container-lowest text-primary font-label-md text-label-md py-sm px-lg rounded-DEFAULT hover:bg-surface-variant transition-colors">
                                        Explore the Collection
                                    </button>
</div>
</div>
</div>
</div>
</div>
{/* Editor Form Drawer (Bottom Section) */}
<div className="bg-surface-container-lowest rounded-xl border border-surface-dim ambient-shadow-1 p-lg h-64 overflow-y-auto">
<div className="flex justify-between items-center mb-md border-b border-surface-dim pb-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Content Editor</h3>
<div className="flex gap-sm">
<button className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-sm py-xs transition-colors">Save Draft</button>
<button className="font-label-md text-label-md bg-primary text-on-primary px-md py-xs rounded-DEFAULT hover:bg-inverse-surface transition-colors">Publish to Archive</button>
</div>
</div>
<div className="grid grid-cols-12 gap-lg">
<div className="col-span-12 md:col-span-8 flex flex-col gap-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Editorial Headline</label>
<input className="input-editorial w-full px-sm py-sm rounded-DEFAULT font-headline-sm text-headline-sm" type="text" defaultValue="Autumn Classics Collection" />
</div>
<div className="grid grid-cols-2 gap-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Button Label</label>
<input className="input-editorial w-full px-sm py-sm rounded-DEFAULT font-body-md text-body-md" type="text" defaultValue="Explore the Collection" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Destination URL</label>
<input className="input-editorial w-full px-sm py-sm rounded-DEFAULT font-body-md text-body-md text-outline" type="text" defaultValue="/collections/autumn-classics" />
</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 flex flex-col gap-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Placement</label>
<select className="input-editorial w-full px-sm py-sm rounded-DEFAULT font-body-md text-body-md">
<option>Hero Homepage</option>
<option>Featured Section</option>
<option>Footer Banner</option>
</select>
</div>
<div className="flex-1 border border-dashed border-outline-variant rounded-DEFAULT flex items-center justify-center bg-surface-container-low cursor-pointer hover:bg-surface-variant transition-colors group">
<div className="text-center">
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-2xl mb-xs" data-icon="add_photo_alternate">add_photo_alternate</span>
<p className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Replace Image</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
