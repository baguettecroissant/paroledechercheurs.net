import { notFound } from 'next/navigation';
import { getPostBySlug, getPostsByCategory } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Import New "Perfect Article" Components
import KeyTakeaways from '@/components/article/KeyTakeaways';
import Glossary from '@/components/article/Glossary';
import FAQ from '@/components/article/FAQ';
import ShareBar from '@/components/article/ShareBar';
import Citation from '@/components/article/Citation';

// Import Affiliate Components
import ProductCard from '@/components/affiliate/ProductCard';
import ProductComparison from '@/components/affiliate/ProductComparison';
import Verdict from '@/components/affiliate/Verdict';

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
            openGraph: {
                title: post.frontMatter.title,
                description: post.frontMatter.excerpt,
                type: 'article',
                publishedTime: post.frontMatter.date,
                authors: [post.frontMatter.author || 'Parole de Chercheurs'],
                images: post.frontMatter.image ? [{ url: post.frontMatter.image }] : [],
            },
        };
    } catch (error) {
        return {
            title: 'Article non trouvé',
        };
    }
}

const mdxComponents = {
    // Affiliate
    ProductCard,
    ProductComparison,
    Verdict,
    // Article Enhancements
    KeyTakeaways,
    Glossary,
    FAQ,
    Citation,
};

export default async function ArticlePage({ params }: Props) {
    const { category, slug } = await params;
    let post;

    try {
        post = getPostBySlug(category, slug);
    } catch (error) {
        notFound();
    }

    const relatedPosts = getPostsByCategory(category)
        .filter(p => p.slug !== slug)
        .slice(0, 3);

    // Schema.org
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.frontMatter.title,
        image: post.frontMatter.image ? [`https://paroledechercheurs.net${post.frontMatter.image}`] : [],
        datePublished: post.frontMatter.date,
        author: {
            '@type': 'Person',
            name: post.frontMatter.author || 'Parole de Chercheurs',
        },
        description: post.frontMatter.excerpt,
    };

    return (
        <div className="bg-stone-50 min-h-screen py-12 lg:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Breadcrumbs */}
                <div className="mb-8">
                    <Breadcrumbs items={[
                        { label: category.charAt(0).toUpperCase() + category.slice(1), href: `/${category}` },
                        { label: post.frontMatter.title, href: `/${category}/${slug}` }
                    ]} />
                </div>

                <div className="mb-8">
                    <Link href={`/${category}`} className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors group">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Retour à la rubrique <span className="uppercase ml-1 tracking-wider text-orange-700">{category}</span>
                    </Link>
                </div>

                <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <header className="mb-12">
                            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.15em] text-stone-400 mb-8 border-b border-stone-200 pb-6">
                                <span className="text-orange-600">
                                    {post.category}
                                </span>
                                <span className="flex items-center"><Calendar size={14} className="mr-2 opacity-70" /> {post.frontMatter.date}</span>
                                <span className="flex items-center"><Clock size={14} className="mr-2 opacity-70" /> {post.frontMatter.readTime}</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-serif font-black text-stone-900 leading-[1.1] mb-8">
                                {post.frontMatter.title}
                            </h1>

                            {post.frontMatter.image && (
                                <div className="mb-12 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-stone-200">
                                    <Image
                                        src={post.frontMatter.image}
                                        alt={post.frontMatter.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            <p className="text-xl lg:text-2xl text-stone-500 leading-relaxed font-light border-l-4 border-orange-600 pl-8 py-2 italic bg-stone-100/50 rounded-r-lg">
                                {post.frontMatter.excerpt}
                            </p>
                        </header>

                        {/* Author & Share Block (Top) */}
                        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-stone-200 mb-12 gap-6">
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="font-serif font-bold text-lg">{post.frontMatter.author?.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="text-stone-900 font-bold font-serif text-lg">{post.frontMatter.author}</p>
                                    <p className="text-stone-400 text-xs uppercase tracking-widest">Expert Associé</p>
                                </div>
                            </div>
                            <ShareBar title={post.frontMatter.title} url={`/${category}/${slug}`} />
                        </div>

                        {/* Content Body */}
                        <div className="prose prose-stone prose-lg max-w-none 
                            prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-900 prose-headings:mt-12 prose-headings:mb-6
                            prose-h2:text-3xl prose-h2:border-b prose-h2:border-stone-200 prose-h2:pb-4
                            prose-p:text-stone-700 prose-p:leading-8 prose-p:font-normal prose-p:mb-6
                            prose-a:text-orange-700 prose-a:font-medium prose-a:no-underline hover:prose-a:text-orange-800 hover:prose-a:underline
                            prose-strong:font-bold prose-strong:text-stone-900
                            prose-blockquote:border-orange-600 prose-blockquote:bg-white prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:text-stone-800 prose-blockquote:rounded-lg prose-blockquote:my-10 prose-blockquote:shadow-sm
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:my-6
                            prose-li:text-stone-700
                        ">
                            <MDXRemote source={post.content} components={mdxComponents} />
                        </div>

                        {/* Citation Tool */}
                        <Citation
                            author={post.frontMatter.author || 'Parole de Chercheurs'}
                            title={post.frontMatter.title}
                            date={post.frontMatter.date}
                            url={`https://paroledechercheurs.net/${category}/${slug}`}
                        />

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-32">
                        {/* Newsletter / CTA */}
                        <div className="bg-stone-900 text-white rounded-2xl p-8 shadow-2xl ring-1 ring-white/10">
                            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3 block">Think Tank</span>
                            <h3 className="font-serif text-2xl font-bold mb-4">L'analyse continue</h3>
                            <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                                Recevez notre sélection hebdomadaire d'articles et d'analyses stratégiques directement dans votre boîte mail.
                            </p>
                            <input
                                type="email"
                                placeholder="Votre email professionnel"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white mb-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors text-sm"
                            />
                            <button className="w-full px-4 py-3 bg-white text-stone-950 hover:bg-stone-200 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors">
                                S'abonner gratuitement
                            </button>
                        </div>
                    </aside>
                </article>

                {/* Related Articles Section */}
                {relatedPosts.length > 0 && (
                    <section className="mt-32 border-t border-stone-200 pt-16">
                        <h3 className="text-3xl font-serif font-bold text-stone-900 mb-12 flex items-center">
                            Dans la même rubrique
                            <span className="h-px bg-stone-200 flex-grow ml-6"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((post) => (
                                <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="group block">
                                    <div className="aspect-[3/2] relative rounded-xl overflow-hidden mb-6 bg-stone-100">
                                        {post.frontMatter.image && (
                                            <Image
                                                src={post.frontMatter.image}
                                                alt={post.frontMatter.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                    </div>
                                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                                        {post.frontMatter.date}
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-stone-900 leading-tight group-hover:text-orange-700 transition-colors">
                                        {post.frontMatter.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
