import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://danicasassantolaria.github.io',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  compressHTML: true,
  scopedStyleStrategy: 'attribute',
});
