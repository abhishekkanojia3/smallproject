
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
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
        <div
          style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              padding: '48px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              maxWidth: 600,
              width: '100%',
            }}
          >
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '14px',
              letterSpacing: '-1px',
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
              lineHeight: 1.12,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              MASTER CLOUD & DEVOPS WITH
              <br />
              <span style={{ color: '#ffd700', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '-1px', display: 'inline-block', marginTop: '6px' }}>TECHRUNNITI</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#222',
              marginBottom: '28px',
              fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
              fontWeight: 500,
              maxWidth: 600,
              textAlign: 'center',
            }}>
              Expert-led training for IT professionals seeking to elevate their careers.
            </p>
            <motion.a
              href="/courses"
              style={{
                background: '#ffd700',
                color: '#0f172a',
                fontWeight: 800,
                fontSize: '1rem',
                borderRadius: '10px',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 2px 8px #ffd70033',
                fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
                letterSpacing: '0.5px',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.07, boxShadow: '0 4px 16px #ffd70055' }}
              whileTap={{ scale: 0.97 }}
            >
              EXPLORE COURSES
            </motion.a>
          </div>
                {/* Responsive: stack column on small screens */}
                <style>{`
                  @media (max-width: 900px) {
                    .hero-flex {
                      flex-direction: column !important;
                      gap: 24px !important;
                    }
                  }
                `}</style>
        </div>
      </motion.section>
    </>
  );
}

