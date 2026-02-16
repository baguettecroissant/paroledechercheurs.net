import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://paroledechercheurs.net';
    const allPosts = getAllPosts();

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/sciences',
        '/societe',
        '/tech',
        '/sante',
        '/outils',
        '/a-propos',
        '/contact',
        '/manifeste',
        '/mentions-legales',
        '/politique-de-confidentialite',
        '/cgu',
        '/equipe',
        '/recrutement',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Routes (Blog Posts)
    const postRoutes = allPosts.map((post) => ({
        url: `${baseUrl}/${post.category}/${post.slug}`,
        lastModified: new Date(post.frontMatter.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
}
