import Head from 'next/head';
import Link from 'next/link';

export default function Courses() {
  const courses = [
    {
      id: 1,
      name: 'AWS Solutions Architect',
      duration: '8 Weeks',
      schedule: 'Mon, Wed, Fri - 7:00 PM IST',
      instructor: 'Rajesh Kumar',
      price: '$599',
      topics: ['EC2', 'S3', 'RDS', 'VPC', 'CloudFormation', 'Lambda'],
      description: 'Master AWS cloud architecture and design patterns for enterprise applications.',
      batches: ['March 24', 'April 14', 'May 5'],
    },
    {
      id: 2,
      name: 'Kubernetes & Container Orchestration',
      duration: '10 Weeks',
      schedule: 'Tue, Thu - 8:00 PM IST',
      instructor: 'Priya Sharma',
      price: '$699',
      topics: ['Docker', 'Kubernetes', 'Helm', 'Pod Networking', 'StatefulSets', 'Operators'],
      description: 'Complete hands-on Kubernetes training with real-world deployments.',
      batches: ['March 22', 'April 12', 'May 3'],
    },
    {
      id: 3,
      name: 'DevOps Engineering Masterclass',
      duration: '12 Weeks',
      schedule: 'Mon, Wed - 7:30 PM IST',
      instructor: 'Amit Patel',
      price: '$799',
      topics: ['CI/CD', 'Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring'],
      description: 'Industry-standard DevOps practices and tools for production environments.',
      batches: ['March 1', 'April 1', 'May 1'],
    },
    {
      id: 4,
      name: 'Azure Cloud Fundamentals',
      duration: '6 Weeks',
      schedule: 'Sat, Sun - 6:00 PM IST',
      instructor: 'Sarah Johnson',
      price: '$499',
      topics: ['VMs', 'App Services', 'Azure Storage', 'Networking', 'Security', 'Compliance'],
      description: 'Learn Microsoft Azure cloud platform from basics to advanced deployments.',
      batches: ['March 30', 'April 20', 'May 11'],
    },
    {
      id: 5,
      name: 'Terraform & Infrastructure as Code',
      duration: '8 Weeks',
      schedule: 'Tue, Thu - 7:30 PM IST',
      instructor: 'Vikram Singh',
      price: '$549',
      topics: ['HCL Syntax', 'State Management', 'Modules', 'AWS Integration', 'Testing', 'Best Practices'],
      description: 'Master Infrastructure as Code with Terraform for cloud automation.',
      batches: ['March 25', 'April 15', 'May 6'],
    },
    {
      id: 6,
      name: 'CI/CD Pipeline Engineering',
      duration: '7 Weeks',
      schedule: 'Wed, Fri - 8:00 PM IST',
      instructor: 'Emma Davis',
      price: '$549',
      topics: ['Jenkins', 'GitHub Actions', 'Pipelines', 'Artifacts', 'Deployment', 'Monitoring'],
      description: 'Build automated CI/CD pipelines for modern application deployments.',
      batches: ['March 28', 'April 18', 'May 9'],
    },
  ];

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
            href="https://wa.me/919131590319?text=Hi%20TechRunniti%2C%20I%20need%20help%20choosing%20a%20course"
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
