/**
 * Application Type Definitions
 */

export interface Course {
  id: number;
  name: string;
  duration: string;
  price: string;
  mode: string;
  outcome: string;
  level: string;
  category: string;
  overview: string;
  syllabus: string[];
  brochureUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  preferredTime: string;
  message: string;
}

export interface Instructor {
  id: number;
  name: string;
  role: string;
  certs: string;
  initials: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  phone: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon?: string;
}
