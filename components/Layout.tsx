import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { CONTACT_INFO, WHATSAPP_URL } from '@/config/contact';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-surface text-ink">
        <header
          className={`sticky top-0 z-50 transition-all ${
            isScrolled ? 'bg-navy/95 shadow-lg backdrop-blur' : 'bg-navy/80 backdrop-blur'
          }`}
        >
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
            <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition">
              <div className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-xl bg-accent/15">
                <Image
                  src="/logo.png"
                  alt="TechRunniti IT Academy"
                  width={44}
                  height={44}
                  unoptimized
                  className="h-7 w-auto md:h-9 object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-base md:text-lg font-semibold text-gold font-display">TechRunniti</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent">IT Academy</div>
              </div>
            </Link>

            <ul className="hidden items-center gap-8 text-sm font-semibold text-slate md:flex">
              <li><Link href="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-gold transition">Courses</Link></li>
              <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>

            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:brightness-110 transition"
              >
                Enroll Now
              </Link>
            </div>

            <button
              className="md:hidden text-white bg-accent/20 hover:bg-accent/30 border border-accent/40 text-xs font-semibold focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-4 py-2 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? '✕ Close' : '☰ Menu'}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden bg-navy/98 backdrop-blur-lg border-t border-white/10 px-4 py-5 shadow-xl">
              <ul className="space-y-4 text-base font-semibold">
                <li>
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-white hover:text-gold transition py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    🏠 Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/courses" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-white hover:text-gold transition py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    📚 Courses
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-white hover:text-gold transition py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    👥 About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-white hover:text-gold transition py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    📖 Resources
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block text-white hover:text-gold transition py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    📞 Contact
                  </Link>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-accent to-accent/80 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-accent/40 hover:brightness-110 transition"
                >
                  🚀 Enroll Now
                </Link>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-navy text-white">
          <div className="mx-auto grid max-w-5xl items-start gap-6 md:gap-8 px-4 py-10 md:py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.65fr_0.9fr] lg:gap-10">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-xl bg-accent/15">
                  <Image
                    src="/logo.png"
                    alt="TechRunniti IT Academy"
                    width={40}
                    height={40}
                    unoptimized
                    className="h-6 w-auto md:h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm md:text-base font-semibold font-display text-gold">TechRunniti</div>
                  <div className="text-[10px] md:text-xs text-accent uppercase tracking-[0.2em]">Enterprise IT Training</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Premium cloud and DevSecOps programmes designed for professionals who want enterprise-grade skills and outcomes.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-accent uppercase tracking-[0.12em]">Programmes</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/courses" className="hover:text-white transition">Cloud Professional</Link></li>
                <li><Link href="/courses" className="hover:text-white transition">DevOps Engineer</Link></li>
                <li><Link href="/courses" className="hover:text-white transition">DevSecOps Master</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-accent uppercase tracking-[0.12em]">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-accent uppercase tracking-[0.12em]">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition">{CONTACT_INFO.email}</a></li>
                <li><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition">{CONTACT_INFO.phone}</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp Admissions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-5 md:py-6 text-center text-[10px] md:text-xs text-white/60">
            (c) 2026 TechRunniti IT Academy. All rights reserved.
          </div>
        </footer>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-semibold text-white shadow-lg shadow-accent/40 hover:brightness-110 transition"
          aria-label="Chat with TechRunniti on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-accent animate-ping-slow" />
          <span className="relative">Chat</span>
        </a>
      </div>
    </ErrorBoundary>
  );
}
