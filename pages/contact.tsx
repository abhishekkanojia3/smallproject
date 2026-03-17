import Head from 'next/head';
import { useState } from 'react';
import { z } from 'zod';

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

      // For static deployments, show success - integrate with Lambda/SES in production
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - TechRunniti</title>
        <meta name="description" content="Get in touch with TechRunniti" />
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
              <p className="text-gray-300 mb-2">📧 Email: hello@techrunniti.com</p>
              <p className="text-gray-300 mb-2">📞 Phone: +91-9876543210</p>
              <p className="text-gray-300">💬 <a href="https://wa.me/919131590319" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-gold transition">WhatsApp</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
