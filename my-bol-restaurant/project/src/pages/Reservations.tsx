import { useState } from 'react';
import {
  Calendar, Clock, Users, User, Phone, Mail, Sparkles, CheckCircle2, Loader2,
  ArrowRight, PartyPopper, PhoneCall, MessageCircle, FileText, ChevronRight,
} from 'lucide-react';
import type { Page } from '@/hooks/usePageState';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { IMAGES, RESTAURANT } from '@/data/images';

interface ReservationsProps {
  onNavigate: (p: Page) => void;
}

type BookingMethod = 'call' | 'whatsapp' | 'form';

const TIME_SLOTS = [
  '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM',
];

const PARTY_SIZES = [2, 3, 4, 5, 6, 7, 8, '8+'];

const OCCASIONS = ['Casual Dining', 'Birthday', 'Anniversary', 'Date Night', 'Business', 'Celebration', 'Other'];

export default function Reservations({ onNavigate }: ReservationsProps) {
  const [method, setMethod] = useState<BookingMethod | null>(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', partySize: 2, date: '', time: '',
    occasion: 'Casual Dining', specialRequests: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const update = (field: keyof typeof form, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('reservations').insert({
        name: form.name,
        phone: form.phone,
        email: form.email || null,
        party_size: typeof form.partySize === 'string' ? 9 : form.partySize,
        reservation_date: form.date,
        reservation_time: form.time,
        occasion: form.occasion,
        special_requests: form.specialRequests || null,
      });

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.');
    }
  };

  // Build WhatsApp message from form data
  const buildWhatsAppLink = () => {
    const msg = `Hello CUORE! I'd like to make a reservation.%0A%0AName: ${form.name || '—'}%0AParty Size: ${form.partySize}%0ADate: ${form.date || '—'}%0ATime: ${form.time || '—'}%0AOccasion: ${form.occasion}%0APhone: ${form.phone || '—'}%0ASpecial Requests: ${form.specialRequests || 'None'}`;
    return `${RESTAURANT.whatsapp.split('?')[0]}?text=${msg}`;
  };

  const buildEmailLink = () => {
    const subject = encodeURIComponent(`Reservation request from ${form.name || 'CUORE guest'}`);
    const body = encodeURIComponent(
      `Hello CUORE,\n\nI'd like to make a reservation.\n\nName: ${form.name || '—'}\nParty Size: ${form.partySize}\nDate: ${form.date || '—'}\nTime: ${form.time || '—'}\nOccasion: ${form.occasion}\nPhone: ${form.phone || '—'}\nEmail: ${form.email || '—'}\nSpecial Requests: ${form.specialRequests || 'None'}`
    );
    return `mailto:${RESTAURANT.email}?subject=${subject}&body=${body}`;
  };

  if (status === 'success') {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-ink-950 bg-grain px-6">
        <div className="max-w-lg text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto mb-8 animate-pulse-gold">
            <CheckCircle2 className="w-10 h-10 text-gold-400" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-ink-50 mb-4">Reservation Received</h1>
          <p className="body-text text-lg mb-2">
            Thank you, {form.name.split(' ')[0]}. Your request for a table of{' '}
            {typeof form.partySize === 'string' ? '8+' : form.partySize} on{' '}
            {new Date(form.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}{' '}
            at {form.time} has been received.
          </p>
          <p className="body-text mb-10">
            We will confirm your reservation shortly. For urgent requests, please
            call <a href={`tel:${RESTAURANT.phone}`} className="text-gold-300 hover:text-gold-200">{RESTAURANT.phone}</a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate('home')} className="btn-gold group">
              Back to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                setStatus('idle');
                setMethod(null);
                setForm({ name: '', phone: '', email: '', partySize: 2, date: '', time: '', occasion: 'Casual Dining', specialRequests: '' });
              }}
              className="btn-outline-gold"
            >
              New Reservation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.entry} alt="" className="w-full h-full object-cover opacity-30 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold-400/40" />
              <p className="section-label">Reservation Basis Only</p>
              <div className="w-8 h-px bg-gold-400/40" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="heading-1 mb-6">Book Your Table</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-text text-lg max-w-2xl mx-auto">
              Every reservation at Cuore becomes a celebration. Choose how you'd like to
              reserve — call us directly, message us on WhatsApp, or fill in the form below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Booking method selection */}
      <section className="py-20 lg:py-28 bg-ink-950 bg-grain">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          {method === null && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Option 1: Call Direct */}
              <Reveal>
                <button
                  onClick={() => setMethod('call')}
                  className="group luxury-card w-full p-8 lg:p-10 text-left h-full"
                >
                  <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                    <PhoneCall className="w-7 h-7 text-gold-400" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">Option 1</p>
                  <h3 className="font-serif text-2xl text-ink-50 font-light mb-3">Call Direct</h3>
                  <p className="body-text text-sm mb-6">
                    Speak to us directly and we'll secure your table over the phone. The fastest
                    way to confirm your reservation.
                  </p>
                  <div className="flex items-center gap-2 text-gold-300 text-sm group-hover:gap-3 transition-all duration-300">
                    {RESTAURANT.phone}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </Reveal>

              {/* Option 2: WhatsApp */}
              <Reveal delay={120}>
                <button
                  onClick={() => setMethod('whatsapp')}
                  className="group luxury-card w-full p-8 lg:p-10 text-left h-full"
                >
                  <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                    <MessageCircle className="w-7 h-7 text-gold-400" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">Option 2</p>
                  <h3 className="font-serif text-2xl text-ink-50 font-light mb-3">WhatsApp</h3>
                  <p className="body-text text-sm mb-6">
                    Send us your reservation details via WhatsApp and we'll confirm your booking
                    by message. Quick, easy, and convenient.
                  </p>
                  <div className="flex items-center gap-2 text-gold-300 text-sm group-hover:gap-3 transition-all duration-300">
                    Chat on WhatsApp
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </Reveal>

              {/* Option 3: Fill Form */}
              <Reveal delay={240}>
                <button
                  onClick={() => setMethod('form')}
                  className="group luxury-card w-full p-8 lg:p-10 text-left h-full"
                >
                  <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/5 group-hover:scale-110 transition-all duration-500">
                    <FileText className="w-7 h-7 text-gold-400" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">Option 3</p>
                  <h3 className="font-serif text-2xl text-ink-50 font-light mb-3">Fill Form & Email</h3>
                  <p className="body-text text-sm mb-6">
                    Complete the reservation form with your details and we'll get back to you to
                    confirm your booking. Perfect for detailed requests.
                  </p>
                  <div className="flex items-center gap-2 text-gold-300 text-sm group-hover:gap-3 transition-all duration-300">
                    Start Form
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </Reveal>
            </div>
          )}

          {/* Call method */}
          {method === 'call' && (
            <div className="animate-fade-up">
              <button onClick={() => setMethod(null)} className="text-sm text-ink-400 hover:text-gold-200 transition-colors mb-8 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 rotate-180" /> Back to options
              </button>
              <div className="max-w-lg mx-auto text-center">
                <div className="w-20 h-20 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto mb-8 animate-pulse-gold">
                  <PhoneCall className="w-10 h-10 text-gold-400" />
                </div>
                <h2 className="heading-3 mb-4">Call to Reserve</h2>
                <p className="body-text text-lg mb-8">
                  Our team is ready to take your call daily from 11 AM to 11 PM. Have your
                  preferred date, time, and party size ready.
                </p>
                <a href={`tel:${RESTAURANT.phone}`} className="btn-gold group animate-pulse-gold">
                  <PhoneCall className="w-4 h-4" />
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>
          )}

          {/* WhatsApp method */}
          {method === 'whatsapp' && (
            <div className="animate-fade-up">
              <button onClick={() => setMethod(null)} className="text-sm text-ink-400 hover:text-gold-200 transition-colors mb-8 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 rotate-180" /> Back to options
              </button>

              {/* Quick WhatsApp - no form needed */}
              <div className="max-w-lg mx-auto text-center mb-12">
                <div className="w-20 h-20 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="w-10 h-10 text-gold-400" />
                </div>
                <h2 className="heading-3 mb-4">WhatsApp Reservation</h2>
                <p className="body-text text-lg mb-8">
                  Tap below to open WhatsApp with a pre-filled reservation message, or fill in
                  your details first for a more specific request.
                </p>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold group animate-pulse-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </div>

              {/* Optional form to build a better WhatsApp message */}
              <div className="max-w-2xl mx-auto p-8 border border-ink-700/50 bg-ink-900/30 space-y-6">
                <p className="section-label text-center">Fill in details for a pre-filled message</p>
                <ReservationFields form={form} update={update} today={today} />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full group"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Form method */}
          {method === 'form' && (
            <div className="animate-fade-up">
              <button onClick={() => setMethod(null)} className="text-sm text-ink-400 hover:text-gold-200 transition-colors mb-8 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 rotate-180" /> Back to options
              </button>
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <ReservationFields form={form} update={update} today={today} />

                  {/* Email field (form method only) */}
                  <Reveal delay={250}>
                    <div>
                      <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
                        <Mail className="w-4 h-4" /> Email <span className="text-ink-500 normal-case tracking-normal text-xs">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-ink-900 border border-ink-700 text-ink-100 px-4 py-3.5 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder-ink-500"
                      />
                    </div>
                  </Reveal>

                  {/* Special requests */}
                  <Reveal delay={300}>
                    <div>
                      <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
                        <Sparkles className="w-4 h-4" /> Special Requests <span className="text-ink-500 normal-case tracking-normal text-xs">(optional)</span>
                      </label>
                      <textarea
                        value={form.specialRequests}
                        onChange={(e) => update('specialRequests', e.target.value)}
                        rows={3}
                        placeholder="Dietary requirements, seating preferences, surprise arrangements..."
                        className="w-full bg-ink-900 border border-ink-700 text-ink-100 px-4 py-3.5 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder-ink-500 resize-none"
                      />
                    </div>
                  </Reveal>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="p-4 border border-wine-500/40 bg-wine-900/20 text-wine-300 text-sm animate-fade-in">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <Reveal delay={350}>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-gold w-full group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Reservation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-ink-500 mt-4">
                        We'll confirm your reservation shortly. For same-day bookings, please call{' '}
                        <a href={`tel:${RESTAURANT.phone}`} className="text-gold-400 hover:text-gold-200">{RESTAURANT.phone}</a>.
                      </p>
                      <a
                        href={buildEmailLink()}
                        className="mt-4 mx-auto text-sm text-gold-300 hover:text-gold-200 transition-colors flex items-center justify-center gap-2"
                      >
                        Or send this request by email
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </Reveal>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info strip */}
      <section className="py-16 bg-ink-900 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Reveal>
            <Clock className="w-6 h-6 text-gold-400 mx-auto mb-3" />
            <p className="section-label mb-1">Lunch</p>
            <p className="text-sm text-ink-300">12:30 PM – 3:30 PM</p>
          </Reveal>
          <Reveal delay={100}>
            <Clock className="w-6 h-6 text-gold-400 mx-auto mb-3" />
            <p className="section-label mb-1">Dinner</p>
            <p className="text-sm text-ink-300">7:30 PM – 9:00 PM</p>
          </Reveal>
          <Reveal delay={200}>
            <Phone className="w-6 h-6 text-gold-400 mx-auto mb-3" />
            <p className="section-label mb-1">Call Us</p>
            <p className="text-sm text-ink-300">{RESTAURANT.phone}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ===== Shared reservation fields component ===== */
function ReservationFields({
  form,
  update,
  today,
}: {
  form: {
    name: string; phone: string; email: string; partySize: number | string;
    date: string; time: string; occasion: string; specialRequests: string;
  };
  update: (field: keyof typeof form, value: string | number) => void;
  today: string;
}) {
  return (
    <>
      {/* Party size */}
      <div>
        <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
          <Users className="w-4 h-4" /> Party Size
        </label>
        <div className="flex flex-wrap gap-2">
          {PARTY_SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => update('partySize', typeof size === 'number' ? size : size)}
              className={`w-12 h-12 flex items-center justify-center text-sm font-medium transition-all duration-300 border ${
                form.partySize === size
                  ? 'border-gold-400 bg-gold-400/10 text-gold-200'
                  : 'border-ink-700 text-ink-300 hover:border-ink-500'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
            <Calendar className="w-4 h-4" /> Date
          </label>
          <input
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
            required
            className="w-full bg-ink-900 border border-ink-700 text-ink-100 px-4 py-3.5 text-sm focus:border-gold-400 focus:outline-none transition-colors [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
            <Clock className="w-4 h-4" /> Time
          </label>
          <select
            value={form.time}
            onChange={(e) => update('time', e.target.value)}
            required
            className="w-full bg-ink-900 border border-ink-700 text-ink-100 px-4 py-3.5 text-sm focus:border-gold-400 focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Occasion */}
      <div>
        <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
          <PartyPopper className="w-4 h-4" /> Occasion
        </label>
        <div className="flex flex-wrap gap-2">
          {OCCASIONS.map((occ) => (
            <button
              key={occ}
              type="button"
              onClick={() => update('occasion', occ)}
              className={`px-4 py-2.5 text-sm font-light transition-all duration-300 border ${
                form.occasion === occ
                  ? 'border-gold-400 bg-gold-400/10 text-gold-200'
                  : 'border-ink-700 text-ink-300 hover:border-ink-500'
              }`}
            >
              {occ}
            </button>
          ))}
        </div>
      </div>

      {/* Contact info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
            <User className="w-4 h-4" /> Full Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            required
            placeholder="Your name"
            className="w-full bg-ink-900 border border-ink-700 text-ink-100 px-4 py-3.5 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder-ink-500"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm text-gold-300 mb-4 tracking-wide uppercase font-medium">
            <Phone className="w-4 h-4" /> Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            required
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-ink-900 border border-ink-700 text-ink-100 px-4 py-3.5 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder-ink-500"
          />
        </div>
      </div>
    </>
  );
}
