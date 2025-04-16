import { Meta, StoryObj } from '@storybook/react';
import { MailIcon } from 'lucide-react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  },
  parameters: {
    docs: {
      description: {
        component: `
A customizable text input component with support for icons and states.

### Accessibility
- ARIA-invalid for error state.
- Keyboard navigation support.
- Focus management for accessibility.

### Best Practices
- Use error state with helper text for validation.
- Ensure icons are decorative or have aria-hidden.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <MailIcon size={16} />,
    placeholder: 'Email address',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    placeholder: 'Invalid input',
  },
};