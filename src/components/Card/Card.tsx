import React from 'react';
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps {
  /** Card variant style */
  variant?: CardVariant;
  /** Padding size */
  padding?: CardPadding;
  /** Whether the card is interactive (hover effects) */
  interactive?: boolean;
  /** Whether the card should take full width */
  fullWidth?: boolean;
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** HTML element to render (defaults to div) */
  component?: keyof JSX.IntrinsicElements;
  /** Accessibility label */
  'aria-label'?: string;
  /** ID for testing */
  testId?: string;
}

/**
 * Card component for content containers.
 * Follows Chronomind design system with consistent spacing and shadows.
 */
export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'medium',
  interactive = false,
  fullWidth = false,
  children,
  className = '',
  onClick,
  component,
  'aria-label': ariaLabel,
  testId,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    onClick?.(event);
  };

  // Build CSS classes
  const variantClass = `card--${variant}`;
  const paddingClass = `card--padding-${padding}`;
  const interactiveClass = interactive ? 'card--interactive' : '';
  const widthClass = fullWidth ? 'card--full-width' : '';

  const classes = [
    'card',
    variantClass,
    paddingClass,
    interactiveClass,
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Element = component || 'div';

  return (
    <Element
      className={classes}
      onClick={handleClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e as any);
              }
            }
          : undefined
      }
      data-testid={testId}
    >
      {children}
    </Element>
  );
};

export default Card;