import React from 'react';
import { ArrowUpRight, MessageCircle, MapPin, CheckCircle2, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND, IMAGES, getWhatsAppUrl } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const approaches = [
    {
      title: 'Attention to Detail',
      desc: 'Meticulous preparation, shaping, cuticles, and application to ensure every nail is pristine and balanced.',
      icon: Sparkles,
    },
    {
      title: 'Personal Service',
      desc: 'One-on-one attention tailored to your nail health, personal aesthetic, lifestyle, and preferences.',
      icon: Heart,
    },
    {
      title: 'Clean Presentation',
      desc: 'Hygiene and cleanliness remain our highest priority with sanitized tools and a clean studio atmosphere.',
      icon: ShieldCheck,
    },
    {
      title: 'Creative Nail Designs',
      desc: 'From timeless elegance and French tips to modern abstract nail art, bespoke textures, and vibrant tones.',
      icon: Sparkles,
    },
    {
      title: 'Client Satisfaction',
      desc: 'We are committed to delivering results you love, leaving every client feeling beautiful and confident.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#FAF7F5] py-16 md:py-20 border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
            The Studio Story
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#261D1D] mb-4">
            About Malak Cre@ions
          </h1>
          <p className="text-base sm:text-lg text-[#5A4843] leading-relaxed">
            A dedicated beauty and nail studio in Giyani, Limpopo, created around the passion for confidence, creativity, and quality care.
          </p>
        </div>
      </section>

      {/* 1. OUR STORY */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-3">
                Our Story
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D] mb-6">
                Crafting Beauty &amp; Inspiring Confidence
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#5A4843] leading-relaxed">
                <p>
                  Malak Cre@ions is a beauty-focused studio in Giyani dedicated to providing thoughtful nail services and a serene, welcoming experience for every client.
                </p>
                <p>
                  Founded on a genuine love for artistic nail expression and refined aesthetics, we believe your nails are more than just a finishing touch—they are a reflection of your personality, style, and everyday confidence.
                </p>
                <p>
                  Whether you are preparing for a special occasion, maintaining healthy natural nails with regular manicures, or seeking creative statement nail art, Malak Cre@ions provides a calm, personalized space where your beauty vision comes to life.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8DDD6] flex items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors rounded-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-md shadow-lg aspect-[4/3]">
                <ImageWithFallback
                  src={IMAGES.studio}
                  alt="Malak Cre@ions peaceful studio setting in Giyani"
                  fallbackTitle="Studio Presentation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="py-16 md:py-24 bg-[#F4EFEB] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
              Our Core Principles
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D] mb-4">
              Our Approach
            </h2>
            <p className="text-sm sm:text-base text-[#5A4843]">
              Every client receives attentive care guided by these standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-md bg-[#FAF7F5] border border-[#E8DDD6] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F2D8CF]/50 text-[#9F5F51] mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#261D1D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A4843] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LOCATION SECTION */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F2D8CF] text-[#9F5F51] mb-5">
            <MapPin className="h-6 w-6" />
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
            Local Presence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261D1D] mb-4">
            Located in Giyani, Limpopo
          </h2>
          <p className="text-base text-[#5A4843] leading-relaxed max-w-xl mx-auto mb-6">
            Conveniently providing professional beauty and nail care for clients in <strong>Giyani, Limpopo, South Africa</strong> and surrounding communities.
          </p>
          <div className="rounded-md bg-[#F4EFEB] border border-[#E8DDD6] p-6 max-w-lg mx-auto text-xs text-[#5A4843]">
            <p className="font-semibold text-sm text-[#261D1D] mb-1">
              Visiting the Studio
            </p>
            <p>
              To maintain private, unhurried attention for every client, studio visits and appointments are scheduled directly via WhatsApp. Contact us prior to your arrival to reserve your time.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={getWhatsAppUrl('Ahee 👋 I would like to check studio location and booking availability in Giyani.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors rounded-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Contact for Availability</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-16 bg-[#261D1D] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Experience the Malak Cre@ions Difference
          </h2>
          <p className="text-sm sm:text-base text-[#D8C7BC] max-w-lg mx-auto mb-6">
            Ready to book your next nail transformation? Connect directly with us on WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl()}
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
    </div>
  );
};
