import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<header className="bg-primary dark:bg-primary docked full-width top-0 bg-primary dark:bg-primary shadow-md shadow-md z-50 sticky">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
{/* Brand */}
<Link className="font-display-lg text-display-lg font-bold text-on-primary font-editorial tracking-tight" to="/">BookNest</Link>
{/* Navigation */}
<nav className="hidden md:flex space-x-8 items-center h-full">
{/* Shop - Active */}
<Link className="text-on-primary border-b-2 border-secondary-fixed pb-1 font-label-md text-label-md hover:bg-primary-container/50 transition-all duration-400 h-full flex items-center mt-1" to="/shopbrowsebooks">Shop</Link>
{/* Categories */}
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md hover:bg-primary-container/50 transition-all duration-400 h-full flex items-center" to="/shopbrowsebooks">Categories</Link>
{/* Best Sellers */}
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md hover:bg-primary-container/50 transition-all duration-400 h-full flex items-center" to="/shopbrowsebooks">Best Sellers</Link>
{/* New Arrivals */}
<Link className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md hover:bg-primary-container/50 transition-all duration-400 h-full flex items-center" to="/shopbrowsebooks">New Arrivals</Link>
</nav>
{/* Actions */}
<div className="flex items-center space-x-6 text-on-primary">
<button aria-label="favorite" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')} className="hover:text-secondary-fixed transition-colors scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">favorite</span>
</button>
<button aria-label="shopping_cart" onClick={() => navigate('/shoppingcartyourbookcollection')} className="hover:text-secondary-fixed transition-colors scale-95 duration-200 ease-in-out relative">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="absolute -top-1 -right-2 bg-danger-rose text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
</button>
<button aria-label="account_circle" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')} className="hover:text-secondary-fixed transition-colors scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">account_circle</span>
</button>
<button aria-label="menu" className="md:hidden hover:text-secondary-fixed transition-colors scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
{/* Hero Section */}
<section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#102A43] to-[#1A3636]">
<div className="absolute inset-0 opacity-20 pointer-events-none">
{/* Subtle pattern overlay could go here */}
</div>
<div className="max-w-container-max-width mx-auto px-margin-desktop w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center py-20">
{/* Left: Copy */}
<div className="space-y-8 text-on-primary pr-0 lg:pr-12">
<h1 className="font-editorial text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                    Books that find their way <span className="text-golden italic">home</span>
</h1>
<p className="font-body-lg text-inverse-primary max-w-xl opacity-90 leading-relaxed">
                    Curate your personal library with our handpicked selection of academic texts, captivating novels, inspiring children's tales, profound Islamic literature, and transformative self-help books.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<Link to="/shopbrowsebooks" className="bg-golden text-[#102A43] font-label-md text-label-md px-8 py-4 rounded-lg font-bold hover:bg-[#b08832] transition-colors duration-400 shadow-lg shadow-black/20 flex items-center gap-2">
                        Shop Books
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
<Link to="/categoriesexploration" className="border border-outline text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-white/5 transition-colors duration-400 flex items-center gap-2">
                        Explore Categories
                    </Link>
</div>
{/* Trust indicators */}
<div className="flex items-center gap-6 pt-8 border-t border-white/10 text-inverse-primary font-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-golden text-xl">verified</span>
<span>Authentic Prints</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-golden text-xl">local_shipping</span>
<span>Fast Delivery</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-golden text-xl">star</span>
<span>4.9/5 Reviews</span>
</div>
</div>
</div>
{/* Right: 3D Scene */}
<div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group">
<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
{/* STITCH_THREEJS_START:ANIMATION_4 class="absolute inset-0 w-full h-full object-cover" */}
<div className="absolute inset-0 w-full h-full object-cover" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_4" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_4 */}
<div className="absolute bottom-6 right-6 z-20 bg-background/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20 shadow-xl flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center">
<span className="material-symbols-outlined text-golden">auto_awesome</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-surface-tint">Interactive View</p>
<p className="font-label-md text-label-md text-on-surface font-bold">Drag to explore</p>
</div>
</div>
</div>
</div>
</section>
{/* Main Content Canvas */}
<main className="bg-background pb-32">
{/* Featured Categories Shelf (Bento Grid Style) */}
<section className="max-w-container-max-width mx-auto px-margin-desktop py-24">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-editorial text-4xl font-bold text-on-surface mb-2">Curated Shelves</h2>
<p className="font-body-md text-surface-tint">Explore our extensive collection by category.</p>
</div>
<Link className="hidden md:flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-secondary-container transition-colors" to="/shopbrowsebooks">
                    View All Categories <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Academic */}
<Link className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">
<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/30 to-transparent z-10"></div>
<div className="absolute top-6 left-6 z-20">
<h3 className="font-editorial text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Academic</h3>
<p className="font-label-sm text-label-sm text-surface-tint mt-1 bg-white/80 px-2 py-1 rounded backdrop-blur-sm inline-block">2,450+ Books</p>
</div>
<div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
<img className="w-full h-full object-cover rounded-lg rotate-[-10deg] shadow-lg" data-alt="A stack of heavy, thick hardcover academic textbooks with dark, textured covers and gold foil lettering on the spines, resting on a polished wooden desk under soft, warm library lighting. The overall aesthetic is intellectual, traditional, and scholarly, with a subtle depth of field blurring the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDADGKG1H3HyjyLpyf1AZXZTwsslu10nX92c6juek9qBev8qorkL3s347Fla7PVDffuckx9F9eUpzBJQYHB8EuhQIn_AMARmwv3q__e6AdQ6F4CO27wSQzwhQlmGL9vaS4bj7DuH_B9PXgaUSOtqDW1D4TnkRmHeAnT-mobNrJ6Vfw35AVtqoC1gplpcDVlLkst7A5BP4-4m05bl_I_LEAZ0kxGy1ZuKDBWkbXhsLuHWsVBEyEGbdgh" />
</div>
</Link>
{/* Novels */}
<Link className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary-fixed/30 to-transparent z-10"></div>
<div className="absolute top-6 left-6 z-20">
<h3 className="font-editorial text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Novels</h3>
<p className="font-label-sm text-label-sm text-surface-tint mt-1 bg-white/80 px-2 py-1 rounded backdrop-blur-sm inline-block">5,120+ Books</p>
</div>
<div className="absolute bottom-[-10px] right-4 w-40 h-56 opacity-90 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
<img className="w-full h-full object-cover rounded-lg shadow-lg" data-alt="A slightly fanned out row of three colorful fiction novels standing upright. The covers feature minimalist, modern graphic illustrations. The books are positioned on a clean, bright white surface, illuminated by crisp, natural daylight, creating a light-mode, airy, and inviting contemporary aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gEyhuelCP3Rmiva_pn0AaWRGMqCBFT8zIhYJcghkd1oUcqe7Pq-CGN4PVcHMMna-FrDjbjPP6p8SkBs_B9YD04Mu-UkpVPBl-2twD9e5l8ytv68CYTNzO6qNEQtnkQN4uNoTvFrxiGz4GjcQEOGKw_AQ1IN6NcqeTHZGzTrUvfy2-STA3TaYIThhogN3fTpdq9iXxixlOJU3P2ELlbVYYXNXGqyD_GLagGW1v_L_3G5ex7w7Kcd0" />
</div>
</Link>
{/* Children */}
<Link className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">
<div className="absolute inset-0 bg-gradient-to-br from-[#dcfce7]/50 to-transparent z-10"></div>
<div className="absolute top-6 left-6 z-20">
<h3 className="font-editorial text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Children's</h3>
<p className="font-label-sm text-label-sm text-surface-tint mt-1 bg-white/80 px-2 py-1 rounded backdrop-blur-sm inline-block">1,890+ Books</p>
</div>
<div className="absolute bottom-[-30px] right-[-10px] w-56 h-40 opacity-90 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500">
<img className="w-full h-full object-cover rounded-lg shadow-md" data-alt="Several brightly colored, large-format children's picture books lying open and slightly overlapping on a soft, light-colored textured rug. The illustrations visible on the pages are whimsical and soft. The lighting is bright, cheerful, and even, perfectly suited for a vibrant, family-friendly light-mode design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj2kHRIyql4sQMpjXvX7NqpqjjdV0Enw09vpRx3YaWUHVgI5ftVxDjWjsc0qmtb95ACZ7NKrETz-6BNsaXvfER_eH-ftA53EUg2B-uGd_tf2ucFlqkqnIjgDR5ii1MxYkIu1WKT_rCvELh4jRt1-IEHqsLdEbkc0himk5scT3ux_Z6kYvn5Qjrk7Mi0ZJG2sDji9rlB-Nm4Yx43bw4ccrXV_MwxxZgFvZ4gSIf3ICZdniC-kuAO6TK" />
</div>
</Link>
</div>
</section>
{/* Featured Books (Horizontal Shelf) */}
<section className="py-16 bg-surface-muted relative overflow-hidden border-y border-surface-variant">
<div className="max-w-container-max-width mx-auto px-margin-desktop">
<div className="flex justify-between items-center mb-16">
<h2 className="font-editorial text-3xl font-bold text-on-surface flex items-center gap-3">
<span className="material-symbols-outlined text-golden text-3xl">workspace_premium</span>
                        Staff Picks
                    </h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
{/* Shelf Container */}
<div className="relative pb-8">
<div className="flex gap-8 overflow-x-auto pb-12 pt-8 px-4 snap-x hide-scrollbar" style={{scrollbarWidth: 'none'}}>
{/* Book Card 1 */}
<div className="flex-shrink-0 w-56 snap-center group book-card">
<div className="relative h-80 mb-6 cursor-pointer">
<div className="absolute top-2 right-2 z-30 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-danger-rose">
<span className="material-symbols-outlined text-sm">bookmark</span>
</div>
<div className="w-full h-full book-cover relative rounded-r-md rounded-l-sm overflow-hidden bg-white">
<div className="book-spine"></div>
<img className="w-full h-full object-cover" data-alt="A book cover design for 'The Midnight Library'. The cover is dark, mysterious, and features a glowing doorway leading into endless shelves of books. Deep blues and purples dominate the color palette, contrasting with the bright, magical light emanating from the center." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkpbe-v7AoO4qq69KchaCOXFnsZq9ldCdA8p1m6OWTiAGtSEH9tu8Z0BKB5l3VH_kR-rO_XJxtt3RHq_5q99qH4EA_w_RnsDBB7tEKpMIF3HU7ViOJQVaQfpqCz5WxS030tgOcyxSv1wHn3iV_7G57nJW9eBWE3_vQUEWRT6Wh73Idqz4lyqMFPxPQP22wP7jqiJo8kfmy7lQXESpVJ3kMo4GicDhqjY8XoKPkwcILZXoX5o5sfhwu" />
</div>
</div>
<div className="shelf-base w-[110%] -ml-[5%]"></div>
<div className="mt-4 text-center px-2">
<p className="font-label-sm text-label-sm text-surface-tint mb-1 uppercase tracking-wider">Fiction</p>
<h4 className="font-headline-md text-body-md font-bold text-on-surface mb-1 truncate">The Midnight Library</h4>
<p className="font-body-sm text-surface-tint mb-2">Matt Haig</p>
<div className="flex items-center justify-center gap-1 mb-3">
<span className="material-symbols-outlined text-warning-amber text-[14px] font-variation-settings-'FILL'-1">star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">4.8</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">$24.99</span>
<button className="bg-primary-container text-on-primary-container hover:bg-secondary hover:text-on-secondary px-3 py-1.5 rounded text-xs font-medium transition-colors" onClick={() => navigate('/shoppingcartyourbookcollection')}>Add to Cart</button>
</div>
</div>
</div>
{/* Book Card 2 */}
<div className="flex-shrink-0 w-56 snap-center group book-card">
<div className="relative h-80 mb-6 cursor-pointer">
<div className="absolute top-2 left-2 z-30 bg-danger-rose text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">NEW</div>
<div className="absolute top-2 right-2 z-30 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-danger-rose">
<span className="material-symbols-outlined text-sm">bookmark</span>
</div>
<div className="w-full h-full book-cover relative rounded-r-md rounded-l-sm overflow-hidden bg-white">
<div className="book-spine"></div>
<img className="w-full h-full object-cover" data-alt="A clean, minimalist book cover for 'Atomic Habits'. The background is a stark, bright white, featuring simple, bold, black and yellow typography. The design is highly modern, functional, and aligns perfectly with a clean, professional light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGsI66SEcp-slqOpXO33F2Jzsl6vXLRW_JsSLl-o31yMZC4EhRIM6GZn_7MyU4TM7tPKbBBtn5ZOm1H-NvElBbiGIUNAKo_mduU1OO8PnZe1wHGNk26WlyFobsT-LtiPVBJbSCBW9fubG9SdzaouLVcqT8dt51XouGipiw3PDXrxBQUhhLTQgRYu6j0n3PI9_mHI-Zd4K9Yw1e5A2XqROdAWwDSUFEysuWLqd9S1K2q-9kq36W3El" />
</div>
</div>
<div className="shelf-base w-[110%] -ml-[5%]"></div>
<div className="mt-4 text-center px-2">
<p className="font-label-sm text-label-sm text-surface-tint mb-1 uppercase tracking-wider">Self-Help</p>
<h4 className="font-headline-md text-body-md font-bold text-on-surface mb-1 truncate">Atomic Habits</h4>
<p className="font-body-sm text-surface-tint mb-2">James Clear</p>
<div className="flex items-center justify-center gap-1 mb-3">
<span className="material-symbols-outlined text-warning-amber text-[14px] font-variation-settings-'FILL'-1">star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">4.9</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">$19.50</span>
<button className="bg-primary-container text-on-primary-container hover:bg-secondary hover:text-on-secondary px-3 py-1.5 rounded text-xs font-medium transition-colors" onClick={() => navigate('/shoppingcartyourbookcollection')}>Add to Cart</button>
</div>
</div>
</div>
{/* Book Card 3 */}
<div className="flex-shrink-0 w-56 snap-center group book-card">
<div className="relative h-80 mb-6 cursor-pointer">
<div className="absolute top-2 right-2 z-30 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-danger-rose">
<span className="material-symbols-outlined text-sm">bookmark</span>
</div>
<div className="w-full h-full book-cover relative rounded-r-md rounded-l-sm overflow-hidden bg-white">
<div className="book-spine"></div>
<img className="w-full h-full object-cover" data-alt="A visually striking book cover for a modern novel. The design features a delicate, intricate botanical illustration intertwined with elegant, serif typography. The color palette consists of soft pastels against a creamy off-white background, creating a sophisticated and refined light-mode feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAveCKwlQiphuduAQDmzgCZ8HawpdA1xdg_Y0Vf2c7RzSoUtC578YNNG_QNDxRvLvqqTajb5O6a0DqqGG71y-CYBwtQaODK5qyjBVOwpCekoevZzYhJvwSkHpWVliBvtj3_US7L5203Ki-Ft78wajMKqTFvuvi4zawYI3uTpxd2_tSiI6dppV4B-z_IcCCw3hHu0pYL13lCxNhX_nlgDxuvz3yElt8XP8J56cA4Wb5B2Qk0u4YX3qlO" />
</div>
</div>
<div className="shelf-base w-[110%] -ml-[5%]"></div>
<div className="mt-4 text-center px-2">
<p className="font-label-sm text-label-sm text-surface-tint mb-1 uppercase tracking-wider">Literature</p>
<h4 className="font-headline-md text-body-md font-bold text-on-surface mb-1 truncate">The Secret History</h4>
<p className="font-body-sm text-surface-tint mb-2">Donna Tartt</p>
<div className="flex items-center justify-center gap-1 mb-3">
<span className="material-symbols-outlined text-warning-amber text-[14px] font-variation-settings-'FILL'-1">star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">4.7</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface text-surface-tint line-through text-xs mr-2">$30.00</span>
<span className="font-label-md text-label-md font-bold text-danger-rose">$22.00</span>
<button className="bg-primary-container text-on-primary-container hover:bg-secondary hover:text-on-secondary px-3 py-1.5 rounded text-xs font-medium transition-colors ml-auto" onClick={() => navigate('/shoppingcartyourbookcollection')}>Add to Cart</button>
</div>
</div>
</div>
</div>
{/* Ambient Shadow for Shelf */}
<div className="absolute bottom-6 left-0 w-full h-4 bg-black/5 blur-xl pointer-events-none"></div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary full-width bg-primary dark:bg-primary border-t border-outline/20 flat no shadows text-on-primary">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
{/* Brand Column */}
<div className="col-span-1 md:col-span-1">
<Link className="font-headline-md text-headline-md font-bold text-on-primary font-editorial block mb-4" to="/">BookNest</Link>
<p className="font-body-sm text-body-sm text-outline-variant mb-6 opacity-80 hover:opacity-100 transition-opacity">Books that find their way home. Your private library, curated with care.</p>
<div className="flex space-x-4">
{/* Social icons could go here */}
</div>
</div>
{/* Links Column */}
<div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
<div>
<h4 className="font-label-md text-label-md text-on-primary mb-4 font-bold tracking-wider">Store</h4>
<ul className="space-y-3 font-body-sm text-body-sm">
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">Shop All</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">New Arrivals</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">Best Sellers</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">Categories</Link></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-primary mb-4 font-bold tracking-wider">Support</h4>
<ul className="space-y-3 font-body-sm text-body-sm">
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/aboutusourstorybooknest">About Us</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/contactusbooknestsupport">Contact</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">Shipping Policy</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">Terms of Service</Link></li>
<li><Link className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 transition-opacity block" to="/shopbrowsebooks">Privacy Policy</Link></li>
</ul>
</div>
</div>
{/* Newsletter Column */}
<div className="col-span-1 md:col-span-1">
<h4 className="font-label-md text-label-md text-on-primary mb-4 font-bold tracking-wider">Stay Updated</h4>
<p className="font-body-sm text-body-sm text-outline-variant mb-4 opacity-80">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
<form className="flex flex-col gap-2">
<input className="bg-primary-container text-on-primary border border-outline/30 rounded px-4 py-2 font-body-sm text-body-sm focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed outline-none w-full" placeholder="Enter your email" type="email" />
<button className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold px-4 py-2 rounded hover:bg-secondary-fixed-dim transition-colors w-full text-center mt-1" type="button">Subscribe</button>
</form>
</div>
<div className="col-span-1 md:col-span-4 border-t border-outline/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-outline-variant font-label-sm text-label-sm">
<p>© 2024 BookNest Pakistan. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="material-symbols-outlined text-lg opacity-50 hover:opacity-100 cursor-pointer transition-opacity">payments</span>
<span className="material-symbols-outlined text-lg opacity-50 hover:opacity-100 cursor-pointer transition-opacity">credit_card</span>
</div>
</div>
</div>
</footer>
    </>
  );
}
