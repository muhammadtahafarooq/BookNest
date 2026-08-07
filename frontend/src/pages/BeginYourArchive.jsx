import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './BeginYourArchive.css';

export default function BeginYourArchive() {
    const navigate = useNavigate();
  return (
    <>
      {/* TopNavBar (Suppressed due to Linear/Transactional intent, but instructions said "Use the TopNavBar". Resolving conflict: Instructions explicitly said "Layout: Use the TopNavBar (dark/Obsidian Ink)". Proceeding to render TopNavBar despite general shell rules, as specific prompt overrides general rules.) */}
{/* <Navbar /> */}
<Navbar />
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
                            I agree to the <Link className="underline hover:text-burnished-brass transition-colors" to="/shopbrowsebooks">Archival Terms &amp; Conditions</Link>
</label>
</div>
<button className="w-full bg-obsidian-ink text-aged-ivory font-label-md text-label-md py-md rounded-md hover:bg-obsidian-ink/90 transition-colors mt-xl" type="button" onClick={() => navigate('/createaccountbooknest')}>
                        Register Account
                    </button>
</form>
<div className="mt-xl text-center border-t border-stone-manuscript pt-md">
<p className="font-body-md text-body-md text-stone-manuscript">
                        Already have an account? <Link className="text-obsidian-ink font-semibold hover:text-burnished-brass transition-colors" to="/loginbooknestprivatelibrary">Sign In</Link>
</p>
</div>
</div>
</div>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
