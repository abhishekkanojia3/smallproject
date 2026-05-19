import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '@/lib/courses';
import { WHATSAPP_URL } from '@/config/contact';
import Terminal from '@/components/Terminal';

const stats = [
  { label: 'Learners Onboarded', value: 150, suffix: '+', precision: 0 },
  { label: 'Cohorts Completed', value: 12, suffix: '+', precision: 0 },
  { label: 'Pilot Satisfaction', value: 4.6, suffix: '/5', precision: 1 },
  { label: 'Capstone Projects', value: 18, suffix: '+', precision: 0 },
];

const posts = [
  {
    title: 'Security best practices for authors of GitHub Actions',
    excerpt:
      'Guidance from GitHub on securing Actions source repositories, maintainer workflows, and incident reporting.',
    date: 'Nov 2023',
    tag: 'DevSecOps',
    url: 'https://github.blog/2023-11-16-security-best-practices-for-authors-of-github-actions/',
  },
  {
    title: 'Kubernetes Configuration Good Practices',
    excerpt:
      'A practical checklist for cleaner, safer manifests, including versioning, YAML hygiene, and deployment consistency.',
    date: 'Nov 2025',
    tag: 'Kubernetes',
    url: 'https://kubernetes.io/blog/2025/11/25/configuration-good-practices/',
  },
  {
    title: 'Pipeline Best Practices',
    excerpt:
      'Core Jenkins guidance on keeping pipelines maintainable, avoiding heavy Groovy, and designing shared libraries.',
    date: 'Jenkins Docs',
    tag: 'CI/CD',
    url: 'https://www.jenkins.io/doc/book/pipeline/pipeline-best-practices/',
  },
];

const partnerLogos = [
  {
    name: 'AWS',
    src: '/logos/aws.svg',
  },
  {
    name: 'Azure',
    src: '/logos/azure.svg',
  },
  {
    name: 'GitHub Actions',
    src: '/github-actions.png',
  },
  {
    name: 'Jenkins',
    src: '/logos/jenkins.svg',
  },
  {
    name: 'Kubernetes',
    src: '/logos/kubernetes.svg',
  },
];

function useCountUp(target: number, duration = 1800, precision = 0) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    let frame = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = eased * target;
      const factor = Math.pow(10, precision);
      setValue(Math.round(raw * factor) / factor);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration, precision]);

  return { value, ref };
}

function StatCard({ label, value, suffix, precision }: { label: string; value: number; suffix: string; precision: number }) {
  const { value: displayValue, ref } = useCountUp(value, 1800, precision);
  const formattedValue = precision > 0 ? displayValue.toFixed(precision) : displayValue.toString();
  return (
    <motion.div
      ref={ref}
      className="rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 px-4 md:px-6 py-4 md:py-6 text-white backdrop-blur-xl hover:from-white/25 hover:to-white/10 transition-all duration-300"
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    >
      <div className="text-2xl md:text-3xl font-semibold font-display drop-shadow-lg">{formattedValue}{suffix}</div>
      <div className="mt-2 text-xs md:text-sm text-white/90">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  const spring = { type: 'spring', stiffness: 380, damping: 28 } as const;
  const sectionReveal = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { ...spring } },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  };
  return (
    <>
      <Head>
        <title>TechRunniti IT Academy | Enterprise Cloud & DevSecOps Training</title>
        <meta
          name="description"
          content="Enterprise-grade cloud and DevSecOps training for professionals. AWS, Azure, and security-first programmes with live labs."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-primary to-navy text-white min-h-screen flex items-center">
        {/* Scanline Effect */}
        <div className="scanline" />
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/50 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/40 blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-cyber/30 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-neon/20 blur-2xl animate-float-slow" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-cyber animate-pulse" />
              Cloud / DevSecOps / AWS / Azure
            </motion.div>
            <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl font-display">
              Build enterprise cloud expertise with a Fortune-500 training experience.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80">
              TechRunniti IT Academy delivers structured programmes, live labs, and security-first engineering to help you earn certification and lead cloud transformations.
            </p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, type: 'spring', stiffness: 340, damping: 22 }}
            >
              <Link
                href="/courses"
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-secondary px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-accent/70 hover:scale-105 transition-all duration-300 group"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Explore Programmes</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/50 px-8 py-3.5 text-center text-sm font-semibold text-white hover:bg-white/20 hover:border-white/80 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Request a Callback
              </Link>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {['95% Completion Rate', '12-Student Live Cohorts', 'Industry-Certified Mentors'].map((item, i) => (
                <motion.div
                  key={item}
                  className="rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 px-5 py-3 text-xs text-white/90 backdrop-blur-md hover:from-white/20 hover:to-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 400, damping: 22 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Terminal animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.15 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar — infinite marquee */}
      <section className="bg-gradient-to-r from-tint via-white to-tint py-8 md:py-10 overflow-hidden border-y border-slate/10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <div key={i} className="inline-flex items-center gap-3 rounded-2xl bg-white border border-slate/10 shadow-lg shadow-black/5 px-6 py-3 font-semibold text-ink flex-shrink-0 hover:shadow-accent/20 hover:border-accent/30 transition-all duration-300">
              <Image src={logo.src} alt={logo.name} width={80} height={24} className="h-6 w-auto pointer-events-none select-none" style={{ pointerEvents: 'none' }} />
              {logo.name !== 'Kubernetes' && <span>{logo.name}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Why TechRunniti */}
      <motion.section
        className="bg-gradient-to-br from-tint via-white to-tint py-16 md:py-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold font-display text-ink">Why TechRunniti IT Academy</h2>
            <p className="mt-3 text-sm md:text-base text-slate">
              Designed to feel like an enterprise training portal, with measurable outcomes and a refined learner journey.
            </p>
          </div>
          <motion.div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: 'Expert Instructors', desc: 'Mentors from top cloud teams who teach architecture decisions, not just tutorials.', icon: '🎓', color: 'from-accent/10 to-accent/5' },
              { title: 'Live Labs', desc: 'Guided labs on AWS and Azure with real infrastructure patterns and security baselines.', icon: '⚡', color: 'from-secondary/10 to-secondary/5' },
              { title: 'Job Support', desc: 'Mock interviews, resume reviews, and a portfolio that demonstrates production readiness.', icon: '🚀', color: 'from-cyber/10 to-cyber/5' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className={`rounded-2xl border border-slate/10 bg-gradient-to-br ${item.color} p-8 shadow-xl shadow-black/5 backdrop-blur cursor-default hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 tilt-3d`}
                variants={{ hidden: { opacity: 0, y: 24, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ type: 'spring', stiffness: 360, damping: 24 }}
              >
                <div className="text-3xl md:text-4xl mb-4 animate-float-3d">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-ink font-display">{item.title}</h3>
                <p className="mt-4 text-sm text-slate leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Courses */}
      <motion.section
        className="bg-white py-16 md:py-24 relative overflow-hidden"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold font-display text-ink">Programmes for every career stage</h2>
              <p className="mt-3 text-sm md:text-base text-slate">Four structured programmes covering cloud, DevOps, security, and penetration testing.</p>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-accent hover:text-secondary transition-colors duration-300 flex items-center gap-2 group">
              View all programmes 
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          <motion.div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {COURSES.map((course, i) => (
              <motion.div
                key={course.id}
                className="group rounded-3xl border-2 border-slate/10 bg-white/90 backdrop-blur-xl p-8 shadow-xl shadow-black/5 card-glow hover:border-accent/30 transition-all duration-500 perspective-card"
                variants={{ hidden: { opacity: 0, y: 28, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ type: 'spring', stiffness: 360, damping: 26 }}
              >
                <div className="perspective-card-inner">
                <div className="flex items-center justify-between text-xs text-slate">
                  <span className="rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 px-4 py-1.5 font-medium">{course.level}</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold text-ink font-display">{course.name}</h3>
                <p className="mt-3 text-sm text-slate">{course.overview}</p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate">Starting at</div>
                      <div className="text-xl md:text-2xl font-semibold text-ink">{course.price}</div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-accent/40 transition-all duration-300 hover:shadow-accent/60 hover:scale-105 relative z-10 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      🚀 Enroll Now
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </Link>
                </div>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="bg-gradient-to-r from-accent via-secondary to-accent py-16 md:py-20 relative overflow-hidden"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-neon blur-3xl animate-float" />
        </div>
        <motion.div className="mx-auto grid max-w-6xl gap-4 md:gap-6 px-4 grid-cols-2 lg:grid-cols-4 relative z-10" variants={stagger}>
          {stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ scale: 1.08, y: -4, transition: { type: 'spring', stiffness: 500, damping: 18 } }}>
              <StatCard
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                precision={stat.precision}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Blog Preview */}
      <motion.section
        className="bg-gradient-to-br from-tint via-white to-tint py-16 md:py-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink font-display">Insights & resources</h2>
              <p className="mt-3 text-sm md:text-base text-slate">Weekly guidance on cloud architecture, security, and DevSecOps practices.</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-accent hover:text-secondary transition-colors duration-300 flex items-center gap-2 group">
              Browse resources
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          <motion.div className="mt-8 md:mt-10 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                className="rounded-2xl bg-white border border-slate/10 p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
                variants={{ hidden: { opacity: 0, x: i % 2 === 0 ? -24 : 24 }, show: { opacity: 1, x: 0 } }}
                transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 500, damping: 20 } }}
              >
                <div className="text-xs text-accent font-semibold uppercase tracking-wider">{post.tag}</div>
                <h3 className="mt-3 text-base md:text-lg font-semibold text-ink font-display">{post.title}</h3>
                <p className="mt-3 text-sm text-slate">{post.excerpt}</p>
                <div className="mt-6 text-xs text-slate">{post.date}</div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-secondary transition-colors duration-300 group"
                >
                  Read article
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-gradient-to-br from-midnight via-primary to-navy py-16 md:py-24 text-white relative overflow-hidden"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-accent blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-secondary blur-3xl animate-float-slow" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold font-display">Start your cloud journey today</h2>
            <p className="mt-4 text-white/80">
              Speak with an advisor to find the right programme and funding option. We respond within one business day.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/80">
              <div>- Live cohorts every month</div>
              <div>- Corporate batch pricing available</div>
              <div>- Certification-aligned curriculum</div>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg md:text-xl font-semibold font-display">Get a personalised plan</h3>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/60 focus:border-accent focus:bg-white/15 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/60 focus:border-accent focus:bg-white/15 transition-all duration-300"
              />
              <select className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white focus:border-accent focus:bg-white/15 transition-all duration-300">
                <option className="text-ink">Select programme</option>
                {COURSES.map((course) => (
                  <option key={course.id} value={course.name} className="text-ink">{course.name}</option>
                ))}
              </select>
              <button
                type="button"
                className="w-full rounded-xl bg-gradient-to-r from-accent to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-accent/70 hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </form>
            <div className="mt-6 text-xs text-white/80">
              Prefer WhatsApp? <a href={WHATSAPP_URL} className="text-accent hover:text-secondary transition-colors duration-300 font-semibold">Chat with us</a>.
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
