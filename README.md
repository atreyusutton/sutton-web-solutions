# Sutton Web Solutions

A professional web development company website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Performance First**: Optimized for Core Web Vitals and Lighthouse scores
- 🎨 **Modern Design**: Clean, professional design with subtle animations
- 📱 **Fully Responsive**: Works perfectly on all devices from 360px up
- ♿ **Accessible**: Built with accessibility in mind (WCAG 2.1 AA)
- 🔍 **SEO Optimized**: Complete SEO setup with meta tags, JSON-LD, and sitemap
- 🚀 **Static Export Ready**: Can be deployed to any static hosting platform

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static export compatible

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sutton-web-solutions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## Deployment

### Static Hosting (Recommended)

This site is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**
- Any static hosting provider

#### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Or connect your Git repository for automatic deployments

#### Deploy to Cloudflare Pages

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `out`

## Customization

### Brand Colors

Update brand colors in `tailwind.config.ts` and `src/styles/globals.css`:

```css
:root {
  --brand-purple: #6f3cff;
  --brand-blue: #4ea3ff;
  --brand-ink: #0f172a;
  --brand-sand: #f8fafc;
  --brand-white: #ffffff;
}
```

### Content

- **Projects**: Edit `src/data/projects.ts`
- **Contact Info**: Update contact details in components and pages
- **SEO**: Modify meta tags in `src/app/layout.tsx`

### Logo

Replace `public/logo.svg` with your own logo. The current logo is a placeholder.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── terms/             # Terms of service
│   ├── work/              # Work pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── data/                 # Data files
└── styles/               # Global styles
```

## Performance

This site is optimized for performance:

- Static generation for fast loading
- Image optimization ready
- Minimal JavaScript bundle
- CSS optimization with Tailwind
- Proper semantic HTML structure

## SEO Features

- Meta tags and Open Graph
- JSON-LD structured data
- Sitemap generation
- Robots.txt
- Semantic HTML structure
- Accessibility features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary. All rights reserved.

## Contact

For questions about this project:

- Email: me@atreyusutton.com
- Phone: (303) 990-2525
- Location: Boulder, CO
# Sutton Web Solutions - Live Site
