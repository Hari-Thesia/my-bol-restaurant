import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageState } from '@/hooks/usePageState';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Reservations from '@/pages/Reservations';
import Contact from '@/pages/Contact';

export default function App() {
  const { page, navigate, transitioning } = usePageState();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar currentPage={page} onNavigate={navigate} />

      <main
        className={`transition-opacity duration-300 ease-out-expo ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div key={page} className="page-enter">
          {page === 'home' && <Home onNavigate={navigate} />}
          {page === 'about' && <About onNavigate={navigate} />}
          {page === 'gallery' && <Gallery onNavigate={navigate} />}
          {page === 'reservations' && <Reservations onNavigate={navigate} />}
          {page === 'contact' && <Contact onNavigate={navigate} />}
        </div>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
