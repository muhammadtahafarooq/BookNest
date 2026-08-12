import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function BestSellers() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar />
      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="mb-12">
          <p className="font-inter text-sm uppercase tracking-[0.3em] text-secondary mb-3">Best Sellers</p>
          <h1 className="font-fraunces text-4xl md:text-5xl font-bold text-midnight-ink leading-tight">
            Explore the most-loved books in the BookNest collection.
          </h1>
          <p className="max-w-2xl mt-4 font-body-md text-on-surface-variant">
            Popular choices among our readers, featuring high demand, strong reviews, and carefully curated classics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'The Quiet Wisdom',
              author: 'Sara T.',
              price: '$25.00',
              rank: '1',
              image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'The Light Between Worlds',
              author: 'Rania K.',
              price: '$21.50',
              rank: '2',
              image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Everyday Wonder',
              author: 'Hassan M.',
              price: '$17.95',
              rank: '3',
              image: 'https://images.unsplash.com/photo-1473862176787-7d131b1f4ee1?auto=format&fit=crop&w=900&q=80',
            },
          ].map((book) => (
            <article key={book.title} className="rounded-3xl border border-cloud-linen/80 bg-white/80 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-slate-binding">Rank {book.rank}</span>
                <span className="font-body-sm text-body-sm text-secondary">Top Seller</span>
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
