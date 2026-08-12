import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import './CreateAccountBooknest.css';

export default function CreateAccountBooknest() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!termsAccepted) {
      setStatus('error');
      setMessage('You must accept the terms of service to continue.');
      return;
    }

    if (password !== confirmPassword) {
      setStatus('error');
      setMessage('Passwords do not match.');
      return;
    }

    const nameParts = name.trim().split(' ');
    const firstName = nameParts.shift() || '';
    const lastName = nameParts.join(' ');

    setStatus('loading');
    const { data, error } = await register({
      firstName,
      lastName,
      email,
      password,
    });

    if (error) {
      setStatus('error');
      setMessage(error.message || 'Registration failed.');
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
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-margin-mobile md:p-margin-desktop min-h-screen">
        <div className="w-full max-w-container-max-width mx-auto flex flex-col md:flex-row bg-surface-container-lowest rounded-xl overflow-hidden" style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)' }}>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-surface-container-low">
            <div className="absolute inset-0 opacity-20 pointer-events-none" data-alt="A highly abstract, soft-focus 3D rendering of elegant floating books or a minimalist digital bookshelf. The scene is illuminated by soft, natural studio lighting creating a calm, intellectual atmosphere. The color palette consists of muted warm tones, off-whites, and subtle shadows, perfectly matching a premium, modern private library aesthetic. High resolution, elegant minimalist design." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAP-GsH5UVrDxyL1bl7doPZGJ0NVYFT0bplhQNUt6CX9bULojoNsjzvsQXWOipMZU5mMbJkRo-ETp5DPd87Y-n6HWV-B_kGQt1OtvWzF4MrRA6_sqR44MHY43Zq4vhHpd1r4G6zFTbhgX_bKRv-koI0g_k6GavVryYefzkkXncjgQktlJV4kmHg_lKagllcvelUZtPXIVjCK4HnWsHuD1UV3VnYSytdUqOxpsWxKSChWSrQ4TVizXF6\')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-surface-container-highest">
            <div className="max-w-md w-full mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Register</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Fill in your details to create an account.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Jane Austen"
                    required
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    required
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="password">Password</label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="confirm_password">Confirm Password</label>
                  <div className="relative">
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest"
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(event) => setTermsAccepted(event.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="terms">
                      I agree to the <Link className="text-secondary hover:underline" to="/shopbrowsebooks">Terms of Service</Link> and{' '}
                      <Link className="text-secondary hover:underline" to="/shopbrowsebooks">Privacy Policy</Link>.
                    </label>
                  </div>
                </div>
                {message ? (
                  <p className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-success'}`}>
                    {message}
                  </p>
                ) : null}
                <div className="pt-4">
                  <button
                    className="w-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md py-3 px-4 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary-fixed disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Creating account…' : 'Create Account'}
                  </button>
                </div>
              </form>
              <div className="mt-8 text-center">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Already have an account?{' '}
                  <Link className="font-medium text-primary hover:text-secondary transition-colors" to="/loginbooknestprivatelibrary">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
