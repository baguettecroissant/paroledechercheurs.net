'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { Post } from '@/lib/mdx';

type Props = {
    featuredPost: Post;
    secondaryPosts: Post[];
    id?: string;
};

const FeaturedSection = ({ featuredPost, secondaryPosts, id }: Props) => {
    return (
        <section id={id} className="py-12 lg:py-16 border-b border-stone-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* MAJEUR: La Une */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-orange-600 text-white text-xs font-bold uppercase py-1 px-3 tracking-widest rounded-sm">
                                À la Une
                            </span>
                            <span className="h-px bg-stone-200 flex-grow"></span>
                        </div>

                        <Link href={`/${featuredPost.category}/${featuredPost.slug}`} className="group block">
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                                {featuredPost.frontMatter.image && (
                                    <Image
                                        src={featuredPost.frontMatter.image}
                                        alt={featuredPost.frontMatter.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-4 leading-tight group-hover:text-orange-700 transition-colors">
                                {featuredPost.frontMatter.title}
                            </h1>
                            <p className="text-xl text-stone-600 font-light leading-relaxed mb-4 max-w-3xl">
                                {featuredPost.frontMatter.excerpt}
                            </p>
                            <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-stone-400">
                                    <span className="text-orange-700">{featuredPost.category}</span>
                                    <span>{featuredPost.frontMatter.readTime || '8 min'}</span>
                                    <span>{featuredPost.frontMatter.author}</span>
                                </div>
                                <span className="flex items-center text-sm font-bold text-stone-900 uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                                    Lire <ArrowRight size={16} className="ml-2" />
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* SECONDAIRES: Colonne de droite */}
                    <div className="lg:w-1/3 flex flex-col gap-8 lg:border-l lg:border-stone-100 lg:pl-12">
                        {secondaryPosts.map((post) => (
                            <article key={post.slug} className="group border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                                <Link href={`/${post.category}/${post.slug}`}>
                                    <div className="flex items-center gap-3 mb-3 text-xs font-bold uppercase tracking-wider">
                                        <span className="text-blue-800">{post.category}</span>
                                        <span className="text-stone-300">•</span>
                                        <span className="text-stone-400">{post.frontMatter.date}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 leading-tight group-hover:text-blue-800 transition-colors">
                                        {post.frontMatter.title}
                                    </h3>
                                    <div className="flex items-center text-xs text-stone-400 font-medium">
                                        <Clock size={12} className="mr-1" /> {post.frontMatter.readTime || '5 min'}
                                    </div>
                                </Link>
                            </article>
                        ))}

                        {/* Newsletter Mini-Box */}
                        <div className="mt-auto bg-stone-100 p-6 rounded-lg text-center">
                            <h4 className="font-serif font-bold text-stone-900 mb-2">L'essentiel, chaque matin</h4>
                            <p className="text-xs text-stone-500 mb-4">Rejoignez 15 000 esprits libres.</p>
                            <button className="w-full bg-stone-900 text-white text-xs font-bold uppercase py-3 rounded hover:bg-orange-600 transition-colors">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
