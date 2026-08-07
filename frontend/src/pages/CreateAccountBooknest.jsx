import React from 'react';

import { Link } from 'react-router-dom';
import './CreateAccountBooknest.css';

export default function CreateAccountBooknest() {
  return (
    <>
      {/* TopNavBar (Suppressed due to Transactional Page Rule) */}
{/* The user is in a focused journey (Registration), so the global nav is hidden to prioritize the Canvas. */}
<header className="w-full px-margin-desktop py-4 flex justify-between items-center absolute top-0 z-50">
<Link className="text-headline-lg font-display-lg font-bold text-primary" to="/">BookNest</Link>
</header>
<main className="flex-grow flex items-center justify-center p-margin-mobile md:p-margin-desktop min-h-screen">
<div className="w-full max-w-container-max-width mx-auto flex flex-col md:flex-row bg-surface-container-lowest rounded-xl overflow-hidden" style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)'}}>
{/* Left Side: Editorial & Benefits */}
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-surface-container-low">
{/* Background visual element (subtle 3D floating book / digital shelf concept) */}
<div className="absolute inset-0 opacity-20 pointer-events-none" data-alt="A highly abstract, soft-focus 3D rendering of elegant floating books or a minimalist digital bookshelf. The scene is illuminated by soft, natural studio lighting creating a calm, intellectual atmosphere. The color palette consists of muted warm tones, off-whites, and subtle shadows, perfectly matching a premium, modern private library aesthetic. High resolution, elegant minimalist design." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAP-GsH5UVrDxyL1bl7doPZGJ0NVYFT0bplhQNUt6CX9bULojoNsjzvsQXWOipMZU5mMbJkRo-ETp5DPd87Y-n6HWV-B_kGQt1OtvWzF4MrRA6_sqR44MHY43Zq4vhHpd1r4G6zFTbhgX_bKRv-koI0g_k6GavVryYefzkkXncjgQktlJV4kmHg_lKagllcvelUZtPXIVjCK4HnWsHuD1UV3VnYSytdUqOxpsWxKSChWSrQ4TVizXF6\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="relative z-10">
<h1 className="font-display-lg text-display-lg text-primary mb-4 tracking-tight">Create your personal bookshelf</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">Join a community of readers and curate your own digital library.</p>
<ul className="space-y-6">
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center mt-1 mr-4">
<span className="material-symbols-outlined text-secondary text-sm">bookmark</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-[18px]">Save favorite books</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Keep a wish list of titles you want to read next.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center mt-1 mr-4">
<span className="material-symbols-outlined text-secondary text-sm">local_shipping</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-[18px]">Track your orders</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Monitor the delivery status of your physical copies.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center mt-1 mr-4">
<span className="material-symbols-outlined text-secondary text-sm">rate_review</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-[18px]">Review purchased books</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Share your thoughts and rate the books you've read.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center mt-1 mr-4">
<span className="material-symbols-outlined text-secondary text-sm">shelves</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-[18px]">Manage your personal shelf</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Organize your digital and physical collections effortlessly.</p>
</div>
</li>
</ul>
</div>
</div>
{/* Right Side: Registration Form */}
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-surface-container-highest">
<div className="max-w-md w-full mx-auto">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Register</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Fill in your details to create an account.</p>
<form className="space-y-5">
{/* Name Field */}
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="name">Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="name" name="name" placeholder="Jane Austen" type="text" />
</div>
{/* Email Field */}
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="email">Email Address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="email" name="email" placeholder="jane@example.com" type="email" />
</div>
{/* Phone Field */}
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="phone">Phone Number (Optional)</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel" />
</div>
{/* Password Field */}
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="password">Password</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="password" name="password" placeholder="••••••••" type="password" />
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
{/* Confirm Password Field */}
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="confirm_password">Confirm Password</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="confirm_password" name="confirm_password" placeholder="••••••••" type="password" />
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
{/* Terms Checkbox */}
<div className="flex items-start mt-4">
<div className="flex items-center h-5">
<input className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" id="terms" name="terms" type="checkbox" />
</div>
<div className="ml-3 text-sm">
<label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="terms">I agree to the <Link className="text-secondary hover:underline" to="/shopbrowsebooks">Terms of Service</Link> and <Link className="text-secondary hover:underline" to="/shopbrowsebooks">Privacy Policy</Link>.</label>
</div>
</div>
{/* Submit Button */}
<div className="pt-4">
{/* Golden Bookmark style requested, using tertiary-fixed as closest match in design system */}
<button className="w-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md py-3 px-4 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary-fixed" type="submit">
                                Create Account
                            </button>
</div>
</form>
{/* Secondary Link */}
<div className="mt-8 text-center">
<p className="font-body-sm text-body-sm text-on-surface-variant">
                            Already have an account? <Link className="font-medium text-primary hover:text-secondary transition-colors" to="/loginbooknestprivatelibrary">Login</Link>
</p>
</div>
</div>
</div>
</div>
</main>
{/* Footer (Suppressed due to Transactional Page Rule) */}
{/* The user is in a focused journey (Registration), so the footer is hidden to prioritize the Canvas. */}
    </>
  );
}
