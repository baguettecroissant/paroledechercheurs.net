import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type Post = {
    slug: string;
    category: string;
    frontMatter: {
        title: string;
        date: string;
        excerpt: string;
        image?: string;
        author?: string;
        readTime?: string;
        featured?: boolean;
        [key: string]: any;
    };
    content: string;
};

export function getPostSlugs(category: string) {
    const categoryPath = path.join(contentDirectory, category);
    if (!fs.existsSync(categoryPath)) return [];
    return fs.readdirSync(categoryPath);
}

export function getPostBySlug(category: string, slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        category,
        frontMatter: data as Post['frontMatter'],
        content,
    };
}

export function getAllPosts(): Post[] {
    const categories = ['societe', 'sciences', 'outils', 'tech', 'sante'];
    let allPosts: Post[] = [];

    categories.forEach((category) => {
        const slugs = getPostSlugs(category);
        const posts = slugs.map((slug) => getPostBySlug(category, slug));
        allPosts = [...allPosts, ...posts];
    });

    return allPosts.sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
}

export function getPostsByCategory(category: string): Post[] {
    const slugs = getPostSlugs(category);
    const posts = slugs.map((slug) => getPostBySlug(category, slug));
    return posts.sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
}

export function getFeaturedPosts(): Post[] {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.frontMatter.featured).sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1));
}

export function getRecentPosts(count: number): Post[] {
    const allPosts = getAllPosts();
    // Filter out featured posts to avoid duplication if needed, or just return recent
    const sorted = allPosts.sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1));
    return sorted.slice(0, count);
}
