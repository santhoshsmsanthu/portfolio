export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "credentials", label: "Profile" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutTraits = [
  { icon: "💻", name: "Full-Stack Dev" },
  { icon: "🎨", name: "UI/UX Focus" },
  { icon: "🚀", name: "Problem Solver" },
  { icon: "🤝", name: "Team Player" },
];

export const credentials = [
  {
    title: "Education",
    items: [
      "BGS College of Engineering and Technology, Bengaluru - Bachelor of Engineering in Computer Science and Design (CGPA: 8.1), 2022 - 2026",
      "Presidency P.U College, Sira - Grade 12: 84.6%, 2020 - 2022",
      "Mount View Public School, Madhugiri - Grade 10: 87.6%, 2019 - 2020",
    ],
  },
  {
    title: "Technical Skills",
    items: [
      "Programming: Python, Java, C",
      "Core CS: Data Structures and Algorithms, Object-Oriented Programming, Operating Systems (Basics), Computer Networks (Basics)",
      "Web: HTML5, CSS3, JavaScript, React.js, Node.js, REST API integration, Fetch API",
      "Databases: SQL, Joins, Normalization, MongoDB",
      "Machine Learning: Data preprocessing, CNN models, model training",
      "Tools/Platforms: GitHub, Figma, Canva, Adobe",
    ],
  },
  {
    title: "Achievements",
    items: [
      "Academic Distinction: Secured 6th rank in 6th semester among Computer Science and Design students at BGS College of Engineering and Technology",
      "Volunteer Coordinator, Advaya Hackathon: Managed 50+ participants and coordinated activities for smooth event execution",
      "Participant, NASA International Space Apps Challenge 2024: Contributed to solving real-world space and Earth challenges",
    ],
  },
  {
    title: "Certifications",
    twoCol: true,
    items: [
      "Introduction to Artificial Intelligence",
      "Introduction to Data Science",
      "Introduction to Deep Learning",
      "NASA Space Apps Challenge - Galactic Problem Solver",
      "Python Programming",
      "Web Development",
      "AI For All (AI Appreciate Stage)",
      "AI For All (AI Aware Stage)",
    ],
  },
  {
    title: "Extracurricular Activities",
    items: [
      "NASA International Space Apps Challenge 2024: Participated in a global hackathon solving space and Earth challenges",
      "Hackathons and Coding Events: Regular participant in innovation competitions focused on real-world problem solving",
      "Interests: Programming, music, continuous learning, and self-discipline practices",
    ],
  },
];

export const techCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", percent: 90 },
      { name: "JavaScript", percent: 85 },
      { name: "Java", percent: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", percent: 85 },
      { name: "HTML/CSS", percent: 95 },
      { name: "Tailwind CSS", percent: 80 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", percent: 85 },
      { name: "SQL/MongoDB", percent: 85 },
    ],
  },
  {
    title: "ML & Data",
    skills: [
      { name: "Scikit-learn", percent: 85 },
      { name: "Pandas/NumPy", percent: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", percent: 90 },
      { name: "Figma", percent: 70 },
    ],
  },
];

export const projects = [
  {
    emoji: "🔍",
    year: "2025",
    title: "Forensic Image Analysis",
    description:
      "CNN-based system to detect AI-generated and manipulated images. Preprocessing, feature extraction and hybrid ML classifiers for forensic analysis.",
    tags: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/santhoshsmsanthu",
  },
  {
    emoji: "🔐",
    year: "2024",
    title: "Encryption/Decryption System",
    description:
      "Implemented RSA algorithms in Python for secure data transmission. Features key generation, encryption, decryption with full cryptographic security.",
    tags: ["Python", "Cryptography", "Security"],
    github: "https://github.com/santhoshsmsanthu",
  },
  {
    emoji: "🎨",
    year: "2024",
    title: "Restaurant UI Prototype",
    description:
      "Designed responsive restaurant website prototype using Figma. Modern UI/UX design with interactive components and responsive layout.",
    tags: ["Figma", "UI/UX", "Responsive"],
    github: "https://github.com/santhoshsmsanthu",
  },
  {
    emoji: "🛠️",
    year: "2023 - 24",
    title: "Web Development Suite",
    description:
      "Collection of utilities: landing page, temperature converter, stopwatch built with HTML/CSS/JavaScript. Interactive and responsive tools.",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    github: "https://github.com/santhoshsmsanthu",
  },
  {
    emoji: "⚡",
    year: "2025 - 26",
    internship: "🏢 Built during Internship at Posspole",
    title: "Posspole Catalyst",
    description:
      "React-based interactive dashboard frontend for the Posspole platform. Built with Vite, Tailwind CSS, Chart.js, and ApexCharts for rich data visualisation and responsive UI.",
    tags: ["React 19", "Vite", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/santhoshsmsanthu",
  },
  {
    emoji: "🏢",
    year: "2025 - 26",
    internship: "🏢 Built during Internship at Posspole",
    title: "Posspole Admin Dashboard CRM",
    description:
      "Full-stack CRM system with JWT authentication, real-time Socket.io messaging, automated email via Nodemailer, QR code generation, scheduled cron jobs, and AI-powered features via HuggingFace. Containerised with Docker.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "Docker"],
    github: "https://github.com/santhoshsmsanthu",
  },
];
