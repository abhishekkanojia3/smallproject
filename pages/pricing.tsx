import Head from 'next/head';

const courses = [
  {
    id: 1,
    title: 'AWS Fundamentals',
    price: '$499',
    duration: '4 weeks',
    schedule: 'Mon, Wed, Fri - 7:00 PM IST',
    nextBatch: 'April 1, 2025',
    instructor: 'Rajesh Kumar',
    features: ['20 hours live sessions', 'Hands-on labs', 'EC2, S3, Lambda, RDS', 'Certification prep', 'Lifetime recording access'],
    popular: false,
  },
  {
    id: 2,
    title: 'Kubernetes Deep Dive',
    price: '$599',
    duration: '6 weeks',
    schedule: 'Tue, Thu, Sat - 6:00 PM IST',
    nextBatch: 'April 5, 2025',
    instructor: 'Priya Sharma',
    features: ['30 hours live sessions', 'Container orchestration', 'Real-world projects', 'Production deployments', 'Lifetime recording access'],
    popular: true,
  },
  {
    id: 3,
    title: 'DevOps Engineering',
    price: '$699',
    duration: '8 weeks',
    schedule: 'Mon-Fri - 6:30 PM IST',
    nextBatch: 'March 24, 2025',
    instructor: 'Amit Patel',
    features: ['40 hours live sessions', 'CI/CD pipelines', 'Terraform & IaC', 'Jenkins & GitOps', 'Lifetime recording access'],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - TechRunniti</title>
        <meta name="description" content="TechRunniti instructor-led training courses" />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-primary to-gray-900 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent mb-4">Live Instructor-Led Courses</h1>
          <p className="text-center text-gray-300 mb-16">Learn directly from industry experts in interactive live sessions</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg shadow-lg transition transform hover:scale-105 relative border-2 ${
                  course.popular ? 'bg-accent text-primary border-gold ring-4 ring-gold/50' : 'bg-primary text-white border-gray-700'
                }`}
              >
                {course.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded text-sm font-bold bg-gold text-primary">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <div className="mb-4">
                  <p className={`text-sm font-semibold mb-1 ${
                    course.popular ? 'text-primary' : 'text-gray-300'
                  }`}>Instructor: <span className="font-bold">{course.instructor}</span></p>
                  <p className={`text-sm mb-2 ${
                    course.popular ? 'text-primary' : 'text-gray-300'
                  }`}>⏰ {course.schedule}</p>
                  <p className={`text-sm mb-2 ${
                    course.popular ? 'text-primary' : 'text-gray-300'
                  }`}>📅 Next Batch: <span className="font-bold">{course.nextBatch}</span></p>
                  <p className={`text-sm ${
                    course.popular ? 'text-primary' : 'text-gray-300'
                  }`}>⏱️ Duration: {course.duration}</p>
                </div>
                <p className={`text-4xl font-bold mb-6 ${
                  course.popular ? 'text-primary' : 'text-gold'
                }`}>{course.price}</p>
                <ul className="space-y-2 mb-8">
                  {course.features.map((feat, i) => (
                    <li key={i} className="text-sm">✓ {feat}</li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 rounded font-bold transition ${
                    course.popular ? 'bg-primary text-accent hover:bg-gray-800 border border-accent' : 'bg-accent text-primary hover:bg-secondary'
                  }`}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>

          {/* Course Info Section */}
          <div className="mt-20 bg-primary p-12 rounded shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-gold mb-6">What's Included in Every Course?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">Live Interactive Sessions</h3>
                <p className="text-gray-300">Join live classes with expert instructors. Ask questions, get instant feedback, and learn collaboratively.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">Hands-On Labs</h3>
                <p className="text-gray-300">Practice on real cloud infrastructure. Build projects, deploy applications, and gain practical experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">Lifetime Recording Access</h3>
                <p className="text-gray-300">Access session recordings forever. Review concepts, study at your own pace, never expire.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">Certification & Support</h3>
                <p className="text-gray-300">Get certificate upon completion. Dedicated support throughout your learning journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
