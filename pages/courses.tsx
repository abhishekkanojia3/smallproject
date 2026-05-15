import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '@/lib/courses';
import { WHATSAPP_MESSAGE_URL } from '@/config/contact';

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const categoryOptions = ['Cloud', 'DevOps', 'DevSecOps', 'Security', 'AI'];

export default function Courses() {
  const [category, setCategory] = useState<string | null>(null);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchCategory = !category || course.category === category;
      return matchCategory;
    });
  }, [category]);

  const clearFilters = () => {
    setCategory(null);
  };

  const handleCategoryClick = (option: string) => {
    const newCategory = category === option ? null : option;
    setCategory(newCategory);
  };

  const hasActiveFilters = category !== null;

  return (
    <>
      <Head>
        <title>Programmes - TechRunniti IT Academy</title>
        <meta name="description" content="Explore TechRunniti IT Academy programmes in Cloud, AWS, Azure, and DevSecOps." />
      </Head>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-navy to-midnight py-12 md:py-20 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-gold/10 blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        <motion.div
          className="relative mx-auto max-w-6xl px-4 text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 24 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Programmes</div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold font-display">Choose the right learning tier</h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            Structured pathways for cloud fundamentals, architecture mastery, and full-stack DevSecOps leadership.
          </p>
        </motion.div>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-ink font-display">Filter programmes</h2>
              <p className="mt-2 text-sm text-slate">Find the focus area that fits your goals.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-full bg-accent text-white px-5 py-2 text-xs font-semibold shadow-lg shadow-accent/30 hover:brightness-110 transition"
                >
                  All Courses
                </button>
              )}
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleCategoryClick(option)}
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

          <motion.div
            key={category}
            className="mt-8 md:mt-10 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {filteredCourses.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-slate text-lg">No courses match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-full bg-accent text-white px-6 py-2 text-sm font-semibold hover:brightness-110 transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                className="rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5 cursor-default"
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 360, damping: 26 }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(0,174,239,0.15)', transition: { type: 'spring', stiffness: 500, damping: 20 } }}
              >
                <div className="flex items-center justify-between text-xs text-slate">
                  <span className="rounded-full bg-tint px-3 py-1">{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold text-ink font-display">{course.name}</h3>
                <p className="mt-3 text-sm text-slate">{course.overview}</p>
                <div className="mt-4 text-sm text-slate">
                  <div>Mode: {course.mode}</div>
                  <div>Outcome: {course.outcome}</div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-slate">Starting at</div>
                  <div className="text-xl md:text-2xl font-semibold text-ink">{course.price}</div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="w-full rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:brightness-110 transition"
                  >
                    🚀 Enroll Now
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    {course.brochureUrl && (
                      <a
                        href={course.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border-2 border-accent px-3 py-2.5 text-center text-xs font-semibold text-accent hover:bg-accent hover:text-white transition flex items-center justify-center gap-1"
                      >
                        📄 Brochure
                      </a>
                    )}
                    {course.scheduleUrl && (
                      <a
                        href={course.scheduleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border-2 border-primary px-3 py-2.5 text-center text-xs font-semibold text-primary hover:bg-primary hover:text-white transition flex items-center justify-center gap-1"
                      >
                        📅 Schedule
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-6 border-t border-tint pt-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate">Syllabus Highlights</div>
                  <ul className="mt-3 space-y-2 text-sm text-slate">
                    {course.syllabus.slice(0, 3).map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))
          )}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="bg-tint py-12 md:py-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 340, damping: 24 }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink font-display">Not sure which programme fits?</h2>
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
      </motion.section>
    </>
  );
}
