/**
 * Contact Information and Configuration
 */

import type { ContactInfo } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  whatsapp: '919131590319',
  email: 'hello@techrunniti.com',
  phone: '+91-9876543210',
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;
export const WHATSAPP_MESSAGE_URL = (message: string) =>
  `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;

export const EMAIL_SUBJECT = 'Course Inquiry - TechRunniti';
export const EMAIL_BODY = 'Hi TechRunniti,\n\nI am interested in learning more about your courses.\n\nBest regards';
