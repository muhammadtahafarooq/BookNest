import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './InventoryManagementBooknestAdminControl.css';

export default function InventoryManagementBooknestAdminControl() {
    const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar */}
<nav className="hidden md:flex bg-primary-container dark:bg-primary-container shadow-md docked h-full w-64 left-0 top-0 fixed left-0 top-0 h-screen flex flex-col py-margin-desktop z-50 text-secondary-fixed dark:text-secondary-fixed-dim">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-antique-brass flex items-center justify-center text-surface-bright font-bold">
<span className="material-symbols-outlined" data-weight="fill">menu_book</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-bright">BookNest</h1>
<p className="font-body-sm text-body-sm text-on-primary-container">Admin Console</p>
</div>
</div>
</div>
<div className="px-4 mb-6">
<button className="w-full bg-antique-brass hover:bg-antique-brass/90 text-surface-bright font-label-md text-label-md py-3 rounded-custom flex items-center justify-center gap-2 transition-colors duration-400">
<span className="material-symbols-outlined">add</span>
                Add New Title
            </button>
</div>
<ul className="flex-1 flex flex-col gap-1 overflow-y-auto w-full px-2">
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-4 text-secondary-fixed-dim font-bold border-l-4 border-antique-brass bg-on-primary-fixed-variant text-surface-bright pl-4 py-3 rounded-r-lg Active: opacity-90 transition-all duration-200" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</li>
</ul>
<div className="mt-auto px-2 pt-4 border-t border-on-primary-fixed-variant">
<ul className="flex flex-col gap-1 w-full">
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-4 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400 rounded-lg" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-md text-label-md">Support</span>
</Link>
</li>
</ul>
</div>
</nav>
{/* TopAppBar */}
<header className="hidden md:flex bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim docked full-width top-0 border-b border-outline-variant flat no shadows fixed top-0 right-0 left-64 flex justify-between items-center h-20 px-margin-desktop z-40 bg-surface/80 backdrop-blur-md">
<div className="flex items-center gap-6 flex-1">
<h2 className="font-headline-md text-headline-md font-semibold text-midnight-ink">Inventory Control</h2>
<div className="relative w-96 ml-8">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-slate-binding/10 rounded-full focus:outline-none focus:border-antique-brass focus:ring-1 focus:ring-antique-brass font-body-sm text-body-sm text-midnight-ink" placeholder="Search inventory..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-antique-brass transition-colors duration-400 relative" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-danger-rose rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-antique-brass transition-colors duration-400">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant"></div>
<button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<img alt="Administrator Avatar" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a mature publishing house administrator, wearing round spectacles and a neat navy blazer. Soft, natural light illuminating a clean, modern office background. Professional, high-quality photograph, minimalist corporate style, sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCbq4buiUvNCPx01rz6LAnRt2g72D61ywYSRzmPyUY5qB72gb_BizU_H8ucH77t--8ozfEUJKSKWsyTHzkr_sdDSdnBXu35pA6apa4NLBF2W-VrFPFSO8-_hCm-67LFaKLUTpkTFHnZArJB1dfwF0bFshpfp2LmXkDT_KLRQR--HM6GDT5LMwbnqNvTq98QoqziJWncPWu9RNVNOoC-VVUQir-YmAQI6DYSvRKguUg1g0D7x4FaX4" />
<span className="font-label-md text-label-md font-medium hidden lg:block text-midnight-ink">Admin Profile</span>
<span className="material-symbols-outlined text-outline">expand_more</span>
</button>
</div>
</header>
{/* Main Content */}
<main className="md:ml-64 pt-24 px-margin-mobile md:px-margin-desktop pb-12 max-w-container-max-width mx-auto">
{/* Inventory Summary Cards */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-surface-container-lowest rounded-custom p-6 ambient-shadow glass-border relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-success-emerald" style={{fontVariationSettings: '\'FILL\' 1'}}>inventory_2</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Total Stock</h3>
<div className="flex items-end gap-4">
<span className="font-display-lg text-display-lg text-midnight-ink">12,482</span>
<span className="flex items-center text-success-emerald font-label-sm text-label-sm pb-2 bg-success-emerald/10 px-2 rounded-full">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +5.2%
                    </span>
</div>
<p className="font-body-sm text-body-sm text-outline mt-2">Across all warehouses</p>
</div>
<div className="bg-surface-container-lowest rounded-custom p-6 ambient-shadow glass-border relative overflow-hidden group border-l-4 border-l-antique-brass">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-antique-brass" style={{fontVariationSettings: '\'FILL\' 1'}}>warning</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Low Stock</h3>
<div className="flex items-end gap-4">
<span className="font-display-lg text-display-lg text-midnight-ink">42</span>
<span className="font-label-sm text-label-sm text-antique-brass pb-2">Titles</span>
</div>
<p className="font-body-sm text-body-sm text-outline mt-2">Requires attention soon</p>
</div>
<div className="bg-surface-container-lowest rounded-custom p-6 ambient-shadow glass-border relative overflow-hidden group border-l-4 border-l-danger-rose">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-danger-rose" style={{fontVariationSettings: '\'FILL\' 1'}}>error</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Out of Stock</h3>
<div className="flex items-end gap-4">
<span className="font-display-lg text-display-lg text-midnight-ink">8</span>
<span className="font-label-sm text-label-sm text-danger-rose pb-2">Titles</span>
</div>
<p className="font-body-sm text-body-sm text-outline mt-2">Action required immediately</p>
</div>
</section>
{/* Main Layout Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Inventory Table Area */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-custom ambient-shadow glass-border overflow-hidden">
<div className="p-6 border-b glass-border flex justify-between items-center bg-surface-bright">
<h3 className="font-headline-md text-headline-md text-midnight-ink">Current Inventory</h3>
<div className="flex gap-2">
<button className="p-2 border glass-border rounded-lg hover:bg-surface-container transition-colors text-midnight-ink">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="p-2 border glass-border rounded-lg hover:bg-surface-container transition-colors text-midnight-ink">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b glass-border bg-surface-muted">
<th className="font-label-md text-label-md text-on-surface-variant p-4 font-semibold">Book Title</th>
<th className="font-label-md text-label-md text-on-surface-variant p-4 font-semibold">Stock Level</th>
<th className="font-label-md text-label-md text-on-surface-variant p-4 font-semibold">Status</th>
<th className="font-label-md text-label-md text-on-surface-variant p-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-slate-binding/10">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-4 flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded shadow-sm overflow-hidden flex-shrink-0">
<img alt="The Silent Echo" className="w-full h-full object-cover" data-alt="A vintage-style book cover design featuring ornate gold foil typography on a deep crimson background. The texture of worn leather is visible. High quality, realistic render, elegant publishing aesthetic, perfect lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA31tYfxDMrRO6Dyoicq8x6XLydIeauKNh4koBHpaIovys7sT98JE-nfB_h_KmzxcUzyzxiLBq7_qUYJl7t9xDRrT9zuD-EpaDM_7I2CJu9fMKM_qwSWYQ7q_tokKk5Mpe3n4sjUz8f2721lnxo2oyqwEZxR7-J7SkiIWw9WoLJDa-ZaJXhe--EJkRWZlflPY_Kj_UXEkbFcc2sWAYaOl95n_urFiqzzLvxNJXc1RUF8LfyjzZTgYeo" />
</div>
<div>
<p className="font-headline-sm text-midnight-ink font-semibold" style={{fontFamily: '\'Fraunces\', serif'}}>The Silent Echo</p>
<p className="text-on-surface-variant text-sm mt-1">Elena Rostova</p>
</div>
</td>
<td className="p-4 align-middle">
<div className="flex items-center gap-3">
<span className="font-label-md text-midnight-ink w-12">845</span>
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-success-emerald w-3/4 rounded-full"></div>
</div>
</div>
</td>
<td className="p-4 align-middle">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-emerald/10 text-success-emerald font-label-sm border border-success-emerald/20">
                                        In Stock
                                    </span>
</td>
<td className="p-4 align-middle text-right">
<button className="text-antique-brass hover:text-antique-brass/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-4 flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded shadow-sm overflow-hidden flex-shrink-0">
<img alt="Architecture of Tomorrow" className="w-full h-full object-cover" data-alt="A modern minimalist book cover with stark geometric shapes in teal and ochre on a pure white background. Crisp sans-serif typography. High resolution, clean corporate publishing style, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhqsOOQBkYxOZo1lRvJyredNV6IuijKH1tgGLViFNKIy5tKL8494BA9TyWlCMeN1WhhPW1ATWRYAXjAU36sRfFe_ufC4yiJaAe8BrTUMnuKTilGjt2JxpC7mBQaxjTnkR42-_j-36HxXCiagAX9opO41cqTacaiEdQPI7OH2SZUWbXXF5729EFs1vaaXMrCdRkxjuSPpEc6aIdQjN5Xo54e-J5E7XGIplC6r7Sv6AU8Mm3CeCr_GnC" />
</div>
<div>
<p className="font-headline-sm text-midnight-ink font-semibold" style={{fontFamily: '\'Fraunces\', serif'}}>Architecture of Tomorrow</p>
<p className="text-on-surface-variant text-sm mt-1">David Chen</p>
</div>
</td>
<td className="p-4 align-middle">
<div className="flex items-center gap-3">
<span className="font-label-md text-midnight-ink w-12">42</span>
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-warning-amber w-1/4 rounded-full"></div>
</div>
</div>
</td>
<td className="p-4 align-middle">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-amber/10 text-warning-amber font-label-sm border border-warning-amber/20">
                                        Low Stock
                                    </span>
</td>
<td className="p-4 align-middle text-right">
<button className="text-antique-brass hover:text-antique-brass/80 font-label-sm uppercase tracking-wider text-xs px-3 py-1 border border-antique-brass rounded hover:bg-antique-brass/5 transition-colors">
                                        Restock
                                    </button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors group bg-danger-rose/5">
<td className="p-4 flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded shadow-sm overflow-hidden flex-shrink-0 relative">
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-[16px]">visibility_off</span>
</div>
<img alt="Whispers in the Mist" className="w-full h-full object-cover opacity-50" data-alt="A faded, melancholic book cover depicting a lone silhouette walking through a misty forest. Muted greys and blues. Atmospheric, high quality print style, cinematic mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnMXeAZDmvotjgamv2W3L_RcHUtVMmtsNu3tXc_HCbDtIto7eS6eJ7fUIC-0wC-9qMRfcqy_a6zBV1iBhnXj1W771q8GZ0r6c_S4cwiZbZc_TN0TXJ1k5JjlxbrTmVzTK1MzcKxlD2eGBWz1iHzAOyyXhMiX3yHQd65cQQw6nadx8OMh-77vpi3VE2KVjrVROtgpuoNSwdFeMFT2UjhIT0ld4Z98lvMyhuDii7OgtfkDo1LJAEQt7h" />
</div>
<div>
<p className="font-headline-sm text-midnight-ink font-semibold" style={{fontFamily: '\'Fraunces\', serif'}}>Whispers in the Mist</p>
<p className="text-on-surface-variant text-sm mt-1">Sarah Jenkins</p>
</div>
</td>
<td className="p-4 align-middle">
<div className="flex items-center gap-3">
<span className="font-label-md text-danger-rose w-12">0</span>
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-danger-rose w-0 rounded-full"></div>
</div>
</div>
</td>
<td className="p-4 align-middle">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-rose/10 text-danger-rose font-label-sm border border-danger-rose/20">
                                        Out of Stock
                                    </span>
</td>
<td className="p-4 align-middle text-right">
<button className="bg-antique-brass text-white hover:bg-antique-brass/90 font-label-sm uppercase tracking-wider text-xs px-3 py-1 rounded transition-colors shadow-sm">
                                        Urgent Order
                                    </button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-4 flex items-center gap-4">
<div className="w-12 h-16 bg-surface-variant rounded shadow-sm overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-surface-tint flex items-center justify-center text-white font-serif text-xl">
                                            G
                                        </div>
</div>
<div>
<p className="font-headline-sm text-midnight-ink font-semibold" style={{fontFamily: '\'Fraunces\', serif'}}>Gardening for Beginners</p>
<p className="text-on-surface-variant text-sm mt-1">Tom Hardy</p>
</div>
</td>
<td className="p-4 align-middle">
<div className="flex items-center gap-3">
<span className="font-label-md text-midnight-ink w-12">1,204</span>
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-success-emerald w-full rounded-full"></div>
</div>
</div>
</td>
<td className="p-4 align-middle">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-emerald/10 text-success-emerald font-label-sm border border-success-emerald/20">
                                        In Stock
                                    </span>
</td>
<td className="p-4 align-middle text-right">
<button className="text-antique-brass hover:text-antique-brass/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t glass-border bg-surface-bright flex justify-between items-center text-sm text-outline">
<span>Showing 1 to 4 of 2,492 entries</span>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-outline"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-midnight-ink text-white">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-midnight-ink">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-midnight-ink">3</button>
<span className="w-8 h-8 flex items-center justify-center text-outline">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-outline"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
{/* Stock Alert Section */}
<div className="lg:col-span-1">
<div className="bg-midnight-ink rounded-custom p-6 shadow-lg text-surface-bright sticky top-28">
<div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
<span className="material-symbols-outlined text-antique-brass text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>assignment_late</span>
<h3 className="font-headline-md text-headline-md text-surface-bright" style={{fontFamily: '\'Fraunces\', serif'}}>Restock Queue</h3>
</div>
<div className="space-y-4">
{/* Alert Item */}
<div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-antique-brass/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-surface font-body-md">Architecture of Tomorrow</h4>
<span className="bg-antique-brass/20 text-antique-brass text-[10px] px-2 py-0.5 rounded font-label-sm uppercase tracking-wider border border-antique-brass/30">Priority</span>
</div>
<div className="flex justify-between items-end mt-4 text-sm text-surface-dim">
<div>
<p className="font-label-sm text-surface-muted">Current: 42</p>
<p className="font-label-sm text-surface-muted">Target: 200</p>
</div>
<button className="text-antique-brass hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                                    Queue Order <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/* Alert Item */}
<div className="p-4 bg-danger-rose/10 rounded-lg border border-danger-rose/20 hover:border-danger-rose/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-surface font-body-md">Whispers in the Mist</h4>
<span className="bg-danger-rose/20 text-danger-rose text-[10px] px-2 py-0.5 rounded font-label-sm uppercase tracking-wider border border-danger-rose/30">Critical</span>
</div>
<div className="flex justify-between items-end mt-4 text-sm text-surface-dim">
<div>
<p className="font-label-sm text-surface-muted">Current: 0</p>
<p className="font-label-sm text-surface-muted">Target: 150</p>
</div>
<button className="text-danger-rose hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                                    Rush Order <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/* Alert Item */}
<div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-antique-brass/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-surface font-body-md">The Artisan Bread Maker</h4>
<span className="bg-surface-container-high/20 text-surface-container-high text-[10px] px-2 py-0.5 rounded font-label-sm uppercase tracking-wider border border-white/10">Standard</span>
</div>
<div className="flex justify-between items-end mt-4 text-sm text-surface-dim">
<div>
<p className="font-label-sm text-surface-muted">Current: 85</p>
<p className="font-label-sm text-surface-muted">Target: 300</p>
</div>
<button className="text-antique-brass hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                                    Queue Order <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<button className="w-full mt-6 py-3 border border-antique-brass text-antique-brass rounded-lg hover:bg-antique-brass hover:text-midnight-ink transition-colors font-label-md" onClick={() => navigate('/shopbrowsebooks')}>
                        Review All Alerts
                    </button>
</div>
</div>
</div>
</main>
    </>
  );
}
