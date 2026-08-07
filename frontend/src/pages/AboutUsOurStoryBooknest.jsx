import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './AboutUsOurStoryBooknest.css';

export default function AboutUsOurStoryBooknest() {
    const navigate = useNavigate();
  return (
    <>
      {/* 1. TopNavBar */}
{/* <Navbar /> */}
<Navbar />
{/* 2. Hero Section */}
<section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-midnight-ink/90 via-midnight-ink/70 to-transparent z-10"></div>
<div className="w-full h-full bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" data-alt="A highly detailed, majestic interior of a classic, multi-level private library. Tall wooden shelves are packed with vintage and modern books. Warm, ambient, soft golden lighting illuminates the space, creating an inviting, intellectual, and sophisticated mood. Dust motes dance in shafts of light. High-end editorial photography style, reminiscent of a prestigious university or a grand European estate." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCPbmg3esS8Y-NXMjsZGd7NTXaaXhJLcgIKv_ei5nYOBm0B2zmEWvEq5uupOa1BvxW_ZvBZa54KEhVuzPyrG9QoEC4ZI84AVGqp4Dn0GAVCOY0oYmc-6KOikz1k05RycQteguY-xprnYqiSllr0NO5_lM5HMM-82S5z24piHbVpmKRkX6L3ATYe-0wE50AcARZtGlAX5rGjKteq76MYBIlsWnNrmLkygH1l-aZ12060dSbrOVQplxjN\')'}}></div>
</div>
<div className="relative z-20 w-full max-w-container-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="col-span-1 md:col-span-8 lg:col-span-6 flex flex-col items-start pt-20">
<span className="font-label-md text-label-md text-antique-brass tracking-widest uppercase mb-6 flex items-center gap-2">
<span className="w-8 h-[1px] bg-antique-brass"></span>
                    Our Story Begins Here
                </span>
<h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-8 font-light tracking-tight">
                    More than a bookstore. <br />
<span className="italic text-paper-mist/90">A place for stories, learning, and discovery.</span>
</h1>
<p className="font-body-lg text-body-lg text-paper-mist/80 mb-12 max-w-xl font-light">
                    We believe in the transformative power of a well-told story and the quiet rebellion of deep reading in a loud world.
                </p>
</div>
</div>
{/* Scroll indicator */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70">
<span className="font-label-sm text-label-sm text-paper-mist tracking-widest uppercase">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-paper-mist to-transparent"></div>
</div>
</section>
{/* 3. Our Story Section */}
<section className="py-24 md:py-32 px-margin-desktop w-full max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16 items-center">
<div className="col-span-1 lg:col-span-5 relative group order-2 lg:order-1 mt-12 lg:mt-0">
<div className="absolute inset-0 bg-antique-brass/20 translate-x-4 translate-y-4 rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
<div className="aspect-[4/5] w-full rounded-lg overflow-hidden shadow-[0_20px_40px_-15px_rgba(16,42,67,0.3)]">
<img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="A close-up, beautifully composed shot of a person's hands gently turning the page of a high-quality hardcover book. The setting is intimate and warm, perhaps a cozy reading nook with a cup of tea nearby. Soft, natural light emphasizes the texture of the paper and the elegance of the moment. Editorial, lifestyle photography, conveying tranquility, intelligence, and a deep appreciation for physical books." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqblnOJnHi1MzsfNr7y4Hgr1BZFUzAENBm-8NoDKGX8p3GbxvTc-dPsPyojYgzy7mY23YXt9QXHtfT5BJnPtmtsv93V2Nuw6nLaGSNfaKrzbagVLS0Kj6kbY1irQz8uNKI-PaR5pFOQOGuirNqbrpyAusEBh8CtKUd_6EZIV6zzd4ehTf5AD7ziIhVtns-rX6EMu_0H89T5nELYR5waTvCcjmoEybLXEeCG7vd5deAkhAcQSWrHqn2" />
</div>
</div>
<div className="col-span-1 lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-12">
<h2 className="font-fraunces text-4xl md:text-5xl text-midnight-ink mb-8 leading-tight">
                    Curating the world's most compelling ideas.
                </h2>
<div className="space-y-6 text-midnight-ink/80 font-body-lg text-body-lg font-light leading-relaxed">
<p>
                        BookNest was born from a simple realization: in an era of fleeting digital consumption, the profound connection forged between a reader and a physical book remains irreplaceable. 
                    </p>
<p>
                        Our founders, a collective of bibliophiles and literary critics, set out to create more than a retail space. They envisioned a sanctuary. A meticulously curated environment where the quality of the collection supersedes sheer volume.
                    </p>
<p>
                        Today, we scour global publishers, rare presses, and independent authors to bring you narratives that challenge, educate, and profoundly move you. Every title on our shelves has earned its place.
                    </p>
</div>
<div className="mt-12 flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full border border-antique-brass flex items-center justify-center text-antique-brass group-hover:bg-antique-brass group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'wght\' 300'}}>arrow_forward</span>
</div>
<span className="font-label-md text-label-md text-midnight-ink uppercase tracking-widest group-hover:text-antique-brass transition-colors">Read our manifesto</span>
</div>
</div>
</div>
</section>
{/* 4. Mission & Vision */}
<section className="py-24 md:py-32 bg-white relative overflow-hidden">
{/* Subtle decorative background element */}
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-paper-mist rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-margin-desktop text-center relative z-10 flex flex-col items-center">
<span className="material-symbols-outlined text-antique-brass text-5xl mb-8" style={{fontVariationSettings: '\'wght\' 200'}}>local_library</span>
<h2 className="font-fraunces text-3xl md:text-5xl text-midnight-ink mb-12 leading-tight max-w-3xl">
                Our mission is to make exceptional literature accessible, foster a culture of lifelong learning, and build trust through uncompromising curation.
            </h2>
<div className="h-[1px] w-24 bg-antique-brass/40 mx-auto mb-12"></div>
<p className="font-body-lg text-body-lg text-midnight-ink/70 max-w-2xl font-light">
                We envision a world where the right book finds the right mind at the exact right moment, sparking ideas that shape the future.
            </p>
</div>
</section>
{/* 5. Why BookNest Exists (Bento Grid) */}
<section className="py-24 md:py-32 px-margin-desktop w-full max-w-container-max-width mx-auto bg-paper-mist">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="font-fraunces text-3xl md:text-4xl text-midnight-ink mb-4">Who we serve</h2>
<p className="font-body-md text-body-md text-midnight-ink/70 max-w-lg">Designed for those who seek depth in an increasingly shallow world.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
{/* Students/Learners */}
<div className="md:col-span-2 bg-white rounded-xl p-8 relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(16,42,67,0.1)] hover:-translate-y-1 transition-transform duration-400">
<div className="relative z-10 h-full flex flex-col justify-end w-1/2 md:w-2/3">
<span className="material-symbols-outlined text-antique-brass mb-4 text-3xl" style={{fontVariationSettings: '\'wght\' 300'}}>school</span>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-2">The Scholars</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70">Providing foundational texts, academic journals, and challenging non-fiction for those engaged in rigorous intellectual pursuit.</p>
</div>
<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-full h-full bg-cover bg-left" data-alt="Abstract, minimal macro photography of stacked books forming geometric patterns. The pages create interesting textures and lines. Clean, well-lit studio lighting against a soft, light background, emphasizing the architectural quality of physical books. High-end, contemporary aesthetic." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4jmSJYM8uLs51iWwYbOPjacgCt69N8KyMq8uE3eojJnzxUc9licZ9ZprUdSRRxtwYPGDWmf8w-GYECQFvbYOPb--BkkU-2tp2ovbWPxTInMCx-whja_KcxXyUhkSVenI5EYn0TAA4ODerrqdjIhAGSD9KP_RexjgmrejLUmG46yr_7eHHrds3o2-htFGOyplbeDCRu3ka05X2eSEmqZUhv1bTuDC9craRoGMnUscBgOlERaFTkjI\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
</div>
</div>
{/* Families */}
<div className="bg-midnight-ink rounded-xl p-8 text-white relative shadow-[0_10px_30px_-15px_rgba(16,42,67,0.3)] hover:-translate-y-1 transition-transform duration-400">
<div className="h-full flex flex-col justify-between">
<span className="material-symbols-outlined text-antique-brass text-3xl" style={{fontVariationSettings: '\'wght\' 300'}}>family_restroom</span>
<div>
<h3 className="font-fraunces text-2xl mb-2">Families</h3>
<p className="font-body-sm text-body-sm text-white/70">Curating imaginative worlds that foster early literacy and shared moments of wonder across generations.</p>
</div>
</div>
</div>
{/* Casual Readers */}
<div className="bg-white rounded-xl p-8 relative shadow-[0_10px_30px_-15px_rgba(16,42,67,0.1)] hover:-translate-y-1 transition-transform duration-400 border border-slate-binding/10">
<div className="h-full flex flex-col justify-between">
<span className="material-symbols-outlined text-antique-brass text-3xl" style={{fontVariationSettings: '\'wght\' 300'}}>coffee</span>
<div>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-2">Escapists</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70">A carefully selected range of literary fiction, gripping thrillers, and immersive narratives for the pure joy of reading.</p>
</div>
</div>
</div>
{/* Knowledge Seekers */}
<div className="md:col-span-2 bg-surface-container-highest rounded-xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-400 border border-white">
<div className="h-full flex flex-col justify-center items-center text-center max-w-lg mx-auto relative z-10">
<span className="material-symbols-outlined text-antique-brass mb-4 text-3xl" style={{fontVariationSettings: '\'wght\' 300'}}>psychology</span>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-2">Knowledge Seekers</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70">For the autodidacts and the endlessly curious. Biographies, philosophy, science, and history to expand your understanding of the universe.</p>
</div>
</div>
</div>
</section>
{/* 6. Values */}
<section className="py-24 md:py-32 px-margin-desktop w-full max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Value 1 */}
<div className="p-8 border-t-2 border-slate-binding hover:border-antique-brass transition-colors duration-400 bg-white group">
<span className="font-label-sm text-label-sm text-antique-brass uppercase tracking-widest mb-6 block">01</span>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-4 group-hover:text-antique-brass transition-colors">Trust</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70 font-light leading-relaxed">
                    We only recommend books we believe hold intrinsic value. Our curation is honest, independent, and unswayed by fleeting trends.
                </p>
</div>
{/* Value 2 */}
<div className="p-8 border-t-2 border-slate-binding hover:border-antique-brass transition-colors duration-400 bg-white group">
<span className="font-label-sm text-label-sm text-antique-brass uppercase tracking-widest mb-6 block">02</span>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-4 group-hover:text-antique-brass transition-colors">Accessibility</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70 font-light leading-relaxed">
                    Great ideas belong to everyone. We strive to maintain fair pricing, diverse formats, and an inclusive, welcoming environment.
                </p>
</div>
{/* Value 3 */}
<div className="p-8 border-t-2 border-slate-binding hover:border-antique-brass transition-colors duration-400 bg-white group">
<span className="font-label-sm text-label-sm text-antique-brass uppercase tracking-widest mb-6 block">03</span>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-4 group-hover:text-antique-brass transition-colors">Knowledge</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70 font-light leading-relaxed">
                    We view books as tools for personal and societal growth, championing works that provoke thought, empathy, and innovation.
                </p>
</div>
{/* Value 4 */}
<div className="p-8 border-t-2 border-slate-binding hover:border-antique-brass transition-colors duration-400 bg-white group">
<span className="font-label-sm text-label-sm text-antique-brass uppercase tracking-widest mb-6 block">04</span>
<h3 className="font-fraunces text-2xl text-midnight-ink mb-4 group-hover:text-antique-brass transition-colors">Experience</h3>
<p className="font-body-sm text-body-sm text-midnight-ink/70 font-light leading-relaxed">
                    From the tactile feel of our packaging to our knowledgeable concierge staff, every interaction is designed with meticulous care.
                </p>
</div>
</div>
</section>
{/* 7. Brand Image Section */}
<section className="w-full h-[60vh] relative">
<div className="absolute inset-0 bg-midnight-ink/40 z-10"></div>
<div className="w-full h-full bg-cover bg-center bg-fixed z-0" data-alt="A wide, sweeping architectural shot of a stunning, modern, multi-story bookstore interior. Characterized by sleek lines, warm oak wood accents, expansive glass windows letting in soft daylight, and hundreds of neatly organized bookshelves. Patrons are scattered, quietly browsing or reading in comfortable, designer seating areas. The atmosphere is serene, high-end, and deeply inviting. Professional architectural photography." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjqaNUPd8IWjTIepfW4t49Qx94zsM192Kcs3zd1DNcu1xL2lo-FwKuaaW7B9z9641JKjJuf33TpII__DJ28-J-f9CkIhzyJ4lC7P1WKmxvYQIpTWBzLdtX5Xa93B4VsauByfug03Q9DQSkmLQ_FVCh14_XvOilCqLI_XzdDAfeONoqAnAXz5tSYjCRsX8d6eba8h-xpe65vMd3X5r-SCb7DLo8AJKH_zq-uBRRmUdF68QDAQepRMS\')'}}></div>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
<div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-white text-4xl" style={{fontVariationSettings: '\'wght\' 200'}}>import_contacts</span>
</div>
</div>
</section>
{/* 8. CTA Banner */}
<section className="bg-midnight-ink py-24 px-margin-desktop text-center relative overflow-hidden">
{/* Decorative grid overlay */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
<h2 className="font-fraunces text-4xl md:text-5xl text-white mb-6">Join our community of readers.</h2>
<p className="font-body-lg text-body-lg text-white/70 mb-10 font-light">
                Discover your next great read, attend exclusive author events, and elevate your library.
            </p>
<button className="bg-antique-brass text-midnight-ink font-label-md text-label-md uppercase tracking-widest py-4 px-8 rounded-sm hover:bg-white hover:text-midnight-ink transition-all duration-400 flex items-center gap-3 group shadow-[0_0_20px_rgba(200,155,60,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" onClick={() => navigate('/shopbrowsebooks')}>
                Explore Books
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</section>
{/* 9. Footer */}
<Footer />
    </>
  );
}
