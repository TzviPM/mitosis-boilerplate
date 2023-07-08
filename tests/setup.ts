// import '@testing-library/jest-dom'
import { setProjectAnnotations } from '@storybook/react';
import projectAnnotations from '../.storybook/preview';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

setProjectAnnotations(projectAnnotations);
expect.extend(matchers);
afterEach(() => {
  cleanup();
});
