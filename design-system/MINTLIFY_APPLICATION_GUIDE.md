# Applying Your Design System to Mintlify Docs

This guide walks you through how we've mapped your portfolio design system to the Mintlify docs site, and where to make future changes.

---

## Part 1: Understanding Your Project Structure

### Your Docs Project

```
docs/
├── docs.json          ← Main config: colors, fonts, navigation, branding
├── design-system/     ← Your portfolio's design tokens (from tanzeel-portfolio)
│   ├── tokens.ts      ← Colors (#e85d34), typography (Inter), spacing, etc.
│   ├── components.tsx ← Reusable UI (not used by Mintlify - Mintlify has its own)
│   └── ...
├── index.mdx          ← Home page content
├── quickstart.mdx     ← Example page
├── favicon.svg        ← Browser tab icon
├── logo/              ← Site logo (light + dark variants)
│   ├── light.svg
│   └── dark.svg
└── [content folders]  ← ai-tools/, api-reference/, essentials/
```

### How Mintlify Works

Mintlify is a **docs-as-code** platform. It:

1. Reads `docs.json` for all visual and structural config
2. Renders MDX pages with built-in components (Card, Accordion, etc.)
3. Applies your colors/fonts to its pre-built theme (layout, nav, buttons)
4. **Does NOT** use your `components.tsx` or `tokens.ts` directly — you apply them by translating values into `docs.json`

---

## Part 2: Design System → Mintlify Mapping

### Colors

| Design System Token          | Portfolio Value | Mintlify Field | Purpose                                  |
|-----------------------------|-----------------|----------------|------------------------------------------|
| `COLORS.primary[500]`       | `#e85d34`       | `colors.primary` | Light mode: accents, links, section headers |
| `COLORS.primary[600]`       | `#d14a28`       | `colors.dark`    | Important buttons (e.g., CTA)            |
| Lighter variant for dark    | `#f87171`       | `colors.light`   | Dark mode: accents, highlighted content  |

**Where to change:** `docs.json` → `"colors"` object.

### Typography

| Design System           | Portfolio Value  | Mintlify Field | Purpose          |
|-------------------------|------------------|----------------|------------------|
| `TYPOGRAPHY.fontFamily.sans` | `Inter`          | `fonts.family` | Body + headings  |
| `TYPOGRAPHY.fontFamily.mono` | `Roboto Mono`    | (code blocks)  | Mintlify defaults for code |

**Where to change:** `docs.json` → `"fonts"` object. Mintlify loads Google Fonts automatically when you specify a font name.

### Logo & Favicon

- **Logo**: `logo/light.svg` and `logo/dark.svg` — use your portfolio logo for consistency
- **Favicon**: `favicon.svg` — small icon in the browser tab; should use your primary color

**Where to change:** Replace the SVG files, or update paths in `docs.json` → `"logo"` and `"favicon"`.

---

## Part 3: What We Changed (Summary)

### 1. `docs.json` — Colors

```json
"colors": {
  "primary": "#e85d34",   // Your terracotta brand color
  "light": "#f87171",     // Lighter accent for dark mode
  "dark": "#d14a28"       // Hover/button state
}
```

**Before:** Mintlify green (`#16A34A`).  
**After:** Portfolio terracotta (`#e85d34`).

### 2. `docs.json` — Fonts

```json
"fonts": {
  "family": "Inter"
}
```

**Before:** Theme default (varies by theme).  
**After:** Inter, matching your portfolio.

### 3. `docs.json` — Branding & Links

- **name**: Project name (update to your product/project)
- **navbar.primary**: CTA button — set to your portfolio URL (e.g. `https://tanzeel.dev` or Vercel deploy URL)
- **navigation.global.anchors**: Top-right links — Portfolio and Documentation
- **footer.socials**: Your social links — **update** `yourhandle` with your actual X, GitHub, LinkedIn usernames

### 4. Favicon

- Updated `favicon.svg` to use terracotta gradients (`#e85d34`, `#d14a28`, `#f87171`) instead of Mintlify green.

---

## Part 4: Where to Make Future Changes

| What you want to change      | File / Location                          |
|-----------------------------|------------------------------------------|
| Primary color               | `docs.json` → `colors.primary`           |
| Dark mode accent            | `docs.json` → `colors.light`             |
| Button color                | `docs.json` → `colors.dark`              |
| Font                        | `docs.json` → `fonts.family`             |
| Site name                   | `docs.json` → `name`                     |
| Navigation structure        | `docs.json` → `navigation.tabs`          |
| Top bar links               | `docs.json` → `navigation.global.anchors`|
| Main CTA button             | `docs.json` → `navbar.primary`           |
| Footer social links         | `docs.json` → `footer.socials`           |
| Logo (light/dark)           | Replace `logo/light.svg`, `logo/dark.svg`|
| Favicon                     | Replace `favicon.svg`                    |
| Theme (layout style)        | `docs.json` → `theme` (mint, maple, palm, willow, linden, almond, aspen) |

---

## Part 5: Design System Tokens Reference

Keep `design-system/tokens.ts` as your single source of truth. When you update tokens there (e.g., new brand color), remember to sync:

1. **Mintlify `docs.json`** — `colors.primary`, `colors.light`, `colors.dark`
2. **Portfolio** — Tailwind config, components
3. **Favicon/Logo SVGs** — if they use brand colors

---

## Part 6: Limitations

Mintlify controls layout, spacing, and component styling. You **cannot**:

- Import `tokens.ts` or `components.tsx` into Mintlify
- Change spacing, border radius, or shadows beyond what the theme allows
- Override individual component styles

You **can**:

- Set colors and fonts via `docs.json`
- Use custom React components in MDX (advanced)
- Inject custom CSS via `backgroundImage` or custom scripts (if supported)

---

## Quick Reference: Your Design System Colors

```ts
// From design-system/tokens.ts
primary[500]: '#e85d34'  // Main brand
primary[600]: '#d14a28'  // Hover/buttons
primary[400]: '#f87171'  // Lighter (dark mode)
```

Use these hex values whenever you need to match your portfolio in external tools or assets.
