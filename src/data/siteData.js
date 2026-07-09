import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  BrainCircuit,
  Cpu,
  Cloud,
  ShieldCheck,
  Palette,
  Workflow,
  Plug,
  Network,
  Headset,
  Wrench,
  Database,
  Server,
  HeartPulse,
  GraduationCap,
  Landmark,
  Banknote,
  HandHeart,
  Wheat,
  Factory,
  ShoppingBag,
  BedDouble,
  HardHat,
  Truck,
  Radio,
} from 'lucide-react'

export const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailor-made software engineered around your exact business processes.',
    benefit: 'Built to fit, built to scale',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Fast, secure, and beautifully designed websites that convert visitors.',
    benefit: 'Premium web experiences',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android that users love.',
    benefit: 'One codebase, every device',
  },
  {
    icon: Building2,
    title: 'Enterprise Systems (ERP & CRM)',
    description: 'Streamline operations with powerful, unified enterprise platforms.',
    benefit: 'Run your business in one place',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence Solutions',
    description: 'Practical AI that automates decisions and unlocks new efficiency.',
    benefit: 'Intelligence at scale',
  },
  {
    icon: Cpu,
    title: 'Machine Learning Applications',
    description: 'Predictive models that turn your data into a competitive advantage.',
    benefit: 'Smarter predictions, better outcomes',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Migrate, build, and scale on secure, resilient cloud infrastructure.',
    benefit: 'Scale without limits',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Protect your systems and data with enterprise-grade security.',
    benefit: 'Sleep easy, stay protected',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive, elegant interfaces designed around real user behavior.',
    benefit: 'Design that delights',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'Eliminate manual work with intelligent, automated workflows.',
    benefit: 'Do more with less effort',
  },
  {
    icon: Plug,
    title: 'API Development',
    description: 'Robust, well-documented APIs that connect your entire ecosystem.',
    benefit: 'Seamless connectivity',
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'Unify disparate tools and platforms into one cohesive system.',
    benefit: 'One system, zero silos',
  },
  {
    icon: Headset,
    title: 'IT Consultancy',
    description: 'Strategic technology guidance from experienced solution architects.',
    benefit: 'Expert advice, real results',
  },
  {
    icon: Wrench,
    title: 'Software Maintenance',
    description: 'Ongoing support and updates that keep your systems running smoothly.',
    benefit: 'Reliability you can count on',
  },
  {
    icon: Database,
    title: 'Database Development',
    description: 'Well-structured, high-performance databases built for growth.',
    benefit: 'Your data, organized and fast',
  },
  {
    icon: Server,
    title: 'Hosting & Cloud Infrastructure',
    description: 'Managed hosting and infrastructure with guaranteed uptime.',
    benefit: 'Always on, always secure',
  },
]

export const solutions = [
  {
    name: 'School Management System',
    description: 'End-to-end platform for admissions, academics, fees, and communication.',
    features: ['Student & staff records', 'Fees & payments', 'Timetabling', 'Parent portal'],
    image: '/images/solutions/school.jpg',
  },
  {
    name: 'HR Management System',
    description: 'Manage recruitment, performance, leave, and employee data in one place.',
    features: ['Recruitment pipeline', 'Performance reviews', 'Leave management', 'Self-service portal'],
    image: '/images/solutions/hr.jpg',
  },
  {
    name: 'Payroll System',
    description: 'Automated payroll processing with statutory compliance built in.',
    features: ['Automated payslips', 'Tax & NSSF compliance', 'Multi-currency support', 'Bank integration'],
    image: '/images/solutions/payroll.jpg',
  },
  {
    name: 'Accounting Software',
    description: 'Complete financial management for businesses of every size.',
    features: ['Invoicing & billing', 'Expense tracking', 'Financial reporting', 'Multi-branch support'],
    image: '/images/solutions/accounting.jpg',
  },
  {
    name: 'Inventory Management System',
    description: 'Real-time stock visibility across warehouses and branches.',
    features: ['Stock tracking', 'Purchase orders', 'Low-stock alerts', 'Barcode scanning'],
    image: '/images/solutions/inventory.jpg',
  },
  {
    name: 'POS System',
    description: 'Fast, reliable point-of-sale built for retail and hospitality.',
    features: ['Offline mode', 'Receipt printing', 'Sales analytics', 'Multi-till support'],
    image: '/images/solutions/pos.jpg',
  },
  {
    name: 'Hotel Management System',
    description: 'Manage bookings, rooms, billing, and guest experience effortlessly.',
    features: ['Reservations', 'Housekeeping', 'Billing & invoicing', 'Channel manager integration'],
    image: '/images/solutions/hotel.jpg',
  },
  {
    name: 'SACCO Management System',
    description: 'Comprehensive savings, loans, and member management for SACCOs.',
    features: ['Member accounts', 'Loan processing', 'Savings & shares', 'SMS notifications'],
    image: '/images/solutions/sacco.jpg',
  },
]

export const industries = [
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Landmark, name: 'Government' },
  { icon: Banknote, name: 'Financial Services' },
  { icon: HandHeart, name: 'NGOs' },
  { icon: Wheat, name: 'Agriculture' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: ShoppingBag, name: 'Retail' },
  { icon: BedDouble, name: 'Hospitality' },
  { icon: HardHat, name: 'Construction' },
  { icon: Truck, name: 'Transport & Logistics' },
  { icon: Radio, name: 'Telecommunications' },
]

export function getIndustryIcon(industryName) {
  return industries.find((industry) => industry.name === industryName)?.icon ?? Building2
}

export const whyChooseUs = [
  'Experienced Developers',
  'Latest Technologies',
  'Scalable Solutions',
  'Fast Delivery',
  'Secure Development',
  'Transparent Pricing',
  'Excellent Customer Support',
  'Continuous Innovation',
  'Affordable Enterprise Solutions',
  'Reliable Maintenance',
]

export const technologies = {
  Frontend: ['React', 'Next.js', 'Angular', 'Vue'],
  Backend: ['Node.js', 'Laravel', 'Python', 'Java', '.NET', 'PHP'],
  Mobile: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'],
  Cloud: ['AWS', 'Microsoft Azure', 'Google Cloud'],
  DevOps: ['Docker', 'GitHub', 'GitLab', 'Jenkins', 'Kubernetes'],
}

export const processSteps = [
  { title: 'Discovery', description: 'We dive deep into your goals, challenges, and requirements.' },
  { title: 'Planning', description: 'We define scope, timelines, and the right technical approach.' },
  { title: 'Design', description: 'We craft intuitive, on-brand user experiences and interfaces.' },
  { title: 'Development', description: 'We build with clean, scalable, well-tested code.' },
  { title: 'Testing', description: 'We rigorously test for performance, security, and reliability.' },
  { title: 'Deployment', description: 'We launch your solution smoothly with zero disruption.' },
  { title: 'Support', description: 'We provide ongoing maintenance and continuous improvement.' },
]

export const testimonials = [
  {
    name: 'Sarah Namutebi',
    role: 'Operations Director, Kampala Retail Group',
    quote:
      'Agisoft Technologies transformed our inventory operations. Their POS and inventory system saved us countless hours every week.',
    rating: 5,
  },
  {
    name: 'David Okello',
    role: 'CEO, Highland SACCO',
    quote:
      'The SACCO management platform they built is reliable, secure, and our members love the self-service portal.',
    rating: 5,
  },
  {
    name: 'Grace Achieng',
    role: 'Head of IT, Nile Valley School',
    quote:
      'Professional, responsive, and technically excellent. Our school management system runs flawlessly.',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary by scope, but most custom software projects take 6-16 weeks from discovery to launch. We provide a detailed timeline after our initial consultation.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'We offer transparent, fixed-price quotes for defined-scope projects and flexible retainer models for ongoing development. There are no hidden costs.',
  },
  {
    question: 'Who owns the software after delivery?',
    answer:
      'You do. Upon final payment, you receive full ownership of the source code and intellectual property for custom-built solutions.',
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer:
      'Yes. We offer flexible maintenance and support packages to keep your systems secure, updated, and running smoothly long after launch.',
  },
  {
    question: 'How do you handle security?',
    answer:
      'Security is built into every stage of our development process, including code reviews, encryption, secure authentication, and regular vulnerability assessments.',
  },
  {
    question: 'Can you host our application?',
    answer:
      'Yes, we offer managed hosting and cloud infrastructure services on AWS, Azure, and Google Cloud, with guaranteed uptime and monitoring.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We provide 24/7 technical support across phone, email, and WhatsApp, along with dedicated account managers for enterprise clients.',
  },
]

export const companyTimeline = [
  {
    year: '2016',
    title: 'Agisoft Technologies Founded',
    description: 'Started as a small team of developers building websites for local businesses in Kampala.',
  },
  {
    year: '2018',
    title: 'First Enterprise Clients',
    description: 'Expanded into custom software and ERP systems for financial services and education clients.',
  },
  {
    year: '2020',
    title: 'Cloud & Mobile Expansion',
    description: 'Launched mobile app development and cloud infrastructure practices to serve growing demand.',
  },
  {
    year: '2022',
    title: 'Regional Growth',
    description: 'Delivered projects for government agencies and NGOs across East Africa.',
  },
  {
    year: '2024',
    title: 'AI & Cybersecurity Practice',
    description: 'Introduced dedicated AI/ML and cybersecurity teams to meet evolving client needs.',
  },
  {
    year: '2026',
    title: '100+ Projects Delivered',
    description: 'Crossed 100 completed projects with a 99% client satisfaction rate across every industry we serve.',
  },
]

export const portfolioProjects = [
  {
    title: 'Regional Bank Digital Platform',
    industry: 'Financial Services',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    challenge: 'Legacy core banking systems were slow, hard to maintain, and offered no self-service digital channel for customers.',
    solution: 'Built a secure digital banking platform with real-time transactions, account management, and a modern customer portal.',
    impact: '40% reduction in branch visits and a 60% increase in digital transaction volume within six months.',
    image: '/images/portfolio/bank.jpg',
  },
  {
    title: 'National School Network Rollout',
    industry: 'Education',
    technologies: ['Flutter', 'Laravel', 'MySQL'],
    challenge: 'A network of 50+ schools had no unified system for admissions, fees, or academic records.',
    solution: 'Delivered a multi-tenant School Management System with a parent mobile app and centralized reporting dashboard.',
    impact: 'Cut fee reconciliation time by 70% and gave school administrators real-time visibility across all campuses.',
    image: '/images/portfolio/school.jpg',
  },
  {
    title: 'Agro-Supply Chain Tracker',
    industry: 'Agriculture',
    technologies: ['Next.js', 'Python', 'AWS'],
    challenge: 'Cooperative could not track produce from farm to warehouse, leading to spoilage and payment disputes.',
    solution: 'Built a supply chain tracking platform with barcode scanning, farmer payment records, and inventory forecasting.',
    impact: 'Reduced post-harvest losses by 25% and shortened farmer payment cycles from weeks to days.',
    image: '/images/portfolio/agriculture.jpg',
  },
  {
    title: 'SACCO Digital Transformation',
    industry: 'Financial Services',
    technologies: ['Vue', '.NET', 'SQL Server'],
    challenge: 'Manual, paper-based loan and savings processing was slow and error-prone for a growing SACCO membership.',
    solution: 'Delivered a full SACCO Management System with a member self-service portal and automated loan processing.',
    impact: 'Loan approval time dropped from 2 weeks to 48 hours, with membership growing 3x in one year.',
    image: '/images/portfolio/sacco.jpg',
  },
  {
    title: 'Hospital Patient Records System',
    industry: 'Healthcare',
    technologies: ['React', 'Java', 'PostgreSQL'],
    challenge: 'Paper-based patient records made it difficult to coordinate care across departments and track history.',
    solution: 'Implemented a secure electronic health records system with role-based access and appointment scheduling.',
    impact: 'Reduced patient wait times by 35% and eliminated duplicate testing from lost paper records.',
    image: '/images/portfolio/healthcare.jpg',
  },
  {
    title: 'Retail Chain POS & Inventory',
    industry: 'Retail',
    technologies: ['React', 'Node.js', 'MongoDB'],
    challenge: 'A multi-branch retail chain lacked real-time visibility into stock levels and sales performance.',
    solution: 'Rolled out a unified POS and inventory management system across all branches with centralized analytics.',
    impact: 'Stock-outs dropped by 45% and head office gained real-time sales visibility across every branch.',
    image: '/images/portfolio/retail.jpg',
  },
]

export const blogPosts = [
  {
    category: 'Artificial Intelligence',
    title: 'How African Businesses Can Practically Adopt AI in 2026',
    excerpt: 'Beyond the hype — a grounded look at where AI delivers real ROI for growing businesses today.',
    date: 'June 2, 2026',
    readTime: '6 min read',
    link: 'https://www.ibm.com/topics/artificial-intelligence',
    image: '/images/blog/ai.jpg',
  },
  {
    category: 'Cybersecurity',
    title: 'Five Cybersecurity Mistakes Growing Companies Make',
    excerpt: 'The most common security gaps we see in fast-growing businesses, and how to close them.',
    date: 'May 18, 2026',
    readTime: '5 min read',
    link: 'https://www.ibm.com/topics/cybersecurity',
    image: '/images/blog/cybersecurity.jpg',
  },
  {
    category: 'Cloud',
    title: 'Choosing Between AWS, Azure, and Google Cloud',
    excerpt: 'A practical framework for selecting the right cloud provider for your workload and budget.',
    date: 'April 30, 2026',
    readTime: '7 min read',
    link: 'https://aws.amazon.com/what-is-cloud-computing/',
    image: '/images/blog/cloud.jpg',
  },
  {
    category: 'Software Engineering',
    title: 'Why Scalable Architecture Matters From Day One',
    excerpt: 'Technical debt is cheaper to avoid than to pay down. Here is how we design for scale early.',
    date: 'April 9, 2026',
    readTime: '6 min read',
    link: 'https://martinfowler.com/architecture/',
    image: '/images/blog/software.jpg',
  },
  {
    category: 'Digital Transformation',
    title: 'A Roadmap for Digitizing Legacy Government Systems',
    excerpt: 'Lessons from modernizing paper-based processes for public sector institutions.',
    date: 'March 22, 2026',
    readTime: '8 min read',
    link: 'https://www.ibm.com/topics/digital-transformation',
    image: '/images/blog/digital-transformation.jpg',
  },
  {
    category: 'Mobile Apps',
    title: 'Native vs Cross-Platform: What We Recommend in 2026',
    excerpt: 'Flutter, React Native, or native — how we decide based on your product and timeline.',
    date: 'March 3, 2026',
    readTime: '5 min read',
    link: 'https://www.browserstack.com/guide/flutter-vs-react-native',
    image: '/images/blog/mobile.jpg',
  },
  {
    category: 'Innovation',
    title: 'Building a Culture of Continuous Innovation',
    excerpt: 'How our engineering teams stay ahead of the curve while still shipping reliably.',
    date: 'February 14, 2026',
    readTime: '4 min read',
    link: 'https://hbr.org/topic/subject/innovation',
    image: '/images/blog/innovation.jpg',
  },
]

export const jobOpenings = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Kampala (Hybrid)',
    type: 'Full-time',
  },
  {
    title: 'Mobile App Developer (Flutter)',
    department: 'Engineering',
    location: 'Kampala (Hybrid)',
    type: 'Full-time',
  },
  {
    title: 'Cloud & DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Kampala',
    type: 'Full-time',
  },
  {
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Kampala',
    type: 'Full-time',
  },
]

export const internshipPrograms = [
  {
    title: 'Software Engineering Internship',
    description: 'A 3-6 month hands-on program working alongside senior engineers on real client projects.',
  },
  {
    title: 'Graduate Trainee Program',
    description: 'A 12-month rotational program for recent graduates across engineering, design, and IT consulting.',
  },
]

export const careerBenefits = [
  'Competitive salary and performance bonuses',
  'Health insurance coverage',
  'Continuous learning & certification support',
  'Flexible and hybrid work arrangements',
  'Mentorship from senior engineers',
  'Clear career growth pathways',
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]
