import React from 'react';
import './ManageBookCategories.css';

export default function ManageBookCategories() {
  return (
    <>
      {/* SideNavBar Component */}
<nav className="hidden md:flex h-screen w-64 fixed left-0 top-0 border-r border-outline-variant shadow-md flex-col h-full py-xl px-md bg-primary-container z-50">
<div className="mb-12 text-center">
<h1 className="font-headline-sm text-headline-sm text-on-primary">Bibliophile HQ</h1>
<p className="font-label-sm text-label-sm text-on-primary-container mt-2">Premium Management</p>
</div>
<ul className="flex flex-col gap-2 flex-grow">
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-primary-container hover:bg-primary/5 transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-primary-container hover:bg-primary/5 transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
                    Books
                </a>
</li>
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-primary font-bold border-l-4 border-primary bg-surface-container-highest/10 transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="category">category</span>
                    Categories
                </a>
</li>
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-primary-container hover:bg-primary/5 transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                    Orders
                </a>
</li>
</ul>
<div className="mt-auto border-t border-outline-variant pt-4 flex items-center gap-3">
<img alt="Admin Avatar" className="w-10 h-10 rounded-full object-cover" data-alt="A subtle, high-quality, professional headshot of an administrator in a well-lit, minimal studio environment. The aesthetic is clean, modern, and trustworthy, with soft, diffused lighting and a neutral background. The tone is authoritative yet approachable, fitting for a premium library management system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNcs8f6xy2fNFnzM9O_DSehw1hks6XOfgtxwqU3h42GEeYRgpmYoLUdJ_p2okXGiHof3-B6aBoRxLfFtkDPInUVmkyE4eZwmJSMNEDi0bZ0dgSjiH0XLBdU4lB3jjOfe6K72oo1yEzWXWXIu4f4LF29jnK4ZErXeQkONaEIphscjUag2LddhQ7r7IH4RC9eNaCQVLNzhJjbmc7xRbcdOULut9JE0vaOCVSfwsuwx8tJuy3gs6anQWErQ" />
<div>
<p className="font-label-md text-label-md text-on-primary font-semibold">Admin User</p>
<p className="font-label-sm text-label-sm text-on-primary-container">System Admin</p>
</div>
</div>
</nav>
{/* TopAppBar Component */}
<header className="hidden md:flex justify-between items-center w-full px-margin-desktop py-md ml-64 bg-surface docked full-width top-0 sticky z-40 border-b border-outline-variant transition-opacity duration-150 h-20">
<div className="flex items-center gap-4">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Command Center</span>
</div>
<div className="flex items-center flex-1 max-w-md mx-8">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Search across system..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img alt="Admin User" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A subtle, high-quality, professional headshot of an administrator in a well-lit, minimal studio environment. The aesthetic is clean, modern, and trustworthy, with soft, diffused lighting and a neutral background. The tone is authoritative yet approachable, fitting for a premium library management system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJnyoGjLnuo_JZH5u3dXCmwKZRxhu6syIH8DsHcXF-jtnuS68q2DedZuyno6IU0E8JcEyggl5pa-Mdszb7LCmInyhAz5Vm6dxUqDZPJNh_gvUJVNV0wxLwG4bDvjntd9p2jEBf7HDViAf9hcfOegAhizpxvaIZJxvbglBPykfhg0751ECOhTZgipY98AawoOS88p8TZvL2xtRlHsDKni7YKWdBo5nKPhxvIJyPIcKrfsYZJxOIT2eOXw" />
</div>
</header>
{/* Main Workspace */}
<main className="md:ml-64 pt-8 px-4 md:px-xl pb-xxl max-w-7xl mx-auto">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 fade-in">
<div>
<h2 className="font-headline-md text-headline-md text-tertiary mb-2">Manage Book Categories</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Organize and curate your library collections.</p>
</div>
<button className="bg-[#A67C42] hover:bg-[#8e6a38] text-white px-6 py-3 rounded-DEFAULT font-label-md text-label-md flex items-center gap-2 transition-colors ambient-shadow-level-1 hover:ambient-shadow-level-2" onclick="document.getElementById('add-category-modal').classList.remove('hidden')">
<span className="material-symbols-outlined text-sm">add</span>
                Add Category
            </button>
</div>
{/* Search & Filter Bar */}
<div className="bg-[#FAF8F3] rounded-xl p-4 md:p-6 mb-8 ambient-shadow-level-1 border border-[#D8D4CA] flex flex-col md:flex-row gap-4 fade-in-delayed">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-white border border-[#D8D4CA] rounded-DEFAULT font-body-md text-body-md text-on-surface focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors" placeholder="Search categories..." type="text" />
</div>
<div className="flex gap-4">
<button className="px-4 py-3 border border-[#D8D4CA] bg-white rounded-DEFAULT font-label-md text-label-md text-on-surface flex items-center gap-2 hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                    Filter
                </button>
</div>
</div>
{/* Data Table Container */}
<div className="bg-[#FAF8F3] rounded-xl ambient-shadow-level-1 border border-[#D8D4CA] overflow-hidden fade-in-delayed">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[#D8D4CA] bg-surface-container-low/50">
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Category Name</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Description</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Book Count</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-[#D8D4CA] font-body-md text-body-md text-on-surface">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="px-6 py-4 font-medium">Historical Fiction</td>
<td className="px-6 py-4 text-on-surface-variant truncate max-w-xs">Narratives set in the past, blending fact with imagination.</td>
<td className="px-6 py-4">1,245</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#cee6d4] text-[#0b1f15]">
                                    Active
                                </span>
</td>
<td className="px-6 py-4 text-right">
<button aria-label="Edit" className="text-on-surface-variant hover:text-tertiary transition-colors mx-1">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
<button aria-label="Delete" className="text-on-surface-variant hover:text-error transition-colors mx-1">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="px-6 py-4 font-medium">Science Fiction &amp; Fantasy</td>
<td className="px-6 py-4 text-on-surface-variant truncate max-w-xs">Explorations of futuristic concepts and magical realms.</td>
<td className="px-6 py-4">892</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#cee6d4] text-[#0b1f15]">
                                    Active
                                </span>
</td>
<td className="px-6 py-4 text-right">
<button aria-label="Edit" className="text-on-surface-variant hover:text-tertiary transition-colors mx-1">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
<button aria-label="Delete" className="text-on-surface-variant hover:text-error transition-colors mx-1">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="px-6 py-4 font-medium">Philosophy</td>
<td className="px-6 py-4 text-on-surface-variant truncate max-w-xs">Classic texts examining existence, knowledge, and ethics.</td>
<td className="px-6 py-4">430</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#eee0da] text-[#211a17]">
                                    Archived
                                </span>
</td>
<td className="px-6 py-4 text-right">
<button aria-label="Edit" className="text-on-surface-variant hover:text-tertiary transition-colors mx-1">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
<button aria-label="Delete" className="text-on-surface-variant hover:text-error transition-colors mx-1">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-[#D8D4CA] flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Showing 1 to 3 of 24 categories</span>
<div className="flex gap-2">
<button className="p-1 hover:text-tertiary transition-colors disabled:opacity-50"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="p-1 hover:text-tertiary transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
</main>
{/* Add Category Modal */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="add-category-modal">
<div className="absolute inset-0 modal-overlay" onclick="document.getElementById('add-category-modal').classList.add('hidden')"></div>
<div className="relative bg-[#FAF8F3] rounded-xl w-full max-w-lg p-8 ambient-shadow-level-2 border border-[#D8D4CA] transform transition-all">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline-sm text-headline-sm text-tertiary">New Category</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Define a new section for the library catalog.</p>
</div>
<button className="text-on-surface-variant hover:text-tertiary transition-colors" onclick="document.getElementById('add-category-modal').classList.add('hidden')">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<form className="space-y-6">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2">Category Name</label>
<input className="w-full px-4 py-3 bg-white border border-[#D8D4CA] rounded-DEFAULT font-body-md text-body-md text-on-surface focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors" placeholder="e.g., Rare Manuscripts" type="text" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2">Description</label>
<textarea className="w-full px-4 py-3 bg-white border border-[#D8D4CA] rounded-DEFAULT font-body-md text-body-md text-on-surface focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors resize-none" placeholder="Brief description of the category contents..." rows="4"></textarea>
</div>
<div className="flex justify-end gap-4 pt-4 border-t border-[#D8D4CA]">
<button className="px-6 py-3 border border-[#D8D4CA] bg-transparent text-tertiary rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors" onclick="document.getElementById('add-category-modal').classList.add('hidden')" type="button">
                        Cancel
                    </button>
<button className="bg-[#A67C42] hover:bg-[#8e6a38] text-white px-6 py-3 rounded-DEFAULT font-label-md text-label-md transition-colors ambient-shadow-level-1" type="button">
                        Save Category
                    </button>
</div>
</form>
</div>
</div>
    </>
  );
}
