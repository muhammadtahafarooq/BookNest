import React from 'react';
import './BeginYourArchive.css';

export default function BeginYourArchive() {
  return (
    <>
      {/* TopNavBar (Suppressed due to Linear/Transactional intent, but instructions said "Use the TopNavBar". Resolving conflict: Instructions explicitly said "Layout: Use the TopNavBar (dark/Obsidian Ink)". Proceeding to render TopNavBar despite general shell rules, as specific prompt overrides general rules.) */}
<header className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-b border-outline-variant dark:border-outline shadow-md docked full-width top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto">
<div className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container">
                BookNest
            </div>
<nav className="hidden md:flex space-x-gutter">
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 font-label-md text-label-md" href="#">Catalog</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 font-label-md text-label-md" href="#">Collections</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 font-label-md text-label-md" href="#">Archives</a>
<a className="text-on-primary-fixed-variant dark:text-on-primary-fixed opacity-80 hover:text-on-primary hover:opacity-100 transition-opacity duration-200 font-label-md text-label-md" href="#">Curations</a>
</nav>
<div className="flex items-center space-x-lg">
<div className="hidden md:flex space-x-sm">
<button className="text-on-primary dark:text-on-primary-container hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
</button>
<button className="text-on-primary dark:text-on-primary-container hover:text-on-primary hover:opacity-100 transition-opacity duration-200 scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
</div>
<a className="font-label-md text-label-md text-on-primary dark:text-on-primary-container hover:opacity-80 transition-opacity" href="#">Sign In</a>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex items-center justify-center py-xxl px-margin-mobile md:px-margin-desktop">
<div className="page-reveal w-full max-w-[480px]">
{/* Registration Card */}
<div className="bg-soft-archive rounded-xl border border-stone-manuscript ambient-shadow-lvl1 p-lg md:p-xl transition-shadow duration-300 hover:ambient-shadow-lvl2">
<div className="text-center mb-xl">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-obsidian-ink mb-sm">Begin Your Archive</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Join our society of collectors and curators.</p>
</div>
<form className="space-y-lg">
<div>
<label className="block font-label-md text-label-md text-obsidian-ink mb-xs" htmlFor="fullName">Full Name</label>
<input className="w-full bg-soft-archive border border-stone-manuscript rounded-md px-md py-sm font-body-md text-body-md text-obsidian-ink focus:border-obsidian-ink focus:ring-0 transition-colors" id="fullName" placeholder="e.g. Elias Vance" type="text" />
</div>
<div>
<label className="block font-label-md text-label-md text-obsidian-ink mb-xs" htmlFor="email">Email Address</label>
<input className="w-full bg-soft-archive border border-stone-manuscript rounded-md px-md py-sm font-body-md text-body-md text-obsidian-ink focus:border-obsidian-ink focus:ring-0 transition-colors" id="email" placeholder="elias@example.com" type="email" />
</div>
<div>
<label className="block font-label-md text-label-md text-obsidian-ink mb-xs" htmlFor="password">Password</label>
<input className="w-full bg-soft-archive border border-stone-manuscript rounded-md px-md py-sm font-body-md text-body-md text-obsidian-ink focus:border-obsidian-ink focus:ring-0 transition-colors" id="password" placeholder="••••••••" type="password" />
</div>
<div>
<label className="block font-label-md text-label-md text-obsidian-ink mb-xs" htmlFor="confirmPassword">Confirm Password</label>
<input className="w-full bg-soft-archive border border-stone-manuscript rounded-md px-md py-sm font-body-md text-body-md text-obsidian-ink focus:border-obsidian-ink focus:ring-0 transition-colors" id="confirmPassword" placeholder="••••••••" type="password" />
</div>
<div className="flex items-start mt-md">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-stone-manuscript rounded bg-soft-archive focus:ring-3 focus:ring-obsidian-ink/20 text-obsidian-ink" id="terms" type="checkbox" />
</div>
<label className="ml-sm font-body-md text-body-md text-obsidian-ink opacity-90" htmlFor="terms">
                            I agree to the <a className="underline hover:text-burnished-brass transition-colors" href="#">Archival Terms &amp; Conditions</a>
</label>
</div>
<button className="w-full bg-obsidian-ink text-aged-ivory font-label-md text-label-md py-md rounded-md hover:bg-obsidian-ink/90 transition-colors mt-xl" type="button">
                        Register Account
                    </button>
</form>
<div className="mt-xl text-center border-t border-stone-manuscript pt-md">
<p className="font-body-md text-body-md text-stone-manuscript">
                        Already have an account? <a className="text-obsidian-ink font-semibold hover:text-burnished-brass transition-colors" href="#">Sign In</a>
</p>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-t border-outline-variant/30 full-width bottom-0 mt-auto">
<div className="w-full py-xxl px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto gap-y-lg">
<div className="font-headline-sm text-headline-sm font-bold text-on-primary text-center md:text-left">
                BookNest
            </div>
<nav className="flex flex-wrap justify-center gap-x-lg gap-y-sm">
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Archival Standards</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Conservation Policy</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">Terms of Access</a>
<a className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-70 hover:text-on-primary hover:opacity-100 transition-all underline-offset-4 hover:underline" href="#">The Vault</a>
</nav>
<div className="font-body-md text-body-md text-on-primary-fixed-variant opacity-70 text-center md:text-right">
                © 1892-2024 BookNest Archival Society. All rights reserved.
            </div>
</div>
</footer>
    </>
  );
}
