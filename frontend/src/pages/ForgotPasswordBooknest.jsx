import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { requestPasswordReset } from '../services/authService';

export default function ForgotPasswordBooknest() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const { data, error } = await requestPasswordReset(email);
    if (error) {
      setStatus('error');
      setMessage(error.message || 'Unable to send reset instructions.');
      return;
    }

    setStatus('success');
    setMessage(data?.message || 'If that email exists, password reset instructions have been sent.');
  };

  return (
    <main className="flex-grow flex min-h-screen flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-12">
      <div className="w-full max-w-md rounded-xl bg-surface-container-low p-8 shadow-soft-ambient border border-outline-variant">
        <div className="mb-8 text-center">
          <h1 className="font-headline-lg text-headline-lg text-obsidian mb-2">Reset your password</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Enter the email address for your account and we’ll send you reset instructions.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-label-sm text-label-sm text-obsidian mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-lg border border-outline-variant bg-surface-container-highest px-4 py-3 text-body-md text-obsidian focus:border-obsidian focus:outline-none focus:ring-2 focus:ring-obsidian/20"
              placeholder="reader@booknest.com"
            />
          </div>
          {message ? (
            <p className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-success'}`}>
              {message}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-lg bg-obsidian px-4 py-3 text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : 'Send reset link'}
          </button>
        </form>
        <div className="mt-6 text-center text-body-sm text-on-surface-variant">
          <p>
            Remembered it?{' '}
            <Link className="text-obsidian font-semibold hover:text-secondary" to="/loginbooknestprivatelibrary">
              Back to login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
