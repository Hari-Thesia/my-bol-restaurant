import { MapPin, Phone, Clock, Instagram, Facebook, ArrowRight, Navigation, MessageCircle } from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import Reveal from '@/components/Reveal';
import { IMAGES, RESTAURANT } from '@/data/images';

interface ContactProps {
  onNavigate: (p: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.entry} alt="" className="w-full h-full object-cover opacity-25 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold-400/40" />
              <p className="section-label">Get in Touch</p>
              <div className="w-8 h-px bg-gold-400/40" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="heading-1 mb-6">Contact Us</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-text text-lg max-w-2xl mx-auto">
              Finding Cuore is part of the experience. Follow the route, reserve your table,
              and let us take care of the rest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-20 lg:py-28 bg-ink-950 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Address */}
            <Reveal>
              <div className="luxury-card group h-full p-8">
                <div className="w-14 h-14 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl text-ink-50 font-light mb-3">Visit Us</h3>
                <p className="body-text text-sm mb-4">{RESTAURANT.address}</p>
                <a
                  href={RESTAURANT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold-300 hover:text-gold-200 transition-colors flex items-center gap-2"
                >
                  Get Directions
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>

            {/* Phone */}
            <Reveal delay={120}>
              <div className="luxury-card group h-full p-8">
                <div className="w-14 h-14 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl text-ink-50 font-light mb-3">Call Us</h3>
                <p className="body-text text-sm mb-4">
                  Reservation basis only. Call to secure your table.
                </p>
                <a href={`tel:${RESTAURANT.phone}`} className="text-sm text-gold-300 hover:text-gold-200 transition-colors block mb-2">
                  {RESTAURANT.phone}
                </a>
                <a
                  href={RESTAURANT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold-300 hover:text-gold-200 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={240}>
              <div className="luxury-card group h-full p-8">
                <div className="w-14 h-14 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl text-ink-50 font-light mb-3">Opening Hours</h3>
                <div className="space-y-2 text-sm text-ink-300 font-light">
                  <div className="flex justify-between">
                    <span>Monday – Sunday</span>
                    <span className="text-gold-300">11 AM – 11 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch slots</span>
                    <span>12:30 – 3:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinner slots</span>
                    <span>7:30 – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map embed */}
          <Reveal>
            <div className="relative overflow-hidden border border-ink-700/50 aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps?q=150+Ft+Ring+Road+Rajkot+Gujarat&output=embed"
                className="w-full h-full grayscale invert opacity-80"
                loading="lazy"
                title="Cuore location map"
              />
              <div className="absolute top-4 left-4 bg-ink-950/90 backdrop-blur-md px-5 py-3 border border-gold-400/30 pointer-events-none">
                <p className="font-display text-lg text-gold-200 tracking-wider">CUORE</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink-400">150 Ft. Ring Road, Rajkot</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social + CTA */}
      <section className="py-20 bg-ink-900 border-t border-gold-400/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="section-label mb-6">Follow the Journey</p>
            <h2 className="heading-3 mb-8">Stay connected with Cuore</h2>
            <div className="flex items-center justify-center gap-4 mb-10">
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400 hover:text-gold-200 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={RESTAURANT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400 hover:text-gold-200 hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={RESTAURANT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400 hover:text-gold-200 hover:-translate-y-1 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <button onClick={() => onNavigate('reservations')} className="btn-gold group animate-pulse-gold">
              Reserve a Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
