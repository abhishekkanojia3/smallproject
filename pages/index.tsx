import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '@/lib/courses';
import { WHATSAPP_MESSAGE_URL, WHATSAPP_URL } from '@/config/contact';

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

function useCountUp(target: number, duration = 1400, precision = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    let frame = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const raw = progress * target;
      const factor = Math.pow(10, precision);
      setValue(Math.round(raw * factor) / factor);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, precision]);

  return value;
}

function StatCard({ label, value, suffix, precision }: { label: string; value: number; suffix: string; precision: number }) {
  const displayValue = useCountUp(value, 1400, precision);
  const formattedValue = precision > 0 ? displayValue.toFixed(precision) : displayValue.toString();
  return (
    <motion.div
      className="rounded-2xl bg-white/10 px-6 py-6 text-white backdrop-blur"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <div className="text-3xl font-semibold font-display">{formattedValue}{suffix}</div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    preferredTime: '',
  });
  const [callbackError, setCallbackError] = useState('');

  const handleCallbackChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCallbackForm((prev) => ({ ...prev, [name]: value }));
    if (callbackError) setCallbackError('');
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackForm.name || !callbackForm.phone || !callbackForm.preferredTime) {
      setCallbackError('Please fill name, phone, and preferred time.');
      return;
    }
    const message = `Callback request:
Name: ${callbackForm.name || 'Not provided'}
Phone: ${callbackForm.phone || 'Not provided'}
Preferred time: ${callbackForm.preferredTime || 'Not selected'}`;
    window.open(WHATSAPP_MESSAGE_URL(message), '_blank', 'noopener,noreferrer');
  };
  const easeOut = [0.16, 1, 0.3, 1] as const;
  const sectionReveal = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-navy to-midnight text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Cloud / DevSecOps / AWS / Azure
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl font-display">
              Build enterprise cloud expertise with a Fortune-500 training experience.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              TechRunniti IT Academy delivers structured programmes, live labs, and security-first engineering to help you earn certification and lead cloud transformations.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/40 hover:brightness-110 transition"
              >
                Explore Programmes
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Request a Callback
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {['95% Completion Rate', '12-Student Live Cohorts', 'Industry-Certified Mentors'].map((item) => (
                <div key={item} className="rounded-xl bg-white/10 px-4 py-3 text-xs text-white/80 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur"
          >
            <h3 className="text-xl font-semibold font-display">Request a Callback</h3>
            <p className="mt-2 text-sm text-white/70">Get a personalised learning plan in under 24 hours.</p>
            <form className="mt-6 space-y-4" onSubmit={handleCallbackSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={callbackForm.name}
                onChange={handleCallbackChange}
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={callbackForm.phone}
                onChange={handleCallbackChange}
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent"
              />
              <select
                name="preferredTime"
                value={callbackForm.preferredTime}
                onChange={handleCallbackChange}
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-accent"
              >
                <option value="" className="text-ink">Preferred time</option>
                <option value="Morning (9 AM - 12 PM)" className="text-ink">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)" className="text-ink">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)" className="text-ink">Evening (4 PM - 8 PM)</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/40 hover:brightness-110 transition"
              >
                Schedule My Call
              </button>
              {callbackError ? (
                <p className="text-xs text-red-200">{callbackError}</p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <motion.section
        className="bg-surface py-10"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-4 text-sm text-slate"
          variants={stagger}
        >
          {partnerLogos.map((logo) => (
            <motion.div
              key={logo.name}
              className="flex items-center gap-3 rounded-full bg-tint px-5 py-2 font-semibold text-ink"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={24}
                className="h-6 w-auto"
              />
              {logo.name === 'Kubernetes' ? null : <span>{logo.name}</span>}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why TechRunniti */}
      <motion.section
        className="bg-tint py-20"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold font-display text-ink">Why TechRunniti IT Academy</h2>
            <p className="mt-3 text-slate">
              Designed to feel like an enterprise training portal, with measurable outcomes and a refined learner journey.
            </p>
          </div>
          <motion.div className="mt-12 grid gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {[
              {
                title: 'Expert Instructors',
                desc: 'Mentors from top cloud teams who teach architecture decisions, not just tutorials.',
              },
              {
                title: 'Live Labs',
                desc: 'Guided labs on AWS and Azure with real infrastructure patterns and security baselines.',
              },
              {
                title: 'Job Support',
                desc: 'Mock interviews, resume reviews, and a portfolio that demonstrates production readiness.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-white bg-white/70 p-6 shadow-lg shadow-black/5 backdrop-blur"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-xl font-semibold text-ink font-display">{item.title}</h3>
                <p className="mt-3 text-sm text-slate">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Courses */}
      <motion.section
        className="bg-surface py-20"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold font-display text-ink">Programmes for every career stage</h2>
              <p className="mt-3 text-slate">Three structured tiers, priced below INR 35,000 with flexible schedules.</p>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-accent hover:brightness-110">
              View all programmes -&gt;
            </Link>
          </div>
          <motion.div className="mt-12 grid gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {COURSES.map((course) => (
              <motion.div
                key={course.id}
                className="group rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-accent/40"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-center justify-between text-xs text-slate">
                  <span className="rounded-full bg-tint px-3 py-1">{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink font-display">{course.name}</h3>
                <p className="mt-3 text-sm text-slate">{course.overview}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate">Starting at</div>
                    <div className="text-2xl font-semibold text-ink">{course.price}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110"
                  >
                    Enroll
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="bg-gradient-to-r from-primary to-navy py-16"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-4" variants={stagger}>
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              precision={stat.precision}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Blog Preview */}
      <motion.section
        className="bg-tint py-20"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-ink font-display">Insights & resources</h2>
              <p className="mt-3 text-slate">Weekly guidance on cloud architecture, security, and DevSecOps practices.</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-accent hover:brightness-110">
              Browse resources -&gt;
            </Link>
          </div>
          <motion.div className="mt-10 grid gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {posts.map((post) => (
              <motion.div
                key={post.title}
                className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="text-xs text-accent font-semibold">{post.tag}</div>
                <h3 className="mt-3 text-lg font-semibold text-ink font-display">{post.title}</h3>
                <p className="mt-3 text-sm text-slate">{post.excerpt}</p>
                <div className="mt-6 text-xs text-slate">{post.date}</div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-xs font-semibold text-accent hover:brightness-110"
                >
                  Read article
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-gradient-to-br from-primary via-navy to-midnight py-20 text-white"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold font-display">Start your cloud journey today</h2>
            <p className="mt-4 text-white/80">
              Speak with an advisor to find the right programme and funding option. We respond within one business day.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/80">
              <div>- Live cohorts every month</div>
              <div>- Corporate batch pricing available</div>
              <div>- Certification-aligned curriculum</div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold font-display">Get a personalised plan</h3>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent"
              />
              <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-accent">
                <option className="text-ink">Select programme</option>
                {COURSES.map((course) => (
                  <option key={course.id} value={course.name} className="text-ink">{course.name}</option>
                ))}
              </select>
              <button
                type="button"
                className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/40 hover:brightness-110 transition"
              >
                Submit
              </button>
            </form>
            <div className="mt-6 text-xs text-white/70">
              Prefer WhatsApp? <a href={WHATSAPP_URL} className="text-accent">Chat with us</a>.
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
