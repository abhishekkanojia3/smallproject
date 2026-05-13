import Head from 'next/head';
import { motion } from 'framer-motion';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

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

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-navy to-midnight py-12 md:py-20 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-accent/40 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-float-slow" />
        </div>
        <motion.div
          className="relative mx-auto max-w-5xl px-4 text-center"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Testimonials</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold font-display">Student success stories</h1>
          <p className="mt-4 text-white/80">Hear from professionals who advanced their cloud careers with TechRunniti IT Academy.</p>
        </motion.div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5 cursor-default"
                variants={{ hidden: { opacity: 0, y: 28, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                whileHover={{ y: -7, scale: 1.03, boxShadow: '0 16px 36px rgba(0,174,239,0.12)', transition: { type: 'spring', stiffness: 500, damping: 20 } }}
              >
                <div className="flex gap-1 text-accent text-lg">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate">&quot;{testi.text}&quot;</p>
                <div className="mt-6 border-t border-tint pt-4">
                  <p className="text-sm font-semibold text-ink">{testi.name}</p>
                  <p className="text-xs text-slate">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
