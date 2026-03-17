import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const courses = [
    { name: 'AWS Fundamentals', desc: 'Master AWS core services and cloud architecture', icon: '☁️' },
    { name: 'Kubernetes & Docker', desc: 'Container orchestration and deployment', icon: '🐳' },
    { name: 'DevOps Engineering', desc: 'CI/CD pipelines and infrastructure automation', icon: '⚙️' },
    { name: 'Azure Cloud', desc: 'Microsoft Azure cloud platform mastery', icon: '🔷' },
    { name: 'Terraform & IaC', desc: 'Infrastructure as Code and cloud provisioning', icon: '🏗️' },
    { name: 'Jenkins & CI/CD', desc: 'Continuous integration and deployment pipelines', icon: '🔄' },
  ];

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '15+', label: 'Expert Instructors' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '10+', label: 'Industry Certifications' },
  ];

  return (
    <>
      <Head>
        <title>TechRunniti - DevOps & Cloud Training Academy | Professional IT Courses</title>
        <meta name="description" content="Learn DevOps, AWS, Azure, Kubernetes from industry experts. Professional instruction-led training with 95% job placement rate." />
        <meta name="keywords" content="DevOps training, AWS courses, Cloud computing, Kubernetes, IT Academy, certification" />
        <meta property="og:title" content="TechRunniti - DevOps & Cloud Training Academy" />
        <meta property="og:description" content="Enterprise-grade professional IT training from expert instructors" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#2d3e50] via-[#1f2937] to-black text-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">Professional IT Training</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold leading-tight">
            Master Cloud & DevOps Technologies
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-4">
            Learn from certified industry experts with hands-on, instructor-led training
          </p>
          <p className="text-md text-accent font-semibold mb-8">
            Live classes • Small batches • Lifetime access • Job guaranteed
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link href="/courses" className="bg-accent hover:bg-gold text-primary px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
              Explore All Courses
            </Link>
            <a 
              href="https://wa.me/919131590319?text=Hi%20TechRunniti%2C%20I%20want%20to%20know%20about%20your%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-primary px-10 py-4 rounded-lg font-bold text-lg transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-900/50 border-t-4 border-accent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">Popular Courses</h2>
            <p className="text-gray-400 text-lg">Industry-recognized certification programs taught by certified professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="bg-primary p-8 rounded-lg border border-gray-700 hover:border-accent transition hover:shadow-xl hover:shadow-accent/20">
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-accent mb-3">{course.name}</h3>
                <p className="text-gray-300 mb-6">{course.desc}</p>
                <Link href="/courses" className="text-gold font-semibold hover:text-accent transition flex items-center gap-2">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gold mb-16">Why Choose TechRunniti?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: '🎓 Expert Instructors', desc: 'Learn from AWS, Kubernetes & Azure certified professionals with 10+ years of industry experience' },
              { title: '👥 Small Batch Size', desc: 'Limited students per batch ensuring personalized attention and interactive learning environment' },
              { title: '📺 Lifetime Access', desc: 'Access all course materials, session recordings, and future updates without any additional cost' },
              { title: '💼 Career Support', desc: 'Resume building, interview preparation, and job placement assistance for all graduates' },
              { title: '📜 Industry Certification', desc: 'Courses aligned with AWS, Kubernetes, Azure official certification requirements' },
              { title: '🎯 Hands-on Projects', desc: 'Real-world projects and case studies matching actual enterprise scenarios' },
            ].map((item, i) => (
              <div key={i} className="bg-primary p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-accent mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary border-t-4 border-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-gray-300 mb-10">Enroll today and join thousands of successful professionals who transformed their careers with TechRunniti</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="bg-accent hover:bg-gold text-primary px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
              Enroll Now
            </Link>
            <button 
              onClick={() => window.open('https://wa.me/919131590319', '_blank')}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-primary px-10 py-4 rounded-lg font-bold text-lg transition"
            >
              Talk to Advisor
            </button>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded text-primary"
              />
              <button type="submit" className="bg-accent hover:bg-gold text-primary px-6 py-3 rounded font-bold transition">
                Subscribe
              </button>
            </div>
            {subscribed && <p className="text-gold mt-3">✓ Check your email for updates!</p>}
          </form>
        </div>
      </section>
    </>
  );
}
