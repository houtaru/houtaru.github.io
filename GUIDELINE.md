# Project Guidelines: houtaru.github.io (v2)

This document outlines the development standards, architectural patterns, and workflows for the 2026 portfolio rebuild.

## 1. Technical Stack
- **Framework:** Astro 5+ (Static Mode)
- **Styling:** Tailwind CSS 4 (Theme-first approach)
- **Content:** Markdown/MDX for blog/projects, YAML for CV data.
- **PDF Engine:** LaTeX (`moderncv` classic style).
- **Deployment:** GitHub Pages / GitLab Pages.

## 2. The "Single Source of Truth" (CV)
All professional data is managed in `v2/src/data/cv.yaml`. 
- **DO NOT** edit `cv.astro` or `modern_template.tex` for content updates.
- **Workflow:** Update `cv.yaml` -> The website and PDF will synchronize on next build.

## 3. PDF Generation Workflow
The project uses a high-fidelity LaTeX pipeline instead of fragile HTML-to-PDF converters.
- **Template:** `v2/src/cv/modern_template.tex`.
- **Compilation:** `pdflatex` is used to build the PDF directly into the Astro `public` folder.
- **Command:** `npm run build:cv` (inside `v2/`).

## 4. Development Commands
Execute all commands from the `v2/` directory:
- `npm run dev`: Start local development server.
- `npm run build:cv`: Recompile the LaTeX resume PDF.
- `npm run build:all`: Compile PDF and build the full Astro static site.
- `npm run preview`: Preview the production build locally.

## 5. CI/CD Pipeline (Automated)
Both GitHub and GitLab are configured to:
1. Install TeX Live dependencies.
2. Compile `modern_template.tex` into `public/resume.pdf`.
3. Build the Astro static site.
4. Deploy to the `/v2` subdirectory (Preview Phase).

## 6. Directory Structure
- `/v2/src/cv/modern_template.tex`: Master LaTeX template.
- `/v2/src/data/cv.yaml`: Master source for all personal/professional data.
- `/v2/src/pages/cv.astro`: Web-native CV implementation.
- `/v2/public/resume.pdf`: The generated PDF (ignored by git, created at build time).

## 7. Aesthetic Mandates (System-Native)
- **Color Palette:** Deep Charcoal (#0A0A0A), System Blue (#2e74b5), Off-White (#EDEDED).
- **Typography:** Geist Sans (UI), Geist Mono (Technical Data), Serif Italic (Headlines).
- **Density:** High information density, monochromatic with blue accents.

---
**Maintained by:** Gemini CLI
**Last Updated:** May 15, 2026
