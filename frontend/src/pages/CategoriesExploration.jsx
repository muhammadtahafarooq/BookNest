import React from 'react';
import './CategoriesExploration.css';

export default function CategoriesExploration() {
  return (
    <>
      {/* TopNavBar Component */}
<header className="bg-midnight-ink text-white sticky top-0 z-50 w-full shadow-md">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
{/* Logo */}
<a className="font-display-lg text-headline-md lg:text-headline-lg font-bold tracking-tight text-white flex items-center gap-2" href="#">
<span className="material-symbols-outlined icon-fill text-antique-brass text-3xl">auto_stories</span>
                BookNest
            </a>
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center gap-8">
<a className="font-label-md text-label-md text-outline-variant hover:text-white transition-colors" href="#">Shop</a>
<a className="font-label-md text-label-md text-white border-b-2 border-antique-brass pb-1" href="#">Categories</a>
<a className="font-label-md text-label-md text-outline-variant hover:text-white transition-colors" href="#">Best Sellers</a>
<a className="font-label-md text-label-md text-outline-variant hover:text-white transition-colors" href="#">New Arrivals</a>
</nav>
{/* Actions */}
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-white/10 rounded-full px-4 py-2 focus-within:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-outline-variant mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-outline-variant w-48" placeholder="Search books, authors..." type="text" />
</div>
<button className="md:hidden text-white hover:text-antique-brass transition-colors p-2">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="text-white hover:text-antique-brass transition-colors p-2 relative group">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
</button>
<button className="text-white hover:text-antique-brass transition-colors p-2 relative group">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-antique-brass rounded-full"></span>
</button>
<button className="text-white hover:text-antique-brass transition-colors p-2">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-grow">
{/* Page Header */}
<section className="bg-paper-mist py-16 md:py-24 relative overflow-hidden">
{/* Decorative Elements */}
<div className="absolute top-0 right-0 w-64 h-64 bg-antique-brass/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-midnight-ink/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
<div className="max-w-container-max-width mx-auto px-margin-desktop relative z-10 text-center">
{/* Breadcrumbs */}
<nav className="flex justify-center items-center gap-2 font-label-sm text-label-sm text-surface-tint mb-8 opacity-0 animate-fade-in-up">
<a className="hover:text-midnight-ink transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-midnight-ink font-medium">Categories</span>
</nav>
<h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-midnight-ink mb-6 opacity-0 animate-fade-in-up delay-100">
                    Explore Collections
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
                    Discover books organized around learning, imagination, and personal growth. Find your next great read curated by our experts.
                </p>
</div>
</section>
{/* Category Shelf Grid */}
<section className="py-24 max-w-container-max-width mx-auto px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Category Card 1 */}
<div className="group bg-white rounded-brand border border-surface-variant shadow-[0_4px_24px_rgba(16,42,67,0.04)] overflow-hidden hover:shadow-[0_12px_40px_rgba(16,42,67,0.08)] transition-all duration-400 opacity-0 animate-fade-in-up delay-100 flex flex-col h-full">
<div className="h-48 bg-surface-muted relative flex items-end justify-center pb-8 overflow-hidden">
{/* Background abstract */}
<div className="absolute inset-0 bg-gradient-to-br from-paper-mist to-surface-muted opacity-50"></div>
{/* Shelf base */}
<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-[#e5dfd3] to-[#d4ccbd] shadow-inner"></div>
{/* 3D Floating Books Simulation */}
<div className="relative z-10 flex items-end gap-[-10px] perspective-[1000px] book-float">
<div className="w-20 h-28 bg-midnight-ink rounded-r-sm shadow-xl transform rotate-y-[-15deg] translate-z-10 relative book-cover flex items-center justify-center">
<div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay" data-alt="A highly detailed close-up of a minimalist academic textbook cover, deep midnight blue background with subtle gold geometric patterns. Soft, natural light mode studio lighting highlighting the texture of the thick paper stock. Clean, modern, sophisticated aesthetic." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBHbl1AeivCMzU7Ho3vsm66THKPcNih07pHC1PRptyI1r-Fl_ZkzebCMfDDm6q1LaVKSe4ItqkSl_KW1CRDtZgQ6WgWj2PRckZyi-TPEvKnNcbL88M3fjGcTkrVWT9qsjZrKYP2eHW9B562hb7qGtciTa9MLW7W8HOCA4UvwgmV9-yQiYhjcWNBaSZiTrvHGCRA-Lpd1Jn_JpdDDme6xmUU5ylyMjRQF6_Hw5FjVWRksbPgSbVACmHL\')'}}></div>
<span className="text-white text-xs font-serif writing-vertical transform rotate-180 opacity-50">Academic</span>
</div>
<div className="w-24 h-32 bg-antique-brass rounded-r-sm shadow-2xl transform translate-z-20 -ml-4 z-20 relative book-cover flex items-center justify-center">
<div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay" data-alt="A highly detailed book cover featuring abstract golden brass fluid art against an off-white background. Professional studio lighting creating a premium, high-end light mode aesthetic. Clean typography layout hint, soft elegant shadows." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDBW1gkww1it7IxR1wIXFetJU8QVodjfJZXlhwaasyPQNEAcAK75mGtL0JzGYxm1EyZieycyj1m5mSxZOl9fo4Zyhs0yttTEKqgwZOBN8UJgcw2qkACpvYns8lh-M6crP3-WIlc2yvqvomF8zJKoEjuM2dwWaIBwnAr-olRRy4y90_kJkpNYrhcs4-yzhYDw4GKo6qW0jZDuqZAvt4fZcrch_DulHb9ejSTFgFTV_pUqcs202brZ2-U\')'}}></div>
</div>
</div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between bg-white z-20 relative">
<div>
<h3 className="font-headline-md text-headline-md text-midnight-ink mb-2">Academic Books</h3>
<p className="font-body-sm text-body-sm text-surface-tint">1,240 Titles</p>
</div>
<a className="mt-6 inline-flex items-center justify-between w-full font-label-md text-label-md text-midnight-ink border border-outline-variant rounded-full px-6 py-3 group-hover:border-midnight-ink group-hover:bg-midnight-ink group-hover:text-white transition-all duration-300" href="#">
                            Explore
                            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/* Category Card 2 */}
<div className="group bg-white rounded-brand border border-surface-variant shadow-[0_4px_24px_rgba(16,42,67,0.04)] overflow-hidden hover:shadow-[0_12px_40px_rgba(16,42,67,0.08)] transition-all duration-400 opacity-0 animate-fade-in-up delay-200 flex flex-col h-full">
<div className="h-48 bg-surface-muted relative flex items-end justify-center pb-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-paper-mist to-surface-muted opacity-50"></div>
<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-[#e5dfd3] to-[#d4ccbd] shadow-inner"></div>
<div className="relative z-10 flex items-end gap-[-10px] perspective-[1000px] book-float">
<div className="w-22 h-30 bg-[#2C3E50] rounded-r-sm shadow-xl transform rotate-y-[-10deg] translate-z-10 relative book-cover">
<div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" data-alt="A detailed digital rendering of a classic fiction novel cover, dark slate grey with elegant silver foil stamping indicating a title. Soft, ambient light mode gallery lighting. Sophisticated, minimalist literary design." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDnLF1CpTS4Y33JPrCylJfOb43R8vHoj1k7SLpHP9wIUPVO9SNcEWGLXYPYIpL7ygVm4BSoZDsPJ-I9MTZa-qE9dJoPDeEBIV2ygmun1k_LP6Of2JreOHbCD_T3GHMM4aiUR85vPMZVZA7EkEYY9EnSYIWsmI6npwqPqxhPX_eH_BQEmafb1lPj_xf58-GigapXUXm2OHTy8GCGWau_IHIHeT0KGo1zqNkJ04RR8tF5gu0EoBvVvl7i\')'}}></div>
</div>
<div className="w-20 h-28 bg-[#8E44AD] rounded-r-sm shadow-2xl transform rotate-y-[5deg] translate-z-20 -ml-2 z-20 relative book-cover">
<div className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay" data-alt="A modern romance novel cover featuring a soft watercolor wash in purple and blush pink hues. Professional product photography lighting, crisp edges, light mode aesthetic, evoking emotion and elegance." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuApXgHlgHxMuhWgJf91nzXNdBAei7wJJ80SuKCuRPjNBeNqSAYqltvVweixyp7chlVQ1ymLInTjMbo9u2aiiGtHrnZqImoCZZv4I4eWmN7n9Rpy9nqontYBPOWtzDaZImekJcHTgDlBDh0VNULGBguzl7y0M6LktcKQqTGiskR9Iq271DAFH2GK6sxmmLv35MT9ZjOgeZxEE1wU690LQV1hcM8XCp1n5MlZAMv-kYx8L0Tmw5kPbFz6\')'}}></div>
</div>
</div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between bg-white z-20 relative">
<div>
<h3 className="font-headline-md text-headline-md text-midnight-ink mb-2">Novels</h3>
<p className="font-body-sm text-body-sm text-surface-tint">3,500+ Titles</p>
</div>
<a className="mt-6 inline-flex items-center justify-between w-full font-label-md text-label-md text-midnight-ink border border-outline-variant rounded-full px-6 py-3 group-hover:border-midnight-ink group-hover:bg-midnight-ink group-hover:text-white transition-all duration-300" href="#">
                            Explore
                            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/* Category Card 3 */}
<div className="group bg-white rounded-brand border border-surface-variant shadow-[0_4px_24px_rgba(16,42,67,0.04)] overflow-hidden hover:shadow-[0_12px_40px_rgba(16,42,67,0.08)] transition-all duration-400 opacity-0 animate-fade-in-up delay-300 flex flex-col h-full">
<div className="h-48 bg-surface-muted relative flex items-end justify-center pb-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-paper-mist to-surface-muted opacity-50"></div>
<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-[#e5dfd3] to-[#d4ccbd] shadow-inner"></div>
<div className="relative z-10 flex items-end gap-[-5px] perspective-[1000px] book-float">
<div className="w-18 h-24 bg-[#E74C3C] rounded-r-sm shadow-xl transform rotate-y-[-20deg] translate-z-10 relative book-cover">
<div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay" data-alt="A vibrant children's book cover illustration featuring playful geometric animals in bright red and yellow. Clean white background, high key studio lighting, cheerful and premium light mode aesthetic." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBrXqfJGQcnBf3L7-FHp6ohqBoewlFkQnnjUT4JgyNucU1GDah5vAuXnPRvgxkCSwrcDWguQfdWNqlyjQg2Rh74LaAEN8h2csvn-7aUSRz7OW7esd_WGnYNan0f3OjeJAAr-5MAxWdNVoZfk7bGiwt61HswRiL6lH0QKvdV_5HPwwPgZD9xau760kwkwpmfY9g8vLrDn9X9ncXMss-Rr4P7g9hDVQNrHeYxxDj65xJ7_q9ta_GiEQDl\')'}}></div>
</div>
<div className="w-24 h-24 bg-[#F1C40F] rounded-r-sm shadow-xl transform translate-z-20 -ml-2 z-20 relative book-cover">
<div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay" data-alt="A square format picture book cover with a bright yellow background and simple, modern graphic illustrations. Professional rendering, soft shadows, light mode, conveying joy and imagination." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuALzkPLdUYRVHQqSbR3FBs4GdMrvat13BCKfbKaBnn10PcjTBLBMFNz63QVPAGRY4ZPTC-MEM5-B-6Jk68TJ67CyQBUsiiu4S3n9SAJ1dHMe1wOa6nDWLCTdn8iJrxKtN6kuVGb5eWSfkWb-gP1whYRpiWFvB18VhGRDEmvIFbOx79boqWeiitGTS1U82_zZAYg2LFPYb5VjmRL2V-FI31YJax_E3QoqMRCEpl0T7hOKF4PQZFYCT9H\')'}}></div>
</div>
<div className="w-16 h-28 bg-[#3498DB] rounded-r-sm shadow-xl transform rotate-y-[15deg] translate-z-15 -ml-2 z-10 relative book-cover">
<div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay" data-alt="A tall, slim children's chapter book cover in cerulean blue with minimalist star motifs. Clean, well-lit studio shot, light mode aesthetic, premium print quality feel." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ra1x6FJMy8XhXMyDCv13Mlo5ONBH9_SjWvrTcnIceJUvugHIUTAiIAahhpzmtXknz8tH-9dZE3KaBEHCpHkd4tq8GKjXf3VhljnNc60jnTCDoum9wTi36sUInu0OaXfshshLDqTIN7I0WouBGgls-jd99h7EZX4dInc87ysZMzyAfLREg9XCV97-x9O7Rej7PTf3ihGjq5uDeEEPP255c-RJA3Uy31vJs_8ndRAzc5InIz3RW8iT\')'}}></div>
</div>
</div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between bg-white z-20 relative">
<div>
<h3 className="font-headline-md text-headline-md text-midnight-ink mb-2">Children's Books</h3>
<p className="font-body-sm text-body-sm text-surface-tint">850 Titles</p>
</div>
<a className="mt-6 inline-flex items-center justify-between w-full font-label-md text-label-md text-midnight-ink border border-outline-variant rounded-full px-6 py-3 group-hover:border-midnight-ink group-hover:bg-midnight-ink group-hover:text-white transition-all duration-300" href="#">
                            Explore
                            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
</main>
{/* Footer Component */}
<footer className="bg-midnight-ink text-white border-t border-white/10">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-1">
<a className="font-display-lg text-headline-md font-bold tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<span className="material-symbols-outlined icon-fill text-antique-brass text-2xl">auto_stories</span>
                    BookNest
                </a>
<p className="font-body-sm text-body-sm text-surface-tint mb-6 max-w-xs">
                    Your premium digital library. Curated collections for the lifelong learner and avid reader.
                </p>
<p className="font-body-sm text-body-sm text-surface-tint">
                    © 2024 BookNest. All rights reserved.
                </p>
</div>
<div className="col-span-1">
<h4 className="font-label-md text-label-md text-white font-bold mb-4">Explore</h4>
<ul className="space-y-3">
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">Shop All</a></li>
<li><a className="font-body-sm text-body-sm text-antique-brass font-medium" href="#">Categories</a></li>
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">Best Sellers</a></li>
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">New Arrivals</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-label-md text-label-md text-white font-bold mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">About Us</a></li>
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">Contact</a></li>
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">Shipping Policy</a></li>
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">Terms of Service</a></li>
<li><a className="font-body-sm text-body-sm text-outline-variant hover:text-antique-brass transition-all duration-200" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-label-md text-label-md text-white font-bold mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-outline-variant hover:bg-antique-brass hover:text-midnight-ink transition-all duration-300" href="#">
<span className="material-symbols-outlined text-lg">mail</span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-outline-variant hover:bg-antique-brass hover:text-midnight-ink transition-all duration-300" href="#">
<span className="material-symbols-outlined text-lg">share</span>
</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
