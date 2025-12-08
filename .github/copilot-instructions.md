# Copilot Instructions for nittarab-website

## Project Overview

Personal portfolio website for Patrick Barattin built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 3**, and **Framer Motion**. Uses **pnpm** as the package manager.

## Architecture

### Directory Structure

- `src/app/` — Next.js App Router pages and server actions
- `src/components/` — Reusable React components (all `.jsx` files)
- `src/app/actions/` — Server actions (e.g., GitHub GraphQL fetches)
- `config/deploy.yml` — Kamal deployment configuration

### Key Patterns

- **Client components**: Most UI components use `"use client"` directive for interactivity (Framer Motion animations, theme context)
- **Theme system**: Day/night theme via React Context in [providers.js](src/app/providers.js) — access with `useTheme()` hook
- **Server actions**: Data fetching (GitHub contributions) uses `"use server"` with React cache in [fetchGithubContributions.js](src/app/actions/fetchGithubContributions.js)
- **X402 payments**: Middleware handles micropayments for `/secret` route via `x402-next` package

## Design System: Neo-Organic Fusion

Follow these visual principles for all UI work:

- **Card-based interface**: Content organized in modular cards (see existing `*Card.jsx` components)
- **Soft gradient backgrounds**: `bg-gradient-to-br from-gray-200 to-gray-300` pattern
- **Typography**: Use `font-clash-display-*` variants (regular, medium, semibold, bold) — never generic sans-serif
- **Theme-aware styling**: Always support both themes with conditional classes:
  ```jsx
  className={`${theme === "night" ? "bg-black text-green-400" : "bg-white text-gray-800"}`}
  ```
- **Micro-interactions**: `hover:scale-105`, `transition-all duration-300`, staggered Framer Motion animations
- **Conscious whitespace**: Generous padding (`p-4`, `p-6`, `p-8`) and spacing (`gap-4`, `gap-6`)

## Developer Workflow

### Commands

```bash
pnpm dev      # Development server (Turbopack enabled)
pnpm build    # Production build (standalone output)
pnpm lint     # ESLint check
pnpm format   # Prettier formatting
```

### Deployment

- Deployed via **Kamal** to `nittarab.dev`
- Docker image pushed to `ghcr.io/nittarab/nittarab-website`
- Health check endpoint: `/up`
- Secrets managed via `.env` and `kamal env push`

### Environment Variables

- `GITHUB_TOKEN` — GitHub GraphQL API access
- `RESOURCE_WALLET_ADDRESS` — X402 payment recipient wallet
- `X402_NETWORK` — Payment network (`base-sepolia` or `base`)

## Code Conventions

### Component Structure

- One component per file in `src/components/`
- Use `.jsx` extension for components, `.js` for utilities/pages
- Export single default component matching filename

### Styling Patterns

- Tailwind utility classes inline (no CSS modules)
- Custom font classes defined in [tailwind.config.js](tailwind.config.js)
- Responsive: Mobile-first with `sm:`, `lg:` breakpoints

### Important Rules

- **Never use code placeholders** like `// ... existing code ...` — write complete code
- **Unused variables**: Prefix with `_` to avoid lint errors (`_unused`)
- **3D/Three.js components**: Must include `"use client"` directive
- **Images**: Use `next/image` with explicit `width`/`height` or `fill`

## External Integrations

- **GitHub GraphQL API**: Fetches contribution calendar data
- **Mapbox GL**: Interactive map in MapsCard
- **Google Analytics**: `G-WXVGFLXNJF` tracking ID
