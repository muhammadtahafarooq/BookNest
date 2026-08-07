import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './YourOrdersBooknestHistory.css';

export default function YourOrdersBooknestHistory() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary text-on-primary font-body-md w-full sticky top-0 z-50 shadow-md">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
<div className="font-display-lg text-headline-md font-bold text-on-primary">BookNest</div>
<div className="hidden md:flex gap-8 items-center h-full">
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors flex items-center h-full px-2" to="/shopbrowsebooks">Shop</Link>
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors flex items-center h-full px-2" to="/shopbrowsebooks">Categories</Link>
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors flex items-center h-full px-2" to="/shopbrowsebooks">Best Sellers</Link>
<Link className="font-label-md text-label-md text-outline-variant hover:text-on-primary transition-colors flex items-center h-full px-2" to="/shopbrowsebooks">New Arrivals</Link>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-primary-container/50 transition-all duration-400 rounded-full scale-95 hover:scale-100 ease-in-out" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>favorite</span>
</button>
<button className="p-2 hover:bg-primary-container/50 transition-all duration-400 rounded-full scale-95 hover:scale-100 ease-in-out" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>shopping_cart</span>
</button>
<button className="p-2 hover:bg-primary-container/50 transition-all duration-400 rounded-full scale-95 hover:scale-100 ease-in-out" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 0'}}>account_circle</span>
</button>
</div>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-gutter">
{/* Header */}
{/* <Navbar /> */}
<Navbar />
{/* Orders List */}
<div className="space-y-6 md:space-y-8">
{/* Order Card 1 */}
<article className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/30 p-6 md:p-gutter flex flex-col md:flex-row gap-6 md:gap-gutter relative overflow-hidden group hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
{/* Order Meta Info */}
<div className="flex-shrink-0 w-full md:w-48 flex flex-col justify-between">
<div>
<div className="font-label-md text-label-md text-outline mb-1">ORDER ID</div>
<div className="font-headline-md text-headline-md text-on-surface mb-4">#BN-4829</div>
<div className="font-label-sm text-label-sm text-outline mb-1">DATE</div>
<div className="font-body-md text-body-md text-on-surface-variant mb-4">October 12, 2023</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-emerald/10 border border-success-emerald/20 w-max">
<div className="w-2 h-2 rounded-full bg-success-emerald"></div>
<span className="font-label-sm text-label-sm text-success-emerald">Delivered</span>
</div>
</div>
{/* Divider Mobile */}
<div className="w-full h-px bg-outline-variant/30 block md:hidden"></div>
{/* Divider Desktop */}
<div className="w-px h-auto bg-outline-variant/30 hidden md:block"></div>
{/* Book Thumbnails */}
<div className="flex-grow flex items-center justify-start md:justify-center gap-4 py-4 md:py-0 overflow-x-auto no-scrollbar">
<img alt="Book Cover 1" className="w-24 h-36 object-cover rounded book-perspective shrink-0" data-alt="A hardcover book with a dark, minimalist abstract cover featuring geometric shapes in shades of deep navy and brass. The lighting is soft and studio-like, emphasizing the premium texture of the dust jacket. Modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV40lKagpPujNbwHpQ_VlnLSG-vBZRF-t24ou6qLaAlqhHG9VoYcKfXYKZY0Z1VXS2Gj4RVrb3A2TTZchw2LPTeP2Sgwr8Wv4Nc5iTq6JjC-WzoHZjErZtXevDp9-6GI9KVCI8a7kEderTj4IBqwJyCrnfkMoYBOONh2GQ7gz9gGKsuFVS30JXI1lCioli-HrE3Vz-Zd0syy6fEXh53yAkhCijh1jxOF_MtHRsBRpoEdcmXJ8b9yh9" />
<img alt="Book Cover 2" className="w-24 h-36 object-cover rounded book-perspective shrink-0" data-alt="A trade paperback book featuring a stark white cover with a single, elegant sans-serif title in stark black ink. The cover has a matte finish, lit with a crisp, cool light typical of a modern art gallery setting. Minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd68yOjVsdDLbiYdMGesHdIhAUgo1IDRbIwpbosdp1IkC9XVRZxhkfz53nJ2EDqSQhOyTPa9AGftbWw9U-SE2CWYZ_UjJ2NeXnqxdV7IZPteXTiIuRl65zCzpHiiZTxNvEYkR0ICq-hAGwkcvM2jHTKt5n8y3v8OOgZ2Q81pipDQGS0y7EnCAUf4PVK3k9ediggCNWoq3646o4IAjeiPRwk8EzEMTh62YoyXwrXn3Fm8kR_7V89bH-" />
<img alt="Book Cover 3" className="w-24 h-36 object-cover rounded book-perspective shrink-0" data-alt="A vintage-inspired edition with a linen-textured cover in deep forest green, embossed with subtle gold foil accents. The book sits in soft, warm lighting that highlights the texture of the fabric. High-end, classic aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdVCSAxeUMIR_5d-46trXFC0z1MB7W_Wz2icrqJs748gbiddpf1F05qYGcc8GE6pJJTU7Uq7mhU2k-j1qxmZSicEPFB4IpsgI_LPoHfg-5J5GElrAMUdb7YumvA83-pfPQCc90h3U4ILJO2KysIlMWjcn_SThClGAeJmDowap9bc6dlV-8nPDyQU1-dDE8xkhNSFrPEl9xSTITlYNZuVHz6DE_DGa_haeJ-lUWRtM4LJ9EdB6eEi_N" />
</div>
{/* Divider Mobile */}
<div className="w-full h-px bg-outline-variant/30 block md:hidden"></div>
{/* Divider Desktop */}
<div className="w-px h-auto bg-outline-variant/30 hidden md:block"></div>
{/* Total & Action */}
<div className="flex-shrink-0 w-full md:w-48 flex flex-row md:flex-col justify-between items-center md:items-end">
<div className="text-left md:text-right">
<div className="font-label-sm text-label-sm text-outline mb-1">TOTAL AMOUNT</div>
<div className="font-headline-md text-headline-md text-[#C89B3C]">$84.50</div>
</div>
<button className="px-6 py-2 rounded-lg border-2 border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors duration-300 flex items-center gap-2">
                        View Details
                    </button>
</div>
</article>
{/* Order Card 2 */}
<article className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/30 p-6 md:p-gutter flex flex-col md:flex-row gap-6 md:gap-gutter relative overflow-hidden group hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
<div className="flex-shrink-0 w-full md:w-48 flex flex-col justify-between">
<div>
<div className="font-label-md text-label-md text-outline mb-1">ORDER ID</div>
<div className="font-headline-md text-headline-md text-on-surface mb-4">#BN-4710</div>
<div className="font-label-sm text-label-sm text-outline mb-1">DATE</div>
<div className="font-body-md text-body-md text-on-surface-variant mb-4">September 28, 2023</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-emerald/10 border border-success-emerald/20 w-max">
<div className="w-2 h-2 rounded-full bg-success-emerald"></div>
<span className="font-label-sm text-label-sm text-success-emerald">Delivered</span>
</div>
</div>
<div className="w-full h-px bg-outline-variant/30 block md:hidden"></div>
<div className="w-px h-auto bg-outline-variant/30 hidden md:block"></div>
<div className="flex-grow flex items-center justify-start md:justify-center gap-4 py-4 md:py-0 overflow-x-auto no-scrollbar">
<img alt="Book Cover 4" className="w-24 h-36 object-cover rounded book-perspective shrink-0" data-alt="A modern sci-fi novel with a striking cover featuring a metallic silver sphere on a pure black background. The typography is sleek and futuristic. The lighting creates a stark contrast, highlighting the metallic sheen. Premium, sleek design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVyo3WpR15bAdhKk4eba0PkbA57hyKTAdKOVPiyo8a4fkTzh6rn5-RaWhkzhdr4itXff14T3Pow0D2B833h--QUOURr32SQebwkv_TYnzDu-DOIK9eddWSwwlffrKdjqVO54-qFXhCPMXJ1qKqz9OR9T5RJExXhSQYY2ak8x1rKROK1C2GaeL6JL59-g5TAjnNlTy8U4sS0e5eiDSYM4Wvi3URL0ZW36Xrw9N80ol0rSNqessHPsgO" />
</div>
<div className="w-full h-px bg-outline-variant/30 block md:hidden"></div>
<div className="w-px h-auto bg-outline-variant/30 hidden md:block"></div>
<div className="flex-shrink-0 w-full md:w-48 flex flex-row md:flex-col justify-between items-center md:items-end">
<div className="text-left md:text-right">
<div className="font-label-sm text-label-sm text-outline mb-1">TOTAL AMOUNT</div>
<div className="font-headline-md text-headline-md text-[#C89B3C]">$22.99</div>
</div>
<button className="px-6 py-2 rounded-lg border-2 border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors duration-300 flex items-center gap-2">
                        View Details
                    </button>
</div>
</article>
</div>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
