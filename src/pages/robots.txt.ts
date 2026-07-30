export const GET = () => new Response(
  'User-agent: *\nAllow: /\nSitemap: https://www.doguskoksal.com/sitemap.xml',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
