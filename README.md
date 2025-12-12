# DropKitchn Landing Page

A modern Next.js landing page for dropkitchn.com featuring a centered logo on a light blue background.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **Vercel** - Deployment platform

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` directory (static export).

### Preview Production Build

```bash
npm start
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: GitHub Integration (CI/CD)

1. Push this repository to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Next.js setup"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure the project

6. Click "Deploy" - Vercel will automatically deploy on every push to main

### Custom Domain Setup

After deployment, to use dropkitchn.com:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add `dropkitchn.com` and `www.dropkitchn.com`
4. Update your DNS records as instructed by Vercel

## Project Structure

```
dropkitchn/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page component
│   ├── page.module.css     # Page-specific styles
│   └── globals.css         # Global styles
├── public/
│   └── logo.png           # Company logo
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Features

- ✅ Modern Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ CSS Modules for scoped styling
- ✅ Static export for zero server costs
- ✅ Optimized image handling
- ✅ Responsive design
- ✅ Zero scroll, full viewport layout
- ✅ Ready for Vercel deployment

## Future Enhancements

The Next.js framework makes it easy to add:
- Dynamic routes
- API routes
- Server-side rendering
- Incremental Static Regeneration (ISR)
- Internationalization (i18n)
- Analytics and performance monitoring
