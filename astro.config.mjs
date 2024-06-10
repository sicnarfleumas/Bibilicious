import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://bibilicious.blog',
  integrations: [mdx(), sitemap(), react(), db()],
  experiments: {
    api: true
  },
  output: "server",
  adapter: netlify()
});