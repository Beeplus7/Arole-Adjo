'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, MapPin, Users, Shield, Star, ArrowRight, Lock } from 'lucide-react';

const DEMO_GROUPS = [
  {
    id: 'egbe-manchester',
    name: 'Egbe Omo Yoruba Manchester',
    location: 'Oldham, Manchester',
    members: 24,
    circlesActive: 4,
    trust: 'Gold',
    trustScore: 94,
    pot: '£250–£1,000',
    frequency: 'Weekly',
    leader: 'Chief Ade Wale',
    leaderScore: 97,
    verified: true,
    open: true,
    description: 'Established 2021. Manchester\'s original Arole Adjo circle. Zero defaults across 48 completed rotations.',
    tags: ['Yoruba', 'Manchester', 'Weekly', 'Gold Verified'],
  },
  {
    id: 'ibadan-london',
    name: 'Ibadan Sons & Daughters UK',
    location: 'Peckham, London',
    members: 18,
    circlesActive: 3,
    trust: 'Gold',
    trustScore: 91,
    pot: '£500–£2,000',
    frequency: 'Monthly',
    leader: 'Mama Folake',
    leaderScore: 95,
    verified: true,
    open: true,
    description: 'Monthly high-value circles. Ibadan-origin diaspora only. Guarantor mandatory, insurance included.',
    tags: ['Ibadan', 'London', 'Monthly', 'High-Value'],
  },
  {
    id: 'leeds-yoruba',
    name: 'Yoruba Ladies Leeds',
    location: 'Chapeltown, Leeds',
    members: 12,
    circlesActive: 2,
    trust: 'Silver',
    trustScore: 82,
    pot: '£100–£500',
    frequency: 'Bi-weekly',
    leader: 'Sisi Titi',
    leaderScore: 88,
    verified: true,
    open: false,
    description: 'Ladies-only. Bi-weekly circles. Join via vouch from existing member only.',
    tags: ['Leeds', 'Ladies', 'Bi-weekly', 'Vouch Required'],
  },
  {
    id: 'birmingham-egbe',
    name: 'Egbe Birmingham West',
    location: 'Handsworth, Birmingham',
    members: 31,
    circlesActive: 6,
    trust: 'Gold',
    trustScore: 89,
    pot: '£250–£2,000',
    frequency: 'Weekly',
    leader: 'Baba Lanre',
    leaderScore: 92,
    verified: true,
    open: true,
    description: 'Largest Arole Adjo group outside Manchester. Multiple simultaneous circles. Elder leadership.',
    tags: ['Birmingham', 'Large Group', 'Multiple Circles'],
  },
  {
    id: 'nottingham-circle',
    name: 'Nottingham Ajo Club',
    location: 'Hyson Green, Nottingham',
    members: 9,
    circlesActive: 1,
    trust: 'Silver',
    trustScore: 76,
    pot: '£50–£250',
    frequency: 'Weekly',
    leader: 'Alhaji Musa K.',
    leaderScore: 81,
    verified: true,
    open: true,
    description: 'Newer group, excellent track record. Ideal for first-time Ajo members. Beginner-friendly.',
    tags: ['Nottingham', 'Beginner-friendly', 'Small Pot'],
  },
  {
    id: 'sheffield-egbe',
    name: 'Sheffield Oduduwa Circle',
    location: 'Burngreave, Sheffield',
    members: 15,
    circlesActive: 2,
    trust: 'Silver',
    trustScore: 79,
    pot: '£200–£750',
    frequency: 'Monthly',
    leader: 'Chief Biodun A.',
    leaderScore: 85,
    verified: false,
    open: true,
    description: 'Verification in progress. Strong community roots. Leader application submitted.',
    tags: ['Sheffield', 'Monthly', 'Pending Verification'],
  },
];

const TRUST_COLORS: Record<string, string> = {
  Gold: 'bg-[#D4A017]/15 text-[#B8860B] border-[#D4A017]/30',
  Silver: 'bg-[#2B1B12]/8 text-[#2B1B12]/60 border-[#2B1B12]/15',
};

export default function GroupsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'open' | 'gold'>('all');

  const filtered = DEMO_GROUPS.filter((g) => {
    const matchSearch =
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.location.toLowerCase().includes(search.toLowerCase()) ||
      g.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchFilter =
      filter === 'all' ||
      (filter === 'open' && g.open) ||
      (filter === 'gold' && g.trust === 'Gold');
    return matchSearch && matchFilter;
  });

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-12">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Group Layer</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Find your <span className="italic font-medium">village</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[520px] mx-auto">
          Gold-verified Yoruba circles across the UK. Real groups, real leaders, real trust scores. Apply to join or request a vouch.
        </p>
      </section>

      {/* Search + Filter */}
      <section className="px-6 md:px-10 max-w-[900px] mx-auto mb-12">
        <div className="relative mb-4">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2B1B12]/40" />
          <input
            type="text"
            placeholder="Search by city, group name, or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-full border border-[#2B1B12]/15 bg-[#FDFCF8] font-sans text-[14px] text-[#2B1B12] placeholder:text-[#2B1B12]/40 focus:outline-none focus:border-[#D4A017]/50 transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'open', 'gold'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-sans text-[11px] tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-colors ${
                filter === f
                  ? 'bg-[#2B1B12] text-[#D4A017] border-[#2B1B12]'
                  : 'border-[#2B1B12]/15 text-[#2B1B12]/60 hover:border-[#2B1B12]/30'
              }`}
            >
              {f === 'all' ? 'All Groups' : f === 'open' ? 'Open to Join' : 'Gold Verified'}
            </button>
          ))}
          <span className="ml-auto font-sans text-[11px] text-[#2B1B12]/40 self-center">{filtered.length} groups</span>
        </div>
      </section>

      {/* Group cards */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((group) => (
            <div
              key={group.id}
              className="bg-[#FDFCF8] border border-[#2B1B12]/8 rounded-2xl p-6 hover:border-[#D4A017]/30 hover:shadow-[0_4px_24px_rgba(43,27,18,0.08)] transition-all paper-texture flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {group.verified && (
                      <Shield size={12} className="text-[#D4A017]" />
                    )}
                    <span className={`font-sans text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border ${TRUST_COLORS[group.trust]}`}>
                      {group.trust} {group.trust === 'Gold' ? '★' : ''}
                    </span>
                    {!group.open && (
                      <span className="font-sans text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-[#2B1B12]/8 text-[#2B1B12]/50 border border-[#2B1B12]/10 flex items-center gap-1">
                        <Lock size={8} /> Vouch only
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[18px] font-medium text-[#2B1B12] leading-snug">{group.name}</h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 mb-4">
                <MapPin size={11} className="text-[#2B1B12]/40" />
                <span className="font-sans text-[12px] text-[#2B1B12]/50">{group.location}</span>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] text-[#2B1B12]/60 leading-relaxed mb-5 flex-1">{group.description}</p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-y border-[#2B1B12]/8">
                <div className="text-center">
                  <p className="font-display text-[18px] font-medium text-[#2B1B12]">{group.members}</p>
                  <p className="font-sans text-[9px] uppercase tracking-[0.1em] text-[#2B1B12]/40">Members</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[18px] font-medium text-[#2B1B12]">{group.circlesActive}</p>
                  <p className="font-sans text-[9px] uppercase tracking-[0.1em] text-[#2B1B12]/40">Active</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[18px] font-medium text-[#D4A017]">{group.trustScore}</p>
                  <p className="font-sans text-[9px] uppercase tracking-[0.1em] text-[#2B1B12]/40">Trust</p>
                </div>
              </div>

              {/* Leader */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-[#2B1B12] flex items-center justify-center">
                  <span className="font-display text-[#D4A017] text-[10px] font-bold">{group.leader.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-sans text-[11px] text-[#2B1B12]">{group.leader}</p>
                  <p className="font-sans text-[10px] text-[#2B1B12]/40">Trust {group.leaderScore} · Alajo Agba</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Star size={10} className="text-[#D4A017] fill-[#D4A017]" />
                  <span className="font-sans text-[11px] text-[#2B1B12]/60">{(group.leaderScore / 20).toFixed(1)}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {group.tags.map((tag) => (
                  <span key={tag} className="font-sans text-[9px] tracking-[0.08em] px-2 py-1 rounded-full bg-[#2B1B12]/5 text-[#2B1B12]/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`w-full text-center font-sans text-[11px] tracking-[0.15em] uppercase py-3 rounded-full transition-colors ${
                  group.open
                    ? 'bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518]'
                    : 'border border-[#2B1B12]/20 text-[#2B1B12]/60 hover:border-[#2B1B12]/40'
                }`}
              >
                {group.open ? 'Request to Join' : 'Request a Vouch'}
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-[#2B1B12]/30 mb-3">No groups found</p>
            <p className="font-sans text-[13px] text-[#2B1B12]/40">Try a different city or tag</p>
          </div>
        )}
      </section>

      {/* Start your own */}
      <section className="px-6 md:px-10 max-w-[900px] mx-auto mt-20 text-center">
        <div className="bg-[#2B1B12] rounded-2xl p-10">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-3">Don&apos;t see your city?</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#FDFCF8] mb-4">
            Start a circle <span className="italic font-medium">in your area</span>
          </h2>
          <p className="font-sans text-[14px] text-[#FDFCF8]/60 mb-8 max-w-[440px] mx-auto">
            Apply to become an Alajo Agba — a verified group leader. Earn 2% on every rotation you manage.
          </p>
          <Link
            href="/for-leaders"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold hover:bg-[#F3D07A] transition-colors"
          >
            Become a Leader <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
