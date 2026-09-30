import React, { useEffect } from 'react';
import { X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { GalleryItem, getWhatsAppUrl } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const bookingMsg = `Ahee 👋 I saw this look "${item.title}" in the Malak Cre@ions gallery and would love to book an appointment for something similar!`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B1515]/90 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-lg bg-[#FAF7F5] shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-10 rounded-full bg-[#1B1515]/70 p-2 text-white hover:bg-[#1B1515] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F5F51]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image Showcase */}
        <div className="relative md:w-3/5 bg-[#EFE8E2] min-h-[300px] max-h-[60vh] md:max-h-[80vh] flex items-center justify-center">
          <ImageWithFallback
            src={item.image}
            alt={item.altText}
            fallbackTitle={item.title}
            className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="p-6 md:w-2/5 flex flex-col justify-between bg-[#FAF7F5]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F5F51] mb-2">
              <span>{item.category}</span>
              <span aria-hidden="true">·</span>
              <span>Malak Cre@ions</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#261D1D] mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[#5A4843] leading-relaxed mb-4">
              Custom crafted beauty and nail service by Malak Cre@ions in Giyani. Designed to complement your style with clean precision and lasting elegance.
            </p>
            <div className="rounded-sm bg-[#F4EFEB] p-3 text-xs text-[#7B6A65]">
              <span className="font-semibold text-[#261D1D]">Pricing:</span> Available on request. Contact on WhatsApp for availability and custom styling quotes.
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DDD6]">
            <a
              href={getWhatsAppUrl(bookingMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors rounded-sm shadow-xs"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book This Look</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
