import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
// import { TypographyProps } from './Typography.types';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'],
    },
    weight: { control: 'select', options: ['light', 'regular', 'medium', 'bold'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['default', 'muted', 'primary'] },
  },
  parameters: {
    docs: {
      description: {
        component: `
A flexible Typography component for headings, paragraphs, and text elements.

### Accessibility
- Ensures sufficient contrast ratios.
- Uses semantic HTML elements (h1–h6, p).
- Supports ARIA roles for screen readers.

### Best Practices
- Use heading variants (h1–h6) hierarchically.
- Avoid skipping heading levels.
- Use 'helper' for form field instructions.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph text.',
  },
};

export const Heading: Story = {
  args: {
    variant: 'h1',
    children: 'This is a Heading 1',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is a caption text.',
    color: 'muted',
  },
};