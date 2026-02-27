# SVG to Icon Font Generator

A minimal SVG → Icon Font generator using Node.js.

This project converts a folder of SVG files into:

- TTF
- WOFF
- WOFF2
- Auto-generated CSS classes

No frameworks. No bundlers. No XML parsing. Just pure Node.js and the `svgtofont` library.

> **Icon source:** SVG icons used in this project are downloaded from [Font Awesome](https://fontawesome.com/).

## 🚀 Installation

```bash
npm install
```

## 🛠 Build Icons

```bash
npm run build:icons
```

This will generate:

```
dist/
  icons.ttf
  icons.woff
  icons.woff2
  icons.css
```

---

## 🎨 How To Add Icons

1. Place SVG files inside:

Example:

```
icons/
  add.svg
  search.svg
```

2. Run:

```bash
npm run build:icons
```

3. Use in HTML:

```html
<link rel="stylesheet" href="./dist/icons.css" />

<span class="icon icon-add"></span>
<span class="icon icon-search"></span>
```

---

## ⚠️ SVG Requirements

Icon fonts render glyphs as **filled shapes only** — `stroke` attributes are completely ignored by the font generator. This is the most common reason generated icons look wrong or appear blank.

### ✅ Use fills, not strokes

| | Works | Broken |
|---|---|---|
| Attribute | `fill="currentColor"` | `fill="none" stroke="currentColor"` |
| Result | Renders correctly | Invisible / empty glyph |

**Wrong (stroke-based):**

```xml
<svg viewBox="0 0 24 24" fill="none">
  <path stroke="currentColor" stroke-width="2" d="M21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0"/>
</svg>
```

**Correct (fill-based):**

```xml
<svg viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd"/>
</svg>
```

For hollow/outline shapes, use `fill-rule="evenodd"` with two subpaths (outer and inner) to cut out the hole — this mimics the visual appearance of a stroke without actually using one.

### Other requirements

- Use a proper `viewBox` (e.g. `viewBox="0 0 24 24"`)
- Remove fixed `width` / `height` attributes from the `<svg>` tag
- Prefer single-path or simple multi-path shapes
- Clean exports from Figma: use **Outline Stroke** before exporting
