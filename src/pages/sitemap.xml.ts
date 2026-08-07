import { siteConfig } from '../data/site';
import { getPublishedProjects } from '../lib/projects';

export const GET = async () => {
  const projects = await getPublishedProjects();
  const pages = ['/', '/projects/', '/activities/', '/writing/', ...projects.map((project) => `/projects/${project.id}/`)];
  const urls = pages.map((page) => `<url><loc>${new URL(page, siteConfig.url).toString()}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
