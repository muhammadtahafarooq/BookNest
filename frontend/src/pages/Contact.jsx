import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import axios from 'axios';
import './Contact.css';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/+$/, '');
const SUBJECT_OPTIONS = ['general', 'order', 'returns', 'press'];

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const sanitizeText = (value) => value.trim();

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'general',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [feedbackMsg, setFeedbackMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setFeedbackMsg('');

        const firstName = sanitizeText(formData.firstName);
        const lastName = sanitizeText(formData.lastName);
        const email = sanitizeText(formData.email);
        const subject = sanitizeText(formData.subject);
        const message = sanitizeText(formData.message);

        if (!firstName || !lastName || !email || !message) {
            setStatus('error');
            setFeedbackMsg('Please complete all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            setStatus('error');
            setFeedbackMsg('Please enter a valid email address.');
            return;
        }

        if (!SUBJECT_OPTIONS.includes(subject)) {
            setStatus('error');
            setFeedbackMsg('Please select a valid subject.');
            return;
        }

        if (message.length > 2000) {
            setStatus('error');
            setFeedbackMsg('Message is too long. Please keep it under 2000 characters.');
            return;
        }

        try {
            const payload = {
                name: `${firstName} ${lastName}`.trim(),
                email,
                subject,
                message,
            };

            await axios.post(`${API_URL}/contact-messages`, payload, {
                headers: { 'Content-Type': 'application/json' },
            });

            setStatus('success');
            setFeedbackMsg('Your message has been sent successfully. We will get back to you soon!');
            setFormData({ firstName: '', lastName: '', email: '', subject: 'general', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setFeedbackMsg('There was an error sending your message. Please try again.');
        }
    };

    return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* CONTACT HERO */}
        <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-80"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#ffffffde] via-[#f7f1e7dd] to-[#f7f1e7ee]"></div>
          <div className="relative z-20 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#102A43] px-4 py-2 text-sm font-semibold text-white uppercase tracking-[0.3em]">Contact BookNest</span>
                <div className="space-y-5 max-w-2xl">
                  <h1 className="font-fraunces text-5xl md:text-6xl font-semibold text-[#102A43] tracking-tight">From your first question to final delivery, we’ve got your back.</h1>
                  <p className="font-body-lg text-lg md:text-xl text-[#102A43]/75 leading-relaxed">Get fast, friendly support for orders, shipping, returns, and reading recommendations. Our team is ready to help you navigate every chapter of your BookNest experience.</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
                  <a href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-[#102A43] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#102A43]/15 hover:bg-[#0e243c] transition-all duration-300">Contact Support</a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#102A43]/15 bg-white/90 px-4 py-3 text-sm text-[#102A43]">Available Mon–Fri · 9am–6pm PKT</span>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-white/80 shadow-[0_25px_80px_rgba(16,42,67,0.12)] bg-white/90 backdrop-blur-xl">
                <img className="w-full h-full min-h-[420px] object-cover" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80" alt="Support team helping a customer" />
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-container-max-width mx-auto px-margin-desktop -mt-16 relative z-20 mb-24">
          {/* CONTACT INFORMATION CARDS (Bento Grid Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <div className="bg-[#F9F8F6] rounded-xl p-8 shadow-ambient border border-white/40 glass-panel transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#F0EDEF] flex items-center justify-center mb-6 text-[#102A43]">
                <span className="material-symbols-outlined" data-icon="call">call</span>
              </div>
              <h3 className="font-fraunces text-xl font-medium text-[#102A43] mb-2">Phone</h3>
              <p className="font-body-md text-[#102A43]/70 mb-4">Mon-Fri from 9am to 6pm PKT.</p>
              <a className="font-label-md text-label-md text-[#C89B3C] hover:text-[#102A43] transition-colors" href="tel:+923001234567">+92 300 123 4567</a>
            </div>
            {/* Email */}
            <div className="bg-[#F9F8F6] rounded-xl p-8 shadow-ambient border border-white/40 glass-panel transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#F0EDEF] flex items-center justify-center mb-6 text-[#102A43]">
                <span className="material-symbols-outlined" data-icon="mail">mail</span>
              </div>
              <h3 className="font-fraunces text-xl font-medium text-[#102A43] mb-2">Email</h3>
              <p className="font-body-md text-[#102A43]/70 mb-4">Our friendly team is here to help.</p>
              <a className="font-label-md text-label-md text-[#C89B3C] hover:text-[#102A43] transition-colors" href="mailto:hello@booknest.pk">hello@booknest.pk</a>
            </div>
            {/* Location */}
            <div className="bg-[#F9F8F6] rounded-xl p-8 shadow-ambient border border-white/40 glass-panel transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#F0EDEF] flex items-center justify-center mb-6 text-[#102A43]">
                <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
              </div>
              <h3 className="font-fraunces text-xl font-medium text-[#102A43] mb-2">Office</h3>
              <p className="font-body-md text-[#102A43]/70 mb-4">Come say hello at our HQ.</p>
              <address className="font-label-md text-label-md text-[#C89B3C] not-italic">
                100 Literary Lane<br />
                Gulberg III, Lahore<br />
                Pakistan
              </address>
            </div>
          </div>
          {/* Main Content Area: Form & FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* CONTACT FORM */}
            <div id="contact-form" className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_24px_80px_rgba(16,42,67,0.08)] border border-[#E2E8F0]">
              <h2 className="font-fraunces text-3xl font-semibold text-[#102A43] mb-4">Send us a message</h2>
              <p className="font-body-sm text-body-sm text-[#102A43]/75 mb-8">Share your request and we’ll respond within one business day. For instant order updates, include your order number.</p>
              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl">
                  {feedbackMsg}
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl">
                  {feedbackMsg}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="first-name">First name</label>
                    <input className="w-full rounded-3xl border border-[#D8D4DA] bg-[#FBF9F6] px-4 py-3 font-body-md text-[#102A43] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/10 transition-all duration-300 outline-none" id="first-name" name="firstName" placeholder="Jane" type="text" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="last-name">Last name</label>
                    <input className="w-full rounded-3xl border border-[#D8D4DA] bg-[#FBF9F6] px-4 py-3 font-body-md text-[#102A43] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/10 transition-all duration-300 outline-none" id="last-name" name="lastName" placeholder="Doe" type="text" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="email">Email address</label>
                  <input className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none" id="email" name="email" placeholder="jane@example.com" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="subject">Subject</label>
                  <select className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none" id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="returns">Returns &amp; Exchanges</option>
                    <option value="press">Press &amp; Media</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-[#102A43] mb-2" htmlFor="message">Message</label>
                  <textarea className="w-full rounded-lg border-[#E2E8F0] bg-white px-4 py-3 font-body-md text-[#102A43] focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/20 transition-all duration-300 outline-none resize-none" id="message" name="message" placeholder="How can we help you today?" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="pt-2">
                  <button disabled={status === 'loading'} className="w-full sm:w-auto px-10 py-4 bg-[#102A43] hover:bg-[#0e243c] disabled:opacity-50 text-white font-label-md text-label-md rounded-full transition-all duration-300 shadow-xl shadow-[#102A43]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#102A43] flex items-center justify-center space-x-2" type="submit">
                    <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    {status !== 'loading' && <span className="material-symbols-outlined text-sm" data-icon="send">send</span>}
                  </button>
                </div>
              </form>
            </div>
            {/* FAQ SHORTCUT SECTION */}
            <div className="lg:col-span-5 flex flex-col space-y-10 mt-10 lg:mt-0">
              <div>
                <h2 className="font-fraunces text-2xl font-medium text-[#102A43] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="group border-b border-[#E2E8F0] pb-4">
                    <h4 className="font-label-md text-label-md text-[#102A43] mb-2 group-hover:text-[#C89B3C] transition-colors flex items-center justify-between cursor-pointer">
                      How can I track my order?
                      <span className="material-symbols-outlined text-sm text-[#76777d]" data-icon="arrow_forward">arrow_forward</span>
                    </h4>
                    <p className="font-body-sm text-[#102A43]/70">Once your order ships, you'll receive an email with a tracking link allowing you to follow its journey to your doorstep.</p>
                  </div>
                  <div className="group border-b border-[#E2E8F0] pb-4">
                    <h4 className="font-label-md text-label-md text-[#102A43] mb-2 group-hover:text-[#C89B3C] transition-colors flex items-center justify-between cursor-pointer">
                      What is your return policy?
                      <span className="material-symbols-outlined text-sm text-[#76777d]" data-icon="arrow_forward">arrow_forward</span>
                    </h4>
                    <p className="font-body-sm text-[#102A43]/70">We accept returns on unread books in original condition within 14 days of delivery for a full refund or store credit.</p>
                  </div>
                  <div className="group border-b border-[#E2E8F0] pb-4">
                    <h4 className="font-label-md text-label-md text-[#102A43] mb-2 group-hover:text-[#C89B3C] transition-colors flex items-center justify-between cursor-pointer">
                      Do you ship internationally?
                      <span className="material-symbols-outlined text-sm text-[#76777d]" data-icon="arrow_forward">arrow_forward</span>
                    </h4>
                    <p className="font-body-sm text-[#102A43]/70">Currently, we only ship within Pakistan, but we are looking to expand our reach in the near future.</p>
                  </div>
                </div>
                <Link className="inline-flex items-center space-x-2 mt-6 font-label-sm text-label-sm text-[#C89B3C] hover:text-[#102A43] transition-colors uppercase tracking-wider" to="/faqbooknestsupport">
                  <span>View All FAQs</span>
                  <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* MAP / LOCATION SECTION */}
        <section className="w-full h-[400px] relative overflow-hidden bg-[#F0EDEF]">
          <img loading="lazy" decoding="async" alt="Lahore location map" className="w-full h-full object-cover mix-blend-luminosity opacity-80 grayscale" data-location="Lahore, Pakistan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVKAWDqMPRpUJu7os48hDwSRKekukeuar2hxquibPvo_H4XrB1eQvxjN2Ox9Jug1JqX1gjqJYDh8In_IFo_4lPeXMV9JE8qZke5oeTw5Z89REBHLiv8MkJYX6_pz8kfY38viyMydENdHTg69MiaO_HtMKZ5VGDp--kc5SAU_tT5FU5b3In5fKf8uTzzoL0QQu0KTUtzfI5J8E-LQ8EbRmwe8wp7f3HLkevHXv2fnIpv-upERu_JMEh" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F3EC] via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-ambient border border-white flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#102A43] flex items-center justify-center text-white">
              <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
            </div>
            <div>
              <h4 className="font-fraunces text-lg font-medium text-[#102A43]">Lahore Headquarters</h4>
              <p className="font-body-sm text-[#102A43]/70">Gulberg III, Pakistan</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
