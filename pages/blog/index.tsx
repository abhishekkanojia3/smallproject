import Head from 'next/head';
import Link from 'next/link';

const posts = [
  { slug: 'kubernetes-best-practices', title: 'Kubernetes Best Practices 2025', excerpt: 'Essential tips for production Kubernetes deployments', date: '2025-03-10' },
  { slug: 'terraform-guide', title: 'Terraform Complete Guide', excerpt: 'Master Infrastructure as Code with Terraform', date: '2025-03-05' },
  { slug: 'aws-security', title: 'AWS Security Best Practices', excerpt: 'Secure your AWS infrastructure from day one', date: '2025-02-28' },
];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog - TechRunniti</title>
        <meta name="description" content="DevOps and Cloud articles" />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-primary to-gray-900 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gold mb-4">Blog</h1>
          <p className="text-gray-300 mb-12">Latest insights on DevOps and Cloud Technologies</p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-primary p-6 rounded shadow hover:shadow-lg hover:border-accent border border-gray-700 transition">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold text-gold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent transition">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-accent font-bold hover:text-gold transition">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
