/**
 * Reusable UI Components
 * 
 * Consistent, reusable components that follow the design system.
 * These components ensure visual consistency across the application.
 */

import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, RADIUS, ANIMATION, LAYOUT } from './tokens';

// ============================================
// Typography Components
// ============================================

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: keyof typeof TYPOGRAPHY.fontSize;
  weight?: keyof typeof TYPOGRAPHY.fontWeight;
  className?: string;
}

/**
 * Consistent text component with design system typography
 */
export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'primary',
  size = 'base',
  weight = 'normal',
  className = '',
  children,
  ...props
}) => {
  const colorClass = {
    primary: 'text-gray-900',
    secondary: 'text-gray-500',
    tertiary: 'text-gray-400',
  }[variant];

  return (
    <Component
      className={`${TYPOGRAPHY.fontFamily.sans.join(' ')} ${colorClass} ${className}`}
      style={{
        fontSize: TYPOGRAPHY.fontSize[size],
        fontWeight: TYPOGRAPHY.fontWeight[weight],
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/**
 * Consistent heading component with design system typography
 */
export const Heading: React.FC<HeadingProps> = ({
  as,
  level = 1,
  className = '',
  children,
  ...props
}) => {
  const Component = as || (`h${level}` as 'h1');
  const sizeMap = {
    1: 'text-5xl md:text-7xl lg:text-[6.5rem]',
    2: 'text-4xl md:text-5xl lg:text-6xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl',
  };

  return (
    <Component
      className={`font-sans font-semibold text-gray-900 tracking-tight leading-tight ${sizeMap[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// ============================================
// Container Components
// ============================================

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: keyof typeof LAYOUT.maxWidth;
  padding?: 'mobile' | 'tablet' | 'desktop';
  className?: string;
}

/**
 * Consistent container component with design system layout
 */
export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'full',
  padding = 'desktop',
  className = '',
  children,
  ...props
}) => {
  const paddingClass = {
    mobile: 'px-6',
    tablet: 'px-8',
    desktop: 'px-6 md:px-12',
  }[padding];

  return (
    <div
      className={`mx-auto ${paddingClass} ${className}`}
      style={{ maxWidth: LAYOUT.maxWidth[maxWidth] }}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================
// Button Components
// ============================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Consistent button component with design system styling
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'font-mono uppercase tracking-wide transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-[#e85d34] text-white hover:bg-[#d14a28]',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost: 'text-gray-500 hover:text-gray-900 hover:bg-gray-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{
        borderRadius: RADIUS.full,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================
// Card Components
// ============================================

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  className?: string;
}

/**
 * Consistent card component with design system styling
 */
export const Card: React.FC<CardProps> = ({
  hover = false,
  className = '',
  children,
  ...props
}) => {
  const cardClasses = `
    bg-white rounded-xl p-4
    transition-all duration-300
    ${hover ? 'hover:shadow-xl cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div
      className={cardClasses}
      style={{
        boxShadow: hover ? SHADOWS.lg : SHADOWS.base,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================
// Section Components
// ============================================

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Consistent section component with design system spacing
 */
export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  spacing = 'md',
  className = '',
  children,
  ...props
}) => {
  const spacingMap = {
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-32',
    xl: 'py-40',
  };

  return (
    <Component
      className={`${spacingMap[spacing]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// ============================================
// Animated Components
// ============================================

interface FadeInProps extends MotionProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

/**
 * Fade-in animation wrapper component
 */
export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  duration = 0.5,
  children,
  ...motionProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: ANIMATION.easing.smooth,
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps extends MotionProps {
  stagger?: number;
  children: React.ReactNode;
}

/**
 * Staggered animation container for lists
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  stagger = ANIMATION.stagger.normal,
  children,
  ...motionProps
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.1,
          },
        },
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends MotionProps {
  children: React.ReactNode;
}

/**
 * Individual item for staggered animations
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  ...motionProps
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: ANIMATION.easing.smooth,
          },
        },
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

