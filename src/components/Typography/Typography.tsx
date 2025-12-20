import React from 'react';
import './Typography.css';

export type TypographyVariant =
  | 'displayLarge'
  | 'displayMedium'
  | 'headingLarge'
  | 'headingMedium'
  | 'bodyLarge'
  | 'bodyRegular'
  | 'bodySmall'
  | 'caption'
  | 'button'
  | 'tabLabel';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'success'
  | 'warning'
  | 'error'
  | 'inherit';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  /** The typography variant */
  variant?: TypographyVariant;
  /** Text color */
  color?: TypographyColor;
  /** Text alignment */
  align?: TypographyAlign;
  /** Whether to make text bold */
  bold?: boolean;
  /** Whether to make text italic */
  italic?: boolean;
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  /** Additional CSS class */
  className?: string;
  /** React children */
  children: React.ReactNode;
  /** HTML element to render (defaults to variant mapping) */
  component?: keyof JSX.IntrinsicElements;
  /** Optional onClick handler */
  onClick?: () => void;
}

/**
 * Typography component for consistent text styling across the application.
 * Uses design system tokens for typography scale and colors.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyRegular',
  color = 'primary',
  align = 'left',
  bold = false,
  italic = false,
  truncate = false,
  className = '',
  children,
  component,
  onClick,
}) => {
  // Map variant to HTML element
  const getComponent = (): keyof JSX.IntrinsicElements => {
    if (component) return component;

    switch (variant) {
      case 'displayLarge':
      case 'displayMedium':
        return 'h1';
      case 'headingLarge':
        return 'h2';
      case 'headingMedium':
        return 'h3';
      case 'bodyLarge':
      case 'bodyRegular':
      case 'bodySmall':
      case 'button':
      case 'tabLabel':
        return 'p';
      case 'caption':
        return 'span';
      default:
        return 'p';
    }
  };

  // Build CSS classes
  const variantClass = `typography--${variant}`;
  const colorClass = `typography--color-${color}`;
  const alignClass = `typography--align-${align}`;

  const classes = [
    'typography',
    variantClass,
    colorClass,
    alignClass,
    bold && 'typography--bold',
    italic && 'typography--italic',
    truncate && 'typography--truncate',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Element = getComponent();

  return (
    <Element className={classes} onClick={onClick}>
      {children}
    </Element>
  );
};

export default Typography;