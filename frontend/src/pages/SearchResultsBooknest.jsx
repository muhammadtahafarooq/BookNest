import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './SearchResultsBooknest.css';

export default function SearchResultsBooknest() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content */}
<main className="flex-grow flex flex-col w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 gap-8">
{/* Search Header */}
<section className="reveal-item w-full pb-6 border-b border-cloud-linen">
<p className="font-inter text-sm text-slate-binding uppercase tracking-widest mb-2 font-medium">Search Archive</p>
<h1 className="font-fraunces text-4xl md:text-5xl font-semibold text-midnight-ink mb-4 leading-tight">
                Search Results for <span className="italic text-library-forest">"The Midnight Library"</span>
</h1>
<div className="flex items-center justify-between flex-wrap gap-4">
<p className="font-inter text-slate-binding text-base">42 books found in our archives</p>
<div className="flex items-center gap-2">
<span className="font-inter text-sm text-slate-binding">Sort by:</span>
<select className="bg-transparent border-none text-midnight-ink font-medium font-inter focus:ring-0 cursor-pointer">
<option>Relevance</option>
<option>Publication Date (Newest)</option>
<option>Price (Low to High)</option>
<option>Price (High to Low)</option>
</select>
</div>
</div>
</section>
{/* Layout: Sidebar + Grid */}
<div className="flex flex-col lg:flex-row gap-12 items-start relative">
{/* Filter Sidebar */}
<aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-28 reveal-item delay-1">
<div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-cloud-linen/50 shadow-sm">
<h2 className="font-fraunces text-xl font-medium text-midnight-ink mb-6 pb-4 border-b border-cloud-linen">Refine Search</h2>
{/* Filter Group: Category */}
<div className="mb-6">
<h3 className="font-inter text-sm font-semibold text-midnight-ink uppercase tracking-wider mb-3">Category</h3>
<ul className="space-y-2 font-inter text-sm text-slate-binding">
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked={true} className="rounded border-slate-binding/30 text-antique-brass focus:ring-antique-brass bg-transparent w-4 h-4 transition-colors" type="checkbox" />
<span className="group-hover:text-midnight-ink transition-colors">Fiction (24)</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-binding/30 text-antique-brass focus:ring-antique-brass bg-transparent w-4 h-4 transition-colors" type="checkbox" />
<span className="group-hover:text-midnight-ink transition-colors">Fantasy (12)</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-binding/30 text-antique-brass focus:ring-antique-brass bg-transparent w-4 h-4 transition-colors" type="checkbox" />
<span className="group-hover:text-midnight-ink transition-colors">Science Fiction (6)</span>
</label>
</li>
</ul>
</div>
{/* Filter Group: Author */}
<div className="mb-6">
<h3 className="font-inter text-sm font-semibold text-midnight-ink uppercase tracking-wider mb-3">Author</h3>
<div className="relative mb-3">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-binding/50 text-sm">search</span>
<input className="w-full pl-8 pr-3 py-1.5 text-sm bg-transparent border border-cloud-linen rounded focus:border-antique-brass focus:ring-1 focus:ring-antique-brass transition-colors" placeholder="Find author..." type="text" />
</div>
<ul className="space-y-2 font-inter text-sm text-slate-binding max-h-32 overflow-y-auto pr-2">
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked={true} className="rounded border-slate-binding/30 text-antique-brass focus:ring-antique-brass bg-transparent w-4 h-4 transition-colors" type="checkbox" />
<span className="group-hover:text-midnight-ink transition-colors">Matt Haig (3)</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-binding/30 text-antique-brass focus:ring-antique-brass bg-transparent w-4 h-4 transition-colors" type="checkbox" />
<span className="group-hover:text-midnight-ink transition-colors">Neil Gaiman (4)</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-binding/30 text-antique-brass focus:ring-antique-brass bg-transparent w-4 h-4 transition-colors" type="checkbox" />
<span className="group-hover:text-midnight-ink transition-colors">V.E. Schwab (2)</span>
</label>
</li>
</ul>
</div>
{/* Filter Group: Price Range */}
<div className="mb-6">
<h3 className="font-inter text-sm font-semibold text-midnight-ink uppercase tracking-wider mb-3">Price Range</h3>
<input className="w-full h-1 bg-cloud-linen rounded-lg appearance-none cursor-pointer accent-antique-brass mb-2" max="100" min="0" type="range" defaultValue="50" />
<div className="flex justify-between font-inter text-xs text-slate-binding">
<span>$0</span>
<span>$50</span>
<span>$100+</span>
</div>
</div>
</div>
</aside>
{/* Results Grid */}
<div className="w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
{/* Book Card 1 */}
<article className="flex flex-col reveal-item delay-2 group">
<div className="book-container w-full aspect-[2/3] max-w-[220px] mx-auto mb-6 cursor-pointer">
<div className="book-card relative w-full h-full">
<div className="book-spine" style={{backgroundColor: '#1a365d'}}></div>
<img alt="Book Cover" className="book-cover w-full h-full object-cover bg-midnight-ink" data-alt="A highly detailed book cover design for a novel titled 'The Midnight Library'. The cover features a dark, starry night sky above a glowing, stylized building with lit windows, rendered in a modern illustrative style with deep blues and bright gold accents. The mood is magical and mysterious, perfect for a high-end private library aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnG7WLe62GRWza3o1uHj6a1GjSUwvgiG4bjm_QEooKFGQwRlJrnIreSA8l6Zs_wDJFEDD36c6T5nU4eG08oas06ITiR6ogbv7SI7atNS5ruOGncw7qCq7OtEWp6FlemrVcJriSzHMmsawm_Ll7xeEzpV_7FBveyG9osbKoNT_2WslJUn-SomNUfnfjMv4G9mcrEMHlBGpa433mQzMYf21EnMyE2Qmp6k_taBlut_czx3L4jHnlzdV-" />
</div>
</div>
<div className="shelf-base w-3/4 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
<div className="text-center flex flex-col flex-grow">
<h3 className="font-fraunces text-lg font-semibold text-midnight-ink leading-snug mb-1 group-hover:text-library-forest transition-colors line-clamp-2">The Midnight Library</h3>
<p className="font-inter text-sm text-slate-binding mb-2">Matt Haig</p>
<div className="flex items-center justify-center gap-1 text-antique-brass text-sm mb-3">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]">star_half</span>
<span className="text-xs text-slate-binding ml-1">(4.2k)</span>
</div>
<div className="mt-auto flex items-center justify-between px-2">
<span className="font-inter font-semibold text-library-forest text-lg">$24.99</span>
<button aria-label="Add to cart" className="text-antique-brass hover:text-midnight-ink hover:bg-antique-brass/10 p-2 rounded-full transition-all duration-300 flex items-center justify-center" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
</div>
</article>
{/* Book Card 2 */}
<article className="flex flex-col reveal-item delay-3 group">
<div className="book-container w-full aspect-[2/3] max-w-[220px] mx-auto mb-6 cursor-pointer">
<div className="book-card relative w-full h-full">
<div className="book-spine" style={{backgroundColor: '#2d3748'}}></div>
<img alt="Book Cover" className="book-cover w-full h-full object-cover bg-slate-binding" data-alt="A highly detailed book cover design for a fantasy novel. The cover features an ornate, glowing magical doorway set against an intricate, dark slate grey background with subtle gold filigree patterns. The typography is elegant serif. The mood is enchanting and premium, suited for a sophisticated library setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnA6uYIKbKE3XZKnu2YKNGZUT2kZzX8ZEAHTVSCOfpxsVw1Q4qZMdUQ3H224exJ98HkZ8wP-Xt_juxxTwbGvHo4hvk0rLQwfTX_10LFPrZTuPjo6GFGhilq_PXBzy7CATCCow62Ru00WL1r0uFQI8q4FuppaxrLOX0SUdv97bZJ8fd6--4tpSSdnPijC0zi1PSdIEAESzoLQ8E4DnxJpgeaesq17cPLOCnmHhzoOsuwVxacQ1pYlSP" />
</div>
</div>
<div className="shelf-base w-3/4 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
<div className="text-center flex flex-col flex-grow">
<h3 className="font-fraunces text-lg font-semibold text-midnight-ink leading-snug mb-1 group-hover:text-library-forest transition-colors line-clamp-2">The Starless Sea</h3>
<p className="font-inter text-sm text-slate-binding mb-2">Erin Morgenstern</p>
<div className="flex items-center justify-center gap-1 text-antique-brass text-sm mb-3">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="text-xs text-slate-binding ml-1">(2.8k)</span>
</div>
<div className="mt-auto flex items-center justify-between px-2">
<span className="font-inter font-semibold text-library-forest text-lg">$21.50</span>
<button aria-label="Add to cart" className="text-antique-brass hover:text-midnight-ink hover:bg-antique-brass/10 p-2 rounded-full transition-all duration-300 flex items-center justify-center" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
</div>
</article>
{/* Book Card 3 */}
<article className="flex flex-col reveal-item delay-4 group">
<div className="book-container w-full aspect-[2/3] max-w-[220px] mx-auto mb-6 cursor-pointer">
<div className="book-card relative w-full h-full">
<div className="book-spine" style={{backgroundColor: '#23483A'}}></div>
<img alt="Book Cover" className="book-cover w-full h-full object-cover bg-library-forest" data-alt="A highly detailed book cover design for a literary fiction book. The cover features a minimalist illustration of a winding path through a dense, deep green forest, bathed in soft, ethereal morning light. The title text is clean and classic. The aesthetic is serene, natural, and high-end." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpiNQDiYmLuIDlG5ikwy-PRyZ7u5mfhz2AfyFUHxfOVXcHvCPRvBdRUgqRaO0x43ZoXu42WlM50eNcq8bitBT52LXGbG8kbSAiJfgZj6YtuGuiEulb3zL3puoWXAnqE7vDUC0Wi5fDgx-sUPL6uB5La_aR2S7K-POEaD4TKzmwkPXxs7WeeBubyF6A8M0_91A5_KIaDdbAPdTqdb0-40FrKXX3YWnobqX8b4E3GgJYcz3q_KCHbh8i" />
</div>
</div>
<div className="shelf-base w-3/4 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
<div className="text-center flex flex-col flex-grow">
<h3 className="font-fraunces text-lg font-semibold text-midnight-ink leading-snug mb-1 group-hover:text-library-forest transition-colors line-clamp-2">A Walk in the Woods</h3>
<p className="font-inter text-sm text-slate-binding mb-2">Bill Bryson</p>
<div className="flex items-center justify-center gap-1 text-antique-brass text-sm mb-3">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-[16px]">star_outline</span>
<span className="text-xs text-slate-binding ml-1">(1.5k)</span>
</div>
<div className="mt-auto flex items-center justify-between px-2">
<span className="font-inter font-semibold text-library-forest text-lg">$18.99</span>
<button aria-label="Add to cart" className="text-antique-brass hover:text-midnight-ink hover:bg-antique-brass/10 p-2 rounded-full transition-all duration-300 flex items-center justify-center" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
</div>
</article>
</div>
{/* Pagination */}
<div className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-cloud-linen reveal-item delay-5">
<button className="p-2 text-slate-binding hover:text-midnight-ink transition-colors" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-midnight-ink text-paper-mist font-inter text-sm font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-cloud-linen text-midnight-ink font-inter text-sm transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-cloud-linen text-midnight-ink font-inter text-sm transition-colors">3</button>
<span className="text-slate-binding mx-1">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-cloud-linen text-midnight-ink font-inter text-sm transition-colors">8</button>
<button className="p-2 text-slate-binding hover:text-midnight-ink transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Discovery Shelf (Recommended) */}
<section className="mt-16 bg-white/40 p-8 rounded-2xl border border-cloud-linen/60 reveal-item delay-6">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-antique-brass text-2xl">auto_awesome</span>
<h2 className="font-fraunces text-2xl font-medium text-midnight-ink">Curator's Discovery Shelf</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{/* Mini Card 1 */}
<div className="group cursor-pointer">
<div className="aspect-[3/4] mb-3 overflow-hidden rounded shadow-sm relative">
<img alt="Recommended Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A minimalist book cover design featuring an abstract geometric pattern in deep burgundy and gold, indicating a classic piece of literature. The design is sleek, sophisticated, and evokes a sense of timeless elegance suitable for a premium collection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZKcwN7k6gbKK4qcZsMCUChmu2Z2yI2_28QkiieTtHqQdJ_043jlEQyuIAkaEbQ6csTZEs5l0zV1vltckBTf2b3RBbjCQtmn4YOyTmsRPe3hfSeWmGQKcOI5cl0wRT6_DmAau0zlD3tB1prE3ZKRa0tsB7SLvJP-YkU2I-QPQEwWaQSuZuHX97O5EtRL3Xfe8ZRQAvjYCehz-4NRMRwtRJLxWtn2wtaYtqBNiFCZD4P0AJLT1G_uI" />
<div className="absolute inset-0 bg-midnight-ink/0 group-hover:bg-midnight-ink/10 transition-colors duration-300"></div>
</div>
<h4 className="font-fraunces text-sm font-medium text-midnight-ink line-clamp-1 group-hover:text-library-forest transition-colors">The Shadow of the Wind</h4>
<p className="font-inter text-xs text-slate-binding">Carlos Ruiz Zafón</p>
</div>
{/* Mini Card 2 */}
<div className="group cursor-pointer">
<div className="aspect-[3/4] mb-3 overflow-hidden rounded shadow-sm relative">
<img alt="Recommended Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sophisticated book cover featuring a vintage key resting on a heavily textured, dark teal fabric background. The title is embossed in elegant, thin gold lettering. The overall mood is mysterious, classic, and high-quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8stHykSJ9rvuJ2YbSQU6J36qzYzaSfqel7syk4UzavHwbURQlYPuW0QyutGUj4cB0cDJOi5xoFJ7FKEDgq4IeQqvKiU9b79v_Wp-SgHwdad_OvpFS3tiVj_m5atOjVsUP6BgoO9wI1VjxtB6znMnhCiWcqgxBWXk08Zc4b1U0V5d1X51kD9IRo_7mbrIMibFW3wCx6aUwhRIYmBYIdfCrkY1gsuZ4qdi_7RuHSS4qOJ69MO5z3r9p" />
<div className="absolute inset-0 bg-midnight-ink/0 group-hover:bg-midnight-ink/10 transition-colors duration-300"></div>
</div>
<h4 className="font-fraunces text-sm font-medium text-midnight-ink line-clamp-1 group-hover:text-library-forest transition-colors">Piranesi</h4>
<p className="font-inter text-xs text-slate-binding">Susanna Clarke</p>
</div>
</div>
</section>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
