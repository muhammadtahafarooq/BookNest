import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './LibraryDiscoverySearchResults.css';

export default function LibraryDiscoverySearchResults() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar from JSON */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Search Header */}
<div className="mb-xl archive-divider pb-lg fade-in-up" style={{animationDelay: '0.1s'}}>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-sm uppercase tracking-widest">Archive Catalog Search</p>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                Results for "First Edition"
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                128 items discovered in the archive
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Filter Sidebar */}
<aside className="md:col-span-3 space-y-lg fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="bg-surface-container-lowest border border-surface-dim rounded-lg p-lg book-shadow">
<h2 className="font-headline-sm text-headline-sm mb-md pb-xs archive-divider">Classification</h2>
{/* Filter Group: Category */}
<div className="mb-md">
<h3 className="font-label-md text-label-md text-on-surface mb-sm">Category</h3>
<div className="space-y-xs">
<label className="flex items-center gap-sm cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-on-surface border-outline rounded-sm focus:ring-on-surface" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Fiction (45)</span>
</label>
<label className="flex items-center gap-sm cursor-pointer group">
<input defaultChecked={true} className="form-checkbox h-4 w-4 text-on-surface border-outline rounded-sm focus:ring-on-surface" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Rare Antiquarian (28)</span>
</label>
</div>
</div>
</div>
</aside>
{/* Product Grid */}
<section className="md:col-span-9">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
{/* Book Card 1 */}
<article className="bg-surface-container-lowest rounded-lg p-lg border border-surface-dim book-shadow flex flex-col h-full fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="w-full h-64 mb-md rounded bg-surface-variant flex items-center justify-center overflow-hidden">
<img alt="Book Cover" className="object-cover w-full h-full" data-alt="A meticulously bound rare antiquarian book with a rich, dark leather cover featuring intricate gold foil stamping on the spine and edges. The book rests on a soft, archival white display stand in a beautifully lit, minimalist gallery space with high-contrast, premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVX5nDjy9adinJlzGLf4C8_tEUzgmU4H-SUJ8fCYhqgG5AH7RqE7AxsphMqKucFGz2J6lydpjfvVO8UORYtxLkYyvusLbFJEAMMxEM6bLzQHcWyqMbaGNixZmCfldIWarEzeX2b6VEgkh2Y3w2gCIBfEkt_CmTovQVhZQr5TGsJKBvf0OdSouy5RZiQC5woRO9E0TIxdHSeBNvfTLrMP7bqu9UKzIZk7zy7l0HAGg8LomsA1-DHQeP5Q" />
</div>
<div className="flex-grow flex flex-col">
<div className="mb-xs">
<span className="inline-block px-2 py-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm">Rare</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs line-clamp-2">The Great Gatsby - First Edition</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">F. Scott Fitzgerald</p>
<div className="mt-auto flex items-center justify-between archive-divider pt-sm">
<span className="font-label-md text-label-md text-on-surface">$4,500</span>
<button className="font-label-md text-label-md px-md py-sm bg-primary text-on-primary rounded hover:bg-surface-tint transition-colors">
                                    Acquire
                                </button>
</div>
</div>
</article>
{/* Book Card 2 */}
<article className="bg-surface-container-lowest rounded-lg p-lg border border-surface-dim book-shadow flex flex-col h-full fade-in-up" style={{animationDelay: '0.4s'}}>
<div className="w-full h-64 mb-md rounded bg-surface-variant flex items-center justify-center overflow-hidden">
<img alt="Book Cover" className="object-cover w-full h-full" data-alt="A meticulously bound rare antiquarian book with a rich, deep forest green cloth cover. The title is subtly debossed into the front. The book rests on a soft, archival white display stand in a beautifully lit, minimalist gallery space with high-contrast, premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9LIKngilfP2uOxgdcaQPwANzteGWGpzXN_rb0oHalZVJ993Lbmxtxifzn9B-1KcnNw9PoSbulOnCekKE51wcmlNB2OVX3sumwfYr1FS6ZTuZBEL4mcLREMCwSEVeRUdO-PLcY3e2lnPMFsOwhBDuChNgfOwf8bTFOoXtAMUC3ISMdnOEjl8Yf00NaShjEaIHFpRiIazBVqYRAJRwWUNWcukOkMto8OLHuZ2kTb74kagsSV86bH8atdg" />
</div>
<div className="flex-grow flex flex-col">
<div className="mb-xs">
<span className="inline-block px-2 py-1 bg-surface-container text-on-surface rounded-full font-label-sm text-label-sm">Signed</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs line-clamp-2">To Kill a Mockingbird</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Harper Lee</p>
<div className="mt-auto flex items-center justify-between archive-divider pt-sm">
<span className="font-label-md text-label-md text-on-surface">$1,200</span>
<button className="font-label-md text-label-md px-md py-sm bg-primary text-on-primary rounded hover:bg-surface-tint transition-colors">
                                    Acquire
                                </button>
</div>
</div>
</article>
</div>
</section>
</div>
</main>
{/* Footer from JSON */}
<Footer />
    </>
  );
}
