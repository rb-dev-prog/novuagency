<!-- BEGIN:nextjs-agent-rules -->
# Next.js 16.x Agent Warning

This project uses Next.js 16.2.4 — APIs, conventions, and file structure differ from earlier versions. Read `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Dev Commands
- `npm run dev` — Start dev server at http://localhost:3000
- `npm run build` — Production build (includes TypeScript checking)
- `npm run start` — Run production server
- `npm run lint` — Run ESLint

## Project Structure
- `src/app/` — App Router pages and layouts
- `src/components/` — Reusable components
- `src/lib/` — Utilities
- `src/types/` — TypeScript types

## Key Config Notes
- **Tailwind v4**: Uses `@tailwindcss/postcss` plugin in `postcss.config.mjs`, no `tailwind.config.js`
- **ESLint flat config**: Uses `eslint.config.mjs` (not `.eslintrc`)
- **TypeScript**: No separate typecheck script — `npm run build` handles it
- **Path alias**: `@/*` maps to `./src/*`