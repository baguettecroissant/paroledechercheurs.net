import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/lib/mdx';
import { ArrowRight, Clock } from 'lucide-react';
import { Metadata } from 'next';

// This is a dynamic route for categories (e.g., /societe, /sciences)

type Props = {
    params: { category: string };
};

// Map URL slugs to Display Names
const categoryNames: Record<string, string> = {
    societe: 'Société',
    sciences: 'Sciences',
    outils: 'Outils',
    tech: 'Technologie',
    sante: 'Santé',
    environnement: 'Environnement',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params
    const name = categoryNames[category] || category;
    return {
        title: `${name} - Parole de Chercheurs`,
        description: `Découvrez nos analyses et articles sur la thématique ${name}.`,
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params
    const validCategories = Object.keys(categoryNames);

    if (!validCategories.includes(category)) {
        notFound();
    }

    const posts = getPostsByCategory(category);
    const categoryName = categoryNames[category];

    return (
        <div className="bg-stone-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <header className="mb-16 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-4 uppercase tracking-widest">
                        Rubrique
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">
                        {categoryName}
                    </h1>
                    <div className="h-1 w-20 bg-orange-700 mx-auto"></div>
                </header>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/${category}/${post.slug}`}
                                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 ring-1 ring-transparent hover:ring-orange-100"
                            >
                                {post.frontMatter.image && (
                                    <div className="h-48 overflow-hidden">
                                        {/* Placeholder for real image implementation */}
                                        <div className="w-full h-full bg-stone-200 group-hover:scale-105 transition-transform duration-500"></div>
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                                        <span className="font-medium text-orange-700 uppercase tracking-wider">{categoryName}</span>
                                        <span>{post.frontMatter.date}</span>
                                    </div>
                                    <h2 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-orange-800 transition-colors line-clamp-2">
                                        {post.frontMatter.title}
                                    </h2>
                                    <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                                        {post.frontMatter.excerpt}
                                    </p>
                                    <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                                        <div className="flex items-center">
                                            <Clock size={14} className="mr-1" />
                                            {post.frontMatter.readTime || '5 min'}
                                        </div>
                                        <span className="text-orange-800 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                                            Lire <ArrowRight size={14} className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-stone-300">
                        <p className="text-stone-500 text-lg">Aucun article n'est encore disponible dans cette rubrique.</p>
                        <p className="text-stone-400 text-sm mt-2">Revenez bientôt !</p>
                    </div>
                )}
            </div>
        </div>
    );
}
