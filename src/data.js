export const personal = {
  name: 'Rudraksha Singh Chauhan',
  initials: 'RSC',
  shortName: 'RSC.',
  title: 'MERN Stack Developer',
  location: 'Unnao, Uttar Pradesh, India',
  email: 'rudrakshasingh6@gmail.com',
  phone: '+91 8545800628',
  linkedin: 'https://www.linkedin.com/in/rudraksha-singh-chauhan-620294287/',
  github: 'https://github.com/rudraa19nov',
  leetcode: 'https://leetcode.com/u/rudraa19nov/',
  brand: 'Building scalable web applications and solving real-world problems through clean code, modern technologies, and continuous learning.',
  bio: [
    'Motivated <strong>MERN Stack Developer</strong> with hands-on experience in full-stack web development and backend systems. Skilled in React, Node.js, Express.js, MongoDB, Java, and DSA.',
    'Pursuing B.Tech at <strong>BIET Jhansi</strong> with an 8.4 CGPA. As <strong>SIH 2025 Winner</strong>, I built KrishiSakhi — an AI-powered farming assistant for rural farmers.',
    'Passionate about building impactful applications and continuously learning modern technologies. Actively seeking internship opportunities.',
  ],
};

export const stats = [
  { id: 's1', value: 500,  suffix: '+',  label: 'DSA Problems Solved' },
  { id: 's2', value: 10,    suffix: '+',  label: 'Full Stack Projects' },
  { id: 's3', value: null, emoji: '🏆',  label: 'SIH 2025 Winner' },
  { id: 's4', value: 8.4,  suffix: '',   label: 'CGPA · B.Tech IT', isFloat: true },
];

export const traits = [
  { icon: '🌾', title: 'AgriTech Impact',    desc: 'SIH 2025 national award for AI farming platform' },
  { icon: '🧩', title: 'Problem Solver',      desc: '500+ DSA problems on LeetCode' },
  { icon: '🚀', title: 'Full Stack Dev',      desc: 'End-to-end MERN applications' },
  { icon: '🤖', title: 'AI Integration',      desc: 'Gemini AI & voice APIs in production' },
  { icon: '🤝', title: 'Team Player',         desc: 'National hackathon team leader' },
  { icon: '📈', title: 'Continuous Learner',  desc: 'Docker, Redis, OAuth — always expanding' },
];

export const techStack = [
  {
    category: 'Languages',
    dot: 'green',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C'],
  },
  {
    category: 'Frontend',
    dot: 'blue',
    items: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'EJS'],
  },
  {
    category: 'AI & ML',
    dot: 'rose',
    items: ['Gemini AI', 'Mistral AI', 'Transformers', 'ElevenLabs'],
  },
  {
    category: 'Backend & Auth',
    dot: 'amber',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Mongoose', 'JWT', 'Passport.js', 'OAuth 2.0'],
  },
  {
    category: 'Databases & Cloud',
    dot: 'rose',
    items: ['MongoDB', 'MySQL', 'Firebase', 'Redis', 'Cloudinary'],
  },
  {
    category: 'Tools & Platforms',
    dot: 'blue',
    items: ['Git', 'GitHub', 'Docker', 'Render', 'Postman', 'VS Code', 'Nodemailer'],
  },
];

export const projects = [
  // ── 1. KrishiSakhi (SIH Winner) ──────────────────────────────────
  {
    id: 'krishi',
    title: 'KrishiSakhi',
    url: 'krishisakhi.vercel.app',
    type: 'National · AgriTech · AI',
    badge: 'national',
    period: 'Jul 2025 – Aug 2025',
    preview: 'krishi',
    previewEmoji: '🌾',
    desc: 'Award-winning AI-powered farming assistant delivering personalised crop recommendations, disease detection, and agricultural insights via Gemini AI. Multilingual voice & text support built with ElevenLabs and Twilio so rural farmers can interact in their native language.',
    tech: ['Express.js', 'MongoDB', 'Gemini AI', 'ElevenLabs', 'Twilio', 'Node.js'],
    features: ['AI Crop Recommendations', 'Disease Detection', 'Multilingual Voice & Text', 'Farmer Profiling', 'Pesticide Guidance', 'RESTful APIs'],
    github: 'https://github.com/rudraa19nov/KrishiSakhi',
    live: 'https://hilarious-haupia-22b309.netlify.app/login',
    tags: ['all', 'national', 'fullstack', 'ai'],
  },

  //-----studymate----//

  {
    id: 'studymate',
    title: 'StudyMate',
    url: 'study-mate-nine-flame.vercel.app',
    type: 'AI + Full Stack',
    badge: 'featured',
    period: 'Jun 2026 – Jul 2026',
    preview: 'studymate',
    previewEmoji: '📚',
    desc: 'AI-powered study assistant that lets users upload PDFs and get source-grounded answers. Built a PDF ingestion pipeline with semantic embeddings for retrieval-augmented generation (RAG), backed by the Mistral LLM for context-aware Q&A, on a Next.js 16.2 (App Router, Turbopack) frontend.',
    tech: ['Next.js 16.2', 'React 19', 'Express.js', 'Transformers', 'Mistral AI', 'Tailwind CSS'],
    features: ['PDF Ingestion', 'Semantic Embeddings (RAG)', 'Mistral LLM Q&A', 'File Uploads', 'Turbopack App Router', 'Responsive UI'],
    github: 'https://github.com/rudraa19nov/StudyMate',
    live: 'https://study-mate-nine-flame.vercel.app/',
    tags: ['all', 'ai', 'fullstack'],
  },

  // ── 2. StayScape (formerly Wanderlust) ───────────────────────────
  {
    id: 'stayscape',
    title: 'StayScape',
    url: 'stayscape.onrender.com',
    type: 'Full Stack · MVC',
    badge: 'featured',
    period: 'Nov 2024 – Jan 2025',
    preview: 'wander',
    previewEmoji: '🏡',
    desc: 'Full-stack property rental marketplace built on an MVC architecture. Features secure auth with Passport.js & bcrypt, role-based access control, Cloudinary image uploads with Multer, and scalable MongoDB schemas with referenced data models.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js', 'Cloudinary', 'Multer', 'bcrypt'],
    features: ['Passport.js Auth', 'Role-Based Access', 'Cloudinary Uploads', 'MVC Architecture', 'Async Error Handling', 'CRUD APIs'],
    github: 'https://github.com/rudraa19nov/Airbnb.git',
    live: 'https://airnb-uiw8.onrender.com/',
    tags: ['all', 'fullstack'],
  },

  // ── 3. NexLearn (formerly AI Learner Hub) ────────────────────────
  {
    id: 'nexlearn',
    title: 'NexLearn',
    url: 'nexlearn.vercel.app',
    type: 'AI + Full Stack',
    badge: null,
    period: 'Apr 2026 – May 2026',
    preview: 'ai',
    previewEmoji: '🤖',
    desc: 'AI-powered education platform that generates personalised learning roadmaps and resource recommendations using Gemini AI. JWT-secured backend with MongoDB for progress tracking and optimised React frontend with Redux state management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Gemini AI', 'JWT', 'Redux'],
    features: ['Personalised Roadmaps', 'Gemini AI Integration', 'JWT Auth', 'Redux State', 'Progress Tracking', 'Resource Curation'],
    github: 'https://github.com/rudraa19nov/NexLearn',
    live: 'https://nexlearn.vercel.app',
    tags: ['all', 'ai', 'fullstack', 'mern'],
  },

  // ── 4. ConnectAlum (formerly Alumni Connect) ─────────────────────
  {
    id: 'connectalum',
    title: 'ConnectAlum',
    url: 'connectalum.vercel.app',
    type: 'MERN · Networking',
    badge: null,
    period: 'Jul 2025 – Aug 2025',
    preview: 'alumni',
    previewEmoji: '🔗',
    desc: 'Professional alumni–student networking platform built on the MERN stack. Enables mentorship discovery, career-opportunity posting, and community interaction through a clean profile-driven interface with JWT authentication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    features: ['JWT Auth', 'Mentorship Matching', 'Opportunity Board', 'Profile Management', 'Community Feed', 'Responsive UI'],
    github: 'https://github.com/rudraa19nov/Alumni_sih.git',
    live: 'https://connectalum.vercel.app',
    tags: ['all', 'fullstack', 'mern'],
  },
];

export const experience = [
   {
    period: 'Jun 2026 – Jul 2026',
    title: 'Full Stack Developer — StudyMate',
    org: 'Personal Project',
    desc: 'Built an AI-powered PDF study assistant on Next.js 16.2, with a semantic-embedding ingestion pipeline and Mistral LLM-backed retrieval-augmented Q&A over uploaded documents.',
    highlight: false,
  },
  
  {
    period: 'Apr 2026 – May 2026',
    title: 'Full Stack Developer — NexLearn',
    org: 'Personal Project',
    desc: 'Built an AI-powered education platform with Gemini AI roadmap generation, JWT auth, Redux state management, and a scalable MongoDB backend for progress tracking.',
    highlight: false,
  },
  {
    period: '2025',
    title: '🏆 SIH 2025 Winner — KrishiSakhi',
    org: 'Smart India Hackathon · National Level',
    desc: 'Secured 1st place nationally by building KrishiSakhi — an AI farming assistant with Gemini AI crop recommendations, image-based disease detection, and multilingual voice support via ElevenLabs & Twilio.',
    highlight: true,
  },
  {
    period: 'Jul 2025 – Aug 2025',
    title: 'MERN Stack Developer — ConnectAlum',
    org: 'Personal Project',
    desc: 'Engineered a professional alumni–student networking platform with JWT authentication, mentorship discovery, and a community feed using the MERN stack.',
    highlight: false,
  },
  {
    period: 'Nov 2024 – Jan 2025',
    title: 'Full Stack Developer — StayScape',
    org: 'Personal Project',
    desc: 'Built a property rental marketplace with MVC architecture, Passport.js auth, role-based access control, Cloudinary image management, and robust MongoDB schemas.',
    highlight: false,
  },
  {
    period: 'Aug 2023 – Jun 2027',
    title: 'B.Tech Student — Information Technology',
    org: 'BIET Jhansi',
    desc: 'Developing expertise in full-stack development, DSA, and software engineering fundamentals while maintaining a CGPA of 8.4.',
    highlight: false,
  },
];

export const education = {
  shortName: 'BIET',
  institution: 'Bundelkhand Institute of Engineering and Technology',
  degree: 'B.Tech in Information Technology',
  period: 'Aug 2023 – Jun 2027',
  location: 'Jhansi, Uttar Pradesh',
  cgpa: '8.4',
  coursework: [
    'Data Structures & Algorithms', 'Object Oriented Programming',
    'Database Management Systems', 'Operating Systems',
    'Computer Networks', 'Software Engineering',
  ],
};

export const codingProfiles = [
  {
    name: 'LeetCode',
    emoji: '🧩',
    stat: '500+ Problems Solved',
    statBold: '500+',
    url: 'https://leetcode.com/u/rudraa19nov/',
    bg: 'rgba(255,161,22,0.12)',
  },
  {
    name: 'GitHub',
    emoji: '⚡',
    stat: 'Projects & Contributions',
    statBold: 'Contributions',
    url: 'https://github.com/rudraa19nov',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    name: 'LinkedIn',
    emoji: '🔗',
    stat: 'Professional Network',
    statBold: 'Professional',
    url: 'https://linkedin.com/in/rudraksha-singh-chauhan-620294287/',
    bg: 'rgba(10,102,194,0.12)',
  },
];

export const terminalCommands = {
  about: `{
  "name": "Rudraksha Singh Chauhan",
  "role": "MERN Stack Developer",
  "location": "Unnao, Uttar Pradesh, India",
  "email": "rudrakshasingh6@gmail.com",
  "available": true
}`,
  education: `{
  "institution": "BIET Jhansi",
  "degree": "B.Tech Information Technology",
  "period": "Aug 2023 – Jun 2027",
  "cgpa": 8.4
}`,
  contact: `{
  "email": "rudrakshasingh6@gmail.com",
  "phone": "+91 8545800628",
  "github": "https://github.com/rudraa19nov",
  "linkedin": "https://linkedin.com/in/rudraksha-singh-chauhan-620294287/"
}`,
  achievements: `[
  "🏆 SIH 2025 National Hackathon Winner — KrishiSakhi",
  "500+ LeetCode algorithmic challenges solved",
  "10+ production-grade full-stack applications built",
  "CGPA: 8.4 at BIET Jhansi"
]`,
  skills: `{
  "languages":  ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C"],
  "frontend":   ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "EJS"],
  "backend":    ["Node.js", "Express.js", "JWT", "Passport.js", "OAuth 2.0"],
  "databases":  ["MongoDB", "MySQL", "Firebase", "Redis"],
  "tools":      ["Git", "Docker", "Render", "Postman", "Cloudinary"]
}`,
  projects: `[
  { "name": "KrishiSakhi",  "stack": "Express + MongoDB + Gemini AI", "award": "SIH 2025 🏆" },
  { "name": "StudyMate",    "stack": "Next.js 16.2 + Express + Mistral AI (RAG)" },
  { "name": "StayScape",    "stack": "Node + Express + MongoDB + EJS" },
  { "name": "NexLearn",     "stack": "React + Node + MongoDB + Gemini AI" },
  { "name": "ConnectAlum",  "stack": "React + Node + MongoDB + JWT" }
]`,
  whoami: '"Rudraksha Singh Chauhan — MERN Stack Developer, SIH 2025 Winner, seeking internships. Based in India 🇮🇳"',
};