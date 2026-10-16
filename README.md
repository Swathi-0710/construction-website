# XTRA Construction Homepage

A responsive frontend recreation inspired by the [XTRA Theme Construction 2 demo homepage](https://xtra-theme.com/). Built with Next.js, React, TypeScript, Tailwind CSS, custom CSS, and Lucide icons.

## Requirements

- Node.js 18.17 or later
- npm

## Getting Started

1. Clone the repository and open its directory:

   ```bash
   git clone <repository-url>
   cd construction-homepage
   ```

2. Install the dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run the project's lint checks, if configured |

## Environment Configuration

The current frontend does not require environment variables for local development or deployment.

An optional `.env.example` file is included as a reminder that there are currently no required variables. To create a local environment file, copy it to `.env.local`.

For PowerShell:

```powershell
Copy-Item .env.example .env.local
```

If an API or email service is added later:

- Add only the variables the implementation actually reads to `.env.example`.
- Keep private credentials in `.env.local` or your hosting provider's secret settings. Never commit them.
- Prefix a variable with `NEXT_PUBLIC_` only when it must be available in browser code. Values with that prefix are public.

## Features

- Responsive header with mobile navigation
- Hero slider with previous and next controls
- About, services, process, projects, quote form, testimonials, client logos, and footer sections
- Interactive testimonial carousel and scroll-to-top control
- Responsive desktop, tablet, and mobile layouts
- Semantic markup and reduced-motion support

The quote form currently validates in the browser and displays a demo confirmation. It does not send email or persist submitted data.

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   └── globals.css
└── components/

public/
└── images/
```

- `src/app/` — Next.js App Router page and global styles
- `src/components/` — Reusable page sections and controls
- `public/images/` — Local image assets

Tailwind is configured in `tailwind.config.ts` and `postcss.config.js`. Global Tailwind layers are loaded from `src/app/globals.css`.

## Deployment

Deploy as a Next.js application using a hosting provider such as [Vercel](https://vercel.com/).

Use the standard production build and start commands:

```bash
npm run build
npm run start
```

No environment variables are currently required.

## Notes

- External stock image URLs and Google Fonts may require an internet connection.
- This is a frontend visual recreation, not a copy of the proprietary XTRA theme source.
- Contact and other section links are representative homepage destinations.
