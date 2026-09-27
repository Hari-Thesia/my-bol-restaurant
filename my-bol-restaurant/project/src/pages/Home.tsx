import { ArrowRight, Star, Clock, MapPin, Phone, UtensilsCrossed, Sparkles, Heart, ExternalLink, ChevronDown } from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import Reveal from '@/components/Reveal';
import { IMAGES, GALLERY_IMAGES, FEATURED_IMAGES, RESTAURANT } from '@/data/images';

interface HomeProps {
  onNavigate: (p: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="CUORE restaurant interior"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 via-transparent to-ink-950/30" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-gold-400/40 animate-float hidden lg:block" />
        <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-gold-400/30 animate-float-slow hidden lg:block" />
        <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 rounded-full bg-gold-300/50 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-down opacity-start-0 animate-delay-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-400/50" />
              <p className="section-label">Rajkot's Curated Fine Dining</p>
              <div className="w-12 h-px bg-gold-400/50" />
            </div>
          </div>
          <h1 className="animate-fade-up opacity-start-0 animate-delay-300 font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[1.02] text-ink-50 text-shadow-lux mb-6">
            CUORE
          </h1>
          <p className="animate-fade-up opacity-start-0 animate-delay-500 font-serif text-xl sm:text-2xl md:text-3xl text-gold-200 font-light italic mb-4 text-shadow-gold">
            Built by heart. Experienced by you.
          </p>
          <p className="animate-fade-in opacity-start-0 animate-delay-700 text-ink-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A reservation-only dining experience where every plate has its own personality —
            from comforting flavours to playful presentations, crafted with soul.
          </p>
          <div className="animate-fade-up opacity-start-0 animate-delay-700 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate('reservations')} className="btn-gold group animate-pulse-gold">
              Reserve a Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={RESTAURANT.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold group"
            >
              View Menu
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-start-0 animate-delay-1000">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-ink-400">Scroll</span>
            <ChevronDown className="w-5 h-5 text-gold-400/60 animate-float" />
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="relative py-24 lg:py-32 bg-ink-950 bg-grain overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold-400/40" />
              <p className="section-label">Welcome to Cuore</p>
              <div className="w-8 h-px bg-gold-400/40" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-2 mb-8">
              Where every meal becomes <span className="text-gradient-gold italic">a moment</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-text text-lg max-w-2xl mx-auto mb-6">
              Cuore — Italian for <em className="text-gold-200">"heart"</em> — is Rajkot's most refined
              dining destination, born from the vision of Masala Diaries. Led by Chef Arun Chanda,
              our curated menu blends Italian, Asian, Mexican, and Indian flavours into a
              first-of-its-kind culinary journey.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="body-text text-lg max-w-2xl mx-auto">
              Every detail is composed with intent and designed with heart. From the warm,
              intimate ambience to the artful plating, Cuore is a space where conversations
              flow as smoothly as the experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FEATURED IMAGES ===== */}
      <section className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal>
              <p className="section-label mb-4">A Space Like No Other</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-2">Step inside the experience</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_IMAGES.map((item, i) => (
              <Reveal key={item.name} delay={i * 120} animation="scale-in">
                <div
                  className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
                  onClick={() => onNavigate('gallery')}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent transition-colors duration-500 group-hover:from-ink-950/90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">{item.category}</p>
                    <h3 className="font-serif text-xl text-ink-50 font-light">{item.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-500">
                    <ArrowRight className="w-4 h-4 text-gold-200 -rotate-45" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <button onClick={() => onNavigate('gallery')} className="btn-outline-gold group">
                View Full Gallery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== AMBIENCE PARALLAX ===== */}
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.int2} alt="Restaurant ambience" className="w-full h-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-ink-950/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <Reveal>
            <Sparkles className="w-10 h-10 text-gold-400 mx-auto mb-6 animate-float" />
            <h2 className="heading-2 mb-6">An ambience that becomes the highlight</h2>
            <p className="body-text text-lg">
              Warm, intimate, and effortlessly charming — Cuore is designed for those who
              appreciate good food, great company, and moments worth remembering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== STATS / INFO BAR ===== */}
      <section className="py-20 bg-ink-950 border-y border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { icon: UtensilsCrossed, label: "Multi-Cuisine", value: "Italian · Asian · Mexican · Indian" },
              { icon: Star, label: "Rating", value: "4.4 · 587+ Reviews" },
              { icon: Clock, label: "Open Daily", value: "11:00 AM – 11:00 PM" },
              { icon: Heart, label: "Reservation Only", value: "Book Your Experience" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="group text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center shrink-0 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                    <stat.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="section-label mb-1">{stat.label}</p>
                    <p className="text-sm text-ink-200 font-light">{stat.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <Reveal>
              <p className="section-label mb-4">A Glimpse Inside</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-2">The Cuore experience</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_IMAGES.slice(0, 8).map((img, i) => (
              <Reveal key={i} delay={i * 60} animation="scale-in">
                <div className={`group relative overflow-hidden ${img.span === 'lg' ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.entry} alt="" className="w-full h-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-ink-950/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="section-label mb-6">Reservation Basis Only</p>
            <h2 className="heading-2 mb-6">Your table is waiting</h2>
            <p className="body-text text-lg mb-10 max-w-xl mx-auto">
              Every reservation becomes a celebration. Secure your spot at Rajkot's most
              refined dining experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => onNavigate('reservations')} className="btn-gold group animate-pulse-gold">
                Book Your Table
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={`tel:${RESTAURANT.phone}`} className="btn-outline-gold">
                <Phone className="w-4 h-4" />
                Call to Reserve
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== LOCATION STRIP ===== */}
      <section className="py-16 bg-ink-950 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          <div className="flex items-center gap-3 text-ink-300">
            <MapPin className="w-5 h-5 text-gold-400" />
            <span className="text-sm">Near New 150 Ft. Ring Road, Rajkot</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-ink-700" />
          <div className="flex items-center gap-3 text-ink-300">
            <Clock className="w-5 h-5 text-gold-400" />
            <span className="text-sm">Daily 11 AM – 11 PM</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-ink-700" />
          <button onClick={() => onNavigate('contact')} className="text-sm text-gold-300 hover:text-gold-200 transition-colors flex items-center gap-2 group">
            Get Directions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
