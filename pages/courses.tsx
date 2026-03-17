import Head from 'next/head';
import Link from 'next/link';
import { COURSES } from '@/lib/courses';
import { WHATSAPP_MESSAGE_URL } from '@/config/contact';

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses - TechRunniti IT Academy | Professional DevOps Training</title>
        <meta name="description" content="Browse our comprehensive DevOps and Cloud courses taught by industry experts" />
        <meta name="keywords" content="DevOps courses, AWS training, Kubernetes, Azure, Terraform, CI/CD" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2d3e50] to-[#1f2937] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certification programs designed and taught by AWS, Azure, and Kubernetes certified professionals
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-primary rounded-lg border border-gray-700 hover:border-accent transition overflow-hidden hover:shadow-xl hover:shadow-accent/20">
                {/* Course Header */}
                <div className="bg-gradient-to-r from-accent/10 to-gold/10 p-6 border-b border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl font-bold text-gold">{course.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                  <div className="flex gap-4 text-sm text-gray-300">
                    <span>⏱️ {course.duration}</span>
                    <span>👨‍🏫 {course.instructor}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{course.description}</p>

                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-accent font-semibold mb-2 text-sm">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, i) => (
                        <span key={i} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="mb-4 pb-4 border-b border-gray-700">
                    <h4 className="text-accent font-semibold mb-2 text-sm">Schedule:</h4>
                    <p className="text-sm text-gray-300">{course.schedule}</p>
                  </div>

                  {/* Next Batches */}
                  <div className="mb-6">
                    <h4 className="text-accent font-semibold mb-2 text-sm">Next Batches:</h4>
                    <div className="flex gap-2 flex-wrap">
                      {course.batches.map((batch, i) => (
                        <span key={i} className="text-xs bg-gray-700 text-gold px-3 py-1 rounded">
                          {batch}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Link
                      href="/contact"
                      className="w-full bg-accent hover:bg-gold text-primary py-2 rounded-lg font-bold transition text-center text-sm"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary border-t-4 border-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold mb-6">Can't decide which course?</h2>
          <p className="text-xl text-gray-300 mb-8">Chat with our academic advisors to find the perfect course for your career goals</p>
          <a
            href={WHATSAPP_MESSAGE_URL(`Hi TechRunniti, I need help choosing a course`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-gold text-primary px-10 py-4 rounded-lg font-bold text-lg transition"
          >
            Chat with Advisor
          </a>
        </div>
      </section>
    </>
  );
}
