import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './CustomerRelationshipArchive.css';

export default function CustomerRelationshipArchive() {
  
  useEffect(() => {
    function togglePreviewPanel() {
            const panel = document.getElementById('previewPanel');
            const backdrop = document.getElementById('panelBackdrop');
            
            if (panel.classList.contains('hidden')) {
                // Open
                panel.classList.remove('hidden');
                backdrop.classList.remove('hidden');
                
                // Small delay to allow display:block to apply before animating
                requestAnimationFrame(() => {
                    panel.classList.add('active');
                    backdrop.classList.remove('opacity-0');
                    backdrop.classList.add('opacity-100');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                });
            } else {
                // Close
                panel.classList.remove('active');
                backdrop.classList.remove('opacity-100');
                backdrop.classList.add('opacity-0');
                document.body.style.overflow = '';
                
                // Wait for animation to finish before hiding
                setTimeout(() => {
                    panel.classList.add('hidden');
                    backdrop.classList.add('hidden');
                }, 400); // Matches CSS transition duration
            }
        }
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
{/* <Navbar /> */}
<Navbar />
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
{/* Page Header */}
<div className="fade-in flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-lg">
<div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm">Customer Relationship Archive</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Managing the readers of the BookNest collection.</p>
</div>
<button className="bg-[#b8860b] text-[#171a1c] font-label-md text-label-md px-lg py-md rounded-DEFAULT font-bold flex items-center gap-sm archive-shadow archive-shadow-hover transition-all" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">person_add</span>
                Add New Reader
            </button>
</div>
{/* Search & Filters */}
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg archive-shadow mb-xl flex flex-col md:flex-row gap-lg items-center fade-in" style={{animationDelay: '0.1s'}}>
<div className="relative w-full md:w-1/2">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-transparent border-outline-variant focus:border-[#171a1c] rounded-DEFAULT pl-xl pr-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant transition-colors ring-0 focus:ring-0" placeholder="Search by Name or Email..." type="text" />
</div>
<div className="flex gap-md w-full md:w-auto">
<select className="bg-transparent border-outline-variant focus:border-[#171a1c] rounded-DEFAULT px-md py-sm font-label-md text-label-md text-on-surface cursor-pointer ring-0 focus:ring-0 w-full md:w-auto">
<option value={true}>Member Status</option>
<option value="archivist">Archivist</option>
<option value="collector">Collector</option>
<option value="reader">Reader</option>
</select>
<select className="bg-transparent border-outline-variant focus:border-[#171a1c] rounded-DEFAULT px-md py-sm font-label-md text-label-md text-on-surface cursor-pointer ring-0 focus:ring-0 w-full md:w-auto">
<option value={true}>Join Date</option>
<option value="newest">Newest First</option>
<option value="oldest">Oldest First</option>
</select>
</div>
</div>
{/* Customer Table Layout */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden archive-shadow fade-in" style={{animationDelay: '0.2s'}}>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-low/50">
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Name</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Email</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold text-right">Orders</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Joined Date</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Status</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/50">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-md px-lg flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A sophisticated black and white portrait of an elegant older woman wearing reading glasses, looking thoughtful, set against a subtle library background in an archival documentary style, soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVv99_tn_gf4ddoaNwprsjmLihkUI1-mXE2rRPrMpysQs-dUsHxlOeWBMqJ0AmyiHUUGp2YUZtsxPu-p45XTEV5_iIqssTECgOhagl7DIifV1gRmKZVnO7zU-4oByZeoZ8KbrAh3y6Dt7F_T_g0Do4K__Lgqiq5X4VsPTFvlxqY2Ri2DlYqCSlsI14P-4ScPkokm09OAAKtg6El--LWWrv9hOqrkm6LAc9xTi9QV7RxcwpQrt-I30UVg" />
</div>
<span className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Eleanor Vance</span>
</td>
<td className="py-md px-lg text-on-surface-variant">e.vance@hillhouse.edu</td>
<td className="py-md px-lg text-right font-label-md">24</td>
<td className="py-md px-lg font-label-md text-on-surface-variant">Oct 14, 1959</td>
<td className="py-md px-lg">
<span className="px-sm py-xs bg-[#1b3c35] text-white rounded-full font-label-sm text-label-sm tracking-wide">Collector</span>
</td>
<td className="py-md px-lg text-right">
<button className="text-on-surface-variant hover:text-[#b8860b] transition-colors p-sm" onclick="togglePreviewPanel()" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors p-sm ml-xs" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-md px-lg flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex-shrink-0 flex items-center justify-center text-on-surface-variant font-headline-sm text-[16px]">
                                    JG
                                </div>
<span className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Jay Gatsby</span>
</td>
<td className="py-md px-lg text-on-surface-variant">jay@westegg.com</td>
<td className="py-md px-lg text-right font-label-md">142</td>
<td className="py-md px-lg font-label-md text-on-surface-variant">Apr 10, 1925</td>
<td className="py-md px-lg">
<span className="px-sm py-xs bg-[#b8860b] text-[#171a1c] rounded-full font-label-sm text-label-sm tracking-wide font-bold">Premium</span>
</td>
<td className="py-md px-lg text-right">
<button className="text-on-surface-variant hover:text-[#b8860b] transition-colors p-sm" onclick="togglePreviewPanel()" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors p-sm ml-xs" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-md px-lg flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A moody, atmospheric portrait of a young man with disheveled hair holding a worn leather-bound book, sepia tones, dusty library lighting, editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEf5LeUYrNSARtZqy4uI2BL6A6NeWxetgyfC0feQs3WQQLVB7LtCsorYnTu20xMkikTAX6PUEPtj5L48_NX4Thxf2XhP4cze6BejZ68VOHHVQnS01oLjsUdQ6pTCo9FZIizyGrt9B4OPbSbk9J--C5zHW-36BF9Lynhy9j9RganDPM-a0Gph48bJM3XUisDbwfuf_ikw8kzYoQKCE54vSve6lewg9sYY2WDujQpEPsKUnlgqCEQ-qDbQ" />
</div>
<span className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Holden Caulfield</span>
</td>
<td className="py-md px-lg text-on-surface-variant">h.caulfield@pencey.edu</td>
<td className="py-md px-lg text-right font-label-md">3</td>
<td className="py-md px-lg font-label-md text-on-surface-variant">Jul 16, 1951</td>
<td className="py-md px-lg">
<span className="px-sm py-xs border border-outline-variant text-on-surface-variant rounded-full font-label-sm text-label-sm tracking-wide">Reader</span>
</td>
<td className="py-md px-lg text-right">
<button className="text-on-surface-variant hover:text-[#b8860b] transition-colors p-sm" onclick="togglePreviewPanel()" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="text-on-surface-variant hover:text-error transition-colors p-sm ml-xs" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="border-t border-outline-variant bg-surface-container-lowest p-md flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 3 of 1,892 Readers</span>
<div className="flex gap-xs">
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant disabled:opacity-50"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="p-xs border border-outline-variant rounded bg-[#171a1c] text-white font-label-sm px-sm">1</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low text-on-surface font-label-sm px-sm">2</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low text-on-surface font-label-sm px-sm">3</button>
<button className="p-xs border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</main>
{/* Slide-out Details Panel */}
<div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-surface-container-lowest border-l border-outline-variant shadow-2xl z-50 slide-in-right overflow-y-auto hidden" id="previewPanel">
<div className="p-lg md:p-xl flex flex-col h-full">
<div className="flex justify-between items-start mb-xl">
<button className="text-on-surface-variant hover:text-on-surface p-sm -ml-sm rounded-full hover:bg-surface-container-low transition-colors" onclick="togglePreviewPanel()">
<span className="material-symbols-outlined">close</span>
</button>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Reader Profile</span>
</div>
{/* Profile Header */}
<div className="text-center mb-xl">
<div className="w-24 h-24 mx-auto rounded-full border-2 border-outline-variant p-xs mb-md bg-surface-container-high">
<img className="w-full h-full rounded-full object-cover" data-alt="A sophisticated black and white portrait of an elegant older woman wearing reading glasses, looking thoughtful, set against a subtle library background in an archival documentary style, soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRsIQgcpZkMXpUMU_eoD1q4UkqQdRCSdLqVmg86dHKAHa74SBC6ziGMZMg0O6RgbDNbwv6PFvouFn2YHm0nbTQ10QxpK6H4EvBmR_5hixkedKARP0_MCE3YoPBYxq0cOZk_b_CwWtC0qPKudmavM6c1IofB7xy3OWjHMJIwnGuccdBiJdtxANoGOmJKsphyChP05_cN4uZJ6qKWmInF3gMJ4T0yw5L-kt_ym_LeOW4zvZyT5sen3um-w" />
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Eleanor Vance</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">e.vance@hillhouse.edu</p>
<span className="px-sm py-xs bg-[#1b3c35] text-white rounded-full font-label-sm text-label-sm tracking-wide inline-block">Collector</span>
</div>
<div className="divider-faded h-[1px] w-full bg-outline-variant/30 my-lg mx-auto max-w-[80%]"></div>
{/* Stats Grid */}
<div className="grid grid-cols-2 gap-md mb-xl">
<div className="text-center p-md bg-surface-container-low rounded-lg border border-outline-variant/50">
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Joined Date</span>
<span className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Oct 14, 1959</span>
</div>
<div className="text-center p-md bg-surface-container-low rounded-lg border border-outline-variant/50">
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Investment</span>
<span className="font-headline-sm text-headline-sm text-on-surface text-[18px] font-bold text-[#b8860b]">$4,850</span>
</div>
</div>
{/* Recent Activity */}
<div className="mb-xl">
<h3 className="font-headline-sm text-headline-sm text-on-surface text-[20px] mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant">history</span>
                    Recent Activity
                </h3>
<div className="bg-surface-container-low p-md border border-outline-variant rounded-lg">
<p className="font-body-md text-body-md text-on-surface mb-xs">
                        Recently Acquired: <span className="font-bold">The Haunting of Hill House (First Edition)</span>
</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 days ago</span>
</div>
</div>
{/* Order History Snippet */}
<div className="flex-grow">
<div className="flex justify-between items-end mb-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface text-[20px]">Order History</h3>
<Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-[#b8860b] hover:underline underline-offset-4" to="/shopbrowsebooks">View All (24)</Link>
</div>
<ul className="divide-y divide-outline-variant/30">
<li className="py-md flex justify-between items-center group cursor-pointer hover:bg-surface-container-low -mx-md px-md rounded transition-colors">
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-[#b8860b] transition-colors">Order #8921</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">3 Items • Sep 12, 1959</p>
</div>
<span className="font-label-md text-label-md text-on-surface">$145.00</span>
</li>
<li className="py-md flex justify-between items-center group cursor-pointer hover:bg-surface-container-low -mx-md px-md rounded transition-colors">
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-[#b8860b] transition-colors">Order #8845</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">1 Item • Aug 05, 1959</p>
</div>
<span className="font-label-md text-label-md text-on-surface">$850.00</span>
</li>
</ul>
</div>
<div className="mt-xl pt-lg border-t border-outline-variant flex gap-md">
<button className="flex-1 border border-[#171a1c] text-[#171a1c] font-label-md text-label-md py-md rounded-DEFAULT hover:bg-surface-container-low transition-colors">Message Reader</button>
</div>
</div>
</div>
{/* Backdrop for Panel */}
<div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 hidden transition-opacity opacity-0" id="panelBackdrop" onclick="togglePreviewPanel()"></div>
{/* Footer */}
<Footer />
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
