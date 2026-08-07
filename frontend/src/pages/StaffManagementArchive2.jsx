import React, { useEffect } from 'react';
import './StaffManagementArchive2.css';

export default function StaffManagementArchive2() {
  
  useEffect(() => {
    // Simple script to handle custom toggle visuals slightly better if needed, though pure CSS works for basic interactions.
        document.querySelectorAll('.toggle-checkbox').forEach(toggle => {
            toggle.addEventListener('change', function() {
                // Potential placeholder for applying a 'seal' animation or subtle sound effect in a real app
                if(this.checked) {
                    this.nextElementSibling.style.backgroundColor = '#000000'; // Obsidian Ink
                } else {
                    this.nextElementSibling.style.backgroundColor = '#c4c7c9';
                }
            });
        });
  }, []);

return (
    <>
      {/* TopNavBar (Shared Component) */}
<nav className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container docked full-width top-0 border-b border-outline-variant dark:border-outline shadow-md z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto">
{/* Brand */}
<a className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container flex items-center gap-2 scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>book</span>
                BookNest
            </a>
{/* Navigation Links (Desktop) */}
<div className="hidden md:flex items-center gap-xl font-label-md text-label-md">
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform" href="#">Catalog</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform" href="#">Collections</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform" href="#">Archives</a>
<a className="text-on-primary dark:text-on-primary-container border-b-2 border-secondary-container pb-1 scale-95 active:scale-90 transition-transform" href="#">Curations</a> {/* Highlighting Curations as Staff Management falls under internal curation/admin */}
</div>
{/* Trailing Actions */}
<div className="flex items-center gap-md">
<button className="hidden md:flex items-center gap-xs text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined">menu_book</span>
</button>
<button className="hidden md:flex items-center gap-xs text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined">history</span>
</button>
<button className="font-label-md text-label-md font-bold hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform">
                    Sign In
                </button>
</div>
</div>
</nav>
{/* Main Workspace */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl flex flex-col gap-xl relative">
{/* Header Section */}
<header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant pb-md gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Staff Registry</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-sm max-w-2xl">Manage archival personnel, curatorial access, and administrative privileges across the BookNest vault.</p>
</div>
<button className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded flex items-center gap-sm hover:bg-inverse-surface transition-colors ambient-shadow-level-1">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                New Member
            </button>
</header>
{/* Content Area: 12-Column Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Staff List (8 Columns) */}
<section className="lg:col-span-8 bg-surface-container-lowest rounded-lg border border-outline-variant ambient-shadow-level-1 overflow-hidden">
{/* Table Header */}
<div className="grid grid-cols-12 gap-md p-md border-b border-outline-variant bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<div className="col-span-5 pl-sm">Personnel</div>
<div className="col-span-3">Designation</div>
<div className="col-span-2">Status</div>
<div className="col-span-2 text-right pr-sm">Actions</div>
</div>
{/* List Items */}
<div className="flex flex-col">
{/* Item 1 (Active/Selected State Example) */}
<div className="grid grid-cols-12 gap-md p-md items-center border-b border-outline-variant bg-surface-container transition-colors hover:bg-surface-container-high cursor-pointer relative" onclick="togglePanel('Elias')">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div> {/* Active indicator */}
<div className="col-span-5 flex items-center gap-md pl-sm">
<div className="w-10 h-10 rounded-full bg-outline-variant overflow-hidden flex-shrink-0">
<img alt="Elias Thorne" className="w-full h-full object-cover" data-alt="A distinguished older man with neat gray hair and wire-rimmed glasses, dressed in a tweed waistcoat. He appears focused, sitting in a warmly lit, high-end private library surrounded by leather-bound books. Luxury editorial photography style, muted warm colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzeg7hy3UVI2ukcvtcCFF7kGMDMRsK2rDRDLEjhycErwHQKEcJ5RwYN9mrzyJwRsP0kIkD7Ki4yvYPCj1JYv6U-BonNp3GwW1hd8HnKru5TIM7_owX-yFCoFqE1F0xYTAlxltOlzjoci1un8RIW0Is3Ul6QbZwwZ4b4Tac0PPblpcBjJe0dI8yDTc5IIWB6hP6VyV4irzVhfrlBDrnF4dznzs7weCMr0jsXKIbXalEfmX0yjJbl00lcQ" />
</div>
<div>
<p className="font-label-md text-label-md text-primary font-bold">Elias Thorne</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">e.thorne@booknest.arc</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Head Archivist</span>
</div>
<div className="col-span-2">
<span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Active
                            </span>
</div>
<div className="col-span-2 flex justify-end gap-sm pr-sm">
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">edit_document</span></button>
<button className="text-outline hover:text-error transition-colors"><span className="material-symbols-outlined text-[20px]">person_remove</span></button>
</div>
</div>
{/* Item 2 */}
<div className="grid grid-cols-12 gap-md p-md items-center border-b border-outline-variant transition-colors hover:bg-surface-container-low cursor-pointer">
<div className="col-span-5 flex items-center gap-md pl-sm">
<div className="w-10 h-10 rounded-full bg-outline-variant overflow-hidden flex-shrink-0">
<img alt="Clara Vance" className="w-full h-full object-cover" data-alt="A young woman with sharp features and dark hair pulled back neatly, wearing a crisp white blouse. She is holding an ancient manuscript in a well-lit, sterile archive room with high-end modern lighting. Professional editorial portrait, high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRaIf8Fl2K0KQvbHhYnb5SGDOy8QlNVUEljt4pqk2xoaMVAGJct9rBDbY6cRQISNvoEyDOwXRlOqmeOqhcmmP0IgIP_9wrV584Fu8fqv-baSbsC2D2Jz-E_q3ItyXu8bbH47LnKPC5GF_dwXWKWNs_8RxhEwFoR-cRaWDbfYGS0e4opmjF_vZ2q7e4165otVJgPj3dJzIpR2U80Nuvk9xYOjCc6UMXZn01hoCzRkczh17kh8TNpWo9Hw" />
</div>
<div>
<p className="font-label-md text-label-md text-primary font-bold">Clara Vance</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">c.vance@booknest.arc</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-2 py-1 rounded-full border border-outline text-on-surface font-label-sm text-label-sm">Curator</span>
</div>
<div className="col-span-2">
<span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Active
                            </span>
</div>
<div className="col-span-2 flex justify-end gap-sm pr-sm">
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">edit_document</span></button>
<button className="text-outline hover:text-error transition-colors"><span className="material-symbols-outlined text-[20px]">person_remove</span></button>
</div>
</div>
</div>
{/* Pagination / Footer */}
<div className="p-md flex justify-between items-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant">
<span>Showing 1 to 2 of 24 Personnel</span>
<div className="flex gap-sm">
<button className="text-outline hover:text-primary disabled:opacity-50"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="text-outline hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</section>
{/* Role & Permissions Panel (4 Columns) */}
<aside className="lg:col-span-4 bg-surface-container-lowest rounded-lg border border-outline-variant ambient-shadow-level-1 p-lg flex flex-col gap-lg sticky top-[100px]">
{/* Panel Header */}
<div className="flex items-start gap-md border-b border-outline-variant pb-md">
<div className="w-16 h-16 rounded-full bg-outline-variant overflow-hidden flex-shrink-0">
<img alt="Elias Thorne" className="w-full h-full object-cover" data-alt="A distinguished older man with neat gray hair and wire-rimmed glasses, dressed in a tweed waistcoat. He appears focused, sitting in a warmly lit, high-end private library surrounded by leather-bound books. Luxury editorial photography style, muted warm colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ceFzZZFJpKiwulNWn1OPht5fu7igPzRgP5KuPy_PQA4m_iL8ozLOfqxYi4ZkUPOxBRUaXsCQ0YNJqEvwNT4hW5-LwdBwV8SJdw1inc_ZL3cfSVXz5uDAZwo3_a2K47qL8GkFnsvf-JvLfuZw81VtFPzFx7-4djiLea2rcXJHE1H53ZtogdfVnCKoScpEqgvJq8vmYYb1DZsfOffDLd-tyMHQO8rvlwfDdNyzlTpAClZibsXm_BOn5w" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Elias Thorne</h2>
<p className="font-label-md text-label-md text-on-surface-variant mb-1">Head Archivist</p>
<p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">shield_person</span> Master Clearance</p>
</div>
</div>
{/* Access Toggles */}
<div className="flex flex-col gap-md">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest border-b border-outline-variant/50 pb-xs">Vault Privileges</h3>
<div className="flex items-center justify-between py-xs">
<div>
<p className="font-body-md text-body-md font-bold text-primary">Catalog Access</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">View and search the central registry.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" disabled={true} id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between py-xs">
<div>
<p className="font-body-md text-body-md font-bold text-primary">Manuscript Editing</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Modify historical metadata.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
<div className="flex items-center justify-between py-xs">
<div>
<p className="font-body-md text-body-md font-bold text-primary">Order Fulfillment</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Process patron requests.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle3" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer" htmlFor="toggle3"></label>
</div>
</div>
</div>
{/* Danger Zone */}
<div className="mt-auto pt-lg border-t border-outline-variant">
<button className="w-full flex items-center justify-center gap-sm font-label-md text-label-md py-sm px-md rounded border border-error text-error hover:bg-error-container transition-colors">
<span className="material-symbols-outlined text-[18px]">gavel</span>
                        Revoke Access
                    </button>
</div>
</aside>
</div>
</main>
{/* Footer (Shared Component) */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container full-width bottom-0 border-t border-outline-variant/30 mt-auto">
<div className="w-full py-xxl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto gap-xl">
{/* Brand & Copyright */}
<div className="flex flex-col items-center md:items-start gap-sm">
<span className="font-headline-sm text-headline-sm font-bold text-on-primary flex items-center gap-2">
<span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: '\'FILL\' 1'}}>account_balance</span>
                    BookNest
                </span>
<p className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 text-center md:text-left">
                    © 1892-2024 BookNest Archival Society. All rights reserved.
                </p>
</div>
{/* Footer Links */}
<div className="flex flex-wrap justify-center gap-lg font-body-md text-body-md">
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Archival Standards</a>
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Conservation Policy</a>
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Terms of Access</a>
<a className="text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">The Vault</a>
</div>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
