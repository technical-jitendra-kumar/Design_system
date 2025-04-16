import React from 'react';
import { cn } from '../../utils/cn';
import { TypographyProps } from './Typography.types';

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  weight = 'regular',
  size = 'md',
  color = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'leading-normal';
  const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    label: 'text-sm font-medium',
    caption: 'text-xs',
    helper: 'text-xs italic',
  };
  const weightStyles = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };
  const sizeStyles = {
    sm: 'text-sm',
    md: '',
    lg: 'text-lg',
  };
  const colorStyles = {
    default: 'text-gray-900 dark:text-gray-100',
    muted: 'text-gray-500 dark:text-gray-400',
    primary: 'text-blue-600 dark:text-blue-400',
  };

  const Component = variant.startsWith('h') ? (variant as 'h1') : 'p';

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        weightStyles[weight],
        sizeStyles[size],
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;