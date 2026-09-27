import { useEffect, useState } from 'react';

export type Page = 'home' | 'about' | 'gallery' | 'reservations' | 'contact';

export function usePageState() {
  const [page, setPage] = useState<Page>('home');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Page;
    if (['home', 'about', 'gallery', 'reservations', 'contact'].includes(hash)) {
      setPage(hash);
    }
    const onHashChange = () => {
      const h = window.location.hash.slice(1) as Page;
      if (['home', 'about', 'gallery', 'reservations', 'contact'].includes(h)) {
        setPage(h);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (p: Page) => {
    if (p === page) return;
    setTransitioning(true);
    window.location.hash = p;
    setTimeout(() => {
      setPage(p);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setTransitioning(false);
    }, 400);
  };

  return { page, navigate, transitioning };
}
