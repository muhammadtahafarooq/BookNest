import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import './LoginBooknestPrivateLibrary.css';

export default function LoginBooknestPrivateLibrary() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const { data, error } = await login({ email, password });
    if (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Login failed.');
      return;
    }

    const role = data?.user?.role || 'CUSTOMER';
    if (role === 'ADMIN') {
      navigate('/admin/admindashboardbooknestcommandcenter');
    } else {
      navigate('/dashboard/customerdashboardmypersonalbookshelf');
    }
  };

  return (
    <>
      <main className="flex-grow flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-12">
        <div className="text-center mb-8 max-w-md w-full">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cloud-linen mb-6 shadow-soft-ambient">
            <span className="material-symbols-outlined text-4xl text-midnight-ink" style={{ fontVariationSettings: "'FILL' 1" }}>
              book_4
            </span>
          </div>
          <h1 className="font-fraunces text-fraunces-heading text-midnight-ink mb-2">Welcome back to your bookshelf</h1>
          <p className="font-body-md text-on-surface-variant">Sign in to access your curated collection.</p>
        </div>
        <div className="bg-cloud-linen rounded-custom-card shadow-soft-ambient w-full max-w-md p-8 md:p-10 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-label-md text-label-md text-midnight-ink mb-2" htmlFor="email">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-on-surface-variant">mail</span>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="reader@booknest.com"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-white text-midnight-ink font-body-md focus:outline-none focus:ring-1 focus:ring-midnight-ink focus:border-midnight-ink transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-midnight-ink mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  required
                  className="block w-full pl-10 pr-10 py-3 border border-outline-variant rounded bg-white text-midnight-ink font-body-md focus:outline-none focus:ring-1 focus:ring-midnight-ink focus:border-midnight-ink transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button className="text-on-surface-variant hover:text-midnight-ink focus:outline-none transition-colors" type="button">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-outline-variant text-antique-brass focus:ring-antique-brass bg-white transition-colors cursor-pointer"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label className="ml-2 block font-body-sm text-body-sm text-midnight-ink cursor-pointer" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link className="font-body-sm text-body-sm text-midnight-ink hover:text-antique-brass transition-colors duration-300" to="/forgotpasswordbooknest">
                  Forgot password?
                </Link>
              </div>
            </div>
            {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
            <div className="pt-2">
              <button
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded bg-antique-brass font-label-md text-label-md text-midnight-ink shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-antique-brass transition-all duration-300 uppercase tracking-widest"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Signing in…' : 'Login'}
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Don't have an account?{' '}
              <Link
                className="font-body-sm text-body-sm font-semibold text-midnight-ink hover:text-antique-brass transition-colors duration-300 border-b border-transparent hover:border-antique-brass pb-0.5"
                to="/createaccountbooknest"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
