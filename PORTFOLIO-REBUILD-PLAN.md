# Portfolio rebuild plan — doguskoksal.com

## Objective

Rebuild doguskoksal.com as a fast, production-ready Astro portfolio with React used only for interaction that genuinely benefits from it. The finished site should feel personal, editorial, and deliberate—not like a generic product landing page.

## Current baseline (inspected 2026-07-24)

The repository is currently a small static site:

- `index.html` — home page with introductory bio, learning skills, contact email, and social links.
- `projects.html` — empty projects page shell.
- `style.css` — a single stylesheet with gradients, rounded UI, fixed blurred header, and dark mode styles.
- `script.js` — local-storage-backed dark-mode toggle.
- No `package.json`, Astro configuration, or visible Vercel configuration is present.

The existing site will remain untouched until approval is received to move it into a clearly named `legacy/` directory as part of the migration.

## Proposed information architecture

| Route | Purpose | Primary content |
| --- | --- | --- |
| `/` | A concise, content-led introduction | Intro, selected work, short about, capabilities, direct contact paths |
| `/work` | Complete index of work | Project list with title, role/type, year, and short factual summary |
| `/work/[slug]` | Reusable case-study page | Overview, context, responsibilities, process, media, links, and optional notes |
| `/about` (optional) | Expanded background only if needed | Longer bio, interests, and a compact capabilities list |

The first release can omit `/about` and keep the biography on the home page. The work collection is the durable content model: every project will be a local content entry, so a new case study can be added without changing page templates.

## Proposed page composition

### Home

1. A compact identity/header row: name, section navigation, and a direct email link.
2. An introduction that states current focus in plain language; no broad marketing claim.
3. A selected-work index that gives projects prominence and supports image/no-image entries.
4. A concise background block based on the existing biography, edited only for clarity.
5. A focused capabilities or interests list, labeled as current learning/focus where appropriate.
6. Contact links to the existing email, LinkedIn, GitHub, LeetCode, and Medium profiles.

### Work index and case studies

The work index will present an orderly list rather than a collection of floating cards. Each case study will use a repeatable structure:

1. Title, date/year, role, and one-sentence summary.
2. Project context and intended problem.
3. Contributions/process, only where verified.
4. Images, repository, live link, or writing link when supplied.
5. Outcome/learning notes, with unknown information kept as marked placeholders instead of claims.

## Visual direction

The visual system will be restrained and tactile rather than nostalgic or decorative:

- **Typography:** A display-oriented serif or characterful web-safe headline treatment paired with a highly readable sans-serif body. Small labels may use a mono/system-ui face only for metadata.
- **Colour:** An off-white or paper-like background, near-black text, muted gray rules, and a single dark accent selected for accessible contrast. No gradients or translucent glass surfaces.
- **Grid:** A wide, stable content grid with a narrow utility/metadata column where useful. Generous vertical rhythm and controlled asymmetry only around the work list and case-study metadata.
- **Surfaces:** Primarily flat surfaces with thin rules, underlined text links, and intentionally square-to-lightly-rounded elements. Avoid pill controls and repeated floating cards.
- **Interaction:** Native-feeling link and focus states; subtle color, underline, or rule changes on hover. Any motion will be short, optional, and disabled/reduced for `prefers-reduced-motion`.

## Technical approach

- Use Astro as the rendering and routing foundation.
- Prefer `.astro` components and static generation for layout, pages, and content.
- Store project entries in Astro Content Collections (Markdown/MDX as appropriate) with a typed frontmatter schema.
- Use React only for a self-contained enhancement that cannot be done well with HTML/CSS—for example, an optional theme preference control. No React is required for the initial content pages.
- Use custom CSS tokens and component-scoped styles; do not introduce a component library.
- Keep images locally optimized and use Astro image handling once real assets are supplied.
- Keep JavaScript payload minimal: no animation library, slider, CMS, analytics, database, or authentication.

## Suggested project structure after approval

```text
src/
  components/
    Header.astro
    Footer.astro
    WorkList.astro
    ContactLinks.astro
  content/
    config.ts
    work/
      project-slug.md
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    work/
      index.astro
      [slug].astro
  styles/
    global.css
public/
  images/
legacy/
  index.html
  projects.html
  style.css
  script.js
```

`legacy/` is illustrative only and will not be created or populated until approved. Existing deployment files, if found later, will not be changed without separate approval.

## Content placeholders and replacement workflow

All information not already verified will be visibly marked as placeholder content. Project entries will use frontmatter fields such as:

```yaml
title: "[Project title]"
year: "[YYYY]"
role: "[Your role]"
summary: "[One factual sentence about the work.]"
status: "placeholder"
links:
  live: ""
  repository: ""
cover: ""
```

To add real work later, replace the bracketed values, add a short Markdown body, put supplied images under `public/images/`, and set links only when they are correct. No clients, outcomes, awards, testimonials, or history will be invented.

## Implementation plan and approval gates

- [x] Inspect the current structure and content without modifying it.
- [x] Propose information architecture, page composition, visual direction, and technical approach.
- [ ] **Approval required:** Install Astro, React integration, and their required dependencies.
- [ ] **Approval required:** Move the existing static files to `legacy/`; do not delete them.
- [ ] Scaffold the Astro site with the smallest conventional dependency set.
- [ ] Implement shared semantic layout, responsive navigation, footer, and the home page.
- [ ] Add the typed work collection, work index, and reusable case-study route.
- [ ] Add clearly marked placeholder entries and migrate only factual existing bio/contact content.
- [ ] Check keyboard navigation, skip link, focus visibility, contrast, landmarks, heading order, and reduced-motion behavior.
- [ ] Run a production build and local preview check.
- [ ] Confirm that deployment-related files remain untouched.

## Constraints and stop conditions

- Ask before installing dependencies, deleting or overwriting existing files, changing deployment configuration, accessing secrets, using external services, or changing files outside this project.
- Do not deploy, publish, alter domains, or change Vercel settings.
- Do not add a CMS, database, authentication, analytics, or external services without explicit request.
- Use React islands sparingly; the initial release may contain no React component if no interaction merits it.

## Definition of done

- [ ] Working Astro portfolio with a coherent home page and scalable project structure.
- [ ] Distinctive, calm, content-led visual system with no generic landing-page treatment.
- [ ] Responsive and accessible from mobile through wide desktop.
- [ ] No fabricated portfolio claims in visible content.
- [ ] Production build and local preview pass.
- [ ] Existing deployment-related files remain untouched unless explicitly approved.

## Final implementation report

When implementation is complete, report:

1. The implemented information architecture and visual direction.
2. Every changed file.
3. How to replace placeholder content, links, and images.
4. Build, preview, responsive, and accessibility verification performed.
5. Recommended next steps, such as supplying real project assets and case-study copy.
