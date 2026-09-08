import { siteConfig } from '../data/site';

export const GET = () => new Response(
  `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', siteConfig.url).href}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
