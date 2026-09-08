import { defineConfig } from 'astro/config';
import { siteConfig } from './src/data/site.ts';

export default defineConfig({
  site: siteConfig.url,
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
});
