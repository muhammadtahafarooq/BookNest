import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './ShopBrowseBooks.css';

export default function ShopBrowseBooks() {
    const navigate = useNavigate();

    React.useEffect(() => {
        const checkboxes = document.querySelectorAll('.form-checkbox');
        const cards = document.querySelectorAll('.book-card');
        
        // Mock categories for the 4 cards (in order: Fiction, Fiction, Non-Fiction, Non-Fiction)
        const mockCategories = ['Fiction', 'Fiction', 'Non-Fiction', 'Non-Fiction'];
        
        checkboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                const checkedLabels = Array.from(checkboxes)
                    .filter(c => c.checked)
                    .map(c => c.nextElementSibling.textContent.split(' (')[0]);
                
                cards.forEach((card, index) => {
                    const category = mockCategories[index];
                    if (checkedLabels.length === 0 || checkedLabels.includes(category)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }, []);

  return (
    <>
      {/* TopNavBar (Shared Component) */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content Area */}
<main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 flex flex-col md:flex-row gap-gutter">
{/* Filter Sidebar (Library Archive Style) */}
<aside className="w-full md:w-1/4 lg:w-1/5 shrink-0 hidden md:block">
<div className="sticky-filters bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-outline-variant/30">
<h3 className="font-headline-md text-headline-md text-primary mb-6 font-fraunces border-b border-surface-container pb-4">Archive Filters</h3>
{/* Search within filters */}
<div className="mb-6">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 border border-outline-variant/50 rounded-DEFAULT bg-surface-muted focus:ring-2 focus:ring-secondary-fixed focus:border-secondary-fixed transition-all font-body-sm text-body-sm text-on-surface" placeholder="Search archive..." type="text" />
</div>
</div>
{/* Categories */}
<div className="mb-6">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Category</h4>
<div className="space-y-2">
<label className="flex items-center space-x-3 cursor-pointer group">
<input defaultChecked={true} className="rounded form-checkbox text-secondary border-outline-variant focus:ring-secondary-fixed focus:ring-offset-0 w-4 h-4" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Fiction (1,204)</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="rounded form-checkbox text-secondary border-outline-variant focus:ring-secondary-fixed focus:ring-offset-0 w-4 h-4" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Non-Fiction (845)</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="rounded form-checkbox text-secondary border-outline-variant focus:ring-secondary-fixed focus:ring-offset-0 w-4 h-4" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Science &amp; Tech (432)</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="rounded form-checkbox text-secondary border-outline-variant focus:ring-secondary-fixed focus:ring-offset-0 w-4 h-4" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary transition-colors">Arts &amp; Photography (198)</span>
</label>
</div>
</div>
{/* Price Range */}
<div className="mb-6">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Price Range</h4>
<div className="flex items-center space-x-2">
<input className="w-full px-2 py-1 border border-outline-variant/50 rounded-DEFAULT bg-surface-muted font-body-sm text-body-sm focus:ring-2 focus:ring-secondary-fixed focus:border-secondary-fixed" placeholder="Min" type="number" />
<span className="text-outline-variant">-</span>
<input className="w-full px-2 py-1 border border-outline-variant/50 rounded-DEFAULT bg-surface-muted font-body-sm text-body-sm focus:ring-2 focus:ring-secondary-fixed focus:border-secondary-fixed" placeholder="Max" type="number" />
</div>
</div>
</div>
</aside>
{/* Product Grid Area */}
<section className="w-full md:w-3/4 lg:w-4/5">
{/* Header Section */}
<div className="mb-10">
<nav aria-label="Breadcrumb" className="flex items-center text-on-surface-variant font-label-sm text-label-sm mb-4">
<ol className="flex items-center space-x-2">
<li><Link className="hover:text-secondary transition-colors" to="/">Home</Link></li>
<li><span className="material-symbols-outlined text-[16px]">chevron_right</span></li>
<li aria-current="page" className="text-on-surface font-medium">Browse Books</li>
</ol>
</nav>
<h1 className="font-display-lg text-display-lg font-fraunces text-primary mb-3">Browse Books</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Explore thousands of carefully selected books across different categories.</p>
{/* Mobile Filter Toggle (Visible only on small screens) */}
<div className="mt-6 md:hidden flex justify-between items-center border-y border-outline-variant/30 py-3">
<button className="flex items-center space-x-2 font-label-md text-label-md text-primary">
<span className="material-symbols-outlined">tune</span>
<span>Filters &amp; Sort</span>
</button>
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 2,679 results</span>
</div>
</div>
{/* Active Filters Tags */}
<div className="hidden md:flex flex-wrap items-center gap-2 mb-8">
<span className="font-body-sm text-body-sm text-on-surface-variant mr-2">Active:</span>
<span className="inline-flex items-center bg-surface-container-high px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface border border-outline-variant/30">
                    Fiction
                    <button className="ml-2 text-outline hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<button className="font-label-sm text-label-sm text-secondary hover:underline ml-2">Clear all</button>
<div className="ml-auto flex items-center space-x-2">
<label className="font-body-sm text-body-sm text-on-surface-variant">Sort by:</label>
<select className="border-0 bg-transparent font-label-md text-label-md text-primary cursor-pointer focus:ring-0 py-1 pl-0 pr-8">
<option>Recommended</option>
<option>Newest Arrivals</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
{/* The Grid (Floating Book Shelf System) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
{/* Book Card 1 */}
<article className="book-card reveal-on-scroll relative group flex flex-col h-full bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-sm">
<div className="relative h-64 mb-6 flex justify-center items-end px-4">
{/* 3D Book Cover */}
<div className="book-cover-container relative z-10 h-[90%] w-full max-w-[140px] origin-bottom rounded-r-sm shadow-md">
<div className="book-spine"></div>
<img alt="Book cover" className="w-full h-full object-cover rounded-r-sm rounded-l-[2px]" data-alt="A pristine, minimalist book cover titled 'The Midnight Library' with dark blue night sky motifs, gold foil stars, and elegant serif typography, set against a bright, well-lit white studio background. The lighting is soft and diffused, creating a premium, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5qxzu-WBI_BtqUNj_yUeBePM6OZ2EgZp1aSgSJMNHIS5yB3msQk6dMT75l3C9NUOn0YKVbs87s0F3Ut7tU40P2zp_bUwX7jtJtijCHLSAk5op-mjcgevtRzO5lpFUHnKdU1XG2H5u643meOFAYjZlTakpawGi3LNSGmJYHjP_UyJByooh5RKjGkpQxfhF2nIVecg7AlZuBkYJU8wnVrSWUo0kcNDLaqqj0ITHbeOpUtWsBX6BEpcy" />
</div>
{/* Mini Shelf */}
<div className="absolute bottom-0 left-0 w-full h-2 bg-surface-container-highest rounded-full shadow-inner z-0"></div>
<div className="book-shadow"></div>
{/* Wishlist FAB */}
<button aria-label="favorite" className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full text-on-surface-variant hover:text-danger-rose hover:bg-surface-container-lowest transition-all shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div className="flex-grow flex flex-col text-center">
<h2 className="font-headline-sm font-semibold font-fraunces text-primary leading-tight mb-1 line-clamp-2">The Midnight Library</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Matt Haig</p>
<div className="flex justify-center items-center space-x-1 mb-3">
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber/30 fill">star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(4.2)</span>
</div>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-primary">$24.99</span>
<button className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary px-4 py-2 rounded-md font-label-md text-label-md transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
                                Add to Cart
                            </button>
</div>
</div>
</article>
{/* Book Card 2 */}
<article className="book-card reveal-on-scroll relative group flex flex-col h-full bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-sm" style={{transitionDelay: '100ms'}}>
<div className="relative h-64 mb-6 flex justify-center items-end px-4">
<div className="book-cover-container relative z-10 h-[90%] w-full max-w-[140px] origin-bottom rounded-r-sm shadow-md">
<div className="book-spine"></div>
<img alt="Book cover" className="w-full h-full object-cover rounded-r-sm rounded-l-[2px]" data-alt="A striking, modern book cover titled 'Dune' featuring minimalist desert landscapes in warm orange and terracotta tones with bold, stark black typography. High-key lighting, bright clean white studio background. Premium, clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFZ5HqPEMy3EMSDPY90NcMJJ7Ne9r2pg0-A72Vkzw6lFc_008lNSrnIKSglMoMFH-b4arDXTgmmdNNU_wSS_YLRz4URYDIVIuwSQEgEjP3cAHu82PtxBFx4_uO01RRUcnetWpRneOLUAUCTxEveEcb5_Srw09bkeFILSo7kJKnyvTsgZeOKSq95SQHqgdYXDyPa8dHKPMofwCffAq4KYRLB5Ve2Ho4gknfc3FI4VoHvicKk4o1m8J6" />
</div>
<div className="absolute bottom-0 left-0 w-full h-2 bg-surface-container-highest rounded-full shadow-inner z-0"></div>
<div className="book-shadow"></div>
<button aria-label="favorite" className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full text-danger-rose hover:bg-surface-container-lowest transition-all shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
</div>
<div className="flex-grow flex flex-col text-center">
<h2 className="font-headline-sm font-semibold font-fraunces text-primary leading-tight mb-1 line-clamp-2">Dune</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Frank Herbert</p>
<div className="flex justify-center items-center space-x-1 mb-3">
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(4.8)</span>
</div>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-primary">$18.50</span>
<button className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary px-4 py-2 rounded-md font-label-md text-label-md transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
                                Add to Cart
                            </button>
</div>
</div>
</article>
{/* Book Card 3 */}
<article className="book-card reveal-on-scroll relative group flex flex-col h-full bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-sm" style={{transitionDelay: '200ms'}}>
<div className="relative h-64 mb-6 flex justify-center items-end px-4">
<div className="book-cover-container relative z-10 h-[90%] w-full max-w-[140px] origin-bottom rounded-r-sm shadow-md">
<div className="book-spine"></div>
<img alt="Book cover" className="w-full h-full object-cover rounded-r-sm rounded-l-[2px]" data-alt="A sophisticated book cover titled 'Sapiens' with abstract human evolution graphics in pale blue and deep navy against a clean white background. Modern, corporate typography. Bright, soft studio lighting emphasizing a high-end, intelligent aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMiJiBKXpZVTCm0mcT2xSt42A_EyZKAnY0YVUrm_Uyuq6KeG5lcjLWeDXOM4byW4do_P7huWxvmegLZEqXW7hNIzorJ44LbMqzfr8PCepYuXScMjr81Qy4Cho35Myb1ZV3WnqQUhvaA8igwwhJYDXkrm21wjPd2XN-KPo0xuOJIxPhU6lstv2foi8HYqrZdCZ45-ru2Dqm1rvDi-OkagPTeIBVmeMHhRt3lG46jhJeHc-mhDzqg6rJ" />
</div>
<div className="absolute bottom-0 left-0 w-full h-2 bg-surface-container-highest rounded-full shadow-inner z-0"></div>
<div className="book-shadow"></div>
<button aria-label="favorite" className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full text-on-surface-variant hover:text-danger-rose hover:bg-surface-container-lowest transition-all shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div className="flex-grow flex flex-col text-center">
<h2 className="font-headline-sm font-semibold font-fraunces text-primary leading-tight mb-1 line-clamp-2">Sapiens: A Brief History</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Yuval Noah Harari</p>
<div className="flex justify-center items-center space-x-1 mb-3">
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber/50 fill">star_half</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(4.6)</span>
</div>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-primary">$32.00</span>
<button className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary px-4 py-2 rounded-md font-label-md text-label-md transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
                                Add to Cart
                            </button>
</div>
</div>
</article>
{/* Book Card 4 */}
<article className="book-card reveal-on-scroll relative group flex flex-col h-full bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-sm" style={{transitionDelay: '300ms'}}>
<div className="relative h-64 mb-6 flex justify-center items-end px-4">
<div className="book-cover-container relative z-10 h-[90%] w-full max-w-[140px] origin-bottom rounded-r-sm shadow-md">
<div className="book-spine"></div>
<img alt="Book cover" className="w-full h-full object-cover rounded-r-sm rounded-l-[2px]" data-alt="An elegant, minimalist book cover titled 'Atomic Habits' featuring subtle geometric yellow and white patterns. Clean sans-serif typography. Shot in a bright, modern studio setting with soft diffused light to maintain a premium, clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUBd-pAiq_mEQPdkil1QWXu0JFjy8kG8J0Nyvd2meYSiXfJmji6zZz3rnZgVgQFlv2k_HcEjS6Acf5JzEMwWUSFAiIWlV53Oh8D2MwnhKNGJIjgq-Jr65yWdc3eWiFPug2vCL5dgAYf4s5r1PVfCOzkRzInQ1EavGLP5NMy5g-EEjyHvjjcPmpn7gTZh_QlKmQCSvndit1QYkZXv7ppRU7vG9nDUDcSaA1H9cZd1QAVyDuVUyZReQQ" />
</div>
<div className="absolute bottom-0 left-0 w-full h-2 bg-surface-container-highest rounded-full shadow-inner z-0"></div>
<div className="book-shadow"></div>
<button aria-label="favorite" className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full text-on-surface-variant hover:text-danger-rose hover:bg-surface-container-lowest transition-all shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div className="flex-grow flex flex-col text-center">
<h2 className="font-headline-sm font-semibold font-fraunces text-primary leading-tight mb-1 line-clamp-2">Atomic Habits</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">James Clear</p>
<div className="flex justify-center items-center space-x-1 mb-3">
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="material-symbols-outlined text-[16px] text-warning-amber fill">star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(4.9)</span>
</div>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-primary">$19.99</span>
<button className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary px-4 py-2 rounded-md font-label-md text-label-md transition-colors duration-300" onClick={() => navigate('/shoppingcartyourbookcollection')}>
                                Add to Cart
                            </button>
</div>
</div>
</article>
</div>
{/* Pagination */}
<div className="mt-16 flex justify-center items-center space-x-2">
<button className="p-2 rounded-md border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-primary disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold flex items-center justify-center">1</button>
<button className="w-10 h-10 rounded-md border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-label-md flex items-center justify-center transition-colors">2</button>
<button className="w-10 h-10 rounded-md border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-label-md flex items-center justify-center transition-colors">3</button>
<span className="text-outline-variant">...</span>
<button className="w-10 h-10 rounded-md border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-label-md flex items-center justify-center transition-colors">24</button>
<button className="p-2 rounded-md border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</section>
</main>
{/* Footer (Shared Component translated & styled with Midnight Ink aesthetic) */}
<Footer />
{/* Simple Scroll Animation Script */}
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
