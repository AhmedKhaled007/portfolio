# Ahmed Khaled Habiba - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI, showcasing professional experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with blue/purple gradient theme
- **Responsive**: Mobile-first approach with full responsive design
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundle size
- **SEO Ready**: Comprehensive meta tags and structured data
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Interactive**: Smooth scrolling, typing animations, and scroll-triggered animations
- **Contact Form**: Functional contact form with validation using Formik and EmailJS

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Bootstrap 5 for grid system
- **Form Handling**: Formik + Yup validation
- **Email Service**: EmailJS
- **Animations**: MUI transitions and custom scroll animations
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── sections/        # Page sections
│   └── layout/          # Layout components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── constants/           # Data constants
├── assets/              # Static assets
└── styles/              # Theme and global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AhmedKhaled007/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Set up environment variables:
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Add your EmailJS credentials
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Customization

### Theme Colors

Update the theme colors in `src/styles/theme.ts`:
```typescript
palette: {
  primary: {
    main: '#667eea', // Your primary color
  },
  secondary: {
    main: '#764ba2', // Your secondary color
  },
}
```

### Personal Information

Update your information in `src/constants/data.ts`:
- Personal details
- Professional summary
- Skills and categories
- Work experience
- Projects

## 📱 Responsive Breakpoints

- **xs**: 0-599px (Mobile)
- **sm**: 600-899px (Tablet)
- **md**: 900-1199px (Desktop)
- **lg**: 1200-1535px (Large Desktop)
- **xl**: 1536px+ (Extra Large)

## ⚡ Performance Optimizations

- **Code Splitting**: Sections are lazy-loaded to reduce initial bundle size
- **Image Optimization**: Optimized images with proper sizing
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Preconnect**: DNS prefetching for external resources

## 🎯 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card tags
- JSON-LD structured data
- Semantic HTML structure
- Proper heading hierarchy

## ♿ Accessibility Features

- WCAG 2.1 AA compliant
- Skip navigation links
- Proper ARIA labels
- Keyboard navigation support
- Screen reader optimized
- Color contrast compliance

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📊 Performance Metrics

Target scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

- **Email**: ahmedk4720@gmail.com
- **Phone**: +20 1114447720
- **GitHub**: [AhmedKhaled007](https://github.com/AhmedKhaled007)
- **Website**: [ahmedhabiba.dev](https://ahmedhabiba.dev)

---

Built with ❤️ by Ahmed Khaled Habiba