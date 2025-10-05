# Ahmed Ali — Portfolio

Modern personal landing page for Ahmed Ali, a full-stack developer and AI builder. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion to showcase projects, experience, and contact pathways.

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with CSS variables for theming
- Framer Motion for motion cues and interactions
- lucide-react for icons
- next-themes for persistent light/dark toggle
- Zod validation for the contact flow

## Getting Started

```bash
pnpm install
pnpm dev
```
Visit `http://localhost:3000` to view the site.

## Production Build

```bash
pnpm build
pnpm start
```

## Linting & Formatting

```bash
pnpm lint
```

## Project Structure
- `app/` — Routes, layouts, API handlers
- `components/` — Reusable UI primitives (buttons, sections, modal, form fields, toast, providers)
- `data/` — Structured content for projects, experience, and skills
- `lib/` — Utility helpers
- `public/` — Static assets (project art, portrait, CV placeholder)

## Notes
- Contact form posts to `/api/contact` and sends email via Resend using the configured credentials.
- Toast notifications provide user feedback on form submission outcomes.
- Theme toggle respects user preference and stores it in `localStorage`.
- Animations gracefully reduce motion when `prefers-reduced-motion` is enabled.

Adapt the data files (`data/*.ts`) and imagery (`public/images`) to make the portfolio your own.

## Environment Variables

Create a `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_RECIPIENT_EMAIL=hello@ahmedali.dev
```

The contact API uses Resend to deliver submissions. Update `CONTACT_RECIPIENT_EMAIL` to the inbox that should receive messages.
