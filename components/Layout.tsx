import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg sticky top-0 z-50 border-b-4 border-accent">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img 
              src="/logo.png" 
              alt="TechRunniti IT Academy" 
              className="h-16 w-auto object-contain"
            />
            <div>
              <div className="text-xl font-bold text-gold leading-tight">TechRunniti</div>
              <div className="text-xs text-accent font-semibold">IT Academy</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-bold">
            <li><Link href="/" className="text-gold hover:text-accent transition">Home</Link></li>
            <li><Link href="/courses" className="text-gold hover:text-accent transition">Courses</Link></li>
            <li><Link href="/pricing" className="text-gold hover:text-accent transition">Pricing</Link></li>
            <li><Link href="/blog" className="text-gold hover:text-accent transition">Blog</Link></li>
            <li><Link href="/about" className="text-gold hover:text-accent transition">About</Link></li>
            <li><Link href="/contact" className="text-gold hover:text-accent transition">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden bg-primary border-t border-accent px-4 py-4 space-y-2 font-bold">
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-accent">Home</Link></li>
            <li><Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block hover:text-accent">Courses</Link></li>
            <li><Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block hover:text-accent">Pricing</Link></li>
            <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block hover:text-accent">Blog</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-accent">About</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-accent">Contact</Link></li>
          </ul>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 mt-20 border-t-4 border-accent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="TechRunniti IT Academy" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-gold text-sm">TechRunniti</div>
                <div className="text-xs text-accent">IT Academy</div>
              </div>
            </Link>
            <p className="text-gray-400">Enterprise DevOps & Cloud Training</p>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/courses" className="hover:text-gold transition">Courses</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition">Blog</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://twitter.com/techrunniti" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">Twitter</a></li>
              <li><a href="https://linkedin.com/company/techrunniti" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">LinkedIn</a></li>
              <li><a href="https://wa.me/919131590319" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechRunniti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
