import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
    params: { category: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, slug } = await params;
    try {
        const post = getPostBySlug(category, slug);
        return {
            title: `${post.frontMatter.title} - Parole de Chercheurs`,
            description: post.frontMatter.excerpt,
        };
    } catch (error) {
        return {
            title: 'Article non trouvé',
        };
    }
}

import ProductCard from '@/components/affiliate/ProductCard';
import ProductComparison from '@/components/affiliate/ProductComparison';
import Verdict from '@/components/affiliate/Verdict';

const mdxComponents = {
    ProductCard,
    ProductComparison,
    Verdict,
};

export default async function ArticlePage({ params }: Props) {
    const { category, slug } = await params;
    let post;

    try {
        post = getPostBySlug(category, slug);
    } catch (error) {
        notFound();
    }

    return (
        <div className="bg-stone-50 min-h-screen py-12 lg:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link href={`/${category}`} className="inline-flex items-center text-sm text-stone-500 hover:text-orange-800 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Retour à la rubrique {category}
                </Link>

                <article className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-stone-500 mb-6">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-medium uppercase text-xs tracking-wider">
                                    {post.category}
                                </span>
                                <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.frontMatter.date}</span>
                                <span className="flex items-center"><Clock size={14} className="mr-1" /> {post.frontMatter.readTime}</span>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
                                {post.frontMatter.title}
                            </h1>

                            <p className="text-xl text-stone-600 leading-relaxed italic border-l-4 border-orange-700 pl-6">
                                {post.frontMatter.excerpt}
                            </p>
                        </header>

                        {/* Author Block */}
                        <div className="flex items-center gap-4 py-6 border-y border-stone-200 mb-10">
                            <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-400">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="text-stone-900 font-bold font-serif">{post.frontMatter.author}</p>
                                <p className="text-stone-500 text-xs uppercase tracking-wide">Auteur / Expert</p>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-stone-900 prose-a:text-orange-800 hover:prose-a:text-orange-600">
                            <MDXRemote source={post.content} components={mdxComponents} />
                        </div>
                    </div>

                    {/* Sidebar (Monetization & Navigation) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Sticky Sidebar */}
                        <div className="sticky top-24 space-y-8">
                            {/* Ad Slot Placeholder */}
                            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 text-center">
                                <p className="text-xs text-stone-400 uppercase mb-2">Publicité</p>
                                <div className="bg-stone-200 h-60 rounded flex items-center justify-center text-stone-400">
                                    Espace Publicitaire
                                </div>
                            </div>

                            {/* Newsletter / CTA */}
                            <div className="bg-stone-900 text-white rounded-xl p-8 shadow-lg">
                                <h3 className="font-serif text-xl font-bold mb-4">L'analyse continue</h3>
                                <p className="text-stone-300 text-sm mb-6">
                                    Recevez notre sélection hebdomadaire d'articles et d'analyses.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white mb-4 focus:outline-none focus:border-orange-500"
                                />
                                <button className="w-full px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded text-sm font-bold uppercase tracking-wider transition-colors">
                                    S'abonner
                                </button>
                            </div>
                        </div>
                    </aside>
                </article>
            </div>
        </div>
    );
}
