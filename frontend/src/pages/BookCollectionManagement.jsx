import React from 'react';
import './BookCollectionManagement.css';

export default function BookCollectionManagement() {
  return (
    <>
      {/* Desktop Side Navigation Shell */}
<nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-64 border-r border-on-primary-fixed-variant shadow-lg bg-primary-container dark:bg-black py-lg z-50">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-on-primary-fixed-variant">
<img alt="BookNest Logo" className="object-cover w-full h-full" data-alt="A macro shot of a vintage leather book spine with delicate gold foil stamping in a warm, low-lit library setting, representing a luxury publishing house aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBweZqkAi0G1pDlCX1Q1xqCPu7GYZvoELxA-IjhbmpIJBMoJmcjU7NuJOS7oe6IDGzHCqzuYLm_ycaEp_aUowggWVK3sl7RnsIpaEF7LN-hZbb-BniI9riB1gsV8475_HRaF2vxd_8A2fTDxdZKH4SJVrgQTXuZxW6p41sF-kTRPIPBvjIqkxiROsoA3aYLRt6U4DYmcQwWx6gFtz_PXD4bW7TvoL_0XCSZ66e7A6GvZJ3xoE4bGjn05g" />
</div>
<div>
<h1 className="font-headline-sm text-headline-sm text-on-primary-fixed">BookNest</h1>
<p className="font-label-sm text-label-sm text-on-primary-container">Publishing House Admin</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto w-full px-2">
<ul className="space-y-2">
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Dashboard</a></li>
<li><a className="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-lg mx-2 px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150" href="#"><span className="material-symbols-outlined" data-icon="menu_book">menu_book</span> Books</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="category">category</span> Categories</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="person_edit">person_edit</span> Authors</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="domain">domain</span> Publishers</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span> Orders</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="group">group</span> Customers</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="badge">badge</span> Staff</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span> Inventory</a></li>
<li><a className="flex items-center gap-4 text-on-primary-container hover:text-on-primary px-4 py-3 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg" href="#"><span className="material-symbols-outlined" data-icon="analytics">analytics</span> Analytics</a></li>
</ul>
</div>
</nav>
{/* Main Content Area */}
<div className="flex-1 md:ml-64 min-h-screen flex flex-col">
{/* Top Navigation Shell */}
<header className="w-full h-16 bg-surface dark:bg-surface-container border-b border-outline-variant flex justify-between items-center px-lg z-40 relative">
<div className="flex items-center gap-4 lg:hidden">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<div className="hidden lg:flex flex-1 max-w-md ml-auto">
{/* Search on Left (Relative to top bar context) */}
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-md font-body-md focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors" placeholder="Search across workspace..." type="text" />
</div>
</div>
<div className="flex items-center gap-6 ml-auto lg:ml-6">
<button aria-label="Notifications" className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button aria-label="Settings" className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="Admin Profile" className="object-cover w-full h-full" data-alt="A close up portrait of an elegant professional administrator in a softly lit, modern publishing office setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYt9pj5QyXV2TlYou4WXP1v9wCd5ecyNI0922A5YlFiO0XNABeOcUbjslQ0J1Cjr0ihztuH77WWDyhwnnwUPFsvRrl8s4fglNa04G0nlqLeni5HylvxbvYiOpBzgTSg6ZDzG5f822Bze6SwmyzVfG9UOD50_MuhWc1Cb37V6hfXaRR0G_o6vhG087PtZuCyo8HxwCuTH7awOfM8cxc8jVfDSje0GiyrUorsWBbOEMVO3J9db7pqkBp-A" />
</div>
</div>
</header>
{/* Canvas / Main Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden max-w-[1280px] mx-auto w-full fade-in">
{/* Admin Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-4">
<div>
<h2 className="font-display-lg text-display-lg text-primary mb-2 hidden md:block">Book Collection Management</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 md:hidden">Book Collection Management</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Curate, update, and manage the publishing house inventory.</p>
</div>
<button className="bg-[#B58A3F] hover:bg-[#9B7534] text-tertiary font-label-md text-label-md px-6 py-3 rounded-DEFAULT transition-colors flex items-center gap-2 shadow-level-1">
<span className="material-symbols-outlined text-sm">add</span> Add New Book
                </button>
</div>
{/* Search & Filters Bar (Editorial Style) */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant p-6 mb-8 flex flex-col xl:flex-row gap-6">
<div className="flex-1 relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Search Collection</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface border-b border-outline-variant focus:border-tertiary py-3 pl-10 pr-4 text-body-md font-body-md bg-transparent border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 transition-colors" placeholder="Title, Author, ISBN, or Publisher..." type="text" />
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 xl:w-1/2">
<div className="flex-1">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Category</label>
<select className="w-full bg-surface border-b border-outline-variant focus:border-tertiary py-3 px-0 text-body-md font-body-md bg-transparent border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 appearance-none">
<option>All Categories</option>
<option>Fiction</option>
<option>Non-Fiction</option>
<option>History</option>
<option>Science</option>
</select>
</div>
<div className="flex-1">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Availability</label>
<select className="w-full bg-surface border-b border-outline-variant focus:border-tertiary py-3 px-0 text-body-md font-body-md bg-transparent border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 appearance-none">
<option>In Stock</option>
<option>Low Stock</option>
<option>Out of Stock</option>
<option>Pre-order</option>
</select>
</div>
<div className="flex-1">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Status</label>
<select className="w-full bg-surface border-b border-outline-variant focus:border-tertiary py-3 px-0 text-body-md font-body-md bg-transparent border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 appearance-none">
<option>Active</option>
<option>Draft</option>
<option>Archived</option>
</select>
</div>
</div>
</div>
{/* Bulk Actions Toolbar */}
<div className="flex justify-between items-center mb-4 px-2">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded border-outline-variant text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface-variant">Select All (124 items)</span>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 border border-outline-variant text-on-surface font-label-sm text-label-sm rounded-DEFAULT hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled={true}>Update Stock</button>
<button className="px-4 py-2 border border-outline-variant text-on-surface font-label-sm text-label-sm rounded-DEFAULT hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled={true}>Change Status</button>
<button className="px-4 py-2 border border-error text-error font-label-sm text-label-sm rounded-DEFAULT hover:bg-error-container transition-colors disabled:opacity-50" disabled={true}>Delete</button>
</div>
</div>
{/* Books Table */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-low">
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-12"></th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Title &amp; Thumbnail</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Author</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Category</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Price</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Stock</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Status</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded border-outline-variant text-tertiary focus:ring-tertiary" type="checkbox" />
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded flex-shrink-0 border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A minimalist book cover design featuring abstract geometric shapes in deep black and pristine white with a vibrant red accent, set against a soft archive white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl_bdgv64MQJIUqdlPUE2FlRLlbkH2sIzksfX3hyXucF1wtlYWcThP8JQddGVjxEV11fADCKibx3_ivRa4e7L9UhiEri-yDensbrOCV8XplHdWlSDfNFa5VcMC7XqjPF2bMVpfL3cGfyHn9_1l2qNPGr0vE3wGpp_HJZLXqQBE2VtwVV6FH3sS5VeUO_gQzdjpntdrPq0hIrrVwUKraL-XupFzCAX5CydumcpXJGfrnclN9nvtpnk6OQ" />
</div>
<div>
<div className="font-headline-sm text-headline-sm text-primary group-hover:text-[#B58A3F] transition-colors leading-tight mb-1">The Shadow of the Wind</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">ISBN: 978-0143034902</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface">Carlos Ruiz Zafón</td>
<td className="py-4 px-6">
<span className="bg-[#1A3622] text-white px-3 py-1 rounded-full font-label-sm text-label-sm">Fiction</span>
</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface text-right">$24.99</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface text-right">142</td>
<td className="py-4 px-6 text-center">
<span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-secondary"></span> Active</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined text-sm">edit</span></button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="View Details"><span className="material-symbols-outlined text-sm">visibility</span></button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded border-outline-variant text-tertiary focus:ring-tertiary" type="checkbox" />
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded flex-shrink-0 border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="An elegant, vintage-inspired book cover for a historical non-fiction piece, featuring ornate typography and a faded sepia-toned botanical illustration on textured ivory paper." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLe_6lHVFXz7MQ4XwhvQT5oI4p9xf9qdKz85nNkX7GHMG6dIbhcg-wHVt0uo8m4ocnv7yKcXUBqeJjD282Rbrx0mZRSocpI5kLaC7gcPKwcrUcEQOmPRG6Xr8EUHchIdskNsAyRtDYtmyZ8SpnDiiTgS6bBbCK6ZkSVNjStHQ7Y7kzdIM1rgQqiUMbxkRtfNM8KyKcZ9JgKKYr6IjQiRMkrUpMKCwbU3ESyAmoYKhSeHe99nwWXN1iqQ" />
</div>
<div>
<div className="font-headline-sm text-headline-sm text-primary group-hover:text-[#B58A3F] transition-colors leading-tight mb-1">A History of Reading</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">ISBN: 978-0140166555</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface">Alberto Manguel</td>
<td className="py-4 px-6">
<span className="bg-[#1A3622] text-white px-3 py-1 rounded-full font-label-sm text-label-sm">History</span>
</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface text-right">$35.00</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface text-right">8</td>
<td className="py-4 px-6 text-center">
<span className="inline-flex items-center gap-1 text-[#8C5D00] font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-[#8C5D00]"></span> Low Stock</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined text-sm">edit</span></button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="View Details"><span className="material-symbols-outlined text-sm">visibility</span></button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer bg-surface-container-low/30">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded border-outline-variant text-tertiary focus:ring-tertiary" type="checkbox" />
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded flex-shrink-0 border border-outline-variant overflow-hidden opacity-60">
<span className="material-symbols-outlined text-outline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">image_not_supported</span>
</div>
<div className="opacity-70">
<div className="font-headline-sm text-headline-sm text-primary group-hover:text-[#B58A3F] transition-colors leading-tight mb-1">Untitled Draft</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">ISBN: Pending</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface opacity-70">Unknown Author</td>
<td className="py-4 px-6">
<span className="border border-outline-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Uncategorized</span>
</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface text-right opacity-70">-</td>
<td className="py-4 px-6 font-body-md text-body-md text-on-surface text-right opacity-70">-</td>
<td className="py-4 px-6 text-center">
<span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full border border-outline-variant"></span> Draft</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="Edit"><span className="material-symbols-outlined text-sm">edit</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="flex justify-between items-center mt-6">
<p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 10 of 124 entries</p>
<div className="flex gap-1">
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled={true}><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="px-3 py-1 border border-tertiary bg-tertiary text-on-tertiary rounded font-label-sm text-label-sm">1</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors font-label-sm text-label-sm">2</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors font-label-sm text-label-sm">3</button>
<span className="px-2 py-1 text-on-surface-variant">...</span>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors font-label-sm text-label-sm">13</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</main>
</div>
    </>
  );
}
