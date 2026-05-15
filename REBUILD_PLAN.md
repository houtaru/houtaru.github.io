# Rebuild Plan: houtaru.github.io (Modern-Cozy Academic Focus)

This plan outlines the strategy to rebuild `houtaru.github.io` into a professional, academic-industrial portfolio with a high-end, cozy aesthetic.

## 1. Vision & Goals
*   **Tactile-Expert Aesthetic:** A high-impact "Active Grid" (Bento 2.0) layout. Combines the warmth of a physical book (macOS Books) with the cutting-edge physicality of modern luxury interfaces.
*   **Kinetic Typography:** Massive, responsive serif headlines that serve as the primary visual element.
*   **Physicality:** Use of subtle grain textures, "squishy" micro-interactions, and glassmorphism to create a premium, non-boring digital experience.
*   **Industry Impact:** Signals senior-level expertise in Distributed Systems through structured, data-rich case studies and a perfect technical stack (Astro 6 + Tailwind 4).

## 2. Tech Stack & Design (2026)

### Aesthetic: **The "Cloud Dancer" Palette**
*   **Colors:**
    *   **Base:** `#F7F0E7` (Cloud Dancer / Off-White).
    *   **Ink:** `#1A1A1A` (Deep Charcoal).
    *   **Accent:** `#D4AF37` (Muted Gold) or `#3E5C76` (Expert Blue).
*   **Typography:** 
    *   **Hero:** Massive *Cormorant Garamond* or *Merriweather* (Italic, Light weight).
    *   **UI:** *Inter Variable* or *Geist* for high-precision technical data.
*   **Layout:** **Asymmetric Bento 2.0**. Variable card sizes with high-radius corners (32px), using glassmorphism for secondary layers.

### Animations: **Physical & Narrative**
*   **Scroll-Triggered Reveal:** Content blocks slide and fade with a "magnetic" feel.
*   **Interactive Cards:** Tiles that expand or glow on hover, revealing deeper technical stats.
*   **Kinetic Text:** Headlines that subtly track mouse movement or scroll depth.

### Content Layer
*   **Astro Content Collections:** 
    *   `src/content/blog/`: For technical thoughts.
*   **Syntax Highlighting:** Shiki for formal, clean code snippets.

### Deployment: **GitHub Pages + GitHub Actions**
*   **Preview Path:** Configure Astro `base` path to `/v2/` for the development phase.
*   **CI/CD:** Automated build and deploy to a `/v2/` subdirectory in the `gh-pages` branch.
*   **LaTeX Pipeline**: Automated compilation of your resume from source to PDF using `pdflatex`.

---

## 3. Site Structure & Preview Path

### Preview Strategy (`/v2/`)
1.  **Development:** Work in a `v2-rebuild` branch.
2.  **Base URL:** Set `base: '/v2'` in `astro.config.mjs`.
3.  **Deployment:** GitHub Actions / GitLab CI will build the site and push it to the `/v2` folder.
4.  **Full Merge:** Once approved, move the content to the root, update the `base` URL to `/`, and replace the old Hexo files.

### Pages
1.  **Home (`/`):** A formal biography, profile photo (academic style), research interests, and a quick summary of education.
2.  **CV (`/cv`):** A high-fidelity, responsive web version of your resume, generated from YAML.
3.  **Projects (`/projects`):** Significant engineering work (e.g., Zalo, VNG) with detailed technical descriptions.
4.  **Blog (`/blog`):** Minimalist list of articles.

---

## 4. Single-Source-of-Truth CV

To ensure your CV is always in sync between the website and the PDF:

*   **Source Format:** **YAML** (`src/data/cv.yaml`). This is the only file you need to edit. It is human-readable and stores all your data (Education, Experience, Skills, Projects).
*   **Web UI (Astro):** An Astro component (`src/components/CV.astro`) reads the YAML data and renders a responsive, modern web version of your resume.
*   **PDF Generation (LaTeX):**
    *   **Template:** A modified Jake Gutierrez LaTeX template (`src/cv/template.tex`) containing placeholders (e.g., `{{ education }}`).
    *   **Script:** A small Node.js script uses a templating engine (like Mustache) to inject the YAML data into the `.tex` template.
    *   **Automation:** A GitHub Action triggers on every push to:
        1. Generate the `.tex` file from YAML.
        2. Compile the LaTeX to `resume.pdf`.
        3. Deploy the PDF alongside the Astro site.

---

## 5. Content Strategy

### Blog Posts (`src/content/blog/`)
Manage posts as `.md` or `.mdx` files.
```markdown
---
title: "Modern Web Development in 2026"
pubDate: 2026-05-15
description: "Insights into the latest trends."
tags: ["webdev", "astro"]
---
Post content here...
```

### Publications (`src/content/publications/`)
Manage research papers with metadata for formal listing.
```markdown
---
title: "SRGAN with Total Variation Loss in Face Super-Resolution"
authors: ["Hai Nguyen-Truong", "Khoa N. A. Nguyen", "San Cao"]
conference: "NICS 2020"
year: 2020
doi: "..."
pdf: "/pdfs/srgan.pdf"
---
Brief abstract or summary of the contribution.
```

### Projects (`src/content/projects/`)
Showcase engineering work with rich descriptions.
```markdown
---
title: "Project Name"
stack: ["React", "Go", "PostgreSQL"]
link: "https://github.com/..."
image: "/images/project1.png"
---
Brief description of the project and your role.
```

### CV Data (`src/data/cv.yaml`)
Maintain professional history in a structured YAML format for easy updates across the site and PDF.

---

## 6. Implementation Phases

### Phase 1: Foundation
*   Initialize Astro project.
*   Setup basic routing and layouts.
*   Implement Global Styles and Theme (Dark/Light mode).

### Phase 2: CV Source & PDF Automation
*   Define the CV schema in `src/data/cv.yaml`.
*   Setup the Jake Gutierrez template with placeholders.
*   Create the generation script (YAML -> LaTeX).
*   Configure the GitHub Action for automated PDF compilation.

### Phase 3: Web UI & Portfolio
*   Build the responsive web-based CV component using the same YAML data.
*   Develop the Projects gallery using the data from your past work (Zalo, VNG, etc.).
*   Migrate legacy blog posts and setup the new blog system.

### Phase 4: Polish & Deployment
*   Final SEO and Performance tuning.
*   Setup unified deployment pipeline for the Astro site and the Resume PDF.

---

## 7. Migration from Hexo
1.  Keep the current repository history.
2.  Move the generated files to a `legacy/` folder or a separate branch for archiving.
3.  Place the new Astro source code in the root (on a `main` or `source` branch).
4.  Redirect old URLs (if any) to new paths using a `public/_redirects` file or Astro configuration.

---
**Plan Prepared by:** Gemini CLI
**Date:** May 15, 2026
