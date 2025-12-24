import React, { type ElementType } from 'react';
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Changed from keyof JSX.IntrinsicElements to ElementType */
  component?: ElementType;
  'aria-label'?: string;
  testId?: string;
}

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

  // Type assertion ensures Element is treated as a component
  const Element = (component || 'div') as ElementType;

  return (
    <Element
      className={classes}
      onClick={handleClick}
      aria-label={ariaLabel}
      data-testid={testId}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e: React.KeyboardEvent<HTMLElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Safe cast for the shared click handler
                onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
              }
            }
          : undefined
      }
    >
      {children}
    </Element>
  );
};