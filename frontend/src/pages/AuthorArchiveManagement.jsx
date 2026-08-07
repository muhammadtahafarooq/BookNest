import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './AuthorArchiveManagement.css';

export default function AuthorArchiveManagement() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar */}
<nav className="bg-primary dark:bg-surface-container-highest w-64 h-screen fixed left-0 top-0 border-r border-outline-variant shadow-md flex flex-col p-md h-full overflow-y-auto z-50 hidden md:flex">
<div className="mb-lg">
<div className="flex items-center gap-sm mb-sm">
<span className="material-symbols-outlined text-on-primary text-3xl">menu_book</span>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-surface">BookNest</h1>
</div>
<p className="font-label-sm text-label-sm text-on-primary-container">Management Center</p>
</div>
<div className="flex-1 space-y-unit">
<Link className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-variant/20 hover:bg-primary-fixed-dim/10 transition-colors scale-95 duration-150" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-variant/20 hover:bg-primary-fixed-dim/10 transition-colors scale-95 duration-150" to="/catalogarchive">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>book</span>
<span className="font-label-md text-label-md">Books</span>
</Link>
<Link className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-variant/20 hover:bg-primary-fixed-dim/10 transition-colors scale-95 duration-150" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>category</span>
<span className="font-label-md text-label-md">Categories</span>
</Link>
<Link className="flex items-center gap-sm px-sm py-sm rounded-lg text-primary bg-secondary-container dark:bg-secondary-fixed-dim font-bold scale-95 duration-150" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>person_edit</span>
<span className="font-label-md text-label-md">Authors</span>
</Link>
<Link className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-surface-variant/20 hover:bg-primary-fixed-dim/10 transition-colors scale-95 duration-150" to="/admin/publishermanagementarchive">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>domain</span>
<span className="font-label-md text-label-md">Publishers</span>
</Link>
</div>
<div className="mt-auto pt-lg border-t border-outline-variant/30 flex items-center gap-sm">
<img className="w-8 h-8 rounded-full object-cover" data-alt="A small circular avatar portrait of an administrative user, professional lighting, corporate yet elegant style, high resolution, dark background, luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3IM8DtS1-pVrZK2t75kZIX_U1y-tw8Rc8PgQ_Opn1HBs6HZEvXilnE_K6JsBGoU2gREbPIo-mIebrKo3iqUePCweYDYBR8MxquPX68p-bbRynIiA9wLuH0oZifTZoNcVb1dIPwMoU0_LXqG4DzjXssvVQsZqzB6bPv3Ym8A8Eu8nat3i--ts3Wm-OnwLIiMkal2OrJT3AQIpUPKsBSqcj3Y6vt0epcLDHbk7_ca45uuqtnjbZxgaGEw" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-primary">Admin User</span>
</div>
</div>
</nav>
{/* Main Content Area */}
<div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen archive-paper relative">
{/* TopNavBar */}
<header className="bg-surface dark:bg-surface-container-low docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center h-16 px-lg sticky z-40">
<div className="flex items-center gap-sm md:hidden">
<span className="material-symbols-outlined text-on-surface cursor-pointer">menu</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">BookNest</span>
</div>
<div className="hidden md:flex flex-1 max-w-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-xl pr-sm py-sm rounded-lg bg-surface-container border border-outline-variant focus:border-primary focus:ring-0 font-body-md text-on-surface transition-colors" placeholder="Search archive..." type="text" />
</div>
</div>
<div className="flex items-center gap-md ml-auto">
<button className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 active:opacity-100" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 active:opacity-100" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>account_circle</span>
</button>
</div>
</header>
{/* Main Canvas */}
<main className="flex-1 p-margin-mobile md:p-xl max-w-7xl mx-auto w-full">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl fade-in-up">
<div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg obsidian-text mb-sm">Author Archive Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Curate and manage the definitive collection of literary voices within the BookNest repository.</p>
</div>
<button className="mt-md md:mt-0 brass-button px-lg py-sm rounded-lg font-label-md text-label-md flex items-center gap-sm hover:opacity-90 transition-opacity shadow-sm">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>add</span>
                    Add New Author
                </button>
</div>
{/* Controls (Search/Filter) */}
<div className="flex flex-col md:flex-row gap-md mb-lg fade-in-up stagger-1">
<div className="relative flex-1 max-w-lg">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-xl pr-sm py-sm rounded-lg archive-white manuscript-border border focus:border-primary focus:ring-0 font-body-md text-on-surface transition-colors shadow-sm" placeholder="Search authors by name or biography..." type="text" />
</div>
<div className="flex gap-sm">
<select className="archive-white manuscript-border border rounded-lg px-sm py-sm font-label-md text-label-md text-on-surface focus:border-primary focus:ring-0 shadow-sm cursor-pointer">
<option>All Statuses</option>
<option>Active</option>
<option>Archived</option>
</select>
</div>
</div>
{/* Author List (Bento-style list) */}
<div className="flex flex-col gap-sm fade-in-up stagger-2">
{/* Table Header (Desktop only) */}
<div className="hidden md:grid grid-cols-12 gap-sm px-lg py-sm border-b manuscript-border text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<div className="col-span-4">Author</div>
<div className="col-span-5">Biography Snippet</div>
<div className="col-span-1 text-center">Books</div>
<div className="col-span-1 text-center">Status</div>
<div className="col-span-1 text-right">Actions</div>
</div>
{/* Row 1 */}
<div className="archive-white rounded-xl p-md md:px-lg md:py-md border manuscript-border shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-md md:gap-sm items-center group cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="col-span-1 md:col-span-4 flex items-center gap-md">
<img className="w-12 h-12 rounded-full object-cover border border-outline-variant" data-alt="A black and white author portrait of a distinguished older gentleman with glasses, reminiscent of classic author dust jacket photos, high contrast, studio lighting, elegant and timeless." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDph_XyCbdWWnuxRQcc5J0vfWxH8gZUE1yEIXTgmd0yTxrOLgc8dqISCT3Evu9Z9kUeTCJuyRxbXa_LIzmPMhX9287XDi18ST3jZ2_TnWCs5ZhiW_uB3RHXe_fgzQ0i1MvXbDTETrxwS4zYGH4mAKJDCiCKdCH3x0EbeIi5c8whRtzvKG9ykIuEbGfht4EvUmaI-cNX0qka_XKWDyLH0MFoh6AFxW5mq_ibTBTRQgrVI_Zpe--Vlplceg" />
<div>
<h3 className="font-headline-sm text-headline-sm obsidian-text text-[18px]">Arthur C. Clarke</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Science Fiction</p>
</div>
</div>
<div className="col-span-1 md:col-span-5">
<p className="font-body-md text-body-md text-on-surface line-clamp-2 text-sm">British science fiction writer, science writer and futurist, inventor, undersea explorer, and television series host.</p>
</div>
<div className="col-span-1 md:col-span-1 flex md:justify-center items-center gap-xs">
<span className="md:hidden font-label-sm text-label-sm text-on-surface-variant uppercase">Books:</span>
<span className="font-label-md text-label-md obsidian-text">42</span>
</div>
<div className="col-span-1 md:col-span-1 flex md:justify-center">
<span className="px-sm py-xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm inline-block">Active</span>
</div>
<div className="col-span-1 md:col-span-1 flex justify-end gap-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-on-surface-variant hover:text-primary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'wght\' 300'}}>edit</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors" title="Remove">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'wght\' 300'}}>delete</span>
</button>
</div>
</div>
{/* Row 2 */}
<div className="archive-white rounded-xl p-md md:px-lg md:py-md border manuscript-border shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-md md:gap-sm items-center group cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="col-span-1 md:col-span-4 flex items-center gap-md">
<img className="w-12 h-12 rounded-full object-cover border border-outline-variant" data-alt="A portrait of a thoughtful female author resting her chin on her hand, softly lit studio environment, natural looking, wearing a simple dark sweater, editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzyMiSflm34ld2RQtCB9ePt2ZOEjxEl8PNx3t1hggGhvn8q7vJDd5zZo-k0wnWQL63q1nlie8dPKqe4DpbcgeOZ-K3XlwrnNBoRUWzGVmAleng7ST7rVD5aXlRrPUISFpjfXdyrZhg9oZ0__ul14mrC6tjUsCpDarrhfgdP3sxnCPEOBum2XUYKDz6kx4hc6CjhwOpHwgxrJ0wmvOc9Y2dW-oFaSwQAjLTLgMj8jHbn2ywlqRlamjvg" />
<div>
<h3 className="font-headline-sm text-headline-sm obsidian-text text-[18px]">Ursula K. Le Guin</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Fantasy &amp; Sci-Fi</p>
</div>
</div>
<div className="col-span-1 md:col-span-5">
<p className="font-body-md text-body-md text-on-surface line-clamp-2 text-sm">American author best known for her works of speculative fiction, including science fiction works set in her Hainish universe.</p>
</div>
<div className="col-span-1 md:col-span-1 flex md:justify-center items-center gap-xs">
<span className="md:hidden font-label-sm text-label-sm text-on-surface-variant uppercase">Books:</span>
<span className="font-label-md text-label-md obsidian-text">28</span>
</div>
<div className="col-span-1 md:col-span-1 flex md:justify-center">
<span className="px-sm py-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm inline-block border manuscript-border">Archived</span>
</div>
<div className="col-span-1 md:col-span-1 flex justify-end gap-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-on-surface-variant hover:text-primary transition-colors" title="Edit">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'wght\' 300'}}>edit</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors" title="Remove">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'wght\' 300'}}>delete</span>
</button>
</div>
</div>
</div>
{/* Pagination (Subtle) */}
<div className="mt-lg flex justify-between items-center border-t manuscript-border pt-md fade-in-up stagger-3">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 2 of 145 authors</span>
<div className="flex gap-xs">
<button className="p-xs rounded hover:bg-surface-variant transition-colors text-on-surface-variant disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="p-xs rounded hover:bg-surface-variant transition-colors text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</main>
</div>
    </>
  );
}
