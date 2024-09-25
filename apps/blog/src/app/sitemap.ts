import type { MetadataRoute } from 'next';

import { getBlogPosts } from '@/utils/getBlogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  const postSiteMap: MetadataRoute.Sitemap = posts.map(({ slug, data }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${decodeURI(slug)}`,
    lastModified: new Date(data.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postSiteMap,
  ];
}
