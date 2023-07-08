import type { Meta, StoryObj } from '@storybook/react';

import Hello from '../output/react/src/components/hello';

const meta: Meta<typeof Hello> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Hello',
  component: Hello,
};

export default meta;

type Story = StoryObj<typeof Hello>;

export const Basic: Story = {};
