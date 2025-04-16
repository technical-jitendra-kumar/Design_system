import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { ToastProps } from './Toast.types';

const Toast: React.FC<ToastProps> = ({
  variant = 'info',
  message,
  duration = 3000,
  onClose,
  className,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const baseStyles = 'fixed bottom-4 right-4 p-4 rounded-md shadow-lg';
  const variantStyles = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

export default Toast;