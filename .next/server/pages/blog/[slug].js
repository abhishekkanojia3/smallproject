"use strict";(()=>{var e={};e.id=492,e.ids=[492,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9570:(e,t,r)=>{r.r(t),r.d(t,{config:()=>v,default:()=>b,getServerSideProps:()=>P,getStaticPaths:()=>S,getStaticProps:()=>x,reportWebVitals:()=>A,routeModule:()=>N,unstable_getServerProps:()=>C,unstable_getServerSideProps:()=>W,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>w});var s={};r.r(s),r.d(s,{default:()=>f,getStaticPaths:()=>h,getStaticProps:()=>y});var a=r(7093),o=r(5244),n=r(1323),i=r(7645),l=r(6050),c=r(997),u=r(968),d=r.n(u),m=r(1664),p=r.n(m);let g={"kubernetes-best-practices":{slug:"kubernetes-best-practices",title:"Kubernetes Best Practices 2025",date:"2025-03-10",excerpt:"Essential tips for production Kubernetes deployments",content:`
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
    `},"terraform-guide":{slug:"terraform-guide",title:"Terraform Complete Guide",date:"2025-03-05",excerpt:"Master Infrastructure as Code with Terraform",content:`
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
    `},"aws-security":{slug:"aws-security",title:"AWS Security Best Practices",date:"2025-02-28",excerpt:"Secure your AWS infrastructure from day one",content:`
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
    `}};function f({post:e}){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d(),{children:[(0,c.jsxs)("title",{children:[e.title," - TechRunniti Blog"]}),c.jsx("meta",{name:"description",content:e.excerpt})]}),c.jsx("article",{className:"min-h-screen bg-gradient-to-b from-primary to-gray-900 px-4 py-20",children:(0,c.jsxs)("div",{className:"max-w-3xl mx-auto",children:[c.jsx(p(),{href:"/blog",className:"text-accent hover:text-gold transition mb-8 inline-block",children:"← Back to Blog"}),(0,c.jsxs)("header",{className:"mb-12",children:[c.jsx("p",{className:"text-gray-400 text-sm mb-4",children:e.date}),c.jsx("h1",{className:"text-5xl font-bold text-gold mb-4",children:e.title}),c.jsx("p",{className:"text-xl text-gray-300",children:e.excerpt})]}),c.jsx("div",{className:"prose prose-invert max-w-none",children:e.content.split("\n").map((e,t)=>{if(e.startsWith("## "))return c.jsx("h2",{className:"text-3xl font-bold text-gold mt-8 mb-4",children:e.replace("## ","")},t);if(e.startsWith("### "))return c.jsx("h3",{className:"text-2xl font-bold text-accent mt-6 mb-3",children:e.replace("### ","")},t);if(e.startsWith("- "))return c.jsx("li",{className:"text-gray-300 ml-6 mb-2",children:e.replace("- ","")},t);if(e.startsWith("1. ")){let r=e.match(/^\d+/)?.[0];return c.jsx("li",{className:"text-gray-300 ml-6 mb-2 list-decimal",children:e.replace(`${r}. `,"")},t)}return e.startsWith("`")?c.jsx("code",{className:"bg-gray-800 px-2 py-1 rounded text-gold text-sm",children:e.replace(/`/g,"")},t):e.trim()?c.jsx("p",{className:"text-gray-300 mb-4 leading-relaxed",children:e},t):null})}),c.jsx("footer",{className:"mt-16 pt-8 border-t border-gray-700",children:c.jsx(p(),{href:"/blog",className:"bg-accent hover:bg-gold text-primary px-6 py-3 rounded-lg font-bold transition inline-block",children:"← Back to all posts"})})]})})]})}async function y({params:e}){let t=g[e.slug];return t?{props:{post:t},revalidate:!1}:{notFound:!0}}async function h(){return{paths:Object.keys(g).map(e=>({params:{slug:e}})),fallback:!1}}let b=(0,n.l)(s,"default"),x=(0,n.l)(s,"getStaticProps"),S=(0,n.l)(s,"getStaticPaths"),P=(0,n.l)(s,"getServerSideProps"),v=(0,n.l)(s,"config"),A=(0,n.l)(s,"reportWebVitals"),w=(0,n.l)(s,"unstable_getStaticProps"),j=(0,n.l)(s,"unstable_getStaticPaths"),k=(0,n.l)(s,"unstable_getStaticParams"),C=(0,n.l)(s,"unstable_getServerProps"),W=(0,n.l)(s,"unstable_getServerSideProps"),N=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/blog/[slug]",pathname:"/blog/[slug]",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:s})},7645:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(997),a=r(6859);function o(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[s.jsx("meta",{charSet:"UTF-8"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},5315:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[117,61,859,50],()=>r(9570));module.exports=s})();