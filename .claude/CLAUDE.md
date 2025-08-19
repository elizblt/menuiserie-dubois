# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (faster builds)
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a **Next.js 15 App Router** application for Menuiserie Dubois, a French carpentry business. The site is built with modern React patterns and TypeScript.

### Core Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Images**: Next Cloudinary integration
- **Email**: EmailJS for contact forms

### Directory Structure

#### `/src/app/` - App Router Pages
- Root layout includes ModernHeader/ModernFooter and SEO metadata
- Pages: home (`page.tsx`), about (`a-propos`), contact, quotes (`devis`), portfolio (`realisations`)

#### `/src/components/`
- **`layout/`** - Header and footer components (both legacy and Modern versions)
- **`sections/`** - Page sections (Hero, Services, Testimonials, etc.). Multiple design versions exist (Modern, Premium, standard)
- **`forms/`** - Form components for quotes and contact
- **`ui/`** - shadcn/ui base components (Button, Card, Input, etc.)

#### `/src/data/`
- **`entreprise.ts`** - Business information (contact, hours, service areas, certifications)
- **`services.ts`** - Service offerings data
- **`realisations.ts`** - Portfolio projects data
- **`temoignages.ts`** - Customer testimonials data

#### `/src/types/index.ts`
Comprehensive TypeScript definitions for all business entities:
- `Realisation` - Portfolio projects with images, pricing, materials
- `Témoignage` - Customer testimonials with ratings
- `Service` - Service offerings with pricing and characteristics
- `DemandeDevis` / `DemandeRdv` - Quote and appointment request forms
- `InfosEntreprise` - Business information structure

### Design System

#### Color Palette
- **Wood colors** (`wood.*`) - Primary brand colors representing woodworking craft
- **Sage colors** (`sage.*`) - Professional accent colors
- Uses CSS custom properties for theming flexibility

#### Component Patterns
- **Multiple design systems**: Components exist in standard, Modern, and Premium variants
- **shadcn/ui integration**: Consistent base components with custom styling
- **Responsive design**: Mobile-first approach with Tailwind breakpoints

### Business Context
- **French carpentry business** in Montauban region
- **Services**: Custom kitchens, wooden stairs, interior fittings
- **Service area**: Tarn-et-Garonne, Toulouse region
- **Certifications**: Qualibat, RGE Quali'Bois, professional insurance

### Key Features
- **Multilingual SEO** optimized for French market
- **Contact forms** with EmailJS integration
- **Portfolio showcase** with before/after images
- **Service area mapping** for local SEO
- **Professional certifications display**

### Development Notes
- Uses Turbopack for faster development builds
- Prettier configured with Tailwind plugin for consistent formatting
- TypeScript strict mode for type safety
- Component composition follows shadcn/ui patterns

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing