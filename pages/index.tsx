import Head from 'next/head';
import Link from 'next/link';
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
        className="bg-primary min-h-screen flex items-center justify-center p-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="p-8 flex flex-col items-center text-center max-w-xl w-full">
            
            <h1 className="text-4xl font-black text-light mb-4 leading-tight uppercase font-sans">
              MASTER CLOUD & DEVOPS WITH
              <br />
              <span className="text-accent mt-2 inline-block">TECHRUNNITI</span>
            </h1>

            <p className="text-xl text-dark mb-7 font-medium">
              Expert-led training for IT professionals seeking to elevate their careers.
            </p>

            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/courses"
                className="bg-accent text-primary font-bold text-base rounded-lg px-8 py-4 no-underline block hover:bg-accent hover:brightness-110 transition-all"
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