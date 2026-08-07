import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './AdminCommandCenter.css';

export default function AdminCommandCenter() {
    const navigate = useNavigate();
  return (
    <>
      <aside className="w-64 bg-primary-container text-on-primary-container hidden md:flex flex-col flex-shrink-0 border-r border-outline-variant h-screen sticky top-0">
<div className="p-lg border-b border-outline-variant/30 flex items-center gap-sm">
<span className="material-symbols-outlined font-headline-md text-headline-md font-bold text-on-primary">menu_book</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-primary tracking-tight">BookNest Admin</span>
</div>
<nav className="flex-1 overflow-y-auto p-md space-y-sm">
<Link className="flex items-center gap-md px-md py-sm rounded-lg bg-secondary-container/20 text-on-primary font-label-md text-label-md border-l-2 border-secondary-container" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>dashboard</span>
                Dashboard
            </Link>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/catalogarchive">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>book</span>
                Books
            </Link>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>category</span>
                Categories
            </Link>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>group</span>
                Authors
            </Link>
<div className="pt-md pb-xs">
<span className="px-md font-label-sm text-label-sm text-outline uppercase tracking-wider">Commerce</span>
</div>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>shopping_cart</span>
                Orders
            </Link>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>inventory_2</span>
                Inventory
            </Link>
<div className="pt-md pb-xs">
<span className="px-md font-label-sm text-label-sm text-outline uppercase tracking-wider">System</span>
</div>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>analytics</span>
                Analytics
            </Link>
<Link className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-secondary-container/10 transition-colors font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>settings</span>
                Settings
            </Link>
</nav>
<div className="p-lg border-t border-outline-variant/30 flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A formal, high-quality portrait of a distinguished bookstore archivist in a dimly lit, wood-paneled office. The archivist wears a classic tweed jacket and round glasses, looking directly at the camera. The lighting is warm and directional, reminiscent of luxury editorial photography, with deep shadows and soft highlights on the face." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAeEUYLeZlEL1hv6ZSsZDKTTJIkzXpSFJYB1-7vvbhGkvueXynjsjbzC7_52PxPgg0y0J1XxDpKM1oorMHmDZ3PuBMlSw1EFDopXbzDuVQ5y_qBiNTwEfi8s8_QCAJWcwzfsWnhedEdLgOVz82BDwo400l42J5EXiYiCLn-U-ZxvhRBWsTFivYChQ9zZRH8T4ssQjaRFLf87muTByVjr1a27ck0Uklj-LaDI-2gqrWBsTYcuBmAvOrYw" />
</div>
<div>
<p className="font-label-md text-label-md text-on-primary">Archivist Admin</p>
<p className="font-label-sm text-label-sm text-on-primary-container">admin@booknest.arch</p>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-h-screen bg-background fade-in">
<header className="h-20 border-b border-outline-variant bg-surface flex items-center justify-between px-margin-desktop sticky top-0 z-10">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-xl pr-md py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface transition-colors" placeholder="Search archives, orders, or ISBNs..." type="text" />
</div>
</div>
<div className="flex items-center gap-lg ml-auto">
<button className="relative text-on-surface-variant hover:text-primary transition-colors" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-2 rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>add</span>
                    Quick Action
                </button>
</div>
</header>
<div className="p-margin-desktop max-w-[1280px] mx-auto w-full space-y-xl flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
<div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant luxury-shadow flex flex-col gap-sm">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-md text-label-md">Total Revenue</span>
<span className="material-symbols-outlined">account_balance</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary mt-sm">$124,500</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-xs">
<span className="material-symbols-outlined" style={{fontSize: '14px'}}>trending_up</span>
                        +12.5% from last month
                    </div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant luxury-shadow flex flex-col gap-sm">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-md text-label-md">Orders Pending</span>
<span className="material-symbols-outlined">inventory</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary mt-sm">342</div>
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined" style={{fontSize: '14px'}}>pending_actions</span>
                        48 require attention
                    </div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant luxury-shadow flex flex-col gap-sm">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-md text-label-md">Active Readers</span>
<span className="material-symbols-outlined">group</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary mt-sm">12,840</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-xs">
<span className="material-symbols-outlined" style={{fontSize: '14px'}}>trending_up</span>
                        +5.2% new registrations
                    </div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant luxury-shadow flex flex-col gap-sm">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-md text-label-md">Catalog Titles</span>
<span className="material-symbols-outlined">library_books</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary mt-sm">4,521</div>
<div className="font-label-sm text-label-sm text-error flex items-center gap-xs">
<span className="material-symbols-outlined" style={{fontSize: '14px'}}>warning</span>
                        12 titles low stock
                    </div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant luxury-shadow p-lg flex flex-col min-h-[400px]">
<div className="flex justify-between items-center mb-lg">
<h2 className="font-headline-sm text-headline-sm text-primary">Revenue Overview</h2>
<div className="flex gap-sm">
<button className="px-md py-xs rounded bg-surface-container font-label-sm text-label-sm text-on-surface">Weekly</button>
<button className="px-md py-xs rounded bg-primary text-on-primary font-label-sm text-label-sm">Monthly</button>
</div>
</div>
<div className="flex-1 bg-surface-container-low rounded border border-outline-variant/50 relative overflow-hidden flex items-end">
<div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-secondary-container/20 to-transparent"></div>
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q10,70 20,75 T40,60 T60,50 T80,30 T100,20 L100,100 L0,100 Z" fill="rgba(206, 230, 212, 0.2)"></path>
<path d="M0,80 Q10,70 20,75 T40,60 T60,50 T80,30 T100,20" fill="none" stroke="#52685a" stroke-width="2"></path>
</svg>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-lg">
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant luxury-shadow p-lg">
<h2 className="font-headline-sm text-headline-sm text-primary mb-md">Low Stock Alerts</h2>
<ul className="space-y-md">
<li className="flex items-start justify-between pb-sm border-b border-outline-variant/30 last:border-0">
<div>
<p className="font-label-md text-label-md text-primary">The Count of Monte Cristo</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Leatherbound Edition</p>
</div>
<span className="bg-error-container text-on-error-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">3 Left</span>
</li>
<li className="flex items-start justify-between pb-sm border-b border-outline-variant/30 last:border-0">
<div>
<p className="font-label-md text-label-md text-primary">Dune</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Folio Society</p>
</div>
<span className="bg-error-container text-on-error-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">1 Left</span>
</li>
</ul>
<button className="w-full mt-md py-sm text-center font-label-sm text-label-sm text-primary border border-outline-variant rounded hover:bg-surface-container transition-colors" onClick={() => navigate('/shopbrowsebooks')}>View All Inventory</button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
