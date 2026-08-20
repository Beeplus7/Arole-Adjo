import Link from 'next/link';
import { brand } from '@/lib/brand';

export default function Footer() {
  return (
    <footer className="bg-[#2B1B12] text-[#FDFCF8] py-16 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Top */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full border border-[#D4A017]/40 flex items-center justify-center">
                <span className="font-display font-bold text-[#D4A017] text-[11px] tracking-[0.15em]">AA</span>
              </div>
              <span className="font-display font-semibold tracking-[0.18em] text-[13px]">AROLE ADJO</span>
            </div>
            <p className="font-sans text-[13px] text-[#FDFCF8]/60 leading-relaxed max-w-[280px]">
              The heirloom of trust. Ajo reimagined for Yoruba communities across the UK — secure, automated, and built on real community.
            </p>
            <p className="mt-5 font-sans text-[11px] tracking-[0.15em] text-[#D4A017]/70 uppercase">
              Ibadan × Oldham × Manchester
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#FDFCF8]/40 mb-4">Product</p>
            <ul className="space-y-3">
              {brand.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#FDFCF8]/40 mb-4">Community</p>
            <ul className="space-y-3">
              <li><Link href="/stories" className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">Ajo Stories</Link></li>
              <li><Link href="/faq" className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">Contact</Link></li>
              <li>
                <a href={brand.social.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#FDFCF8]/40 mb-4">Legal</p>
            <ul className="space-y-3">
              <li><Link href="/legal" className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal#privacy" className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal#fca" className="font-sans text-[13px] text-[#FDFCF8]/60 hover:text-[#D4A017] transition-colors">FCA Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#FDFCF8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-[#FDFCF8]/40">
            © 2025 Arole Adjo Ltd. All rights reserved. Heirloom of Trust — Brand Book MMXXV.
          </p>
          <p className="font-sans text-[11px] text-[#FDFCF8]/30">
            Arole Adjo operates under applicable UK financial regulations. Not FCA authorised. See legal page.
          </p>
        </div>
      </div>
    </footer>
  );
}
