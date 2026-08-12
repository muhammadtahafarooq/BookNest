import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function NewArrivals() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar />
      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="mb-12">
          <p className="font-inter text-sm uppercase tracking-[0.3em] text-secondary mb-3">New Arrivals</p>
          <h1 className="font-fraunces text-4xl md:text-5xl font-bold text-midnight-ink leading-tight">
            Discover the latest additions to the BookNest collection.
          </h1>
          <p className="max-w-2xl mt-4 font-body-md text-on-surface-variant">
            Fresh titles, bestselling newcomers, and editor-picked releases ready to inspire your next reading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'The Secret Garden of Wisdom',
              author: 'Ayesha Z.',
              price: '$22.00',
              label: 'New Release',
              image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Sufism & the Soul',
              author: 'Omar R.',
              price: '$19.50',
              label: 'Just In',
              image: 'https://images.unsplash.com/photo-1496104679561-38a33f2e37ce?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Mindful Living Practices',
              author: 'Noor H.',
              price: '$18.75',
              label: 'Staff Pick',
              image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
            },
          ].map((book) => (
            <article key={book.title} className="rounded-3xl border border-cloud-linen/80 bg-white/80 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-slate-binding">{book.label}</span>
                <span className="font-body-sm text-body-sm text-secondary">New</span>
              </div>
              <div className="mb-6 h-72 overflow-hidden rounded-3xl bg-slate-binding/5 flex items-center justify-center">
                <img className="w-full h-full object-cover" src={book.image} alt={`${book.title} cover`} loading="lazy" />
              </div>
              <h2 className="font-fraunces text-2xl font-semibold text-midnight-ink mb-2">{book.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">by {book.author}</p>
              <div className="flex items-center justify-between gap-4">
                <span className="font-label-md text-label-md font-bold text-library-forest">{book.price}</span>
                <Link to="/premiumbookdetails" className="text-secondary-fixed font-semibold hover:text-secondary transition-colors">
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
