import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './BrowseCollections.css';

export default function BrowseCollections() {
  
  useEffect(() => {
    // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-fade-in-up').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
      const navigate = useNavigate();
  return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar */}
{/* <Navbar /> */}
<Navbar />
<main className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pb-xxl">
{/* Header */}
<section className="py-xl md:py-xxl max-w-3xl animate-fade-in-up">
<h1 className="font-display-lg text-display-lg text-primary mb-lg">Browse By Collection</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Explore our meticulously curated digital archive. From foundational academic texts to timeless novels, discover reading worlds tailored for the discerning collector.</p>
</section>
{/* Featured Category Grid (Bento style) */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-xxl">
{/* Novels (Large) */}
<Link className="category-card md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] flex flex-col md:flex-row relative group animate-fade-in-up" to="/browsecollections" style={{animationDelay: '0.1s'}}>
<div className="p-lg md:p-xl flex flex-col justify-center w-full md:w-1/2 z-10 bg-surface-container-lowest md:bg-transparent">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-sm">Fiction &amp; Literature</span>
<h2 className="font-headline-md text-headline-md text-primary mb-md">Novels</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">A vast collection of classic literature, contemporary fiction, and timeless tales.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-label-md text-on-surface-variant">3,200+ Titles</span>
<span className="font-label-md text-label-md text-primary flex items-center gap-xs">Explore Collection <span className="material-symbols-outlined text-[18px]">arrow_forward</span></span>
</div>
</div>
<div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-surface-variant">
<img className="shelf-image w-full h-full object-cover absolute inset-0" data-alt="A beautifully organized, high-end dark wood bookshelf filled with classic leather-bound novels and modern hardcover fiction books. Warm ambient library lighting highlights the gold foil spines and textured covers. A sophisticated, scholarly atmosphere in a private collector's study, using a luxurious color palette of deep browns, rich greens, and cream paper edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvfTim02DIdsD_Ok14Jkds1rF7QnmrN7YyM3b2mB62zQvYSKLeMTplyg401LPAXJ0xocfszvPNMUGMoEF7CshuhYN6RvkoTy3DN6UsGGqakpNxw737YWkbrzldr897UBk_QjZcctv1EBTO3cQLWlxqtmE2sWGt5SS1gIgne0yf0RGMfLTA5oFm56FqXF7rk9BmPaiUVq2rjHPYZ8sYGBmcg3pzmbw0J2tv0reFDdXNrH5Ck0xWFCsZgA" />
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest md:from-surface-container-lowest to-transparent md:to-transparent opacity-90 md:w-1/3"></div>
</div>
</Link>
{/* Academic Books (Tall) */}
<Link className="category-card md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] flex flex-col relative group animate-fade-in-up" to="/catalogarchive" style={{animationDelay: '0.2s'}}>
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="shelf-image w-full h-full object-cover absolute inset-0" data-alt="Stacks of heavy, authoritative academic textbooks and scholarly journals resting on a clean, ivory reading desk. Soft, focused, cool natural light from a nearby window creates a serene, intellectual environment. Minimalist, premium academic aesthetic focusing on knowledge and research, featuring subtle tones of navy blue and stone grey." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHxmJb94gKdpCyIN7rsa3-hs195-jGyIlZnT9lyYAbumjKgvsTD7A8_Upoyi04nHUpNnhTl24DZnO5iTqUSl0l4iTlsG2rQJ3542V4FsxRGIZpgc5N25WU3Mecpv-pxYRc8JKXSJ1IrscGo8zF5JFZ2ERT0NpSXzhWiyBbbadNEFL7Mvc5QVNgPW6sDOqVWs1KXu0a8H5Pnet-F57IzVXnhmEbkWZzRXPATE1osaBGxA1v-fAHXBP1Rw" />
</div>
<div className="p-lg flex flex-col flex-grow">
<h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Academic Books</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-2">Scholarly research, textbooks, and reference materials.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-label-md text-on-surface-variant">1,800+ Titles</span>
<span className="font-label-md text-label-md text-primary"><span className="material-symbols-outlined text-[20px]">arrow_forward</span></span>
</div>
</div>
</Link>
{/* Islamic Books */}
<Link className="category-card md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] flex flex-col relative group animate-fade-in-up" to="/catalogarchive" style={{animationDelay: '0.3s'}}>
<div className="h-48 relative overflow-hidden bg-secondary-fixed">
<img className="shelf-image w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-80" data-alt="An elegant display of premium Islamic literature and spiritual texts, featuring intricate geometric cover designs and rich green and gold accents. Resting on a fine linen cloth under soft, warm, reverent lighting. The scene conveys a sense of peace, tradition, and profound wisdom within a refined digital library setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXEZSf3Nh-zmvki-xCKJyFDWjR0P5Di3x7gKTUcmEb6oc5ax3yMe_wLHXd4rAGJlc7r2rOWmEcpaVeSKXzoab9XASbaZW_hsMc6Rh0waUpAhJLdXkgI4w5jzCdbEDKw2CEvIUwL6-bM1oeIo8bB568OU9QMm8_-EkqqwL2SzMafPNkXY1oSdVJWVTsx5lIsyIJDPtoogDmnKWF-HKVJ39rjqiRx7c12WKzSPKST8VC7BJYHmxTmaB45w" />
</div>
<div className="p-lg flex flex-col flex-grow">
<h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Islamic Books</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-2">Spiritual guidance, history, and theological texts.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-label-md text-on-surface-variant">950+ Titles</span>
<span className="font-label-md text-label-md text-primary"><span className="material-symbols-outlined text-[20px]">arrow_forward</span></span>
</div>
</div>
</Link>
{/* Children Books */}
<Link className="category-card md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] flex flex-col relative group animate-fade-in-up" to="/catalogarchive" style={{animationDelay: '0.4s'}}>
<div className="h-48 relative overflow-hidden bg-primary-fixed">
<img className="shelf-image w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-90" data-alt="A neat stack of beautifully illustrated children's storybooks with colorful, engaging spines, resting on a clean, light-wood surface. The lighting is bright, cheerful, and inviting, creating a sense of wonder and learning. A premium, modern take on a children's reading nook, avoiding clutter and maintaining high-end editorial standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCidrZn8f-EDzUzwz_WJrkmn6242K50sPPrNAjDwuwJ1mcb62lvlSHG4utare2tABfE-exNIUbaFNsI1DcReh9o2L9G8XQwkg6iV5Tewd0WeE5Uv9_UVSvNUOswpipbBhzmUykjjm7oMyAKSJ4wob6AYVr6gYxnvs852jjKhqN6DOijBqj45wR2u5SY3xmHPyRBV_K3AHNkKjWV0ImWZ2Hp6N8c8fEIIjp15VYgFlSwiHGEz2zKc1VtKA" />
</div>
<div className="p-lg flex flex-col flex-grow">
<h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Children Books</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-2">Imaginative tales and educational reading for young minds.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-label-md text-on-surface-variant">1,200+ Titles</span>
<span className="font-label-md text-label-md text-primary"><span className="material-symbols-outlined text-[20px]">arrow_forward</span></span>
</div>
</div>
</Link>
{/* Self Help & Stationery (Split) */}
<div className="md:col-span-4 flex flex-col gap-lg animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<Link className="category-card bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] flex-grow flex flex-col justify-center" to="/dashboard/customerdashboardmypersonalbookshelf">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Self Help</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Personal growth and psychology.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-label-md text-on-surface-variant">840+ Titles</span>
<span className="material-symbols-outlined text-primary text-[20px]">arrow_forward</span>
</div>
</Link>
<Link className="category-card bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_20px_rgba(23,26,28,0.05)] flex-grow flex flex-col justify-center relative overflow-hidden" to="/catalogarchive">
<div className="absolute inset-0 bg-surface-variant opacity-30"></div>
<div className="relative z-10">
<h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Stationery</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Premium notebooks and writing tools.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-label-md text-on-surface-variant">200+ Items</span>
<span className="material-symbols-outlined text-primary text-[20px]">arrow_forward</span>
</div>
</div>
</Link>
</div>
</section>
{/* CTA Banner */}
<section className="bg-primary rounded-xl overflow-hidden relative mb-xxl py-xl px-lg md:px-xl animate-fade-in-up flex flex-col items-center justify-center text-center">
<div className="relative z-10 max-w-2xl">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-md">Find Your Next Favourite Book</h2>
<p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-lg">Join our community of collectors and access exclusive archival collections.</p>
<button className="bg-secondary text-on-secondary font-label-md text-label-md px-lg py-sm rounded-full hover:opacity-90 transition-opacity">Explore Archive</button>
</div>
{/* Decorative Elements */}
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)'}}></div>
</section>
</main>
{/* Footer */}
<Footer />
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
