import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

const STORIES = [
  {
    slug: 'ola-best',
    title: 'What happened to Ola Best — and the £14,000 that vanished',
    excerpt: 'In April 2023, a Manchester Ajo group of 22 people watched their admin go silent. The WhatsApp group went quiet. The money — £14,000 — was gone. This is what happened, and why it will never happen on Arole Adjo.',
    date: 'March 2025',
    readTime: '8 min',
    tag: 'Incident Report',
    tagColor: 'text-red-600 bg-red-50 border-red-100',
  },
  {
    slug: 'chief-ade-story',
    title: 'Chief Ade ran Ajo for 12 years in Oldham. Here is what he learned.',
    excerpt: 'Before Arole Adjo existed, Chief Ade Wale was already running Ajo in Oldham the old way — on reputation alone. He never lost a pound. But he almost did. Three times.',
    date: 'February 2025',
    readTime: '10 min',
    tag: 'Leader Story',
    tagColor: 'text-[#B8860B] bg-[#D4A017]/10 border-[#D4A017]/20',
  },
  {
    slug: 'first-circle',
    title: 'My first circle: how £50 a week became £250 and a new fridge',
    excerpt: 'Funmi Adeyemi from Leeds joined her first Ajo circle in 2024. She was nervous. The group had a guarantor and an auto-debit. Week 4, she collected £243.75. She bought a fridge. This is her story.',
    date: 'January 2025',
    readTime: '5 min',
    tag: 'Member Story',
    tagColor: 'text-green-700 bg-green-50 border-green-100',
  },
  {
    slug: 'trust-score-explained',
    title: 'Your trust score: what it is, how it moves, why it matters',
    excerpt: 'The trust score is not a credit score. It does not go to a bank. It lives inside Arole Adjo and tells your community one thing: are you the kind of person who shows up? Here is how every point is earned.',
    date: 'January 2025',
    readTime: '6 min',
    tag: 'Education',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-100',
  },
  {
    slug: 'naija-vs-uk-ajo',
    title: 'Ajo in Naija vs Ajo in the UK: what changes, what stays the same',
    excerpt: 'The mechanism is the same. The risks are different. The regulatory environment, the banking infrastructure, the anonymity of city living — here is how Ajo adapted when it crossed the Atlantic.',
    date: 'December 2024',
    readTime: '7 min',
    tag: 'Culture',
    tagColor: 'text-purple-700 bg-purple-50 border-purple-100',
  },
  {
    slug: 'guarantor-guide',
    title: 'A guide for guarantors: what you are signing, and what it protects',
    excerpt: 'Being a guarantor on Arole Adjo is a privilege reserved for Trust 90+ Elder members. It is also a responsibility. This guide explains exactly what you are agreeing to — nothing hidden.',
    date: 'November 2024',
    readTime: '9 min',
    tag: 'Guide',
    tagColor: 'text-[#2B1B12] bg-[#2B1B12]/5 border-[#2B1B12]/10',
  },
];

export default function StoriesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-16">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Ajo Stories</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          The village<br />
          <span className="italic font-medium text-[#D4A017]">drum speaks</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[520px] mx-auto">
          Real stories. Incidents documented. Trust built and trust broken. Everything the Yoruba diaspora Ajo community needs to read before they join the next circle.
        </p>
      </section>

      {/* Featured story */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto mb-12">
        <div className="bg-[#2B1B12] rounded-2xl p-8 md:p-12 grid md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div>
            <span className={`inline-block font-sans text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full border mb-4 text-red-400 bg-red-900/20 border-red-800/30`}>
              Most Read — Incident Report
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#FDFCF8] leading-tight mb-4">
              {STORIES[0].title}
            </h2>
            <p className="font-sans text-[14px] text-[#FDFCF8]/60 leading-relaxed mb-6">{STORIES[0].excerpt}</p>
            <div className="flex items-center gap-4">
              <Link href={`/stories/${STORIES[0].slug}`} className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase text-[#D4A017] hover:opacity-70 transition-opacity">
                Read the story <ArrowRight size={13} />
              </Link>
              <span className="flex items-center gap-1 font-sans text-[11px] text-[#FDFCF8]/30">
                <Clock size={11} /> {STORIES[0].readTime} read
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-[#FDFCF8]/5 border border-[#FDFCF8]/10 flex items-center justify-center">
              <span className="font-display text-5xl font-light text-[#D4A017]/40">£14k</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story grid */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {STORIES.slice(1).map((story) => (
            <article key={story.slug} className="bg-[#FDFCF8] border border-[#2B1B12]/8 rounded-2xl p-7 hover:border-[#D4A017]/30 hover:shadow-[0_4px_24px_rgba(43,27,18,0.06)] transition-all flex flex-col paper-texture">
              <div className="flex items-center justify-between mb-4">
                <span className={`font-sans text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border ${story.tagColor}`}>
                  {story.tag}
                </span>
                <span className="flex items-center gap-1 font-sans text-[11px] text-[#2B1B12]/40">
                  <Clock size={10} /> {story.readTime}
                </span>
              </div>
              <h3 className="font-display text-[18px] font-medium text-[#2B1B12] leading-snug mb-3 flex-1">{story.title}</h3>
              <p className="font-sans text-[13px] text-[#2B1B12]/60 leading-relaxed mb-5">{story.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#2B1B12]/8">
                <span className="font-sans text-[11px] text-[#2B1B12]/40">{story.date}</span>
                <Link href={`/stories/${story.slug}`} className="inline-flex items-center gap-1.5 font-sans text-[11px] tracking-[0.1em] uppercase text-[#D4A017] hover:opacity-70 transition-opacity">
                  Read <ArrowRight size={11} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEO note / community CTA */}
      <section className="px-6 md:px-10 max-w-[700px] mx-auto mt-20 text-center">
        <h2 className="font-display text-3xl font-light text-[#2B1B12] mb-4">
          Have a story to <span className="italic font-medium">share?</span>
        </h2>
        <p className="font-sans text-[14px] text-[#2B1B12]/60 mb-8">
          If your circle worked — or didn&apos;t — we want to tell it. Anonymously or with your name. The village drum records everything.
        </p>
        <Link href="/contact?subject=story" className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] hover:border-[#2B1B12]/40 transition-colors">
          Submit your story <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
