# Copilot Instructions for nittarab-website

## Quick Facts

- Portfolio built with Next.js 16 App Router + React 19 + Tailwind 3 + Framer Motion; package manager is pnpm (see [package.json](package.json)).
- UI renders entirely through modular cards under [src/components](src/components); pages live in [src/app](src/app).
- Day/night theme context from [src/app/providers.js](src/app/providers.js) must wrap any client component that needs `useTheme()`.

## Architecture & Data Flow

- [src/app/layout.js](src/app/layout.js) defines SEO metadata, GA scripts, and injects [src/components/StructuredData.jsx](src/components/StructuredData.jsx); keep schema.org graph up to date with new entities.
- [src/app/page.js](src/app/page.js) orchestrates the hero column + animated card grid; new cards should plug into the Framer Motion `container`/`item` variants to participate in staggered reveals.
- Server-only GitHub stats come from [src/app/actions/fetchGithubContributions.js](src/app/actions/fetchGithubContributions.js) via `graphql-request` and `react` `cache()`; always call from client components with `useEffect` and keep `GITHUB_TOKEN` populated.
- `/secret` is protected by X402 micropayments in [src/middleware.js](src/middleware.js); setting `RESOURCE_WALLET_ADDRESS` and `X402_NETWORK` is required before that route works locally or in prod.
- Mapbox-vis data lives entirely inside [src/components/MapsCard.jsx](src/components/MapsCard.jsx); it imports `mapbox-gl/dist/mapbox-gl.css`, uses a custom immutable style, and animates planes via `setInterval`—clean up intervals and map instances in `useEffect` cleanups when modifying it.

## Styling & Interaction

- Tailwind config ([tailwind.config.js](tailwind.config.js)) declares `font-clash-display-*` stacks and gradient helpers; always prefer these classes over ad-hoc fonts.
- Theme-aware classes follow the pattern in [src/app/page.js](src/app/page.js) and `WhoAmICard`—branch on `theme === "night"` vs `day` and keep transitions at `duration-300` or `duration-500` for consistency.
- Cards typically include `hover:scale-105`, rounded corners, subtle borders, and gradient overlays (see [src/components/WhoAmICard.jsx](src/components/WhoAmICard.jsx)); replicate that rhythm for new cards.
- Motion primitives come from Framer Motion; reuse the shared `container`/`item` variants instead of redefining haphazard animation timings.

## External Integrations

- Google Analytics (`G-WXVGFLXNJF`) loads in layout via `next/script`; if you add more scripts, keep them inside `<head>` in [src/app/layout.js](src/app/layout.js) and prefer `strategy="afterInteractive"`.
- Mapbox token and style IDs are hard-coded today; if you swap them, confirm they are public-safe or move them to env variables consumed in `MapsCard` (remember `use client`).
- GitHub GraphQL queries require the `GITHUB_TOKEN` env var plus outbound network from the server runtime; failures bubble up to the console—wrap new consumers in try/catch and surface skeleton states like [src/components/GitHubCard.jsx](src/components/GitHubCard.jsx).
- GA structured data is delivered via `dangerouslySetInnerHTML` inside [src/components/StructuredData.jsx](src/components/StructuredData.jsx); when extending it, keep the `@graph` IDs stable.

## Developer Workflow

- Common scripts: `pnpm dev` (Turbopack), `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm format`.
- `pnpm` overrides in [package.json](package.json) pin transitive deps (glob, js-yaml); avoid npm/yarn to ensure overrides stick.
- Assets (fonts, profile shots, plane images) live under [public](public); always provide explicit `width`/`height` to `next/image`.
- Deployment uses Kamal ([config/deploy.yml](config/deploy.yml)) targeting `nittarab.dev` with `/up` as health check; keep Docker image metadata in sync when adding services.

## Implementation Gotchas

- Never drop `"use client"` from interactive components (cards, theme provider, Mapbox, Identity effects); app router will promote them automatically if omitted, but hydration mismatches are likely.
- Middleware runs on the Edge matcher for `/secret/:path*`; logging in [src/middleware.js](src/middleware.js) is noisy—trim or guard logs if you add more routes.
- Mapbox CSS is a side-effect import; if you lazy-load the card, ensure the CSS still executes on the client.
- When creating new 3D or three.js experiences, follow .cursorrules guidance: include `"use client"`, no placeholder comments, and provide actual MVP implementations before asking for user confirmation.
