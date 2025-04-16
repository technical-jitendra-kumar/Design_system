export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'label'
  | 'caption'
  | 'helper';

export type TypographyWeight = 'light' | 'regular' | 'medium' | 'bold';
export type TypographySize = 'sm' | 'md' | 'lg';
export type TypographyColor = 'default' | 'muted' | 'primary';

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  size?: TypographySize;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
}