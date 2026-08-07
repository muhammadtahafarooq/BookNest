import React from 'react';
import './ProductDetailsTheMidnightLibrary.css';

export default function ProductDetailsTheMidnightLibrary() {
  return (
    <>
      {/* TopNavBar */}
<header className="bg-primary shadow-md sticky top-0 z-50 w-full transition-all duration-400">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
<div className="font-display-lg text-display-lg font-bold text-on-primary">BookNest</div>
<nav className="hidden md:flex space-x-8 items-center h-full">
<a className="h-full flex items-center text-outline-variant hover:text-on-primary transition-colors hover:bg-primary-container/50 px-4 font-label-md text-label-md scale-95 duration-200 ease-in-out" href="#">Shop</a>
<a className="h-full flex items-center text-outline-variant hover:text-on-primary transition-colors hover:bg-primary-container/50 px-4 font-label-md text-label-md scale-95 duration-200 ease-in-out" href="#">Categories</a>
<a className="h-full flex items-center text-outline-variant hover:text-on-primary transition-colors hover:bg-primary-container/50 px-4 font-label-md text-label-md scale-95 duration-200 ease-in-out" href="#">Best Sellers</a>
<a className="h-full flex items-center text-outline-variant hover:text-on-primary transition-colors hover:bg-primary-container/50 px-4 font-label-md text-label-md scale-95 duration-200 ease-in-out" href="#">New Arrivals</a>
</nav>
<div className="flex items-center space-x-6 text-on-primary">
<button className="hover:text-tertiary-fixed-dim transition-colors scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">favorite</span>
</button>
<button className="hover:text-tertiary-fixed-dim transition-colors scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">shopping_cart</span>
</button>
<button className="hover:text-tertiary-fixed-dim transition-colors scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
{/* Breadcrumb */}
<nav className="text-on-surface-variant font-label-sm text-label-sm mb-8 flex items-center space-x-2">
<a className="hover:text-on-background transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<a className="hover:text-on-background transition-colors" href="#">Fiction</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-background font-medium">The Midnight Library</span>
</nav>
{/* Product Hero Area */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16">
{/* Left: Gallery */}
<div className="lg:col-span-5 flex flex-col space-y-6">
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-variant p-8 flex items-center justify-center aspect-[3/4] relative overflow-hidden group cursor-crosshair">
<img className="w-2/3 h-auto object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A high-end, professionally lit 3D render of the book cover for 'The Midnight Library' by Matt Haig. The book has a sophisticated Midnight Ink binding and is placed on a minimal digital shelf. Soft, ambient lighting creates gentle shadows and a subtle perspective tilt, enhancing its premium, luxurious showroom feel against a clean, light grey background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8S56RgmxI5t8cGk0iw4Fb14rHTbj5Nceh84SicvU3K4vX2GmIEITIAsFVhp1u3-d8QsliRFFZDDsRhWJ1JYr6Pf4MrPi5pHWz71rsVdKRPUE9Nb_qymGZ4KMySasU3fQDD-Odhskocz3SR7R8pm6IIJNByQHHDIER9LJRi0Hq9MRimT8XlxOLByn93lITkSs99r1-F7tar8-vyCBaNGmnPx4ce8tefEfaH3Brn0kX_xp-Nk1VJcwa" />
</div>
<div className="grid grid-cols-4 gap-4">
<button className="bg-surface-container-lowest border-2 border-outline-variant rounded-lg p-2 aspect-[3/4] hover:border-secondary transition-colors">
<img className="w-full h-full object-contain" data-alt="Thumbnail 1 showing the front cover of The Midnight Library in a bright, modern setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHIzln26njSrI2RFWN1plW9kpVwvEIkQZdK_aiMBRKxl2sU2WRUoBpLRFc1Raez0UkJ1aOwOg0_BVyWk0kZCFz6mcKAttJBDC4P8_YzBkTcKkFFXaP2o_b4WVSViI4nc3aKIvuMtQslrEdKlTPfnfjKgwjcUKs2m07TJaoTtgCRerZo1_dzC-57XK-OnTy1kuwUFmah4CsWMxLzyadDeVoHaFiR0pQbyrOuKET5gtJxWxGsx0Ke6Aw" />
</button>
<button className="bg-surface-container-lowest border border-surface-variant rounded-lg p-2 aspect-[3/4] hover:border-secondary transition-colors opacity-70 hover:opacity-100">
<img className="w-full h-full object-contain" data-alt="Thumbnail 2 showing the spine of The Midnight Library book, dark blue with silver text." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFn2YTPucqug9EM4d6HRs0BTExpr2yZa5F3q11CXfo-sLYOzurZ92BtWA6eIPQ6E_92WU5T2TDwHWxsVXZCp5Q089XYJCdZFhROn1LZg11RZADWUAtCVckXEBffrU6FG19ffAFTc3BJ7jH_nj0j1qSZIY2jShFaCryzL8hrUrg9OUopgJ__oq3Z8so2UMIt2xHHGYI3FMUhJUnOCI_VKKzkojefpvmTEgUrI_9rAr0vcLVNfXME_a-" />
</button>
<button className="bg-surface-container-lowest border border-surface-variant rounded-lg p-2 aspect-[3/4] hover:border-secondary transition-colors opacity-70 hover:opacity-100">
<img className="w-full h-full object-contain" data-alt="Thumbnail 3 showing an open page spread of The Midnight Library, crisp white paper." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNya59uK65_xV5Wd9I6-lT017Fls63m_xSfkWEHY_Lugo9ifqdq88Xd5YeOuVXB5WnxFu3pzwYD0vk_8gySFkZLmwQx9sMTnZH00glTWKfhHpTUF1PyqMu_SmFAsJ3lDn9hr_OASkPn1JQu2BySHxaLmXZHkbdjJMg8ObQzqxDk4AYrUU8NPx6p7tWeUZGbBgw_UxqY8gN-BOh_bxflHogg3e_9T56ANZl7nY2iAzAOrMZG0Unhlm2" />
</button>
<button className="bg-surface-container-lowest border border-surface-variant rounded-lg p-2 aspect-[3/4] hover:border-secondary transition-colors opacity-70 hover:opacity-100">
<img className="w-full h-full object-contain" data-alt="Thumbnail 4 showing the back cover of The Midnight Library with publisher details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnq3F7ANkYtiLpVkEQp_qNG_BtZMYDnx2-RZdY6sjIH5hXEOzBXQTJX1uWIZURftmY57_Z7PN52vhMM1b2PyTtjFDnPw_kz61siXFLuC3RuflcLwFqbp39IVhNSJ2agkfh4By8pqHMeMlwwpTR5Y1PTCaOksN6yCZ-2jPFuysvmZOps5szcONK6tQD2owejoHiV-7Mk18aw3lz3CBZmUjL3OaUfpW0DylURr4OhNEJkhaB2IvZpZi9" />
</button>
</div>
</div>
{/* Right: Details */}
<div className="lg:col-span-7 flex flex-col justify-start pt-4">
<h1 className="font-display-lg text-display-lg text-on-background mb-2">The Midnight Library</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Matt Haig</p>
<div className="flex items-center space-x-6 mb-8 border-b border-surface-variant pb-6">
<div className="flex items-center space-x-1">
<div className="flex text-warning-amber">
<span className="material-symbols-outlined fill text-[18px]">star</span>
<span className="material-symbols-outlined fill text-[18px]">star</span>
<span className="material-symbols-outlined fill text-[18px]">star</span>
<span className="material-symbols-outlined fill text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star_half</span>
</div>
<span className="font-label-md text-label-md text-on-background ml-2">4.8</span>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary underline ml-1" href="#reviews">(500 reviews)</a>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Publisher: Canongate</span>
<div className="h-4 w-px bg-outline-variant"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">ISBN: 9781786892706</span>
</div>
<div className="mb-8">
<span className="font-headline-lg text-headline-lg text-tertiary-container">$24.99</span>
<div className="flex items-center mt-2 space-x-2 text-success-emerald font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span>In Stock &amp; Ready to Ship</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
<div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest h-12 w-32">
<button className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-on-background transition-colors">
<span className="material-symbols-outlined text-[20px]">remove</span>
</button>
<input aria-label="Quantity" className="w-full h-full text-center border-none bg-transparent font-label-md text-label-md focus:ring-0 p-0" type="text" defaultValue="1" />
<button className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-on-background transition-colors">
<span className="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
<button className="flex-grow h-12 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md rounded-lg shadow-sm hover:shadow-md hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center space-x-2">
<span className="material-symbols-outlined text-[20px]">shopping_bag</span>
<span>Add to Cart</span>
</button>
<button className="flex-grow h-12 border-2 border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center">
                        Buy Now
                    </button>
</div>
{/* Accordion Details */}
<div className="border-t border-surface-variant divide-y divide-surface-variant">
<details className="group py-4" open={true}>
<summary className="flex justify-between items-center cursor-pointer list-none font-headline-md text-headline-md text-on-background">
<span>Description</span>
<span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-4 pb-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?</p>
</div>
</details>
<details className="group py-4">
<summary className="flex justify-between items-center cursor-pointer list-none font-headline-md text-headline-md text-on-background">
<span>Specifications</span>
<span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-4 pb-2 font-body-md text-body-md text-on-surface-variant">
<ul className="space-y-2">
<li className="flex justify-between"><span className="font-medium">Format:</span> <span>Hardcover</span></li>
<li className="flex justify-between"><span className="font-medium">Pages:</span> <span>304</span></li>
<li className="flex justify-between"><span className="font-medium">Dimensions:</span> <span>153 x 234 x 30mm</span></li>
<li className="flex justify-between"><span className="font-medium">Weight:</span> <span>450g</span></li>
</ul>
</div>
</details>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-primary border-t border-outline/20 w-full">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary">
<div className="md:col-span-1 flex flex-col space-y-4">
<div className="font-headline-md text-headline-md font-bold text-on-primary">BookNest</div>
<p className="font-body-sm text-body-sm text-outline-variant">© 2024 BookNest Pakistan. All rights reserved.</p>
</div>
<div className="flex flex-col space-y-2 font-label-sm text-label-sm">
<a className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1 block" href="#">About Us</a>
<a className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1 block" href="#">Contact</a>
<a className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1 block" href="#">Shipping Policy</a>
</div>
<div className="flex flex-col space-y-2 font-label-sm text-label-sm">
<a className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1 block" href="#">Terms of Service</a>
<a className="text-outline-variant hover:text-on-primary transition-all opacity-80 hover:opacity-100 py-1 block" href="#">Privacy Policy</a>
</div>
</div>
</footer>
    </>
  );
}
