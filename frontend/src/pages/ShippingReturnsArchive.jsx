import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import './ShippingReturnsArchive.css';

export default function ShippingReturnsArchive() {
  
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar */}
{/* <Navbar /> */}
<Navbar />
{/* Main Content */}
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl space-y-xxl">
{/* Hero Section */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center reveal">
<div className="lg:col-span-6 space-y-8">
<h1 className="font-display-lg text-display-lg font-headline-lg-mobile text-headline-lg-mobile text-primary">
                    From Our Shelf To Your Door
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                    Reliable delivery options designed for readers across Pakistan. We treat every parcel as a valuable addition to your personal library.
                </p>
<div className="flex flex-wrap gap-4 items-center">
  <Link className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300" to="/contact">
    Contact Support
  </Link>
  <span className="inline-flex items-center rounded-full bg-surface-container py-2 px-4 text-on-surface-variant text-sm border border-outline-variant">
    Trusted same-day packing and premium archival shipping
  </span>
</div>
</div>
<div className="lg:col-span-6 grid place-items-center">
  <div className="relative w-full max-w-[560px] overflow-hidden rounded-[2rem] shadow-2xl">
    <img
      className="w-full h-[400px] object-cover"
      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
      alt="Premium book shipment prepared for delivery"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
    <div className="absolute left-6 bottom-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 p-5 max-w-sm">
      <p className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-2">Premium Care</p>
      <h2 className="font-fraunces text-2xl text-midnight-ink font-semibold">Carefully packed for every journey.</h2>
    </div>
  </div>
</div>
</section>
{/* Shipping Information Bento Grid */}
<section className="space-y-lg reveal">
<h2 className="font-headline-md text-headline-md text-primary border-b border-stone pb-sm">Shipping Information</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
{/* Process */}
<div className="luxury-card rounded-xl p-lg space-y-md">
<div className="h-12 w-12 rounded-full bg-forest text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Delivery Process</h3>
<p className="text-on-surface-variant">
                        Once an order is placed, our archivists carefully select, inspect, and package your volumes. Dispatch typically occurs within 24 hours of order confirmation.
                    </p>
</div>
{/* Timelines */}
<div className="luxury-card rounded-xl p-lg space-y-md">
<div className="h-12 w-12 rounded-full bg-forest text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Estimated Timelines</h3>
<p className="text-on-surface-variant">
                        Delivery times vary by region. Major metropolitan areas typically receive parcels within 2-3 business days, while regional areas may require 4-7 business days.
                    </p>
</div>
{/* Coverage */}
<div className="luxury-card rounded-xl p-lg space-y-md">
<div className="h-12 w-12 rounded-full bg-forest text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="map">map</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Areas Covered</h3>
<p className="text-on-surface-variant">
                        We currently ship to all major cities and select regional centers across Pakistan. Remote deliveries may be subject to specialized courier arrangements.
                    </p>
</div>
</div>
</section>
{/* Delivery Methods */}
<section className="space-y-lg reveal">
<h2 className="font-headline-md text-headline-md text-primary border-b border-stone pb-sm">Delivery Methods</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/* Standard */}
<div className="luxury-card rounded-xl p-xl flex flex-col justify-between h-full border-t-4 border-t-stone">
<div className="space-y-md">
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-headline-md text-primary">Standard Shipping</h3>
<span className="font-label-md text-label-md bg-surface-container py-1 px-3 rounded-full text-on-surface-variant">Rs. 250</span>
</div>
<ul className="space-y-sm text-on-surface-variant mt-lg">
<li className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-brass" data-icon="check_circle" data-weight="fill">check_circle</span>
                                3-5 Business Days
                            </li>
<li className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-brass" data-icon="check_circle" data-weight="fill">check_circle</span>
                                Full Tracking Available
                            </li>
<li className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-brass" data-icon="check_circle" data-weight="fill">check_circle</span>
                                Secure Packaging
                            </li>
</ul>
</div>
</div>
{/* Express */}
<div className="luxury-card rounded-xl p-xl flex flex-col justify-between h-full border-t-4 border-t-[#A67C42]">
<div className="space-y-md">
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-headline-md text-primary">Express Shipping</h3>
<span className="font-label-md text-label-md bg-forest text-on-primary py-1 px-3 rounded-full">Rs. 500</span>
</div>
<ul className="space-y-sm text-on-surface-variant mt-lg">
<li className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-brass" data-icon="check_circle" data-weight="fill">check_circle</span>
                                1-2 Business Days
                            </li>
<li className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-brass" data-icon="check_circle" data-weight="fill">check_circle</span>
                                Priority Dispatch
                            </li>
<li className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-brass" data-icon="check_circle" data-weight="fill">check_circle</span>
                                Premium Archival Packaging
                            </li>
</ul>
</div>
</div>
</div>
</section>
{/* Return Policy Editorial */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter reveal">
<div className="lg:col-span-4">
<h2 className="font-headline-md text-headline-md text-primary sticky top-24">Return Policy</h2>
</div>
<div className="lg:col-span-8 space-y-xl luxury-card rounded-xl p-xl">
<div className="space-y-md">
<h3 className="font-headline-sm text-headline-sm text-primary">Conditions of Return</h3>
<p className="text-on-surface-variant leading-relaxed">
                        We accept returns within 14 days of delivery. To be eligible, items must be unused, in the same condition that you received them, and in their original packaging. Rare and antique editions are subject to strict condition verification upon return.
                    </p>
</div>
<div className="space-y-md">
<h3 className="font-headline-sm text-headline-sm text-primary">Non-Returnable Items</h3>
<p className="text-on-surface-variant leading-relaxed">
                        Certain goods are exempt from being returned, including gift cards, personalized editions, and digital downloads. Please review your order carefully before finalizing these purchases.
                    </p>
</div>
</div>
</section>
{/* Refund Process Timeline */}
<section className="space-y-lg reveal">
<h2 className="font-headline-md text-headline-md text-primary border-b border-stone pb-sm text-center">The Refund Process</h2>
<div className="max-w-3xl mx-auto py-lg">
<div className="relative pl-8 md:pl-0">
{/* Vertical Line (Mobile) */}
<div className="absolute left-[19px] top-0 bottom-0 timeline-line md:hidden"></div>
<div className="space-y-xl">
{/* Step 1 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center gap-md md:gap-xl">
<div className="absolute left-[-28px] md:static w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#A67C42] flex items-center justify-center font-headline-sm text-headline-sm text-brass z-10 shrink-0">1</div>
<div className="luxury-card rounded-lg p-md flex-grow w-full md:w-auto">
<h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Request</h4>
<p className="text-on-surface-variant text-sm">Initiate a return request via your account dashboard or by contacting our support desk.</p>
</div>
</div>
{/* Step 2 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center gap-md md:gap-xl">
<div className="absolute left-[-28px] md:static w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#A67C42] flex items-center justify-center font-headline-sm text-headline-sm text-brass z-10 shrink-0">2</div>
<div className="luxury-card rounded-lg p-md flex-grow w-full md:w-auto">
<h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Inspection</h4>
<p className="text-on-surface-variant text-sm">Once received at our facility, our archivists will inspect the item to ensure it meets return criteria.</p>
</div>
</div>
{/* Step 3 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center gap-md md:gap-xl">
<div className="absolute left-[-28px] md:static w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#A67C42] flex items-center justify-center font-headline-sm text-headline-sm text-brass z-10 shrink-0">3</div>
<div className="luxury-card rounded-lg p-md flex-grow w-full md:w-auto">
<h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Confirmation</h4>
<p className="text-on-surface-variant text-sm">You will receive an email notifying you of the approval or rejection of your refund.</p>
</div>
</div>
{/* Step 4 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center gap-md md:gap-xl">
<div className="absolute left-[-28px] md:static w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#A67C42] flex items-center justify-center font-headline-sm text-headline-sm text-brass z-10 shrink-0">4</div>
<div className="luxury-card rounded-lg p-md flex-grow w-full md:w-auto">
<h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Refund</h4>
<p className="text-on-surface-variant text-sm">Approved refunds are processed to your original method of payment within 5-7 business days.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Support CTA */}
<section className="reveal pb-xl">
<div className="bg-forest text-on-primary rounded-xl p-xl md:p-xxl flex flex-col md:flex-row items-center justify-between gap-lg shadow-lg relative overflow-hidden">
{/* Abstract decorative element */}
<div className="absolute -right-20 -top-20 opacity-10">
<span className="material-symbols-outlined text-[200px]" data-icon="menu_book">menu_book</span>
</div>
<div className="space-y-sm z-10 max-w-lg">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-primary">Need Help With An Order?</h2>
<p className="font-body-lg text-body-lg opacity-80">Our dedicated support team is available Monday through Friday to assist with shipping inquiries and return processing.</p>
</div>
<button className="btn-primary font-label-md text-label-md py-3 px-8 rounded-full shadow-md hover:shadow-lg z-10 whitespace-nowrap">
                    Contact Support
                </button>
</div>
</section>
</main>
{/* Footer */}
<Footer />
{/* TODO manual conversion needed - inline script removed, see warnings */}
    </>
  );
}
