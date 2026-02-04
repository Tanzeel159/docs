# Design System

This design system ensures visual consistency and maintainability across the portfolio website.

## Structure

```
design-system/
├── tokens.ts         # Design tokens (colors, typography, spacing, z-index, animation, etc.)
├── components.tsx    # Reusable UI components (Text, Heading, Button, Card, Section, FadeIn, etc.)
├── CONSISTENCY_GUIDE.md  # Patterns and checklist for consistency
└── README.md         # This file
```

## Design Tokens

### Colors

The color system is organized into semantic categories:

- **Primary**: Brand color (#e85d34) with full scale (50-900)
- **Gray**: Neutral grays for text and backgrounds
- **Text**: Semantic text colors (primary, secondary, tertiary)
- **Background**: Background colors
- **Border**: Border colors

**Usage:**
```typescript
import { COLORS } from '../design-system/tokens';

// Use semantic colors
const primaryColor = COLORS.primary[500];
const textColor = COLORS.text.primary;
```

### Typography

Typography system includes:
- Font families (sans, mono, pixel)
- Font sizes (xs to 9xl)
- Font weights (light to bold)
- Line heights
- Letter spacing

**Usage:**
```typescript
import { TYPOGRAPHY } from '../design-system/tokens';

const fontSize = TYPOGRAPHY.fontSize.lg;
const fontWeight = TYPOGRAPHY.fontWeight.semibold;
```

### Spacing

Consistent spacing scale from 0 to 40 (4px to 160px).

**Usage:**
```typescript
import { SPACING } from '../design-system/tokens';

const padding = SPACING[6]; // 24px
```

### Layout

Layout tokens include:
- Max widths for containers
- Container padding (mobile, tablet, desktop)
- Header heights
- Navigation dimensions

### Shadows

Predefined shadow values for consistent elevation.

### Border Radius

Consistent border radius values.

### Z-Index

Use `Z_INDEX` from tokens to avoid conflicts: `base`, `header`, `navigation`, `progress`, `sticky`, `dropdown`, `modalBackdrop`, `modal`, `popover`, `tooltip`.

### Animation

Animation tokens for:
- Duration (`ANIMATION.duration`: instant, fast, normal, slow, slower)
- Easing (`ANIMATION.easing`: linear, easeIn, easeOut, easeInOut, smooth, bounce)
- Stagger delays (`ANIMATION.stagger`: fast, normal, slow — values in seconds for framer-motion)

### Breakpoints

`BREAKPOINTS` (sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536) for media queries. Tailwind uses the same values.

### Component tokens

`COMPONENTS` in tokens define button heights/padding, card radius/padding/shadow, and input styles.

## Reusable Components

### Typography Components

#### Text
```tsx
import { Text } from '../design-system/components';

<Text variant="primary" size="lg" weight="medium">
  Your text here
</Text>
```

#### Heading
```tsx
import { Heading } from '../design-system/components';

<Heading level={1}>Main Heading</Heading>
<Heading level={2}>Section Heading</Heading>
```

### Layout Components

#### Container
```tsx
import { Container } from '../design-system/components';

<Container maxWidth="full" padding="desktop">
  Your content
</Container>
```

#### Section
```tsx
import { Section } from '../design-system/components';

<Section spacing="lg">
  Your section content
</Section>
```

### UI Components

#### Button
```tsx
import { Button } from '../design-system/components';

<Button variant="primary" size="md">
  Click me
</Button>
```

#### Card
```tsx
import { Card } from '../design-system/components';

<Card hover>
  Card content
</Card>
```

### Animation Components

#### FadeIn
```tsx
import { FadeIn } from '../design-system/components';

<FadeIn delay={200} duration={500}>
  Content that fades in
</FadeIn>
```

#### StaggerContainer & StaggerItem
```tsx
import { StaggerContainer, StaggerItem } from '../design-system/components';

<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>
```

## Usage Guidelines

### 1. Always Use Design Tokens

❌ **Don't:**
```tsx
<div style={{ color: '#e85d34' }}>Text</div>
```

✅ **Do:**
```tsx
import { COLORS } from '../design-system/tokens';

<div style={{ color: COLORS.primary[500] }}>Text</div>
```

### 2. Use Reusable Components

❌ **Don't:**
```tsx
<h1 className="text-5xl font-semibold text-gray-900">Title</h1>
```

✅ **Do:**
```tsx
import { Heading } from '../design-system/components';

<Heading level={1}>Title</Heading>
```

### 3. Maintain Consistency

- Use the same spacing scale throughout
- Use semantic color names (primary, secondary) instead of hex values
- Follow the typography scale
- Use consistent border radius values

### 4. Responsive Design

Always consider mobile, tablet, and desktop breakpoints:
- Use responsive padding from `LAYOUT.container.padding`
- Use Tailwind responsive classes (sm:, md:, lg:)
- Test on multiple screen sizes

## Best Practices

1. **Import from design-system**: Always import tokens and components from the design system
2. **Don't hardcode values**: Use tokens instead of magic numbers
3. **Use semantic names**: Prefer `COLORS.text.primary` over `COLORS.gray[900]`
4. **Component composition**: Build complex components from simple ones
5. **Documentation**: Document any custom components or patterns

## Accessibility

- Use semantic HTML (`<button>`, `<nav>`, `<main>`, `<section>`, etc.).
- Icon-only buttons must have `aria-label`.
- Images need meaningful `alt`; decorative images use `alt=""` and `aria-hidden="true"`.
- Ensure visible focus styles (e.g. `focus:ring-2 focus:ring-[#e85d34]/50 focus:ring-offset-2`).
- Touch targets at least 44×44px; body text at least 16px.
- See `CONSISTENCY_GUIDE.md` for the full accessibility checklist.

## Extending the Design System

When adding new tokens or components:

1. Add tokens to `tokens.ts`
2. Create reusable components in `components.tsx`
3. Update this README and `CONSISTENCY_GUIDE.md`
4. Ensure backward compatibility if changing existing tokens

## Examples

Application code can use design tokens via `utils/constants.ts` (re-exports from `tokens.ts`) or import directly from `design-system/tokens`. For component patterns and layout, see:
- `components/Header.tsx` — layout, spacing, navigation
- `components/ProjectCard.tsx` — color, shadow, cards
- `components/Hero.tsx` — typography, section spacing

