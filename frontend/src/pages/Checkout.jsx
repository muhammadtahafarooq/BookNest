import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate} from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
    const navigate = useNavigate();
  return (
    <>
      {/* Minimal Navbar */}
<nav className="w-full bg-surface-container-lowest ghost-border py-4 px-margin-desktop md:px-margin-desktop sticky top-0 z-50">
<div className="max-w-container-max-width mx-auto flex justify-between items-center">
<div className="font-display-lg text-display-lg text-primary tracking-tight">BookNest</div>
<Link className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-400 font-body-md text-body-md" to="/shoppingcartyourbookcollection">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Return to Cart
            </Link>
</div>
</nav>
{/* Main Content */}
<main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
{/* Progress Stepper */}
<div className="mb-12 flex justify-center items-center w-full max-w-3xl mx-auto hidden md:flex">
<div className="flex items-center w-full">
{/* Cart */}
<div className="flex flex-col items-center relative">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md z-10">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<span className="mt-2 font-headline-md text-body-sm text-primary">Cart</span>
</div>
<div className="flex-grow h-[1px] bg-primary mx-4"></div>
{/* Information */}
<div className="flex flex-col items-center relative">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md z-10 border-2 border-primary">2</div>
<span className="mt-2 font-headline-md text-body-sm text-primary font-bold">Information</span>
</div>
<div className="flex-grow h-[1px] bg-outline-variant mx-4"></div>
{/* Payment */}
<div className="flex flex-col items-center relative">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-label-md text-label-md z-10 border-2 border-outline-variant">3</div>
<span className="mt-2 font-headline-md text-body-sm text-outline">Payment</span>
</div>
<div className="flex-grow h-[1px] bg-outline-variant mx-4"></div>
{/* Confirmation */}
<div className="flex flex-col items-center relative">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-label-md text-label-md z-10 border-2 border-outline-variant">4</div>
<span className="mt-2 font-headline-md text-body-sm text-outline">Confirmation</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Forms */}
<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
{/* Customer Information */}
<section className="bg-surface-container-lowest rounded-xl p-6 custom-shadow ghost-border">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Customer Information</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="col-span-1 md:col-span-2">
<label className="block font-body-sm text-body-sm text-on-surface-variant mb-2">Full Name</label>
<input className="w-full rounded-lg border border-outline-variant p-3 font-body-md text-body-md input-focus transition-all duration-300" placeholder="Jane Doe" type="text" />
</div>
<div className="col-span-1">
<label className="block font-body-sm text-body-sm text-on-surface-variant mb-2">Email Address</label>
<input className="w-full rounded-lg border border-outline-variant p-3 font-body-md text-body-md input-focus transition-all duration-300" placeholder="jane@example.com" type="email" />
</div>
<div className="col-span-1">
<label className="block font-body-sm text-body-sm text-on-surface-variant mb-2">Phone Number</label>
<input className="w-full rounded-lg border border-outline-variant p-3 font-body-md text-body-md input-focus transition-all duration-300" placeholder="+1 (555) 000-0000" type="tel" />
</div>
</div>
</section>
{/* Delivery Address */}
<section className="bg-surface-container-lowest rounded-xl p-6 custom-shadow ghost-border">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-primary">Delivery Address</h2>
<button className="text-secondary font-label-sm text-label-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined text-[16px]">add</span> Add New
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="relative block cursor-pointer group">
<input defaultChecked={true} className="peer sr-only" name="address" type="radio" />
<div className="rounded-xl border-2 border-outline-variant p-4 peer-checked:border-secondary peer-checked:bg-surface transition-all duration-300 h-full flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-label-md font-bold text-primary">Home</span>
<span className="material-symbols-outlined text-secondary opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">123 Bookworm Lane<br />Apt 4B<br />New York, NY 10001</p>
</div>
</label>
<label className="relative block cursor-pointer group">
<input className="peer sr-only" name="address" type="radio" />
<div className="rounded-xl border-2 border-outline-variant p-4 peer-checked:border-secondary peer-checked:bg-surface transition-all duration-300 h-full flex flex-col hover:border-secondary/50">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-label-md font-bold text-primary">Office</span>
<span className="material-symbols-outlined text-secondary opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">456 Corporate Blvd<br />Suite 200<br />New York, NY 10002</p>
</div>
</label>
</div>
</section>
{/* Shipping Method */}
<section className="bg-surface-container-lowest rounded-xl p-6 custom-shadow ghost-border">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Shipping Method</h2>
<div className="flex flex-col gap-3">
<label className="relative flex items-center p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface transition-colors has-[:checked]:border-secondary has-[:checked]:bg-surface">
<input defaultChecked={true} className="peer h-5 w-5 text-secondary border-outline-variant focus:ring-secondary" name="shipping" type="radio" />
<div className="ml-4 flex-grow flex justify-between items-center">
<div>
<span className="block font-body-md text-body-md font-medium text-primary">Standard Shipping</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant mt-1">3-5 Business Days</span>
</div>
<span className="font-label-md text-label-md text-primary">Free</span>
</div>
</label>
<label className="relative flex items-center p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface transition-colors has-[:checked]:border-secondary has-[:checked]:bg-surface">
<input className="peer h-5 w-5 text-secondary border-outline-variant focus:ring-secondary" name="shipping" type="radio" />
<div className="ml-4 flex-grow flex justify-between items-center">
<div>
<span className="block font-body-md text-body-md font-medium text-primary">Express Shipping</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant mt-1">1-2 Business Days</span>
</div>
<span className="font-label-md text-label-md text-primary">$15.00</span>
</div>
</label>
</div>
</section>
{/* Payment */}
<section className="bg-surface-container-lowest rounded-xl p-6 custom-shadow ghost-border">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-primary">Payment Method</h2>
<div className="flex items-center gap-1 text-success-emerald font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">lock</span>
                            Secure SSL
                        </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<label className="cursor-pointer">
<input defaultChecked={true} className="peer sr-only" name="payment" type="radio" />
<div className="border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-2 peer-checked:border-secondary peer-checked:bg-surface hover:bg-surface-muted transition-all h-24">
<span className="material-symbols-outlined text-primary text-[24px]">credit_card</span>
<span className="font-label-sm text-label-sm text-center">Card</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="payment" type="radio" />
<div className="border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-2 peer-checked:border-secondary peer-checked:bg-surface hover:bg-surface-muted transition-all h-24">
<span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
<span className="font-label-sm text-label-sm text-center">COD</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="payment" type="radio" />
<div className="border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-2 peer-checked:border-secondary peer-checked:bg-surface hover:bg-surface-muted transition-all h-24">
<span className="material-symbols-outlined text-primary text-[24px]">account_balance_wallet</span>
<span className="font-label-sm text-label-sm text-center">JazzCash</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="payment" type="radio" />
<div className="border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-2 peer-checked:border-secondary peer-checked:bg-surface hover:bg-surface-muted transition-all h-24">
<span className="material-symbols-outlined text-primary text-[24px]">payments</span>
<span className="font-label-sm text-label-sm text-center">Easypaisa</span>
</div>
</label>
</div>
</section>
</div>
{/* Right Column: Order Summary */}
<div className="lg:col-span-5 xl:col-span-4">
<div className="bg-surface-container-lowest rounded-xl p-6 custom-shadow ghost-border sticky top-24">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Order Summary</h2>
{/* Items */}
<div className="flex flex-col gap-4 mb-6 pb-6 border-b border-outline-variant">
<div className="flex gap-4 items-center">
<div className="w-16 h-20 bg-surface-muted rounded overflow-hidden flex-shrink-0 custom-shadow border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A vintage book cover design with gold foil accents on dark blue leather, minimalist typography. The book is slightly floating, casting a soft shadow on a clean white background. High end product photography style, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfC6nob0yYcwWZrETA6X7Zaswt1Rv4LFBGunqHNMdIX17YGKURz0mCOSLln_7nKzmMyginUkWYBDgDDdWjvJgMBpWb0LnV_k5JKw6JT2afL92unwIVH1jcDmZd9a-SLHXi23Gi0gUPOLGCLct8jUCRJm3GFYxS18VEqZwEcs-FC8V4LsgM-0UxlmQgasOZKTw59js6tMDIDQv_jCHfHLAY1ywwLd2eTNXujGsGfBMLWspsxW9kmfPp" />
</div>
<div className="flex-grow">
<h3 className="font-body-md text-body-md font-medium text-primary line-clamp-2">The Design of Everyday Things</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Qty: 1</p>
</div>
<span className="font-label-md text-label-md text-primary">$24.99</span>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-20 bg-surface-muted rounded overflow-hidden flex-shrink-0 custom-shadow border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A modern book cover design featuring abstract geometric shapes in vibrant coral and teal on a crisp white background. The book is slightly floating, casting a soft shadow. High end product photography style, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKBlwiHAWWPvHe97nvlXyZpU2sZlZM2khm1hcPt-mK1WjruUMqaZ4wQEiM4UnwOEqzQhLDs_oTQ0Evi85Dt-KvmYiFJ4a_B2gGmoU7aY_zgxrjG5PHwFeJnHtpe6QCutCt8zkVfxnonm4DU6J0NgYuRfz2bfscEChyHYhfE4gqVEwpW1DiaYFrLZHVNDVOsDB6uTRjq9x1bO-HKY85504EKuYauklCi8TYgbTVC__peY-iZ4ezkT9m" />
</div>
<div className="flex-grow">
<h3 className="font-body-md text-body-md font-medium text-primary line-clamp-2">Thinking, Fast and Slow</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Qty: 1</p>
</div>
<span className="font-label-md text-label-md text-primary">$18.50</span>
</div>
</div>
{/* Totals */}
<div className="flex flex-col gap-3 mb-6 font-body-sm text-body-sm">
<div className="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span className="font-label-sm text-label-sm">$43.49</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Shipping</span>
<span className="font-label-sm text-label-sm text-primary">Free</span>
</div>
<div className="flex justify-between text-success-emerald">
<span>Discount (WELCOME10)</span>
<span className="font-label-sm text-label-sm">-$4.35</span>
</div>
</div>
<div className="flex justify-between items-center mb-8 pt-4 border-t border-outline-variant">
<span className="font-headline-md text-headline-md text-primary">Total</span>
<span className="font-display-lg text-headline-lg text-primary">$39.14</span>
</div>
{/* Action */}
<button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-label-md text-label-md hover:bg-secondary/90 transition-colors duration-400 flex justify-center items-center gap-2 custom-shadow" onClick={() => navigate('/checkout')}>
<span className="material-symbols-outlined text-[20px]">lock</span>
                        Place Order
                    </button>
<p className="text-center font-body-sm text-[12px] text-on-surface-variant mt-4">By placing your order, you agree to our Terms of Service.</p>
</div>
</div>
</div>
</main>
{/* Footer */}
<Footer />
    </>
  );
}
