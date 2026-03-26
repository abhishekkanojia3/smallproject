import Head from 'next/head';

const posts = [
  {
    title: 'Security best practices for authors of GitHub Actions',
    date: 'November 2023',
    readTime: '4 min read',
    category: 'DevSecOps',
    excerpt:
      'Guidance from GitHub on securing Actions source repositories, maintainer workflows, and incident reporting.',
    url: 'https://github.blog/2023-11-16-security-best-practices-for-authors-of-github-actions/',
  },
  {
    title: 'Kubernetes Configuration Good Practices',
    date: 'November 2025',
    readTime: '8 min read',
    category: 'Kubernetes',
    excerpt:
      'A practical checklist for cleaner, safer manifests, including versioning, YAML hygiene, and deployment consistency.',
    url: 'https://kubernetes.io/blog/2025/11/25/configuration-good-practices/',
  },
  {
    title: 'Pipeline Best Practices',
    date: 'Jenkins Docs',
    readTime: 'Guide',
    category: 'CI/CD',
    excerpt:
      'Core Jenkins guidance on keeping pipelines maintainable, avoiding heavy Groovy, and designing shared libraries.',
    url: 'https://www.jenkins.io/doc/book/pipeline/pipeline-best-practices/',
  },
  {
    title: 'Building secure, scalable AI in the cloud with Microsoft Azure',
    date: 'July 2025',
    readTime: '5 min read',
    category: 'Cloud',
    excerpt:
      'Azure guidance on secure cloud foundations for AI workloads with governance and compliance in mind.',
    url: 'https://azure.microsoft.com/en-us/blog/building-secure-scalable-ai-in-the-cloud-with-microsoft-azure/',
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Resources - TechRunniti IT Academy</title>
        <meta name="description" content="TechRunniti IT Academy insights, playbooks, and cloud resources." />
      </Head>

      <section className="bg-gradient-to-br from-primary via-navy to-midnight py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">Resources</div>
          <h1 className="mt-4 text-4xl font-semibold font-display md:text-5xl">Insights for cloud leaders</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            Articles, guides, and architecture playbooks curated by the TechRunniti IT Academy faculty.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-tint bg-white p-6 shadow-lg shadow-black/5">
                <div className="text-xs font-semibold text-accent">{post.category}</div>
                <h2 className="mt-3 text-xl font-semibold text-ink font-display">{post.title}</h2>
                <p className="mt-3 text-sm text-slate">{post.excerpt}</p>
                <div className="mt-6 text-xs text-slate">{post.date} - {post.readTime}</div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-xs font-semibold text-accent hover:brightness-110"
                >
                  Related blog
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
