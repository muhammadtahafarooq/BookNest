import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './AdminDashboardBooknestCommandCenter.css';

export default function AdminDashboardBooknestCommandCenter() {
    const navigate = useNavigate();
  return (
    <>
      {/* SIDEBAR */}
<aside className="w-64 bg-midnight-ink flex-shrink-0 hidden md:flex flex-col border-r border-slate-binding/20 relative z-20 shadow-elevated">
<div className="h-20 flex items-center px-gutter border-b border-white/10">
<span className="font-display-lg text-[24px] text-white tracking-tight">BookNest</span>
<span className="ml-2 px-2 py-0.5 rounded-full bg-antique-brass/20 text-antique-brass font-label-sm text-[10px] border border-antique-brass/30">PRO</span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
{/* Main */}
<div className="text-white/40 font-label-sm uppercase tracking-wider mb-2 px-4">Core</div>
<Link className="flex items-center px-4 py-2.5 rounded-xl bg-white/10 text-white font-label-md group transition-all duration-200" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined mr-3 text-antique-brass text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>dashboard</span>
                Dashboard
            </Link>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/catalogarchive">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">menu_book</span>
                Books
            </Link>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">category</span>
                Categories
            </Link>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/aboutusourstorybooknest">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">history_edu</span>
                Authors
            </Link>
{/* Commerce */}
<div className="text-white/40 font-label-sm uppercase tracking-wider mt-6 mb-2 px-4">Commerce</div>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">inventory_2</span>
                Inventory
            </Link>
<Link className="flex items-center justify-between px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/shopbrowsebooks">
<div className="flex items-center">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">shopping_cart</span>
                    Orders
                </div>
<span className="bg-antique-brass text-white font-label-sm px-2 py-0.5 rounded-full">12</span>
</Link>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">group</span>
                Customers
            </Link>
{/* Insights */}
<div className="text-white/40 font-label-sm uppercase tracking-wider mt-6 mb-2 px-4">Insights</div>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">bar_chart</span>
                Reports
            </Link>
<Link className="flex items-center px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white font-label-md group transition-all duration-200" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-white/50 group-hover:text-white/80 text-[20px]">rate_review</span>
                Reviews
            </Link>
</nav>
<div className="p-4 border-t border-white/10">
<Link className="flex items-center px-4 py-2 rounded-xl text-white/50 hover:text-white font-label-md transition-colors" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-3 text-[20px]">settings</span>
                Settings
            </Link>
</div>
</aside>
{/* MAIN CONTENT */}
<main className="flex-1 flex flex-col h-screen overflow-hidden bg-cloud-linen/30">
{/* HEADER */}
<header className="h-20 flex-shrink-0 bg-paper-mist border-b border-slate-binding/10 px-margin-desktop flex items-center justify-between z-10">
<div className="flex items-center flex-1 max-w-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-binding/50">search</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-binding/10 text-body-sm focus:outline-none focus:ring-2 focus:ring-midnight-ink/20 focus:border-midnight-ink transition-all shadow-sm font-body-sm text-slate-binding placeholder:text-slate-binding/40" placeholder="Search ISBN, Author, Title..." type="text" />
</div>
</div>
<div className="flex items-center space-x-4">
<button className="relative p-2 rounded-full text-slate-binding hover:bg-black/5 transition-colors" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-antique-brass rounded-full border border-paper-mist"></span>
</button>
<div className="w-px h-6 bg-slate-binding/10 mx-2"></div>
<div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
<div className="mr-3 text-right hidden sm:block">
<div className="font-label-md text-midnight-ink">Eleanor Vance</div>
<div className="font-label-sm text-slate-binding/60">Editor in Chief</div>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-cloud-linen">
<img className="w-full h-full object-cover" data-alt="A highly detailed close-up portrait of a professional female editor in her 40s. She has a warm but authoritative expression, wearing sophisticated wire-rimmed glasses and a tailored navy blazer. Soft, studio lighting creates a premium, corporate aesthetic. The background is a blurred, high-end library setting with dark wood tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzqQQVl0qQ3-q6Md8SzwotIqXxOs2LEePid9prj2ea3N0bILYejASM9jz2SbLBRyZk1yvED2fqggK9pTOghgpx284uXTMwAV18NC3_wBHTG0Pju7kvCCapkKB5-2-1tpied8MG2sWX82YpT1--pmSXdIX1eTLFzjHTa2EsKTeubTPUAqVniprV7TE1PtaTYGKZrHp2G3bfEN1pZhx0sOgufsru6jC35kpbGfYjwhNsjpsamANQDoR6" />
</div>
</div>
</div>
</header>
{/* CANVAS */}
<div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop">
<div className="max-w-container-max-width mx-auto space-y-6">
{/* Page Title */}
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="font-headline-lg text-midnight-ink">Executive Dashboard</h1>
<p className="font-body-sm text-slate-binding/70 mt-1">Today's publishing metrics and inventory status.</p>
</div>
<button className="bg-midnight-ink text-white px-5 py-2.5 rounded-xl font-label-md hover:bg-midnight-ink/90 transition-colors shadow-ambient flex items-center">
<span className="material-symbols-outlined mr-2 text-[18px]">add</span>
                        New Publication
                    </button>
</div>
{/* OVERVIEW METRICS (Bento Grid) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{/* Revenue */}
<div className="bg-white rounded-xl p-6 border border-slate-binding/10 shadow-ambient relative overflow-hidden group hover:border-antique-brass/30 transition-colors">
<div className="absolute top-0 right-0 w-24 h-24 bg-antique-brass/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-slate-binding/70 font-label-md">Total Revenue</span>
<span className="p-1.5 rounded-lg bg-library-forest/10 text-library-forest">
<span className="material-symbols-outlined text-[20px]">attach_money</span>
</span>
</div>
<div className="font-headline-lg text-midnight-ink text-4xl mb-1">$124,500</div>
<div className="flex items-center text-sm font-label-sm">
<span className="text-library-forest flex items-center bg-library-forest/10 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                                +12.5%
                            </span>
<span className="text-slate-binding/50 ml-2">vs last month</span>
</div>
</div>
{/* Orders */}
<div className="bg-white rounded-xl p-6 border border-slate-binding/10 shadow-ambient relative overflow-hidden group hover:border-antique-brass/30 transition-colors">
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-slate-binding/70 font-label-md">Active Orders</span>
<span className="p-1.5 rounded-lg bg-antique-brass/10 text-antique-brass">
<span className="material-symbols-outlined text-[20px]">local_shipping</span>
</span>
</div>
<div className="font-headline-lg text-midnight-ink text-4xl mb-1">842</div>
<div className="flex items-center text-sm font-label-sm">
<span className="text-library-forest flex items-center bg-library-forest/10 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                                +5.2%
                            </span>
<span className="text-slate-binding/50 ml-2">vs last month</span>
</div>
</div>
{/* Customers */}
<div className="bg-white rounded-xl p-6 border border-slate-binding/10 shadow-ambient relative overflow-hidden group hover:border-antique-brass/30 transition-colors">
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-slate-binding/70 font-label-md">New Customers</span>
<span className="p-1.5 rounded-lg bg-midnight-ink/10 text-midnight-ink">
<span className="material-symbols-outlined text-[20px]">person_add</span>
</span>
</div>
<div className="font-headline-lg text-midnight-ink text-4xl mb-1">1,204</div>
<div className="flex items-center text-sm font-label-sm">
<span className="text-library-forest flex items-center bg-library-forest/10 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                                +18.1%
                            </span>
<span className="text-slate-binding/50 ml-2">vs last month</span>
</div>
</div>
{/* Books Sold */}
<div className="bg-white rounded-xl p-6 border border-slate-binding/10 shadow-ambient relative overflow-hidden group hover:border-antique-brass/30 transition-colors">
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-slate-binding/70 font-label-md">Units Sold</span>
<span className="p-1.5 rounded-lg bg-slate-binding/10 text-slate-binding">
<span className="material-symbols-outlined text-[20px]">library_books</span>
</span>
</div>
<div className="font-headline-lg text-midnight-ink text-4xl mb-1">3,492</div>
<div className="flex items-center text-sm font-label-sm">
<span className="text-warning-amber flex items-center bg-warning-amber/10 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_down</span>
                                -2.4%
                            </span>
<span className="text-slate-binding/50 ml-2">vs last month</span>
</div>
</div>
</div>
{/* MAIN GRID */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* CHARTS & TABLES (Span 2) */}
<div className="lg:col-span-2 space-y-6">
{/* Sales Performance */}
<div className="bg-white rounded-xl p-6 border border-slate-binding/10 shadow-ambient h-[400px] flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-midnight-ink text-xl">Sales Performance</h2>
<div className="flex space-x-2">
<button className="px-3 py-1 rounded-md bg-cloud-linen text-slate-binding font-label-sm">Weekly</button>
<button className="px-3 py-1 rounded-md bg-midnight-ink text-white font-label-sm">Monthly</button>
</div>
</div>
<div className="flex-1 relative w-full border-b border-l border-slate-binding/10 flex items-end px-2">
{/* Minimalist pseudo-chart */}
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-binding/20"></div>
<div className="absolute bottom-[25%] left-0 w-full h-[1px] bg-slate-binding/5 border-dashed"></div>
<div className="absolute bottom-[50%] left-0 w-full h-[1px] bg-slate-binding/5 border-dashed"></div>
<div className="absolute bottom-[75%] left-0 w-full h-[1px] bg-slate-binding/5 border-dashed"></div>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="opacity-80" d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,20" fill="none" stroke="#23483A" stroke-width="2"></path>
<path d="M0,90 Q10,85 20,95 T40,80 T60,85 T80,60 T100,50" fill="none" stroke="#C89B3C" stroke-dasharray="4,4" stroke-width="2"></path>
{/* Area fill */}
<path d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,20 L100,100 L0,100 Z" fill="url(#grad)" opacity="0.1"></path>
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#23483A"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex justify-between text-slate-binding/50 font-label-sm mt-2 px-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
</div>
</div>
{/* Orders Table */}
<div className="bg-white rounded-xl border border-slate-binding/10 shadow-ambient overflow-hidden">
<div className="p-6 border-b border-slate-binding/10 flex justify-between items-center bg-surface-muted/50">
<h2 className="font-headline-md text-midnight-ink text-xl">Recent Orders</h2>
<Link className="text-antique-brass font-label-md hover:underline flex items-center" to="/shopbrowsebooks">
                                    View All <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</Link>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-cloud-linen/20 border-b border-slate-binding/10">
<th className="py-3 px-6 font-label-sm text-slate-binding/70 uppercase tracking-wider">Order ID</th>
<th className="py-3 px-6 font-label-sm text-slate-binding/70 uppercase tracking-wider">Customer</th>
<th className="py-3 px-6 font-label-sm text-slate-binding/70 uppercase tracking-wider">Date</th>
<th className="py-3 px-6 font-label-sm text-slate-binding/70 uppercase tracking-wider">Amount</th>
<th className="py-3 px-6 font-label-sm text-slate-binding/70 uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-binding/5 font-body-sm">
<tr className="hover:bg-cloud-linen/10 transition-colors">
<td className="py-4 px-6 font-label-md text-midnight-ink">#ORD-9021</td>
<td className="py-4 px-6">
<div className="font-medium text-slate-binding">Jonathan Crane</div>
</td>
<td className="py-4 px-6 text-slate-binding/70">Oct 24, 2024</td>
<td className="py-4 px-6 font-label-md text-midnight-ink">$142.50</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm bg-library-forest/10 text-library-forest border border-library-forest/20">
                                                    Shipped
                                                </span>
</td>
</tr>
<tr className="hover:bg-cloud-linen/10 transition-colors">
<td className="py-4 px-6 font-label-md text-midnight-ink">#ORD-9022</td>
<td className="py-4 px-6">
<div className="font-medium text-slate-binding">Amelia Pond</div>
</td>
<td className="py-4 px-6 text-slate-binding/70">Oct 24, 2024</td>
<td className="py-4 px-6 font-label-md text-midnight-ink">$89.99</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm bg-warning-amber/10 text-warning-amber border border-warning-amber/20">
                                                    Processing
                                                </span>
</td>
</tr>
<tr className="hover:bg-cloud-linen/10 transition-colors">
<td className="py-4 px-6 font-label-md text-midnight-ink">#ORD-9023</td>
<td className="py-4 px-6">
<div className="font-medium text-slate-binding">Arthur Hastings</div>
</td>
<td className="py-4 px-6 text-slate-binding/70">Oct 23, 2024</td>
<td className="py-4 px-6 font-label-md text-midnight-ink">$210.00</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm bg-slate-binding/10 text-slate-binding border border-slate-binding/20">
                                                    Pending
                                                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* SECONDARY COLUMN */}
<div className="space-y-6">
{/* Best Sellers (Floating Shelf) */}
<div className="bg-midnight-ink rounded-xl p-6 shadow-elevated relative overflow-hidden">
{/* Subtle background pattern */}
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<h2 className="font-headline-md text-white text-xl mb-6 relative z-10 flex items-center">
<span className="material-symbols-outlined mr-2 text-antique-brass">stars</span>
                                Current Bestsellers
                            </h2>
<div className="space-y-4 relative z-10">
{/* Book 1 */}
<div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
<div className="w-12 h-16 rounded shadow-sm overflow-hidden flex-shrink-0 book-tilt border border-white/10">
<img className="w-full h-full object-cover" data-alt="A minimalist book cover design featuring a bold, abstract geometric shape in deep gold against a stark navy blue background. The title 'The Silent Architect' is written in elegant, thin serif typography. Premium, matte finish aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDA1FJWonDpUEmR4PqnoYxAVXYvjMgL0vxySjgNI2WF6aENf2Say2zQFVPFvZtUAmZXN7zebvUk31FjQH4ddUOg7sVwYrwFrY3V4_gWtSrmO_d9pgU3i395sCOstaz3ZK6fIa3yvig_soh9MaAg_RyxXH_tfZgLfmI3_ThKQnPKWAd597gORBYMMFuCdffuzewWRblm2StoRl5dddyxc4J-AbI3JB56MX6k22_6s5nyVbP-k937V-" />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-md text-white truncate">The Silent Architect</h3>
<p className="font-body-sm text-white/50 truncate">Julian Barnes</p>
</div>
<div className="text-right">
<div className="font-label-md text-antique-brass">#1</div>
<div className="font-label-sm text-white/30">1.2k units</div>
</div>
</div>
{/* Book 2 */}
<div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
<div className="w-12 h-16 rounded shadow-sm overflow-hidden flex-shrink-0 book-tilt border border-white/10">
<img className="w-full h-full object-cover" data-alt="A sophisticated book cover featuring a macro photography shot of a single, withered winter leaf on a pale cream background. The title 'Winter's End' is embossed in dark green serif font. Evokes a sense of literary fiction and melancholy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC412QXfm8UYyyKdWEAxsit9E_-Thg_FkuSaE0z1sjbAV9i2bwBCuIvk_6PQednXkkIodLfn1VZPfkIYNz0kuu6CTeDbkpv0R31yCTQHOQeARadS16KYohYawxmD-rFCyAZFrhqUh3qoD9O3MKS6J6bCuyVKdejwwjffL2W-gIbrRT7nmQpqUUPAFycf--Wu3pWHM5sG_Gk3fowWufvyvUbBanBMBlG4YhhyubP8DGzAn4W0O_DHUU4" />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-md text-white truncate">Winter's End</h3>
<p className="font-body-sm text-white/50 truncate">Sarah Waters</p>
</div>
<div className="text-right">
<div className="font-label-md text-white/70">#2</div>
<div className="font-label-sm text-white/30">840 units</div>
</div>
</div>
{/* Book 3 */}
<div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
<div className="w-12 h-16 rounded shadow-sm overflow-hidden flex-shrink-0 book-tilt border border-white/10">
<img className="w-full h-full object-cover" data-alt="A non-fiction book cover design with a stark, typographic approach. Large, bold sans-serif letters spell 'CAPITAL' in dark grey against a stark white background with a thin red line cutting through it. Academic, authoritative, modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEUhn_BbQrSdUHN3n-MaJBs28mOUnW1_NPqsHYW8b9OOJ_enaNw1O7sUrKv8Bekga7LppYwDsVGY6Z3oF5xS5fo6hIo1vrCHNWCWVUhG90kV3w2LzyVcySzKTgWGYJS24oR58IV4ZdjCGnMhRAqyJrIcO3GGa1jW0KMz0ZJM7QPZynYpZzHIjE94Vc5XcZN_eqZaBpHNbMyCUR2cJlHqEVjVCAJAV3F0JnBnxlOCHVs8gjbeSusPxd" />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-md text-white truncate">Modern Capital</h3>
<p className="font-body-sm text-white/50 truncate">Thomas Piketty</p>
</div>
<div className="text-right">
<div className="font-label-md text-white/70">#3</div>
<div className="font-label-sm text-white/30">652 units</div>
</div>
</div>
</div>
</div>
{/* Low Stock Alert */}
<div className="bg-white rounded-xl border border-danger-rose/20 shadow-ambient overflow-hidden">
<div className="p-4 bg-danger-rose/5 border-b border-danger-rose/10 flex items-center">
<span className="material-symbols-outlined text-danger-rose mr-2">warning</span>
<h2 className="font-headline-md text-midnight-ink text-lg">Low Stock Alerts</h2>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-center p-2 rounded-lg hover:bg-cloud-linen/20 transition-colors">
<div>
<div className="font-label-md text-slate-binding">The Art of War (Special Ed.)</div>
<div className="font-body-sm text-slate-binding/50 text-xs">ISBN: 978-0-123456-47-2</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-danger-rose">12 left</span>
<button className="text-xs font-label-md text-antique-brass hover:underline mt-1">Restock</button>
</div>
</div>
<div className="w-full h-px bg-slate-binding/5"></div>
<div className="flex justify-between items-center p-2 rounded-lg hover:bg-cloud-linen/20 transition-colors">
<div>
<div className="font-label-md text-slate-binding">Meditations</div>
<div className="font-body-sm text-slate-binding/50 text-xs">ISBN: 978-0-987654-32-1</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-warning-amber">24 left</span>
<button className="text-xs font-label-md text-antique-brass hover:underline mt-1">Restock</button>
</div>
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
