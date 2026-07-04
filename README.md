# Assembly — Full-Stack Studio Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, with a signature
Three.js hero (react-three-fiber) and scroll animations (framer-motion).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and import the repo on https://vercel.com — zero config needed.

## Structure

- `src/app/layout.tsx` — fonts (Space Grotesk / Inter / JetBrains Mono) + metadata
- `src/app/page.tsx` — assembles all homepage sections
- `src/app/globals.css` — color tokens, mesh background, glass-panel utility
- `src/components/StackScene.tsx` — the signature 3D "assembly" hero animation
- `src/components/Hero.tsx`, `Services.tsx`, `Process.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`

## Customize

- Colors: edit the `@theme inline` block in `src/app/globals.css`
  (`--color-coral`, `--color-cyan`, `--color-ink`, etc.)
- Copy: edit the arrays at the top of `Services.tsx`, `Process.tsx`, `About.tsx`
- Contact form currently just renders the UI — wire the `<form>` in `Contact.tsx`
  to an API route or a service like Formspree/Resend to actually send messages.
- Social links / email / phone: `src/components/Footer.tsx`
