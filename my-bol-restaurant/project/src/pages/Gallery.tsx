import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import Reveal from '@/components/Reveal';
import { GALLERY_IMAGES, IMAGES } from '@/data/images';

interface GalleryProps {
  onNavigate: (p: Page) => void;
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % GALLERY_IMAGES.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.int1} alt="" className="w-full h-full object-cover opacity-25 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold-400/40" />
              <p className="section-label">A Visual Journey</p>
              <div className="w-8 h-px bg-gold-400/40" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="heading-1 mb-6">Gallery</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-text text-lg max-w-2xl mx-auto">
              Step inside Cuore — from the warm, intimate interiors to the sculptural details
              and the atmosphere that makes every visit memorable. Every frame tells a story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-20 lg:py-28 bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[280px] gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 80} animation="scale-in">
                <button
                  onClick={() => setLightboxIndex(i)}
                  className={`group relative w-full h-full overflow-hidden block ${
                    img.span === 'lg' ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs text-ink-100 font-light">{img.alt}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                    <ArrowRight className="w-3.5 h-3.5 text-gold-200 -rotate-45" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-900 border-t border-gold-400/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="heading-3 mb-6">See it in person</h2>
            <p className="body-text text-lg mb-8 max-w-xl mx-auto">
              Photos capture a moment — but the full Cuore experience is best lived.
            </p>
            <button onClick={() => onNavigate('reservations')} className="btn-gold group animate-pulse-gold">
              Reserve a Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-ink-200 hover:text-gold-200 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-ink-200 hover:text-gold-200 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-ink-200 hover:text-gold-200 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] px-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-center text-sm text-ink-300 mt-4 font-light">
              {GALLERY_IMAGES[lightboxIndex].alt} — {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
