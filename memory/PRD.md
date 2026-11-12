# PRD — Bharat Marks Homepage

## Original Problem Statement
Design and develop a modern, premium, responsive homepage for **Bharat Marks**, an Indian intellectual property and trademark services brand. Professional/trustworthy, modern/sophisticated, premium corporate, clean/minimal, approachable (not overly legalistic), confident without being flashy. Use the exact provided logo URL, preserve proportions and transparency. Tech: Next.js App Router, TypeScript, Tailwind CSS, reusable React components, Lucide React icons. Must remain compatible with future Next.js static export (cPanel hosting): no API routes, no server actions, no server-dependent functionality, client components only where interactive, images work with static export (`next/image` unoptimized). Suggested title: "Bharat Marks | Trademark & Intellectual Property Services in India". No unsupported legal claims or guaranteed registration promises.

## User Choices (from ask_human)
- Colour direction: **Deep navy + gold accents** (premium, authoritative) — chosen from logo
- Copy: research bharatmarks.com and reflect real services + fresh copy around standard IP services
- CTAs: placeholder phone / WhatsApp / email links + scroll to contact/enquiry section
- Testimonials & FAQ: realistic, clearly replaceable content (real public testimonials from bharatmarks.com were used)

## Architecture / Tasks Done
- Converted frontend from CRA (react-scripts/craco) to **Next.js 15 App Router + TypeScript + Tailwind CSS** (served by the platform supervisor via `yarn start` → `next dev`, port 3000)
- `next.config.ts`: `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`, `allowedDevOrigins` for the preview host — fully static-export/cPanel ready
- Logo downloaded from the exact provided URL to `public/logo.png` (1083×231 transparent PNG), rendered unmodified via `next/image`
- Fonts: Playfair Display (display serif) + Plus Jakarta Sans (body) via Google Fonts `<link>`
- Palette: navy #0B132B/#1C2541/#070B19, gold #D4AF37/#C5A059/#B48E28, ivory #F8FAFC
- Real contact details from bharatmarks.com: +91 98722 36665, info@bharatmarks.com, SCO 31&32, 1st Floor, U.E Part-2, Patiala, Punjab 147002; WhatsApp wa.me/919872236665

## Components (src/)
- `app/layout.tsx` (metadata, fonts, Header/Footer), `app/page.tsx`, `app/globals.css`
- `components/layout/Header.tsx` — fixed glass header, Services hover/click dropdown (8 items), mobile drawer with accordion, phone chip, Enquire CTA
- `components/layout/Footer.tsx` — brand, services, company, contact columns, legal disclaimer (no guaranteed registration)
- `components/home/`: Hero (headline, dual CTA, trust chips, photo + floating fact cards), TrustStrip (4 qualitative trust pillars — no invented stats), Services (8 cards: the 6 real trademark services + copyright + patent), WhyChooseUs (4 real features + outcome chips + photo), Process (4-step navy timeline + real 12–18 month note), Audience (4 segments), Testimonials (4 real public testimonials w/ names & cities), FAQ (7 client accordion, real Q&As), FinalCTA (contact method cards: phone/WhatsApp/email/office)
- `components/base/`: Reveal (framer-motion whileInView, once), SectionHeading

## Core Requirements
- Static, no backend calls, no form submission (contact = direct call/WhatsApp/email links)
- All interactive elements carry data-testid attributes (header-logo, header-services-dropdown, mobile-menu-button, hero-headline, hero-consultation-button, hero-whatsapp-button, service-card-*, process-step-*, faq-accordion-item-*, footer links, final-cta links)

## What's Implemented (dates)
- 2026-11-07: Full homepage (Header, Hero, TrustStrip, Services, WhyChooseUs, Process, Audience, Testimonials, FAQ, FinalCTA, Footer) with dropdown nav, mobile menu, FAQ accordion, reveal animations; static-export-ready config; verified desktop 1440 & mobile 390 on external preview host

## Backlog / Prioritized
- P1: Contact/enquiry form page (needs a backend or form service — currently intentionally out per static-export constraint)
- P1: Individual service pages (dropdown links currently anchor to homepage sections)
- P2: Blog/insights section for SEO
- P2: Google reviews embed, social links
- P2: OG image + favicon set refinement

## Next Tasks
- Add service detail pages and point dropdown/footer links to them
- Wire an enquiry form once a backend or managed form provider is chosen
- Deploy via Vercel or run `next build` for the static `out/` folder for cPanel upload
