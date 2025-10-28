/**
 * Strapi CMS Client
 * 
 * Fetches content from the Strapi CMS backend
 */

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://beaconir-production-4fd5.up.railway.app';

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiSingleType<T> {
  data: T;
}

interface StrapiCollection<T> {
  id: number;
  attributes: T;
}

/**
 * Fetch a single type from Strapi
 */
async function fetchSingleType<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${CMS_URL}/api${endpoint}?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${endpoint}:`, response.statusText);
      return null;
    }

    const data: StrapiSingleType<T> = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

/**
 * Fetch a collection type from Strapi
 */
async function fetchCollection<T>(endpoint: string): Promise<T[]> {
  try {
    const response = await fetch(`${CMS_URL}/api${endpoint}?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${endpoint}:`, response.statusText);
      return [];
    }

    const data: StrapiResponse<StrapiCollection<T>[]> = await response.json();
    return data.data.map((item) => item.attributes);
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}

// Content Type Interfaces
export interface Hero {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: any;
}

export interface Service {
  title: string;
  description: string;
  icon?: any;
  order: number;
}

export interface Testimonial {
  name: string;
  company: string;
  role?: string;
  quote: string;
  avatar?: any;
  order: number;
}

export interface About {
  title: string;
  description: string;
}

export interface CTA {
  title: string;
  buttonText?: string;
  buttonLink?: string;
}

// Fetch Functions
export const cms = {
  getHero: async () => fetchSingleType<Hero>('/hero'),
  getServices: async () => fetchCollection<Service>('/services'),
  getTestimonials: async () => fetchCollection<Testimonial>('/testimonials'),
  getAbout: async () => fetchSingleType<About>('/about'),
  getCTA: async () => fetchSingleType<CTA>('/cta'),
};

