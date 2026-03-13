# Czechitas Slidev Presentation — Claude Code Context

## What this repository is
Slidev presentation for Czechitas courses (Digital Academy). One course = one repository with the same structure. Output is a local presentation or PDF export, deployed to GitHub Pages.

## Presentation language
- **Digital Academy: Cybersecurity** → slide content in **English**
- **All other courses** → slide content in **Czech**

Check the `title` in `slides.md` frontmatter to determine the correct language. Always write new content in the appropriate language.

## Repository structure
```
slides.md              ← main file: slide order, frontmatter, lecturer bio
slides/                ← individual sections (00-agenda.md, 01-topic.md, …)
public/                ← images used in slides (ondrej.png is always Ondřej's bio photo)
theme/                 ← Czechitas theme (DO NOT modify without good reason)
  layouts/             ← Vue layouts: bio, cover, section, default, image-right, center
  components/          ← CzechitasLogo.vue, QRCode.vue
  styles/index.css     ← brand CSS variables and global styles
  assets/              ← Czechitas logos and illustrations
```

## What CHANGES between courses
- `slides.md` — frontmatter (title, author), `src:` file order, lecturer bio
- `slides/*.md` — all slide content
- `public/` — course-specific images (klara.png, topic screenshots, etc.)

## What NEVER changes
- `theme/` — shared Czechitas theme, do not modify
- `public/ondrej.png` — always Ondřej Šrámek's bio photo, never rename or delete

---

## Czechitas brand

### Colors (CSS variables)
```css
--czechitas-pink:   #E6007E   /* primary, headings on gradient slides */
--czechitas-blue:   #2D2E83   /* headings on white background */
--czechitas-cyan:   #00BFE7
--czechitas-yellow: #FFCB04
--czechitas-orange: #F36F21
--czechitas-green:  #8CC63E
--czechitas-purple: #91268F
--czechitas-gradient: linear-gradient(135deg, #E6007E 0%, #6B1FA0 50%, #00BFE7 100%)
```

### Fonts
- Sans: **Open Sans** (300, 400, 700, 800)
- Mono: **Source Code Pro**

---

## Available layouts

### `cover` — title slide
```md
---
layout: cover
---
# Course Title
```
White text on Czechitas gradient, automatically inserts the woman-with-laptop illustration.

### `section` — chapter divider
```md
---
layout: section
subtitle: Optional subtitle
---
# Section Title
```
Czechitas gradient background, large white heading. Use before every new chapter.

### `bio` — lecturer slide
```md
---
layout: bio
image: /ondrej.png
name: "Ondřej Šrámek"
subtitle: "GMON, GNFA, GCTI"
---
- bullet describing experience
::qr::
<QRCode url="https://linktr.ee/ondrejsramek" :size="120">Linktree</QRCode>
```
The `::qr::` slot is optional — layout handles its absence gracefully.

### `default` — standard content slide
White background, blue heading. Used for ~90% of content.

### `image-right` — slide with image on the right
```md
---
layout: image-right
image: /image-name.png
---
# Heading
Text on the left…
```
Column ratio is **3:2** (text : image) — text side is wider.
Defined in `theme/layouts/image-right.vue` as `grid-template-columns: 3fr 2fr`.

**Image-only slides** (no body text): always keep `# Heading` for slide annotations in the overview. The Czechitas logo in the bottom-right corner is added automatically by the layout footer.
```md
---
layout: image-right
image: /screenshot.png
---
# Description of what is shown
```

### `center` — centered content
For closing slides (Thank you, Feedback).

---

## Components

### `<QRCode>`
```vue
<QRCode url="https://example.com" :size="160">Label below QR</QRCode>
```
Generates QR via api.qrserver.com. Use only inside the `::qr::` slot in the `bio` layout.

### `<CzechitasLogo>`
```vue
<CzechitasLogo size="small" />
<CzechitasLogo size="medium" :invert="true" />
```
Automatically included in layout footers — do not add manually to slide content.

---

## HTML utility classes (inline in Markdown)

### Icon grid (agenda, topic overview)
```html
<div class="icon-grid">          <!-- 3 columns by default, add class="cols-2" for 2 -->
  <div class="icon-card">
    <div class="icon">🔍</div>
    <div class="label">Description</div>
  </div>
</div>
```

### Callout boxes
```html
<div class="callout">Info box (cyan)</div>
<div class="callout warning">Warning box (orange)</div>
```

### Gradient background on a custom div
```html
<div class="czechitas-gradient-bg">...</div>
```

---

## slides.md and section file structure

### slides.md — main file
```md
---
theme: ./theme
title: Course Name
author: Lecturer Name
mdc: true
shiki:
  theme: github-light
fonts:
  sans: Open Sans
  mono: Source Code Pro
---
# Course Title         ← cover slide (no explicit layout: cover needed)
---
layout: bio
image: /ondrej.png
name: "Ondřej Šrámek"
subtitle: "GMON, GNFA, GCTI"
---
- bullet
::qr::
<QRCode url="https://linktr.ee/ondrejsramek" :size="120">Linktree</QRCode>
---
src: ./slides/00-agenda.md
---
---
src: ./slides/01-topic.md
---
```

### File naming in /slides
Convention: `NN-name.md` where NN is a zero-padded sequence number.

---

## Tables
Styles are defined in `theme/styles/index.css`. Use standard Markdown tables — header row automatically gets blue background, even rows are light grey.

```md
| Tool | Usage |
|------|-------|
| **Kali Linux** | Pentesting distro |
```

---

## Running, deploying and exporting

### Deploy — GitHub Pages
Deploy triggers automatically on push to `main` via GitHub Actions (`.github/workflows/build-deploy.yml`).
URL pattern: `https://srameko.github.io/<repo-name>/`
The base path is baked into the `build` script in `package.json`:
```json
"build": "slidev build --base /<repo-name>/ --out dist"
```

### PDF export
PDF is exported automatically in CI via:
```yaml
run: npx slidev export --output dist/<repo-name>.pdf
```
Do NOT add `playwright install-deps` — it is not needed.
`playwright-chromium` in devDependencies is sufficient.
After deploy the PDF is accessible at:
`https://srameko.github.io/<repo-name>/<repo-name>.pdf`

---

## README template

Every repository must have a `README.md` with this structure (adjust name, description and URLs):

```markdown
# <Presentation Title>

<One paragraph describing what the presentation covers and which Czechitas course it belongs to.>

## Slides

Latest version available online:
https://srameko.github.io/<repo-name>/

## Download PDF

[<repo-name>.pdf](https://srameko.github.io/<repo-name>/<repo-name>.pdf

```

---

## Common issues

- **Image not showing** — paths in `public/` start with `/image.png` (no `public` prefix). The `bio` and `image-right` layouts handle BASE_URL automatically during build.
- **bio layout without QR** — simply omit the `::qr::` slot, the layout works fine without it.
- **Gradient missing on section slide** — the `section` layout applies `.czechitas-gradient-bg` automatically. On `default` layout add it manually via `<div class="czechitas-gradient-bg">`.
- **Frontmatter in src files** — every slide file in `/slides/*.md` must start with its own `---` frontmatter block defining the layout.
- **Wrong layout name** — chapter divider slides use `layout: section`, not `layout: subtitle`. There is no `subtitle` layout in the theme.
