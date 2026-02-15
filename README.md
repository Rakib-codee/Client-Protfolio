<div align="center">

# 🏗️ Ramisa | Civil Engineering Portfolio

### *Designing the Structures of Tomorrow*

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[🌐 Live Demo](https://client-protfolio-seven.vercel.app/) · [📝 Report Bug](https://github.com/yourusername/portfolio/issues) · [💡 Request Feature](https://github.com/yourusername/portfolio/issues)

</div>

---

## 📸 Preview

<div align="center">
  <img src="public/images/rr2.png" alt="Portfolio Preview" width="200" style="border-radius: 50%;" />
</div>

---

## ✨ Features

<table>
  <tr>
    <td align="center">🌓</td>
    <td><strong>Dark/Light Theme</strong></td>
    <td>Seamless theme switching with persistent preference</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Fully Responsive</strong></td>
    <td>Optimized for mobile, tablet & desktop</td>
  </tr>
  <tr>
    <td align="center">🎭</td>
    <td><strong>Glassmorphism UI</strong></td>
    <td>Modern frosted glass effect design</td>
  </tr>
  <tr>
    <td align="center">🃏</td>
    <td><strong>3D Card Animations</strong></td>
    <td>Interactive flip cards in project showcase</td>
  </tr>
  <tr>
    <td align="center">📊</td>
    <td><strong>Animated Skill Meters</strong></td>
    <td>Circular progress indicators with smooth animations</td>
  </tr>
  <tr>
    <td align="center">📄</td>
    <td><strong>Resume Download</strong></td>
    <td>One-click CV/Resume PDF download</td>
  </tr>
  <tr>
    <td align="center">📧</td>
    <td><strong>Contact Form</strong></td>
    <td>Integrated with Formspree for easy submissions</td>
  </tr>
  <tr>
    <td align="center">⚡</td>
    <td><strong>Performance Optimized</strong></td>
    <td>Next.js App Router with static generation</td>
  </tr>
  <tr>
    <td align="center">♿</td>
    <td><strong>Accessible</strong></td>
    <td>WCAG compliant with keyboard navigation</td>
  </tr>
  <tr>
    <td align="center">🔍</td>
    <td><strong>SEO Ready</strong></td>
    <td>Meta tags, Open Graph, Twitter Cards</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

```
📦 portfolio
├── 🚀 Framework        →  Next.js 16 (App Router)
├── 📘 Language         →  TypeScript 5
├── 🎨 Styling          →  Tailwind CSS 4
├── ✨ Animations       →  Framer Motion 11
├── 🌓 Theme            →  next-themes
├── 📧 Forms            →  Formspree
├── 🔤 Fonts            →  Google Fonts (Montserrat + Inter)
└── ☁️ Deployment       →  Vercel
```

---

## 🚀 Quick Start

### Prerequisites

```bash
node >= 18.17
npm / yarn / pnpm
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git

# 2. Navigate to project
cd portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

🎉 Open **http://localhost:3000** to view your portfolio!

---

## 📁 Project Structure

```
portfolio/
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 layout.tsx        # Root layout with providers
│   │   ├── 📄 page.tsx          # Home page
│   │   └── 📄 globals.css       # Global styles & theme
│   │
│   └── 📂 components/
│       ├── 📄 Header.tsx        # Glassmorphism navigation
│       ├── 📄 Hero.tsx          # Hero with profile image
│       ├── 📄 About.tsx         # About me & statistics
│       ├── 📄 Projects.tsx      # 3D flip project cards
│       ├── 📄 Skills.tsx        # Animated skill meters
│       ├── 📄 Contact.tsx       # Contact form
│       ├── 📄 Footer.tsx        # Social links
│       └── 📄 ThemeToggle.tsx   # Dark/Light toggle
│
├── 📂 public/
│   ├── 📂 images/
│   │   └── 🖼️ rr2.png           # Profile image
│   └── 📂 resume/
│       └── 📄 cv.pdf            # Downloadable resume
│
├── ⚙️ tailwind.config.ts
├── ⚙️ next.config.ts
└── 📦 package.json
```

---

## 🎨 Customization Guide

### 📝 Update Personal Info

| File | Content |
|------|---------|
| `Hero.tsx` | Name, title, introduction, skills |
| `About.tsx` | Bio, statistics, goals |
| `Projects.tsx` | Project cards & descriptions |
| `Skills.tsx` | Skills & proficiency levels |
| `Contact.tsx` | Email, location, social links |
| `layout.tsx` | SEO meta data |

### 🖼️ Replace Profile Image

```bash
# Add your image to:
public/images/rr2.png
```

### 📄 Add Your Resume

```bash
# Place your CV at:
public/resume/cv.pdf
```

### 📧 Setup Contact Form

1. Create account at [formspree.io](https://formspree.io)
2. Create new form & copy ID
3. Update in `Contact.tsx`:
```tsx
fetch("https://formspree.io/f/YOUR_FORM_ID", {...})
```

### 🎨 Color Palette

Edit `globals.css`:

```css
/* 🔥 Accent Colors */
--color-coral: #ff6f61;     /* Primary */
--color-sky: #00bfff;       /* Secondary */

/* 🌙 Dark Theme */
--background: #121212;

/* ☀️ Light Theme */
[data-theme="light"] {
  --background: #f8fafc;
}
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🔧 Start development server |
| `npm run build` | 📦 Build for production |
| `npm run start` | 🚀 Start production server |
| `npm run lint` | 🔍 Run ESLint |

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new)

---

## 📊 Lighthouse Scores

<div align="center">

| Performance | Accessibility | Best Practices | SEO |
|:-----------:|:-------------:|:--------------:|:---:|
| 🟢 95+ | 🟢 100 | 🟢 100 | 🟢 100 |

</div>

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🔀 Create feature branch (`git checkout -b feature/amazing`)
3. 💬 Commit changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to branch (`git push origin feature/amazing`)
5. 🔃 Open Pull Request

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👩‍💻 Author

<div align="center">

**Ramisa**

*Civil Engineering Student*

📍 Dhaka, Bangladesh
## Designed & Developed with ❤️ by [Md Mahfujur Rahman Rakib](Software Engineer)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ramisa@example.com)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ using **Next.js** & **Tailwind CSS**

[⬆️ Back to Top](#-ramisa--civil-engineering-portfolio)

</div>
