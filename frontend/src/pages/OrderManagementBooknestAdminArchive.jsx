import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './OrderManagementBooknestAdminArchive.css';

export default function OrderManagementBooknestAdminArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* Persistent SideNavBar */}
<nav className="fixed left-0 top-0 h-screen flex flex-col py-margin-desktop bg-primary-container dark:bg-primary-container docked w-64 z-50 shadow-md">
<div className="px-6 mb-8">
<h1 className="font-headline-lg text-headline-lg font-bold text-surface-bright">BookNest</h1>
<p className="font-body-sm text-body-sm text-on-primary-container mt-1">Admin Console</p>
</div>
<ul className="flex-1 space-y-2 mt-4">
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-label-md text-label-md">Inventory</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined">person_edit</span>
<span className="font-label-md text-label-md">Author Management</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-secondary-fixed-dim font-bold border-l-4 border-secondary-fixed-dim pl-4 py-3 opacity-90 transition-all duration-200 bg-on-primary-fixed-variant/20" to="/dashboard/yourordersbooknesthistory">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Customers</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-5 py-3 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
</li>
</ul>
<div className="px-6 mt-auto">
<button className="w-full bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 rounded hover:opacity-90 transition-opacity">Add New Title</button>
<div className="mt-6 border-t border-on-primary-fixed-variant pt-4 space-y-2">
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-2 py-2 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</Link>
<Link className="flex items-center gap-3 text-on-primary-container font-medium pl-2 py-2 hover:bg-on-primary-fixed-variant hover:text-surface-bright transition-colors duration-400" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-sm text-label-sm">Support</span>
</Link>
</div>
</div>
</nav>
{/* TopAppBar */}
<header className="fixed top-0 right-0 left-64 flex justify-between items-center h-20 px-margin-desktop z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex-1 flex items-center">
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none font-body-sm text-body-sm" placeholder="Search orders, customers..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-secondary transition-colors duration-400" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-secondary transition-colors duration-400">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="flex items-center gap-3 border-l border-outline-variant pl-6">
<img className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a corporate administrator in a modern office setting. Soft, natural lighting. Professional attire. Clean, minimal background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsK7D1oSPxDPXbVbetLg0vL5x0Ys0h9P-fOEnBbbfqxGSDNnVQy-ajbqNt_uHDOqON_D1eKo5siccOckdMyt012gvbduP6VdeE_s5XhtydSqD6EvW8FJtqTHvSM3Kbv9k9TNOsg1z8pcjPBnhfF7keAzvItPmvZym60NH4wjoLl3mfSww4otaAMJ4qITho0Aw0DVPpUA0qhljtVc9dT9AEYA-TB6kRL6yCZ45_KaWO1_JNGKmp9ee-" />
<span className="font-label-md text-label-md font-semibold text-primary">Admin Profile</span>
</div>
</div>
</header>
{/* Main Content Area */}
<main className="ml-64 mt-20 p-margin-desktop w-full max-w-[calc(100vw-256px)] overflow-y-auto">
<div className="max-w-container-max-width mx-auto">
{/* Header & Filters */}
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background mb-2">Order Management</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Review and process recent acquisitions and shipments.</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 pr-10 font-body-sm text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none cursor-pointer">
<option>All Statuses</option>
<option>Processing</option>
<option>Shipped</option>
<option>Delivered</option>
<option>Cancelled</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-sm">expand_more</span>
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 pr-10 font-body-sm text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none cursor-pointer">
<option>Last 30 Days</option>
<option>Last 7 Days</option>
<option>This Month</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-sm">calendar_month</span>
</div>
</div>
</div>
<div className="flex gap-6">
{/* Orders List (Left) */}
<div className="flex-1 bg-surface-container-lowest rounded-xl ambient-shadow overflow-hidden border border-surface-container-highest">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-container-highest bg-surface-muted">
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant">ORDER ID</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant">CUSTOMER</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant">DATE</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant">STATUS</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant text-right">AMOUNT</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
{/* Active Row */}
<tr className="border-b border-surface-container-highest bg-primary-fixed/30 hover:bg-surface-muted cursor-pointer transition-colors">
<td className="py-4 px-6 font-headline-md text-headline-md text-on-background text-lg">#BN-7429</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="A small circular avatar of a professional looking individual, casual attire, warm lighting, neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA1fiFkGvtqnGKiRqR6rggGF_Y7SUUE_uLgxnVeroBxREG7lLt_v-26jrJnGJv9b3q9sICXNbvz6RvZeiDz9lcKQtCu_ujNywpc1FnbKxoUjX1WZlOp4jPZL3n_AN1iYQ2dN4TVf3-SyJQ8R86WhfL_cd5gQu-8eabxRHnXmA6Qiu27KRrGqY4WOM1s3o98QmS14ZNjHDDJg1aZDhlq7jxuGGhTygIBD0-wiuZmiaJot9A45PDFrfZ" />
<span>Eleanor Vance</span>
</div>
</td>
<td className="py-4 px-6 text-on-surface-variant">Oct 24, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded bg-warning-amber/10 text-warning-amber font-label-sm text-label-sm">Processing</span>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-right text-on-background">$142.50</td>
</tr>
<tr className="border-b border-surface-container-highest hover:bg-surface-muted cursor-pointer transition-colors">
<td className="py-4 px-6 font-headline-md text-headline-md text-on-background text-lg">#BN-7428</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-tint flex items-center justify-center text-white font-label-sm text-label-sm">MR</div>
<span>Michael Reed</span>
</div>
</td>
<td className="py-4 px-6 text-on-surface-variant">Oct 23, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded bg-info-sky/10 text-info-sky font-label-sm text-label-sm">Shipped</span>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-right text-on-background">$85.00</td>
</tr>
<tr className="border-b border-surface-container-highest hover:bg-surface-muted cursor-pointer transition-colors">
<td className="py-4 px-6 font-headline-md text-headline-md text-on-background text-lg">#BN-7427</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="A small circular avatar of a young professional woman, smiling slightly, bright studio lighting, white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjfIV6HF7tQW0Dyi4dA2KJ20w-vGU4ncEIfZG6W9sXKmUX815dTnSGOLX87HWE5YyzqCIybXwL5f4-WKG8U3NB036MJx_NF4U6LH4TMNrZjvhAZFNkvHgcrtlvWCMRqPXsM1vTsrlCsycNGNMCh0audKaoLoq8Ty3cbe4hMpMfm5BK-oJ7_Xf0SXDAFaf5ClunD1UzGo81KubFNU1dTgeSzpe8Ku_XvzfLf9v_Su5ZxbW_kn7c2IPJ" />
<span>Sarah Jenkins</span>
</div>
</td>
<td className="py-4 px-6 text-on-surface-variant">Oct 21, 2023</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm">Delivered</span>
</td>
<td className="py-4 px-6 font-label-md text-label-md text-right text-on-background">$210.75</td>
</tr>
</tbody>
</table>
</div>
{/* Order Details Drawer (Right - Open State) */}
<div className="w-96 bg-surface-container-lowest rounded-xl modal-shadow border border-outline-variant flex flex-col h-[calc(100vh-140px)] sticky top-28">
{/* Drawer Header */}
<div className="p-6 border-b border-surface-container-highest flex justify-between items-start bg-surface-muted rounded-t-xl">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-md text-headline-md text-on-background">Order #BN-7429</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-warning-amber/10 text-warning-amber font-label-sm text-label-sm">Processing</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Placed on Oct 24, 2023 at 14:32 PST</p>
</div>
<button className="text-outline hover:text-on-background transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Drawer Content (Scrollable) */}
<div className="p-6 overflow-y-auto flex-1 space-y-8">
{/* Items */}
<div>
<h4 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Items (2)</h4>
<div className="space-y-4">
<div className="flex gap-4">
<img className="w-16 h-20 object-cover rounded shadow-sm border border-outline-variant" data-alt="A high-end hardcover book lying flat. Deep blue cover with gold foil lettering. Professional studio lighting highlighting the texture of the cover. Crisp, clean product shot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEM7ADQ0cNul_U8Ow3NPz7VeZ4DvAk3ijW7xTr1UXPjjvHNwPa5wdYgYhtLEYcCQByjVt1rVbad7a5Hn9bK8AW0yb9FvX814ADAuGKtwxGf9OZpbmczjD2sFOGkPpmpL07Q4d7U8t2Q-es1-vIJcpPu5WQU-d_UddtELurntFdzsJBl4eVc9m_I1-zADr71MBjLw4qfIfWWkR0xFcDKjJw3TDwf13phwxLB90Uwrqr5Ye3lzBwxy2B" />
<div className="flex-1">
<p className="font-body-sm text-body-sm font-semibold text-on-background line-clamp-2">The Architecture of Happiness</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Alain de Botton</p>
<div className="flex justify-between items-center mt-2">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-1 rounded text-on-surface-variant">Qty: 1</span>
<span className="font-label-md text-label-md">$45.00</span>
</div>
</div>
</div>
<div className="flex gap-4">
<img className="w-16 h-20 object-cover rounded shadow-sm border border-outline-variant" data-alt="A minimalist book cover design. Pale cream background with stark black sans-serif typography. Soft, diffused lighting creating a subtle shadow beneath the book." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx6CUenf62CI1Baw52Hr5hlfHJRsPb5xq4QYtOYnG9KE_oLAsoojRlI0VG7kWK7suZB-wATMlTAOhEWGyvbTOwwSx6DWC5ikf2szQnl0ARQ8Zlu97WF7gjr1clWdfcV2_RJPlWszWORBvkD3AGLqrWZcB8pkC7_Wn6b9UBs6thCvRi-O6y5V6TUg09KKYVSmfHqOq0Qeqxvy_G_7QyQwm-DU2tEIBAxtO7tGNQoUBUIWDsyHLwXiXf" />
<div className="flex-1">
<p className="font-body-sm text-body-sm font-semibold text-on-background line-clamp-2">Thinking, Fast and Slow</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Daniel Kahneman</p>
<div className="flex justify-between items-center mt-2">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-1 rounded text-on-surface-variant">Qty: 2</span>
<span className="font-label-md text-label-md">$97.50</span>
</div>
</div>
</div>
</div>
</div>
{/* Customer & Shipping */}
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-surface-container-highest">
<div>
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Customer</h4>
<p className="font-body-sm text-body-sm font-medium text-on-background">Eleanor Vance</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">eleanor.v@example.com</p>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Payment</h4>
<p className="font-body-sm text-body-sm font-medium text-on-background flex items-center gap-1">
<span className="material-symbols-outlined text-sm">credit_card</span> Credit Card
                                </p>
<p className="font-body-sm text-body-sm text-success-emerald flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-sm">check_circle</span> Paid
                                </p>
</div>
<div className="col-span-2 mt-2">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Shipping Address</h4>
<p className="font-body-sm text-body-sm text-on-background">
                                    1924 Hill House Rd<br />
                                    Apt 4B<br />
                                    San Francisco, CA 94109<br />
                                    United States
                                </p>
</div>
</div>
</div>
{/* Drawer Footer / Actions */}
<div className="p-6 border-t border-surface-container-highest bg-surface-muted rounded-b-xl">
<div className="flex justify-between items-center mb-4">
<span className="font-body-sm text-body-sm text-on-surface-variant">Total</span>
<span className="font-headline-md text-headline-md text-on-background">$142.50</span>
</div>
<div className="relative pt-8 pb-4">
{/* Progress Line */}
<div className="absolute top-10 left-4 right-4 h-0.5 bg-outline-variant -z-10"></div>
<div className="flex justify-between relative z-10">
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center border-2 border-surface-container-lowest">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<span className="font-label-sm text-label-sm text-on-background">Processed</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-outline flex items-center justify-center border-2 border-surface-container-lowest">
<span className="material-symbols-outlined text-sm">local_shipping</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Shipped</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-outline flex items-center justify-center border-2 border-surface-container-lowest">
<span className="material-symbols-outlined text-sm">inventory_2</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Delivered</span>
</div>
</div>
</div>
<button className="w-full bg-tertiary-container text-tertiary-fixed font-label-md text-label-md py-3 rounded hover:bg-on-tertiary-fixed-variant transition-colors flex items-center justify-center gap-2">
                            Mark as Shipped <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
