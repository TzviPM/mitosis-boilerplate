import { ESBuildOptions, UserConfig, defineConfig } from 'vite';
import tsconfigJson from './tsconfig.storybook.json';
// import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

const tsconfigRaw = tsconfigJson as unknown as Exclude<
  ESBuildOptions['tsconfigRaw'],
  string
>;

export default defineConfig({
  plugins: [
    // react(),
    UnoCSS(),
  ],
  esbuild: {
    tsconfigRaw,
    jsxImportSource: tsconfigRaw?.compilerOptions?.jsxImportSource,
  },
}) as UserConfig;
