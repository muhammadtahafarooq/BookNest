import React from 'react';
import './BlogStoriesInspiration.css';

export default function BlogStoriesInspiration() {
  return (
    <>
      {/* TopNavBar Component */}
<header className="bg-primary dark:bg-primary shadow-md sticky top-0 z-50 w-full transition-all duration-400">
<div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max-width mx-auto h-20">
{/* Brand Logo */}
<div className="font-display-lg text-display-lg font-bold text-on-primary">
                BookNest
            </div>
{/* Navigation Links (Desktop) */}
<nav className="hidden md:flex space-x-8 items-center">
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Shop</a>
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Categories</a>
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Best Sellers</a>
<a className="text-outline-variant hover:text-on-primary transition-colors font-label-md text-label-md" href="#">New Arrivals</a>
</nav>
{/* Trailing Icons */}
<div className="flex items-center space-x-6">
<button className="text-on-primary hover:text-outline-variant transition-colors group relative scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined text-[24px]">favorite</span>
</button>
<button className="text-on-primary hover:text-outline-variant transition-colors group relative scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined text-[24px]">shopping_cart</span>
</button>
<button className="text-on-primary hover:text-outline-variant transition-colors group relative scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined text-[24px]">account_circle</span>
</button>
</div>
</div>
</header>
{/* Main Content */}
<main className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 space-y-24">
{/* Blog Header */}
<section className="text-center max-w-3xl mx-auto space-y-6">
<h1 className="font-fraunces text-5xl md:text-6xl font-semibold leading-tight text-brand-midnight tracking-tight">
                Stories, Ideas &amp;<br />Reading Inspiration
            </h1>
<p className="font-inter font-body-lg text-body-lg text-brand-midnight/70 max-w-xl mx-auto">
                Explore thought-provoking reviews, curated reading lists, and stories from the BookNest community. A sanctuary for the literary mind.
            </p>
</section>
{/* Featured Article */}
<section className="relative rounded-2xl overflow-hidden group shadow-lg">
<div className="absolute inset-0 bg-brand-midnight/40 group-hover:bg-brand-midnight/30 transition-colors duration-500 z-10"></div>
<img className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A luxurious, high-end private library interior with towering mahogany bookshelves filled with leather-bound books. Warm, ambient lighting cascades from classic brass reading lamps, creating a sophisticated, intellectual atmosphere. A comfortable leather reading chair sits near a large window, suggesting quiet contemplation in a refined, traditional setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-P086iVuhdPxe94h3sO5Lm2Pc59ArY8u3F93Kl1wNniOCPcaQkacqjWSuPyDuB1rC3a_-TwjeZRYcK4VxxOGhihVzpIYChfCgetz1eT8e-yYRFI-xQiwZMNioexWh2fU7lG8BruWHy08ioeNY_bBBAp2lGtS0y-Bx4oz90t7x7IRqjioTDWiiFCfZrN3dSJvqi6Z3lLcKYCCNvupdFhbEdtirvbs68N-iX5r1WPzeEEF40fW9_9ie" />
<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-brand-midnight to-transparent flex flex-col items-start space-y-6">
<span className="px-4 py-1.5 bg-brand-brass text-brand-midnight font-label-sm text-label-sm rounded-full tracking-wider uppercase font-semibold">Featured Column</span>
<h2 className="font-fraunces text-4xl md:text-5xl text-brand-paper font-semibold leading-tight max-w-3xl">
                    The Art of Slow Reading in a Fast-Paced World
                </h2>
<p className="font-inter font-body-lg text-body-lg text-brand-paper/80 max-w-2xl hidden md:block">
                    In an era dominated by skimming and scrolling, rediscovering the deliberate, immersive practice of slow reading can transform how we engage with literature and our own thoughts.
                </p>
<button className="mt-4 px-8 py-4 bg-brand-brass hover:bg-brand-brass/90 text-brand-midnight font-label-md text-label-md rounded shadow-md transition-all duration-300 flex items-center space-x-2">
<span>Read Article</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</section>
{/* Blog Categories */}
<section className="flex flex-wrap justify-center gap-4">
<button className="px-6 py-2.5 rounded-full bg-brand-midnight text-brand-paper font-label-sm text-label-sm shadow-sm transition-all border border-brand-midnight">All Posts</button>
<button className="px-6 py-2.5 rounded-full bg-transparent text-brand-midnight hover:bg-brand-midnight/5 border border-brand-midnight/20 font-label-sm text-label-sm transition-all">Book Reviews</button>
<button className="px-6 py-2.5 rounded-full bg-transparent text-brand-midnight hover:bg-brand-midnight/5 border border-brand-midnight/20 font-label-sm text-label-sm transition-all">Reading Tips</button>
<button className="px-6 py-2.5 rounded-full bg-transparent text-brand-midnight hover:bg-brand-midnight/5 border border-brand-midnight/20 font-label-sm text-label-sm transition-all">Education</button>
<button className="px-6 py-2.5 rounded-full bg-transparent text-brand-midnight hover:bg-brand-midnight/5 border border-brand-midnight/20 font-label-sm text-label-sm transition-all">Author Stories</button>
</section>
{/* Article Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Article Card 1 */}
<article className="group cursor-pointer flex flex-col space-y-5">
<div className="relative overflow-hidden rounded-xl shadow-sm aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A close-up, artistic shot of a vintage typewriter resting on a cluttered wooden desk. Scattered around are crumpled pieces of textured parchment paper, a spilled inkwell, and a brass fountain pen. The lighting is moody and dramatic, with a solitary desk lamp casting deep shadows, evoking a sense of intense creative writing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSiA3yMuuCYviAznSAb4bveIeP6WttJW2R3SOdrsVCdCWIYSpXk9Ez8ualO8GJrlTWoTWO47d0_tdOEOjlBEokVhFK73cQHMaPjoeroYHoBpczFyoHMaEFIlwRCUuaCadLyNEgktbfgP1T0C2qTaqsH1X9E26jHdQ9omhSkKf2hBn8JV0DCMa5jHS4aOZtBMlw49WOhrJ6RNYADsQA_Rr6zCnTTq6e83Swx5vjr29KsuwRwK6KrSAo" />
<div className="absolute top-4 left-4 px-3 py-1 bg-brand-paper/90 backdrop-blur text-brand-midnight font-label-sm text-label-sm rounded-md shadow">Author Stories</div>
</div>
<div className="space-y-3 flex-1 flex flex-col">
<p className="font-inter font-body-sm text-body-sm text-brand-midnight/60">October 12, 2024</p>
<h3 className="font-fraunces text-2xl font-semibold text-brand-midnight group-hover:text-brand-brass transition-colors leading-snug">
                        Behind the Pages: An Interview with Elena Rostova
                    </h3>
<p className="font-inter font-body-md text-body-md text-brand-midnight/70 line-clamp-2 flex-1">
                        The award-winning author discusses her creative process, the challenges of historical fiction, and finding inspiration in forgotten archives.
                    </p>
<div className="pt-4 flex items-center text-brand-brass font-label-sm text-label-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                        Read Story <span className="material-symbols-outlined ml-1 text-[16px]">east</span>
</div>
</div>
</article>
{/* Article Card 2 */}
<article className="group cursor-pointer flex flex-col space-y-5">
<div className="relative overflow-hidden rounded-xl shadow-sm aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A perfectly organized, minimalist bookshelf in a modern, light-filled apartment. The books are color-coordinated, interspersed with small, elegant ceramic vases and cascading green pothos plants. Sunlight streams through a nearby window, casting soft geometric shadows across the crisp white shelves, creating a serene, contemporary reading environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcN67AwiGmvhrBc0F4oNpRGC6efvKkoK5SxUbRySqN8Cl7eINCXQZJxXLOgNdgHW_3Q7huCmUHz9rVPL4gTt5DzoPRloRmnHJbpXnPUiz29gi_xk0IIgEu9Z33PvT016V9sPzT3X0FkG0t4LJOwtPchqQJJaCce0oU0mliEYDBx5D6rUsGmBui1vCHUkSz1hTYCblTHJKujWfwoGjt7C_1C3xKlNRHZCjZv39wXuLI6rWLy8R_JshT" />
<div className="absolute top-4 left-4 px-3 py-1 bg-brand-paper/90 backdrop-blur text-brand-midnight font-label-sm text-label-sm rounded-md shadow">Reading Tips</div>
</div>
<div className="space-y-3 flex-1 flex flex-col">
<p className="font-inter font-body-sm text-body-sm text-brand-midnight/60">October 08, 2024</p>
<h3 className="font-fraunces text-2xl font-semibold text-brand-midnight group-hover:text-brand-brass transition-colors leading-snug">
                        Curating Your Personal Library for Intentional Reading
                    </h3>
<p className="font-inter font-body-md text-body-md text-brand-midnight/70 line-clamp-2 flex-1">
                        Strategies for building a collection that reflects your intellectual journey rather than simply accumulating volumes.
                    </p>
<div className="pt-4 flex items-center text-brand-brass font-label-sm text-label-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                        Read Story <span className="material-symbols-outlined ml-1 text-[16px]">east</span>
</div>
</div>
</article>
{/* Article Card 3 */}
<article className="group cursor-pointer flex flex-col space-y-5">
<div className="relative overflow-hidden rounded-xl shadow-sm aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A steaming cup of Earl Grey tea sitting on a weathered wooden table beside an open, dog-eared paperback novel. A pair of wire-rimmed reading glasses rests on the open pages. The scene is illuminated by the soft, diffused light of a rainy afternoon visible through a nearby window, conveying a cozy, introspective mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2EZzDRUPa0qAB3CQvUWxsgdDQo3BF144ownoY39ry0buZD2gvOn_2vJnrCmSgqP-RfaoQYIOJnPkYUkCoOKHi5ZjcCRetKzP87h0JojjootUYniZ2bm7N2fw1wl4lVcRW-8tKplIXP4wUZeCqwLMjT7kOSrakqGQ0xsLiS110uglkdHUkzo3gQd7T84pjRNJ4vJBfJwJu3_5lOGa8IBAHE8j9XTDMw1BrOOtqKXgK-xcrz1GJBsue" />
<div className="absolute top-4 left-4 px-3 py-1 bg-brand-paper/90 backdrop-blur text-brand-midnight font-label-sm text-label-sm rounded-md shadow">Book Reviews</div>
</div>
<div className="space-y-3 flex-1 flex flex-col">
<p className="font-inter font-body-sm text-body-sm text-brand-midnight/60">October 01, 2024</p>
<h3 className="font-fraunces text-2xl font-semibold text-brand-midnight group-hover:text-brand-brass transition-colors leading-snug">
                        Review: 'The Midnight Library' and the Choices We Make
                    </h3>
<p className="font-inter font-body-md text-body-md text-brand-midnight/70 line-clamp-2 flex-1">
                        A deep dive into Matt Haig's acclaimed novel, exploring themes of regret, possibility, and the infinite lives we could have lived.
                    </p>
<div className="pt-4 flex items-center text-brand-brass font-label-sm text-label-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                        Read Story <span className="material-symbols-outlined ml-1 text-[16px]">east</span>
</div>
</div>
</article>
</section>
{/* Newsletter Section */}
<section className="bg-brand-midnight rounded-3xl p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-xl">
{/* Subtle background pattern */}
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#C89B3C 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 max-w-xl space-y-4">
<h2 className="font-fraunces text-4xl font-semibold text-brand-paper">Join the Reading Community</h2>
<p className="font-inter font-body-md text-body-md text-brand-paper/80">
                    Subscribe to receive a curated selection of thoughtful essays, book recommendations, and literary news delivered to your inbox every Sunday.
                </p>
</div>
<div className="relative z-10 w-full max-w-md">
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-brand-paper/10 border border-brand-paper/20 rounded-md px-4 py-3 text-brand-paper placeholder:text-brand-paper/50 focus:outline-none focus:ring-2 focus:ring-brand-brass focus:border-transparent font-inter font-body-md text-body-md" placeholder="Your email address" type="email" />
<button className="bg-brand-brass hover:bg-brand-brass/90 text-brand-midnight font-label-md text-label-md px-6 py-3 rounded-md shadow-md transition-colors whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
<p className="font-inter text-xs text-brand-paper/50 mt-3 text-center sm:text-left">No spam. Unsubscribe at any time.</p>
</div>
</section>
</main>
{/* Footer Component */}
<footer className="bg-primary dark:bg-primary border-t border-outline/20">
<div className="w-full py-margin-desktop px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
{/* Brand Column */}
<div className="space-y-4">
<div className="font-headline-md text-headline-md font-bold text-on-primary">
                    BookNest
                </div>
<p className="font-body-sm text-body-sm text-outline-variant">
                    © 2024 BookNest Pakistan. All rights reserved.
                </p>
</div>
{/* Links Columns */}
<div className="col-span-1 md:col-span-3 flex flex-wrap gap-8 justify-start md:justify-end">
<ul className="space-y-3">
<li><a className="text-outline-variant hover:text-on-primary transition-all font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">About Us</a></li>
<li><a className="text-outline-variant hover:text-on-primary transition-all font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Contact</a></li>
<li><a className="text-outline-variant hover:text-on-primary transition-all font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Shipping Policy</a></li>
<li><a className="text-outline-variant hover:text-on-primary transition-all font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a></li>
<li><a className="text-outline-variant hover:text-on-primary transition-all font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
</footer>
    </>
  );
}
