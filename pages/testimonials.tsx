import Head from 'next/head';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'DevOps Engineer at TCS',
    text: 'The live sessions with instructors were game-changing. Real-time Q&A and hands-on guidance accelerated my learning by months. The batch mates became great networking contacts too!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Cloud Architect at Infosys',
    text: 'Instructor-led training was exactly what I needed. Can access recordings forever, so I reviewed tough concepts multiple times. Got promoted within 4 months of completing the course.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Senior SRE at HCL Tech',
    text: 'The small batch size meant personalized attention. Instructors answered every question thoroughly. Now credible talking about production-grade DevOps practices in interviews.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials - TechRunniti</title>
        <meta name="description" content="Student testimonials and success stories" />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-primary to-gray-900 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gold mb-4">Student Success Stories</h1>
          <p className="text-center text-gray-300 mb-16">Hear from our graduates</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-primary p-6 rounded shadow-lg border border-gray-700 hover:border-accent transition">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testi.text}&quot;</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-gold">{testi.name}</p>
                  <p className="text-sm text-gray-400">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
