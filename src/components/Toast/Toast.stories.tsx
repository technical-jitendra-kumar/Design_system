import { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
    },
    duration: { control: 'number' },
  },
  parameters: {
    docs: {
      description: {
        component: `
A toast notification component for temporary feedback messages.

### Accessibility
- ARIA-live for screen reader announcements.
- Auto-dismiss with configurable duration.
- Focus management to avoid trapping.

### Best Practices
- Use for non-critical feedback.
- Limit to one toast at a time.
- Ensure sufficient contrast for readability.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This is an info message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Operation completed successfully!',
  },
};