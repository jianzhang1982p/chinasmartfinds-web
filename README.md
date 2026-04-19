# ChinaSmartFinds - Frontend

Modern e-commerce frontend for ChinaSmartFinds, a curated Chinese products discovery platform.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd chinasmartfinds-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── categories/         # Categories pages
│   └── products/           # Product pages
│       ├── page.tsx        # Product listing
│       └── [id]/           # Product detail
├── components/             # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                    # Utilities & helpers
└── styles/                 # Additional styles
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (SSG/SSR ready)
- ✅ Product listing with filters
- ✅ Product detail pages
- ✅ Category pages
- ✅ Affiliate link integration
- ✅ Modern UI with Tailwind CSS

## Brand Colors

```css
--primary-red: #DC2626    /* Main brand color */
--primary-gold: #F59E0B   /* Accent color */
--accent-blue: #2563EB    /* Secondary accent */
```

## Next Steps

1. **API Integration** - Connect to backend for dynamic product data
2. **Amazon PA-API** - Integrate affiliate link tracking
3. **Search** - Implement full-text search
4. **Analytics** - Add Google Analytics / Vercel Analytics
5. **Performance** - Optimize images, implement lazy loading

## Team

- **Frontend:** @engineering-frontend-developer
- **Backend:** @engineering-backend-architect
- **Design:** @design-ui-designer
- **Content:** @marketing-content-creator
- **SEO:** @marketing-seo-specialist

## License

© 2026 ChinaSmartFinds. All rights reserved.
