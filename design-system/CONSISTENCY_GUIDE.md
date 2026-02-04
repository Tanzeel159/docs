# Design System Consistency Guide

This guide ensures all components follow the design system consistently.

## Color Usage

### Primary Color
- **Main brand color**: `#e85d34` (COLORS.primary[500])
- **Hover states**: `#d14a28` (COLORS.primary[600])
- **Use for**: CTAs, active states, highlights, accents

### Text Colors
- **Primary text**: `#111111` (COLORS.text.primary) - Main content
- **Secondary text**: `#6B7280` (COLORS.text.secondary) - Supporting text
- **Tertiary text**: `#9CA3AF` (COLORS.text.tertiary) - Muted text

### Background Colors
- **White**: `#FFFFFF` - Default background
- **Light gray**: `#F9FAFB` - Subtle backgrounds
- **Gray**: `#F3F4F6` - Card backgrounds, dividers

## Typography Scale

### Headings
- **H1**: `text-5xl md:text-7xl lg:text-[6.5rem]` - Hero headlines
- **H2**: `text-4xl md:text-5xl lg:text-6xl` - Page titles
- **H3**: `text-3xl md:text-4xl` - Section headings
- **H4**: `text-2xl md:text-3xl` - Subsection headings

### Body Text
- **Large**: `text-lg` (18px) - Important body text
- **Base**: `text-base` (16px) - Default body text
- **Small**: `text-sm` (14px) - Supporting text
- **Extra Small**: `text-xs` (12px) - Labels, metadata

### Font Families
- **Sans**: Inter - Primary body text
- **Mono**: Roboto Mono - Code, metadata, labels
- **Pixel**: Silkscreen - Decorative (rarely used)

## Spacing Patterns

### Container Padding
- **Mobile**: `px-6` (24px)
- **Desktop**: `px-6 md:px-12` (24px / 48px)

### Section Spacing
- **Small**: `py-12` (48px) - Compact sections
- **Medium**: `py-20` (80px) - Standard sections
- **Large**: `py-32` (128px) - Major sections
- **Extra Large**: `py-40` (160px) - Hero sections

### Component Spacing
- **Card gap**: `gap-6 md:gap-8` (24px / 32px)
- **Grid gap**: `gap-6 md:gap-8` (24px / 32px)
- **Button padding**: `px-5 py-2.5` (20px / 10px)

## Border Radius

- **Small**: `rounded-lg` (8px) - Buttons, small cards
- **Medium**: `rounded-xl` (12px) - Cards, containers
- **Large**: `rounded-2xl` (16px) - Large cards
- **Full**: `rounded-full` - Pills, circular elements

## Shadows

- **Base**: Default card shadow
- **Hover**: Enhanced shadow on hover
- **Dock**: Special shadow for navigation dock
- **Modal**: Strong shadow for overlays

## Z-Index Hierarchy

Use `Z_INDEX` from `tokens.ts` for consistency:

1. **Base content**: `Z_INDEX.base` (0)
2. **Header**: `Z_INDEX.header` (100)
3. **Navigation**: `Z_INDEX.navigation` (110)
4. **Sticky**: `Z_INDEX.sticky` (1020)
5. **Progress bar**: `Z_INDEX.progress` (200)
6. **Dropdowns**: `Z_INDEX.dropdown` (1000)
7. **Modals**: `Z_INDEX.modalBackdrop` (1040), `Z_INDEX.modal` (1050)
8. **Popover/Tooltip**: `Z_INDEX.popover` (1060), `Z_INDEX.tooltip` (1070)

## Animation Patterns

### Duration
- **Fast**: 150ms - Micro-interactions
- **Normal**: 300ms - Standard transitions
- **Slow**: 500ms - Page transitions

### Easing
- **Smooth**: `[0.16, 1, 0.3, 1]` - Default easing
- **Bounce**: `[0.23, 1, 0.32, 1]` - Playful interactions

### Stagger
- **Fast**: 50ms - Quick lists
- **Normal**: 100ms - Standard lists
- **Slow**: 150ms - Dramatic reveals

## Component Patterns

### Buttons
- Always use `rounded-full`
- Use mono font for uppercase text
- Hover: scale 1.05, color change
- Active: scale 0.95

### Cards
- Use `rounded-xl` for border radius
- Shadow: base on default, xl on hover
- Padding: `p-4` or `p-6`

### Navigation
- Dock: `rounded-full`, backdrop blur
- Buttons: `rounded-full`, consistent padding
- Active indicator: `w-1.5 h-1.5 rounded-full`

## Responsive Patterns

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Common Patterns
```tsx
// Text sizing
className="text-4xl md:text-5xl lg:text-6xl"

// Spacing
className="px-6 md:px-12"

// Grid
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Visibility
className="hidden md:block"
```

## Accessibility

- **Color contrast**: Minimum 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- **Focus states**: Always visible; use `focus:ring-2 focus:ring-[#e85d34]/50 focus:ring-offset-2` (primary color)
- **Focus-visible**: Prefer `focus-visible:ring-*` so focus ring shows for keyboard, not mouse
- **Touch targets**: Minimum 44×44px for interactive elements
- **Font sizes**: Minimum 16px for body text
- **Buttons/links**: Icon-only buttons must have `aria-label`; links should have descriptive text or `aria-label`
- **Images**: Use meaningful `alt` text; decorative images use `alt=""` and `aria-hidden="true"`
- **Reduced motion**: Site respects `prefers-reduced-motion: reduce` in `index.html`
- **Skip link**: “Skip to main content” is available for keyboard users

## Common Mistakes to Avoid

❌ **Don't:**
- Use hardcoded hex colors
- Mix different spacing scales
- Use inconsistent border radius
- Skip hover states
- Ignore responsive design

✅ **Do:**
- Use design tokens
- Follow spacing scale
- Use consistent radius values
- Add hover feedback
- Test all breakpoints

## Checklist for New Components

- [ ] Uses design tokens for colors
- [ ] Follows typography scale
- [ ] Uses consistent spacing
- [ ] Has proper hover states
- [ ] Is responsive
- [ ] Has visible focus states (keyboard)
- [ ] Uses consistent border radius
- [ ] Follows animation patterns
- [ ] Uses `Z_INDEX` from tokens
- [ ] Accessible: aria-labels on icon buttons, alt on images, semantic HTML

