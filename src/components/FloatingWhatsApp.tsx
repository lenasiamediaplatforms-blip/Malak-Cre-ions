import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="WhatsApp quick booking"
      className="fixed bottom-5 right-5 z-40 flex items-end gap-3"
    >
      {/* Gentle floating tooltip (dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 rounded-lg bg-[#261D1D] px-3.5 py-2 text-xs font-medium text-white shadow-lg animate-in fade-in slide-in-from-right-3 duration-300">
          <span>Book on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#D8C7BC] hover:text-white transition-colors cursor-pointer p-0.5"
            aria-label="Dismiss message preview"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Malak Cre@ions on WhatsApp (+27 79 957 1343)"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle breathing glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-xs group-hover:opacity-50 transition-opacity" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="relative h-7 w-7 fill-white stroke-none drop-shadow-xs" />
        
        {/* Online Indicator Dot */}
        <span className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#00E676]" />
      </a>
    </aside>
  );
};
