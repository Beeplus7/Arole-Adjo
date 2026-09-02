'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const VILLAGES_INTEREST = [
  'Egbe Omo Yoruba Manchester',
  'Oldham Market Women Cooperative',
  'Ibadan Sons & Daughters UK',
  'RCCG Victory House Manchester',
  'Naija Tech Bros Manchester',
  'Egbe Anobi London-Manchester',
  'I want to create my own village',
];

const WHAT_NEXT = [
  { num: '1', text: 'We verify your phone + guarantor (2h)' },
  { num: '2', text: 'Village Alajo reviews your story' },
  { num: '3', text: 'You get WhatsApp invite + GoCardless link' },
];

const CITIES = [
  { name: 'Oldham, Manchester', status: 'Open Now', active: true },
  { name: 'Birmingham', status: 'Q4 2026', active: false },
  { name: 'London', status: 'Sept 2026', active: false },
  { name: 'Leeds', status: '2027', active: false },
  { name: 'Lagos / Abuja', status: 'Ibadan compound — by appointment', active: false },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [form, setForm] = useState({
    name: '', phone: '', city: '', village: VILLAGES_INTEREST[0],
    weeklyAmount: '50', doneBefore: 'yes', guarantor: '', email: '',
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: sbErr } = await supabase.from('waitlist').insert({
      name: form.name,
      email: form.email.toLowerCase() || `${form.phone.replace(/\s/g,'')}@waitlist.aroleadjo.com`,
      phone: form.phone,
      city: form.city,
      role: 'member',
      message: `Village: ${form.village} | Weekly: £${form.weeklyAmount} | Done before: ${form.doneBefore} | Guarantor: ${form.guarantor}`,
    });
    setLoading(false);
    if (sbErr && sbErr.code !== '23505') {
      setError('Something went wrong. Please try WhatsApp.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12]">

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-14 lg:pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A017]/25 bg-white text-[11px] tracking-widest shadow-sm mb-6 text-[#2B1B12]">
              <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              JOIN THE VILLAGE
            </div>
            <h1 className="playfair text-[40px] lg:text-[64px] leading-[0.95] tracking-[-0.02em] text-[#2B1B12]">
              Join the <span className="text-[#D4A017]">Village</span>
            </h1>
            <p className="mt-5 text-[16px] lg:text-[18px] leading-[1.6] opacity-70 max-w-[480px]">
              5,000+ on waitlist. Village by village. Trust first. 24h response.
            </p>

            {/* Live activity */}
            <div className="mt-6 flex items-center gap-3 text-[12px] text-[#2B1B12]/60">
              <div className="flex items-center gap-1.5 bg-white border border-[#2B1B12]/8 rounded-full px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>VILLAGE ACTIVITY • Live now</span>
              </div>
              <span className="opacity-50">47 villages active</span>
            </div>

            {/* What next */}
            <div className="mt-8 space-y-4">
              <p className="text-[11px] tracking-widest uppercase opacity-50 text-[#2B1B12]">WHAT NEXT</p>
              {WHAT_NEXT.map(step => (
                <div key={step.num} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2B1B12] text-[#D4A017] grid place-items-center font-bold text-[12px] shrink-0">{step.num}</div>
                  <p className="text-[14px] text-[#2B1B12]/70">{step.text}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp option */}
            <div className="mt-8 rounded-[20px] bg-[#2B1B12] text-[#FDFCF8] p-6">
              <p className="text-[10px] tracking-widest text-[#D4A017]/70 mb-2">VILLAGE HOTLINE</p>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-4 h-4 text-[#D4A017]" />
                <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-[16px] text-[#D4A017] hover:opacity-80 transition">
                  Chat on WhatsApp
                </a>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-[#FDFCF8]/50">ONLINE</span>
                </div>
              </div>
              <p className="text-[12px] text-[#FDFCF8]/50">Mon–Sat 9am–8pm UK • Sunday 2pm–6pm</p>
              <p className="text-[11px] text-[#FDFCF8]/40 mt-1">We reply in Yoruba, English, or Pidgin — your choice</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
                <div className="flex items-center gap-2 text-[#FDFCF8]/60">
                  <Mail className="w-3.5 h-3.5" />
                  <span>hello@aroleadjo.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#FDFCF8]/60">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Oldham OL8 4, Manchester</span>
                </div>
              </div>
            </div>

            {/* Cities map */}
            <div className="mt-6 border border-[#2B1B12]/8 rounded-[20px] p-6">
              <p className="text-[11px] tracking-widest opacity-40 text-[#2B1B12] mb-4">WHERE OUR VILLAGES ARE</p>
              {CITIES.map((c, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < CITIES.length - 1 ? 'border-b border-[#2B1B12]/6' : ''}`}>
                  <span className="text-[13px] text-[#2B1B12]">{c.name}</span>
                  <span className={`text-[10px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-full ${c.active ? 'bg-[#D4A017]/15 text-[#B8860B] font-semibold' : 'bg-[#2B1B12]/5 text-[#2B1B12]/40'}`}>
                    {c.status}
                  </span>
                </div>
              ))}
              <p className="text-[11px] opacity-30 mt-4 text-[#2B1B12]">
                47 villages live. Oldham Market Hall Saturdays 11am. Come with guarantor, leave with village.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-[28px] bg-[#2B1B12] p-10 text-center">
                <CheckCircle className="w-16 h-16 text-[#D4A017] mx-auto mb-5" />
                <p className="playfair text-[28px] font-bold text-[#FDFCF8] mb-3">You&apos;re in the village!</p>
                <p className="text-[14px] text-[#FDFCF8]/60 leading-relaxed mb-6">
                  We&apos;ll reach out on WhatsApp within 24 hours. Get your guarantor ready.
                </p>
                <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[13px]">
                  WhatsApp Village — Fastest
                </a>
                <p className="mt-3 text-[11px] text-[#FDFCF8]/30">Avg reply 1h 42m • Seen by Iya Lode</p>
              </div>
            ) : (
              <div className="rounded-[28px] bg-white border border-[#2B1B12]/8 shadow-[0_20px_60px_rgba(43,27,18,0.08)] p-8">
                <p className="playfair text-[22px] font-bold text-[#2B1B12] mb-6">Join Waitlist — Get Early Access</p>
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">FULL NAME *</label>
                      <input required placeholder="Adeola Kolabalogun" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-[#FDFCF8] focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                    </div>
                    <div>
                      <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">PHONE *</label>
                      <input required placeholder="+44 7700 000000" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-[#FDFCF8] focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">EMAIL</label>
                    <input type="email" placeholder="you@email.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-[#FDFCF8] focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">CITY *</label>
                    <input required placeholder="Oldham, Manchester..." value={form.city}
                      onChange={e => setForm({ ...form, city: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-[#FDFCF8] focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">WHICH VILLAGE INTERESTS YOU *</label>
                    <select value={form.village} onChange={e => setForm({ ...form, village: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-[#FDFCF8] text-[#2B1B12] focus:outline-none focus:border-[#D4A017]/50 transition">
                      {VILLAGES_INTEREST.map(v => <option key={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">HOW MUCH TO ROTATE WEEKLY</label>
                    <input type="range" min={50} max={1000} step={50} value={form.weeklyAmount}
                      onChange={e => setForm({ ...form, weeklyAmount: e.target.value })}
                      className="w-full h-1 accent-[#D4A017]"
                      style={{ background: `linear-gradient(to right, #D4A017 ${((Number(form.weeklyAmount)-50)/950)*100}%, #e5e7eb ${((Number(form.weeklyAmount)-50)/950)*100}%)` }}
                    />
                    <div className="flex justify-between text-[11px] opacity-40 mt-1 text-[#2B1B12]">
                      <span>£50</span>
                      <span className="font-semibold text-[#D4A017]">£{form.weeklyAmount}/week</span>
                      <span>£1000</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">HAVE YOU DONE AJO BEFORE? *</label>
                    <div className="flex gap-3">
                      {['yes', 'no', 'long ago'].map(v => (
                        <button key={v} type="button" onClick={() => setForm({ ...form, doneBefore: v })}
                          className={`flex-1 h-10 rounded-xl border text-[13px] font-medium transition capitalize ${form.doneBefore === v ? 'bg-[#2B1B12] text-[#D4A017] border-[#2B1B12]' : 'border-[#2B1B12]/15 text-[#2B1B12]/60 hover:border-[#2B1B12]/30'}`}>
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest opacity-50 block mb-2 text-[#2B1B12]">GUARANTOR NAME + PHONE (optional — early trust boost)</label>
                    <input placeholder="Chief Ade • +44 7700..." value={form.guarantor}
                      onChange={e => setForm({ ...form, guarantor: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-[#FDFCF8] focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                  </div>
                  <p className="text-[11px] opacity-40 leading-relaxed text-[#2B1B12]">
                    I agree to <Link href="/legal" className="underline">Trust & Security locks</Link>, Auto-debit mandate understanding, and that my village can see my guarantor if provided. Data protected under UK GDPR.
                  </p>
                  {error && <p className="text-[13px] text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>}
                  <button type="submit" disabled={loading}
                    className="w-full h-12 rounded-full bg-[#2B1B12] text-[#D4A017] font-semibold text-[14px] hover:bg-black transition disabled:opacity-50 flex items-center justify-center gap-2">
                    {loading ? 'Joining...' : <><span>Join Waitlist — Get Early Access</span><ArrowRight className="w-4 h-4" /></>}
                  </button>
                  <p className="text-center text-[11px] opacity-40 text-[#2B1B12]">
                    Egbe Manchester joined 3 days ago • Oldham Market Women joined today
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust stack */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 pb-20">
        <div className="rounded-[20px] bg-[#2B1B12] text-[#FDFCF8] p-6 lg:p-8 text-center">
          <p className="text-[10px] tracking-widest text-[#D4A017]/70 mb-3">TRUST STACK</p>
          <p className="text-[13px] opacity-60 leading-relaxed max-w-[600px] mx-auto">
            Arole Adjo is not a bank. Funds held in Modulr safeguarding accounts. GoCardless handles auto-debit.
            Read <Link href="/trust-security" className="text-[#D4A017] hover:opacity-70">Trust & Security</Link> for full lock details.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            {['Modulr', 'GoCardless', 'FCA Aligned'].map(t => (
              <span key={t} className="px-4 py-2 rounded-full border border-white/10 text-[12px] text-white/60">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
