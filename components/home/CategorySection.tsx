'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Post } from '@/lib/mdx';

type Props = {
    title: string;
    categorySlug: string;
    posts: Post[];
    color: 'orange' | 'blue' | 'emerald' | 'purple' | 'stone';
    variant?: 'grid' | 'list' | 'hero';
};

const CategorySection = ({ title, categorySlug, posts, color, variant = 'grid' }: Props) => {
    // Color mapping
    const colorMap = {
        orange: 'text-orange-700 decoration-orange-200',
        blue: 'text-blue-800 decoration-blue-200',
        emerald: 'text-emerald-800 decoration-emerald-200',
        purple: 'text-purple-800 decoration-purple-200',
        stone: 'text-stone-800 decoration-stone-200',
    };

    const accentColor = colorMap[color];

    return (
        <section className="py-12 border-b border-stone-200">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <h2 className={`text-4xl font-serif font-black text-stone-900 ${accentColor} underline decoration-4 underline-offset-4`}>
                        {title}
                    </h2>
                    <Link href={`/${categorySlug}`} className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 flex items-center group">
                        Tout voir <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Content */}
                {variant === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.slice(0, 3).map((post) => (
                            <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="group block">
                                <div className="aspect-video relative overflow-hidden rounded-lg mb-4 bg-stone-100">
                                    {post.frontMatter.image && (
                                        <Image
                                            src={post.frontMatter.image}
                                            alt={post.frontMatter.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>
                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">
                                    {post.frontMatter.date}
                                </span>
                                <h3 className="text-xl font-bold font-serif text-stone-900 leading-tight group-hover:underline decoration-stone-200 underline-offset-4 transition-all">
                                    {post.frontMatter.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                )}

                {variant === 'list' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* First post big */}
                        {posts[0] && (
                            <Link href={`/${posts[0].category}/${posts[0].slug}`} className="group block lg:row-span-3">
                                <div className="aspect-video relative overflow-hidden rounded-lg mb-4 bg-stone-100">
                                    {posts[0].frontMatter.image && (
                                        <Image
                                            src={posts[0].frontMatter.image}
                                            alt={posts[0].frontMatter.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-stone-900 leading-tight mb-2 group-hover:underline decoration-stone-200 underline-offset-4">
                                    {posts[0].frontMatter.title}
                                </h3>
                                <p className="text-stone-600 line-clamp-3 leading-relaxed">{posts[0].frontMatter.excerpt}</p>
                            </Link>
                        )}

                        {/* Others list */}
                        <div className="space-y-6">
                            {posts.slice(1, 4).map((post) => (
                                <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="group flex gap-4 items-start">
                                    <div className="w-24 h-24 relative flex-shrink-0 rounded bg-stone-100 overflow-hidden">
                                        {post.frontMatter.image && (
                                            <Image
                                                src={post.frontMatter.image}
                                                alt={post.frontMatter.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-serif text-stone-900 leading-snug group-hover:underline decoration-stone-200 underline-offset-2">
                                            {post.frontMatter.title}
                                        </h3>
                                        <div className="text-xs text-stone-400 mt-2">{post.frontMatter.readTime || '5 min'}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategorySection;
