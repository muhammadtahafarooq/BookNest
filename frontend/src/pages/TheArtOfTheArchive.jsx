import React, { useEffect } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import './TheArtOfTheArchive.css';

export default function TheArtOfTheArchive() {
  
  useEffect(() => {
    // Simple scroll fade-in observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-scroll').forEach(element => {
                observer.observe(element);
            });
        });
      const navigate = useNavigate();
  return () => {
        if (typeof observer !== 'undefined') observer.disconnect();
    };
  }, []);

return (
    <>
      {/* TopNavBar */}
<nav className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-headline-md text-headline-md font-body-md text-body-md docked full-width top-0 border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto z-50 sticky transition-all duration-300">
<div className="font-headline-md text-headline-md text-on-primary tracking-tight">BookNest</div>
<div className="hidden md:flex flex-row space-x-lg">
<Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/browsecollections">The Collection</Link>
<Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/searchresultsbooknest">Research Guides</Link>
<Link className="text-secondary-fixed font-bold border-b-2 border-secondary-fixed hover:text-secondary-fixed transition-colors duration-200 opacity-80" to="/shopbrowsebooks">Archives</Link>
</div>
<div className="flex items-center space-x-md">
<button className="hover:text-secondary-fixed transition-colors duration-200" onClick={() => navigate('/dashboard/myreadingshelfbooknestwishlist')}>
<span className="material-symbols-outlined">favorite</span>
</button>
<button className="hover:text-secondary-fixed transition-colors duration-200" onClick={() => navigate('/shoppingcartyourbookcollection')}>
<span className="material-symbols-outlined">shopping_cart</span>
</button>
<button className="hover:text-secondary-fixed transition-colors duration-200" onClick={() => navigate('/dashboard/customerdashboardmypersonalbookshelf')}>
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</nav>
<main className="w-full">
{/* Article Header */}
<header className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xxl text-center page-reveal">
<h1 className="font-display-lg text-display-lg md:font-display-lg md:text-display-lg text-primary mb-md">The Art of the Archive</h1>
<div className="flex items-center justify-center space-x-md mb-xl font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
<span>By Julian Thorne</span>
<span className="w-1 h-1 bg-outline rounded-full"></span>
<span>October 24, 2024</span>
</div>
<div className="w-full h-[60vh] rounded-xl overflow-hidden shadow-lg relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up macro photography of an antique leather bound book spine. The leather is rich deep brown, highly textured with age, and features ornate burnished brass metal corners and clasps. Soft warm library lighting, shallow depth of field, highlighting the tactile luxury of historical literature. Editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBeZkLuX_qGHpAQf6B6QrynXc3UX0Vs0iudy0jkTyZucJQUK37DcrPbfwzfdGM_B3DgL4ZPn6C5epkZjpxC7u95cVt-aIc3HEkG_L4V48Ojg9TBQEq3z-NvneCYorXS9xk50ptD1x8blEEtwfA9wWrJXLoOXcQzogzEf3TyzhAmcfq4LIOARaQFthlqFgSmgTbLs8wkOTeFqcSGU0FhH2jC7GXM9rbjDwCtLLZP6EqHmdXjvBdWPxo1A" />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
</header>
{/* Article Content */}
<article className="max-w-[800px] mx-auto px-margin-mobile md:px-0 py-xl font-body-lg text-body-lg text-on-surface-variant leading-[1.8]">
<p className="mb-lg fade-in-scroll">
                In an era defined by ephemeral digital notifications and the relentless scroll, the physical archive stands as an anchor of permanence. It is not merely a repository of text, but a carefully curated ecosystem of human thought, bound in leather, stamped with gold, and preserved against the relentless tide of time.
            </p>
<p className="mb-lg fade-in-scroll">
                The sensory experience of the archive—the scent of aging paper, the weight of a volume in the hand, the satisfying resistance of a well-crafted binding—speaks to a fundamental human desire for tangible connection to the past. These spaces demand a specific kind of reverence, a quietude that modern life rarely affords.
            </p>
<blockquote className="my-xxl py-xl px-lg border-l-4 border-secondary bg-surface-container-low rounded-r-lg shadow-sm fade-in-scroll">
<p className="font-headline-md text-headline-md text-primary italic mb-sm">
                    "A library is not a collection of books, but a sanctuary for the stories they hold."
                </p>
<footer className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">— Julian Thorne</footer>
</blockquote>
<p className="mb-xl fade-in-scroll">
                To explore an archive is to engage in an act of temporal translation. The marginalia left by a reader centuries ago becomes a conversation across generations. We are reminded that knowledge is not static; it is a physical entity, shaped by the hands that hold it and the environments that shelter it.
            </p>
<figure className="my-xl fade-in-scroll">
<img className="w-full h-[400px] object-cover rounded-lg shadow-md mb-sm" data-alt="A grand historical library aisle stretching into the distance. Tall dark wooden bookshelves filled with thousands of antique books. Soft shafts of golden hour light filter through high arched windows, illuminating dust motes in the air. The atmosphere is solemn, quiet, and intellectually inspiring. High contrast luxury editorial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb_DoeaV0zlfdNf1VAg5iYT0MnmCaGMVRcwACZiFGDkVr_o-4g_ZWT8ZBjbtMl-su8Zw-h0grRVq9XZv3DKY9uJANuKFWAIxDrk0NlW3ZsN8QP3yn45hE1RJ8azOKbHviqaVopRIZ91Qh3gAChAe_UPbG0I8QG9zGBeirc_FlJtMxcTENqO0R3RwH8ciJkK3u8w3Mm3SbXppk_WPPTxAlvPHzvuuTKa21D_CZCgSWYbBVhfT2A35aNTg" />
<figcaption className="font-label-sm text-label-sm text-on-surface-variant text-right">The Bodleian Library, Oxford.</figcaption>
</figure>
<p className="mb-lg fade-in-scroll">
                As we navigate the complexities of the digital age, the role of the physical archive becomes increasingly vital. It serves as a necessary counterweight to the fleeting nature of online information, offering a space for deep reflection and the tactile engagement with history. The art of the archive is, ultimately, the art of remembering.
            </p>
</article>
<hr className="border-t border-outline-variant max-w-[800px] mx-auto my-xl fade-in-scroll" />
{/* Books Mentioned */}
<section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl fade-in-scroll">
<h2 className="font-headline-sm text-headline-sm text-primary mb-lg text-center">Books Mentioned</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
{/* Book 1 */}
<div className="bg-surface-container-low rounded-lg p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-outline-variant/30">
<img className="w-32 h-48 object-cover shadow-md mb-md" data-alt="Cover of the book 'The Shadow of the Wind'. Vintage aesthetic, sepia tones, depicting a misty, winding gothic street in Barcelona. Elegant, classic typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86nVX6IxcTvYUgjKLX6-sBWbyce6sNv4bsVgvXD0poy2B11Nwyv3k_soI9H3s5hHilhIqGIHJZR0y0xse30zAR2yF3c-Nz8-VwdfVXycIbLg7xBtyZiebbRtd7Uh_JPB2qbMMRRINipK2Ha01KgN1Ntgb05azPg9FggL62F-QULTrt6CFVKTzJh8aflOAh_-X2D6pyd9CoHvsmCSJ7tonK0lh16L2d2KOm2H4eZG073CcWIbSnIrzkg" />
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">The Shadow of the Wind</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-md">Carlos Ruiz Zafón</p>
<button className="mt-auto px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-inverse-surface transition-colors duration-200">Add to Collection</button>
</div>
{/* Book 2 */}
<div className="bg-surface-container-low rounded-lg p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-outline-variant/30">
<img className="w-32 h-48 object-cover shadow-md mb-md" data-alt="Cover of the book 'Meditations' by Marcus Aurelius. Minimalist design, deep forest green background with a subtle embossed Roman bust in gold foil. Premium, philosophical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1LO5jxW4E90eztLef8n0NrKcRSw46xZvs1vJNNQKmQWj5JLYWLF-JzgCTpjtK9zzuL1n1PpG8A1vX4UC8XZCzj-ND9kFQeEPhkS5_zw39fIwNZ-jM4LRovDhAsa-hI5Z0SeWCwvbRaHVvqWLOlNvbV8o8YQV8PWKCG30zi5L1mkM3Uc8U5uMgSTZH7UVfx0KGrQeNKm5xFcbIBJuJkOl6EsdmltLDXJrLbRxy2wWNSp_o4Xa5iUF12Q" />
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Meditations</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-md">Marcus Aurelius</p>
<button className="mt-auto px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-inverse-surface transition-colors duration-200">Add to Collection</button>
</div>
{/* Book 3 */}
<div className="bg-surface-container-low rounded-lg p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-outline-variant/30">
<img className="w-32 h-48 object-cover shadow-md mb-md" data-alt="Cover of the book 'The Great Gatsby'. Art Deco style, dark blue and gold color palette. Geometric patterns evocative of the 1920s jazz age. Luxurious and timeless." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8sulclq654v-W__aTwerzZMvqgFxx4Lx7elGZT5l5dYkBUR3HyHgo1GPf-IY_HBvoL3e6Z1VS5YOml3SFe-KwH75jo53w_cti3mvw0TY68R_V27xtI4ybrVoMc_FVHPi4dM7CQWpntBqQExOUXJ5fNLQ2K4bsC78cnXfaZ5PjwL0ymQYzSZbLcaVdJTiUCp8QlZGWMmInqUdhhKv1Ubn8Y-HFLtL7tdBJ-3mVPZbn2t44RhAsL7cOWA" />
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">The Great Gatsby</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-md">F. Scott Fitzgerald</p>
<button className="mt-auto px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-inverse-surface transition-colors duration-200">Add to Collection</button>
</div>
</div>
</section>
{/* Share Section */}
<div className="flex justify-center items-center space-x-md py-xl fade-in-scroll">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Share</span>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary-container transition-colors duration-200 text-on-surface">
<span className="material-symbols-outlined text-sm">link</span>
</button>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary-container transition-colors duration-200 text-on-surface">
<span className="material-symbols-outlined text-sm">mail</span>
</button>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary-container transition-colors duration-200 text-on-surface" onClick={() => navigate('/dashboard/mysavedcollection')}>
<span className="material-symbols-outlined text-sm">bookmark</span>
</button>
</div>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-body-md text-body-md font-label-sm text-label-sm full-width py-xxl border-t border-outline-variant flat flex flex-col md:flex-row justify-between items-center px-margin-desktop w-full max-w-[1280px] mx-auto z-40 mt-xl">
<div className="flex flex-col items-center md:items-start mb-lg md:mb-0">
<div className="font-headline-sm text-headline-sm text-on-primary mb-sm">BookNest</div>
<div className="text-on-primary-fixed-variant">© 2024 BookNest Digital Archive. All Rights Reserved.</div>
</div>
<div className="flex flex-wrap justify-center md:justify-end gap-md md:gap-lg">
<Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/browsecollections">The Collection</Link>
<Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/searchresultsbooknest">Research Guides</Link>
<Link className="text-on-primary font-bold hover:text-secondary-fixed transition-colors duration-200" to="/shopbrowsebooks">Archives</Link>
<Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/shopbrowsebooks">Privacy Policy</Link>
<Link className="text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-200" to="/shopbrowsebooks">Terms of Service</Link>
</div>
</footer>
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
