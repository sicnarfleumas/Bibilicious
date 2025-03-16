import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  site: 'https://bibilicious.blog',
  integrations: [
    mdx(), 
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ja: 'ja-JP',
          ta: 'ta-IN'
        }
      }
    }), 
    react()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ta'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  experiments: {
    api: true
  },
  output: 'server',
  adapter: netlify(),
  // Configure content collections to use the new content.config.ts file
  content: {
    configPath: './src/content.config.ts',
  },
});