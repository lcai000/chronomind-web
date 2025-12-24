import React, { type ElementType } from 'react';
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
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  bold?: boolean;
  italic?: boolean;
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
  /** Changed from keyof JSX.IntrinsicElements to ElementType */
  component?: ElementType;
  onClick?: () => void;
}

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
  // Return type changed to ElementType
  const getComponent = (): ElementType => {
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