'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', role: 'member', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Supabase waitlist table
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-16">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Join the Waitlist</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Your circle is<br />
          <span className="italic font-medium text-[#D4A017]">one step away</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[480px] mx-auto">
          Join the waitlist. We are launching city by city — Oldham and Manchester first. Be first in your area.
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[#2B1B12] rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-[#D4A017] mx-auto mb-5" />
                <h2 className="font-display text-3xl font-light text-[#FDFCF8] mb-3">You&apos;re on the list</h2>
                <p className="font-sans text-[14px] text-[#FDFCF8]/60 leading-relaxed mb-6">
                  We will reach out on WhatsApp when your city launches. Typically within 2 weeks of signup.
                </p>
                <a
                  href="https://wa.me/447000000000"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold"
                >
                  Say hello on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#2B1B12]/50 block mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adeola Balogun"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#2B1B12]/15 bg-[#FDFCF8] font-sans text-[14px] text-[#2B1B12] placeholder:text-[#2B1B12]/30 focus:outline-none focus:border-[#D4A017]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#2B1B12]/50 block mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="adeola@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#2B1B12]/15 bg-[#FDFCF8] font-sans text-[14px] text-[#2B1B12] placeholder:text-[#2B1B12]/30 focus:outline-none focus:border-[#D4A017]/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#2B1B12]/50 block mb-2">WhatsApp Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+44 7700 000000"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#2B1B12]/15 bg-[#FDFCF8] font-sans text-[14px] text-[#2B1B12] placeholder:text-[#2B1B12]/30 focus:outline-none focus:border-[#D4A017]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#2B1B12]/50 block mb-2">City *</label>
                    <input
                      required
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Oldham, Manchester..."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#2B1B12]/15 bg-[#FDFCF8] font-sans text-[14px] text-[#2B1B12] placeholder:text-[#2B1B12]/30 focus:outline-none focus:border-[#D4A017]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#2B1B12]/50 block mb-2">I want to join as</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'member', label: 'Member' },
                      { value: 'leader', label: 'Alajo Agba (Leader)' },
                      { value: 'both', label: 'Both' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setForm({ ...form, role: opt.value })}
                        className={`py-3 px-4 rounded-xl border font-sans text-[12px] transition-colors ${
                          form.role === opt.value
                            ? 'bg-[#2B1B12] text-[#D4A017] border-[#2B1B12]'
                            : 'border-[#2B1B12]/15 text-[#2B1B12]/60 hover:border-[#2B1B12]/30'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#2B1B12]/50 block mb-2">Message (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your community, or any questions you have..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2B1B12]/15 bg-[#FDFCF8] font-sans text-[14px] text-[#2B1B12] placeholder:text-[#2B1B12]/30 focus:outline-none focus:border-[#D4A017]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors"
                >
                  Join the Waitlist <ArrowRight size={14} />
                </button>
                <p className="font-sans text-[11px] text-[#2B1B12]/40 text-center">
                  No spam. We contact you when your city is ready to launch.
                </p>
              </form>
            )}
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            <div className="bg-[#2B1B12] rounded-2xl p-7">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-3">Prefer WhatsApp?</p>
              <p className="font-display text-2xl font-light text-[#FDFCF8] mb-4">Talk to us directly</p>
              <p className="font-sans text-[13px] text-[#FDFCF8]/60 mb-5 leading-relaxed">Real person. Yoruba or English. We reply within 2 hours, 7 days a week.</p>
              <a
                href="https://wa.me/447000000000"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-6 py-3 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold hover:bg-[#F3D07A] transition-colors"
              >
                WhatsApp Us <ArrowRight size={13} />
              </a>
            </div>

            <div className="border border-[#2B1B12]/8 rounded-2xl p-7 paper-texture">
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#2B1B12]/40 mb-4">Launch Cities</p>
              {[
                { city: 'Oldham / Manchester', status: 'First Launch', active: true },
                { city: 'Birmingham', status: 'Q4 2025', active: false },
                { city: 'London', status: 'Q4 2025', active: false },
                { city: 'Leeds', status: '2026', active: false },
                { city: 'Lagos / Abuja', status: '2026 (Nigeria)', active: false },
              ].map((c, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < 4 ? 'border-b border-[#2B1B12]/6' : ''}`}>
                  <span className="font-sans text-[13px] text-[#2B1B12]">{c.city}</span>
                  <span className={`font-sans text-[10px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-full ${c.active ? 'bg-[#D4A017]/15 text-[#B8860B]' : 'bg-[#2B1B12]/5 text-[#2B1B12]/40'}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
