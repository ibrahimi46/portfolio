# Portfolio Website

A modern portfolio website featuring both GUI and Terminal interfaces, built with Next.js, React, and TypeScript.

## ✨ Features

- **Dual Interface Modes**:
  - **GUI Mode**: Modern, animated interface with smooth transitions
  - **Terminal Mode**: Interactive terminal experience with command-based navigation
- **Multiple Pages**:
  - Home/Landing page with hero section
  - Projects showcase with animated cards
  - Resume/CV viewer
  - Contact form with email functionality
- **Beautiful Animations**: Framer Motion animations throughout the site
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Theme**: Consistent dark theme across the entire site

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.1** (App Router)
- **React 19.2.0**
- **TypeScript 5**

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icons

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Nodemailer** - Email sending functionality

### Fonts
- **Manrope** - Sans-serif font
- **JetBrains Mono** - Monospace font (for terminal)
- **Roboto** - UI font

## 📁 Project Structure

```bash
my-portfolio/
├── app/
│   ├── (gui)/                    # GUI route group
│   │   ├── gui/                  # Landing page
│   │   ├── projects/             # Projects showcase
│   │   │   └── components/
│   │   │       └── ProjectCard.tsx
│   │   ├── contact/              # Contact page
│   │   │   └── components/
│   │   │       ├── ContactForm.tsx
│   │   │       └── ContactInfo.tsx
│   │   └── resume/               # Resume page
│   │       └── components/
│   │           ├── ProgressBar.tsx
│   │           ├── ResumeHeader.tsx
│   │           └── ...
│   ├── terminal/                 # Terminal interface
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Help.tsx
│   │       └── Skills.tsx
│   ├── api/
│   │   └── contact/              # Contact form API
│   │       └── route.ts
│   ├── utils/
│   │   └── handleInput.tsx       # Terminal command handler
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/                   # Shared layout components
│   │   ├── Navbar.tsx
│   │   └── SiteFooter.tsx
│   └── ui/                       # Reusable UI components
│       └── SkillCard.tsx
│
├── lib/
│   ├── data/                     # Static data
│   │   ├── Projects.ts
│   │   └── resume.ts
│   └── types/                    # TypeScript types
│       └── index.ts
│
├── public/                       # Static assets
│   ├── anas-cv.pdf
│   └── favicon.svg
│
└── [config files]
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **npm**, **yarn**, or **pnpm**

---

### 🧩 Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd my-portfolio

# 2. Install dependencies
npm install  # or yarn / pnpm install
```


## 🎯 Features Overview

### GUI Mode
- Hero section with animated introduction
- Featured skills section with animated cards
- Projects showcase with hover effects
- Resume viewer with interactive sections
- Contact form with email integration

### Terminal Mode
- Interactive terminal interface
- Command-based navigation
- Available commands:
  - `help` - Show available commands
  - `about` - Display about information
  - `skills` - Show technical skills
  - `contact` - Display contact information
  - `projects` - View projects
  - `clear` - Clear terminal
  - And more...

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables
4. Deploy

## 🔐 Environment Variables

Required for contact form functionality:
- `SMTP_HOST` - SMTP server hostname
- `SMTP_PORT` - SMTP server port (usually 587)
- `SMTP_USER` - SMTP username/email
- `SMTP_PASS` - SMTP password
- `SMTP_FROM` - Sender email address
- `SMTP_TO` - Recipient email address

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
