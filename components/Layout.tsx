import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { CONTACT_INFO, WHATSAPP_URL } from '@/config/contact';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-secondary text-white shadow-lg sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <Image 
              src="/logo.png" 
              alt="TechRunniti IT Academy" 
              width={64}
              height={64}
              unoptimized
              className="h-16 w-auto object-contain"
            />
            <div>
              <div className="text-xl font-bold text-light leading-tight">TechRunniti</div>
              <div className="text-xs text-accent font-semibold">IT Academy</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-bold">
            <li><Link href="/" className="text-light hover:text-accent transition">Home</Link></li>
            <li><Link href="/courses" className="text-light hover:text-accent transition">Courses</Link></li>
            <li><Link href="/about" className="text-light hover:text-accent transition">About</Link></li>
            <li><Link href="/contact" className="text-light hover:text-accent transition">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus-visible:ring-2 focus-visible:ring-accent rounded p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul id="mobile-menu" className="md:hidden bg-secondary border-t border-accent px-4 py-4 space-y-2 font-bold">
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-light hover:text-accent">Home</Link></li>
            <li><Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block text-light hover:text-accent">Courses</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-light hover:text-accent">About</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-light hover:text-accent">Contact</Link></li>
          </ul>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="TechRunniti IT Academy" 
                width={48}
                height={48}
                unoptimized
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-light text-sm">TechRunniti</div>
                <div className="text-xs text-accent">IT Academy</div>
              </div>
            </Link>
            <p className="text-dark">Enterprise DevOps & Cloud Training</p>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Quick Links</h4>
            <ul className="space-y-2 text-dark">
              <li><Link href="/courses" className="hover:text-light transition">Courses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Company</h4>
            <ul className="space-y-2 text-dark">
              <li><Link href="/about" className="hover:text-light transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-light transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Connect</h4>
            <ul className="space-y-2 text-dark">
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-light transition" aria-label="Contact us on WhatsApp">WhatsApp</a></li>
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-light transition">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-dark">
          <p>&copy; 2026 TechRunniti. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </ErrorBoundary>
  );
}
