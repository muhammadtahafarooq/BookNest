import React from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './MyReadingShelfBooknestWishlist.css';

export default function MyReadingShelfBooknestWishlist() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary text-on-primary font-headline-md shadow-sm sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max-width mx-auto h-16">
{/* Brand */}
<div className="text-headline-md font-bold">
                BookNest
            </div>
{/* Center Nav Links */}
<div className="hidden md:flex space-x-8 font-body-md font-medium text-sm">
<Link className="text-on-primary/70 hover:text-secondary transition-colors duration-400" to="/">Home</Link>
<Link className="text-on-primary/70 hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Shop</Link>
<Link className="text-on-primary/70 hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Categories</Link>
<Link className="text-on-primary/70 hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Blog</Link>
<Link className="text-on-primary/70 hover:text-secondary transition-colors duration-400" to="/aboutusourstorybooknest">About</Link>
</div>
{/* Actions */}
<div className="flex items-center space-x-6">
{/* Search */}
<div className="hidden md:flex relative">
<input className="bg-primary-container text-on-primary border border-on-primary/20 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all w-48 placeholder-on-primary/50 font-body-sm" placeholder="Search..." type="text" />
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-primary/70 text-sm">search</span>
</div>
{/* Icons */}
<div className="flex space-x-4">
<button aria-label="Wishlist" className="text-secondary border-b-2 border-secondary pb-1 relative" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined">favorite</span>
<span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
</button>
<button aria-label="Cart" className="text-on-primary/70 hover:text-secondary transition-colors duration-400" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined">shopping_cart</span>
</button>
<button aria-label="Account" className="text-on-primary/70 hover:text-secondary transition-colors duration-400" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-desktop py-12 md:py-20">
{/* Header */}
<header className="text-center mb-16 md:mb-24">
<h1 className="font-display-lg text-primary mb-4">My Reading Shelf</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Your saved books waiting for their next chapter.</p>
</header>
{/* Shelf Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
{/* Book Item 1 */}
<article className="book-card group relative flex flex-col items-center">
{/* Bookmark Indicator */}
<div className="absolute -top-4 right-8 z-20 text-secondary drop-shadow-md">
<span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: '\'FILL\' 1'}}>bookmark</span>
</div>
{/* 3D Book Cover */}
<div className="relative w-48 h-72 mb-8 cursor-pointer z-10">
<div className="book-cover w-full h-full shadow-book-shelf rounded-r-md overflow-hidden relative">
<div className="book-spine"></div>
<img className="w-full h-full object-cover rounded-r-md" data-alt="A detailed digital rendering of a hardcover book titled 'The Midnight Library' with a deep blue night sky cover, standing vertically on a wooden surface under warm spotlighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnpMtCFXfFEcKmOQwvWE_Ku2cMjgOpnaxhElZNvRdbuCS7ifh0v6bT8Ke_jV5Ru0dt88SBhxoLaU9CjmCdb0HdUkRoam7lBk-M-V2LUcCeLAni1xnsKp61LgXiZFoJRZdkW-uRJUlbzV7RHIIdP8AzjdFK98l2zEbjhD7NOIl7UuxmOJebHZsGEqt0ela_Pp0K3ipr-4m5qIaHTq4jUrEe7SelVymB-weihd-_UyFEULFOEGKznHVp" />
<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
</div>
</div>
{/* Shelf Base Graphic */}
<div className="absolute top-[280px] w-full h-4 shelf-base rounded-sm -z-10"></div>
{/* Book Details */}
<div className="text-center w-full px-4 mt-6">
<h2 className="font-headline-md text-xl text-primary mb-1 line-clamp-1">The Midnight Library</h2>
<p className="font-body-sm text-on-surface-variant mb-3">Matt Haig</p>
<div className="flex justify-center items-center space-x-3 mb-6">
<span className="font-body-md font-bold text-secondary">$24.99</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-success-emerald">In Stock</span>
</div>
{/* Actions */}
<div className="flex flex-col space-y-3 w-full">
<button className="bg-secondary text-white font-body-sm font-medium py-2.5 px-6 rounded hover:bg-secondary/90 transition-colors w-full shadow-sm">
                            Move to Cart
                        </button>
<button className="font-body-sm text-on-surface-variant hover:text-danger-rose transition-colors flex items-center justify-center space-x-1">
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Remove</span>
</button>
</div>
</div>
</article>
{/* Book Item 2 */}
<article className="book-card group relative flex flex-col items-center">
<div className="absolute -top-4 right-8 z-20 text-secondary drop-shadow-md">
<span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: '\'FILL\' 1'}}>bookmark</span>
</div>
<div className="relative w-48 h-72 mb-8 cursor-pointer z-10">
<div className="book-cover w-full h-full shadow-book-shelf rounded-r-md overflow-hidden relative">
<div className="book-spine"></div>
<img className="w-full h-full object-cover rounded-r-md" data-alt="A detailed digital rendering of a hardcover book titled 'Sapiens: A Brief History of Humankind' with a minimalist white and orange cover, standing vertically on a dark marble surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYCK_5qTa_WII6Z3lAk33o4t1YE9lN2VoFZdkHLH6CPeQSCDsKhDIiHFDjZ0OCK98gbn2gJzi1KGwgViSePqV74iRqdYi9jWz5E5XfQ0olhQ4xhacJn9igigKpl10HIdy3vKbrZ5DhfcgB29piwtZIjKKNOL2GKowW7ciojMy3iu9omP3y4OCE4pVsoARoh5jbs7b2jvfsZqUIohQacXhnKh_r1XApLqQyZ_dHLw5L16Kux9nU3pex" />
<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
</div>
</div>
<div className="absolute top-[280px] w-full h-4 shelf-base rounded-sm -z-10"></div>
<div className="text-center w-full px-4 mt-6">
<h2 className="font-headline-md text-xl text-primary mb-1 line-clamp-1">Sapiens</h2>
<p className="font-body-sm text-on-surface-variant mb-3">Yuval Noah Harari</p>
<div className="flex justify-center items-center space-x-3 mb-6">
<span className="font-body-md font-bold text-secondary">$22.00</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-success-emerald">In Stock</span>
</div>
<div className="flex flex-col space-y-3 w-full">
<button className="bg-secondary text-white font-body-sm font-medium py-2.5 px-6 rounded hover:bg-secondary/90 transition-colors w-full shadow-sm">
                            Move to Cart
                        </button>
<button className="font-body-sm text-on-surface-variant hover:text-danger-rose transition-colors flex items-center justify-center space-x-1">
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Remove</span>
</button>
</div>
</div>
</article>
{/* Book Item 3 */}
<article className="book-card group relative flex flex-col items-center">
<div className="absolute -top-4 right-8 z-20 text-secondary drop-shadow-md">
<span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: '\'FILL\' 1'}}>bookmark</span>
</div>
<div className="relative w-48 h-72 mb-8 cursor-pointer z-10">
<div className="book-cover w-full h-full shadow-book-shelf rounded-r-md overflow-hidden relative">
<div className="book-spine"></div>
<img className="w-full h-full object-cover rounded-r-md" data-alt="A detailed digital rendering of a hardcover book titled 'Atomic Habits' with a stark yellow and black minimalist cover design, standing vertically under soft, diffuse lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsE0tTTX2SkNXprgref5oyE6ClKtC5t5DWCZlAzE9FxB2rykUTOTYZP7AlXp7T2FohVrfOYmIKQJrJjCrM4uexvreUt7n95ZfiCK0jgU9Tgb1-tWcBv6tNdpn9J3LTIUY1Y89UVTupzs4-KwGlkBbzlVtLbYqL3c8Kz0iI2S3llB6c8USm1LPeREhfd8YAyA95_nmSA0HdK3PChoZCE4yjWB44HhJUDeNUwyO7ib8DovQZre8YqhiN" />
<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
</div>
</div>
<div className="absolute top-[280px] w-full h-4 shelf-base rounded-sm -z-10"></div>
<div className="text-center w-full px-4 mt-6">
<h2 className="font-headline-md text-xl text-primary mb-1 line-clamp-1">Atomic Habits</h2>
<p className="font-body-sm text-on-surface-variant mb-3">James Clear</p>
<div className="flex justify-center items-center space-x-3 mb-6">
<span className="font-body-md font-bold text-secondary">$18.50</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-warning-amber">Low Stock</span>
</div>
<div className="flex flex-col space-y-3 w-full">
<button className="bg-secondary text-white font-body-sm font-medium py-2.5 px-6 rounded hover:bg-secondary/90 transition-colors w-full shadow-sm">
                            Move to Cart
                        </button>
<button className="font-body-sm text-on-surface-variant hover:text-danger-rose transition-colors flex items-center justify-center space-x-1">
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Remove</span>
</button>
</div>
</div>
</article>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest text-on-primary-container font-body-sm">
<div className="w-full py-12 px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter opacity-80 hover:opacity-100 transition-opacity">
{/* Brand Column */}
<div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
<span className="font-headline-md font-bold text-on-primary-fixed">BookNest</span>
<p className="text-on-primary-container max-w-xs">The Private Library Experience. Curating exceptional literary journeys for the modern reader.</p>
<div className="flex space-x-4 mt-2">
<Link className="hover:text-secondary transition-colors" to="/shopbrowsebooks"><span className="material-symbols-outlined">public</span></Link>
<Link className="hover:text-secondary transition-colors" to="/shopbrowsebooks"><span className="material-symbols-outlined">mail</span></Link>
</div>
</div>
{/* Links Column 1 */}
<div className="flex flex-col space-y-3">
<h4 className="font-bold text-on-primary-fixed mb-2">Collections</h4>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/browsecollections">Curated Collections</Link>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Editorial Picks</Link>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Rare Finds</Link>
</div>
{/* Links Column 2 */}
<div className="flex flex-col space-y-3">
<h4 className="font-bold text-on-primary-fixed mb-2">Support</h4>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Shipping</Link>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/contactusbooknestsupport">Contact</Link>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/faqbooknestsupport">FAQ</Link>
</div>
{/* Links Column 3 */}
<div className="flex flex-col space-y-3">
<h4 className="font-bold text-on-primary-fixed mb-2">Company</h4>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/aboutusourstorybooknest">Our Story</Link>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Careers</Link>
<Link className="text-on-primary-container hover:text-secondary transition-colors duration-400" to="/shopbrowsebooks">Terms of Service</Link>
</div>
</div>
<div className="w-full border-t border-on-primary-container/20 py-6 px-margin-desktop text-center">
<p>© 2024 BookNest. The Private Library Experience.</p>
</div>
</footer>
    </>
  );
}
