import { getCollection } from 'astro:content';

export async function getPublishedProjects() {
  return (await getCollection('work'))
    .filter((project) => project.data.status === 'published')
    .sort((a, b) => a.id.localeCompare(b.id));
}
