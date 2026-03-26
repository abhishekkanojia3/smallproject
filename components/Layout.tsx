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
            isScrolled ? 'bg-navy/95 shadow-lg backdrop-blur' : 'bg-transparent'
          }`}
        >
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                <Image
                  src="/logo.png"
                  alt="TechRunniti IT Academy"
                  width={44}
                  height={44}
                  unoptimized
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold text-gold font-display">TechRunniti</div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">IT Academy</div>
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
              className="md:hidden text-white text-sm font-semibold focus-visible:ring-2 focus-visible:ring-accent rounded px-3 py-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </nav>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden bg-navy/95 border-t border-white/10 px-4 py-4">
              <ul className="space-y-3 text-sm font-semibold text-slate">
                <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-gold">Home</Link></li>
                <li><Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block hover:text-gold">Courses</Link></li>
                <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-gold">About</Link></li>
                <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block hover:text-gold">Resources</Link></li>
                <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-gold">Contact</Link></li>
              </ul>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/30"
              >
                Enroll Now
              </Link>
            </div>
          )}
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-navy text-white">
          <div className="mx-auto grid max-w-5xl items-start gap-8 px-4 py-14 md:grid-cols-[1.4fr_0.8fr_0.65fr_0.9fr] lg:gap-10">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <Image
                    src="/logo.png"
                    alt="TechRunniti IT Academy"
                    width={40}
                    height={40}
                    unoptimized
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold font-display text-gold">TechRunniti</div>
                  <div className="text-xs text-accent uppercase tracking-[0.2em]">Enterprise IT Training</div>
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
          <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
            (c) 2026 TechRunniti IT Academy. All rights reserved.
          </div>
        </footer>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/40 hover:brightness-110 transition"
          aria-label="Chat with TechRunniti on WhatsApp"
        >
          Chat
        </a>
      </div>
    </ErrorBoundary>
  );
}
