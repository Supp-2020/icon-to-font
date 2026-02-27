# SVG to Icon Font Generator

A minimal SVG → Icon Font generator using Node.js.

This project converts a folder of SVG files into:

- TTF
- WOFF
- WOFF2
- Auto-generated CSS classes

No frameworks. No bundlers. No XML parsing. Just pure Node.js and the `svgtofont` library.

---

## 🚀 Installation

```bash
npm install
```

---

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

```
icons/
```

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

For best results:

- Use simple SVGs (single path preferred)
- Remove width / height attributes
- Use proper `viewBox`
- Clean exports from Figma / Illustrator

Example:

```xml
<svg viewBox="0 0 24 24">
  <path d="M12 5v14M5 12h14"/>
</svg>
```
