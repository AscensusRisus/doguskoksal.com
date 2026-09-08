# doguskoksal.com

The source for [doguskoksal.com](https://www.doguskoksal.com), Doğuş Köksal's software engineering portfolio. The site presents selected projects, professional experience, technical evidence, current focus, and contact details in a restrained editorial layout.

## Stack

- Astro 7 with static output
- TypeScript and Astro content collections
- Hand-authored CSS with responsive and reduced-motion behavior
- Markdown project case studies

## Local setup

Requirements: Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

Useful commands:

```sh
npm run build
npm run preview
```

`npm run build` writes the production-ready static site to `dist/`.

## Architecture

- `src/layouts/BaseLayout.astro` contains the shared document shell, navigation, theme controls, and footer.
- `src/pages/` defines the homepage, project index, project detail routes, and generated sitemap.
- `src/content/work/` stores project case studies and publication metadata.
- `src/lib/projects.ts` provides the shared published-project query used by pages and the sitemap.
- `src/data/site.ts` is the single source for site-wide metadata and display dates.
- `src/styles/global.css` contains the visual system, responsive rules, and accessibility preferences.
- `public/` contains static assets, favicons, and the downloadable résumé.

Project pages and sitemap entries are generated from published entries in the `work` content collection. Setting a project's `status` to `published` makes it eligible for the project index, detail route, and sitemap.

## Accessibility

The site includes a skip link, semantic landmarks, active-page navigation state, keyboard-visible focus styles, an explicit theme preference with selected-state feedback, and reduced-motion handling for decorative and interface animations.

## Deployment

The project does not depend on a platform-specific adapter. Build it with `npm run build`, then deploy the generated `dist/` directory to a static host. Canonical and sitemap URLs use `https://www.doguskoksal.com` from the shared site configuration.

Astro and Vercel use trailing slashes for page routes. `vercel.json` enables permanent redirects from paths such as `/projects` to `/projects/`. File URLs, including the sitemap, robots file, résumé, and images, keep their existing addresses. Other static hosts must configure equivalent page redirects.

## SEO and sharing

Every page supplies its own description to `BaseLayout`; project pages use their content summary. The shared JSON-LD graph identifies Doğuş Köksal with a stable Person ID, links the homepage through ProfilePage, and attributes each project through CreativeWork. Private project repository links are omitted from both HTML and structured data.

The common social image is `public/social-card.png` (1200 × 630). Its editable source is `docs/assets/social-card.html`. To regenerate the PNG, open that source at a 1200 × 630 viewport, wait for its Google Fonts to finish loading, and capture the viewport at a device scale factor of 1. The source is documentation and does not add a public site route.

### Release checks

- Run `npm ci`, `npm run build`, and `npm run preview`.
- Check the six published pages for distinct descriptions, canonical URLs, social tags, and parseable JSON-LD. Each project must reference the same Person ID.
- At desktop and 390px mobile widths, inspect the navigation, résumé link, project summaries, and case-study headings. With JavaScript disabled, the complete project body and native mobile navigation must remain usable.
- On a Vercel preview, verify that slashless page routes return 308 to their canonical paths; canonical pages, `/robots.txt`, `/sitemap.xml`, `/resume/Dogus-Koksal-Resume.pdf`, and `/social-card.png` return 200; an unknown URL returns 404. Check for redirect loops and repeat after publishing. Local Astro preview does not prove Vercel redirect behavior.

### Visibility measurement after publishing

With owner access to Search Console, inspect the six URLs and submit the existing sitemap. Record the publication date and the previous 28 days of impressions, clicks, and indexed-page status for queries containing `Doğuş Köksal`, `Dogus Koksal`, and `Applyly`. Compare with the first complete 28-day period after publishing, keeping the same query filters.

For AI search, record the tool, date, exact answer, factual accuracy, and cited URLs for “Doğuş Köksal kimdir?” and “What is Applyly and who built it?”. Distinguish an unprompted site citation from a test where the site URL is supplied. Record unavailable data as unavailable; structured data and readable content do not guarantee rankings or citations.

## Screenshots

![Projects index](docs/screenshots/projects.png)
