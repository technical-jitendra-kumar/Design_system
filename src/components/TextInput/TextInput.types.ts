export type TextInputSize = 'sm' | 'md' | 'lg';
export type TextInputState = 'default' | 'error' | 'disabled';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: TextInputSize;
  state?: TextInputState;
  icon?: React.ReactNode;
  className?: string;
}