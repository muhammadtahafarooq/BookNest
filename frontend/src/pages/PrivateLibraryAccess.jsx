import React from 'react';

import { Link } from 'react-router-dom';
import './PrivateLibraryAccess.css';

export default function PrivateLibraryAccess() {
  return (
    <>
      {/* TopNavBar: Suppressed Navigation Elements per instructions (Linear/Transactional intent) */}
<nav className="bg-obsidian w-full fixed top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-md max-w-[1280px] mx-auto border-b border-outline">
<div className="font-headline-sm text-headline-sm font-bold text-on-primary tracking-tight">
                BookNest
            </div>
{/* Navigation links suppressed for login */}
</div>
</nav>
{/* Main Content Area */}
<main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-xxl mt-xl">
<div className="w-full max-w-md bg-soft-archive rounded-[12px] p-lg md:p-xl shadow-[0_8px_30px_rgba(23,26,28,0.1)] border border-stone-manuscript login-card-fade-in">
<div className="text-center mb-lg">
<h1 className="font-headline-md text-headline-md text-obsidian mb-sm">Access Your Archive</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Sign in to your personal collection.</p>
</div>
<form className="space-y-md">
<div>
<label className="block font-label-sm text-label-sm text-obsidian mb-xs" htmlFor="email">Email Address</label>
<input className="w-full bg-soft-archive border border-stone-manuscript rounded text-obsidian font-body-md px-md py-sm focus:border-obsidian focus:ring-0 transition-colors" id="email" name="email" required={true} type="email" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-obsidian mb-xs" htmlFor="password">Password</label>
<input className="w-full bg-soft-archive border border-stone-manuscript rounded text-obsidian font-body-md px-md py-sm focus:border-obsidian focus:ring-0 transition-colors" id="password" name="password" required={true} type="password" />
</div>
<div className="flex items-center justify-between pt-sm">
<Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-obsidian transition-colors" to="/shopbrowsebooks">Forgot Password?</Link>
</div>
<button className="w-full bg-obsidian text-on-primary font-label-md text-label-md py-md rounded hover:opacity-90 transition-opacity" type="submit">
                    Sign In
                </button>
</form>
<div className="mt-lg text-center border-t border-stone-manuscript pt-md">
<p className="font-body-md text-body-md text-on-surface-variant">
                    New to BookNest? <Link className="text-obsidian font-bold hover:text-burnished-brass transition-colors" to="/dashboard/customerdashboardmypersonalbookshelf">Create Account</Link>
</p>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-obsidian w-full mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-xl max-w-[1280px] mx-auto border-t border-outline">
<div className="font-headline-md text-headline-md text-on-primary mb-md md:mb-0">
                BookNest
            </div>
<div className="flex flex-col md:flex-row gap-md items-center">
<p className="font-label-sm text-label-sm text-on-primary-fixed-variant">
                    © 2024 BookNest. The Private Collector's Digital Archive.
                </p>
<div className="flex gap-md font-label-sm text-label-sm">
<Link className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" to="/shopbrowsebooks">Terms of Service</Link>
<Link className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" to="/shopbrowsebooks">Privacy Policy</Link>
<Link className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" to="/shopbrowsebooks">Archival Standards</Link>
<Link className="text-on-primary-fixed-variant hover:text-on-primary transition-colors duration-200" to="/contactusbooknestsupport">Contact Us</Link>
</div>
</div>
</div>
</footer>
    </>
  );
}
