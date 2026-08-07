import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './ConnectWithTheArchive.css';

export default function ConnectWithTheArchive() {
  
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up-element').forEach(el => {
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
      {/* TopNavBar */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content */}
<main className="flex-grow w-full flex flex-col items-center">
{/* Hero Section (Asymmetric Layout) */}
<section className="w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop py-xxl grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
{/* Left Text Content (8 columns) */}
<div className="md:col-span-7 flex flex-col gap-lg fade-up-element relative z-10">
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Let's Talk About Books</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Have questions about orders, rare editions, or curating your collections? Our archivist team is here to help you navigate our library.
                </p>
<div className="w-16 h-px bg-outline-variant mt-sm"></div>
</div>
{/* Right Visual Content (4 columns) - Three.js Scene */}
<div className="md:col-span-5 h-[400px] w-full relative fade-up-element" style={{transitionDelay: '0.2s'}}>
{/* We use the required tag for animations */}

</div>
</section>
{/* Contact Cards & Form Section */}
<section className="w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop pb-xxl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Contact Information Blocks (Left Sidebar - 4 columns) */}
<div className="lg:col-span-4 flex flex-col gap-lg">
{/* Card 1: Phone */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-level-1 hover:shadow-level-2 transition-shadow duration-300 flex items-start gap-md fade-up-element" style={{transitionDelay: '0.1s'}}>
<div className="text-primary mt-xs">
<span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '\'wght\' 200'}}>call</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Phone</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xs">Mon-Fri, 9am to 6pm EST</p>
<Link className="font-label-md text-label-md text-primary hover:text-secondary-fixed transition-colors" to="tel:+18005550199">+1 (800) 555-0199</Link>
</div>
</div>
{/* Card 2: Email */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-level-1 hover:shadow-level-2 transition-shadow duration-300 flex items-start gap-md fade-up-element" style={{transitionDelay: '0.2s'}}>
<div className="text-primary mt-xs">
<span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '\'wght\' 200'}}>mail</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Email</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xs">We typically reply within 24 hours.</p>
<Link className="font-label-md text-label-md text-primary hover:text-secondary-fixed transition-colors" to="mailto:archives@booknest.com">archives@booknest.com</Link>
</div>
</div>
{/* Card 3: Address */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-level-1 hover:shadow-level-2 transition-shadow duration-300 flex items-start gap-md fade-up-element" style={{transitionDelay: '0.3s'}}>
<div className="text-primary mt-xs">
<span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '\'wght\' 200'}}>location_on</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Archive Desk</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            1204 Manuscript Lane<br />
                            Library District<br />
                            Boston, MA 02108
                        </p>
</div>
</div>
</div>
{/* Contact Form (Main Area - 8 columns) */}
<div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg md:p-xl shadow-level-1 fade-up-element" style={{transitionDelay: '0.4s'}}>
<div className="mb-xl">
<h2 className="font-headline-md text-headline-md text-primary mb-sm">Send a Dispatch</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Fill out the form below and an archivist will review your inquiry.</p>
</div>
<form action="#" className="flex flex-col gap-lg" method="POST">
{/* Grid for Name and Email */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-primary" htmlFor="name">Full Name</label>
<input className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface archive-input transition-colors placeholder:text-outline-variant focus:ring-0 focus:border-primary" id="name" name="name" required={true} type="text" />
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-primary" htmlFor="email">Email Address</label>
<input className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface archive-input transition-colors placeholder:text-outline-variant focus:ring-0 focus:border-primary" id="email" name="email" required={true} type="email" />
</div>
</div>
{/* Message Field */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-primary" htmlFor="message">Your Message</label>
<textarea className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface archive-input transition-colors resize-none placeholder:text-outline-variant focus:ring-0 focus:border-primary" id="message" name="message" required={true} rows="6"></textarea>
</div>
{/* Submit Button */}
<div className="mt-sm flex justify-end">
<button className="bg-tertiary-fixed-dim text-primary font-label-md text-label-md font-bold px-xl py-md rounded-DEFAULT shadow-sm hover:opacity-90 transition-opacity flex items-center gap-sm" type="submit">
                            Send Message
                            <span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</form>
</div>
</section>
{/* FAQ Preview */}
<section className="w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop pb-xxl text-center fade-up-element" style={{transitionDelay: '0.5s'}}>
<div className="w-24 h-px bg-outline-variant mx-auto mb-lg"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                Curious about something else? 
                <Link className="text-primary font-bold border-b border-primary hover:text-secondary-fixed hover:border-secondary-fixed transition-colors" to="/faqbooknestsupport">Visit our Archive FAQs.</Link>
</p>
</section>
</main>
{/* Footer */}
<Footer />
{/* Intersection Observer for Fade-Up Animations */}
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
