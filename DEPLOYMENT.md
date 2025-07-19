# CMBL Construction Website - Deployment Guide

## 🚀 GitHub Repository Setup

### Manual GitHub Creation

1. **Go to GitHub.com and create a new repository:**
   - Repository name: `cmbl-construction-website`
   - Description: `Professional construction website for CMBL Construction - Next.js with modern design and responsive layout`
   - Visibility: Public
   - Do NOT initialize with README, .gitignore, or license (we already have these)

2. **Add the remote and push:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/cmbl-construction-website.git
   git branch -M main
   git push -u origin main
   ```

## 📁 Project Structure

```
cmbl-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and professional theme
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Header.tsx           # Professional navigation header
│       ├── Hero.tsx             # Hero section with company stats
│       ├── About.tsx            # About section with credentials
│       ├── Services.tsx         # Services grid with professional cards
│       └── Footer.tsx           # Footer with company info
├── public/                      # Static assets
├── README.md                    # Project documentation
└── package.json                 # Dependencies and scripts
```

## 🎨 Design Features

- **Professional Color Scheme**: Red (#e53e3e) and gray tones
- **Clean Layout**: Structured sections with proper spacing
- **Responsive Design**: Works on all device types
- **Modern Typography**: Clean, readable fonts
- **Contact-First Approach**: No forms, direct contact methods
- **Construction Industry Focus**: Professional credibility

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety
- **Deployment Ready**: Optimized for Vercel/Netlify

## 📞 Contact Information

- **Phone**: +234-856-849-8752
- **Email**: info@cmbl.cc
- **Company**: CMBL Construction

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Auto-deploy on every push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out` or `.next`

### Manual Deployment
```bash
npm run build
npm start
```

## 📝 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Project History

This project was built as a professional construction website for CMBL Construction, featuring:
- Complete redesign inspired by professional construction industry standards
- Removal of complex quote forms in favor of direct contact
- Professional layout with clear service offerings
- Mobile-first responsive design
- SEO-optimized structure

Built with professional standards for the construction industry in Nigeria.