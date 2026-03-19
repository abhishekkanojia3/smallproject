/**
 * Centralized Course Data
 */

import type { Course } from '@/types';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'CloudOps Engineer (AWS + Azure)',
    duration: '3 Months',
    schedule: 'Mon, Wed, Fri - 7:00 PM IST',
    instructor: 'Abhishek Kanojia',
    price: '₹10,000',
    topics: [
      'AWS Core Services',
      'Azure Core Services',
      'Cloud Networking',
      'IAM & Security',
      'Cloud Monitoring',
      'Cloud Automation Basics'
    ],
    description: 'Become a CloudOps Engineer with hands-on AWS and Azure skills for real-world cloud operations.',
    batches: [],
  },
  {
    id: 2,
    name: 'DevOps Engineer (with Basic Cloud)',
    duration: '4 Months',
    schedule: 'Tue, Thu, Sat - 8:00 PM IST',
    instructor: 'Abhishek Kanojia',
    price: '₹15,000',
    topics: [
      'Linux Fundamentals',
      'AWS & Azure Basics',
      'CI/CD Pipelines',
      'Docker & Containers',
      'Kubernetes Basics',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'DevOps Best Practices'
    ],
    description: 'DevOps Engineer program with foundational cloud skills, automation, and modern DevOps tools.',
    batches: [],
  },
  {
    id: 3,
    name: 'Cloud & DevOps Engineering with AI Tools',
    duration: '6 Months',
    schedule: 'Sat, Sun - 10:00 AM IST',
    instructor: 'Abhishek Kanojia',
    price: '₹34,999',
    topics: [
      'AWS, Azure, GCP Advanced',
      'Security & Compliance',
      'Serverless & Microservices',
      'Advanced Kubernetes',
      'AI/ML Ops & Tools',
      'Cloud Automation',
      'Cost Optimization',
      'Real-world Projects'
    ],
    description: 'Comprehensive 6-month program for mastering Cloud, DevOps, and AI/ML tools for engineering leaders.',
    batches: [],
  },
];
