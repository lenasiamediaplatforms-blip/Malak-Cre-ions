import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, Check, HelpCircle } from 'lucide-react';
import { SERVICES, BRAND, getWhatsAppUrl } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-[#FAF7F5] py-16 md:py-20 border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
            Service Catalogue
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#261D1D] mb-4">
            Our Studio Services
          </h1>
          <p className="text-base sm:text-lg text-[#5A4843] leading-relaxed">
            Thoughtfully designed nail and beauty services tailored to enhance your style, celebrate your hands, and ensure lasting beauty.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4EFEB] px-4 py-1.5 text-xs text-[#7B6A65] border border-[#E8DDD6]">
            <Sparkles className="h-3.5 w-3.5 text-[#9F5F51]" />
            <span>Official studio pricing is provided directly upon enquiry.</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between overflow-hidden rounded-md bg-white border border-[#E8DDD6] shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8E2]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.altText}
                      fallbackTitle={service.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF7F5]/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-[#5A4843] rounded-xs border border-[#E8DDD6]">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-serif text-2xl font-bold text-[#261D1D]">
                        {service.name}
                      </h2>
                    </div>

                    <p className="text-sm text-[#5A4843] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Service Key Features */}
                    <div className="space-y-1.5 mb-5 pt-2 border-t border-[#F4EFEB]">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#7B6A65]">
                          <Check className="h-3.5 w-3.5 text-[#9F5F51] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 bg-white">
                  <div className="flex items-center justify-between py-2 border-t border-[#E8DDD6] mb-4 text-xs">
                    <span className="text-[#7B6A65]">Pricing</span>
                    <span className="font-medium text-[#261D1D] bg-[#F4EFEB] px-2.5 py-1 rounded-xs">
                      {service.priceNote}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Ahee 👋 I would like to book a ${service.name} appointment with Malak Cre@ions in Giyani. Please share your available times and details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors rounded-sm shadow-xs"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Book Now</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Guidance */}
      <section className="py-16 md:py-20 bg-[#F4EFEB] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
              Simple &amp; Direct
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#261D1D] mb-3">
              How WhatsApp Booking Works
            </h2>
            <p className="text-sm text-[#5A4843]">
              We handle all appointments directly via WhatsApp to ensure clear communication, custom design alignment, and convenient scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-md bg-[#FAF7F5] border border-[#E8DDD6] p-6">
              <div className="font-serif text-lg font-bold text-[#9F5F51] mb-2">Step 01</div>
              <h3 className="font-serif text-base font-bold text-[#261D1D] mb-2">Choose Your Service</h3>
              <p className="text-xs sm:text-sm text-[#5A4843] leading-relaxed">
                Select your preferred service from our catalogue or send us an inspiration photo of the nail art you desire.
              </p>
            </div>

            <div className="rounded-md bg-[#FAF7F5] border border-[#E8DDD6] p-6">
              <div className="font-serif text-lg font-bold text-[#9F5F51] mb-2">Step 02</div>
              <h3 className="font-serif text-base font-bold text-[#261D1D] mb-2">Chat on WhatsApp</h3>
              <p className="text-xs sm:text-sm text-[#5A4843] leading-relaxed">
                Click any booking button. Your message will be pre-filled to connect directly with our studio at +27 79 957 1343.
              </p>
            </div>

            <div className="rounded-md bg-[#FAF7F5] border border-[#E8DDD6] p-6">
              <div className="font-serif text-lg font-bold text-[#9F5F51] mb-2">Step 03</div>
              <h3 className="font-serif text-base font-bold text-[#261D1D] mb-2">Confirm Your Time</h3>
              <p className="text-xs sm:text-sm text-[#5A4843] leading-relaxed">
                We will share available open slots and confirm your appointment time for your visit to our Giyani studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Notice */}
      <section className="py-16 bg-[#261D1D] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Have a Specific Design in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#D8C7BC] max-w-lg mx-auto mb-6">
            Share your inspirational photo or idea directly with us. We are happy to review your design and confirm availability.
          </p>
          <a
            href={getWhatsAppUrl('Ahee 👋 I have an inspiration photo for a nail design. Can I share it with you to check availability?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-[#FAF7F5] hover:bg-[#F2D8CF] transition-colors rounded-sm shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Send Inspiration on WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
