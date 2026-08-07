import React, { useEffect } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './InventoryControlCenter.css';

export default function InventoryControlCenter() {
  
  useEffect(() => {
    // Simple script to update the mock timestamp to look alive
        function updateTimestamp() {
            const now = new Date();
            const dateStr = now.toISOString().split('T')[0].replace(/-/g, '.');
            const timeStr = now.toTimeString().split(' ')[0];
            document.getElementById('timestamp').textContent = `${dateStr} • ${timeStr} UTC`;
        }
        setInterval(updateTimestamp, 1000);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<header className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container docked full-width top-0 border-b border-outline-variant dark:border-outline shadow-md relative z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto">
<div className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container">
                BookNest
            </div>
<nav className="hidden md:flex gap-lg">
<Link className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200" to="/catalogarchive">Catalog</Link>
<Link className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200" to="/browsecollections">Collections</Link>
<Link className="font-label-md text-label-md text-on-primary dark:text-on-primary-container border-b-2 border-secondary-container pb-1" to="/shopbrowsebooks">Archives</Link>
<Link className="font-label-md text-label-md text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200" to="/shopbrowsebooks">Curations</Link>
</nav>
<div className="flex items-center gap-md">
<button className="scale-95 active:scale-90 transition-transform p-xs hover:bg-surface-variant/20 rounded-full">
<span className="material-symbols-outlined text-on-primary" data-icon="menu_book">menu_book</span>
</button>
<button className="scale-95 active:scale-90 transition-transform p-xs hover:bg-surface-variant/20 rounded-full">
<span className="material-symbols-outlined text-on-primary" data-icon="history">history</span>
</button>
<button className="ml-sm font-label-md text-label-md text-primary bg-secondary-container px-md py-sm rounded-DEFAULT scale-95 active:scale-90 transition-transform hover:bg-secondary-fixed" onClick={() => navigate('/loginbooknestprivatelibrary')}>
                    Sign In
                </button>
</div>
</div>
</header>
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
{/* Header Section */}
<div className="flex justify-between items-end mb-xl border-b border-outline-variant pb-md">
<div>
<h1 className="font-headline-lg text-headline-lg md:font-headline-lg-mobile md:text-headline-lg-mobile text-primary">Inventory Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Stock Control Center</p>
</div>
<div className="text-right">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Archive Timestamp</p>
<p className="font-body-md text-body-md text-primary font-medium" id="timestamp">2024.10.27 • 14:32:00 UTC</p>
</div>
</div>
{/* Inventory Overview Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xxl">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-label-md text-label-md text-on-surface-variant">Total Books</span>
<span className="material-symbols-outlined text-outline" data-icon="library_books">library_books</span>
</div>
<div className="font-headline-md text-headline-md text-primary">12,458</div>
<div className="mt-sm font-label-sm text-label-sm text-secondary">+145 this month</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[4px] brass-gradient"></div>
<div className="flex justify-between items-center mb-md">
<span className="font-label-md text-label-md text-on-surface-variant">Available Stock</span>
<span className="material-symbols-outlined text-outline" data-icon="check_circle">check_circle</span>
</div>
<div className="font-headline-md text-headline-md text-primary">11,204</div>
<div className="mt-sm font-label-sm text-label-sm text-secondary">Ready for circulation</div>
</div>
{/* Card 3 */}
<div className="bg-error-container/20 p-lg rounded-lg border border-error/30 shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-label-md text-label-md text-error">Low Stock</span>
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
</div>
<div className="font-headline-md text-headline-md text-error">84</div>
<div className="mt-sm font-label-sm text-label-sm text-error">Requires immediate review</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300">
<div className="flex justify-between items-center mb-md">
<span className="font-label-md text-label-md text-on-surface-variant">Out of Stock</span>
<span className="material-symbols-outlined text-outline" data-icon="inventory_2">inventory_2</span>
</div>
<div className="font-headline-md text-headline-md text-primary">12</div>
<div className="mt-sm font-label-sm text-label-sm text-on-surface-variant">Awaiting replenishment</div>
</div>
</div>
{/* Main Content Area: Table and Sidebar */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/* Stock Table Area */}
<div className="lg:col-span-8">
<h2 className="font-headline-sm text-headline-sm text-primary mb-lg">Active Inventory</h2>
<div className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-ambient-1 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="p-md font-label-md text-label-md text-on-surface-variant w-[50%]">Book Details</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Stock</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
<td className="p-md">
<div className="flex items-center gap-md">
<img className="w-12 h-16 object-cover rounded-sm border border-outline-variant shadow-sm" data-alt="A small thumbnail image of a vintage leather-bound book cover featuring gold foil stamping of geometric patterns, sitting on a dark wooden desk under soft ambient library lighting, rich textures, high resolution, editorial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkut9ntt5iCIvWUFhGRJYDJl9bkzdxJqlM-i_lR17YDPuHn7zAB13TaiWeo_I22o_lOWdFSPYkfmEjFQPLXoFf3D4TV1VYhHy1jHbqE3yPb8rGwuMvR2Owr9ooDXRbiixMRyKcp8FAQ2BzwXKhztVRg3PxBLdLeKsQuUlPURaDEKRRiREZBcB1dGGlcnLpn3FzoYdk6JqY9GnmuPpCNuFUFWsyAofIHOlPHVOBKrPPIW32sTlpH2u4hQ" />
<div>
<p className="font-body-md text-body-md text-primary font-medium">The Architecture of Time</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">SKU: ARC-842-11</p>
</div>
</div>
</td>
<td className="p-md font-body-md text-body-md">45</td>
<td className="p-md">
<span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-on-secondary-fixed text-[10px] font-bold uppercase tracking-wider">In Vault</span>
</td>
<td className="p-md text-right">
<div className="flex items-center justify-end gap-xs">
<button className="p-xs border border-outline-variant rounded-sm hover:bg-surface-variant hover:border-primary transition-colors"><span className="material-symbols-outlined text-[16px]">remove</span></button>
<button className="p-xs border border-outline-variant rounded-sm hover:bg-surface-variant hover:border-primary transition-colors"><span className="material-symbols-outlined text-[16px]">add</span></button>
</div>
</td>
</tr>
<tr className="border-b border-outline-variant bg-error-container/5 hover:bg-error-container/10 transition-colors">
<td className="p-md">
<div className="flex items-center gap-md">
<img className="w-12 h-16 object-cover rounded-sm border border-outline-variant shadow-sm" data-alt="A small thumbnail image of a modern minimalist book cover with abstract monochrome shapes, printed on matte archival paper, photographed straight on in a clean studio setting with neutral lighting, high-end editorial look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbUvCo36VebzIQApqHRHffJJpzzbCNCO70Aoi1RbYcpVP7iJdrDPZzH3TTbgeCsPaodv6_bAaTtAJxh5RCEJs_x3xcbDg-IL6-12UvPa62y-FjQVl9-w8kcPjdnJDaZNPc9NfwBEFaxqRAYycmN2rAZhQdnNQt6Ihh6zPtGNFQ-0q2BuqA8BWiRPJi-n21xW_ffe_565EPEycOIrag3cnyp8ra2wt2OkkH_6iM7xcCEouuZSvGrW0UIg" />
<div>
<p className="font-body-md text-body-md text-primary font-medium">Modernist Manifestos</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">SKU: MOD-221-04</p>
</div>
</div>
</td>
<td className="p-md font-body-md text-body-md text-error font-medium">3</td>
<td className="p-md">
<span className="inline-block px-sm py-xs rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-wider">Low Reserve</span>
</td>
<td className="p-md text-right">
<div className="flex items-center justify-end gap-xs">
<button className="p-xs border border-outline-variant rounded-sm hover:bg-surface-variant hover:border-primary transition-colors"><span className="material-symbols-outlined text-[16px]">remove</span></button>
<button className="p-xs border border-outline-variant rounded-sm hover:bg-surface-variant hover:border-primary transition-colors"><span className="material-symbols-outlined text-[16px]">add</span></button>
</div>
</td>
</tr>
</tbody>
</table>
<div className="p-md border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-10 of 12,458</span>
<div className="flex gap-sm">
<button className="px-md py-sm border border-outline-variant rounded-sm font-label-sm text-label-sm hover:bg-surface-variant">Previous</button>
<button className="px-md py-sm border border-outline-variant rounded-sm font-label-sm text-label-sm hover:bg-surface-variant">Next</button>
</div>
</div>
</div>
</div>
{/* Low Stock / Urgent Actions Sidebar */}
<div className="lg:col-span-4">
<div className="bg-surface-container-lowest p-lg rounded-lg border border-error/20 shadow-ambient-1 h-full flex flex-col">
<div className="flex items-center gap-sm mb-lg border-b border-error/20 pb-sm">
<span className="material-symbols-outlined text-error" data-icon="priority_high">priority_high</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Replenishment Required</h2>
</div>
<div className="flex-grow flex flex-col gap-md">
{/* Alert Item */}
<div className="p-md border border-outline-variant rounded-sm bg-surface-container-low hover:border-error transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<p className="font-body-md text-body-md text-primary font-medium mb-xs">Modernist Manifestos</p>
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Current Stock: 3</span>
<button className="font-label-sm text-label-sm text-primary underline underline-offset-2 hover:text-error">Order Restock</button>
</div>
</div>
{/* Alert Item */}
<div className="p-md border border-outline-variant rounded-sm bg-surface-container-low hover:border-outline transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
<p className="font-body-md text-body-md text-primary font-medium mb-xs">Echoes of the Old World</p>
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Current Stock: 0</span>
<button className="font-label-sm text-label-sm text-primary underline underline-offset-2">Review Status</button>
</div>
</div>
</div>
<button className="mt-lg w-full py-md font-label-md text-label-md text-on-secondary bg-primary hover:bg-inverse-surface rounded-sm transition-colors text-center border border-primary relative overflow-hidden group">
<span className="relative z-10">Generate Restock Report</span>
<div className="absolute inset-0 brass-gradient opacity-0 group-hover:opacity-20 transition-opacity"></div>
</button>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container full-width bottom-0 border-t border-outline-variant/30 mt-auto">
<div className="w-full py-xxl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto gap-xl md:gap-0">
<div className="font-headline-sm text-headline-sm font-bold text-on-primary text-center md:text-left">
                BookNest
                <p className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 mt-sm font-normal">© 1892-2024 BookNest Archival Society. All rights reserved.</p>
</div>
<nav className="flex flex-wrap justify-center md:justify-end gap-lg">
<Link className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" to="/shopbrowsebooks">Archival Standards</Link>
<Link className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" to="/shopbrowsebooks">Conservation Policy</Link>
<Link className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" to="/shopbrowsebooks">Terms of Access</Link>
<Link className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" to="/shopbrowsebooks">The Vault</Link>
</nav>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
