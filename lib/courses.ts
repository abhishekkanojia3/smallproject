/**
 * Centralized Course Data
 */

import type { Course } from '@/types';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'AWS Solutions Architect',
    duration: '8 Weeks',
    schedule: 'Mon, Wed, Fri - 7:00 PM IST',
    instructor: 'Rajesh Kumar',
    price: '₹11,999',
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
    price: '₹13,999',
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
    price: '₹21,999',
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
    price: '₹9,999',
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
    price: '₹9,999',
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
    price: '₹9,999',
    topics: ['Jenkins', 'GitHub Actions', 'Pipelines', 'Artifacts', 'Deployment', 'Monitoring'],
    description: 'Build automated CI/CD pipelines for modern application deployments.',
    batches: ['March 28', 'April 18', 'May 9'],
  },
];
