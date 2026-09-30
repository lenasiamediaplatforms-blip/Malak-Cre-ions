import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/content';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DDD6]/80 py-3.5'
          : 'bg-[#FAF7F5] border-b border-[#E8DDD6]/50 py-4.5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F5F51] rounded-sm"
          aria-label="Malak Cre@ions Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#261D1D] group-hover:text-[#9F5F51] transition-colors whitespace-nowrap">
            Malak Cre@ions
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A4843]" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#261D1D] font-semibold'
                    : 'text-[#5A4843] hover:text-[#9F5F51]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9F5F51] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors duration-200 rounded-sm shadow-xs whitespace-nowrap"
          >
            <span>Book Now</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-[#261D1D] hover:text-[#9F5F51] hover:bg-[#F2D8CF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F5F51]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 flex flex-col bg-[#FAF7F5] px-6 py-8 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-6 text-lg font-serif">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left pb-2 border-b border-[#E8DDD6]/60 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'text-[#9F5F51] font-semibold'
                      : 'text-[#261D1D] hover:text-[#9F5F51]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#9F5F51]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-8 flex flex-col gap-4 border-t border-[#E8DDD6]">
            <div className="text-xs text-[#7B6A65]">
              <p className="font-semibold text-[#261D1D]">{BRAND.name}</p>
              <p>{BRAND.location}</p>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-center text-sm font-semibold tracking-wider uppercase text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors rounded-sm"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
