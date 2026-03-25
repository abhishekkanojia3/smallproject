import Head from 'next/head';
import Link from 'next/link'; // Import check karein
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>TechRunniti - DevOps & Cloud Training Academy | Professional IT Courses</title>
        <meta name="description" content="Learn DevOps, AWS, Azure, Kubernetes from industry experts." />
      </Head>

      {/* Hero Section */}
      <motion.section
        style={{
          background: '#f8fafc',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: 600, width: '100%' }}>
            
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '14px',
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: 1.12,
              textTransform: 'uppercase',
            }}>
              MASTER CLOUD & DEVOPS WITH
              <br />
              <span style={{ color: '#ffd700', marginTop: '6px', display: 'inline-block' }}>TECHRUNNITI</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: '28px', fontWeight: 500 }}>
              Expert-led training for IT professionals seeking to elevate their careers.
            </p>

            {/* Use motion.div wrapper with a standard Next.js Link for correct routing */}
            <motion.div
              style={{ display: 'inline-block' }}
              whileHover={{ scale: 1.07, boxShadow: '0 4px 16px #ffd70055' }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/courses"
                style={{
                  background: '#ffd700',
                  color: '#0f172a',
                  fontWeight: 800,
                  fontSize: '1rem',
                  borderRadius: '10px',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                EXPLORE COURSES
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </>
  );
}