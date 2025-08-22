# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI consultancy website project targeting small to medium-sized businesses (SMBs). The website aims to showcase AI integration services, prompt optimization, and custom app development capabilities.

## Tech Stack

- **Framework**: Next.js (React-based with SSR)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI or Shadcn/UI
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

## Development Commands

### Initial Setup
```bash
npx create-next-app@latest
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production Preview
```bash
npm run start
```

## Project Structure

The website will be a single-page application with the following main sections:
- Homepage with hero section and interactive AI visualization
- Services page (AI Integration, Prompt Optimization, Custom Apps)
- About Us
- Blog/Case Studies
- Contact page with inquiry form

## Design System

### Color Palette
- Primary: Deep Indigo (#4B0082)
- Accent: Vibrant Teal (#00BFA5)
- Secondary: Soft Lavender (#E6E6FA)
- Text: Charcoal Gray (#333333)
- Background: Off-White (#F5F5F5)
- CTA Button: Lime Green (#32CD32)

### Typography
- Headings: Montserrat or similar geometric sans-serif
- Body: Inter or Roboto

## Key Features to Implement

1. Mobile-first responsive design
2. SEO optimization with meta tags and schema markup
3. "Audit My Business" lead generation form (mockup initially)
4. Interactive demos and case studies
5. Dark mode toggle
6. Smooth animations with Framer Motion
7. Performance optimization (target Lighthouse score >90)

## Development Guidelines

- Use TypeScript for type safety
- Follow Next.js best practices for SSR and static generation
- Implement accessible components using Radix UI/Shadcn
- Optimize images and use Next.js Image component
- Use Tailwind CSS utility classes for styling
- Create reusable React components for consistency