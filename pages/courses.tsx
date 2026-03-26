import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { COURSES } from '@/lib/courses';
import { WHATSAPP_MESSAGE_URL } from '@/config/contact';

const durationOptions = ['All', '2 Months', '3 Months', '6 Months'];
const categoryOptions = ['All', 'Cloud', 'DevSecOps'];

export default function Courses() {
  const [duration, setDuration] = useState('All');
  const [category, setCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchDuration = duration === 'All' || course.duration === duration;
      const matchCategory = category === 'All' || course.category === category;
      return matchDuration && matchCategory;
    });
  }, [duration, category]);

  return (
    <>
      <Head>
        <title>Programmes - TechRunniti IT Academy</title>
        <meta name="description" content="Explore TechRunniti IT Academy programmes in Cloud, AWS, Azure, and DevSecOps." />
      </Head>

      <section className="bg-gradient-to-br from-primary via-navy to-midnight py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Programmes</div>
          <h1 className="mt-4 text-4xl font-semibold font-display md:text-5xl">Choose the right learning tier</h1>
          <p className="mt-4 text-lg text-white/80">
            Structured pathways for cloud fundamentals, architecture mastery, and full-stack DevSecOps leadership.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-ink font-display">Filter programmes</h2>
              <p className="mt-2 text-sm text-slate">Find the duration and focus area that fits your goals.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {durationOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDuration(option)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      duration === option
                        ? 'bg-accent text-white shadow-lg shadow-accent/30'
                        : 'bg-tint text-ink hover:bg-accent/10'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setCategory(option)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      category === option
                        ? 'bg-accent text-white shadow-lg shadow-accent/30'
                        : 'bg-tint text-ink hover:bg-accent/10'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filteredCourses.map((course) => (
              <div key={course.id} className="rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5">
                <div className="flex items-center justify-between text-xs text-slate">
                  <span className="rounded-full bg-tint px-3 py-1">{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink font-display">{course.name}</h3>
                <p className="mt-3 text-sm text-slate">{course.overview}</p>
                <div className="mt-4 text-sm text-slate">
                  <div>Mode: {course.mode}</div>
                  <div>Outcome: {course.outcome}</div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-slate">Starting at</div>
                  <div className="text-2xl font-semibold text-ink">{course.price}</div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 rounded-full bg-accent px-4 py-2 text-center text-xs font-semibold text-white shadow-lg shadow-accent/30 hover:brightness-110 transition"
                  >
                    Enroll Now
                  </Link>
                  {course.brochureUrl ? (
                    <a
                      href={course.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-accent px-4 py-2 text-center text-xs font-semibold text-accent hover:bg-accent hover:text-white transition"
                    >
                      View Brochure
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="flex-1 rounded-full border border-accent px-4 py-2 text-center text-xs font-semibold text-accent hover:bg-accent hover:text-white transition"
                    >
                      Request Syllabus
                    </Link>
                  )}
                </div>
                <div className="mt-6 border-t border-tint pt-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate">Syllabus Highlights</div>
                  <ul className="mt-3 space-y-2 text-sm text-slate">
                    {course.syllabus.slice(0, 3).map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-ink font-display">Not sure which programme fits?</h2>
          <p className="mt-3 text-slate">Speak to our advisors for a personalised roadmap and batch schedule.</p>
          <a
            href={WHATSAPP_MESSAGE_URL('Hi TechRunniti, I need help choosing a programme.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:brightness-110 transition"
          >
            Chat with Advisor
          </a>
        </div>
      </section>
    </>
  );
}
