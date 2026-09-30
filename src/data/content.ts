import heroImg from '../assets/images/hero_nails_studio_1790759191249.jpg';
import manicureImg from '../assets/images/manicure_gel_craft_1790759203144.jpg';
import extensionsImg from '../assets/images/nail_extensions_art_1790759216209.jpg';
import studioImg from '../assets/images/beauty_studio_vibe_1790759226329.jpg';
import frenchArtImg from '../assets/images/nail_art_french_1790759269705.jpg';
import customSculptImg from '../assets/images/custom_sculpted_1790759282669.jpg';
import naturalCareImg from '../assets/images/manicure_care_1790759294329.jpg';

export const BRAND = {
  name: 'Malak Cre@ions',
  tagline: 'Beauty & Nail Studio',
  location: 'Giyani, Limpopo, South Africa',
  phoneDisplay: '+27 79 957 1343',
  phoneRaw: '27799571343',
  defaultWhatsAppMessage: 'Ahee 👋 I would like to book an appointment with Malak Cre@ions. Please share your available times and services.',
  websiteAgency: 'TIM DIGITAL',
  agencyUrl: 'https://timdigital.co.za',
  copyrightYear: '2026',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || BRAND.defaultWhatsAppMessage;
  return `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceNote: string;
  image: string;
  altText: string;
  highlights: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'Nail Care',
    description: 'Professional nail care and finishing for clean, beautiful hands. Includes cuticle grooming, precise shaping, and flawless natural or buffed finish.',
    priceNote: 'Price available on request',
    image: naturalCareImg,
    altText: 'Professional manicure and natural nail care service at Malak Cre@ions in Giyani',
    highlights: ['Cuticle nourishment', 'Nail shaping & buffing', 'Clean hand finish'],
  },
  {
    id: 'gel-nails',
    name: 'Gel Nails',
    category: 'Nails',
    description: 'Long-lasting gel finishes with a polished, modern look. High-shine durability designed to protect your natural nails while staying flawless for weeks.',
    priceNote: 'Price available on request',
    image: manicureImg,
    altText: 'Glossy gel nails with modern high-shine finish',
    highlights: ['Chip-resistant gloss', 'UV-cured durability', 'Vibrant & neutral color range'],
  },
  {
    id: 'nail-extensions',
    name: 'Nail Extensions',
    category: 'Extensions',
    description: 'Beautiful extensions designed for clients wanting extra length and style. Expertly sculpted to match your preferred shape from almond to coffin or square.',
    priceNote: 'Price available on request',
    image: extensionsImg,
    altText: 'Sculpted nail extensions with refined length and shape',
    highlights: ['Custom length & apex', 'Flawless shaping', 'Lightweight comfortable feel'],
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    category: 'Art',
    description: 'Creative designs customized to your preferred look. From subtle minimalist linework and French tips to modern textures and statement accents.',
    priceNote: 'Price available on request',
    image: frenchArtImg,
    altText: 'Creative minimalist and modern nail art details',
    highlights: ['Freehand detail work', 'Modern accents', 'Tailored to your aesthetic'],
  },
  {
    id: 'custom-nail-designs',
    name: 'Custom Nail Designs',
    category: 'Bespoke',
    description: 'Unique nail concepts for special occasions, celebrations, or everyday style. Personalized sets crafted specifically around your outfit or vision.',
    priceNote: 'Price available on request',
    image: customSculptImg,
    altText: 'Custom luxury nail design for special events and everyday elegance',
    highlights: ['Bespoke design consultation', 'Special event styling', 'Distinctive aesthetics'],
  },
  {
    id: 'beauty-services',
    name: 'Beauty Services',
    category: 'Beauty',
    description: 'Additional beauty services offered by the studio in Giyani to complement your look and leave you feeling refreshed and confident.',
    priceNote: 'Price available on request',
    image: studioImg,
    altText: 'Relaxing beauty studio atmosphere and care at Malak Cre@ions in Giyani',
    highlights: ['Studio tranquility', 'Dedicated client care', 'Complementary treatments'],
  },
];

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'professional-service',
    title: 'Professional Service',
    description: 'Carefully delivered beauty services with attention to detail.',
  },
  {
    id: 'beautiful-results',
    title: 'Beautiful Results',
    description: 'Stylish designs created to match your personality.',
  },
  {
    id: 'personal-experience',
    title: 'Personal Experience',
    description: 'A welcoming experience focused on each individual client.',
  },
  {
    id: 'giyani-based',
    title: 'Giyani Based',
    description: 'Convenient beauty services for clients in Giyani and surrounding areas.',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Nails' | 'Nail Art' | 'Beauty' | 'Studio';
  image: string;
  altText: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Flawless Gloss Gel Nails',
    category: 'Nails',
    image: manicureImg,
    altText: 'Pristine glossy gel nails on manicured hands',
    aspect: 'square',
  },
  {
    id: 'g-2',
    title: 'Editorial Nail Art & Extensions',
    category: 'Nail Art',
    image: extensionsImg,
    altText: 'Almond shaped nail extensions with delicate art',
    aspect: 'portrait',
  },
  {
    id: 'g-3',
    title: 'Studio Sanctuary in Giyani',
    category: 'Studio',
    image: studioImg,
    altText: 'Malak Cre@ions beauty and nail studio interior aesthetic in Giyani',
    aspect: 'landscape',
  },
  {
    id: 'g-4',
    title: 'Modern French Line Art',
    category: 'Nail Art',
    image: frenchArtImg,
    altText: 'Chic modern French tips with fine line accents',
    aspect: 'portrait',
  },
  {
    id: 'g-5',
    title: 'Luxe Bespoke Nail Concept',
    category: 'Nails',
    image: customSculptImg,
    altText: 'Bespoke sculpted nails with chrome and pearl highlights',
    aspect: 'square',
  },
  {
    id: 'g-6',
    title: 'Natural Manicure & Cuticle Care',
    category: 'Beauty',
    image: naturalCareImg,
    altText: 'Clean natural manicure and hand wellness treatment',
    aspect: 'landscape',
  },
  {
    id: 'g-7',
    title: 'Signature Studio Hands',
    category: 'Beauty',
    image: heroImg,
    altText: 'Editorial hands posing with immaculate nude pink nails',
    aspect: 'landscape',
  },
];

export const IMAGES = {
  hero: heroImg,
  manicure: manicureImg,
  extensions: extensionsImg,
  studio: studioImg,
  frenchArt: frenchArtImg,
  customSculpt: customSculptImg,
  naturalCare: naturalCareImg,
};
