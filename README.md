# Portfolio Website - Harthik M V

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful dark/light theme, smooth animations, and optimized performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Dark/Light Theme**: Intelligent theme switching with system preference detection
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Performance Optimized**: Static generation, code splitting, and optimized images
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter cards
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Error Handling**: Robust error boundaries and graceful fallbacks
- **Type Safety**: Full TypeScript coverage with strict type checking

## 🛠️ Tech Stack

### Core

- **Framework**: Next.js 15.3.2
- **Runtime**: React 19.0.0
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1

### UI & Animation

- **Icons**: Heroicons & Lucide React
- **Animations**: Framer Motion 11.0.3
- **Theme**: next-themes 0.2.1

### Development Tools

- **Linting**: ESLint 8.56.0 with Next.js config
- **Formatting**: Prettier 3.0.0 with Tailwind plugin
- **Build**: Next.js with static optimization

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── publications/      # Publications list
│   ├── resume/            # Resume page
│   └── skills/            # Skills overview
├── components/            # Reusable components
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation
│   ├── ThemeProvider.tsx  # Theme context
│   └── ThemeToggle.tsx    # Theme switcher
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Clean build artifacts

## 🎨 Customization

### Theme Configuration

The theme system supports:

- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Modern, eye-friendly design
- **System Mode**: Automatic based on OS preference

### Color Scheme

- **Primary**: Indigo (600-700)
- **Secondary**: Purple (600-700)
- **Accent**: Pink (400-600)
- **Neutral**: Gray scale with proper contrast ratios

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Responsive**: Fluid typography scaling

## 🔧 Configuration Files

### ESLint (`eslint.config.mjs`)

- Next.js recommended rules
- TypeScript support
- Custom rules for code quality

### Prettier (`.prettierrc`)

- Consistent code formatting
- Tailwind CSS class sorting
- 80-character line width

### TypeScript (`tsconfig.json`)

- Strict type checking
- Path mapping for imports
- Next.js optimizations

### Tailwind (`tailwind.config.js`)

- Custom color palette
- Extended animations
- Responsive breakpoints

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large**: 1440px+

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Fonts**: Optimized loading with `font-display: swap`

## 🔒 Security

- **Content Security Policy**: Configured headers
- **HTTPS**: Enforced in production
- **Dependencies**: Regular security audits
- **Input Validation**: Sanitized user inputs

## 🌐 SEO Features

- **Meta Tags**: Comprehensive metadata
- **Open Graph**: Social media previews
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD markup
- **Sitemap**: Auto-generated
- **Robots.txt**: Search engine directives

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Configure build command and publish directory
- **AWS Amplify**: Use the Next.js preset
- **Docker**: Use the included Dockerfile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Harthik M V**

- LinkedIn: [linkedin.com/in/harthik-mv](https://linkedin.com/in/harthik-mv)
- Email: harthik7777@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Heroicons for beautiful icons
- Vercel for hosting and deployment

---

Made with ❤️ by Harthik

## 🔄 Recent Updates

- **Performance Optimizations**: Significantly improved performance on mobile and low-end devices
- **Enhanced Mobile Experience**: Better animations and interactions on smaller screens
- **Reduced Animation Load**: Adaptive animations based on device capabilities
- **Battery-Friendly**: Reduced CPU/GPU usage for better battery life
- **Enhanced Text Rendering**: Fixed gradient text clipping issues for better readability
- **Improved Footer**: Updated with personalized message
- **Better Typography**: Enhanced line-height and spacing for all headings
- **Accessibility**: Enhanced focus states and text rendering
