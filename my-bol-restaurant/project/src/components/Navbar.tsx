import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import { RESTAURANT } from '@/data/images';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (p: Page) => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Reservations', page: 'reservations' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-ink-950/90 backdrop-blur-xl border-b border-gold-400/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 leading-none"
          >
            <img
              src="/logo copy.png"
              alt="CUORE by Masala Diaries"
              className="w-10 h-10 rounded-full object-cover ring-1 ring-gold-400/30 group-hover:ring-gold-300 transition-all duration-500"
            />
            <span className="flex flex-col items-start">
              <span className="font-display text-2xl tracking-[0.15em] text-gold-200 group-hover:text-gold-100 transition-colors duration-300 text-shadow-gold">
                CUORE
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-ink-400 mt-0.5 group-hover:text-gold-400 transition-colors duration-300">
                by Masala Diaries
              </span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`relative px-5 py-2 text-sm tracking-wide uppercase font-medium transition-colors duration-300 ${
                    currentPage === item.page
                      ? 'text-gold-300'
                      : 'text-ink-200 hover:text-gold-200'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold-400 transition-all duration-400 ease-out-expo ${
                      currentPage === item.page ? 'w-8' : 'w-0'
                    }`}
                  />
                </button>
              </li>
            ))}
            <li>
              <a
                href={RESTAURANT.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2 text-sm tracking-wide uppercase font-medium text-ink-200 hover:text-gold-200 transition-colors duration-300"
              >
                Menu
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold-400 w-0 hover:w-8 transition-all duration-400 ease-out-expo" />
              </a>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-200 hover:text-gold-200 transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="flex items-center gap-2 text-sm text-ink-200 hover:text-gold-200 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="tracking-wide">{RESTAURANT.phone}</span>
            </a>
            <button
              onClick={() => onNavigate('reservations')}
              className="btn-gold !py-2.5 !px-6"
            >
              Reserve
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gold-200 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out-expo ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`relative flex flex-col items-center justify-center h-full gap-2 transition-transform duration-500 ease-out-expo ${mobileOpen ? 'translate-y-0' : '-translate-y-8'}`}>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              style={{ transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms' }}
              className={`text-2xl font-serif font-light tracking-wide transition-all duration-500 ${
                mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${currentPage === item.page ? 'text-gold-300' : 'text-ink-100'}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={RESTAURANT.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: mobileOpen ? `${NAV_ITEMS.length * 60 + 100}ms` : '0ms' }}
            className={`text-2xl font-serif font-light tracking-wide transition-all duration-500 ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } text-ink-100`}
          >
            Menu
          </a>
          <a
            href={`tel:${RESTAURANT.phone}`}
            className="mt-8 flex items-center gap-2 text-base text-gold-200"
          >
            <Phone className="w-4 h-4" />
            {RESTAURANT.phone}
          </a>
        </div>
      </div>
    </>
  );
}
