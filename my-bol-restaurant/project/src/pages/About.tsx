import { Heart, UtensilsCrossed, Sparkles, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import Reveal from '@/components/Reveal';
import { IMAGES, RESTAURANT } from '@/data/images';

interface AboutProps {
  onNavigate: (p: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.main} alt="" className="w-full h-full object-cover opacity-30 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold-400/40" />
              <p className="section-label">Our Story</p>
              <div className="w-8 h-px bg-gold-400/40" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="heading-1 mb-6">About Cuore</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-text text-lg max-w-2xl mx-auto">
              <em className="text-gold-200">Cuore</em> — the Italian word for heart — captures
              everything we stand for: food made with passion, served with warmth, and savoured
              in good company.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 lg:py-32 bg-ink-950 bg-grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-right">
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={IMAGES.int1}
                    alt="Cuore dining interior"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400/40 -z-0 hidden sm:block" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-400/10 -z-0 hidden sm:block animate-float-slow" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="section-label mb-6">The Vision</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="heading-2 mb-8">Born from Masala Diaries</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="body-text text-lg mb-5">
                  Masala Diaries began as a love letter to food — by a foodie, for a foodie.
                  What started as a celebration of authentic, delicious flavours evolved into
                  Rajkot's most distinctive dining experiences.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="body-text text-lg mb-5">
                  Cuore is the latest chapter: a reservation-only fine dining destination that
                  brings together the best of Italian, Asian, Mexican, and Indian cuisine under
                  one curated menu. First-of-its-kind in Rajkot, it is a space where ambience
                  meets moments.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <p className="body-text text-lg">
                  Led by Chef Arun Chanda, known for an innovative approach to food and
                  beverages, every dish at Cuore is composed with intent and designed with heart.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal>
              <p className="section-label mb-4">What We Stand For</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-2">The Cuore philosophy</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Built by Heart",
                text: "Every plate, every detail, every moment — crafted with genuine passion and care. Cuore is more than a restaurant; it is an expression of love for food and hospitality.",
              },
              {
                icon: UtensilsCrossed,
                title: "Curated with Intent",
                text: "A first-of-its-kind menu that blends four cuisines into one seamless journey. Each dish is designed to surprise, delight, and leave a lasting impression.",
              },
              {
                icon: Sparkles,
                title: "Experienced by You",
                text: "Warm, intimate, and effortlessly charming. We create the space — you bring the company, the conversations, and the moments worth remembering.",
              },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 120}>
                <div className="group luxury-card h-full p-8 lg:p-10">
                  <div className="w-14 h-14 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                    <value.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink-50 font-light mb-4">{value.title}</h3>
                  <p className="body-text">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.int2} alt="" className="w-full h-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Quote className="w-12 h-12 text-gold-400/60 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-50 font-light italic leading-[1.4] mb-8">
              "The ambience at Cuore was genuinely great — such a warm and aesthetic vibe to
              spend your evening in. The food was also nice, totally hitting the spot from
              starters to drinks. Overall, a solid 9/10 experience."
            </blockquote>
            <p className="text-sm tracking-[0.2em] uppercase text-gold-400">A Guest's Words</p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-ink-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal>
              <p className="section-label mb-4">Our Journey</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-2">The Masala Diaries story</h2>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/40 via-ink-700 to-transparent md:-translate-x-1/2" />
            {[
              { title: "The Beginning", text: "Masala Diaries is born — a foodie's dream of bringing authentic, tasteful dishes to Rajkot." },
              { title: "Meraki The Dinner", text: "Our first dining concept: a retro-themed restaurant with an extensive menu and exciting mocktails." },
              { title: "CUORE", text: "Rajkot's most refined reservation-only fine dining experience — a curated, multi-cuisine journey led by Chef Arun Chanda." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 150}>
                <div className={`relative flex items-start gap-6 mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold-400 -translate-x-1/2 mt-2 ring-4 ring-ink-950 animate-pulse-gold" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <h3 className="font-serif text-2xl text-gold-200 font-light mb-2">{item.title}</h3>
                    <p className="body-text">{item.text}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-900 border-t border-gold-400/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="heading-3 mb-6">Come experience the story yourself</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                View the Menu
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
