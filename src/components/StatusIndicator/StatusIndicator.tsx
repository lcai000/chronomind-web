import React from 'react';
import './StatusIndicator.css';
import { Typography } from '../Typography';

export type StatusType = 'stress' | 'wellBeing' | 'metric';

export interface StatusIndicatorProps {
  /** Type of status indicator */
  type?: StatusType;
  /** Current value (0-100) */
  value: number;
  /** Label to display */
  label?: string;
  /** Whether to show the numeric value */
  showValue?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Status indicator component for visualizing metrics like stress levels.
 */
export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  type = 'metric',
  value,
  label = 'Status',
  showValue = true,
  className = '',
}) => {
  // Ensure value is between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  // Get color based on type and value
  const getColor = () => {
    if (type === 'stress') {
      if (clampedValue <= 33) return 'var(--color-stress-low)';
      if (clampedValue <= 66) return 'var(--color-stress-medium)';
      return 'var(--color-stress-high)';
    } else if (type === 'wellBeing') {
      if (clampedValue <= 33) return 'var(--color-stress-high)';
      if (clampedValue <= 66) return 'var(--color-stress-medium)';
      return 'var(--color-stress-low)';
    }
    // metric type
    return 'var(--color-accent-primary)';
  };

  // Get status text
  const getStatusText = () => {
    if (type === 'stress') {
      if (clampedValue <= 33) return 'Low';
      if (clampedValue <= 66) return 'Medium';
      return 'High';
    } else if (type === 'wellBeing') {
      if (clampedValue <= 33) return 'Low';
      if (clampedValue <= 66) return 'Medium';
      return 'High';
    }
    return '';
  };

  const color = getColor();
  const statusText = getStatusText();

  return (
    <div className={`status-indicator ${className}`}>
      <div className="status-indicator__header">
        <Typography variant="bodySmall" color="secondary">
          {label}
        </Typography>
        {showValue && (
          <Typography variant="bodySmall" color="primary">
            {clampedValue}% {statusText && `(${statusText})`}
          </Typography>
        )}
      </div>
      <div className="status-indicator__track">
        <div
          className="status-indicator__progress"
          style={{
            width: `${clampedValue}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default StatusIndicator;