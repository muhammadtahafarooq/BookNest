import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './StoriesFromTheBookshelf.css';

export default function StoriesFromTheBookshelf() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
{/* <Navbar /> */}
<Navbar />
<main className="flex-grow flex flex-col items-center w-full max-w-[1280px] mx-auto pb-xxl">
{/* Header Section */}
<section className="w-full px-margin-mobile md:px-margin-desktop py-xxl text-center animate-fade-up">
<h1 className="font-display-lg text-display-lg text-obsidian-ink mb-lg">Stories From The Bookshelf</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Chronicles of rare finds, deep reads, and the tactile joy of holding history in your hands. A journal for the dedicated bibliophile.
            </p>
</section>
{/* Featured Article */}
<section className="w-full px-margin-mobile md:px-margin-desktop mb-xxl">
<div className="relative bg-soft-archive rounded-xl overflow-hidden shadow-ambient-lvl1 group border border-stone-manuscript cursor-pointer transition-shadow hover:shadow-ambient-lvl2 flex flex-col md:flex-row">
<div className="w-full md:w-3/5 h-96 md:h-auto overflow-hidden bg-surface-variant relative">
<div className="w-full h-full bg-cover bg-center animate-hero-zoom group-hover:scale-105 transition-transform duration-700" data-alt="A luxurious, high-end editorial photograph of a vintage, leather-bound classic book resting open on a heavy oak desk. Soft, warm directional light highlights the gold foil lettering and the textured, aged pages. The scene is shot in a premium literary magazine style, emphasizing tactile history, deep shadows, and an atmosphere of quiet intellectual focus. Rich browns and muted ivory dominate the elegant palette." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuD1o_SjhwFXhY3OB2q44_pLXjxegmihIUsrapjLV1lAZ0L6sIvWxKimLYzI3kTSUaq9T9VjhL9LI70gE3uxNAKLNE5885MUVpmI2Pu_lpNHGuEPSwC5FwM2hHKMrjFPU5AJfuBaCpN3xJBcy7FuNGmUFNcdMkZyXuxHyyQPvgamXoPmKzarPb2Dsq_OUe3P4bIyXA1h5O1llnIhdXBWWQtgPt73KSggom1PxPiqg564Wod1jX9Lv0Z0KQ\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian-ink/40 to-transparent md:hidden"></div>
</div>
<div className="w-full md:w-2/5 p-lg md:p-xl flex flex-col justify-center">
<div className="mb-md">
<span className="bg-deep-forest text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider inline-block">Editorial</span>
</div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-obsidian-ink mb-md">The Lost Manuscripts of Modernity</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-3">
                        An exclusive look into the newly uncovered drafts that shaped the 20th century's most defining literary movements, hidden away in a Parisian basement for decades.
                    </p>
<div className="mt-auto flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">October 12, 2024 • 8 min read</span>
<button className="bg-burnished-brass text-obsidian-ink font-label-md text-label-md px-6 py-3 rounded hover:opacity-90 transition-opacity">Read Article</button>
</div>
</div>
</div>
</section>
{/* Category Filter */}
<section className="w-full px-margin-mobile md:px-margin-desktop mb-xl animate-fade-up delay-100">
<div className="flex flex-wrap items-center justify-center gap-md border-y border-stone-manuscript py-md">
<button className="font-label-md text-label-md text-obsidian-ink font-bold border-b-2 border-burnished-brass pb-1 px-2">All Stories</button>
<button className="font-label-md text-label-md text-on-surface-variant hover:text-obsidian-ink transition-colors pb-1 px-2">Book Reviews</button>
<button className="font-label-md text-label-md text-on-surface-variant hover:text-obsidian-ink transition-colors pb-1 px-2">Reading Tips</button>
<button className="font-label-md text-label-md text-on-surface-variant hover:text-obsidian-ink transition-colors pb-1 px-2">Author Stories</button>
<button className="font-label-md text-label-md text-on-surface-variant hover:text-obsidian-ink transition-colors pb-1 px-2">Book Guides</button>
</div>
</section>
{/* Article Grid */}
<section className="w-full px-margin-mobile md:px-margin-desktop mb-xxl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg lg:gap-xl">
{/* Article Card 1 */}
<article className="bg-soft-archive rounded-xl overflow-hidden shadow-ambient-lvl1 border border-stone-manuscript group hover:shadow-ambient-lvl2 transition-all cursor-pointer animate-fade-up delay-100 flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<img alt="Reading Nook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A pristine, beautifully designed reading nook featuring a comfortable velvet armchair next to a tall, meticulously organized bookshelf. Soft natural light streams through a nearby window, illuminating a stack of newly purchased contemporary novels. The aesthetic is clean, modern luxury, emphasizing a serene, intellectual environment ideal for deep reading." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgyl5hqEYv2GcCWmZ98twnVfPzkUqMZHTll8vjsrqQyGM5BBVgwolLprurUNF_LHfrRKtXFFHZzpdCZyTnwSfr2XIZFkHcbnXqbCsu7QDyyKtFzS6FZ412dwJWGQo1x808YExqMJlYl8tEgd_t6pyb0pzGxyH-Sy6oaMZjcn7RMBuRgZbqGpdX0Gqoymj7uxXYYZkJmsCz3EKxVE-CaY_VJ76MUs1CHIpeMrkqUp3zHX7JvRSBwcCc8Q" />
</div>
<div className="p-lg flex flex-col flex-grow">
<div className="mb-sm flex justify-between items-center">
<span className="text-deep-forest font-label-sm text-label-sm uppercase tracking-wide">Reading Tips</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-right">Oct 10</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-sm">Cultivating Focus in a Noisy World</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow line-clamp-3">Strategies for reclaiming your attention span and returning to long-form reading, inspired by cognitive science and ancient monastic habits.</p>
</div>
</article>
{/* Article Card 2 */}
<article className="bg-soft-archive rounded-xl overflow-hidden shadow-ambient-lvl1 border border-stone-manuscript group hover:shadow-ambient-lvl2 transition-all cursor-pointer animate-fade-up delay-200 flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<img alt="Writing Desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A detailed, close-up shot of an author's writing desk. An antique typewriter sits prominently, surrounded by scattered, hand-written notes on thick, textured paper. A ceramic mug of black coffee rests nearby. The lighting is moody and dramatic, focusing on the texture of the ink and paper, conveying a premium, creative, and slightly nostalgic editorial mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_HmgjjLUFChk3MMIN-NXE3b0Y1LQ5FJy24UZtYh-J31J1GFRZYSGPruYo0ldhOvkf7Bp1goXZF1CrDpsI-i7egcT7wUcbm22-ulvCpkOm63eWZqe9qnG-e3qUGFdOUNGF-KF9anCfWtqhXmJuO8K7EbWesEKj3EGurioXBQgXR2W2j_FXxX5d-eSnSERXes7Ikf4TE93USuWFDS9mGdSV-TUB0dir3UZ_dOYeifRkW5o95lGs3lgw9A" />
</div>
<div className="p-lg flex flex-col flex-grow">
<div className="mb-sm flex justify-between items-center">
<span className="text-deep-forest font-label-sm text-label-sm uppercase tracking-wide">Author Stories</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-right">Oct 08</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-sm">The Architecture of a Novel</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow line-clamp-3">Award-winning novelist E.M. Vance discusses the rigorous structural planning required to build a sprawling fantasy universe.</p>
</div>
</article>
{/* Article Card 3 */}
<article className="bg-soft-archive rounded-xl overflow-hidden shadow-ambient-lvl1 border border-stone-manuscript group hover:shadow-ambient-lvl2 transition-all cursor-pointer animate-fade-up delay-300 flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<img alt="Vintage Paperbacks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A curated collection of vintage science fiction paperbacks arranged aesthetically on a smooth, dark wooden table. The covers feature vibrant retro-futuristic art, contrasting with the dark background. The lighting is crisp and modern, bringing out the vivid colors of the vintage covers while maintaining an elegant, high-end editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKQ3vbORXxQPP7xbS2VgzU7j_zfcFobwEjbk7F5OhOtGCEHR4xFaxsVxeSRKUv4EJa2c0Y4vFfWLmrMo_QlGPN-53viYJaCjMDEawpC4a06Ml4swfd3XOskZ8iCPiIzKtnpdAQBfqYyl_D9kK1qd_IgtKwHfPSkkYJ3CCqFwJl0gw_hfiTC_o5xomOsWYD3Bj6kt2xMQ1Oiuus-rKxy6jG_mY6qTfYR19AD76S9mjD97I0NCzFyi70Qg" />
</div>
<div className="p-lg flex flex-col flex-grow">
<div className="mb-sm flex justify-between items-center">
<span className="text-deep-forest font-label-sm text-label-sm uppercase tracking-wide">Book Guides</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-right">Oct 05</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-obsidian-ink mb-sm">Collecting the Golden Age of Sci-Fi</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow line-clamp-3">A beginner's guide to identifying first editions and preserving fragile mid-century paperbacks from the titans of speculative fiction.</p>
</div>
</article>
</div>
</section>
{/* Newsletter Section */}
<section className="w-full px-margin-mobile md:px-margin-desktop mb-xxl">
<div className="bg-deep-forest rounded-xl p-xl md:p-xxl flex flex-col md:flex-row items-center justify-between shadow-ambient-lvl2 border border-stone-manuscript/30">
<div className="text-center md:text-left md:w-1/2 mb-lg md:mb-0">
<h2 className="font-headline-md text-headline-md text-on-primary mb-sm">Join the Reader's Circle</h2>
<p className="font-body-md text-body-md text-on-primary/80">Receive curated essays, rare finds, and archival notes delivered to your inbox every Sunday.</p>
</div>
<div className="w-full md:w-1/2 max-w-md flex flex-col gap-sm">
<div className="flex">
<input className="w-full bg-soft-archive border border-stone-manuscript rounded-l px-md py-sm font-body-md text-obsidian-ink focus:outline-none focus:border-obsidian-ink focus:ring-1 focus:ring-obsidian-ink transition-colors" placeholder="Your email address" type="email" />
<button className="bg-burnished-brass text-obsidian-ink font-label-md text-label-md px-lg py-sm rounded-r hover:opacity-90 transition-opacity whitespace-nowrap">Subscribe</button>
</div>
<p className="font-label-sm text-label-sm text-on-primary/60 text-center md:text-left">We respect your inbox. Unsubscribe anytime.</p>
</div>
</div>
</section>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
