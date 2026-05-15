# Content Management Guideline

This project uses **Astro Content Collections** to ensure technical integrity and **Master YAML Data** for resume synchronization.

---

## ✍️ Adding a New Blog Post

All blog posts are stored in `src/content/blog/` as Markdown files.

### 1. Create the File
Create a new file: `src/content/blog/your-post-title.md`.

### 2. Add Required Frontmatter
The top of your file **must** include these fields to pass the build check:
```markdown
---
title: "Your Technical Title"
description: "A short, 1-2 sentence technical summary."
pubDate: 2026-05-16
tags: ["C++", "Distributed Systems"]
---

# Your Content Here
Markdown content starts here...
```

### 3. Verification
Run `npm run build` to ensure the new route `/blog/your-post-title` is generated correctly.

---

## 🏗️ Adding a New Project

Projects require a two-step process to keep your **Web Portfolio** and **PDF Resume** in sync.

### Step 1: Add to Web Portfolio
Create a new file: `src/content/projects/project-name.md`.
It **must** include these fields:
```markdown
---
title: "Project Name"
description: "High-level technical overview."
year: "2026"
role: "Lead Engineer"
link: "https://github.com/houtaru/project" # Optional
tags: ["Go", "eBPF"]
---
Detailed project description...
```

### Step 2: Sync with PDF Resume
To ensure your **LaTeX Resume** also shows this project, add it to `src/data/cv.yaml` under the `projects:` section:
```yaml
projects:
  - title: "Project Name"
    date: "2026"
    description: "Brief technical description for the PDF resume."
```

---

## 🛠️ Build Commands

| Command | Action |
| :--- | :--- |
| `npm run build` | Builds the website and checks content schemas. |
| `npm run build:cv` | Compiles `src/data/cv.yaml` into `public/resume.pdf`. |
| `npm run build:all` | **Recommended.** Runs both of the above. |

---

## 💡 Expert Tips
- **Filenames:** Use `kebab-case` for files (e.g., `zero-latency-security.md`) as they become your URLs.
- **Images:** Place images in `src/assets/` and import them into your Markdown if needed.
- **Drafts:** To hide a post from the build, prefix the filename with an underscore: `_hidden-post.md`.
