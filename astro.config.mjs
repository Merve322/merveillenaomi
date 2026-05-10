import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://merveillenaomi.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
