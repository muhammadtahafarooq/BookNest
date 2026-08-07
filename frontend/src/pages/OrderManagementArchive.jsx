import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './OrderManagementArchive.css';

export default function OrderManagementArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* JSON: SideNavBar */}
<nav className="h-screen w-64 fixed left-0 top-0 bg-primary border-r border-outline-variant shadow-md flex flex-col py-xl z-50">
{/* Header */}
<div className="px-5 mb-xl">
<h1 className="font-headline-md text-headline-md text-secondary-fixed italic mb-sm">The Archivist</h1>
<div className="flex items-center gap-sm">
<img alt="Curator Profile" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A sophisticated, minimalist profile avatar of a curator or archivist, featuring muted tones, subtle lighting, and a professional aesthetic, suitable for a high-end editorial digital interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6DQzEaR7IIvwd1SM0zhJ0wWTxf6bueQR5T2msAnB5k6My8rAfbHaCNAfCAwjpsUZF3ZHDVQRVi60mUBcCNzjwhYRcVxNdjEqZlAQLlx1uKbFbm0xyFR3_TGZZGW8zz46SeGKX9SUGFLnST4v3WCgFwDvDvblfxrxJItpqsWLUUxMsJMIHLrR9ahmXojHtLwut77FbxR9OR87I5c1uO4wvZYS4bifGueIeOX7UY1SArhdZg5Tw-mq1QA" />
<span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">Premium Management</span>
</div>
</div>
{/* CTA */}
<div className="px-5 mb-lg">
<button className="w-full bg-[#d1e8d7] text-[#191c1e] font-label-md text-label-md py-sm px-md rounded hover:bg-[#cee6d4] transition-colors flex items-center justify-center gap-sm">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>add</span>
                New Entry
            </button>
</div>
{/* Navigation Links */}
<ul className="flex-1 flex flex-col gap-sm">
<li>
<Link className="flex items-center gap-md py-sm pl-5 text-on-primary-container hover:bg-primary-container hover:text-secondary-fixed transition-colors transition-all duration-300 ease-in-out font-label-md text-label-md" to="/catalogarchive">
<span className="material-symbols-outlined">menu_book</span>
                    Catalog
                </Link>
</li>
<li>
<Link className="flex items-center gap-md py-sm text-secondary-fixed border-l-4 border-secondary-fixed pl-4 font-bold bg-primary-container transition-all duration-300 ease-in-out font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">payments</span>
                    Acquisitions
                </Link>
</li>
<li>
<Link className="flex items-center gap-md py-sm pl-5 text-on-primary-container hover:bg-primary-container hover:text-secondary-fixed transition-colors transition-all duration-300 ease-in-out font-label-md text-label-md" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">import_contacts</span>
                    Circulation
                </Link>
</li>
<li>
<Link className="flex items-center gap-md py-sm pl-5 text-on-primary-container hover:bg-primary-container hover:text-secondary-fixed transition-colors transition-all duration-300 ease-in-out font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">bar_chart</span>
                    Analytics
                </Link>
</li>
<li>
<Link className="flex items-center gap-md py-sm pl-5 text-on-primary-container hover:bg-primary-container hover:text-secondary-fixed transition-colors transition-all duration-300 ease-in-out font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">settings</span>
                    Settings
                </Link>
</li>
</ul>
{/* Footer Links */}
<ul className="flex flex-col gap-sm mt-auto px-0 border-t border-[#313030] pt-lg mx-5">
<li>
<Link className="flex items-center gap-md py-sm text-on-primary-container hover:text-secondary-fixed transition-colors font-label-md text-label-md" to="/contactusbooknestsupport">
<span className="material-symbols-outlined">help_outline</span>
                    Support
                </Link>
</li>
<li>
<Link className="flex items-center gap-md py-sm text-on-primary-container hover:text-secondary-fixed transition-colors font-label-md text-label-md" to="/shopbrowsebooks">
<span className="material-symbols-outlined">logout</span>
                    Logout
                </Link>
</li>
</ul>
</nav>
{/* JSON: TopAppBar */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content Canvas */}
<main className="ml-64 mt-[80px] w-full min-h-[calc(100vh-80px)] p-margin-desktop bg-surface overflow-x-hidden">
{/* Page Header */}
<div className="mb-xl max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-lg">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Order Management</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-2xl">Review and process recent acquisitions. Ensure all physical and digital deliveries are tracked meticulously within the ledger.</p>
</div>
<button className="bg-[#211a17] text-white font-label-md text-label-md px-lg py-sm rounded-lg hover:bg-primary transition-colors flex items-center gap-sm h-fit">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>download</span>
                Export Ledger
            </button>
</div>
{/* Filters Workspace */}
<div className="max-w-7xl mx-auto bg-surface-container-low border border-outline-variant rounded-xl p-md mb-lg ambient-shadow-1 flex flex-wrap items-center gap-md z-10 relative">
{/* Date Filter */}
<div className="relative flex-1 min-w-[150px]">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs ml-1">Period</label>
<div className="relative">
<select className="editorial-input appearance-none w-full bg-surface border border-outline-variant rounded px-md py-sm font-body-md text-body-md text-primary focus:border-primary">
<option>Last 30 Days</option>
<option>Last 7 Days</option>
<option>This Quarter</option>
<option>Custom Range</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">arrow_drop_down</span>
</div>
</div>
{/* Status Filter */}
<div className="relative flex-1 min-w-[150px]">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs ml-1">Status</label>
<div className="relative">
<select className="editorial-input appearance-none w-full bg-surface border border-outline-variant rounded px-md py-sm font-body-md text-body-md text-primary focus:border-primary">
<option>All Statuses</option>
<option>Placed</option>
<option>Confirmed</option>
<option>Shipped</option>
<option>Delivered</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">arrow_drop_down</span>
</div>
</div>
{/* Payment Filter */}
<div className="relative flex-1 min-w-[150px]">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs ml-1">Payment</label>
<div className="relative">
<select className="editorial-input appearance-none w-full bg-surface border border-outline-variant rounded px-md py-sm font-body-md text-body-md text-primary focus:border-primary">
<option>All Methods</option>
<option>Credit Card</option>
<option>Wire Transfer</option>
<option>Invoice</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">arrow_drop_down</span>
</div>
</div>
<div className="w-px h-10 bg-outline-variant hidden md:block mt-6"></div>
<button className="mt-6 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>filter_list_off</span>
                Clear
            </button>
</div>
{/* Main Ledger Area (12-column grid layout) */}
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
{/* Ledger Table (Takes 8 cols, or 12 if no sidebar active) */}
<div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl ambient-shadow-1 overflow-hidden h-fit">
{/* Table Header */}
<div className="grid grid-cols-12 gap-4 border-b border-outline-variant bg-surface-container p-md">
<div className="col-span-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Folio Ref</div>
<div className="col-span-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Patron</div>
<div className="col-span-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Valuation</div>
<div className="col-span-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Current State</div>
</div>
{/* Table Body */}
<div className="flex flex-col">
{/* Row 1 (Active/Selected state) */}
<div className="grid grid-cols-12 gap-4 border-b border-outline-variant p-md items-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer fade-in-up row-delay-1 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary">
<div className="col-span-2 font-body-md text-body-md text-primary font-semibold">#BK-1042</div>
<div className="col-span-4">
<div className="font-body-md text-body-md text-primary">Eleanor Vance</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">e.vance@hillhouse.edu</div>
</div>
<div className="col-span-3 font-body-md text-body-md text-primary text-right font-medium">$450.00</div>
<div className="col-span-3 flex justify-center">
<span className="badge-transition inline-flex items-center px-2 py-1 rounded-full border border-[#211a17] bg-[#eee0da] text-[#211a17] font-label-sm text-label-sm gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#211a17]"></span>
                                Confirmed
                            </span>
</div>
</div>
{/* Row 2 */}
<div className="grid grid-cols-12 gap-4 border-b border-outline-variant p-md items-center hover:bg-surface-container transition-colors cursor-pointer fade-in-up row-delay-2">
<div className="col-span-2 font-body-md text-body-md text-primary font-semibold">#BK-1041</div>
<div className="col-span-4">
<div className="font-body-md text-body-md text-primary">Arthur Hastings</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">hastings.a@gmail.com</div>
</div>
<div className="col-span-3 font-body-md text-body-md text-primary text-right font-medium">$1,250.00</div>
<div className="col-span-3 flex justify-center">
<span className="badge-transition inline-flex items-center px-2 py-1 rounded-full border border-[#374b3e] bg-[#cee6d4] text-[#0b1f15] font-label-sm text-label-sm gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#374b3e]"></span>
                                Shipped
                            </span>
</div>
</div>
{/* Row 3 */}
<div className="grid grid-cols-12 gap-4 border-b border-outline-variant p-md items-center hover:bg-surface-container transition-colors cursor-pointer fade-in-up row-delay-3">
<div className="col-span-2 font-body-md text-body-md text-primary font-semibold">#BK-1040</div>
<div className="col-span-4">
<div className="font-body-md text-body-md text-primary">Professor Lidenbrock</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">otto.l@hamburg.edu</div>
</div>
<div className="col-span-3 font-body-md text-body-md text-primary text-right font-medium">$85.00</div>
<div className="col-span-3 flex justify-center">
<span className="badge-transition inline-flex items-center px-2 py-1 rounded-full border border-outline bg-surface text-on-surface-variant font-label-sm text-label-sm gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                Placed
                            </span>
</div>
</div>
{/* Row 4 */}
<div className="grid grid-cols-12 gap-4 p-md items-center hover:bg-surface-container transition-colors cursor-pointer fade-in-up row-delay-4">
<div className="col-span-2 font-body-md text-body-md text-primary font-semibold text-on-surface-variant">#BK-1039</div>
<div className="col-span-4 opacity-70">
<div className="font-body-md text-body-md text-primary">Dr. John Watson</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">watson.med@baker.st</div>
</div>
<div className="col-span-3 font-body-md text-body-md text-primary text-right font-medium opacity-70">$320.00</div>
<div className="col-span-3 flex justify-center">
<span className="badge-transition inline-flex items-center px-2 py-1 rounded-full border border-outline-variant bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined" style={{fontSize: '14px'}}>check_circle</span>
                                Delivered
                            </span>
</div>
</div>
</div>
{/* Pagination Footer */}
<div className="bg-surface-container-low border-t border-outline-variant p-sm flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant px-sm">Showing 1-4 of 142 entries</span>
<div className="flex gap-xs">
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true}><span className="material-symbols-outlined">chevron_left</span></button>
<button className="p-1 rounded text-primary hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
{/* Detail Panel (Takes 4 cols) */}
<aside className="lg:col-span-4 flex flex-col gap-md">
{/* Primary Detail Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl ambient-shadow-2 overflow-hidden flex flex-col relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-primary">
<div className="p-lg border-b border-outline-variant">
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Folio #BK-1042</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined" style={{fontSize: '14px'}}>schedule</span>
                                    Placed: Oct 24, 1892
                                </p>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
{/* Timeline / Status Actions */}
<div className="mt-lg">
<h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Advance State</h4>
<div className="flex bg-surface-container border border-outline-variant rounded-lg p-1 relative z-0">
{/* Active highlight background */}
<div className="absolute left-1 top-1 bottom-1 w-[calc(25%-2px)] bg-primary rounded-md z-[-1] transition-transform duration-300 translate-x-[100%] shadow-sm"></div>
<button className="flex-1 py-1 font-label-sm text-label-sm text-on-surface-variant text-center transition-colors">Placed</button>
<button className="flex-1 py-1 font-label-sm text-label-sm text-surface text-center font-bold transition-colors">Confirmed</button>
<button className="flex-1 py-1 font-label-sm text-label-sm text-on-surface-variant hover:text-primary text-center transition-colors">Shipped</button>
<button className="flex-1 py-1 font-label-sm text-label-sm text-on-surface-variant hover:text-primary text-center transition-colors">Delivered</button>
</div>
</div>
</div>
{/* Items List */}
<div className="p-lg border-b border-outline-variant bg-surface-bright">
<h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-md">Contents</h4>
<ul className="flex flex-col gap-md">
<li className="flex gap-md">
<div className="w-12 h-16 bg-surface-container-high border border-outline-variant shadow-sm flex-shrink-0 flex justify-center items-center">
<span className="material-symbols-outlined text-outline">auto_stories</span>
</div>
<div className="flex-1">
<div className="font-body-md text-body-md text-primary font-medium line-clamp-2">First Edition: The Haunting of Hill House</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Condition: Very Good</div>
</div>
<div className="font-body-md text-body-md text-primary text-right">$450.00</div>
</li>
</ul>
</div>
{/* Logistics & Payment Grid */}
<div className="p-lg grid grid-cols-1 sm:grid-cols-2 gap-lg bg-surface-container-low flex-1">
<div>
<h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm flex items-center gap-1">
<span className="material-symbols-outlined" style={{fontSize: '16px'}}>local_shipping</span>
                                Dispatch Route
                            </h4>
<p className="font-body-md text-body-md text-primary leading-tight">
                                Eleanor Vance<br />
                                123 Crain Road<br />
                                Hillsdale, MA 01234<br />
                                USA
                            </p>
</div>
<div>
<h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm flex items-center gap-1">
<span className="material-symbols-outlined" style={{fontSize: '16px'}}>credit_card</span>
                                Remittance
                            </h4>
<p className="font-body-md text-body-md text-primary leading-tight">
                                Wire Transfer<br />
                                Ref: TR-998-XX2<br />
<span className="text-[#52685a] font-medium mt-1 inline-block">Cleared</span>
</p>
</div>
</div>
{/* Action Footer */}
<div className="p-md bg-surface-container-lowest border-t border-outline-variant flex justify-end gap-sm">
<button className="px-md py-sm border border-outline-variant rounded text-primary font-label-md text-label-md hover:bg-surface-container transition-colors">Print Invoice</button>
<button className="px-md py-sm bg-primary text-surface rounded font-label-md text-label-md hover:opacity-90 transition-opacity">Generate Label</button>
</div>
</div>
</aside>
</div>
</main>
    </>
  );
}
