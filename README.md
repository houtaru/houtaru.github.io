# San (The) Cao — 2026 System-Native Portfolio

The high-performance, developer-centric portfolio of **San (The) Cao**. Rebuilt in 2026 with a "System-Native" aesthetic: monochromatic, high information density, and console-inspired.

## 🚀 Overview
This repository serves as both a static portfolio and an automated professional identity management system. It features a single-source-of-truth data model that powers both the web experience and a print-ready LaTeX resume.

- **URL:** [https://houtaru.github.io/](https://houtaru.github.io/)
- **Tech Stack:** Astro 5.4, Tailwind CSS 4, LaTeX (`moderncv`)
- **Design Philosophy:** Monochromatic (#0A0A0A / #EDEDED), Geist typography, sharp edges, and terminal-inspired interactive elements.

## 🛠 Key Features
- **Automated CV Pipeline:** `src/data/cv.yaml` acts as the master data source. Changes here automatically sync to the web CV and the generated PDF.
- **LaTeX Integration:** A custom build script compiles a professional 1-page `resume.pdf` using `pdflatex`.
- **System-Native UI:** Designed for high information density and technical clarity, utilizing Geist Mono for data and Geist Sans for UI components.
- **Legacy Archive:** The original 2017 portfolio is preserved in `legacy_archive/`.

## 📁 Project Structure
- `src/data/cv.yaml`: **The Master File.** All professional data lives here.
- `src/cv/modern_template.tex`: The LaTeX template for the PDF resume.
- `src/pages/`: Astro components for the web views.
- `public/resume.pdf`: The generated PDF artifact.
- `scripts/`: Utility scripts for the build pipeline.

## 🏗 Development & Build

### Prerequisites
- **Node.js:** v22+
- **TeX Live:** Required for generating the PDF resume (`pdflatex`).

### Installation
```bash
npm install --legacy-peer-deps
```

### Local Development
```bash
npm run dev
```

### Build Pipeline
The project uses a consolidated build process to ensure the PDF and Web assets are always in sync.

```bash
# Full Build (PDF + Astro Site)
npm run build:all

# Build CV PDF only
npm run build:cv

# Build Astro Site only
npm run build
```

## 🚢 Deployment
Deployment is automated via **GitHub Actions**. The pipeline handles the LaTeX compilation and Astro build before deploying to GitHub Pages.

**Note:** Ensure the GitHub Pages source is set to **"GitHub Actions"** in the repository settings to bypass the legacy Jekyll builder.

---
*Identity: San (The) Cao — Backend Infrastructure & DB Reliability*
