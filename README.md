## The Jewish Woman Blueprint

A small Next.js marketing site for **The Jewish Woman Blueprint**, built with the App Router and organized for iterative design work.

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/site/
  hero-section.tsx
  offerings-section.tsx
  pillars-section.tsx
  site-footer.tsx
  site-header.tsx
  teaching-section.tsx
  vision-section.tsx
data/
  site.ts
public/images/
  ...
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Editing Guide

- Page composition lives in `app/page.tsx`.
- Reusable homepage sections live in `components/site/`.
- Site copy and structured content live in `data/site.ts`.
- Global theme tokens and typography live in `app/globals.css`.

## Notes

- This project uses Next `16.2.4` and the App Router.
- Images are rendered with `next/image`.
- Fonts are loaded with `next/font/google`.

## Next Steps

- Add additional routes such as `/about`, `/offerings`, or `/contact` when you're ready.
- Replace the mailto CTA with the final booking flow.
- Add final brand copy, SEO assets, and launch metadata.
