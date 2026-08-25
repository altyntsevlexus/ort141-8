import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://altyntsevlexus.github.io',
  base: '/ort141-8/',
  trailingSlash: 'always',
  integrations: [mdx()],
});
