
import Head from 'next/head';
import Link from 'next/link';
import { COURSES } from '@/lib/courses';
import { WHATSAPP_MESSAGE_URL } from '@/config/contact';
import { motion } from 'framer-motion';

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses - TechRunniti IT Academy | Professional DevOps Training</title>
        <meta name="description" content="Browse our comprehensive DevOps and Cloud courses taught by industry experts" />
        <meta name="keywords" content="DevOps courses, AWS training, Kubernetes, Azure, Terraform, CI/CD" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4">Explore Our Courses</h1>
          <p className="text-xl text-dark max-w-3xl mx-auto">
            Industry-recognized certification programs designed and taught by AWS, Azure, and Kubernetes certified professionals
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                className="bg-secondary rounded-lg border border-secondary hover:border-accent transition overflow-hidden hover:shadow-xl hover:shadow-accent/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #64FFDA1A' }}
              >
                {/* Course Header */}
                <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 border-b border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl font-bold text-accent">{course.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-light mb-2">{course.name}</h3>
                  </div>
                  <div className="flex gap-4 text-sm text-dark">
                    <span>⏱️ {course.duration}</span>
                    <span>👨‍🏫 {course.instructor}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <p className="text-dark mb-4">{course.description}</p>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Link
                      href="/contact"
                      className="w-full bg-accent hover:bg-accent text-primary py-2 rounded-lg font-bold transition text-center text-sm hover:brightness-110"
                    >
                      Enroll Now
                    </Link>
                    {course.brochureUrl && (
                      <a
                        href={course.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-light hover:bg-light text-primary py-2 rounded-lg font-bold transition text-center text-sm hover:brightness-110"
                      >
                        View Brochure
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent mb-6">Can&apos;t decide which course?</h2>
          <p className="text-xl text-dark mb-8">Chat with our academic advisors to find the perfect course for your career goals</p>
          <a
            href={WHATSAPP_MESSAGE_URL(`Hi TechRunniti, I need help choosing a course`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg transition hover:brightness-110"
          >
            Chat with Advisor
          </a>
        </div>
      </section>
    </>
  );
}
