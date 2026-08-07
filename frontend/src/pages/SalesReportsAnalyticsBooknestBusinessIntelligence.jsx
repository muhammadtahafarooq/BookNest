import React from 'react';

import { Link } from 'react-router-dom';
import './SalesReportsAnalyticsBooknestBusinessIntelligence.css';

export default function SalesReportsAnalyticsBooknestBusinessIntelligence() {
  return (
    <>
      {/* 1. SIDEBAR (Reconstructed from JSON) */}
<nav className="fixed left-0 top-0 h-screen flex flex-col py-margin-desktop bg-midnight-ink docked h-full w-64 shadow-md z-50">
{/* Header / Logo */}
<div className="px-6 mb-12 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-antique-brass flex items-center justify-center text-white font-headline-md">B</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-bright">BookNest</h1>
<p className="font-body-sm text-body-sm text-surface-bright opacity-70">Admin Console</p>
</div>
</div>
{/* Main Navigation */}
<ul className="flex flex-col flex-grow">
<li>
<Link className="flex items-center gap-3 text-surface-bright font-medium pl-5 py-3 hover:bg-white/10 transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-surface-bright font-medium pl-5 py-3 hover:bg-white/10 transition-colors duration-400" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined">menu_book</span>
<span>Inventory</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-surface-bright font-medium pl-5 py-3 hover:bg-white/10 transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">person_edit</span>
<span>Author Management</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-surface-bright font-medium pl-5 py-3 hover:bg-white/10 transition-colors duration-400" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined">receipt_long</span>
<span>Orders</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-surface-bright font-medium pl-5 py-3 hover:bg-white/10 transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">group</span>
<span>Customers</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-antique-brass font-bold border-l-4 border-antique-brass pl-4 py-3 bg-white/5" to="/shopbrowsebooks">
<span className="material-symbols-outlined">analytics</span>
<span>Analytics</span>
</Link>
</li>
</ul>
{/* Footer / CTA */}
<div className="px-5 mt-auto">
<button className="w-full bg-antique-brass text-white font-label-md text-label-md py-3 rounded hover:bg-opacity-90 transition-colors duration-200 mb-6">
                Add New Title
            </button>
<ul className="flex flex-col gap-2">
<li>
<Link className="flex items-center gap-3 text-surface-bright opacity-70 hover:opacity-100 font-medium py-2 transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-surface-bright opacity-70 hover:opacity-100 font-medium py-2 transition-colors duration-400" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">help_outline</span>
<span>Support</span>
</Link>
</li>
</ul>
</div>
</nav>
{/* MAIN CANVAS */}
<main className="ml-64 min-h-screen px-margin-desktop py-margin-desktop max-w-container-max-width mx-auto">
{/* 2. HEADER */}
<header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
<div>
<h2 className="font-display-lg text-display-lg text-midnight-ink mb-2">Business Analytics</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Comprehensive insights into publishing and sales performance.</p>
</div>
<div className="flex items-center gap-4">
{/* Date Range Picker */}
<div className="relative flex items-center bg-white border border-outline-variant rounded-full px-4 py-2 hover:border-antique-brass cursor-pointer transition-colors shadow-sm">
<span className="material-symbols-outlined text-on-surface-variant mr-2 text-[20px]">calendar_today</span>
<span className="font-label-md text-label-md text-midnight-ink">Last 30 Days</span>
<span className="material-symbols-outlined text-on-surface-variant ml-2 text-[20px]">expand_more</span>
</div>
{/* Export Button */}
<button className="flex items-center gap-2 bg-antique-brass text-white px-6 py-2 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all shadow-md">
<span className="material-symbols-outlined text-[20px]">download</span>
                    Export Report
                </button>
</div>
</header>
{/* 3. REVENUE ANALYTICS (Top High-Level Stats) */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
{/* Stat Card 1 */}
<div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high">
<div className="flex justify-between items-start mb-4">
<p className="font-label-md text-label-md text-on-surface-variant">TOTAL REVENUE</p>
<span className="material-symbols-outlined text-antique-brass bg-antique-brass/10 p-2 rounded-full">payments</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-midnight-ink font-bold mb-2">$142,590.00</h3>
<div className="flex items-center gap-2 text-success-emerald font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+12.5% vs last month</span>
</div>
</div>
{/* Stat Card 2 */}
<div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high">
<div className="flex justify-between items-start mb-4">
<p className="font-label-md text-label-md text-on-surface-variant">AVG. ORDER VALUE</p>
<span className="material-symbols-outlined text-antique-brass bg-antique-brass/10 p-2 rounded-full">shopping_bag</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-midnight-ink font-bold mb-2">$68.40</h3>
<div className="flex items-center gap-2 text-success-emerald font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+3.2% vs last month</span>
</div>
</div>
{/* Stat Card 3 */}
<div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high">
<div className="flex justify-between items-start mb-4">
<p className="font-label-md text-label-md text-on-surface-variant">SALES GROWTH</p>
<span className="material-symbols-outlined text-antique-brass bg-antique-brass/10 p-2 rounded-full">auto_graph</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-midnight-ink font-bold mb-2">18.4%</h3>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">trending_flat</span>
<span>Stable trajectory</span>
</div>
</div>
</section>
{/* Revenue Chart Section */}
<section className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high mb-8">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-midnight-ink">Revenue Trends</h3>
<div className="flex gap-2">
<button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-surface-muted border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors">Daily</button>
<button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-antique-brass text-white shadow-sm">Weekly</button>
<button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-surface-muted border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors">Monthly</button>
</div>
</div>
<div className="h-72 w-full relative">
{/* SVG Chart Mockup */}
<svg className="w-full h-full overflow-visible" viewbox="0 0 800 250">
<defs>
<lineargradient id="gradient-brass" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#C89B3C" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#C89B3C" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
{/* Grid Lines */}
<line className="chart-grid" x1="0" x2="800" y1="0" y2="0"></line>
<line className="chart-grid" x1="0" x2="800" y1="50" y2="50"></line>
<line className="chart-grid" x1="0" x2="800" y1="100" y2="100"></line>
<line className="chart-grid" x1="0" x2="800" y1="150" y2="150"></line>
<line className="chart-grid" x1="0" x2="800" y1="200" y2="200"></line>
<line className="chart-grid" x1="0" x2="800" y1="250" y2="250"></line>
{/* Y-Axis Labels (JetBrains Mono) */}
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="end" x="-10" y="5">100k</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="end" x="-10" y="55">80k</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="end" x="-10" y="105">60k</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="end" x="-10" y="155">40k</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="end" x="-10" y="205">20k</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="end" x="-10" y="255">0</text>
{/* X-Axis Labels */}
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="middle" x="0" y="270">Week 1</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="middle" x="200" y="270">Week 2</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="middle" x="400" y="270">Week 3</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="middle" x="600" y="270">Week 4</text>
<text fill="#76777d" font-family="JetBrains Mono" font-size="12" text-anchor="middle" x="800" y="270">Week 5</text>
{/* Area */}
<path className="chart-area" d="M0,200 L100,180 L200,120 L300,140 L400,80 L500,90 L600,40 L700,60 L800,20 L800,250 L0,250 Z"></path>
{/* Line */}
<path className="chart-line" d="M0,200 L100,180 L200,120 L300,140 L400,80 L500,90 L600,40 L700,60 L800,20"></path>
{/* Data Points */}
<circle cx="200" cy="120" fill="#C89B3C" r="4" stroke="white" stroke-width="2"></circle>
<circle cx="400" cy="80" fill="#C89B3C" r="4" stroke="white" stroke-width="2"></circle>
<circle cx="600" cy="40" fill="#C89B3C" r="4" stroke="white" stroke-width="2"></circle>
<circle cx="800" cy="20" fill="#C89B3C" r="4" stroke="white" stroke-width="2"></circle>
</svg>
</div>
</section>
</main>
    </>
  );
}
