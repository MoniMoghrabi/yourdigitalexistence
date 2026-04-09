# CLAUDE.md — yourdigitalexistence.com

## Project overview
An educational web app that raises awareness about digital footprints.
Target audience: everyday internet users who may not understand
what data they leave behind or why it matters.

## Stack
- Framework:   Next.js 14 (App Router, TypeScript)
- Styling:     Tailwind CSS
- Content:     MDX (blog articles with embedded React components)
- Comments:    Giscus (GitHub Discussions, no backend needed)
- Hosting:     Vercel (free tier)
- Domain:      yourdigitalexistence.com (DNS managed at HostPapa)

## Site structure
/                         → Homepage (hero, key stats, CTA)
/learn                    → Educational hub
  /learn/what-is-a-digital-footprint
  /learn/why-it-matters
  /learn/how-to-protect-yourself
/tools                    → Interactive tools
  /tools/footprint-calculator   (React component, no backend)
  /tools/privacy-quiz           (React component, score-based)
/blog                     → MDX article index
  /blog/[slug]            → Individual article + Giscus comments
/about                    → Mission statement + external resources

## Key conventions
- All pages use the App Router (app/ directory)
- Blog posts live in content/blog/*.mdx
- Reusable components live in components/
- Each tool is a self-contained React component with no API calls
- Use Tailwind utility classes only — no custom CSS files
- All interactive tools must work without a database or auth
- MDX articles can import and embed tool components inline

## Content goals
- Educate without fearmongering — tone is calm and empowering
- Every article should end with 1–3 actionable takeaways
- Tools should give users a personalised result they can act on

## Commands
npm run dev       → local dev server
npm run build     → production build
vercel            → deploy to Vercel

## Out of scope (for now)
- User accounts / authentication
- Database / backend API
- Paid features or paywalls