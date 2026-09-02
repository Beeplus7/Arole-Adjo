'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const STORIES = [
  {
    slug: 'ola-best', tag: 'Incident Report', tagColor: 'text-red-600 bg-red-50 border-red-100',
    title: 'What happened to Ola Best — and the £14,000 that vanished',
    excerpt: 'In April 2023, a Manchester Ajo group of 22 people watched their admin go silent. The WhatsApp group went quiet. The money — £14,000 — was gone. This is what happened, and why it will never happen on Arole Adjo.',
    date: 'March 2025', readTime: '8 min', featured: true,
    seoTag: 'Arole Ajo • Admin Japa • Manchester',
  },
  {
    slug: 'chief-ade-story', tag: 'Leader Story', tagColor: 'text-[#B8860B] bg-[#D4A017]/10 border-[#D4A017]/20',
    title: 'Chief Ade ran Ajo for 12 years in Oldham. Here is what he learned.',
    excerpt: 'Before Arole Adjo existed, Chief Ade Wale was already running Ajo in Oldham the old way — on reputation alone. He never lost a pound. But he almost did. Three times.',
    date: 'February 2025', readTime: '10 min', featured: false,
    seoTag: 'Yoruba ajo UK • Alajo Agba',
  },
  {
    slug: 'oldham-market-women', tag: 'Member Story', tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    title: 'Oldham Market Women: how 89 traders built £52,000 in rotating trust',
    excerpt: 'Iya Alajo runs the Oldham Market Women Cooperative. 89 members. £52,000 rotated. 0 defaults. This is how a market hall became a fintech case study.',
    date: 'January 2025', readTime: '7 min', featured: false,
    seoTag: 'Oldham ajo • Market Women • Esusu',
  },
  {
    slug: 'trust-score-explained', tag: 'Education', tagColor: 'text-blue-700 bg-blue-50 border-blue-100',
    title: 'Your trust score: what it is, how it moves, why it matters',
    excerpt: 'The trust score is not a credit score. It does not go to a bank. It lives inside Arole Adjo and tells your community one thing: are you the kind of person who shows up?',
    date: 'January 2025', readTime: '6 min', featured: false,
    seoTag: 'Trust ajo • Esusu Manchester',
  },
  {
    slug: 'naija-vs-uk-ajo', tag: 'Culture', tagColor: 'text-purple-700 bg-purple-50 border-purple-100',
    title: 'Ajo in Naija vs Ajo in the UK: what changes, what stays the same',
    excerpt: 'The mechanism is the same. The risks are different. The regulatory environment, the banking infrastructure, the anonymity of city living — here is how Ajo adapted when it crossed the Atlantic.',
    date: 'December 2024', readTime: '7 min', featured: false,
    seoTag: 'Arole Ajo • Esusu UK • Yoruba',
  },
  {
    slug: 'ibadan-sons-story', tag: 'Village Story', tagColor: 'text-[#2B1B12] bg-[#D4A017]/10 border-[#D4A017]/20',
    title: 'From Ibadan compound to Manchester flat: how House of Chief Abdul Gani rotates',
    excerpt: 'Ibadan Sons & Daughters UK — 203 members, £124,000 rotated, 0 defaults. The village that carries the lineage of Chief Abdul Gani Kolabalogun across continents.',
    date: 'November 2024', readTime: '9 min', featured: false,
    seoTag: 'Ibadan ajo • Manchester • Diaspora',
  },
];

const TAGS = ['Arole Ajo', 'Ajo admin japa', 'Yoruba ajo UK', 'Esusu Manchester', 'Oldham ajo', 'Trust ajo', 'Ajo Alajo', 'Esusu app UK', 'rotating savings UK'];

export default function StoriesPage() {
  const [email, setEmail] = useState('');
  const [subDone, setSubDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12]">

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-14 lg:pt-20 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A017]/25 bg-white text-[11px] tracking-widest shadow-sm mb-6 text-[#2B1B12]">
          <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
          AJO STORIES • VILLAGE DRUM
        </div>
        <h1 className="playfair text-[40px] lg:text-[64px] leading-[0.95] tracking-[-0.02em] text-[#2B1B12]">
          From the <span className="text-[#D4A017]">Village Drum</span>
        </h1>
        <p className="mt-5 text-[16px] lg:text-[17px] leading-[1.6] opacity-70 max-w-[560px] mx-auto">
          Real stories from Oldham to Ibadan. The wahala that made us build Arole Adjo. The wins that keep villages rotating.
        </p>
        <p className="mt-2 text-[12px] opacity-40 italic text-[#2B1B12]">
          SEO gold for Arole Ajo, Yoruba ajo UK &amp; Esusu Manchester.
        </p>

        {/* Adire badge */}
        <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#2B1B12] text-[#D4A017] text-[11px] font-semibold tracking-widest">
          <span className="w-3 h-3 rounded-full bg-[#D4A017] animate-pulse inline-block" />
          Adire Pattern • Featured Archive
          <span className="opacity-60 font-normal">Each dot = one verified village</span>
        </div>
      </section>

      {/* Featured story */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-12">
        <div className="bg-[#2B1B12] rounded-[28px] p-8 lg:p-12 grid lg:grid-cols-[2fr_1fr] gap-8 items-center relative overflow-hidden">
          <div className="absolute inset-0 adire-bg opacity-[0.06]" />
          <div className="relative">
            <span className="inline-block font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border mb-5 text-red-400 bg-red-900/20 border-red-800/30">
              Most Read — Incident Report
            </span>
            <h2 className="playfair text-[28px] lg:text-[40px] font-bold text-[#FDFCF8] leading-tight mb-4">
              {STORIES[0].title}
            </h2>
            <p className="text-[14px] text-[#FDFCF8]/60 leading-relaxed mb-6">{STORIES[0].excerpt}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 text-[12px] tracking-widest uppercase text-[#D4A017] hover:opacity-70 transition">
                Read the story <ArrowRight className="w-4 h-4" />
              </button>
              <span className="flex items-center gap-1 text-[11px] text-[#FDFCF8]/30">
                <Clock className="w-3 h-3" /> {STORIES[0].readTime} read
              </span>
              <span className="text-[10px] text-[#FDFCF8]/30">{STORIES[0].date}</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-40 h-40 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <p className="playfair text-[40px] font-bold text-[#D4A017]/60">£14k</p>
                <p className="text-[10px] tracking-widest text-white/30 mt-1">LOST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="playfair text-[24px] font-bold text-[#2B1B12]">Latest from the Drum</h2>
          <div className="flex items-center gap-2 text-[11px] text-[#2B1B12]/40">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            Updated weekly
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {STORIES.slice(1).map(story => (
            <article key={story.slug}
              className="bg-[#FDFCF8] border border-[#2B1B12]/8 rounded-[20px] p-7 hover:border-[#D4A017]/30 hover:shadow-[0_8px_32px_rgba(43,27,18,0.06)] hover:-translate-y-1 transition-all flex flex-col adire-bg"
              style={{ backgroundSize: '22px 22px, 44px 44px', backgroundImage: 'none' }}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${story.tagColor}`}>
                  {story.tag}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#2B1B12]/40">
                  <Clock className="w-3 h-3" /> {story.readTime}
                </span>
              </div>
              <h3 className="playfair text-[17px] font-bold text-[#2B1B12] leading-snug mb-3 flex-1">{story.title}</h3>
              <p className="text-[13px] text-[#2B1B12]/60 leading-relaxed mb-5">{story.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#2B1B12]/8">
                <div>
                  <span className="text-[10px] text-[#2B1B12]/40">{story.date}</span>
                  <p className="text-[10px] text-[#D4A017]/70 mt-0.5">{story.seoTag}</p>
                </div>
                <button className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-[#D4A017] hover:opacity-70 transition">
                  Read <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16">
        <div className="bg-[#2B1B12] rounded-[24px] p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[10px] tracking-widest text-[#D4A017]/70 mb-3">VILLAGE DRUM WEEKLY</p>
            <h2 className="playfair text-[28px] lg:text-[36px] font-bold text-[#FDFCF8] mb-3">
              Get Village Drum weekly
            </h2>
            <p className="text-[14px] text-[#FDFCF8]/60 leading-relaxed">
              5k members already. No spam, just wahala breakdowns + wins.
            </p>
            <p className="mt-2 text-[12px] text-[#FDFCF8]/30 italic">
              &ldquo;Ajo no be scam. Na admin wey no get lock cause wahala.&rdquo;<br />— Iya Alajo, Oldham Market • £52k rotated
            </p>
          </div>
          <div>
            {subDone ? (
              <div className="rounded-[16px] bg-[#D4A017]/10 border border-[#D4A017]/30 p-6 text-center">
                <p className="playfair text-[20px] font-bold text-[#D4A017] mb-2">You&apos;re in the drum!</p>
                <p className="text-[13px] text-[#FDFCF8]/60">Check your inbox — first drum drops Friday.</p>
              </div>
            ) : (
              <div className="flex gap-3">
                <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-[14px] focus:outline-none focus:border-[#D4A017]/60 transition" />
                <button onClick={() => email && setSubDone(true)}
                  className="h-12 px-6 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[13px] hover:bg-[#c49a14] transition whitespace-nowrap">
                  Join Drum
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEO tags */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12">
        <div className="border-t border-[#2B1B12]/8 pt-8">
          <p className="text-[11px] tracking-widest opacity-40 text-[#2B1B12] mb-4">Popular Tags</p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map(t => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-white border border-[#2B1B12]/8 text-[12px] text-[#2B1B12]/60 hover:border-[#D4A017]/40 hover:text-[#2B1B12] transition cursor-pointer">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[11px] opacity-30 mt-6 text-[#2B1B12]">SEO — Ranking For: Arole Ajo, Ajo admin japa, Yoruba ajo UK, Esusu Manchester, Oldham ajo, Trust ajo, Ajo Alajo, Esusu app UK, rotating savings UK</p>
        </div>
      </section>

      {/* Submit story */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 text-center">
        <div className="border border-[#D4A017]/20 rounded-[20px] p-8 lg:p-12 bg-[#FDF8EC]">
          <p className="playfair text-[24px] lg:text-[32px] font-bold text-[#2B1B12] mb-3">Have a story? Share your ajo wahala or win</p>
          <p className="text-[14px] text-[#2B1B12]/60 mb-6 max-w-[480px] mx-auto">
            We publish with permission and pay <strong>£20 if featured</strong>. Your story helps the village learn — from viral wahala to village wins.
          </p>
          <Link href="/contact?subject=story"
            className="inline-flex items-center gap-2 h-[48px] px-8 rounded-full bg-[#2B1B12] text-[#D4A017] font-semibold text-[14px] hover:bg-black transition">
            Submit Your Story — £20 if featured <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
