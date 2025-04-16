import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/tailwind.css';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: theme.colors.gray[100] },
        { name: 'dark', value: theme.colors.gray[900] },
      ],
    },
    docs: {
      theme: theme,
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="p-4">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
