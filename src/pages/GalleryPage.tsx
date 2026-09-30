import React, { useState, useMemo } from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, Eye, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppUrl } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal } from '../components/LightboxModal';

type FilterCategory = 'All' | 'Nails' | 'Nail Art' | 'Beauty' | 'Studio';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: FilterCategory[] = ['All', 'Nails', 'Nail Art', 'Beauty', 'Studio'];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-[#FAF7F5] py-16 md:py-20 border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
            Visual Portfolio
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#261D1D] mb-4">
            Studio Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#5A4843] leading-relaxed">
            Explore our curated showcase of nail extensions, intricate nail art, gel finishes, and tranquil studio moments created in Giyani.
          </p>

          {/* Interactive Filter Controls (Functional Button Tabs adhering to Zero-Pill rules) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F4EFEB] rounded-md max-w-fit mx-auto border border-[#E8DDD6]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#261D1D] text-white shadow-xs'
                      : 'text-[#5A4843] hover:text-[#261D1D] hover:bg-[#FAF7F5]'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60 min-h-[500px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Active Filter Result Counter */}
          <div className="flex items-center justify-between text-xs text-[#7B6A65] mb-6">
            <span className="font-medium text-[#261D1D]">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'look' : 'looks'} in{' '}
              <span className="text-[#9F5F51] font-semibold">{activeCategory}</span>
            </span>
            <span className="hidden sm:inline">Click any image for full-screen preview &amp; booking</span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-16 text-center text-[#7B6A65] bg-white rounded-md border border-[#E8DDD6]">
              <p className="font-serif text-lg font-medium text-[#261D1D] mb-2">No looks found in this category</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="text-xs font-semibold uppercase tracking-wider text-[#9F5F51] underline underline-offset-4 cursor-pointer"
              >
                Reset to All
              </button>
            </div>
          ) : (
            /* Responsive Grid: 2 columns mobile, 2-3 columns tablet, 3-4 columns desktop */
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-md bg-[#EFE8E2] border border-[#E8DDD6] shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/5] sm:aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.altText}
                      fallbackTitle={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>

                  {/* Gradient Scrim & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515]/80 via-[#1B1515]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                    <div className="flex justify-end">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs text-white">
                        <Eye className="h-4 w-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#F2D8CF]">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-sm sm:text-base font-bold leading-tight mt-0.5 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-1 text-[11px] text-[#FAF7F5] font-medium underline underline-offset-2">
                        <span>Click to view &amp; book</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-16 bg-[#261D1D] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E4C5B9] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Inspired by Our Gallery?</span>
          </div>
          <h2 className="font-serif text-3xl font-bold mb-4">
            Book Your Custom Nail Look
          </h2>
          <p className="text-sm sm:text-base text-[#D8C7BC] max-w-lg mx-auto mb-6">
            Share a screenshot or describe your desired look on WhatsApp, and we will tailor it to perfection.
          </p>
          <a
            href={getWhatsAppUrl('Ahee 👋 I was browsing the Malak Cre@ions gallery and would like to book an appointment!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-[#FAF7F5] hover:bg-[#F2D8CF] transition-colors rounded-sm shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Book on WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
