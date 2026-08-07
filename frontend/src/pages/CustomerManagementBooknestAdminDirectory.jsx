import React from 'react';

import { Link } from 'react-router-dom';
import './CustomerManagementBooknestAdminDirectory.css';

export default function CustomerManagementBooknestAdminDirectory() {
  return (
    <>
      {/* JSON Navigation Injection Start */}
{/* SideNavBar */}
<nav className="flex flex-col h-screen fixed left-0 top-0 py-8 bg-primary-container dark:bg-primary-container shadow-sm docked left-0 w-64 z-50">
<div className="px-6 mb-12">
<h1 className="text-headline-md font-headline-md font-bold text-tertiary-fixed dark:text-tertiary-fixed-dim">BookNest</h1>
<p className="font-body-md text-body-md text-on-primary-container dark:text-on-primary-container mt-1">Admin Portal</p>
</div>
<div className="px-6 mb-8">
<button className="w-full py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors duration-400">
                New Listing
            </button>
</div>
<ul className="flex-grow space-y-2">
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined mr-4" data-icon="dashboard">dashboard</span>
                    Dashboard
                </Link>
</li>
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/admin/inventorycontrolcenter">
<span className="material-symbols-outlined mr-4" data-icon="menu_book">menu_book</span>
                    Inventory
                </Link>
</li>
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-4" data-icon="payments">payments</span>
                    Sales
                </Link>
</li>
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/dashboard/customerdashboardmypersonalbookshelf">
<span className="material-symbols-outlined mr-4" data-icon="person_edit">person_edit</span>
                    Authors
                </Link>
</li>
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-tertiary-fixed dark:text-tertiary-fixed-dim border-l-4 border-tertiary-fixed font-bold bg-primary-fixed-dim/5 transition-transform duration-200 scale-[0.98]" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-4" data-icon="group">group</span>
                    Customers
                </Link>
</li>
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-4" data-icon="settings">settings</span>
                    Settings
                </Link>
</li>
</ul>
<div className="px-0 pt-8 border-t border-primary-fixed-dim/20">
<ul className="space-y-2">
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/contactusbooknestsupport">
<span className="material-symbols-outlined mr-4" data-icon="help">help</span>
                        Support
                    </Link>
</li>
<li>
<Link className="flex items-center px-6 py-3 font-label-md text-label-md text-on-primary-container dark:text-on-primary-container opacity-70 hover:bg-primary-fixed-dim/10 hover:text-tertiary-fixed transition-colors duration-400" to="/shopbrowsebooks">
<span className="material-symbols-outlined mr-4" data-icon="logout">logout</span>
                        Log Out
                    </Link>
</li>
</ul>
</div>
</nav>
{/* JSON Navigation Injection End */}
{/* Main Content Area */}
<main className="flex-grow ml-64 min-h-screen">
{/* Header */}
<header className="flex justify-between items-center w-full h-16 px-gutter max-w-container-max-width mx-auto mt-8 mb-12">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Customer Directory</h2>
</div>
<div className="flex items-center space-x-4">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest ghost-border rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="Search readers..." type="text" />
</div>
<button className="px-4 py-2 bg-surface-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-dim transition-colors flex items-center shadow-ambient">
<span className="material-symbols-outlined mr-2 text-sm" data-icon="download">download</span>
                    Export Directory
                </button>
</div>
</header>
<div className="max-w-container-max-width mx-auto px-gutter mb-desktop flex gap-6">
{/* Customer Table (Left Side) */}
<div className="w-2/3 bg-surface-container-lowest rounded-xl shadow-ambient ghost-border p-6 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-variant">
<th className="pb-4 font-label-sm text-label-sm text-on-surface-variant font-medium">Name</th>
<th className="pb-4 font-label-sm text-label-sm text-on-surface-variant font-medium">Email</th>
<th className="pb-4 font-label-sm text-label-sm text-on-surface-variant font-medium">Orders</th>
<th className="pb-4 font-label-sm text-label-sm text-on-surface-variant font-medium">Joined Date</th>
<th className="pb-4 font-label-sm text-label-sm text-on-surface-variant font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
{/* Active Row Example */}
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer bg-surface-container-low/50">
<td className="py-4 flex items-center">
<img className="w-8 h-8 rounded-full object-cover mr-3 ghost-border" data-alt="A sophisticated portrait of a young woman with glasses, reading a book in a cozy library setting, soft warm lighting, professional editorial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDx014DwiWIRS5_svbMi0noPR_lbNRteRG6XApiwUDyHSHnZU26W5eDyNjgAKH65kr9H8bnun8Eiv7YIgbVJybs06pfFfHWoNvwXP4nihqzq9l_r0IYRhNqiJGUPjhvGQiBdmTSeI53L2qzeDfW4CRAYilrNmVwYYq-zbru7SBXDJmNNyCxxd-YJnYAdWHnMdOFwMTnFCVP9b6m6Fad1lVRcXlqRBETOeV--pUUO_qCRwUe2eFwl6f" />
<span className="font-medium text-primary">Eleanor Vance</span>
</td>
<td className="py-4 text-on-surface-variant">el.vance@example.com</td>
<td className="py-4 font-label-sm">12</td>
<td className="py-4 text-on-surface-variant">Oct 2023</td>
<td className="py-4 text-right">
<span className="inline-block px-2 py-1 rounded bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm">Active</span>
</td>
</tr>
{/* Standard Rows */}
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-4 flex items-center">
<img className="w-8 h-8 rounded-full object-cover mr-3 ghost-border" data-alt="A portrait of an older gentleman with a beard, wearing a tweed jacket, standing in front of bookshelves, natural light, professional editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6t2aHE0zLTA1PM7rN0mpumwoI51B6bCNw5WUq175vAOWADeIfke7GgWKZQUaWJcQthbjfVHJOXSKNUUC9h69dzO5hdI8QSiwgIaNCVniL-hsJpNmEST2v1Kf6d8QhZ2022Xr3clkwVQhkK8S5vB_H8AJf7q-tZt7GOMX4f88bPiXVR1MMp7B-zxIAJXBFrkBzlB_uLGf2NScDuQdrc9YNSewaGznALqo7uKssxC36kWHtkqnQdL6A" />
<span className="font-medium text-primary">Arthur Pendelton</span>
</td>
<td className="py-4 text-on-surface-variant">arthur.p@domain.net</td>
<td className="py-4 font-label-sm">45</td>
<td className="py-4 text-on-surface-variant">Mar 2021</td>
<td className="py-4 text-right">
<span className="inline-block px-2 py-1 rounded bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm">Active</span>
</td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-4 flex items-center">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-label-sm mr-3">SJ</div>
<span className="font-medium text-primary">Sarah Jenkins</span>
</td>
<td className="py-4 text-on-surface-variant">s.jenkins@mail.com</td>
<td className="py-4 font-label-sm">3</td>
<td className="py-4 text-on-surface-variant">Jan 2024</td>
<td className="py-4 text-right">
<span className="inline-block px-2 py-1 rounded bg-success-emerald/10 text-success-emerald font-label-sm text-label-sm">Active</span>
</td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-4 flex items-center">
<img className="w-8 h-8 rounded-full object-cover mr-3 ghost-border" data-alt="A portrait of a young man in a minimalist apartment, holding a tablet, bright airy lighting, modern tech-savvy reader aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl6rtgs-mj5tUl06zukoFy1x8kEmdNk3KIRXB9kjvPVydWylgSmkcC3uoEJjf34iXXuGewpIAXbVdJDNeqd0-VJUeOPSEW59VhIPRj4njQc-uD7uIg5s9qy5CNIvfZxjhq4X0ofsHkmCXUBnKuN3FtGrDHCjxPmYhV4thvrq2bvkeeathAs3TIS305742cPv19T-wGZ0KDrEeSMuP80JpbqxJVLg-mRm2Gfi2mRdk0LP46_-Gz2YMK" />
<span className="font-medium text-primary">Marcus Thorne</span>
</td>
<td className="py-4 text-on-surface-variant">m.thorne@startup.io</td>
<td className="py-4 font-label-sm">0</td>
<td className="py-4 text-on-surface-variant">Feb 2024</td>
<td className="py-4 text-right">
<span className="inline-block px-2 py-1 rounded bg-outline-variant/20 text-outline font-label-sm text-label-sm">Inactive</span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Customer Details Drawer (Right Side) */}
<div className="w-1/3 bg-surface-container-lowest rounded-xl shadow-ambient-high ghost-border overflow-hidden flex flex-col h-[calc(100vh-160px)] sticky top-24">
{/* Profile Header */}
<div className="p-6 border-b border-surface-variant bg-surface-bright">
<div className="flex items-start justify-between mb-4">
<img className="w-16 h-16 rounded-full object-cover ghost-border shadow-ambient" data-alt="A sophisticated portrait of a young woman with glasses, reading a book in a cozy library setting, soft warm lighting, professional editorial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgrk9qxt4Rx8lyv66GqX5RJCu8nzl_dOhjhqIybdwnSyj22emMikrWIn-Q2dm8fFBA5l1swLiXAcqPiGepmpi0CA01HhJE0FbvsC_yJunnfavKhy3lHlixto97Rf4ggEuR_UCxv9KYQViBWtdEYcs4tnuRcNq8L2v1cdh7IGHc7kLH-rY-MIrmiM9NW97lUgepv--2kp3O6YALpoFWPnP4xBlaJm4eC_pUxXaiBM2qNh_r6D1wV36R" />
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-1">Eleanor Vance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Avid collector of 19th-century gothic literature and modern literary fiction.</p>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-tertiary text-on-tertiary rounded-lg font-label-md text-label-md hover:bg-tertiary/90 transition-colors">
                            Edit Profile
                        </button>
<button className="flex-1 py-2 bg-surface-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-dim transition-colors">
                            Message
                        </button>
</div>
</div>
{/* Scrollable Details */}
<div className="p-6 overflow-y-auto flex-grow space-y-6">
{/* Stats Grid */}
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-surface-container-low border border-surface-variant">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Total Spend</p>
<p className="font-headline-md text-headline-md text-primary font-label-md">$1,240.50</p>
</div>
<div className="p-4 rounded-lg bg-surface-container-low border border-surface-variant">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Loyalty Tier</p>
<p className="font-headline-md text-headline-md text-tertiary-fixed-dim">Gold Reader</p>
</div>
</div>
{/* Recent Orders */}
<div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-3 font-semibold">Recent Orders</h4>
<div className="space-y-3">
<div className="flex justify-between items-center p-3 rounded-lg border border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<div>
<p className="font-body-sm text-body-sm font-medium text-primary">The Secret History</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">ORD-9921 • Oct 12, 2023</p>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
<div className="flex justify-between items-center p-3 rounded-lg border border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<div>
<p className="font-body-sm text-body-sm font-medium text-primary">Frankenstein (Folio Edition)</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">ORD-8834 • Sep 04, 2023</p>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
{/* Wishlist (Visual) */}
<div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-3 font-semibold">Wishlist</h4>
<div className="flex gap-3 overflow-x-auto pb-2">
<div className="w-20 h-28 flex-shrink-0 bg-surface-variant rounded shadow-sm border border-outline-variant/30 flex items-center justify-center">
<span className="material-symbols-outlined text-outline" data-icon="book">book</span>
</div>
<div className="w-20 h-28 flex-shrink-0 bg-primary-container rounded shadow-sm border border-outline-variant/30 flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="book">book</span>
</div>
<div className="w-20 h-28 flex-shrink-0 bg-tertiary-fixed rounded shadow-sm border border-outline-variant/30 flex items-center justify-center">
<span className="material-symbols-outlined text-on-tertiary-fixed" data-icon="book">book</span>
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
