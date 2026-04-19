# ChinaSmartFinds - Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from Git (GitHub/GitLab/Bitbucket)
4. Select the `chinasmartfinds-web` repository
5. Build settings (auto-detected):
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
cd /Users/clawuser/.openclaw/workspace-group-chinasmartfinds/chinasmartfinds-web
vercel

# Deploy to production
vercel --prod
```

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/chinasmartfinds-web)

---

## Environment Variables

For production, add these environment variables in Vercel dashboard:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.chinasmartfinds.com

# Amazon Associates
AMAZON_ASSOCIATES_TAG=your-tag-here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxx
```

---

## Custom Domain

1. Go to Vercel Project Settings → Domains
2. Add `chinasmartfinds.com`
3. Configure DNS as instructed:
   - Type: `A` or `CNAME`
   - Value: Provided by Vercel
4. Wait for DNS propagation (up to 48 hours)

---

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check affiliate links work
- [ ] Verify SEO meta tags
- [ ] Set up Google Analytics
- [ ] Configure custom domain
- [ ] Enable Vercel Analytics
- [ ] Set up error monitoring (Sentry optional)

---

## Performance Optimization

### Images
- Use Next.js Image component for optimization
- Consider Cloudinary or Vercel Image Optimization

### Caching
- Vercel provides automatic caching for static pages
- Use `revalidate` for ISR (Incremental Static Regeneration)

### CDN
- Vercel Edge Network provides global CDN
- All assets automatically served from edge

---

## Monitoring

- **Vercel Analytics**: Built-in, enable in dashboard
- **Google Analytics**: Add GA4 tracking code
- **Search Console**: Submit sitemap to Google

---

## Rollback

If something goes wrong:
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback <deployment-url>
```

---

## CI/CD

Vercel automatically deploys on git push:
- `main` branch → Production
- Other branches → Preview deployments

---

**Last Updated**: 2026-04-19
