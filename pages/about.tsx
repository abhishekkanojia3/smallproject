import Head from 'next/head';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/config/contact';

export default function About() {
  return (
    <>
      <Head>
        <title>About TechRunniti - IT Academy | Professional DevOps Training</title>
        <meta name="description" content="Learn about TechRunniti IT Academy - leading DevOps and Cloud training institute" />
        <meta name="keywords" content="DevOps training, Cloud academy, IT education, instructor-led training" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2d3e50] to-[#1f2937] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">About TechRunniti</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering IT professionals with industry-leading DevOps and Cloud training since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                TechRunniti delivers enterprise-grade, instructor-led training in DevOps and Cloud technologies. We connect IT professionals directly with industry experts through interactive live sessions, hands-on labs, and real-world projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our focus: practical skills, immediate application, and measurable career growth. We believe learning from experts with real production experience makes all the difference.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-gold/20 p-8 rounded-lg border border-accent/30">
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">5000+</div>
                  <div className="text-gray-300">Students Trained</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">15+</div>
                  <div className="text-gray-300">Expert Instructors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">95%</div>
                  <div className="text-gray-300">Job Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">Why Choose TechRunniti?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '🎯 Expert Instructors',
                desc: 'All instructors are AWS, Azure, and Kubernetes certified with 10+ years of production experience'
              },
              {
                title: '👥 Small Batches',
                desc: 'Limited student per class ensures personalized attention and interactive learning environment'
              },
              {
                title: '📺 Lifetime Access',
                desc: 'Access session recordings, materials, and future updates forever - no expiration'
              },
              {
                title: '🏢 Real-World Projects',
                desc: 'Work on actual infrastructure deployments and real-world DevOps challenges'
              },
              {
                title: '📜 Certifications',
                desc: 'Courses aligned with AWS, Azure, and Kubernetes official certification requirements'
              },
              {
                title: '💼 Career Support',
                desc: 'Resume building, interview prep, and job placement assistance for all graduates'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-primary p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-accent mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">Meet Our Instructors</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'AWS Solutions Architect',
                certs: 'AWS Solutions Architect Pro, 12+ years'
              },
              {
                name: 'Priya Sharma',
                role: 'Kubernetes Expert',
                certs: 'CKA, CKAD, 10+ years'
              },
              {
                name: 'Amit Patel',
                role: 'DevOps Lead',
                certs: 'AWS DevOps Engineer, 15+ years'
              },
              {
                name: 'Sarah Johnson',
                role: 'Azure Cloud Architect',
                certs: 'Azure Solutions Architect, 11+ years'
              },
              {
                name: 'Vikram Singh',
                role: 'Infrastructure Specialist',
                certs: 'HashiCorp Certified, 13+ years'
              },
              {
                name: 'Emma Davis',
                role: 'CI/CD Pipeline Expert',
                certs: 'Jenkins Certified, 10+ years'
              },
            ].map((instructor, i) => (
              <div key={i} className="bg-primary p-6 rounded-lg border border-gray-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{instructor.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">{instructor.name}</h3>
                <p className="text-gold font-semibold mb-2">{instructor.role}</p>
                <p className="text-sm text-gray-400">{instructor.certs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">Our Journey</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { year: '2020', title: 'Founded TechRunniti', desc: 'Started with vision to make quality DevOps education accessible' },
              { year: '2021', title: '1000+ Students', desc: 'Crossed 1000 trained professionals milestone' },
              { year: '2022', title: 'Expanded Curriculum', desc: 'Added Azure, Kubernetes, and specialized courses' },
              { year: '2023', title: 'Global Presence', desc: 'Started training students from 20+ countries' },
              { year: '2024', title: '5000+ Alumni', desc: 'Celebrated 5000+ trained professionals with 95% job placement' },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gold text-primary font-bold text-xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow bg-primary p-6 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-bold text-accent mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary border-t-4 border-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-300 mb-8">Start your journey to becoming a DevOps expert with TechRunniti</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-accent hover:bg-gold text-primary px-10 py-4 rounded-lg font-bold text-lg transition">
              Explore Courses
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-gold text-gold hover:bg-gold hover:text-primary px-10 py-4 rounded-lg font-bold text-lg transition">
              Chat With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
