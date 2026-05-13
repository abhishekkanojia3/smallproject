import Head from 'next/head';
import { useState } from 'react';
import { z } from 'zod';
import { CONTACT_INFO, WHATSAPP_URL } from '@/config/contact';
import { COURSES } from '@/lib/courses';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number must be valid'),
  subject: z.string().min(1, 'Please choose a subject'),
  preferredTime: z.string().min(1, 'Please choose a preferred time'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const subjects = COURSES.map((course) => course.name);
const timeSlots = ['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)'];

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    preferredTime: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const endpoint = process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT || '/api/contact';
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      contactSchema.parse(formData);
      setLoading(true);

      if (!endpoint) {
        throw new Error('Contact endpoint is not configured. Please try WhatsApp or email.');
      }

      let recaptchaToken: string | undefined;
      if (recaptchaSiteKey) {
        if (!window.grecaptcha) {
          throw new Error('Bot protection is still loading. Please try again in a moment.');
        }
        recaptchaToken = await new Promise((resolve, reject) => {
          window.grecaptcha!.ready(() => {
            window
              .grecaptcha!.execute(recaptchaSiteKey, { action: 'contact' })
              .then(resolve)
              .catch(reject);
          });
        });
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 404 && endpoint === '/api/contact') {
          throw new Error('Contact endpoint not found. Configure NEXT_PUBLIC_LAMBDA_ENDPOINT to your Lambda URL.');
        }
        throw new Error(data?.error || `Failed to send message (status ${res.status}). Please try again.`);
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', preferredTime: '', message: '' });
    } catch (err) {
      if (err instanceof TypeError && err.message.toLowerCase().includes('failed to fetch')) {
        const hint = endpoint
          ? 'Network error contacting the server. Please verify NEXT_PUBLIC_LAMBDA_ENDPOINT is a valid HTTPS URL.'
          : 'Network error. Please try WhatsApp or email.';
        setError(hint);
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact TechRunniti IT Academy</title>
        <meta name="description" content="Contact TechRunniti IT Academy for admissions, support, or corporate training." />
        {recaptchaSiteKey ? (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`}
            async
            defer
          />
        ) : null}
      </Head>

      <section className="bg-gradient-to-br from-primary via-navy to-midnight py-12 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Contact</div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold font-display">Let&apos;s design your learning roadmap.</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
            Share your goals and we will respond with the right programme, batch schedule, and pricing options.
          </p>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-tint bg-white p-6 md:p-8 shadow-lg shadow-black/5">
            <h2 className="text-xl md:text-2xl font-semibold text-ink font-display">Send an enquiry</h2>
            <p className="mt-2 text-sm text-slate">We typically respond within one business day.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate">Full name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-tint bg-surface px-4 py-3 text-sm text-ink focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate">Work email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-tint bg-surface px-4 py-3 text-sm text-ink focus:border-accent"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-tint bg-surface px-4 py-3 text-sm text-ink focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate">Programme</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-tint bg-surface px-4 py-3 text-sm text-ink focus:border-accent"
                    required
                  >
                    <option value="">Select</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate">Preferred callback time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-tint bg-surface px-4 py-3 text-sm text-ink focus:border-accent"
                  required
                >
                  <option value="">Select</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-tint bg-surface px-4 py-3 text-sm text-ink focus:border-accent"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-500 font-semibold">{error}</p>}
              {success && <p className="text-sm text-accent font-semibold">Message sent successfully.</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:brightness-110 transition disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-tint bg-white p-5 md:p-6 shadow-lg shadow-black/5">
              <h3 className="text-lg md:text-xl font-semibold text-ink font-display">Admissions desk</h3>
              <p className="mt-2 text-sm text-slate">Call, email, or WhatsApp us for immediate support.</p>
              <div className="mt-4 space-y-2 text-sm text-slate">
                <div>Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="text-accent font-semibold">{CONTACT_INFO.phone}</a></div>
                <div>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent font-semibold">{CONTACT_INFO.email}</a></div>
                <div>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold">Chat now</a></div>
              </div>
            </div>
            <div className="rounded-3xl border border-tint bg-white p-5 md:p-6 shadow-lg shadow-black/5">
              <h3 className="text-lg md:text-xl font-semibold text-ink font-display">Office location</h3>
              <p className="mt-2 text-sm text-slate">Hinjewadi, Pune - 411057</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-tint">
                <iframe
                  title="TechRunniti IT Academy Office"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.747%2C18.582%2C73.767%2C18.602&layer=mapnik&marker=18.5920937%2C73.7571423"
                  width="100%"
                  height="220"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-xs text-slate">
                <a
                  href="https://www.openstreetmap.org/#map=14/18.5920937/73.7571423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
