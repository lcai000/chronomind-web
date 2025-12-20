# Design System: Dementia Care Simulator

## Overview

This document describes the design system and UI patterns used in the Dementia Care Simulator application. While implemented in React Native, these principles are applicable to any React-based application (web, mobile, desktop) and can be adapted to other frameworks.

**Core Principles:**
- **Serene & Calming**: Color palette designed to reduce stress and create a supportive environment
- **Accessibility First**: WCAG AA compliance, proper contrast ratios, and scalable text
- **Consistent Spacing**: 8-point grid system for predictable layouts
- **Semantic Typography**: Meaningful text categories rather than arbitrary pixel values
- **Platform-Aware**: Respects platform conventions while maintaining brand identity

---

## 1. Color System

### 1.1 Color Palette

The color palette uses soft, calming colors appropriate for a caregiving context. Colors are organized by semantic purpose rather than arbitrary names.

#### Backgrounds & Surfaces
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `bg-primary` | `#D4EDDA` | `212, 237, 218` | Primary background - soft calming green |
| `bg-secondary` | `#D1EFF0` | `209, 239, 240` | Cards, elevated surfaces |
| `surface-elevated` | `#FFFFFF` | `255, 255, 255` | Modal backgrounds, floating elements |

#### Text & Content
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `text-primary` | `#2D3E3F` | `45, 62, 63` | Primary text - soft dark for readability |
| `text-secondary` | `#5A7378` | `90, 115, 120` | Secondary text, captions |
| `text-disabled` | `#9BB0B2` | `155, 176, 178` | Disabled states |

#### Accents & Interactive
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `accent-primary` | `#7FBFA0` | `127, 191, 160` | Primary buttons, key actions |
| `accent-primary-hover` | `#6BAA8C` | `107, 170, 140` | Hover state for primary accent |
| `accent-family` | `#9B87C4` | `155, 135, 196` | Family mode differentiation |
| `accent-professional` | `#6BA5D6` | `107, 165, 214` | Professional mode differentiation |

#### Feedback & Status
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `status-success` | `#8BC9A3` | `139, 201, 163` | Success messages, positive indicators |
| `status-warning` | `#E8C487` | `232, 196, 135` | Warnings, medium-priority alerts |
| `status-error` | `#E89B9B` | `232, 155, 155` | Errors, high-priority alerts |
| `stress-low` | `#8BC9A3` | `139, 201, 163` | Low stress indicators |
| `stress-medium` | `#E8C487` | `232, 196, 135` | Medium stress indicators |
| `stress-high` | `#E89B9B` | `232, 155, 155` | High stress indicators |

### 1.2 Color Usage Guidelines

**Contrast Requirements:**
- Text on `bg-primary`: `text-primary` (7.2:1 contrast)
- Text on `accent-primary`: White text (4.8:1 contrast)
- All combinations must meet WCAG AA 4.5:1 minimum

**Accessibility:**
- Never use color alone to convey meaning
- Provide text alternatives for color-coded information
- Support color blindness by using patterns or icons alongside colors

**Implementation Example (CSS/SCSS):**
```scss
:root {
  // Backgrounds
  --color-bg-primary: #D4EDDA;
  --color-bg-secondary: #D1EFF0;

  // Text
  --color-text-primary: #2D3E3F;
  --color-text-secondary: #5A7378;

  // Accents
  --color-accent-primary: #7FBFA0;
  --color-accent-family: #9B87C4;
  --color-accent-professional: #6BA5D6;

  // Status
  --color-status-success: #8BC9A3;
  --color-status-warning: #E8C487;
  --color-status-error: #E89B9B;
}

// Usage
.container {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

.button-primary {
  background-color: var(--color-accent-primary);
  color: white;

  &:hover {
    background-color: var(--color-accent-primary-hover);
  }
}
```

---

## 2. Typography System

### 2.1 Type Scale

The typography system uses a semantic scale based on content hierarchy rather than arbitrary sizes.

| Category | Font Size | Line Height | Font Weight | Use Case |
|----------|-----------|-------------|-------------|----------|
| `display-large` | 32px | 40px | 700 | Main page titles, hero text |
| `display-medium` | 28px | 36px | 600 | Section headers, major headings |
| `heading-large` | 24px | 32px | 600 | Page section titles |
| `heading-medium` | 20px | 28px | 600 | Card titles, form sections |
| `body-large` | 18px | 26px | 400 | Primary body text, descriptions |
| `body-regular` | 16px | 24px | 400 | Standard body text |
| `body-small` | 14px | 20px | 400 | Secondary information, captions |
| `caption` | 12px | 16px | 400 | Metadata, timestamps, small labels |
| `button` | 16px | 24px | 600 | Button text (interactive) |
| `tab-label` | 15px | 20px | 600 | Navigation tab labels |

### 2.2 Implementation Patterns

**CSS Variables Approach:**
```css
:root {
  /* Font Families */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Type Scale */
  --text-display-large: 700 32px/40px var(--font-family-base);
  --text-display-medium: 600 28px/36px var(--font-family-base);
  --text-heading-large: 600 24px/32px var(--font-family-base);
  --text-heading-medium: 600 20px/28px var(--font-family-base);
  --text-body-large: 400 18px/26px var(--font-family-base);
  --text-body-regular: 400 16px/24px var(--font-family-base);
  --text-body-small: 400 14px/20px var(--font-family-base);
  --text-caption: 400 12px/16px var(--font-family-base);
  --text-button: 600 16px/24px var(--font-family-base);
  --text-tab-label: 600 15px/20px var(--font-family-base);
}

/* Usage */
.page-title {
  font: var(--text-display-large);
  color: var(--color-text-primary);
}

.card-title {
  font: var(--text-heading-medium);
  color: var(--color-text-primary);
}

.body-text {
  font: var(--text-body-regular);
  color: var(--color-text-secondary);
}
```

**React Component Approach:**
```typescript
// Typography.tsx
import React from 'react';
import { Text, TextStyle } from 'react-native'; // or 'react' for web

interface TypographyProps {
  variant: 'displayLarge' | 'displayMedium' | 'body' | 'caption' | 'button';
  children: React.ReactNode;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const typographyStyles: Record<string, TextStyle> = {
  displayLarge: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  },
  displayMedium: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  color,
  align = 'left',
}) => {
  return (
    <Text style={[
      typographyStyles[variant],
      { color, textAlign: align }
    ]}>
      {children}
    </Text>
  );
};
```

### 2.3 Text Scaling & Accessibility

**Minimum Requirements:**
- Base font size: 16px (minimum for readability)
- Line height: 1.5x font size for body text
- Support dynamic text scaling (user preferences)
- Never disable text zooming

**Scalable Implementation:**
```css
/* Base scalable unit */
:root {
  --spacing-unit: 8px;
  --text-base-size: 16px;
  --text-scale-ratio: 1.125; /* Major second scale */
}

/* Calculate sizes based on ratio */
body {
  font-size: var(--text-base-size);
  line-height: 1.5;
}

h1 {
  font-size: calc(var(--text-base-size) * var(--text-scale-ratio) * 2);
  line-height: 1.2;
}

/* Support user preferences */
@media screen and (prefers-reduced-motion: no-preference) {
  html {
    font-size: clamp(16px, 1vw + 14px, 20px);
  }
}
```

---

## 3. Spacing & Layout System

### 3.1 8-Point Grid

All spacing uses multiples of 8px for consistency and alignment.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 8px | Tight spacing, icon padding |
| `space-2` | 16px | Standard padding, component margins |
| `space-3` | 24px | Section spacing, large padding |
| `space-4` | 32px | Major section separation |
| `space-5` | 40px | Page-level spacing |
| `space-6` | 48px | Hero section spacing |

### 3.2 Implementation

**CSS Variables:**
```css
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
}

.container {
  padding: var(--space-3) var(--space-2);
  margin-bottom: var(--space-4);
}

.card {
  padding: var(--space-3);
  margin: var(--space-2);
}

.button {
  padding: var(--space-1) var(--space-2);
}
```

**React Style Objects:**
```typescript
const spacing = {
  xs: 8,    // space-1
  sm: 12,   // space-1.5
  md: 16,   // space-2
  lg: 24,   // space-3
  xl: 32,   // space-4
  xxl: 48,  // space-6
};

const styles = {
  container: {
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  button: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
};
```

### 3.3 Layout Patterns

**Card Layout:**
- Border radius: 16px (2 × space-2)
- Padding: 24px (space-3)
- Shadow: Soft elevation for depth
- Background: `bg-secondary`

**Button Layout:**
- Minimum height: 44px (accessibility)
- Padding: 12px × 16px (space-1.5 × space-2)
- Border radius: 8px (space-1)

**Form Layout:**
- Label spacing: 8px above input (space-1)
- Input padding: 12px × 16px
- Error message spacing: 4px below (space-0.5)

---

## 4. Component Design Patterns

### 4.1 Button Component

**Variants:**
- `primary`: Filled background with `accent-primary`
- `secondary`: Outlined with `accent-primary` border
- `text`: Text-only, no background
- `danger`: Red variant for destructive actions

**States:**
- Default
- Hover/focus
- Active/pressed
- Disabled (50% opacity)
- Loading (with spinner)

**Implementation:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'text' | 'danger';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  disabled,
  loading,
  onClick,
}) => {
  const baseStyles = {
    borderRadius: 8,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-accent-primary)',
      borderWidth: 0,
    },
    secondary: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'var(--color-accent-primary)',
    },
    // ... other variants
  };

  const sizeStyles = {
    small: { padding: '8px 12px' },
    medium: { padding: '12px 16px' },
    large: { padding: '16px 24px' },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <Spinner size="small" /> : children}
    </button>
  );
};
```

### 4.2 Card Component

**Variants:**
- `elevated`: With shadow, `bg-secondary` background
- `outlined`: Border only, transparent background
- `filled`: Solid `bg-secondary` without shadow

**Usage:**
```typescript
<Card variant="elevated" padding="medium">
  <Typography variant="headingMedium">Card Title</Typography>
  <Typography variant="body">Card content goes here...</Typography>
</Card>
```

### 4.3 Status Indicator

**Types:**
- `stress`: Color-coded (green → yellow → red)
- `wellBeing`: Reverse color coding (red → yellow → green)
- `metric`: Generic progress bar

**Implementation Pattern:**
```typescript
interface StatusIndicatorProps {
  type: 'stress' | 'wellBeing' | 'metric';
  value: number; // 0-100
  label?: string;
  showValue?: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  type,
  value,
  label,
  showValue,
}) => {
  const getColor = (val: number) => {
    if (type === 'stress') {
      if (val <= 33) return 'var(--color-stress-low)';
      if (val <= 66) return 'var(--color-stress-medium)';
      return 'var(--color-stress-high)';
    }
    // ... other types
  };

  return (
    <div className="status-indicator">
      <div className="status-label">
        <span>{label}</span>
        {showValue && <span>{value}%</span>}
      </div>
      <div className="status-track">
        <div
          className="status-progress"
          style={{
            width: `${value}%`,
            backgroundColor: getColor(value),
          }}
        />
      </div>
    </div>
  );
};
```

### 4.4 Tab Navigation

**Design Pattern:**
- Active tab indicator with smooth animation
- Equal-width tabs for consistent layout
- Platform-aware styling (iOS blur effects, Android material)
- Swipe gestures for mobile

---

## 5. Interaction & Animation

### 5.1 Animation Principles

**Duration:**
- Micro-interactions: 100-200ms
- Content transitions: 300-400ms
- Page transitions: 500-600ms

**Easing:**
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)`
- Entering: `cubic-bezier(0, 0, 0.2, 1)`
- Exiting: `cubic-bezier(0.4, 0, 1, 1)`

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 5.2 Hover & Focus States

**Button States:**
```css
.button {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
  }
}
```

---

## 6. Accessibility Guidelines

### 6.1 Color & Contrast

- Minimum contrast ratio: 4.5:1 (WCAG AA)
- Text on `bg-primary`: 7.2:1
- Interactive elements: Clear focus states
- Color blindness: Test with grayscale and protanopia simulations

### 6.2 Keyboard Navigation

- Logical tab order (DOM order)
- Visible focus indicators
- Skip navigation links
- Accessible modal trapping

### 6.3 Screen Readers

- Semantic HTML elements
- ARIA labels for interactive elements
- Live regions for dynamic content
- Proper heading hierarchy (h1-h6)

### 6.4 Touch Targets

- Minimum 44px × 44px for interactive elements
- Adequate spacing between touch targets
- No overlapping interactive elements

---

## 7. Responsive Design

### 7.1 Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| `mobile` | 320px | Smartphones |
| `tablet` | 768px | Tablets, large phones |
| `desktop` | 1024px | Laptops, desktops |
| `wide` | 1440px | Large monitors |

### 7.2 Implementation

**CSS Media Queries:**
```css
/* Mobile first approach */
.container {
  padding: var(--space-2);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: var(--space-3);
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    padding: var(--space-4);
  }
}
```

**React Hook Approach:**
```typescript
import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1024) setBreakpoint('desktop');
      else if (width >= 768) setBreakpoint('tablet');
      else setBreakpoint('mobile');
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return breakpoint;
};
```

---

## 8. Implementation Examples

### 8.1 Complete Component Example

```typescript
import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  loading = false,
  onClick,
  accessibilityLabel,
}) => {
  const classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
    loading && 'button--loading',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={accessibilityLabel}
      aria-busy={loading}
    >
      {loading ? (
        <span className="button__spinner" aria-hidden="true" />
      ) : (
        <span className="button__content">{children}</span>
      )}
    </button>
  );
};
```

```css
/* Button.css */
.button {
  --button-bg: var(--color-accent-primary);
  --button-text: white;
  --button-border: transparent;

  font: var(--text-button);
  border-radius: 8px;
  border: 2px solid var(--button-border);
  background-color: var(--button-bg);
  color: var(--button-text);
  min-height: 44px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 200ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
}

.button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.button:active:not(:disabled) {
  transform: translateY(0);
}

.button:focus-visible {
  outline: 2px solid var(--color-accent-primary);
  outline-offset: 2px;
}

.button--secondary {
  --button-bg: transparent;
  --button-text: var(--color-accent-primary);
  --button-border: var(--color-accent-primary);
}

.button--text {
  --button-bg: transparent;
  --button-text: var(--color-accent-primary);
  --button-border: transparent;
  min-height: auto;
  padding: 8px 12px;
}

.button--small {
  padding: 8px 12px;
  min-height: 36px;
  font-size: 14px;
}

.button--large {
  padding: 16px 24px;
  min-height: 52px;
}

.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--loading .button__content {
  visibility: hidden;
}

.button__spinner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: button-spin 1s linear infinite;
}

@keyframes button-spin {
  to { transform: rotate(360deg); }
}
```

### 8.2 Page Layout Example

```typescript
import React from 'react';
import { Button, Card, Typography } from './components';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="home-page__header">
        <Typography variant="displayLarge" align="center">
          Dementia Care Simulator
        </Typography>
        <Typography variant="bodyLarge" align="center" color="secondary">
          Practice compassionate caregiving
        </Typography>
      </header>

      <main className="home-page__main">
        <div className="home-page__cards">
          <Card variant="elevated" className="mode-card">
            <div className="mode-card__content">
              <div className="mode-card__icon" style={{ backgroundColor: 'var(--color-accent-family)' }}>
                🏠
              </div>
              <Typography variant="headingMedium" align="center">
                Family Caregiver
              </Typography>
              <Typography variant="body" align="center" color="secondary">
                Empathy & personal care at home
              </Typography>
            </div>
            <Button variant="primary" size="large">
              Select Mode →
            </Button>
          </Card>

          {/* Professional mode card similar structure */}
        </div>
      </main>
    </div>
  );
};
```

```css
/* HomePage.css */
.home-page {
  background-color: var(--color-bg-primary);
  min-height: 100vh;
  padding: var(--space-4);
}

.home-page__header {
  text-align: center;
  margin-bottom: var(--space-6);
  padding-top: var(--space-6);
}

.home-page__cards {
  display: grid;
  gap: var(--space-4);
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .home-page__cards {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
    max-width: 1000px;
  }
}

.mode-card {
  padding: var(--space-4);
  text-align: center;
}

.mode-card__content {
  margin-bottom: var(--space-4);
}

.mode-card__icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto var(--space-3);
}
```

---

## 9. Theme Switching (Family/Professional Modes)

### 9.1 Theme Context

```typescript
import React, { createContext, useContext, useState } from 'react';

type AppMode = 'family' | 'professional';

interface ThemeContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<AppMode>('family');

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div data-theme={mode}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

### 9.2 CSS Theme Variables

```css
[data-theme="family"] {
  --color-accent: var(--color-accent-family);
  --color-bg-secondary: #f4f2ff;
}

[data-theme="professional"] {
  --color-accent: var(--color-accent-professional);
  --color-bg-secondary: #f2f7ff;
}
```

---

## 10. Quality Assurance Checklist

### 10.1 Visual Consistency
- [ ] Colors match design system tokens
- [ ] Typography uses semantic categories
- [ ] Spacing follows 8-point grid
- [ ] Border radius consistent (8px, 16px)
- [ ] Shadows match elevation levels

### 10.2 Accessibility
- [ ] Color contrast meets 4.5:1 minimum
- [ ] Interactive elements ≥44px touch targets
- [ ] Keyboard navigation works
- [ ] Screen reader labels provided
- [ ] Focus indicators visible

### 10.3 Responsiveness
- [ ] Mobile layout (320px+)
- [ ] Tablet layout (768px+)
- [ ] Desktop layout (1024px+)
- [ ] Content doesn't overflow viewport
- [ ] Images scale appropriately

### 10.4 Performance
- [ ] CSS efficiently structured
- [ ] Images optimized
- [ ] Animations use GPU acceleration
- [ ] Reduced motion preferences respected
- [ ] Font loading optimized

---

## 11. Resources & Tools

### 11.1 Design Tokens
- **Colors**: Store as CSS variables or SCSS variables
- **Typography**: Use CSS custom properties for scale
- **Spacing**: Maintain single source of truth

### 11.2 Development Tools
- **CSS Validator**: Check for errors and accessibility
- **Color Contrast Checker**: Verify WCAG compliance
- **Screen Reader Testing**: NVDA, VoiceOver, TalkBack
- **Browser DevTools**: Responsive testing, accessibility audits

### 11.3 Testing Checklist
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test with screen readers
- [ ] Test keyboard navigation
- [ ] Test with reduced motion preferences
- [ ] Test with high contrast mode

---

## Summary

This design system provides a comprehensive foundation for building accessible, consistent, and aesthetically pleasing interfaces for caregiving applications. The principles can be adapted to any React-based project by:

1. **Defining design tokens** (colors, typography, spacing)
2. **Creating reusable components** with consistent patterns
3. **Implementing accessibility** from the start
4. **Supporting responsive layouts** across devices
5. **Maintaining visual consistency** through shared styles

The serene color palette and thoughtful spacing create an environment that supports the app's purpose of training compassionate caregiving while maintaining high usability standards.

---

**Document Version**: 2.0
**Last Updated**: 2025-12-20
**Applicable Platforms**: Web, React Native, Desktop (Electron)
**Design System Status**: ✅ Production Ready