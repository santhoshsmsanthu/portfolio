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
      "BGS College of Engineering and Technology, Bengaluru - Bachelor of Engineering in Computer Science and Design (CGPA: 8.3), 2022 - 2026",
      "Presidency P.U College, Sira - Grade 12: 84.6%, 2020 - 2022",
      "Mount View Public School, Madhugiri - Grade 10: 87.6%, 2019 - 2020",
    ],
  },
  {
    title: "Professional Experience",
    items: [
      "Intern Trainee, Posspole Pvt. Ltd. — 8 months (worked on web and full-stack development for live client projects)",
      "Developed and maintained responsive web applications using modern frontend and backend technologies",
      "Built a CRM Admin Dashboard using React.js, Node.js, and MongoDB with employee profile, attendance tracking, and salary management features",
      "Collaborated with team members to analyze requirements, implement features, and deliver project solutions in a professional work environment",
      "Completed internship experience in Python Programming and Web Development at Oasis Infobyte and SkillCraft",
    ],
  },
  {
    title: "Technical Skills",
    items: [
      "Programming Languages: Python, Java, C, JavaScript",
      "Core Computer Science: Data Structures & Algorithms, Object-Oriented Programming, SDLC, Software Testing Fundamentals, Operating Systems (Basics), Computer Networks (Basics)",
      "Backend Development: Python, Node.js, React.js, TypeScript, API Integration",
      "Web Technologies: HTML5, CSS3, Tailwind CSS, JavaScript, Fetch API, REST APIs",
      "Databases: SQL, Joins, Normalization, MongoDB, Supabase",
      "Testing & Automation: Selenium, PyTest, Postman, Manual Testing, API Testing, Database Testing",
      "DevOps & Cloud Tools: Git, GitHub, Netlify (Deployment), Basic Docker",
      "Machine Learning: Data Preprocessing, CNN Models, Model Training",
      "Tools & Platforms: GitHub, Figma, Canva, Adobe",
    ],
  },
  {
    title: "Achievements",
    items: [
      "Secured 6th Rank in the 6th semester and maintained an overall CGPA of 8.3",
      "Volunteer Coordinator, Advaya Hackathon — Managed 50+ participants and coordinated event activities",
      "Participant, NASA International Space Apps Challenge 2024 — Collaborated on solutions for space and Earth challenges",
      "Academic Distinction and active involvement in competitive programming and hackathon events",
    ],
  },
  {
    title: "Certifications",
    twoCol: true,
    items: [
      "JavaScript Essentials - Cisco Networking Academy",
      "React.js - Great Learning",
      "MongoDB Basics - MongoDB University",
      "Git & GitHub - Infosys Springboard",
      "Responsive Web Design - freeCodeCamp",
      "Python Programming - Oasis Infobyte",
      "Web Development - SkillCraft",
      "Introduction to Artificial Intelligence - Infosys Springboard",
      "Introduction to Deep Learning - Infosys Springboard",
      "NASA Space Apps Challenge - Galactic Problem Solver",
    ],
  },
  {
    title: "Extracurricular Activities",
    items: [
      "Passionate about Full-Stack Development, Artificial Intelligence, and emerging technologies",
      "Committed to continuous learning through technical projects and self-development",
      "Strong interest in problem-solving and technology-driven innovation",
    ],
  },
];

export const techCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", percent: 80 },
      { name: "C", percent: 75 },
      { name: "JavaScript", percent: 85 },
      { name: "Java", percent: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", percent: 85 },
      { name: "HTML/CSS", percent: 95 },
      { name: "JavaScript", percent: 85 },
      { name: "Tailwind CSS", percent: 80 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Python", percent: 80 },
      { name: "Node.js", percent: 85 },
      { name: "TypeScript", percent: 75 },
      { name: "API Integration", percent: 85 },
      { name: "REST APIs", percent: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", percent: 85 },
      { name: "MongoDB", percent: 85 },
      { name: "Supabase", percent: 80 },
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      { name: "Selenium", percent: 85 },
      { name: "PyTest", percent: 85 },
      { name: "Postman", percent: 85 },
      { name: "API/DB Testing", percent: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git/GitHub", percent: 90 },
      { name: "Docker (Basic)", percent: 70 },
      { name: "Figma", percent: 70 },
      { name: "Canva", percent: 80 },
    ],
  },
];

export const projects = [
  {
    emoji: "🔍",
    year: "2025",
    title: "Forensic Analysis of Digital Images",
    description:
      "Developed a CNN-based image forensics system to detect AI-generated and manipulated images using Python and deep learning.",
    tags: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/santhoshsmsanthu/major-project",
  },
  {
    emoji: "✅",
    year: "2025",
    title: "Web Application Test Automation",
    description:
      "Developed automated test scripts for functional and UI testing using Selenium, Python, and PyTest. Integrated test execution with Jenkins for continuous testing.",
    tags: ["Selenium", "Python", "PyTest", "Jenkins"],
  },
  {
    emoji: "🔗",
    year: "2025",
    title: "API Testing & Validation Project",
    description:
      "Designed and executed REST API test cases using Postman. Performed SQL-based database validation and defect reporting.",
    tags: ["Postman", "REST APIs", "SQL", "Testing"],
  },
  {
    emoji: "🔐",
    year: "2024",
    title: "Encryption and Decryption System",
    description:
      "Built an RSA-based encryption and decryption system in Python for secure data transmission.",
    tags: ["Python", "Cryptography", "Security"],
    github: "https://github.com/santhoshsmsanthu/Mini-project",
  },
  {
    icon: "figma",
    year: "2024",
    title: "Restaurant UI Prototype",
    description:
      "Designed responsive restaurant website prototype using Figma. Modern UI/UX design with interactive components and responsive layout.",
    tags: ["Figma", "UI/UX", "Responsive"],
    github: "https://www.figma.com/proto/LswI0DLAoe4fiT7lnTaF6W/Untitled?node-id=1-3&starting-point-node-id=1%3A3",
  },
  {
    emoji: "🛠️",
    year: "2024",
    title: "Web Development Suite",
    description:
      "Developed responsive web applications including a landing page, temperature converter, and stopwatch using HTML, CSS, and JavaScript.",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    github: "https://github.com/santhoshsmsanthu",
  },
  {
    emoji: "⚡",
    year: "2025 - 26",
    internship: "Built during Internship at Posspole",
    title: "Posspole Catalyst",
    description:
      "React-based interactive dashboard frontend for the Posspole platform. Built with Vite, Tailwind CSS, Chart.js, and ApexCharts for rich data visualisation and responsive UI.",
    tags: ["React", "Vite", "Tailwind CSS", "Chart.js"],
    accessNote: "Source code available upon request due to company policy.",
  },
  {
    emoji: "🏢",
    year: "2025 - 26",
    internship: "Built during Internship at Posspole",
    title: "Posspole Admin Dashboard CRM",
    description:
      "Full-stack CRM system with JWT authentication, real-time Socket.io messaging, automated email via Nodemailer, QR code generation, scheduled cron jobs, and AI-powered features via HuggingFace. Containerised with Docker.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "Docker"],
    accessNote: "Source code available upon request due to company policy.",
  },
  {
    emoji: "🧬",
    year: "2025 - 26",
    internship: "Built during Internship at Posspole",
    title: "Posspole Biotech",
    description:
      "Internship project for the Posspole ecosystem focused on biotech-oriented workflows and application delivery. Built with a professional implementation flow and internal collaboration requirements in mind.",
    tags: ["Internship", "Biotech", "Posspole"],
    accessNote: "Source code available upon request due to company policy.",
  },
];
