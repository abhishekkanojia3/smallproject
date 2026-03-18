import Head from 'next/head';
import { useState } from 'react';
import { z } from 'zod';
import { CONTACT_INFO, WHATSAPP_URL } from '@/config/contact';

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
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const endpoint = process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT;
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        throw new Error(data?.error || 'Failed to send message. Please try again.');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      if (err instanceof TypeError && err.message.toLowerCase().includes('failed to fetch')) {
        const hint = endpoint
          ? `Network error contacting the server. Please verify NEXT_PUBLIC_LAMBDA_ENDPOINT is a valid HTTPS URL and that the endpoint is reachable (open it in a new tab; it should respond with 405/JSON).`
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
        <title>Contact Us - TechRunniti</title>
        <meta name="description" content="Get in touch with TechRunniti" />
        {recaptchaSiteKey ? (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`}
            async
            defer
          />
        ) : null}
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-primary to-gray-900 px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gold mb-4">Contact Us</h1>
          <p className="text-center text-gray-300 mb-12">Have questions? Reach out to our team.</p>

          <div className="bg-primary p-8 rounded shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-accent font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-700 bg-gray-800 px-4 py-2 rounded text-white focus:outline-none focus:border-accent placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-accent font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-700 bg-gray-800 px-4 py-2 rounded text-white focus:outline-none focus:border-accent placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-accent font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-700 bg-gray-800 px-4 py-2 rounded text-white focus:outline-none focus:border-accent placeholder-gray-500"
                  required
                ></textarea>
              </div>

              {error && <p className="text-red-400 font-bold">{error}</p>}
              {success && <p className="text-gold font-bold">✓ Message sent successfully!</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-secondary text-primary px-6 py-3 rounded font-bold disabled:opacity-50 transition shadow-lg"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-accent mb-4">Other Ways to Reach Us</h2>
              <p className="text-gray-300 mb-2">📧 Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent hover:text-gold transition">{CONTACT_INFO.email}</a></p>
              <p className="text-gray-300 mb-2">📞 Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="text-accent hover:text-gold transition">{CONTACT_INFO.phone}</a></p>
              <p className="text-gray-300">💬 <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-gold transition">WhatsApp</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
