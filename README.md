# 🚀 Modern Portfolio Template

A stunning, fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This template features smooth animations, modern UI design, and is easily customizable for developers, designers, and creatives.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern & Premium Design** - Eye-catching UI with gradient effects, glassmorphism, and smooth animations
- ⚡ **Lightning Fast** - Built with Vite for optimal performance and instant HMR
- 📱 **Fully Responsive** - Looks perfect on all devices (mobile, tablet, desktop)
- 🎭 **Smooth Animations** - Beautiful entrance animations and interactions using Framer Motion
- 🌈 **Customizable** - Easy to customize colors, content, and sections
- 🎯 **SEO Ready** - Optimized for search engines
- 📧 **Contact Form** - Integrated EmailJS for contact functionality
- 🔗 **Social Links** - Quick links to GitHub, LinkedIn, and Email
- 🧩 **Component-Based** - Modular architecture for easy maintenance

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful icon set
- **EmailJS** - Email integration for contact forms

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Your portfolio will be running at `http://localhost:5173/`

## 🎨 Customization Guide

### Update Personal Information

#### **Hero Section** (`src/components/Hero.jsx`)
```javascript
const fullName = "YOUR NAME"; // Line 7
// Update social links (lines 56, 62)
{ icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
{ icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
{ icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
```

#### **About Section** (`src/components/About.jsx`)
- Update your bio text
- Add your profile picture to `src/assets/images/`
- Modify skills and their percentages

#### **Projects Section** (`src/components/Projects.jsx`)
- Add/remove projects
- Update project titles, descriptions, and links
- Change project images

#### **Contact Section** (`src/components/Contact.jsx`)
- Update contact information
- Configure EmailJS (see below)

### Configure EmailJS for Contact Form

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/components/Contact.jsx`:
```javascript
emailjs.sendForm(
    'YOUR_SERVICE_ID',    // Replace with your service ID
    'YOUR_TEMPLATE_ID',   // Replace with your template ID
    form.current,
    'YOUR_PUBLIC_KEY'     // Replace with your public key
)
```

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
    primary: '#3B82F6',    // Change primary color
    secondary: '#8B5CF6',  // Change secondary color
}
```

### Modify Sections

The portfolio includes these sections:
- **Home/Hero** - Landing page with name and intro
- **About** - Bio and skills
- **Projects** - Portfolio showcase
- **Contact** - Contact form and information
- **Footer** - Social links and copyright

You can add/remove sections by editing `src/App.jsx`.

## 📦 Build for Production

### Create Production Build

```bash
npm run build
# or
yarn build
```

The optimized files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🌐 Deployment

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repo for automatic deployments.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or import your GitHub repository on [Vercel](https://vercel.com/).

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio-template/
├── public/             # Static assets
├── src/
│   ├── assets/        # Images and media files
│   │   └── images/    # Profile pictures, etc.
│   ├── components/    # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx        # Main app component
│   ├── index.css      # Global styles and Tailwind imports
│   └── main.jsx       # Entry point
├── index.html
├── package.json
├── tailwind.config.js # Tailwind configuration
├── vite.config.js     # Vite configuration
└── README.md
```

## 🎯 Performance Optimization

- ✅ Code splitting with dynamic imports
- ✅ Optimized images (use WebP format)
- ✅ Lazy loading for sections
- ✅ Minified CSS and JavaScript in production
- ✅ Fast refresh during development

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dependencies Issues
Update dependencies:
```bash
npm update
```

## 📝 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-template/issues).

## 💖 Support

If you found this template helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔀 Forking and submitting pull requests

## 📞 Contact

Created by **Your Name**
- GitHub: [@yourusername](https://github.com/shilpakar43)
<!-- - LinkedIn: [Your Name](https://linkedin.com/in/yourusername) -->
- Email: urika.76ijr@aleeas.com
---

**Happy Coding! 🚀** Built with ❤️ using React and Vite
