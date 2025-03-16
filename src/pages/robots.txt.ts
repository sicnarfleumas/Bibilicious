import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.SITE || 'https://bibilicious.blog';

const robotsTxt = `
User-agent: *
Allow: /

# Main sitemap
Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};