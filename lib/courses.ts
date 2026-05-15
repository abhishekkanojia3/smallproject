/**
 * Centralized Course Data
 */

import type { Course } from '@/types';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Cloud Professional',
    duration: '2 Months',
    price: 'INR 14,999',
    mode: 'Online',
    outcome: 'AWS / Azure Fundamentals',
    level: 'Beginner',
    category: 'Cloud',
    overview:
      'An intensive 8-week programme for beginners to build a strong foundation in AWS and Azure core services.',
    syllabus: [
      'Cloud fundamentals: IaaS, PaaS, SaaS, shared responsibility model',
      'AWS core services: EC2, S3, VPC, IAM, RDS, CloudWatch',
      'Azure core services: VMs, Blob Storage, Azure AD, Azure Monitor',
      'Cloud security basics: encryption, key management, compliance',
      'Capstone project + mock exam (AWS CCP / AZ-900)'
    ],
    brochureUrl: '/Cloud%20Professional.html',
    scheduleUrl: '/schedule-cloud-professional.html',
  },
  {
    id: 2,
    name: 'DevOps Engineer',
    duration: '3 Months',
    price: 'INR 24,999',
    mode: 'Online',
    outcome: 'DevOps Engineer Readiness',
    level: 'Intermediate',
    category: 'DevOps',
    overview:
      'A 12-week DevOps programme covering CI/CD automation, container workflows, and infrastructure as code.',
    syllabus: [
      'CI/CD pipelines: GitHub Actions, Jenkins, and release automation',
      'Containers: Docker fundamentals and Kubernetes basics',
      'Infrastructure as Code: Terraform and environment provisioning',
      'Observability: logging, monitoring, and alerting workflows',
      'DevOps capstone with production-style delivery'
    ],
    brochureUrl: '/DevOps%20Engineer.html',
    scheduleUrl: '/schedule-devops-engineer.html',
  },
  {
    id: 3,
    name: 'DevSecOps Master',
    duration: '6 Months',
    price: 'INR 39,999',
    mode: 'Online',
    outcome: 'DevSecOps + Cloud Expert',
    level: 'Advanced',
    category: 'DevSecOps',
    overview:
      'A 24-week flagship programme combining cloud architecture with security-first DevOps engineering.',
    syllabus: [
      'Cloud deep dive: full Cloud Professional syllabus',
      'DevOps toolchain: Git, Jenkins, GitHub Actions, Azure DevOps, ArgoCD',
      'Containers & orchestration: Docker, Kubernetes (EKS/AKS), Helm',
      'Security engineering: SAST/DAST, Vault, Trivy, compliance-as-code',
      'Monitoring & SRE capstone with final project defense'
    ],
    brochureUrl: '/DevSecOps%20Master.html',
    scheduleUrl: '/schedule-devsecops-master.html',
  },
  {
    id: 4,
    name: 'Penetration Testing Professional',
    duration: '3 Months',
    price: 'INR 29,999',
    mode: 'Online',
    outcome: 'OSCP-Aligned Penetration Tester',
    level: 'Advanced',
    category: 'Security',
    overview:
      'A comprehensive 12-week penetration testing programme aligned with OSCP certification, covering offensive security techniques and real-world exploitation.',
    syllabus: [
      'Penetration testing fundamentals: methodology, reconnaissance, and enumeration',
      'Exploitation techniques: buffer overflows, privilege escalation, and lateral movement',
      'Web application security: OWASP Top 10, SQL injection, XSS, and authentication bypass',
      'Network penetration: Active Directory attacks, pivoting, and post-exploitation',
      'Practical labs and OSCP exam preparation with hands-on challenges'
    ],
    brochureUrl: '/Penetration%20Testing%20Professional.html',
    scheduleUrl: '/schedule-penetration-testing.html',
  },
];
