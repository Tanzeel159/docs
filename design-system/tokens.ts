/**
 * Design System Tokens
 * 
 * Single source of truth for all design values used across the application.
 * These tokens ensure visual consistency and make it easy to maintain and update the design.
 */

// ============================================
// Colors
// ============================================
export const COLORS = {
  // Primary Brand Colors
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#e85d34', // Main brand color
    600: '#d14a28',
    700: '#b83d1f',
    800: '#9a3219',
    900: '#7c2814',
  },
  
  // Neutral Grays
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Semantic Colors
  text: {
    primary: '#111111',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  
  background: {
    white: '#FFFFFF',
    gray: '#F3F4F6',
    lightGray: '#F9FAFB',
  },
  
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },
} as const;

// ============================================
// Typography
// ============================================
export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['Roboto Mono', 'monospace'],
    pixel: ['Silkscreen', 'cursive'],
  },
  
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================
// Spacing
// ============================================
export const SPACING = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
} as const;

// ============================================
// Layout
// ============================================
export const LAYOUT = {
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '1600px', // Custom max width for portfolio
  },
  
  container: {
    padding: {
      mobile: '1.5rem',  // px-6
      tablet: '2rem',   // px-8
      desktop: '3rem',  // px-12
    },
  },
  
  header: {
    height: '6rem', // h-24
  },
  
  navigation: {
    dockHeight: '3.5rem',
    dockPadding: '0.375rem', // p-1.5
  },
  
  scrollOffset: 240, // Offset for scroll spy
} as const;

// ============================================
// Shadows
// ============================================
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  dock: '0 8px 30px rgba(0, 0, 0, 0.08)',
  none: 'none',
} as const;

// ============================================
// Border Radius
// ============================================
export const RADIUS = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============================================
// Z-Index Scale
// ============================================
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  progress: 200,
  header: 100,
  navigation: 110,
} as const;

// ============================================
// Animation
// ============================================
export const ANIMATION = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 700,
  },
  
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: [0.16, 1, 0.3, 1], // Custom smooth easing
    bounce: [0.23, 1, 0.32, 1], // Custom bounce easing
  },
  
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

// ============================================
// Breakpoints
// ============================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ============================================
// Component-Specific Tokens
// ============================================
export const COMPONENTS = {
  button: {
    height: {
      sm: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
    padding: {
      sm: '0.5rem 1rem',
      md: '0.625rem 1.25rem',
      lg: '0.75rem 1.5rem',
    },
    borderRadius: RADIUS.full,
  },
  
  card: {
    borderRadius: RADIUS.xl,
    padding: SPACING[4],
    shadow: SHADOWS.lg,
    hoverShadow: SHADOWS.xl,
  },
  
  input: {
    height: '2.5rem',
    padding: '0.625rem 1rem',
    borderRadius: RADIUS.lg,
    border: `1px solid ${COLORS.border.light}`,
  },
} as const;

