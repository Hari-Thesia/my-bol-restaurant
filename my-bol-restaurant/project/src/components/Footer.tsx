import { Instagram, Facebook, Phone, MapPin, Clock, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import { RESTAURANT } from '@/data/images';

interface FooterProps {
  onNavigate: (p: Page) => void;
}

const NAV_LINKS: [string, Page][] = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Gallery', 'gallery'],
  ['Reservations', 'reservations'],
  ['Contact', 'contact'],
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink-950 border-t border-gold-400/10 bg-grain relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl tracking-[0.15em] text-gold-200 mb-2 text-shadow-gold">CUORE</h3>
            <p className="text-[10px] tracking-[0.35em] uppercase text-ink-400 mb-4">by Masala Diaries</p>
            <p className="body-text text-sm max-w-xs">
              Built by heart. Experienced by you. A space where ambience meets moments.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="section-label mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-sm text-ink-300 hover:text-gold-200 transition-colors duration-300 gold-line"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={RESTAURANT.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-300 hover:text-gold-200 transition-colors duration-300 inline-flex items-center gap-1"
                >
                  Menu
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-5">Visit Us</h4>
            <ul className="space-y-4 text-sm text-ink-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{RESTAURANT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${RESTAURANT.phone}`} className="hover:text-gold-200 transition-colors">{RESTAURANT.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={RESTAURANT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold-200 transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Daily: 11:00 AM – 11:00 PM<br />Reservation basis only</span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="section-label mb-5">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400 hover:text-gold-200 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={RESTAURANT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400 hover:text-gold-200 hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={RESTAURANT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400 hover:text-gold-200 hover:-translate-y-1 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => onNavigate('reservations')}
              className="btn-gold w-full"
            >
              Reserve a Table
            </button>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500 tracking-wide">
            © {new Date().getFullYear()} CUORE by Masala Diaries. All rights reserved.
          </p>
          <p className="text-xs text-ink-500 flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-gold-400 fill-gold-400" /> in Rajkot
          </p>
        </div>
      </div>
    </footer>
  );
}
