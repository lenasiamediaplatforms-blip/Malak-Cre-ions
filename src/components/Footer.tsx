import React from 'react';
import { ArrowUpRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/content';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-[#E8DDD6] bg-[#F4EFEB] text-[#261D1D]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#261D1D]">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm font-medium tracking-wide text-[#7B6A65]">
              {BRAND.tagline}
            </p>
            <p className="text-sm text-[#5A4843] max-w-sm leading-relaxed">
              Professional beauty and nail studio in Giyani, dedicated to providing elegant nail finishes, personalized care, and confidence in every set.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#7B6A65] pt-1">
              <MapPin className="h-3.5 w-3.5 text-[#9F5F51] shrink-0" />
              <span>{BRAND.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9F5F51] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5A4843]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#9F5F51] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking & WhatsApp */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9F5F51]">
              Appointments
            </h3>
            <p className="text-sm text-[#5A4843] leading-relaxed">
              Book your session directly with us on WhatsApp to discuss your desired design, check available times, and confirm appointments.
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors duration-200 rounded-sm shadow-xs"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Book on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="text-xs text-[#7B6A65]">
              WhatsApp: <span className="font-semibold text-[#261D1D]">{BRAND.phoneDisplay}</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar with Copyright & TIM DIGITAL credit */}
        <div className="mt-12 pt-8 border-t border-[#E8DDD6]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B6A65]">
          <p>© {BRAND.copyrightYear} {BRAND.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Website by</span>
            <a
              href={BRAND.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#261D1D] hover:text-[#9F5F51] underline underline-offset-4 decoration-[#E8DDD6] hover:decoration-[#9F5F51] transition-colors"
            >
              {BRAND.websiteAgency}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
