# Rudraksha Singh Chauhan — Portfolio

A world-class, recruiter-focused developer portfolio built with React + Tailwind CSS.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
rudraksha-portfolio/
├── public/
│   └── index.html          ← SEO meta tags
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Fixed nav with mobile hamburger menu
│   │   ├── Hero.jsx         ← Animated hero with particle canvas
│   │   ├── About.jsx        ← About + profile photo upload
│   │   ├── Terminal.jsx     ← Interactive terminal (type 'help')
│   │   ├── TechStack.jsx    ← Skills with hover pills
│   │   ├── Achievements.jsx ← Animated count-up stats
│   │   ├── Projects.jsx     ← Browser mockup cards + filter
│   │   ├── Experience.jsx   ← Timeline
│   │   ├── CodingProfiles.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx      ← Working contact form
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx    ← Scroll-to-top button
│   ├── context/
│   │   ├── ThemeContext.js  ← Dark/Light mode (persists to localStorage)
│   │   └── ProfileContext.js← Profile photo (persists to localStorage)
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── data.js              ← ⭐ EDIT THIS to update all content
│   ├── index.css            ← Global styles + CSS variables
│   ├── App.js               ← Root component
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ How to Update Content

All your personal data is in **`src/data.js`**. Edit it to update:
- Name, email, phone, links
- Bio paragraphs
- Projects (add/remove)
- Tech stack
- Experience timeline
- Education details

---

## 🎨 Color Palette

The unique earthy/forest aesthetic is defined in `src/index.css` CSS variables:

| Variable           | Dark Mode   | Light Mode |
|--------------------|-------------|------------|
| `--color-bg`       | `#0C0E0B`   | `#F4F1E8`  |
| `--color-accent`   | `#B8CC6E`   | `#5C7A18`  |
| `--color-warm`     | `#E8A44A`   | `#B8600A`  |

---

## 📱 Mobile Support

Fully responsive — tested at 320px to 1440px+:
- Hamburger menu on mobile
- Fluid typography with `clamp()`
- Touch-friendly tap targets
- Particle canvas uses ResizeObserver
- Custom cursor disabled on touch devices

---

## ⚡ Features

| Feature | Description |
|---|---|
| Dark/Light mode | Toggle in nav, persists to localStorage |
| Profile photo upload | Drag & drop or click, persists to localStorage |
| Interactive terminal | Type `help`, `about`, `sudo hire me`, etc. |
| Browser mockup cards | Project cards with fake browser chrome |
| Count-up stats | Animated numbers on scroll into view |
| Back-to-top button | Fixed button, shows after 300px scroll |
| Scroll progress bar | Top bar showing read progress |
| Custom cursor | Desktop only, disabled on touch |
| Project filters | Filter by All / National / Full Stack / AI / MERN |

---

## 📄 Resume Download

To enable the resume download button:
1. Place your PDF at `public/resume.pdf`
2. In `src/components/Hero.jsx`, find `handleDownload` and replace the `alert()` with:
```js
window.open('/resume.pdf', '_blank');
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the /build folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

---

## 🔗 Links to Update in data.js

```js
linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
github:   'https://github.com/YOUR_USERNAME',
leetcode: 'https://leetcode.com/YOUR_USERNAME',
```

---

Built with ❤️ for Rudraksha Singh Chauhan
