import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, Phone, MapPin, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { BRAND, SERVICES, getWhatsAppUrl } from '../data/content';

export const ContactPage: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState('Manicure');
  const [timePreference, setTimePreference] = useState('Anytime');
  const [customNote, setCustomNote] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Dynamic WhatsApp Message generator based on user input
  const generatedMessage = React.useMemo(() => {
    let msg = `Ahee 👋 I would like to book an appointment with Malak Cre@ions.`;
    if (clientName.trim()) {
      msg = `Ahee 👋 My name is ${clientName.trim()}, and I would like to book an appointment with Malak Cre@ions.`;
    }
    msg += `\n\nService: ${selectedService}`;
    if (timePreference !== 'Anytime') {
      msg += `\nPreferred Timing: ${timePreference}`;
    }
    if (customNote.trim()) {
      msg += `\nNote: ${customNote.trim()}`;
    }
    msg += `\n\nPlease share your available times and pricing.`;
    return msg;
  }, [clientName, selectedService, timePreference, customNote]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BRAND.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-[#FAF7F5] py-16 md:py-20 border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
            Get in Touch
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#261D1D] mb-4">
            Book Your Appointment
          </h1>
          <p className="text-base sm:text-lg text-[#5A4843] leading-relaxed">
            Contact Malak Cre@ions through WhatsApp to check availability, discuss custom designs, and reserve your studio session in Giyani.
          </p>
        </div>
      </section>

      {/* Main Content: Booking Info & Interactive WhatsApp Inquiry Form */}
      <section className="py-16 md:py-24 bg-[#FAF7F5] border-b border-[#E8DDD6]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#9F5F51] mb-2">
                  Studio Details
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#261D1D] mb-4">
                  Direct WhatsApp Scheduling
                </h2>
                <p className="text-sm text-[#5A4843] leading-relaxed mb-6">
                  We schedule all appointments through WhatsApp to provide one-on-one attention, send reminder details, and answer any styling questions before you visit.
                </p>

                {/* Info Cards */}
                <div className="space-y-4">
                  {/* WhatsApp Direct */}
                  <div className="p-5 rounded-md bg-[#F4EFEB] border border-[#E8DDD6]">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                          <MessageCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#7B6A65] font-semibold">WhatsApp Booking</p>
                          <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-serif text-base font-bold text-[#261D1D] hover:text-[#9F5F51] transition-colors"
                          >
                            {BRAND.phoneDisplay}
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="p-2 text-[#7B6A65] hover:text-[#261D1D] transition-colors cursor-pointer"
                        title="Copy phone number"
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? <Check className="h-4 w-4 text-[#9F5F51]" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-5 rounded-md bg-[#F4EFEB] border border-[#E8DDD6]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF7F5] text-[#9F5F51] border border-[#E8DDD6]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#7B6A65] font-semibold">Studio Location</p>
                        <p className="font-serif text-base font-bold text-[#261D1D]">
                          {BRAND.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant 1-Click WhatsApp Button */}
              <div className="rounded-md bg-[#261D1D] p-6 text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E4C5B9] mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Fast Track</span>
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">
                  Instant Booking Request
                </h3>
                <p className="text-xs text-[#D8C7BC] mb-5 leading-relaxed">
                  Click below to immediately open WhatsApp with our default booking message.
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#261D1D] bg-[#FAF7F5] hover:bg-[#F2D8CF] transition-colors rounded-sm shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Inquiry Composer */}
            <div className="lg:col-span-7">
              <div className="rounded-md bg-white border border-[#E8DDD6] p-6 sm:p-8 shadow-xs">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-[#261D1D] mb-1">
                    Customize Your Booking Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4843]">
                    Select your preferences below to automatically craft a tailored message to send our studio.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(getWhatsAppUrl(generatedMessage), '_blank');
                  }}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4843] mb-1.5">
                      Your Name (Optional)
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      placeholder="e.g. Lerato, Nandi"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-sm border border-[#D8C7BC] bg-[#FAF7F5] text-sm text-[#261D1D] focus:border-[#9F5F51] focus:ring-1 focus:ring-[#9F5F51] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service selector */}
                  <div>
                    <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4843] mb-1.5">
                      Desired Service
                    </label>
                    <select
                      id="service-select"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-sm border border-[#D8C7BC] bg-[#FAF7F5] text-sm text-[#261D1D] focus:border-[#9F5F51] focus:ring-1 focus:ring-[#9F5F51] focus:outline-none transition-colors cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.priceNote})
                        </option>
                      ))}
                      <option value="Consultation / Not Sure Yet">Other / Consultation</option>
                    </select>
                  </div>

                  {/* Time Preference */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4843] mb-1.5">
                      Preferred Timing
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Anytime', 'Morning', 'Afternoon', 'Weekend'].map((timing) => (
                        <button
                          key={timing}
                          type="button"
                          onClick={() => setTimePreference(timing)}
                          className={`py-2 px-3 text-xs font-medium rounded-sm border transition-colors cursor-pointer text-center ${
                            timePreference === timing
                              ? 'bg-[#261D1D] text-white border-[#261D1D]'
                              : 'bg-[#FAF7F5] text-[#5A4843] border-[#D8C7BC] hover:border-[#9F5F51]'
                          }`}
                        >
                          {timing}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes / Requests */}
                  <div>
                    <label htmlFor="custom-note" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4843] mb-1.5">
                      Special Request or Notes (Optional)
                    </label>
                    <textarea
                      id="custom-note"
                      rows={2}
                      placeholder="e.g. Looking for short almond extensions or soak-off"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-sm border border-[#D8C7BC] bg-[#FAF7F5] text-sm text-[#261D1D] focus:border-[#9F5F51] focus:ring-1 focus:ring-[#9F5F51] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Preview Box */}
                  <div className="p-3.5 bg-[#FAF7F5] rounded-sm border border-[#E8DDD6] text-xs text-[#5A4843]">
                    <div className="font-semibold text-[#261D1D] mb-1 flex items-center justify-between">
                      <span>Message Preview:</span>
                      <span className="text-[10px] text-[#7B6A65]">Will be sent via WhatsApp</span>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-xs text-[#5A4843] bg-white p-2.5 rounded-xs border border-[#E8DDD6]/60">
                      {generatedMessage}
                    </pre>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#261D1D] hover:bg-[#9F5F51] transition-colors rounded-sm shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Send Inquiry on WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
