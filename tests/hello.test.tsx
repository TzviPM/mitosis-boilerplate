import React from 'react';

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../docs/hello.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Basic } = composeStories(stories);

test('renders basic hello world component', () => {
  render(<Basic />);
  const helloText = screen.getByText(
    /Hello\s*World/i
  );
  expect(helloText).not.toBeNull();
});

test('renders hello component with provided name', () => {
  render(<Basic name="Tzvi" />);
  const helloText = screen.getByText(/Hello\s*Tzvi/i);
  expect(helloText).not.toBeNull();
});