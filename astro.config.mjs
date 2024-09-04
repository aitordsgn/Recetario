import { defineConfig } from 'astro/config';
import md from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  integrations: [md()],
});