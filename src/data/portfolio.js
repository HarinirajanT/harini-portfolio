/** GitHub username — used for profile contact link */
export const GITHUB_USER = 'HarinirajanT';

export const profile = {
  name: 'Harini T',
  greeting: "Hello, I'm",
  tagline: 'Applied AI Engineer · Full-Stack Developer · Enterprise Problem Solver',
  email: 'harinirajan2004t@gmail.com',
  phone: '+91 9344180609',
  location: 'Chennai, India',
  linkedin: 'https://in.linkedin.com/in/harini-t-853aa4263',
  github: `https://github.com/${GITHUB_USER}`,
  about: {
    summary:
      'I build applied AI systems and full-stack products — from enterprise workflow automation at DevRev to NLP-powered applications. I enjoy turning complex requirements into software that teams and customers can actually use.',
    focus: [
      'Claude-based plugins & prompt engineering',
      'Enterprise workflow automation',
      'React & Node.js full-stack development',
      'Customer-facing solution delivery',
    ],
    educationNote: 'B.E. CSE · Chennai Institute of Technology · CGPA 9.1',
  },
};

export const evolution = [
  { id: 'student', label: 'Curious Student' },
  { id: 'developer', label: 'Web Developer' },
  { id: 'ai-engineer', label: 'Applied AI Engineer' },
];

export const whatIDo = [
  {
    title: 'Applied AI & Automation',
    description:
      'Building intelligent workflows, AI-assisted solutions, and enterprise automations that reduce repetitive work and improve productivity.',
    highlights: [
      'Claude-based workflows',
      'Prompt engineering',
      'Enterprise automation',
      'Workflow customization',
    ],
  },
  {
    title: 'Full-Stack Applications',
    description:
      'Creating scalable web applications with modern frontend and backend technologies, focusing on performance and user experience.',
    highlights: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Enterprise Problem Solving',
    description:
      'Working closely with real customers to understand requirements, debug issues, and deliver practical solutions.',
    highlights: [
      'Customer requirements',
      'API integrations',
      'Schema analysis',
      'Solution delivery',
    ],
  },
];

export const internships = [
  {
    company: 'DevRev',
    role: 'Applied AI Engineer Intern',
    period: 'Oct 2025 – Jun 2026',
    summary:
      'Enterprise workflows, automation, customer solutions, and Claude-powered integrations for clients including Paytm and Bajaj.',
  },
  {
    company: 'Altruisty',
    role: 'Web Development Intern',
    period: 'May 2024 – Jun 2024',
    summary: 'Built and optimized the company website using React and modern web technologies.',
  },
  {
    company: 'CognoRise',
    role: 'Full Stack Development Intern',
    period: 'Jun 2024 – Jul 2024',
    summary:
      'Built SPAs and expanded into backend systems and database integration across the full stack.',
  },
];

export const projects = [
  {
    title: 'AI-Powered Digital Judiciary System',
    description:
      'Judicial case management with role-based dashboards, REST APIs, JWT auth, and legal NLP using BERT, T5, and spaCy.',
    tags: ['React.js', 'FastAPI', 'MongoDB', 'BERT'],
  },
  {
    title: 'Expense Tracker',
    description:
      'Full-stack financial intelligence platform with JWT auth, PostgreSQL, expense tracking, analytics, goal management, subscription monitoring, and rule-based spending insights.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
  },
  {
    title: 'Real-Time Chat Website',
    description:
      'MERN stack chat application with JWT authentication and WebSockets for secure, low-latency messaging.',
    tags: ['MERN', 'WebSockets', 'JWT'],
  },
];

export const research = {
  title: 'IEEE Research Paper — YOLO Strawberry Detection',
  description:
    'Performance analysis of YOLO models for strawberry ripeness detection in challenging environments. Presented at ICDSAAI 2025.',
  link: 'https://ieeexplore.ieee.org/document/11011833/',
};

export const toolbox = [
  { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript'] },
  { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'AI', items: ['Claude', 'Prompt Engineering', 'BERT', 'T5'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'AWS'] },
];

export const highlights = [
  { icon: '🎓', text: 'Computer Science Engineer' },
  { icon: '💼', text: '3 Industry Internships' },
  { icon: '🤖', text: 'Applied AI Engineer @ DevRev' },
  {
    icon: '📄',
    text: 'IEEE Research Contributor',
    link: 'https://ieeexplore.ieee.org/document/11011833/',
  },
  { icon: '☁️', text: 'AWS Certified Cloud Practitioner' },
  { icon: '🏆', text: 'NASSCOM Competition Finalist' },
];

export const commandItems = [
  { id: 'hero', label: 'Home', section: 'hero', keywords: ['home', 'start'] },
  { id: 'journey', label: 'Growth Journey', section: 'journey', keywords: ['journey', 'growth'] },
  { id: 'work', label: 'What I Do', section: 'work', keywords: ['work', 'ai', 'fullstack'] },
  { id: 'projects', label: 'Projects', section: 'projects', keywords: ['projects', 'build', 'github'] },
  { id: 'learned', label: "Where I've Learned", section: 'learned', keywords: ['internship', 'devrev'] },
  { id: 'toolbox', label: 'My Toolbox', section: 'toolbox', keywords: ['skills', 'stack'] },
  { id: 'highlights', label: 'Highlights', section: 'highlights', keywords: ['achievements'] },
  { id: 'contact', label: 'Contact', section: 'contact', keywords: ['contact', 'email'] },
];
