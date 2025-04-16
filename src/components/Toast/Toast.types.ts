export type ToastVariant = 'info' | 'success' | 'error' | 'warning';

export interface ToastProps {
  variant?: ToastVariant;
  message: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}