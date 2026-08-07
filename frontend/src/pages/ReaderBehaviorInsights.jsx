import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import './ReaderBehaviorInsights.css';

export default function ReaderBehaviorInsights() {
  
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
            
            // Intersection Observer for Scroll Reveal
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-chart').forEach(el => observer.observe(el));

            // Chart Configuration Common Styles (Archival Feel)
            Chart.defaults.font.family = 'Inter';
            Chart.defaults.color = '#75777a'; // outline color
            const gridColor = '#e5e2e1'; // surface-variant

            // Registration Trends Line Chart
            const ctxReg = document.getElementById('registrationChart').getContext('2d');
            
            // Create gradient for line chart
            const gradientReg = ctxReg.createLinearGradient(0, 0, 0, 300);
            gradientReg.addColorStop(0, 'rgba(78, 99, 85, 0.2)'); // secondary (Deep Forest) with opacity
            gradientReg.addColorStop(1, 'rgba(78, 99, 85, 0)');

            new Chart(ctxReg, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'New Registrations',
                        data: [150, 230, 180, 290, 350, 320, 410, 380, 450, 520, 600, 842],
                        borderColor: '#4e6355', // secondary
                        backgroundColor: gradientReg,
                        borderWidth: 2,
                        pointBackgroundColor: '#fcf8f8', // background
                        pointBorderColor: '#4e6355',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        fill: true,
                        tension: 0.4 // Smooth curve
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1c1b1b',
                            titleFont: { family: 'Inter', size: 12 },
                            bodyFont: { family: 'Inter', size: 14, weight: 'bold' },
                            padding: 12,
                            cornerRadius: 4,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: gridColor, drawBorder: false },
                            border: { dash: [4, 4] }
                        },
                        x: {
                            grid: { display: false, drawBorder: false }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });

            // Popular Categories Bar Chart
            const ctxCat = document.getElementById('categoriesChart').getContext('2d');
            new Chart(ctxCat, {
                type: 'bar',
                data: {
                    labels: ['Classic Lit', 'Rare MSS', 'Art/Photo', 'History'],
                    datasets: [{
                        data: [45, 25, 20, 10],
                        backgroundColor: [
                            '#1c1b1b', // on-background
                            '#4e6355', // secondary
                            '#d1c4bf', // tertiary-fixed-dim
                            '#75777a'  // outline
                        ],
                        borderRadius: 2,
                        barThickness: 'flex',
                        maxBarThickness: 32
                    }]
                },
                options: {
                    indexAxis: 'y', // Horizontal bars
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false } // Minimalist, rely on layout
                    },
                    scales: {
                        x: { display: false }, // Hide x axis for cleaner look
                        y: {
                            grid: { display: false, drawBorder: false },
                            ticks: {
                                font: { family: 'Inter', size: 12, weight: '500' },
                                color: '#1c1b1b'
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        delay: 500,
                        easing: 'easeOutQuart'
                    }
                }
            });
        });
    return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* SideNavBar (Shared Component) */}
<nav className="hidden md:flex flex-col h-full py-lg fixed left-0 top-0 w-64 bg-primary-container dark:bg-black text-secondary-fixed font-label-md text-label-md border-r border-on-primary-fixed-variant shadow-lg z-50">
{/* Header */}
<div className="px-xl mb-xl">
<h1 className="font-headline-sm text-headline-sm text-on-primary-fixed">BookNest</h1>
<p className="font-label-sm text-label-sm text-on-primary-fixed-variant mt-xs">Publishing House Admin</p>
</div>
{/* Navigation Links */}
<div className="flex-1 overflow-y-auto w-full px-sm">
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined mr-md">dashboard</span>
<span>Dashboard</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/catalogarchive">
<span className="material-symbols-outlined mr-md">menu_book</span>
<span>Books</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-md">category</span>
<span>Categories</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined mr-md">person_edit</span>
<span>Authors</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/admin/publishermanagementarchive">
<span className="material-symbols-outlined mr-md">domain</span>
<span>Publishers</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-md">shopping_cart</span>
<span>Orders</span>
</Link>
<Link className="flex items-center bg-secondary-container text-on-secondary-container mx-2 px-4 py-3 rounded-lg group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-md" style={{fontVariationSettings: '\'FILL\' 1'}}>group</span>
<span>Customers</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-md">badge</span>
<span>Staff</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined mr-md">inventory_2</span>
<span>Inventory</span>
</Link>
<Link className="flex items-center text-on-primary-container hover:text-on-primary px-4 py-3 hover:bg-on-primary-fixed-variant transition-colors active:scale-95 duration-150 rounded-lg group" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-md">analytics</span>
<span>Analytics</span>
</Link>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-64 w-full flex flex-col min-h-screen pb-xxl">
{/* Header Section */}
{/* <Navbar /> */}
<Navbar />
<div className="px-margin-mobile md:px-margin-desktop pt-xl">
{/* 12-Column Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* CUSTOMER OVERVIEW CARDS (Top Row - Full Width) */}
<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-tertiary-fixed-dim shadow-editorial shadow-editorial-hover transition-all">
<div className="flex justify-between items-start mb-xl">
<h3 className="font-label-md text-label-md text-on-surface-variant">Total Customers</h3>
<span className="material-symbols-outlined text-outline">groups</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="font-headline-lg text-headline-lg text-primary">12,458</span>
<span className="font-label-sm text-label-sm text-secondary">+2.4%</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-tertiary-fixed-dim shadow-editorial shadow-editorial-hover transition-all">
<div className="flex justify-between items-start mb-xl">
<h3 className="font-label-md text-label-md text-on-surface-variant">New Customers</h3>
<span className="material-symbols-outlined text-outline">person_add</span>
</div>
<div className="flex items-baseline gap-sm">
<span className="font-headline-lg text-headline-lg text-primary">842</span>
<span className="font-label-sm text-label-sm text-secondary">+12.1%</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-tertiary-fixed-dim shadow-editorial shadow-editorial-hover transition-all relative overflow-hidden group">
{/* Subtle background accent for "Active" */}
<div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex justify-between items-start mb-xl">
<h3 className="font-label-md text-label-md text-on-surface-variant">Active Customers</h3>
<span className="material-symbols-outlined text-outline">local_fire_department</span>
</div>
<div className="relative z-10 flex items-baseline gap-sm">
<span className="font-headline-lg text-headline-lg text-primary">9,204</span>
<span className="font-label-sm text-label-sm text-secondary">+5.7%</span>
</div>
</div>
</div>
{/* MAIN CHART: Registration Trends (8 Columns) */}
<div className="md:col-span-8 bg-surface-container-lowest p-xl rounded-xl border border-outline-variant shadow-editorial mb-xl reveal-chart">
<div className="flex justify-between items-end mb-xl divider-horizontal pb-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Registration Trends</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Monthly growth of new reader acquisitions.</p>
</div>
<button className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span> Export
                        </button>
</div>
<div className="w-full h-[300px] relative">
<canvas id="registrationChart"></canvas>
</div>
</div>
{/* BEHAVIOR & CATEGORIES (4 Columns Sidebar) */}
<div className="md:col-span-4 flex flex-col gap-lg mb-xl">
{/* Popular Categories Bar Chart */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-editorial flex-1 reveal-chart delay-100">
<h3 className="font-headline-sm text-headline-sm text-primary mb-md">Popular Categories</h3>
<div className="w-full h-[200px] relative mt-md">
<canvas id="categoriesChart"></canvas>
</div>
</div>
{/* Buying Patterns */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-editorial reveal-chart delay-200">
<h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Buying Patterns</h3>
<div className="space-y-md">
{/* Pattern 1 */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface">Evening Readers</span>
<span className="text-on-surface-variant">62%</span>
</div>
<div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{width: '62%'}}></div>
</div>
</div>
{/* Pattern 2 */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface">Weekend Collectors</span>
<span className="text-on-surface-variant">28%</span>
</div>
<div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary-fixed-dim rounded-full" style={{width: '28%'}}></div>
</div>
</div>
{/* Pattern 3 */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface">Daily Scholars</span>
<span className="text-on-surface-variant">10%</span>
</div>
<div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-outline rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
{/* TOP CUSTOMERS LIST (Full Width Below) */}
<div className="md:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-editorial overflow-hidden reveal-chart delay-300">
<div className="p-lg divider-horizontal flex justify-between items-center bg-surface-container-low">
<h2 className="font-headline-sm text-headline-sm text-primary">Elite Readers</h2>
<Link className="font-label-md text-label-md text-secondary hover:underline" to="/shopbrowsebooks">View Full Roster</Link>
</div>
<ul className="divide-y divide-outline-variant">
{/* ListItem 1 */}
<li className="flex items-center justify-between p-lg hover:bg-surface transition-colors group">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface font-label-md">AW</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Arthur Wellesley</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Joined 1815</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">342 Acquisitions</p>
<p className="font-label-sm text-label-sm text-secondary">Top Tier</p>
</div>
</li>
{/* ListItem 2 */}
<li className="flex items-center justify-between p-lg hover:bg-surface transition-colors group">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface font-label-md">VB</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Virginia Bell</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Joined 1904</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">289 Acquisitions</p>
<p className="font-label-sm text-label-sm text-secondary">Top Tier</p>
</div>
</li>
{/* ListItem 3 */}
<li className="flex items-center justify-between p-lg hover:bg-surface transition-colors group">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface font-label-md">ED</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Elias Drake</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Joined 1982</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">215 Acquisitions</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Mid Tier</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</main>
{/* Script for Charts & Animations */}
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
