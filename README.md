# Portfolio Website

This folder contains a simple responsive portfolio website tailored to match the design and sections of the example at `https://brmilev-dev-portfolio.vercel.app/` using information from your resume.

## Features

- Hero section with a short intro and animated counters
- About section with text and photo placeholder
- GitHub statistics embedded via `github-readme-stats`
- Tech stack grid
- Project gallery with cards and links
- Contact section with email, location, LinkedIn, and GitHub
- Smooth scrolling navigation
- Dark/light theme toggle (state persisted in `localStorage`)
- Responsive layout and basic hover animations

## Setup

1. Open `index.html` in your browser (double-click or serve with a simple HTTP server).
2. Replace `images/profile.svg` with your actual profile picture (rename it to `profile.jpg` or update the `src` in the HTML).
3. Update project links in the Projects section to point to your GitHub repositories or live demos.
4. Adjust skills, stats, and text as needed based on your resume.
5. Change the GitHub username in the stats image URL if necessary:
   ```html
   <img src="https://github-readme-stats.vercel.app/api?username=santhoshsmsanthu&show_icons=true&theme=dark" alt="GitHub stats">
   ```
6. To preview the light theme, click the moon/sun icon in the navbar.

## Development

- Styles are in `style.css` and scripts in `script.js`.
- Feel free to extend features such as project filters, animations, or add more sections (experience, education, etc.).

---

Happy coding! 🚀