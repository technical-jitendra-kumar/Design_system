import React from 'react';
import { cn } from '../../utils/cn';
import { TextInputProps } from './TextInput.types';

const TextInput: React.FC<TextInputProps> = ({
  size = 'md',
  state = 'default',
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'w-full rounded-md border transition-colors focus:outline-none';
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2',
    lg: 'px-4 py-3 text-lg',
  };
  const stateStyles = {
    default: 'border-gray-300 focus:border-blue-500',
    error: 'border-red-500',
    disabled: 'bg-gray-100 cursor-not-allowed',
  };

  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </span>
      )}
      <input
        className={cn(
          baseStyles,
          sizeStyles[size],
          stateStyles[state],
          icon ? 'pl-10' : '',
          className
        )}
        disabled={state === 'disabled'}
        aria-invalid={state === 'error'}
        {...props}
      />
    </div>
  );
};

export default TextInput;