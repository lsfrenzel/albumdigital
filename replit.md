# Gohan Digital - Álbuns Personalizados

## Overview

Gohan Digital is a marketing website for selling personalized digital photo albums. The platform showcases two main products: "Gohan Golden" (pet albums) and "Gohan para Casais" (couple albums), with a promotional bundle offer. The site features a modern, animated design with WhatsApp integration for direct sales communication.

**Primary Purpose**: E-commerce marketing site for digital album products with conversion-focused design.

**Tech Stack**: React + TypeScript frontend, Express backend, PostgreSQL database (via Drizzle ORM), deployed on Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**:
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and dev server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management

**UI Component Strategy**:
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom design system
- **Class Variance Authority (CVA)** for component variant management
- Design follows luxury/premium e-commerce patterns inspired by Airbnb and Shopify

**Animation & Interactivity**:
- **AOS (Animate On Scroll)** library for scroll-based animations
- Custom CSS animations for hover effects and transitions
- Mobile-first responsive design with different animation timings for mobile vs desktop

**Design System**:
- Primary colors: Gold/Dourado (45 75% 55%), Rose/Rosa (340 82% 75%)
- Typography: Cinzel/Playfair Display (serif headlines), Inter/DM Sans (body), Dancing Script (accents)
- Custom hover effects using elevation classes (`hover-elevate`, `active-elevate-2`)

### Backend Architecture

**Server Setup**:
- **Express.js** server with TypeScript
- **ESM modules** (type: "module" in package.json)
- Dual build approach: Development uses tsx, production uses esbuild
- Middleware logging for API requests with duration tracking

**Development vs Production**:
- Development: Vite dev server with HMR, integrated with Express
- Production: Static files served from dist/public, API routes handled by Express

**Storage Layer**:
- In-memory storage implementation (MemStorage class) as fallback
- Designed with interface pattern (IStorage) for easy database integration
- Currently implements basic user CRUD operations

### Data Storage

**ORM & Database**:
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** serverless PostgreSQL as the provider (@neondatabase/serverless)
- Schema defined in shared/schema.ts with Drizzle Zod integration for validation

**Schema Design**:
- Users table with UUID primary keys (using Postgres gen_random_uuid())
- Zod schemas derived from Drizzle tables for runtime validation
- Shared types between frontend and backend via @shared/* path alias

**Database Configuration**:
- Connection via DATABASE_URL environment variable
- Migrations stored in ./migrations directory
- Push-based migrations using `drizzle-kit push` command

### External Dependencies

**WhatsApp Integration**:
- Direct WhatsApp Business API links with pre-filled messages
- Contact number: +55 11 94365-2488
- Multiple CTAs throughout the site with different message templates

**Third-party Services**:
- **Google Fonts**: Cinzel, Playfair Display, Inter, DM Sans, Dancing Script
- **AOS Library**: Scroll animations (unpkg CDN)
- **React Icons**: WhatsApp icon from Simple Icons pack

**Deployment Platform**:
- **Vercel** as primary hosting platform
- Custom vercel.json configuration for SPA routing
- API routes proxied through /api/* pattern
- Environment variables managed through Vercel dashboard

**Asset Management**:
- Static assets stored in attached_assets directory
- Stock images for products and testimonials
- Logo and brand images
- Custom path alias @assets for asset imports

**Form & Validation**:
- React Hook Form with Hookform Resolvers for form management
- Zod for schema validation
- Integration with shadcn/ui form components

**Development Tools**:
- Replit-specific plugins for development environment
- Runtime error overlay for debugging
- Dev banner and cartographer plugins (Replit only)