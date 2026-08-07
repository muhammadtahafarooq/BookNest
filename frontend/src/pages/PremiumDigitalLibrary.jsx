import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './PremiumDigitalLibrary.css';

export default function PremiumDigitalLibrary() {
  
  useEffect(() => {
    // Micro-interaction for scroll reveals (simplified vanilla JS)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
                observer.observe(el);
            });
        });
      const navigate = useNavigate();
  return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar Component */}
<nav className="bg-[#171A1C] text-on-primary font-headline-md text-headline-md font-body-md text-body-md font-label-md text-label-md full-width top-0 border-b border-[#313030] shadow-sm sticky z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
{/* Brand Logo */}
<Link className="font-headline-sm text-headline-sm font-bold text-on-primary tracking-tight" to="/">
                BookNest
            </Link>
{/* Desktop Navigation Links (Hidden on Mobile) */}
<div className="hidden md:flex items-center space-x-8">
{/* Active: Home */}
<Link className="text-on-primary border-b-2 border-[#A67C42] pb-1 hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out font-label-md text-label-md" to="/">Home</Link>
{/* Inactive Links */}
<Link className="text-on-primary-fixed-variant hover:text-on-primary pb-1 hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out font-label-md text-label-md" to="/shopbrowsebooks">Shop</Link>
<Link className="text-on-primary-fixed-variant hover:text-on-primary pb-1 hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out font-label-md text-label-md" to="/shopbrowsebooks">Categories</Link>
<Link className="text-on-primary-fixed-variant hover:text-on-primary pb-1 hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out font-label-md text-label-md" to="/shopbrowsebooks">Blog</Link>
<Link className="text-on-primary-fixed-variant hover:text-on-primary pb-1 hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out font-label-md text-label-md" to="/aboutusourstorybooknest">About</Link>
</div>
{/* Trailing Icon Actions & Search */}
<div className="flex items-center space-x-6">
{/* Search Bar (Library Catalog Style) */}
<div className="hidden lg:flex relative items-center">
<input className="bg-transparent border-b border-on-primary-fixed-variant text-on-primary placeholder-on-primary-fixed-variant focus:outline-none focus:border-[#A67C42] py-1 px-2 w-64 font-body-md text-body-md transition-colors" placeholder="Search the archive..." type="text" />
<span className="material-symbols-outlined absolute right-2 text-on-primary-fixed-variant cursor-pointer hover:text-on-primary transition-colors text-sm">search</span>
</div>
<button className="text-on-primary hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
<button className="text-on-primary hover:opacity-80 transition-opacity duration-300 transform scale-95 duration-200 ease-in-out hidden md:block" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">person</span>
</button>
{/* Mobile Menu Toggle */}
<button className="md:hidden text-on-primary hover:opacity-80 transition-opacity duration-300">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</nav>
{/* MAIN CANVAS */}
<main className="w-full">
{/* Hero Section */}
<section className="relative w-full min-h-[85vh] bg-[#171A1C] text-on-primary flex items-center overflow-hidden">
{/* Background Shader Animation */}
{/* STITCH_SHADER_START:ANIMATION_1 class="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none" */}
<div className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none" style={{display: 'block'}}>
<canvas id="shader-canvas-ANIMATION_1" style={{display: 'block', width: '100%', height: '100%'}}></canvas>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_SHADER_END:ANIMATION_1 */}
<div className="relative z-10 w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-xxl">
{/* Left: Editorial Content */}
<div className="md:col-span-6 space-y-8 flex flex-col justify-center">
<h1 className="font-display-lg text-display-lg text-on-primary">
                        Discover Books Worth Keeping.
                    </h1>
<p className="font-body-lg text-body-lg text-inverse-on-surface max-w-lg opacity-90">
                        Curating the finest selection of academic texts, profound novels, children's classics, and authoritative Islamic literature for the discerning collector.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-[#A67C42] text-[#171A1C] px-8 py-4 font-label-md text-label-md rounded-sm hover:bg-opacity-90 transition-all shadow-md transform hover:-translate-y-1" onClick={() => navigate('/shopbrowsebooks')}>
                            Shop Books
                        </button>
<button className="border border-outline-variant text-on-primary px-8 py-4 font-label-md text-label-md rounded-sm hover:bg-surface-variant hover:text-primary transition-all" onClick={() => navigate('/categoriesexploration')}>
                            Explore Categories
                        </button>
</div>
{/* Trust Indicators */}
<div className="flex items-center space-x-6 pt-8 border-t border-[#313030] mt-8">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[#A67C42] text-xl">auto_awesome</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-wider">Premium Archive</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[#A67C42] text-xl">verified</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-wider">Curated Editions</span>
</div>
</div>
</div>
{/* Right: 3D Scene */}
<div className="md:col-span-6 h-[500px] w-full relative flex items-center justify-center mt-12 md:mt-0 perspective-1000">
{/* STITCH_THREEJS_START:ANIMATION_2 class="absolute inset-0 w-full h-full object-contain pointer-events-none animate-float" */}
<div className="absolute inset-0 w-full h-full object-contain pointer-events-none animate-float" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_2" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_2 */}
</div>
</div>
</section>
</main>
{/* Footer Component */}
<Footer />
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
