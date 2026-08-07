import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './PrivacyPolicyArchive.css';

export default function PrivacyPolicyArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar (Suppressed for utility/legal page as per shell logic, but user requested it. 
         Following JSON instructions for style injection while acknowledging the rule conflict.
         User explicitly requested "Use the established dark Obsidian Ink navbar". I will render it. */}
{/* <Navbar /> */}
<Navbar />
<main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
{/* Header Section */}
<div className="mb-xl md:mb-xxl text-center fade-in-header">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#171A1C] mb-sm">Privacy Policy</h1>
<p className="font-label-md text-label-md text-stone-manuscript uppercase tracking-wider">Last Updated: October 2024</p>
</div>
{/* Content Layout (12-column grid structure) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Main Content Area */}
<div className="md:col-span-8 md:col-start-3 space-y-lg md:space-y-xl">
{/* Introduction Card */}
<section className="bg-soft-archive rounded-xl border border-stone-manuscript ambient-shadow-1 p-lg md:p-xl">
<h2 className="font-headline-sm text-headline-sm mb-md text-[#171A1C]">Introduction</h2>
<div className="space-y-md font-body-lg text-body-lg text-on-surface-variant">
<p>At BookNest, we believe that reading is an intimate act. Just as a librarian respects the quiet contemplation of a patron, we respect the sanctity of your digital reading life. This document outlines how we curate, protect, and occasionally reference the data required to build your personal digital archive.</p>
<p>Our commitment is simple: your data serves to enhance your library experience, never to exploit it. Trust is the foundation of our archive.</p>
</div>
</section>
{/* Data Collection Card */}
<section className="bg-soft-archive rounded-xl border border-stone-manuscript ambient-shadow-1 p-lg md:p-xl">
<h2 className="font-headline-sm text-headline-sm mb-md text-[#171A1C]">Data Collection</h2>
<div className="space-y-md font-body-md text-body-md text-on-surface-variant">
<p>To provide you with a seamless and personalized experience, we collect specific types of information:</p>
<ul className="list-disc pl-lg space-y-sm">
<li><strong className="text-on-background font-label-md">Account Details:</strong> Information provided during registration, including your name, email address, and preferences.</li>
<li><strong className="text-on-background font-label-md">Reading History:</strong> Books you have browsed, purchased, or added to your wishlists.</li>
<li><strong className="text-on-background font-label-md">Device Information:</strong> Technical data such as IP address, browser type, and operating system used to access the archive.</li>
</ul>
</div>
</section>
</div>
</div>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
