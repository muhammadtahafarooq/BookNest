import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './SalesIntelligenceLedger.css';

export default function SalesIntelligenceLedger() {
  
  useEffect(() => {
    // Simple script to handle active states on nav items if clicked (presentation only)
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Remove active classes from all siblings in the same nav list
                    const listItems = link.closest('ul')?.querySelectorAll('a') || link.parentElement.querySelectorAll('a');
                    listItems.forEach(l => {
                        l.classList.remove('bg-secondary-container', 'dark:bg-on-secondary-fixed-variant', 'text-on-secondary-container', 'dark:text-secondary-fixed', 'font-semibold', 'translate-x-1');
                        l.classList.add('text-on-surface-variant', 'dark:text-outline-variant');
                        
                        // For top nav
                        l.classList.remove('text-primary', 'dark:text-primary-fixed-dim', 'border-b-2', 'border-primary');
                    });
                    
                    // Add active classes to clicked link based on which nav it is
                    if(link.closest('nav').classList.contains('flex-col')) {
                        // SideNav
                        link.classList.remove('text-on-surface-variant', 'dark:text-outline-variant');
                        link.classList.add('bg-secondary-container', 'dark:bg-on-secondary-fixed-variant', 'text-on-secondary-container', 'dark:text-secondary-fixed', 'font-semibold', 'translate-x-1');
                    } else {
                        // TopNav
                        link.classList.remove('text-on-surface-variant', 'dark:text-outline-variant');
                        link.classList.add('text-primary', 'dark:text-primary-fixed-dim', 'border-b-2', 'border-primary');
                    }
                });
            });
        });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {/* SideNavBar (Hidden on Mobile) */}
<nav className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline shadow-sm dark:shadow-none p-md space-y-sm z-50">
{/* Header */}
<div className="flex items-center gap-md mb-xl p-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shrink-0">
<img alt="Library Seal" className="w-full h-full object-cover" data-alt="A small, elegant circular seal logo representing an imperial archive, featuring deep forest green and burnished brass tones on a soft archive white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2wK4jmsh1cFXR7qsVgKkpDhp6dIgkiIyIJwdNd2pZbSmF6TyHV48EdJVissOSjDkvqQr94to0aT1AZfxXK6d7gpXWIMO0-gsOTVVs5JYtmUA5vel10s0Yd1UQm3T3F20LSX5MDM5ZABINQ-W59j7dSz0n0O_Gj3GKskGeXEZePg5JvW2ttf_d1kcq8dRS1_ksdg0h1n_ICdcAOs4oaoMA1bsd8wcwj2aMFN9faQtJxPuLZ7qXEohag" />
</div>
<div>
<h1 className="font-headline-sm text-headline-sm font-semibold text-primary dark:text-primary-fixed-dim tracking-tight">Imperial Archive</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant">Management Suite</p>
</div>
</div>
{/* CTA */}
<button className="w-full bg-on-tertiary-container text-on-tertiary py-sm px-md rounded-DEFAULT font-label-md text-label-md mb-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
            Add New Volume
        </button>
{/* Navigation Links */}
<ul className="flex-1 space-y-xs">
<li>
<Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-all duration-300 rounded-lg" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
                    Overview
                </Link>
</li>
<li>
<Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-all duration-300 rounded-lg" to="/browsecollections">
<span className="material-symbols-outlined">library_books</span>
                    Collections
                </Link>
</li>
<li>
<Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-all duration-300 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined">shopping_cart</span>
                    Acquisitions
                </Link>
</li>
<li>
<Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed font-semibold rounded-lg translate-x-1 duration-150 transition-transform" to="/shopbrowsebooks">
<span className="material-symbols-outlined">payments</span>
                    Revenue
                </Link>
</li>
<li>
<Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-all duration-300 rounded-lg" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined">inventory_2</span>
                    Archives
                </Link>
</li>
</ul>
{/* Footer Links */}
<ul className="space-y-xs mt-auto pt-md border-t border-outline-variant/30">
<li>
            <Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-all duration-300 rounded-lg" to="/contact"> 
<span className="material-symbols-outlined">help_outline</span>
                    Support
                </Link>
</li>
<li>
<Link className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-all duration-300 rounded-lg" to="/shopbrowsebooks">
<span className="material-symbols-outlined">logout</span>
                    Sign Out
                </Link>
</li>
</ul>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-64 flex flex-col min-h-screen">
{/* TopAppBar (Visible on Mobile) */}
{/* <Navbar /> */}
<Navbar />
{/* TopAppBar (Visible on Desktop) */}
<header className="hidden md:flex w-full h-20 bg-surface dark:bg-surface-container-low border-b border-outline-variant dark:border-outline justify-between items-center px-margin-desktop sticky top-0 z-40">
<div className="flex items-center gap-xl">
<span className="font-headline-md text-headline-md font-bold tracking-tight text-primary dark:text-primary-fixed-dim">Librarian Intelligence</span>
<nav className="flex gap-lg h-full">
<Link className="h-full flex items-center font-label-md text-label-md text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" to="/dashboard/customerdashboardmypersonalbookshelf">Dashboard</Link>
<Link className="h-full flex items-center font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" to="/shopbrowsebooks" style={{marginBottom: '-2px'}}>Analytics</Link>
<Link className="h-full flex items-center font-label-md text-label-md text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" to="/admin/inventorycontrolcenter">Inventory</Link>
<Link className="h-full flex items-center font-label-md text-label-md text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" to="/shopbrowsebooks">Reports</Link>
<Link className="h-full flex items-center font-label-md text-label-md text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" to="/aboutusourstorybooknest">History</Link>
</nav>
</div>
<div className="flex items-center gap-md">
{/* Search (Conceptual location based on JSON, integrated into layout) */}
<div className="relative hidden lg:block">
<input className="bg-surface-container-low border border-outline-variant rounded-full py-2 pl-4 pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors w-64" placeholder="Search..." type="text" />
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant">search</span>
</div>
<div className="flex gap-sm text-on-surface-variant">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><span className="material-symbols-outlined">calendar_today</span></button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}><span className="material-symbols-outlined">notifications</span></button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors" onClick={() => navigate('/admin/admindashboardbooknestcommandcenter')}><span className="material-symbols-outlined">settings</span></button>
</div>
<div className="w-px h-8 bg-outline-variant mx-2"></div>
<button className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim hover:opacity-80 transition-opacity font-medium flex items-center gap-xs">
                     Export Report
                     <span className="material-symbols-outlined text-[18px]">download</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shrink-0 ml-4 border border-outline-variant">
<img alt="Chief Curator Profile" className="w-full h-full object-cover" data-alt="Profile picture of a chief curator in a library setting, soft lighting, professional attire, soft archive white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIW2BoS3HzkH9yix3l4EKqc9FV-sEyte4D2nSIejsUg7Jtju7G12Y9ySrJfqtf97IQJDBok3B16TCM39QYjORZ79CGOO0LMGAIJYJjq-vy9saua0ICDJDNGvioMmQzJMBgiQmiJFUKIUYg6X3tZGHdSppJOxxxb3ywR8YSVJuoAZumJlAA_s7ku4NNAyRUPuBkygIZC74I55h6PU3_sWdnfBLAiN4rQwowC0qOL5rKMIYYOQmRXNU3oA" />
</div>
</div>
</header>
{/* Canvas */}
<div className="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full flex-1">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-lg">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-sm tracking-tight">Financial Ledger</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Sales Intelligence &amp; Revenue Analytics</p>
</div>
{/* Date Filters */}
<div className="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant p-1 rounded-full card-shadow-1">
<button className="px-md py-sm rounded-full font-label-sm text-label-sm bg-on-tertiary-container text-on-tertiary shadow-sm transition-colors">Last 30 Days</button>
<button className="px-md py-sm rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">Quarter to Date</button>
<button className="px-md py-sm rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">Yearly Archive</button>
</div>
</div>
{/* Bento Grid Dashboard */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-xl">
{/* Metrics Row (3 columns on desktop) */}
<div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg card-shadow-1 card-shadow-2 chart-reveal chart-delay-1 flex flex-col justify-between h-48 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-secondary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Revenue</span>
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>payments</span>
</div>
<div className="relative z-10">
<div className="font-display-lg text-display-lg text-primary">$124,500</div>
<div className="flex items-center gap-xs mt-sm text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+12.4% vs last period</span>
</div>
</div>
</div>
<div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg card-shadow-1 card-shadow-2 chart-reveal chart-delay-2 flex flex-col justify-between h-48 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-surface-variant/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Orders</span>
<span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>inventory_2</span>
</div>
<div className="relative z-10">
<div className="font-display-lg text-display-lg text-primary">1,248</div>
<div className="flex items-center gap-xs mt-sm text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+5.2% vs last period</span>
</div>
</div>
</div>
<div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg card-shadow-1 card-shadow-2 chart-reveal chart-delay-3 flex flex-col justify-between h-48 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-surface-variant/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Order Value</span>
<span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_cart</span>
</div>
<div className="relative z-10">
<div className="font-display-lg text-display-lg text-primary">$99.76</div>
<div className="flex items-center gap-xs mt-sm text-error font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">trending_down</span>
<span>-1.1% vs last period</span>
</div>
</div>
</div>
{/* Main Charts Area */}
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg card-shadow-1 chart-reveal flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-headline-sm text-headline-sm text-primary">Revenue Trends</h3>
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
{/* Conceptual Line Chart (CSS representation) */}
<div className="flex-1 relative flex items-end justify-between px-md pb-md">
{/* Y-Axis Labels */}
<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-on-surface-variant font-label-sm text-label-sm pb-md">
<span>$15k</span>
<span>$10k</span>
<span>$5k</span>
<span>$0</span>
</div>
{/* Grid Lines */}
<div className="absolute inset-0 flex flex-col justify-between pb-md z-0 pointer-events-none pl-10">
<div className="w-full h-px bg-outline-variant/30"></div>
<div className="w-full h-px bg-outline-variant/30"></div>
<div className="w-full h-px bg-outline-variant/30"></div>
<div className="w-full h-px bg-outline-variant/50"></div>
</div>
{/* Data Points (Decorative) */}
<div className="relative z-10 w-full h-full flex items-end justify-between pl-10">
{/* SVG Path for Line Chart Curve */}
<svg className="absolute inset-0 h-full w-full pl-10 pb-md" preserveaspectratio="none" viewbox="0 0 100 100">
{/* Gradient Fill under curve */}
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#4e6355" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#4e6355" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,100 L0,70 Q10,60 20,65 T40,40 T60,50 T80,20 T100,10 L100,100 Z" fill="url(#chartGradient)"></path>
{/* Actual Line */}
<path d="M0,70 Q10,60 20,65 T40,40 T60,50 T80,20 T100,10" fill="none" stroke="#4e6355" stroke-linecap="round" stroke-width="2"></path>
</svg>
{/* X-Axis Labels */}
<div className="absolute bottom-0 w-full flex justify-between text-on-surface-variant font-label-sm text-label-sm pl-10 pr-2">
<span>Week 1</span>
<span>Week 2</span>
<span>Week 3</span>
<span>Week 4</span>
</div>
</div>
</div>
</div>
{/* Secondary Bar Chart */}
<div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg card-shadow-1 chart-reveal chart-delay-1 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-headline-sm text-headline-sm text-primary">Order Volume</h3>
<span className="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded-full text-on-surface-variant">Top Categories</span>
</div>
{/* Conceptual Bar Chart */}
<div className="flex-1 flex flex-col justify-end gap-md pb-md relative z-10 mt-auto">
<div className="flex items-end gap-4 h-48">
<div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-secondary/80 hover:bg-secondary transition-colors rounded-t-sm h-[60%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">420</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Fiction</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-outline/60 hover:bg-outline transition-colors rounded-t-sm h-[80%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">560</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Non-Fic</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-outline-variant/60 hover:bg-outline-variant transition-colors rounded-t-sm h-[35%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">245</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Rare</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-surface-tint/60 hover:bg-surface-tint transition-colors rounded-t-sm h-[15%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">105</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Misc</span>
</div>
</div>
</div>
</div>
</div>
{/* Action Bar at Bottom */}
<div className="flex justify-end mt-xl mb-xxl">
<button className="bg-on-tertiary-container text-on-tertiary px-lg py-md rounded-DEFAULT font-label-md text-label-md shadow-sm hover:shadow-md hover:opacity-90 transition-all flex items-center gap-sm">
<span className="material-symbols-outlined">description</span>
                    Export Ledger as PDF/CSV
                </button>
</div>
</div>
</main>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
