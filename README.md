# XTRA Construction Homepage

A responsive frontend recreation inspired by the XTRA Theme Construction 2 demo homepage. Built with Next.js, React, TypeScript, Tailwind CSS, custom CSS, and Lucide icons.

## Requirements

- Node.js 18.17 or later
- npm

## Getting started

1. Clone the repository and open its directory:

   ```bash
   git clone <repository-url>
   cd construction-homepage
   ```

2. Install the locked dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

No environment file is required for local development. See [Environment configuration](#environment-configuration) if you want to keep a local template.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run Next.js ESLint (may prompt to configure ESLint on first use) |

## Environment configuration

The current frontend does not read environment variables, so no values need to be configured and deployment can proceed without environment variables.

An optional [`.env.example`](./.env.example) is included as a reminder that there are currently no required variables. To make a local environment file, copy it to `.env.local` (for example, in PowerShell: `Copy-Item .env.example .env.local`). `.env.local` is ignored by Git.

If an API or email service is added later:

- Add only the variables the implementation actually reads to `.env.example`.
- Keep private credentials in `.env.local` or the hosting provider's secret settings; never commit them.
- Prefix a variable with `NEXT_PUBLIC_` only when it must be available in browser code. Values with that prefix are public.

## Features

- Responsive header with mobile navigation
- Hero slider with previous/next controls
- About, services, process, projects, quote form, testimonials, client logos, and footer sections
- Interactive testimonial carousel and scroll-to-top control
- Responsive desktop, tablet, and mobile layouts
- Semantic markup and reduced-motion support

The quote form currently validates in the browser and displays a demo confirmation; it does not send email or persist submitted data.

## Project structure

- `src/app/` — Next.js App Router page and global styles
- `src/components/` — reusable page sections and controls
- `public/images/` — local image assets

Tailwind is configured in `tailwind.config.ts` and `postcss.config.js`. Global Tailwind layers are loaded from `src/app/globals.css`.

## Deployment

Deploy as a Next.js application (for example, through Vercel) using the standard production build and start commands. No environment variables are currently needed.

## Notes

- External stock image URLs and Google Fonts may require an internet connection.
- This is a frontend visual recreation, not a copy of the proprietary XTRA theme source.
- Contact and other section links are representative homepage destinations.
