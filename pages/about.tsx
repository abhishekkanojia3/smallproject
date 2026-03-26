import Head from 'next/head';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/config/contact';

const instructors = [
  {
    name: 'Meera Kulkarni',
    role: 'Principal Cloud Architect',
    certs: 'AWS Solutions Architect Pro - Azure Solutions Architect Expert',
  },
  {
    name: 'Karthik Rao',
    role: 'DevSecOps Lead',
    certs: 'CKA - AWS DevOps Professional - AZ-400',
  },
  {
    name: 'Sanya Kapoor',
    role: 'Cloud Security Specialist',
    certs: 'CCSP - AWS Security Specialty - ISO 27001 Lead Auditor',
  },
];

const values = [
  {
    title: 'Enterprise-Grade Curriculum',
    desc: 'Structured in tiers, aligned to certification outcomes, and reviewed quarterly by industry practitioners.',
  },
  {
    title: 'Live Labs + Mentorship',
    desc: 'Hands-on labs with weekly mentor reviews that simulate real production change workflows.',
  },
  {
    title: 'Career Enablement',
    desc: 'Portfolio building, mock interviews, and hiring partner connections built into every cohort.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About TechRunniti IT Academy</title>
        <meta name="description" content="Learn about TechRunniti IT Academy, our instructors, and our enterprise training approach." />
      </Head>

      <section className="bg-gradient-to-br from-primary via-navy to-midnight py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">About Us</div>
          <h1 className="mt-4 text-4xl font-semibold font-display md:text-5xl">We build cloud leaders for the modern enterprise.</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/80">
            TechRunniti IT Academy is an enterprise IT training platform focused on cloud computing and DevSecOps. Our programmes combine structured learning with real-world delivery standards.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-ink font-display">Our mission</h2>
            <p className="mt-4 text-slate">
              We help professionals transition into cloud architecture and DevSecOps roles with a curriculum that mirrors enterprise delivery pipelines. Each cohort blends live instruction, labs, and real-world scenarios across AWS and Azure.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-semibold text-ink font-display">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-tint bg-tint p-8">
            <h3 className="text-xl font-semibold text-ink font-display">Certifications & standards</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate">
              <li>- Curriculum mapped to AWS CLF-C02, SAA-C03, and Azure AZ-104</li>
              <li>- DevSecOps pathway aligned to CKA and AZ-400 outcomes</li>
              <li>- ISO 27001 learning practices and governance templates</li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg shadow-black/5">
              <div className="text-xs uppercase tracking-[0.3em] text-slate">Trusted by</div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm font-semibold text-ink">
                <div className="rounded-full bg-tint px-4 py-2 text-center">AWS</div>
                <div className="rounded-full bg-tint px-4 py-2 text-center">Microsoft</div>
                <div className="rounded-full bg-tint px-4 py-2 text-center">NASSCOM</div>
                <div className="rounded-full bg-tint px-4 py-2 text-center">ISO 27001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tint py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-ink font-display">Meet the instructors</h2>
              <p className="mt-3 text-slate">Senior cloud practitioners guiding every cohort.</p>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-accent hover:brightness-110">Join a cohort -&gt;</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="rounded-2xl border border-white bg-white p-6 shadow-lg shadow-black/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent font-semibold">
                  {instructor.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink font-display">{instructor.name}</h3>
                <p className="text-sm text-slate">{instructor.role}</p>
                <p className="mt-3 text-xs text-slate">{instructor.certs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-tint bg-white p-10 shadow-lg shadow-black/5">
            <h2 className="text-3xl font-semibold text-ink font-display">Ready to grow with TechRunniti IT Academy?</h2>
            <p className="mt-4 text-slate">
              Join a cohort designed for enterprise-level outcomes, with structured delivery, labs, and certification readiness.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:brightness-110 transition"
              >
                Explore Programmes
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
