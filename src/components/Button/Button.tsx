import React from 'react';
import './Button.css';
import { Typography } from '../Typography';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'family' | 'professional' | 'default';

export interface ButtonProps {
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Button color theme (family/professional) */
  color?: ButtonColor;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Button content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class */
  className?: string;
  /** HTML button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Accessibility label */
  'aria-label'?: string;
  /** ID for testing */
  testId?: string;
}

/**
 * Button component following Chronomind design system.
 * Accessible, responsive, and supports loading states.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  color = 'default',
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  testId,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(event);
  };

  // Build CSS classes
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;
  const colorClass = color !== 'default' ? `button--${color}` : '';
  const stateClass = disabled ? 'button--disabled' : '';
  const loadingClass = loading ? 'button--loading' : '';
  const widthClass = fullWidth ? 'button--full-width' : '';

  const classes = [
    'button',
    variantClass,
    sizeClass,
    colorClass,
    stateClass,
    loadingClass,
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine typography variant based on size
  const getTypographyVariant = (): 'button' | 'bodySmall' => {
    if (size === 'small') return 'bodySmall';
    return 'button';
  };

  return (
    <button
      className={classes}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
      aria-label={ariaLabel}
      aria-busy={loading}
      data-testid={testId}
    >
      {loading ? (
        <div className="button__loading-container">
          <div className="button__spinner" aria-hidden="true" />
          <span className="button__content--hidden">{children}</span>
        </div>
      ) : (
        <Typography
          variant={getTypographyVariant()}
          color={variant === 'primary' ? 'inherit' : 'primary'}
          align="center"
          className="button__content"
          component="span"
        >
          {children}
        </Typography>
      )}
    </button>
  );
};

export default Button;