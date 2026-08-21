'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import {
  Shield, Lock, CreditCard, BookOpen, Zap,
  Users, RotateCcw, X, Check, ChevronRight,
  ArrowRight, AlertTriangle,
} from 'lucide-react';

// ─── Hero stats ───────────────────────────────────────────────
const HERO_STATS = [
  { val: '3', label: 'STEPS' },
  { val: '£42k', label: 'ROTATED' },
  { val: '0', label: 'DEFAULTS' },
];

// ─── Before vs After data ────────────────────────────────────
const BEFORE = [
  { t: 'Admin holds money', d: "In personal Monzo. Can japa with pot. No segregation." },
  { t: 'Manual reminders', d: "Iya Alajo begs on WhatsApp. 'E sanwo na'. Stress every week." },
  { t: 'Admin can japa', d: "No guarantor, no insurance. 5 months contribution waka." },
  { t: 'No record', d: "Chat deletes. Who paid? Who collected? Argument starts." },
  { t: 'Begging for payment', d: "If one person delays, whole circle waits. Trust breaks." },
];

const AFTER = [
  { t: 'Segregated account', d: "Modulr holds it — FCA regulated. Admin cannot touch. Pot vault locked.", icon: Shield },
  { t: 'Auto-debit', d: "GoCardless / Paystack pulls £50 every week. No WhatsApp begging.", icon: CreditCard },
  { t: '4 locks prevent japa', d: "Staked £50 + Guarantor co-sign + Tiered trust + 2% insurance pool.", icon: Lock },
  { t: 'Village Drum ledger', d: "Immutable record. Every debit, payout, trust change — forever.", icon: BookOpen },
  { t: 'Automatic', d: "You set once. Engine rotates, pays, protects. Iya Alajo rests.", icon: Zap },
];

// ─── Step 2 members (exact from artefact) ────────────────────
const STEP2_MEMBERS = [
  { id: 1, name: 'Alabi T.',  loc: 'Oldham',     trust: 92, role: 'Elder' },
  { id: 2, name: 'Wale B.',   loc: 'Manchester', trust: 84, role: 'You' },
  { id: 3, name: 'Chioma K.', loc: 'Salford',    trust: 88, role: 'Member' },
  { id: 4, name: 'Tunde A.',  loc: 'Bolton',     trust: 70, role: 'Member' },
  { id: 5, name: 'Bola M.',   loc: 'Ibadan-UK',  trust: 95, role: 'Iya Alajo' },
];

// ─── Step 1 — Create Group card ───────────────────────────────
function Step1Card() {
  return (
    <div className="rounded-[28px] bg-white border border-[#2B1B12]/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#2B1B12]/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6E8BF] grid place-items-center">
            <span className="text-base">🐚</span>
          </div>
          <div>
            <p className="text-[13px] font-bold">Create Group</p>
            <p className="text-[11px] opacity-60">Egbe • Step 1 of 3</p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#2B1B12]/5 grid place-items-center">
          <X className="w-3.5 h-3.5 opacity-40" />
        </div>
      </div>
      <div className="p-6 space-y-5">
        <div>
          <p className="text-[11px] tracking-widest font-semibold opacity-60">GROUP NAME</p>
          <div className="mt-2 h-11 rounded-xl bg-[#FDFCF8] border border-[#2B1B12]/10 px-4 flex items-center text-[14px] font-medium text-[#2B1B12]">
            Egbe Omo Yoruba — Manchester
          </div>
          <p className="mt-1.5 text-[11px] opacity-50">Eg. Egbe Omo Yoruba Manchester, Oldham Market Women</p>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-4">
          <div>
            <p className="text-[11px] tracking-widest font-semibold opacity-60">LOGO</p>
            <div className="mt-2 w-[84px] h-[84px] rounded-[18px] bg-[#F6E8BF] border border-dashed border-[#D4A017]/40 grid place-items-center relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aroleadjo-logo.jpg" alt="group" className="w-16 h-16 rounded-full object-cover" />
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#2B1B12] text-white grid place-items-center">
                <span className="text-[10px]">+</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-widest font-semibold opacity-60">DESCRIPTION</p>
            <div className="mt-2 h-[84px] rounded-xl bg-[#FDFCF8] border border-[#2B1B12]/10 p-3 text-[12px] leading-[1.5] opacity-70">
              For sons & daughters of Ibadan in UK. We contribute, we rotate, we protect. No admin touches money.
            </div>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-widest font-semibold opacity-60">INVITE MEMBERS • 5 FOUNDERS</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#D4A017','#B8860B','#2B1B12','#8B6914','#C89612'].map((c,i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white grid place-items-center text-[11px] font-bold text-white" style={{ backgroundColor: c }}>
                  {['A','S','F','T','U'][i]}
                </div>
              ))}
            </div>
            <div className="text-[12px]">
              <span className="font-semibold">5 invited</span>
              <span className="opacity-60"> • 3 accepted • Village ready</span>
            </div>
            <div className="ml-auto w-8 h-8 rounded-full bg-[#2B1B12] text-white grid place-items-center text-[12px]">+</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[11px]">
          <div className="rounded-lg bg-[#D4A017]/10 border border-[#D4A017]/20 px-3 py-2 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            <span>Lifetime Model</span>
          </div>
          <div className="rounded-lg bg-[#2B1B12]/5 border border-[#2B1B12]/10 px-3 py-2 flex items-center gap-1.5">
            <Users className="w-3 h-3" />
            <span>1 group</span>
          </div>
          <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 flex items-center gap-1.5 text-emerald-700">
            <Check className="w-3 h-3" />
            <span>Forever ledger</span>
          </div>
        </div>
        <div className="pt-2 flex gap-2">
          <button className="flex-1 h-11 rounded-full bg-[#2B1B12] text-white grid place-items-center text-[13px] font-semibold">
            Create Village →
          </button>
          <button className="w-11 h-11 rounded-full bg-[#FDFCF8] border border-[#2B1B12]/10 grid place-items-center">
            <ChevronRight className="w-4 h-4 opacity-40" />
          </button>
        </div>
        <p className="text-[11px] opacity-50 text-center">Village lives forever. Spin new circles inside anytime.</p>
      </div>
    </div>
  );
}

// ─── Step 2 — full section, both sides share state ────────────
function Step2Section() {
  const [pot, setPot] = useState(250);
  const [members, setMembers] = useState(5);
  const [seqMode, setSeqMode] = useState<'fixed'|'need'|'bid'>('fixed');
  const [order, setOrder] = useState(STEP2_MEMBERS.map(m => m.id));
  const [dragging, setDragging] = useState<number|null>(null);

  const contrib = Math.round(pot / members);
  const orderedMembers = order
    .map(id => STEP2_MEMBERS.find(m => m.id === id)!)
    .filter(Boolean)
    .slice(0, members);

  const moveItem = (idx: number, dir: -1|1) => {
    const next = [...order];
    const target = idx + dir;
    if (target < 0 || target >= members) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    setOrder(next);
  };

  const SEQ_MODES = [
    { id: 'fixed' as const, l: 'Fixed',      d: 'Drag order' },
    { id: 'need'  as const, l: 'Need-Based', d: 'Vote + score' },
    { id: 'bid'   as const, l: 'Bidding',    d: 'Less = early' },
  ];

  const seqDesc = seqMode === 'fixed'
    ? 'Traditional Fixed — village decides'
    : seqMode === 'need'
    ? 'Need-Based — highest need + trust first'
    : 'Bidding — take £20 less to go first';

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">

      {/* ── RIGHT — Circle Engine dark card ── */}
      <div className="order-1 lg:order-2 lg:pl-12">
        <div className="rounded-[28px] bg-[#2B1B12] text-[#FDFCF8] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-[#2B1B12] grid place-items-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[13px] font-bold tracking-wide">CIRCLE ENGINE</p>
                <p className="text-[11px] opacity-60">Set pot • Members • Order • Engine runs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#D4A017] text-[#2B1B12] font-bold">LIVE DEMO</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <div className="p-6">
            {/* POT SIZE */}
            <div className="rounded-[16px] bg-white/[0.06] border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-widest opacity-60">POT SIZE</span>
                <span className="text-[11px] px-2 py-1 rounded-full bg-[#D4A017] text-[#2B1B12] font-bold">AUTO-CALC</span>
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="playfair text-[32px] font-bold text-[#D4A017]">£{pot}</span>
                <span className="opacity-60">pot</span>
                <span className="ml-auto text-[13px] opacity-70">£{contrib} × {members} members • {members} weeks</span>
              </div>
              <input type="range" min={100} max={1000} step={50} value={pot}
                onChange={e => setPot(Number(e.target.value))}
                className="w-full mt-4 h-1 rounded-full appearance-none"
                style={{ background: `linear-gradient(to right, #D4A017 ${((pot-100)/900)*100}%, rgba(255,255,255,0.15) ${((pot-100)/900)*100}%)` }}
              />
              <div className="mt-2 flex justify-between text-[10px] opacity-50">
                <span>£100</span><span>£500</span><span>£1000</span>
              </div>
              {/* Stat boxes */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[{ l:'Pot', v:`£${pot}` }, { l:'Members', v:`${members}` }, { l:'Each pays', v:`£${contrib}/wk` }].map(s => (
                  <div key={s.l} className="rounded-xl bg-white text-[#2B1B12] p-2.5 text-center">
                    <p className="text-[11px] opacity-60 tracking-widest">{s.l}</p>
                    <p className="playfair font-bold text-[14px] mt-0.5">{s.v}</p>
                  </div>
                ))}
              </div>
              {/* Members selector buttons */}
              <div className="mt-4 flex gap-2">
                {[3,4,5,6].map(n => (
                  <button key={n} onClick={() => setMembers(n)}
                    className={`flex-1 h-8 rounded-full text-[12px] font-medium border transition ${members === n ? 'bg-[#D4A017] text-[#2B1B12] border-[#D4A017] font-bold' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    {n} ppl
                  </button>
                ))}
              </div>
            </div>

            {/* SEQUENCE MODE */}
            <div className="mt-5">
              <p className="text-[11px] tracking-widest opacity-60 mb-2">SEQUENCE MODE</p>
              <div className="grid grid-cols-3 gap-2 p-1 rounded-full bg-white/5 border border-white/10">
                {SEQ_MODES.map(m => (
                  <button key={m.id} onClick={() => setSeqMode(m.id)}
                    className={`rounded-full py-2.5 px-3 text-left transition ${seqMode === m.id ? 'bg-white text-[#2B1B12] shadow' : 'hover:bg-white/5'}`}>
                    <p className="text-[12px] font-semibold leading-none">{m.l}</p>
                    <p className={`text-[10px] mt-1 ${seqMode === m.id ? 'opacity-60' : 'opacity-50'}`}>{m.d}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* ORDER — drag to reorder */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] tracking-widest opacity-60">ORDER • DRAG TO REORDER</p>
                <p className="text-[10px] opacity-50">{seqDesc}</p>
              </div>
              <div className="space-y-2">
                {orderedMembers.map((m, idx) => (
                  <div key={m.id}
                    draggable
                    onDragStart={() => setDragging(m.id)}
                    onDragOver={e => {
                      e.preventDefault();
                      if (dragging && dragging !== m.id) {
                        const from = order.indexOf(dragging);
                        const to = order.indexOf(m.id);
                        const next = [...order];
                        next.splice(from, 1);
                        next.splice(to, 0, dragging);
                        setOrder(next);
                      }
                    }}
                    onDragEnd={() => setDragging(null)}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 border bg-white text-[#2B1B12] cursor-grab transition ${
                      dragging === m.id
                        ? 'border-[#D4A017] shadow-[0_8px_20px_rgba(212,160,23,0.25)] scale-[1.01]'
                        : 'border-black/10 hover:border-[#2B1B12]/20'
                    }`}>
                    <div className="w-6 h-6 rounded-full bg-[#2B1B12] text-white grid place-items-center text-[11px] font-bold">{idx+1}</div>
                    <div className="w-8 h-8 rounded-full bg-[#F2E8C9] grid place-items-center text-[11px] font-bold">{m.name.slice(0,2).toUpperCase()}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold flex items-center gap-2">
                        {m.name}
                        {m.role === 'You'       && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#2B1B12] text-white">YOU</span>}
                        {m.role === 'Iya Alajo' && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#D4A017] text-[#2B1B12]">{m.role}</span>}
                      </div>
                      <div className="text-[11px] opacity-60">{m.loc} • {m.role}</div>
                    </div>
                    <div className={`text-[11px] px-2 py-1 rounded-full font-bold border ${
                      m.trust >= 90 ? 'bg-[#2B1B12] text-white border-[#2B1B12]'
                      : m.trust >= 80 ? 'bg-[#D4A017] text-[#2B1B12] border-[#D4A017]'
                      : 'bg-white border-[#2B1B12]/15 text-[#2B1B12]'
                    }`}>{m.trust}</div>
                    <div className="flex flex-col gap-0.5 opacity-40 group-hover:opacity-100 transition">
                      <button onClick={() => moveItem(idx, -1)} className="w-5 h-3 grid place-items-center hover:bg-black/5 rounded text-[10px]">▲</button>
                      <button onClick={() => moveItem(idx,  1)} className="w-5 h-3 grid place-items-center hover:bg-black/5 rounded text-[10px]">▼</button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duration summary */}
              <div className="mt-3 rounded-xl bg-[#D4A017] text-[#2B1B12] px-4 py-3 flex items-center justify-between">
                <div className="text-[12px] font-semibold">
                  Duration auto-calculated: {members} weeks • Ends {members * 7} days
                </div>
                <div className="w-6 h-6 rounded-full bg-[#2B1B12] text-white grid place-items-center text-[12px]">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LEFT — text + info card + live stat boxes (react to slider) ── */}
      <div className="relative order-2 lg:order-1 lg:text-right lg:pr-12">
        {/* Desktop step circle */}
        <div className="hidden lg:block absolute -right-[62px] top-0 w-12 h-12 rounded-full bg-white border border-[#D4A017]/30 grid place-items-center shadow-sm">
          <span className="playfair font-bold text-[#D4A017] text-[16px]">2</span>
        </div>
        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-[#2B1B12] text-white grid place-items-center font-bold playfair text-[16px]">2</div>
          <div className="h-[1px] flex-1 bg-[#2B1B12]/10" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#F6E8BF] border border-[#D4A017]/20 px-3 py-1 text-[11px] tracking-widest text-[#2B1B12]">
          <RotateCcw className="w-3.5 h-3.5 text-[#D4A017]" />
          <span>02 • Circle Engine</span>
        </div>

        <h2 className="playfair mt-5 text-[28px] lg:text-[42px] leading-[0.95] font-bold tracking-[-0.02em] text-[#2B1B12]">
          Set the pot.<br />
          <span className="text-[#D4A017]">Order.</span><br />
          Engine runs.
        </h2>

        <p className="mt-4 text-[15px] leading-[1.65] opacity-70 lg:ml-auto lg:max-w-[440px] text-[#2B1B12]">
          £{contrib}/week × {members} members = £{pot} pot.{' '}
          <span className="font-semibold text-[#2B1B12]">Iya Alajo doesn&apos;t need to type every week.</span>{' '}
          The system auto-debits, auto-payouts, auto-records in Village Drum. She just watches trust grow.
        </p>

        {/* Info card */}
        <div className="mt-6 inline-flex lg:ml-auto flex-col items-start gap-2 rounded-[16px] bg-white border border-[#2B1B12]/[0.08] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)] max-w-[440px] text-left">
          <div className="flex items-center gap-2 text-[12px] font-bold text-[#2B1B12]">
            <RotateCcw className="w-4 h-4 text-[#D4A017]" />
            <span>Circle Engine — what it does</span>
          </div>
          <p className="text-[13px] leading-[1.5] opacity-60 text-[#2B1B12]">
            Auto-debit via GoCardless/Paystack → Modulr segregated account (not admin pocket) → Payout to who&apos;s next → Trust score +5.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#2B1B12] text-white">No manual calc</span>
            <span className="text-[11px] px-2.5 py-1 rounded-full border border-[#2B1B12]/10 text-[#2B1B12]">5-min setup</span>
          </div>
        </div>

        {/* Live stat boxes — update with slider */}
        <div className="mt-6 grid grid-cols-3 gap-3 lg:ml-auto max-w-[440px] text-left">
          <div className="rounded-xl bg-white border border-[#2B1B12]/10 p-3 text-center">
            <p className="text-[11px] tracking-widest opacity-50 text-[#2B1B12]">TRUST BADGE</p>
            <p className="mt-1 text-[12px] font-bold text-[#2B1B12]">84 • 92 • 70</p>
          </div>
          <div className="rounded-xl bg-[#2B1B12] text-white p-3 text-center">
            <p className="text-[11px] tracking-widest opacity-50">DURATION</p>
            <p className="mt-1 text-[12px] font-bold">{members} weeks</p>
          </div>
          <div className="rounded-xl bg-[#D4A017] text-[#2B1B12] p-3 text-center">
            <p className="text-[11px] tracking-widest opacity-70">CONTRIB</p>
            <p className="mt-1 text-[12px] font-bold">£{contrib}/wk</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 3 — Auto-rotate card ────────────────────────────────
function Step3Card() {
  return (
    <div className="mt-8 max-w-[440px] rounded-[18px] bg-white border border-[#2B1B12]/10 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] text-left">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-bold tracking-widest text-[#2B1B12]">WALLET • LOCKED & SAFE</p>
        <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">FCA protected</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#2B1B12] text-white p-3">
          <p className="text-[10px] tracking-widest opacity-60">LOCKED DEPOSIT</p>
          <p className="playfair text-[20px] font-bold mt-1 text-[#D4A017]">£50.00</p>
          <p className="text-[11px] opacity-60 mt-1 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Until circle ends
          </p>
        </div>
        <div className="rounded-xl bg-[#D4A017] text-[#2B1B12] p-3">
          <p className="text-[10px] tracking-widest opacity-70">AVAILABLE</p>
          <p className="playfair text-[20px] font-bold mt-1">£243.75</p>
          <p className="text-[11px] opacity-80 mt-1">Received • After 2% pool</p>
        </div>
      </div>
      <p className="mt-3 text-[11px] opacity-60 text-[#2B1B12]">£250 collected → £5 insurance pool → £243.75 to you. Deposit stays locked till circle ends.</p>
      <div className="mt-4 rounded-xl bg-[#2B1B12] text-white overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
          <p className="text-[11px] font-bold tracking-widest">Village Drum • Rotation Log</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[10px] opacity-60">LIVE</span>
          </div>
        </div>
        <div className="p-4 space-y-3 relative">
          <div className="absolute left-[36px] top-[28px] bottom-[28px] w-[2px] bg-white/[0.06]" />
          {[
            { week: 1, name: 'Chief Ade', amount: '£243.75', status: 'VERIFIED' },
            { week: 2, name: 'Sisi T',    amount: '£243.75', status: 'VERIFIED' },
            { week: 3, name: 'YOU',       amount: '£243.75', status: 'NEXT' },
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-3 relative">
              <div className={`w-9 h-9 rounded-full grid place-items-center text-[11px] font-bold shrink-0 z-10 ${row.status === 'NEXT' ? 'bg-[#D4A017] text-[#2B1B12]' : 'bg-white/10 text-white'}`}>
                {row.status === 'VERIFIED' ? '✓' : row.week}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-semibold">{row.name}</span>
                  {row.status === 'VERIFIED' && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">On time</span>}
                  {row.status === 'NEXT' && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4A017] text-[#2B1B12] font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#2B1B12] animate-pulse inline-block" />NEXT</span>}
                </div>
                <p className="mt-1 text-[14px] font-semibold">{row.amount} <span className="text-[11px] opacity-60">collected</span></p>
                <div className="mt-1 text-[11px] opacity-60 flex items-center gap-1.5">
                  <span className="text-[#D4A017]">→ Modulr →</span>
                  <span>Bank payout</span>
                </div>
              </div>
              <div className={`rounded-lg px-2.5 py-1.5 min-w-[48px] text-center shrink-0 ${row.status === 'NEXT' ? 'bg-[#D4A017] text-[#2B1B12]' : 'bg-[#2B1B12] text-white border border-white/10'}`}>
                <p className="playfair text-[16px] font-bold leading-none">{row.week}</p>
                <p className="text-[9px] tracking-widest opacity-60 mt-1">WEEK</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-4 mb-4 rounded-xl bg-[#2B1B12] text-white px-4 py-3 flex items-center justify-between text-[11px] border border-white/10">
          <span>Auto-debit • Auto-payout • Immutable</span>
          <div className="flex gap-1.5">
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-white border border-[#2B1B12]/10 text-[#2B1B12]">
              <Check className="w-3 h-3 text-emerald-600" /> 5 WEEKS
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/20 text-[#D4A017]">
              Trust +5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Before vs After ──────────────────────────────────────────
function BeforeAfter() {
  return (
    <section className="relative bg-white border-y border-[#2B1B12]/[0.06] py-16 lg:py-24">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6E8BF] border border-[#D4A017]/20 text-[11px] tracking-widest text-[#2B1B12]">
            <span>🐚</span><span>THE DIFFERENCE</span>
          </div>
          <p className="playfair mt-4 text-[32px] lg:text-[48px] leading-[0.95] font-bold tracking-[-0.02em] text-[#2B1B12]">
            One column is why 2,847 videos<br />cried. The other is why<br />
            <span className="text-[#D4A017]">Manchester trusts again.</span>
          </p>
          <p className="mt-3 text-[14px] opacity-60 leading-[1.6] text-[#2B1B12]">Arole Adjo did not invent Ajo. We removed the part where admin japa.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Before */}
          <div className="rounded-[24px] bg-[#FDFCF8] border border-[#2B1B12]/10 p-6 lg:p-7">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#2B1B12]/10 grid place-items-center">
                <AlertTriangle className="w-4 h-4 text-[#2B1B12]/60" />
              </div>
              <p className="text-[13px] font-bold tracking-widest text-[#2B1B12]">BEFORE • WHATSAPP AJO</p>
            </div>
            <p className="text-[12px] opacity-50 mt-1 text-[#2B1B12]">The pain every skit mocks</p>
            <div className="mt-6 space-y-4">
              {BEFORE.map(item => (
                <div key={item.t} className="flex gap-3 rounded-xl bg-white border border-[#2B1B12]/[0.06] p-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#2B1B12]/5 grid place-items-center shrink-0">
                    <X className="w-3.5 h-3.5 opacity-60 text-red-500" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2B1B12]">{item.t}</div>
                    <div className="text-[12px] opacity-60 mt-0.5 leading-[1.4] text-[#2B1B12]">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] opacity-50 text-center text-[#2B1B12]">Result: Skits, court, family fight • #AjoMakeItBig goes viral for wrong reason</p>
          </div>
          {/* After */}
          <div className="rounded-[24px] bg-[#2B1B12] text-[#FDFCF8] border border-white/10 p-6 lg:p-7 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#D4A017]/20 blur-[1px]" />
            <div className="relative flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A017] text-[#2B1B12] grid place-items-center"><Shield className="w-5 h-5" /></div>
              <div>
                <p className="text-[13px] font-bold tracking-widest">AFTER • AROLE ADJO</p>
                <p className="text-[10px] opacity-60">The lock Woli Arole prayed for</p>
              </div>
              <div className="ml-auto text-[10px] px-2 py-1 rounded-full bg-[#D4A017] text-[#2B1B12] font-bold">4 LOCKS ACTIVE</div>
            </div>
            <div className="relative mt-6 space-y-4">
              {AFTER.map(item => (
                <div key={item.t} className="flex gap-3 rounded-xl bg-white/[0.06] border border-white/10 p-3.5 backdrop-blur">
                  <div className="w-7 h-7 rounded-full bg-[#D4A017] text-[#2B1B12] grid place-items-center shrink-0"><item.icon className="w-4 h-4" /></div>
                  <div>
                    <div className="text-[13px] font-semibold">{item.t}</div>
                    <div className="text-[12px] opacity-70 mt-0.5 leading-[1.4]">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-5 rounded-xl bg-white text-[#2B1B12] p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/aroleadjo-logo.jpg" alt="Arole Adjo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[13px]">Simple for Iya Alajo:</p>
                <p className="text-[11px] opacity-60 mt-0.5">1. Join village • 2. Stake £50 cowrie • 3. Money comes automatically</p>
              </div>
            </div>
            <div className="mt-8 rounded-full bg-[#F6E8BF] border border-[#D4A017]/20 px-4 py-2.5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#2B1B12]">
              <span className="font-semibold">Trust is heirloom again.</span>
              <span className="opacity-60">Built by Ibadan, for Oldham, for everywhere japa broke trust.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA section ─────────────────────────────────────────────
function CTASection() {
  return (
    <section className="relative bg-[#D4A017] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #2B1B12 0 1px, transparent 1px 14px)' }} />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex px-3 py-1 rounded-full bg-[#2B1B12] text-white text-[11px] tracking-widest">
            PAGE 2 COMPLETE • NEXT: GROUPS DIRECTORY
          </div>
          <p className="playfair mt-5 text-[32px] lg:text-[50px] leading-[0.95] font-bold text-[#2B1B12] tracking-[-0.02em]">
            Ready to start your <span className="underline decoration-[#2B1B12]/20 underline-offset-8">village?</span>
          </p>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#2B1B12]/80 max-w-[520px]">
            From Egbe Omo Yoruba Manchester to Oldham Market Women — real villages, real trust scores, real rotations. No demo money. Real cowrie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="h-[48px] px-7 rounded-full bg-[#2B1B12] text-white text-[14px] font-semibold inline-flex items-center gap-2 hover:bg-black transition">
              <div className="w-6 h-6 rounded-full bg-white text-[#2B1B12] grid place-items-center text-[12px]">🐚</div>
              Join Waitlist • Free
            </Link>
            <Link href="/groups" className="h-[48px] px-7 rounded-full bg-white text-[#2B1B12] text-[14px] font-semibold inline-flex items-center gap-2 border border-[#2B1B12]/10 hover:border-[#2B1B12]/30 transition">
              Browse Groups <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-3 text-[11px] text-[#2B1B12]/70">
            {['2% insurance', 'Village Drum', '5-person max'].map((t, i) => (
              <div key={t} className="flex items-center gap-1.5">
                {i > 0 && <div className="w-px h-4 bg-[#2B1B12]/20" />}
                <div className="w-5 h-5 rounded-full bg-[#2B1B12] text-white grid place-items-center text-[10px]">✓</div>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[28px] bg-[#2B1B12] text-[#FDFCF8] p-6 lg:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/aroleadjo-logo.jpg" alt="Arole Adjo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[12px] tracking-widest font-bold">AROLE ADJO • HOW IT WORKS</p>
                <p className="text-[10px] opacity-60">Page 02 • Village → Circle → Auto-rotate</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { city: 'Manchester', group: 'Egbe Omo Yoruba',   pot: '£250',   trust: 94, active: true },
                { city: 'Oldham',     group: 'Oldham Market Women', pot: '£500', trust: 88, active: true },
                { city: 'Birmingham', group: 'Ibadan Sons UK',    pot: '£1,000', trust: 91, active: false },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/10 p-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4A017]/20 grid place-items-center text-[12px] font-bold text-[#D4A017]">{i+1}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold truncate">{v.group}</p>
                    <p className="text-[10px] opacity-60">{v.city} • {v.pot} pot</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-[#D4A017] font-bold">{v.trust}</p>
                    {v.active && <div className="flex items-center gap-1 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /><span className="text-[9px] opacity-60">LIVE</span></div>}
                  </div>
                  <div className="ml-auto w-5 h-5 rounded-full bg-white/10 grid place-items-center">
                    <ChevronRight className="w-3 h-3 opacity-40" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-white text-[#2B1B12] p-3 text-[11px] flex items-center gap-2">
              <span className="opacity-70">3 STEPS</span>
              <span className="opacity-30">•</span>
              <span className="opacity-70">Cowrie moving:</span>
              <span className="ml-auto font-semibold">🐚 → 🏦 → 👛</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────
export default function HowItWorksPage() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12] selection:bg-[#D4A017]/30 overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#2B1B12]/[0.06]">
        <div className="absolute inset-0 adire-bg opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(212,160,23,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 py-14 lg:py-[88px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/25 bg-white px-3.5 py-1.5 text-[11px] tracking-widest shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span>AROLE ADJO • HOW IT WORKS</span>
          </div>
          <h1 className="playfair mt-6 text-[40px] lg:text-[64px] leading-[0.92] tracking-[-0.03em] font-bold text-[#2B1B12]">
            From village meeting to<br /><span className="text-[#D4A017]">automatic payout</span>
          </h1>
          <p className="mt-5 mx-auto max-w-[620px] text-[16px] lg:text-[18px] leading-[1.6] opacity-70">
            In 3 steps. No WhatsApp begging. No admin japa.
          </p>
          <div className="mt-7 flex items-center justify-center gap-2 text-[12px] opacity-60">
            <div className="w-6 h-[1px] bg-[#2B1B12]/20" />
            <span>Village → Circle → Auto-rotate & Payout</span>
            <div className="w-6 h-[1px] bg-[#2B1B12]/20" />
          </div>
          <div className="mt-10 grid grid-cols-3 max-w-[560px] mx-auto border border-[#2B1B12]/[0.06] rounded-[20px] bg-white/70 backdrop-blur divide-x divide-[#2B1B12]/[0.06] overflow-hidden">
            {HERO_STATS.map(s => (
              <div key={s.label} className="py-4 px-4">
                <p className="playfair text-[22px] font-bold text-[#2B1B12]">{s.val}</p>
                <p className="text-[11px] tracking-widest opacity-60 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Steps ── */}
      <section className="relative mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-24" ref={containerRef}>
        {/* Vertical timeline line */}
        <div className="hidden lg:block absolute left-1/2 top-[160px] bottom-[320px] w-[2px] -translate-x-1/2 bg-[#2B1B12]/[0.06]">
          <div className="absolute left-0 top-0 w-full origin-top" style={{ height: `${Math.min(100, Math.max(0, (scrollY - 400) / 8))}%`, background: '#D4A017' }} />
        </div>
        <div className="lg:hidden absolute left-[28px] top-[120px] bottom-[320px] w-[2px] bg-[#2B1B12]/[0.06]" />
        <div className="hidden lg:block absolute left-1/2 top-[8%]  w-3 h-3 rounded-full bg-[#D4A017] -translate-x-1/2 ring-4 ring-[#FDFCF8]" />
        <div className="hidden lg:block absolute left-1/2 top-[48%] w-3 h-3 rounded-full bg-[#D4A017] -translate-x-1/2 ring-4 ring-[#FDFCF8]" />
        <div className="hidden lg:block absolute left-1/2 top-[88%] w-3 h-3 rounded-full bg-[#2B1B12] -translate-x-1/2 ring-4 ring-[#FDFCF8]" />

        <div className="relative space-y-20 lg:space-y-[160px]">

          {/* ── STEP 1 ── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            {/* Text — right side (text-right) */}
            <div className="relative lg:text-right order-2 lg:order-1">
              <div className="hidden lg:block absolute -right-[62px] top-0 w-12 h-12 rounded-full bg-white border border-[#D4A017]/30 grid place-items-center shadow-sm">
                <span className="playfair font-bold text-[#D4A017] text-[16px]">1</span>
              </div>
              <div className="lg:hidden flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#D4A017] text-[#2B1B12] grid place-items-center font-bold playfair text-[16px] shadow-[0_6px_18px_rgba(212,160,23,0.35)]">1</div>
                <div className="h-[1px] flex-1 bg-[#D4A017]/20" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2B1B12] text-white px-3 py-1 text-[11px] tracking-widest">
                <span>🏘️</span><span>Village</span>
              </div>
              <h2 className="playfair mt-5 text-[28px] lg:text-[42px] leading-[0.95] font-bold tracking-[-0.02em] text-[#2B1B12]">
                Create your village.<br /><span className="text-[#D4A017]">It lives forever.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] opacity-70 lg:ml-auto lg:max-w-[440px] text-[#2B1B12]">
                Egbe Omo Yoruba Manchester, Oldham Market Women, Ibadan Sons UK.{' '}
                <span className="font-semibold text-[#2B1B12]">Persistent village, forever ledger.</span>{' '}
                One group. Many circles. Lifetime trust.
              </p>
              <div className="mt-6 inline-flex lg:ml-auto flex-col items-start gap-2 rounded-[14px] bg-white border border-[#2B1B12]/[0.06] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <p className="text-[11px] tracking-widest opacity-50 text-[#2B1B12]">VILLAGE</p>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#2B1B12]">
                  <span>🏘️</span><span>Create Group</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2 lg:justify-end">
                <span className="text-[11px] px-2.5 py-1 rounded-full font-medium bg-[#D4A017]/15 text-[#8A6A10]">Lifetime Model</span>
                <span className="text-[11px] px-2.5 py-1 rounded-full font-medium bg-[#2B1B12] text-white">Persistent village</span>
              </div>
            </div>
            {/* Card */}
            <div className="order-1 lg:order-2 lg:pl-12"><Step1Card /></div>
          </div>

          {/* ── STEP 2 — Circle Engine (full section with shared state) ── */}
          <Step2Section />

          {/* ── STEP 3 ── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            {/* Text */}
            <div className="relative lg:text-right order-2 lg:order-1">
              <div className="hidden lg:block absolute -right-[62px] top-0 w-12 h-12 rounded-full bg-[#2B1B12] text-white grid place-items-center shadow-sm">
                <span className="playfair font-bold text-[16px]">3</span>
              </div>
              <div className="lg:hidden flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#D4A017] text-[#2B1B12] grid place-items-center font-bold playfair text-[16px] shadow-[0_6px_18px_rgba(212,160,23,0.35)]">3</div>
                <div className="h-[1px] flex-1 bg-[#D4A017]/20" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2B1B12] text-white px-3 py-1 text-[11px] tracking-widest">
                <span>🔄</span><span>Auto-rotate</span>
              </div>
              <h2 className="playfair mt-5 text-[28px] lg:text-[42px] leading-[0.95] font-bold tracking-[-0.02em] text-[#2B1B12]">
                Auto-debit.<br /><span className="text-[#D4A017]">Auto-payout.</span><br />Auto-trust.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] opacity-70 lg:ml-auto lg:max-w-[440px] text-[#2B1B12]">
                Auto-debit via GoCardless → Modulr vault → Payout to who&apos;s next → Trust score +5.{' '}
                <span className="font-semibold text-[#2B1B12]">Your money never touches admin.</span>{' '}
                £250 collected → £5 insurance pool → £243.75 to you.
              </p>
              <div className="mt-6 inline-flex lg:ml-auto flex-col items-start gap-2 rounded-[14px] bg-white border border-[#2B1B12]/[0.06] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <p className="text-[11px] tracking-widest opacity-50 text-[#2B1B12]">AUTO-ROTATE</p>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#2B1B12]">
                  <span>🔄</span><span>Collect</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2 lg:justify-end">
                <span className="text-[11px] px-2.5 py-1 rounded-full font-medium bg-[#D4A017]/15 text-[#8A6A10]">FCA protected</span>
                <span className="text-[11px] px-2.5 py-1 rounded-full font-medium bg-[#2B1B12] text-white">Automatic</span>
              </div>
            </div>
            {/* Card */}
            <div className="order-1 lg:order-2 lg:pl-12"><Step3Card /></div>
          </div>
        </div>
      </section>

      {/* ── Before vs After ── */}
      <BeforeAfter />

      {/* ── CTA ── */}
      <CTASection />
    </div>
  );
}
