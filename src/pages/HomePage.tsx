import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { BRAND, SERVICES, WHY_CHOOSE_US, GALLERY_ITEMS, IMAGES, getWhatsAppUrl, GalleryItem } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { LightboxModal } from '../components/LightboxModal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF7F5] pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              {/* Domain Trust Marker / Kicker (Clean unboxed text, no pills) */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-4">
                <MapPin className="h-3.5 w-3.5" />
                <span>Giyani, Limpopo · Beauty &amp; Nail Studio</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#261D1D] leading-[1.12] mb-6">
                Beautiful Nails. <br />
                <span className="italic font-normal text-[#9F5F51]">Beautiful Confidence.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#5A4843] max-w-xl leading-relaxed mb-8">
                Professional beauty and nail services in Giyani, created to help you look and feel your best.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors duration-200 rounded-sm shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-transparent hover:bg-[#F2D8CF]/50 border border-[#D8C7BC] transition-colors duration-200 rounded-sm cursor-pointer"
                >
                  <span>View Services</span>
                </button>
              </div>

              {/* Quick local highlight */}
              <div className="mt-10 pt-6 border-t border-[#E8DDD6] flex items-center gap-6 text-xs text-[#7B6A65]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#9F5F51]" />
                  <span>Personalized 1-on-1 care</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#9F5F51]" />
                  <span>Studio located in Giyani</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-2.5 rounded-lg border border-[#D8C7BC]/50 -rotate-1 hidden sm:block" />
                
                <div className="relative overflow-hidden rounded-md shadow-xl aspect-[4/3] sm:aspect-[16/11]">
                  <ImageWithFallback
                    src={IMAGES.hero}
                    alt="Manicured feminine hands with elegant nude-pink nails by Malak Cre@ions in Giyani"
                    fallbackTitle="Malak Cre@ions Hero"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <p className="font-serif text-sm font-medium tracking-wide">Signature Nail Craftsmanship</p>
                    <p className="text-[#F2D8CF] text-[11px]">Malak Cre@ions · Giyani, Limpopo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW */}
      <section className="py-16 md:py-24 bg-[#F4EFEB] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="overflow-hidden rounded-md shadow-md aspect-[4/3]">
                <ImageWithFallback
                  src={IMAGES.studio}
                  alt="Malak Cre@ions peaceful beauty and nail studio interior in Giyani"
                  fallbackTitle="Studio Atmosphere"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
                About the Studio
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D] mb-4">
                Your Beauty, Our Passion
              </h2>
              <p className="text-base sm:text-lg text-[#5A4843] leading-relaxed mb-6">
                Malak Cre@ions is a beauty-focused studio in Giyani dedicated to creating beautiful nail looks and a relaxing experience for every client.
              </p>
              <p className="text-sm text-[#7B6A65] leading-relaxed mb-8">
                We believe that great nails are an expression of your individuality and personal confidence. From everyday clean manicures to bold bespoke art for special moments, each appointment is treated with gentle care, hygiene, and detail.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#261D1D] hover:text-[#9F5F51] border-b border-[#261D1D] hover:border-[#9F5F51] pb-1 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
                Our Offerings
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D]">
                Featured Services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9F5F51] hover:text-[#261D1D] transition-colors cursor-pointer"
            >
              <span>Explore all services</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-md bg-white border border-[#E8DDD6] shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8E2]">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.altText}
                    fallbackTitle={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F5]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-[#5A4843] rounded-xs border border-[#E8DDD6]/80">
                    {service.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#261D1D] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A4843] leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="text-xs text-[#7B6A65] italic mb-5">
                      {service.priceNote}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Ahee 👋 I would like to book a ${service.name} appointment with Malak Cre@ions.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-[#F4EFEB] hover:bg-[#261D1D] hover:text-white transition-colors duration-200 rounded-sm"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Book This Service</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-[#F4EFEB] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
              The Malak Cre@ions Standard
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D] mb-4">
              Why Choose Us
            </h2>
            <p className="text-sm sm:text-base text-[#5A4843]">
              Every set is created with care, precision, and passion for beauty right here in Giyani.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-md bg-[#FAF7F5] border border-[#E8DDD6] shadow-xs"
              >
                <div>
                  <div className="text-xs font-serif italic text-[#9F5F51] mb-3">
                    0{index + 1}.
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#261D1D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4843] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY PREVIEW */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
                Portfolio Showcase
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D]">
                Gallery Preview
              </h2>
            </div>
            <button
              type="button"
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9F5F51] hover:text-[#261D1D] transition-colors cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-md bg-[#EFE8E2] aspect-square shadow-xs hover:shadow-md transition-all duration-300"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.altText}
                  fallbackTitle={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-[#1B1515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#F2D8CF]">
                    {item.category}
                  </span>
                  <p className="font-serif text-sm font-semibold truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-[#F4EFEB] hover:bg-[#E8DDD6] transition-colors rounded-sm cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. BOOKING CTA FULL-WIDTH */}
      <section className="py-20 md:py-28 bg-[#261D1D] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E4C5B9] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Appointments Available in Giyani</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready for Your Next Look?
          </h2>
          <p className="text-base sm:text-lg text-[#D8C7BC] max-w-xl mx-auto leading-relaxed mb-8">
            Book your appointment with Malak Cre@ions today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-[#FAF7F5] hover:bg-[#F2D8CF] transition-colors rounded-sm shadow-md w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book on WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-6 text-xs text-[#A89891]">
            WhatsApp: +27 79 957 1343 · Giyani, Limpopo, South Africa
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
};
