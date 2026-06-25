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

export const resume = {
  education: {
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    school: 'Chennai Institute of Technology',
    period: '2022 – 2026',
    cgpa: '9.1',
  },
  experience: [
    {
      company: 'DevRev',
      role: 'Applied AI Engineer Intern',
      period: 'Oct 2025 – Jun 2026',
      points: [
        'Automated repetitive workflows using Claude-based plugins, prompt engineering, and schema analysis',
        'Built API integrations and tested endpoints via Postman for enterprise customers',
        'Delivered end-to-end solutions for clients including Paytm and Bajaj',
      ],
    },
    {
      company: 'Altruisty',
      role: 'Web Development Intern',
      period: 'May 2024 – Jun 2024',
      points: [
        'Developed the company website using React.js with responsive design',
        'Optimized performance and collaborated on client requirements via GitHub',
      ],
    },
    {
      company: 'CognoRise',
      role: 'Full Stack Development Intern',
      period: 'Jun 2024 – Jul 2024',
      points: [
        'Built Single Page Applications with HTML, CSS, and JavaScript',
        'Gained hands-on backend and database integration experience',
      ],
    },
  ],
  projectList: [
    {
      name: 'AI-Powered Digital Judiciary System',
      detail: 'React.js, FastAPI, MongoDB, BERT, T5, JWT authentication',
    },
    {
      name: 'Expense Tracker',
      detail: 'React, Node.js, PostgreSQL — full-stack finance app with analytics, goals, and insights',
    },
    {
      name: 'Real-Time Chat Website',
      detail: 'MERN stack, WebSockets, JWT authentication',
    },
  ],
  skills: [
    'Python, Java, JavaScript, TypeScript',
    'React.js, Node.js, Express.js, Tailwind CSS',
    'MongoDB, MySQL, PostgreSQL',
    'Claude AI, Prompt Engineering, Hugging Face, BERT, T5',
    'Git, Docker, Postman, AWS',
  ],
  certifications: [
    'AWS Certified Cloud Practitioner (CLF-C02)',
    'Deep Learning, IoT & LLM — NPTEL',
    'Web Development Bootcamp — Udemy',
    '365 Data Science Platform Certificate',
  ],
  achievements: [
    'NASSCOM Competition Finalist (2024) — HVL_CODERS team',
    'IEEE paper on YOLO strawberry detection — 92% accuracy in low-light conditions',
    'LeetCode global rank top 8.23%',
    'Organized hackathons & technical events at Hackerz Symposium',
  ],
};

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
