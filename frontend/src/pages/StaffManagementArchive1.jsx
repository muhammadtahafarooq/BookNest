import React from 'react';
import './StaffManagementArchive1.css';

export default function StaffManagementArchive1() {
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary-container docked full-width top-0 border-b border-outline-variant dark:border-outline shadow-md flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto scale-95 active:scale-90 transition-transform">
<div className="flex items-center gap-gutter">
<span className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container">BookNest</span>
<div className="hidden md:flex gap-lg font-label-md text-label-md">
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200" href="#">Catalog</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200" href="#">Collections</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200" href="#">Archives</a>
<a className="text-on-primary dark:text-on-primary-container border-b-2 border-secondary-container pb-1" href="#">Curations</a>
</div>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="menu_book">menu_book</span>
<span className="material-symbols-outlined text-on-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="history">history</span>
<button className="font-label-md text-label-md bg-transparent text-on-primary px-4 py-2 border border-on-primary rounded hover:bg-on-primary hover:text-primary transition-colors">Sign In</button>
</div>
</nav>
{/* Main Workspace */}
<main className="flex-grow flex w-full max-w-[1280px] mx-auto pt-xl px-margin-mobile md:px-margin-desktop pb-xxl gap-gutter">
{/* Sidebar (Simulated based on context) */}
<aside className="hidden lg:flex flex-col w-64 shrink-0 bg-primary-container rounded-lg p-lg text-on-primary-container shadow-sm h-[calc(100vh-160px)] sticky top-xl">
<h2 className="font-headline-sm text-headline-sm mb-lg text-on-primary">Admin</h2>
<nav className="flex flex-col gap-sm font-label-md text-label-md">
<a className="py-2 px-3 rounded hover:bg-surface-variant/10 text-on-primary-container" href="#">Library Management</a>
<a className="py-2 px-3 rounded bg-surface-variant/20 text-on-primary border-l-2 border-[#8A6F4A]" href="#">Staff Management</a>
<a className="py-2 px-3 rounded hover:bg-surface-variant/10 text-on-primary-container" href="#">Financial Records</a>
<a className="py-2 px-3 rounded hover:bg-surface-variant/10 text-on-primary-container" href="#">System Settings</a>
</nav>
</aside>
{/* Main Content Area */}
<div className="flex-grow flex flex-col gap-lg min-w-0">
{/* Header */}
<div className="flex justify-between items-end border-b border-outline-variant/50 pb-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Staff Management</h1>
<p className="font-body-md text-on-surface-variant mt-sm">Manage team access and archival permissions.</p>
</div>
<button className="bg-[#8A6F4A] hover:bg-[#6D573B] text-[#1c1b1b] font-label-md text-label-md px-6 py-3 rounded shadow-[0_4px_20px_rgba(23,26,28,0.05)] hover:shadow-[0_8px_30px_rgba(23,26,28,0.1)] transition-all font-bold tracking-wide flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="add" style={{fontVariationSettings: '\'FILL\' 1'}}>add</span>
                    Add Staff Member
                </button>
</div>
{/* Content Grid (Bento style) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
{/* Staff List */}
<div className="xl:col-span-8 bg-surface-bright rounded-xl border border-[#c4c7c9] shadow-[0_4px_20px_rgba(23,26,28,0.05)] overflow-hidden flex flex-col">
<div className="p-lg border-b border-outline-variant bg-surface-container-lowest">
<div className="flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm">Active Roster</h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline rounded focus:border-[#1c1b1b] focus:ring-0 font-body-md text-on-surface transition-colors w-64" placeholder="Search staff..." type="text" />
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container">
<th className="p-md font-label-md text-label-md text-on-surface-variant">Name</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Role</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50">
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group bg-surface-container-low border-l-2 border-[#8A6F4A]">
<td className="p-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1c1b1b] text-on-primary flex items-center justify-center font-label-md text-label-md">EC</div>
<span className="font-body-md text-on-surface font-medium">Eleanor Vance</span>
</div>
</td>
<td className="p-md font-body-md text-on-surface-variant">Senior Archivist</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-label-sm text-label-sm bg-[#cee6d4] text-[#0b1f15]">Active</span>
</td>
<td className="p-md text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-surface-variant rounded text-[#8A6F4A]" title="Edit"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
<button className="p-2 hover:bg-surface-variant rounded text-error" title="Delete"><span className="material-symbols-outlined text-sm" data-icon="delete">delete</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="p-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface">TH</div>
<span className="font-body-md text-on-surface font-medium">Theodore Hall</span>
</div>
</td>
<td className="p-md font-body-md text-on-surface-variant">Curator</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-label-sm text-label-sm bg-surface-variant text-on-surface-variant">On Leave</span>
</td>
<td className="p-md text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-surface-variant rounded text-[#8A6F4A]"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
<button className="p-2 hover:bg-surface-variant rounded text-error"><span className="material-symbols-outlined text-sm" data-icon="delete">delete</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="p-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface">MW</div>
<span className="font-body-md text-on-surface font-medium">Margaret White</span>
</div>
</td>
<td className="p-md font-body-md text-on-surface-variant">Admin</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-label-sm text-label-sm bg-error-container text-on-error-container">Restricted</span>
</td>
<td className="p-md text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-surface-variant rounded text-[#8A6F4A]"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
<button className="p-2 hover:bg-surface-variant rounded text-error"><span className="material-symbols-outlined text-sm" data-icon="delete">delete</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Permission Panel (Visible on selection) */}
<div className="xl:col-span-4 bg-surface-bright rounded-xl border border-[#c4c7c9] shadow-[0_8px_30px_rgba(23,26,28,0.1)] p-lg flex flex-col sticky top-xl">
<div className="flex items-center gap-4 border-b border-outline-variant pb-md mb-md">
<div className="w-12 h-12 rounded-full bg-[#1c1b1b] text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">EC</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Eleanor Vance</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Senior Archivist</p>
</div>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-4">Access Permissions</h4>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between py-2 border-b border-outline-variant/30">
<div>
<span className="font-body-md text-on-surface block">Archive Access</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">View and modify archival records.</span>
</div>
<label className="switch">
<input defaultChecked={true} type="checkbox" />
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between py-2 border-b border-outline-variant/30">
<div>
<span className="font-body-md text-on-surface block">User Management</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Add or remove library patrons.</span>
</div>
<label className="switch">
<input type="checkbox" />
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between py-2 border-b border-outline-variant/30">
<div>
<span className="font-body-md text-on-surface block">Financial Records</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Access to acquisition budgets.</span>
</div>
<label className="switch">
<input type="checkbox" />
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between py-2 border-b border-outline-variant/30">
<div>
<span className="font-body-md text-on-surface block">System Settings</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Global platform configurations.</span>
</div>
<label className="switch">
<input type="checkbox" />
<span className="slider"></span>
</label>
</div>
</div>
<div className="mt-auto pt-lg">
<button className="w-full border border-[#1c1b1b] text-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-[#ffffff] font-label-md text-label-md py-3 rounded transition-colors uppercase tracking-widest text-sm">Save Changes</button>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container full-width bottom-0 border-t border-outline-variant/30 w-full py-xxl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto">
<div className="font-headline-sm text-headline-sm font-bold text-on-primary mb-lg md:mb-0">BookNest</div>
<div className="flex flex-col items-center md:items-end gap-md">
<div className="flex gap-lg font-label-sm text-label-sm">
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Archival Standards</a>
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Conservation Policy</a>
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Terms of Access</a>
<a className="text-secondary-fixed font-bold hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">The Vault</a>
</div>
<p className="font-body-md text-body-md text-on-primary-fixed-variant opacity-70">© 1892-2024 BookNest Archival Society. All rights reserved.</p>
</div>
</footer>
    </>
  );
}
