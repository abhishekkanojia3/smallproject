import Head from 'next/head';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const BLOG_POSTS: Record<string, BlogPost> = {
  'kubernetes-best-practices': {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices 2025',
    date: '2025-03-10',
    excerpt: 'Essential tips for production Kubernetes deployments',
    content: `
## Introduction

Kubernetes has become the standard for container orchestration in production environments. Here are the key best practices you should follow to ensure reliability and security.

## 1. Resource Requests and Limits

Always set resource requests and limits for your containers:
- **Requests**: Tell the scheduler how much memory/CPU your pod needs
- **Limits**: Prevent runaway containers from consuming all resources
- Use tools like Vertical Pod Autoscaler to find optimal values

## 2. Security Best Practices

- Use Network Policies to restrict traffic between pods
- Implement Pod Security Policies or Pod Security Standards
- Always run containers as non-root users
- Use RBAC for fine-grained access control

## 3. Monitoring and Logging

- Deploy Prometheus for metrics collection
- Use ELK stack or similar for centralized logging
- Set up alerts for critical metrics
- Monitor cluster capacity to avoid resource exhaustion

## 4. GitOps Workflows

- Use tools like ArgoCD or Flux for declarative deployments
- Store all configurations in Git
- Implement automated syncing between Git and cluster state
- This enables easy rollbacks and audit trails

## Conclusion

Following these practices will help you build reliable, secure, and maintainable Kubernetes deployments.
    `
  },
  'terraform-guide': {
    slug: 'terraform-guide',
    title: 'Terraform Complete Guide',
    date: '2025-03-05',
    excerpt: 'Master Infrastructure as Code with Terraform',
    content: `
## What is Terraform?

Terraform is an open-source Infrastructure as Code (IaC) tool that allows you to define cloud infrastructure in human-readable configuration files.

## Key Concepts

### State Files
- Terraform maintains a state file that tracks your infrastructure
- Store state remotely (S3, Terraform Cloud) for team collaboration
- Always backup your state files

### Modules
- Reusable packages of Terraform configurations
- Organize your code into logical components
- Share modules across projects or via the registry

### Workspaces
- Manage multiple environments (dev, staging, prod) with the same code
- Each workspace has its own state
- Switch between workspaces easily

## Best Practices

1. **Use remote state** - Never store state files locally in production
2. **Version your configurations** - Use version control for all Terraform code
3. **Plan before apply** - Always review terraform plan output
4. **Use variables** - Parameterize your configurations
5. **Document your code** - Add comments explaining complex logic

## Common Use Cases

- Multi-cloud deployments
- Disaster recovery and backup
- CI/CD infrastructure
- Kubernetes cluster provisioning
- Database and networking setup

## Conclusion

Terraform empowers you to manage infrastructure reliably and consistently across platforms.
    `
  },
  'aws-security': {
    slug: 'aws-security',
    title: 'AWS Security Best Practices',
    date: '2025-02-28',
    excerpt: 'Secure your AWS infrastructure from day one',
    content: `
## AWS Security Foundation

Security in AWS is a shared responsibility. AWS manages the infrastructure security, while you're responsible for securing your applications and data.

## Identity and Access Management (IAM)

- Never use root account for daily operations
- Use IAM roles instead of long-lived access keys
- Implement the principle of least privilege
- Enable MFA for all users
- Regularly audit IAM permissions using Access Analyzer

## Network Security

- Use VPCs to isolate your infrastructure
- Implement Security Groups as stateful firewalls
- Use NACLs for subnet-level access control
- Enable VPC Flow Logs for monitoring
- Consider using AWS WAF for application protection

## Data Protection

- Use encryption at rest for all data stores
- Enable encryption in transit (TLS/SSL)
- Use AWS KMS for key management
- Implement proper backup and disaster recovery strategies
- Comply with data residency requirements

## Monitoring and Compliance

- Use CloudTrail for audit logging
- Enable CloudWatch alarms for suspicious activity
- Use AWS Config for compliance monitoring
- Implement AWS Security Hub for centralized security findings
- Regular security assessments and penetration testing

## Incident Response

- Have an incident response plan
- Use AWS GuardDuty for threat detection
- Keep security patches up to date
- Implement automated remediation where possible

## Conclusion

AWS security requires a comprehensive approach covering identity, network, data, and monitoring layers.
    `
  }
};

interface Props {
  post: BlogPost;
}

export default function BlogPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title} - TechRunniti Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="min-h-screen bg-gradient-to-b from-primary to-gray-900 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-accent hover:text-gold transition mb-8 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-12">
            <p className="text-gray-400 text-sm mb-4">{post.date}</p>
            <h1 className="text-5xl font-bold text-gold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-300">{post.excerpt}</p>
          </header>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((line, idx) => {
              if (line.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-3xl font-bold text-gold mt-8 mb-4">
                    {line.replace('## ', '')}
                  </h2>
                );
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-2xl font-bold text-accent mt-6 mb-3">
                    {line.replace('### ', '')}
                  </h3>
                );
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={idx} className="text-gray-300 ml-6 mb-2">
                    {line.replace('- ', '')}
                  </li>
                );
              }
              if (line.startsWith('1. ')) {
                const num = line.match(/^\d+/)?.[0];
                return (
                  <li key={idx} className="text-gray-300 ml-6 mb-2 list-decimal">
                    {line.replace(`${num}. `, '')}
                  </li>
                );
              }
              if (line.startsWith('`')) {
                return (
                  <code key={idx} className="bg-gray-800 px-2 py-1 rounded text-gold text-sm">
                    {line.replace(/`/g, '')}
                  </code>
                );
              }
              if (line.trim()) {
                return (
                  <p key={idx} className="text-gray-300 mb-4 leading-relaxed">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-700">
            <Link href="/blog" className="bg-accent hover:bg-gold text-primary px-6 py-3 rounded-lg font-bold transition inline-block">
              ← Back to all posts
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: false, // For static export, set to false
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(BLOG_POSTS).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for unknown routes
  };
}
