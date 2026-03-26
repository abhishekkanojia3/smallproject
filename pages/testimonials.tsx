import Head from 'next/head';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'DevOps Engineer at TCS',
    text: 'The live sessions with instructors were game-changing. Real-time Q&A and hands-on guidance accelerated my learning by months.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Cloud Architect at Infosys',
    text: 'Instructor-led training was exactly what I needed. I reviewed the lab recordings multiple times and earned my certification.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Senior SRE at HCL Tech',
    text: 'The small batch size meant personalised attention. I now feel confident speaking about production-grade DevSecOps practices.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials - TechRunniti IT Academy</title>
        <meta name="description" content="Student testimonials and success stories" />
      </Head>

      <section className="bg-gradient-to-br from-primary via-navy to-midnight py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Testimonials</div>
          <h1 className="mt-4 text-4xl font-semibold font-display">Student success stories</h1>
          <p className="mt-4 text-white/80">Hear from professionals who advanced their cloud careers with TechRunniti IT Academy.</p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <span key={i}>*</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate">&quot;{testi.text}&quot;</p>
                <div className="mt-6 border-t border-tint pt-4">
                  <p className="text-sm font-semibold text-ink">{testi.name}</p>
                  <p className="text-xs text-slate">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
