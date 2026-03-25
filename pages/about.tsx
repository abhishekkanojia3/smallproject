import Head from 'next/head';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/config/contact';

export default function About() {
  return (
    <>
      <Head>
        <title>About TechRunniti - Next-Gen IT Academy | Professional Cloud & DevOps</title>
        <meta name="description" content="Established in 2026, TechRunniti is a future-ready IT Academy specializing in AI-integrated Cloud and DevOps training." />
        <meta name="keywords" content="DevOps training, Cloud academy, TechRunniti Jabalpur, AI in CloudOps" />
      </Head>

      {/* Hero Section - Dark Gradient */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">About TechRunniti</h1>
          <p className="text-xl text-dark max-w-3xl mx-auto leading-relaxed">
            Established in 2026, we are a forward-thinking technology hub dedicated to building the next generation of 
            AI-ready Cloud and DevOps Engineers.
          </p>
        </div>
      </section>

      {/* Our Journey & Vision Section - White Background */}
      <section className="py-20 px-4 bg-primary"> 
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-light mb-6">Our Journey & Vision</h2>
              <p className="text-lg text-dark mb-4 leading-relaxed">
                TechRunniti was founded in Jabalpur in 2026, born in the era of Artificial Intelligence. 
                Our mission is to bridge the gap between traditional IT education and the high-speed demands 
                of the modern global cloud industry.
              </p>
              <p className="text-lg text-dark leading-relaxed">
                We specialize in integrating <strong className="text-accent">AI-driven workflows</strong> into core Cloud and DevOps engineering, 
                ensuring our students learn how to manage production environments faster and smarter.
              </p>
            </div>
            {/* Founder Box - Escaped Entities Added Here */}
            <div className="bg-secondary p-8 rounded-2xl border-l-8 border-accent shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-4 italic text-center">Founder&apos;s Message</h3>
              <p className="text-light italic text-center leading-relaxed">
                &quot;The AI revolution has changed how we manage infrastructure. We established TechRunniti to ensure 
                engineers learn the &apos;New Way&apos; of Cloud Operations—automated, efficient, and future-proof.&quot;
              </p>
              <div className="mt-6 text-center font-bold text-accent">— Abhishek Kanojia, Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - White BG with Dark Cards */}
      <section className="py-20 px-4 bg-primary border-t border-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-light mb-16">Why Choose TechRunniti?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '🤖 AI-Ready Curriculum',
                desc: 'Integrating tools like GitHub Copilot and AIOps to keep you ahead of the modern industry curve.'
              },
              {
                title: '🎯 Production-Grade Labs',
                desc: '80% of our program is focused on hands-on labs and real-world multi-cloud architecture deployments.'
              },
              {
                title: '👥 Expert Mentorship',
                desc: 'Direct training from Cloud Operations Engineers with deep experience in real-world production environments.'
              },
              {
                title: '📜 Dual Cloud Focus',
                desc: 'Master both AWS SysOps and Azure Administrator (AZ-104) standards in a single master program.'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-secondary p-8 rounded-lg border border-secondary hover:border-accent transition-all duration-300 shadow-lg">
                <h3 className="text-2xl font-bold text-accent mb-4">{feature.title}</h3>
                <p className="text-dark">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent mb-6">Ready to Master the Future of Cloud?</h2>
          <p className="text-xl text-dark mb-8">Start your journey to becoming an AI-ready DevOps expert with TechRunniti</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-accent hover:brightness-110 text-primary px-10 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Explore Master Programs
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-10 py-4 rounded-lg font-bold text-lg transition">
              Chat With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}