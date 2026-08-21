'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, MapPin, Shield, Star, Users, ArrowRight, Lock } from 'lucide-react';

// ─── Village data (exact from artefact) ──────────────────────
const VILLAGES = [
  {
    id: '1', name: 'Egbe Omo Yoruba Greater Manchester',
    subtitle: 'Greater Manchester • Est. 2023',
    badge: 'Gold', verified: true, topVillage: true,
    members: 127, circles: 342, volume: '£89,400', volumeNum: 89400,
    completion: 98, city: ['Manchester'],
    tags: ['Yoruba', 'Community', 'Manchester'],
    leader: { name: 'Chief Ade', trust: 94, initials: 'CA' },
    activeCircles: 12, nextPayout: '2 days',
    review: { text: 'No wahala since 2023', stars: 5, author: 'Morenike A.' },
    avatars: ['MA','TO','BK','SL'],
    specialTag: 'Badge Gold',
    ledger: [{ id: '#341', text: '£500 → Morenike • ✓' }, { id: '#340', text: '£500 → Tunde • ✓' }],
  },
  {
    id: '2', name: 'Oldham Market Women Cooperative',
    subtitle: 'Oldham • Women-led trade circle',
    badge: 'Silver', verified: true,
    members: 89, circles: 198, volume: '£52,000', volumeNum: 52000,
    completion: 96, city: ['Oldham'],
    tags: ['Market Women', 'Oldham', 'Trade'],
    leader: { name: 'Iya Alajo', trust: 96, initials: 'IA' },
    activeCircles: 8, nextPayout: '5 days',
    review: { text: 'My shop never closes', stars: 5, author: 'Alhaja B.' },
    avatars: ['AB','FO','YM','NK'],
    ledger: [{ id: '#198', text: '£300 → Alhaja • ✓' }, { id: '#197', text: '£300 → Fatima • ✓' }],
  },
  {
    id: '3', name: 'Ibadan Sons & Daughters UK',
    subtitle: 'Ibadan • UK Diaspora',
    badge: 'Gold', verified: true, founder: true,
    members: 203, circles: 421, volume: '£124,000', volumeNum: 124000,
    completion: 99, city: ['Manchester', 'London'],
    tags: ['Ibadan Sons', 'Ibadan', 'Family'],
    leader: { name: 'Olabamiji Kolabalogun', trust: 98, initials: 'OK' },
    activeCircles: 19, nextPayout: '1 day',
    review: { text: 'House of Chief Abdul Gani lives on', stars: 5, author: 'You' },
    avatars: ['OK','AG','TO','BK','SL'],
    specialTag: "Founder's Village",
    ledger: [{ id: '#421', text: '£1,000 → Segun • ✓' }, { id: '#420', text: '£1,000 → Bola • ✓' }],
  },
  {
    id: '4', name: 'RCCG Victory House Manchester',
    subtitle: 'Manchester • Faith Community',
    badge: 'Bronze', verified: true,
    members: 64, circles: 112, volume: '£31,200', volumeNum: 31200,
    completion: 94, city: ['Manchester'],
    tags: ['Churches', 'RCCG', 'Faith'],
    leader: { name: 'Pastor Wale', trust: 92, initials: 'PW' },
    activeCircles: 4, nextPayout: '7 days',
    review: { text: 'We trust as we worship', stars: 5, author: 'Sister D.' },
    avatars: ['PW','JD','LM'],
    ledger: [{ id: '#112', text: '£250 → Deaconess • ✓' }, { id: '#111', text: '£250 → Bro. James • ✓' }],
  },
  {
    id: '5', name: 'Naija Tech Bros Manchester',
    subtitle: 'Manchester • Young Professionals',
    badge: 'Silver', verified: true,
    members: 45, circles: 87, volume: '£28,500', volumeNum: 28500,
    completion: 97, city: ['Manchester'],
    tags: ['Tech', 'Weekly £100', 'Manchester'],
    leader: { name: 'Tunde O.', trust: 91, initials: 'TO' },
    activeCircles: 6, nextPayout: '3 days',
    review: { text: 'Code by day, ajo by week', stars: 5, author: 'Chidi K.' },
    avatars: ['TO','CK','AB','ZY'],
    ledger: [{ id: '#87', text: '£100 → Chidi • ✓' }, { id: '#86', text: '£100 → Abdul • ✓' }],
  },
  {
    id: '6', name: 'Egbe Anobi — London to Manchester',
    subtitle: 'Inter-city • London • Manchester',
    badge: 'Gold', verified: true,
    members: 156, circles: 298, volume: '£102,300', volumeNum: 102300,
    completion: 97, city: ['London', 'Manchester'],
    tags: ['Inter-city', 'London', 'Manchester'],
    leader: { name: 'Aunty Ronke', trust: 95, initials: 'AR' },
    activeCircles: 14, nextPayout: '4 days',
    review: { text: 'London hustle, Mancunian trust', stars: 5, author: 'Segun L.' },
    avatars: ['AR','SL','MA','TO'],
    ledger: [{ id: '#298', text: '£750 → Ronke • ✓' }, { id: '#297', text: '£750 → Segun • ✓' }],
  },
];

const FILTERS = ['All','Manchester','Oldham','London','Ibadan Sons','Market Women','Churches','Gold Verified'];

const BADGE_STYLES: Record<string, string> = {
  Gold:   'bg-[#D4A017]/15 text-[#8a6a0e]',
  Silver: 'bg-[#2B1B12]/8 text-[#2B1B12]/60',
  Bronze: 'bg-orange-50 text-orange-700',
};

// ─── Village Card ─────────────────────────────────────────────
function VillageCard({ v, onHover, hovered }: { v: typeof VILLAGES[0]; onHover: (id: string|null) => void; hovered: string|null }) {
  const isHovered = hovered === v.id;
  return (
    <div
      className="group relative bg-white rounded-[20px] border border-[#2B1B12]/[0.07] overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_40px_rgba(43,27,18,0.08)] hover:border-[#D4A017]/40"
      onMouseEnter={() => onHover(v.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Adire watermark */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] adire-bg" />
      {/* Gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017] to-[#D4A017]/0 opacity-0 group-hover:opacity-100 transition" />

      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="w-[48px] h-[48px] rounded-full bg-[#2B1B12] text-[#FDFCF8] flex items-center justify-center relative overflow-hidden shrink-0">
              <div className="absolute inset-0 adire-bg opacity-20" />
              <span className="relative font-bold text-[11px] tracking-wide playfair">{v.leader.initials}</span>
            </div>
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1 px-2 h-5 rounded-full text-[10px] font-semibold tracking-wide ${BADGE_STYLES[v.badge]}`}>
                  <span className="w-2.5 h-2.5 rounded-full flex items-center justify-center text-[8px]"
                    style={{ backgroundColor: v.badge === 'Gold' ? '#D4A017' : v.badge === 'Silver' ? '#9ca3af' : '#f97316', color: 'white' }}>★</span>
                  {v.badge}
                </span>
                {v.verified && (
                  <span className="px-2 h-5 rounded-full bg-[#2B1B12] text-[#D4A017] text-[10px] font-medium flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5" /> Verified
                  </span>
                )}
                {v.topVillage && <span className="px-2 h-5 rounded-full bg-[#D4A017] text-[#2B1B12] text-[10px] font-semibold">Top Village</span>}
                {v.founder && <span className="px-2 h-5 rounded-full bg-[#D4A017] text-[#2B1B12] text-[10px] font-semibold">Founder&apos;s Village</span>}
              </div>
              <h3 className="font-bold text-[17px] leading-[1.25] mt-2 pr-2 tracking-[-0.01em] text-[#2B1B12] playfair">{v.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[#2B1B12]/40" />
                <p className="text-[11px] text-[#2B1B12]/50">{v.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-4 gap-3 border-y border-[#2B1B12]/[0.06] py-4">
          {[
            { label: 'Members', value: v.members.toString() },
            { label: 'Circles', value: v.circles.toString() },
            { label: 'Volume', value: v.volume },
            { label: 'Done', value: `${v.completion}%` },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[11px] text-[#2B1B12]/40 uppercase tracking-wide">{s.label}</p>
              <p className="font-semibold text-[13px] mt-1 text-[#2B1B12] flex items-center gap-1">
                {s.label === 'Done' ? <><span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />{s.value}</> : s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Leader + next payout */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#2B1B12] text-white flex items-center justify-center text-[10px] font-semibold">{v.leader.initials}</div>
            <div>
              <p className="text-[12px] font-medium leading-none text-[#2B1B12]">{v.leader.name}</p>
              <p className="text-[11px] text-[#2B1B12]/50 mt-1 flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#D4A017]/20 flex items-center justify-center text-[8px]">★</span>
                Trust {v.leader.trust} • Alajo Agba
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#2B1B12]/50">Next payout</p>
            <p className="text-[11px] font-medium text-[#2B1B12] mt-0.5">{v.nextPayout}</p>
          </div>
        </div>

        {/* Avatars + review */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex -space-x-2">
            {v.avatars.slice(0,4).map((a, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-[#FDFCF8] border border-white text-[9px] font-semibold flex items-center justify-center text-[#2B1B12] shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: ['#D4A017','#B8860B','#2B1B12','#8B6914'][i] || '#D4A017', color: i === 2 ? '#D4A017' : '#2B1B12' }}>
                {a}
              </div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-[#2B1B12]/60 truncate italic">&ldquo;{v.review.text}&rdquo;</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex text-[#D4A017] text-[10px]">{'★'.repeat(v.review.stars)}</div>
              <span className="text-[10px] text-[#2B1B12]/40">— {v.review.author}</span>
            </div>
          </div>
        </div>

        {/* Trust Storefront — hover reveal */}
        {isHovered && (
          <div className="mt-4 rounded-[12px] bg-[#FDFCF8] border border-[#2B1B12]/[0.06] p-3 transition-all">
            <div className="flex justify-between text-[10px] text-[#2B1B12]/40 uppercase tracking-wide mb-2">
              <span>Trust storefront</span>
              <span className="text-emerald-600">Verified ledger</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px]">
              {v.ledger.map(l => (
                <div key={l.id} className="flex justify-between">
                  <span className="text-[#2B1B12]/50">Circle {l.id}</span>
                  <span className="text-[#2B1B12]/70">{l.text}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="text-[#2B1B12]/40">Escrow</span>
                <span className="text-[#D4A017] font-semibold">🔒 Modulr</span>
              </div>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-5 flex gap-2">
          <button className="flex-1 h-9 rounded-full border border-[#2B1B12]/15 text-[12px] font-medium hover:border-[#2B1B12]/30 hover:bg-[#2B1B12]/[0.02] transition text-[#2B1B12]">
            View Village
          </button>
          <button className="flex-1 h-9 rounded-full bg-[#2B1B12] text-white text-[12px] font-medium hover:bg-black transition">
            Request to Join
          </button>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {v.tags.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-[#FDFCF8] border border-[#2B1B12]/[0.06] text-[10px] text-[#2B1B12]/60">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────
export default function GroupsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState<string|null>(null);

  const filtered = useMemo(() => {
    return VILLAGES.filter(v => {
      const q = search.trim().toLowerCase();
      const matchSearch = !q
        || v.name.toLowerCase().includes(q)
        || v.subtitle.toLowerCase().includes(q)
        || v.tags.some(t => t.toLowerCase().includes(q))
        || v.city.some(c => c.toLowerCase().includes(q));

      let matchFilter = true;
      if (filter === 'Manchester')   matchFilter = v.city.includes('Manchester');
      else if (filter === 'Oldham')  matchFilter = v.city.includes('Oldham');
      else if (filter === 'London')  matchFilter = v.city.includes('London');
      else if (filter === 'Ibadan Sons')   matchFilter = v.tags.some(t => t.toLowerCase().includes('ibadan'));
      else if (filter === 'Market Women')  matchFilter = v.tags.some(t => t.toLowerCase().includes('market women'));
      else if (filter === 'Churches')      matchFilter = v.tags.some(t => ['church','rccg','faith'].some(k => t.toLowerCase().includes(k)));
      else if (filter === 'Gold Verified') matchFilter = v.badge === 'Gold' && v.verified;

      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const leaderboard = [...VILLAGES].sort((a, b) => b.volumeNum - a.volumeNum).slice(0, 5);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12] antialiased selection:bg-[#D4A017]/20">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pt-14 md:pt-20 pb-10">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A017]/25 bg-white text-[11px] tracking-widest shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span>GROUP LAYER • LIVE VILLAGES</span>
          </div>
          <h1 className="playfair text-[40px] md:text-[64px] leading-[0.95] tracking-[-0.02em] text-[#2B1B12]">
            Find Your <span className="text-[#D4A017]">Village</span>
          </h1>
          <p className="mt-5 text-[16px] md:text-[18px] leading-[1.6] text-[#2B1B12]/70 max-w-[560px]">
            <span className="text-[#2B1B12] font-medium">£500k+ together.</span>{' '}
            Real communities rotating real money. Find yours — or build it.
          </p>

          {/* Stats bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] tracking-[0.04em] text-[#2B1B12]/60">
            {[
              { val: '47', label: 'Villages' },
              { val: '£512,430', label: 'Rotated' },
              { val: '4.9', label: 'Avg Trust' },
              { val: '0', label: 'Japa Cases' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-3 bg-white border border-[#2B1B12]/[0.06] rounded-full px-5 h-9">
                {i > 0 && <div className="w-px h-3 bg-[#2B1B12]/15" />}
                <div className="inline-flex items-center gap-1.5">
                  {s.label === 'Japa Cases' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                  <span className="font-semibold text-[#2B1B12]">{s.val}</span>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Search + filters */}
          <div className="mt-10 flex flex-col gap-5">
            <div className="relative max-w-[720px]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1B12]/40 w-4 h-4" />
              <input
                type="text"
                placeholder='Search villages — try "Ibadan" or "Manchester"'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full h-[56px] pl-[48px] pr-5 rounded-full bg-white border border-[#2B1B12]/10 text-[15px] placeholder:text-[#2B1B12]/35 focus:outline-none focus:border-[#D4A017]/60 focus:ring-4 focus:ring-[#D4A017]/10 transition"
              />
            </div>
            {/* Filter chips */}
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
              {FILTERS.map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`whitespace-nowrap text-[12px] font-semibold px-4 py-2 rounded-full border transition-all shrink-0 ${
                    filter === f
                      ? 'bg-[#2B1B12] text-[#D4A017] border-[#2B1B12]'
                      : 'bg-white border-[#2B1B12]/10 text-[#2B1B12]/60 hover:border-[#2B1B12]/30'
                  }`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content: cards + sidebar ── */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* Cards grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="bg-white border border-dashed border-[#2B1B12]/15 rounded-[24px] p-12 md:p-16 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#FDFCF8] border border-[#2B1B12]/10 flex items-center justify-center text-[#2B1B12]/40 text-xl mb-6">🏘️</div>
                <p className="playfair text-[24px] text-[#2B1B12]">No village found</p>
                <p className="text-[14px] text-[#2B1B12]/60 mt-2 max-w-[360px] mx-auto">
                  No village matches your search. <span className="font-medium text-[#2B1B12]">Be the first</span> — create yours in 60 seconds.
                </p>
                <button className="mt-6 bg-[#2B1B12] text-white px-5 h-10 rounded-full text-[13px]">
                  Create Your Village
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map(v => (
                  <VillageCard key={v.id} v={v} hovered={hovered} onHover={setHovered} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0">
            <div className="sticky top-[88px] space-y-6">

              {/* Leaderboard */}
              <div className="bg-white rounded-[20px] border border-[#2B1B12]/[0.07] p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="playfair text-[16px] text-[#2B1B12]">Village Leaderboard</p>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#FDFCF8] border border-[#2B1B12]/10 text-[#2B1B12]/60">This Month</span>
                </div>
                <div className="space-y-4">
                  {leaderboard.map((v, i) => (
                    <div key={v.id} className="flex items-center gap-3">
                      <span className="text-[12px] font-bold text-[#2B1B12]/30 w-4 shrink-0">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium truncate text-[#2B1B12]">{v.name}</p>
                        <div className="mt-1 w-full h-1.5 rounded-full bg-[#2B1B12]/10 overflow-hidden">
                          <div className="h-full bg-[#D4A017] rounded-full" style={{ width: `${(v.volumeNum / 124000) * 100}%` }} />
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#2B1B12]/60 shrink-0">{v.volume}</span>
                    </div>
                  ))}
                </div>

                {/* Become a leader CTA */}
                <div className="mt-6 pt-6 border-t border-[#2B1B12]/[0.06]">
                  <div className="rounded-[14px] bg-[#2B1B12] text-[#FDFCF8] p-4 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#D4A017]/20 blur-xl" />
                    <p className="playfair text-[14px] relative text-[#FDFCF8]">Want to lead a village?</p>
                    <p className="text-[11px] text-white/60 mt-1 leading-[1.5] relative">
                      Earn 2% per circle. Trusted Alajo Agba run the biggest villages.
                    </p>
                    <Link href="/for-leaders" className="mt-3 w-full h-8 rounded-full bg-[#D4A017] text-[#2B1B12] text-[11px] font-semibold hover:bg-[#c49a14] transition relative flex items-center justify-center gap-1">
                      Apply as Alajo Agba <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Escrow notice */}
              <div className="rounded-[16px] bg-[#FDFCF8] border border-[#D4A017]/20 p-4 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4A017]/15 flex items-center justify-center text-[#8a6a0e] shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#2B1B12]">✦ Japa-proof escrow</p>
                  <p className="text-[11px] text-[#2B1B12]/60 mt-1 leading-[1.5]">
                    Every village locks 10% in escrow. 0 members have japa&apos;d with funds since launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Create village CTA ── */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-20">
        <div className="mt-4 rounded-[28px] bg-[#2B1B12] text-[#FDFCF8] relative overflow-hidden">
          <div className="absolute inset-0 adire-bg opacity-[0.06]" />
          <div className="absolute -right-20 -bottom-20 w-[320px] h-[320px] rounded-full bg-[#D4A017]/15 blur-[40px]" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="playfair text-[28px] md:text-[36px] leading-[1.1] text-[#FDFCF8]">
                Don&apos;t see your village?<br />
                <span className="text-[#D4A017]">Create one in 60 seconds.</span>
              </p>
              <p className="text-[13px] text-white/60 mt-3 max-w-[420px]">
                Set city, tribe, contribution. We give you trust tools, escrow, and WhatsApp invite link.
              </p>
            </div>
            <Link href="/contact"
              className="shrink-0 h-[48px] px-7 rounded-full bg-[#D4A017] text-[#2B1B12] text-[14px] font-semibold hover:bg-[#c49a14] transition shadow-[0_8px_24px_rgba(212,160,23,0.25)] flex items-center gap-2">
              Create Your Village <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
