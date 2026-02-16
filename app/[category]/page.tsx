import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/lib/mdx';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// This is a dynamic route for categories (e.g., /societe, /sciences)

type Props = {
    params: { category: string };
};

// Map URL slugs to Display Names and SEO descriptions
const categoryConfig: Record<string, { name: string; description: string }> = {
    societe: {
        name: 'Société',
        description: 'Analyses sociologiques et débats contemporains. Comprendre les mutations de notre monde, du travail à la démocratie.',
    },
    sciences: {
        name: 'Sciences',
        description: 'Découvertes majeures et avancées scientifiques. Physique, biologie, espace : l\'état de la recherche expliqué.',
    },
    outils: {
        name: 'Outils',
        description: 'Méthodologie et outils pour la recherche et l\'analyse. Gagner en efficacité et en esprit critique.',
    },
    tech: {
        name: 'Technologie',
        description: 'Innovations technologiques et impact numérique. IA, Quantique, 6G : décrypter le futur.',
    },
    sante: {
        name: 'Santé',
        description: 'Médecine du futur et biologie. Innovations thérapeutiques, longévité et santé publique.',
    },
    environnement: {
        name: 'Environnement',
        description: 'Climat et biodiversité. Les données scientifiques pour comprendre l\'urgence écologique.',
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const config = categoryConfig[category];

    if (!config) return { title: 'Rubrique non trouvée' };

    return {
        title: `${config.name} : Analyses et Actualités - Parole de Chercheurs`,
        description: config.description,
        openGraph: {
            title: `${config.name} - Parole de Chercheurs`,
            description: config.description,
            type: 'website',
            url: `https://paroledechercheurs.net/${category}`,
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;
    const config = categoryConfig[category];

    if (!config) {
        notFound();
    }

    const allPosts = getPostsByCategory(category);
    // Featured is the most recent one
    const featuredPost = allPosts[0];
    const otherPosts = allPosts.slice(1);

    // Schema.org Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: config.name,
        description: config.description,
        url: `https://paroledechercheurs.net/${category}`,
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Accueil',
                    item: 'https://paroledechercheurs.net',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: config.name,
                    item: `https://paroledechercheurs.net/${category}`,
                },
            ],
        },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: allPosts.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://paroledechercheurs.net/${category}/${post.slug}`,
                name: post.frontMatter.title,
            })),
        },
    };

    return (
        <div className="bg-stone-50 min-h-screen py-12 lg:py-24">
            {/* Inject Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 max-w-7xl">

                {/* Breadcrumbs */}
                <div className="mb-8">
                    <Breadcrumbs items={[{ label: config.name, href: `/${category}` }]} />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Main Content (3/4) */}
                    <main className="w-full lg:w-3/4">
                        <header className="mb-16">
                            <h1 className="text-5xl lg:text-7xl font-serif font-black text-stone-900 mb-6 leading-tight">
                                {config.name}
                            </h1>
                            <div className="h-1 w-24 bg-orange-600 mb-6"></div>
                            <p className="text-xl text-stone-500 leading-relaxed font-light max-w-2xl">
                                {config.description}
                            </p>
                        </header>

                        {/* Featured Article (Hero for Category) */}
                        {featuredPost && (
                            <section className="mb-16">
                                <Link href={`/${category}/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-video relative">
                                        {featuredPost.frontMatter.image && (
                                            <Image
                                                src={featuredPost.frontMatter.image}
                                                alt={featuredPost.frontMatter.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-white">
                                            <div className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-3">
                                                À la Une
                                            </div>
                                            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight group-hover:text-orange-100 transition-colors">
                                                {featuredPost.frontMatter.title}
                                            </h2>
                                            <p className="text-stone-300 text-lg line-clamp-2 max-w-3xl font-light">
                                                {featuredPost.frontMatter.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </section>
                        )}

                        {/* Grid of Other Articles */}
                        {otherPosts.length > 0 ? (
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {otherPosts.map((post) => (
                                    <article key={post.slug} className="flex flex-col group">
                                        <Link href={`/${category}/${post.slug}`} className="block mb-4 overflow-hidden rounded-xl">
                                            <div className="aspect-[3/2] relative bg-stone-200">
                                                {post.frontMatter.image && (
                                                    <Image
                                                        src={post.frontMatter.image}
                                                        alt={post.frontMatter.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-between text-xs font-bold text-stone-400 mb-3 uppercase tracking-wider">
                                            <span>{post.frontMatter.date}</span>
                                            <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.frontMatter.readTime || '5 min'}</span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3 leading-tight group-hover:text-orange-700 transition-colors">
                                            <Link href={`/${category}/${post.slug}`}>
                                                {post.frontMatter.title}
                                            </Link>
                                        </h3>
                                        <p className="text-stone-600 line-clamp-3 font-light leading-relaxed mb-4">
                                            {post.frontMatter.excerpt}
                                        </p>
                                        <Link href={`/${category}/${post.slug}`} className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-stone-900 hover:text-orange-700 transition-colors mt-auto">
                                            Lire l'article <ArrowRight size={14} className="ml-2" />
                                        </Link>
                                    </article>
                                ))}
                            </section>
                        ) : (
                            !featuredPost && (
                                <div className="text-center py-20 border border-dashed border-stone-200 rounded-2xl">
                                    <p className="text-stone-500 font-serif text-xl">Aucun article pour le moment.</p>
                                </div>
                            )
                        )}
                    </main>

                    {/* Sidebar (1/4) - Maillage Interne */}
                    <aside className="w-full lg:w-1/4 space-y-12 mt-12 lg:mt-0">
                        {/* Internal Linking Block */}
                        <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm sticky top-8">
                            <h3 className="font-serif font-bold text-xl mb-6 border-b border-stone-100 pb-4">
                                Explorer aussi
                            </h3>
                            <ul className="space-y-4">
                                {Object.entries(categoryConfig)
                                    .filter(([key]) => key !== category) // Don't link properly to current category
                                    .map(([key, conf]) => (
                                        <li key={key}>
                                            <Link href={`/${key}`} className="group flex items-start justify-between hover:bg-stone-50 p-2 -mx-2 rounded transition-colors">
                                                <span className="text-stone-700 font-medium group-hover:text-orange-700 transition-colors">
                                                    {conf.name}
                                                </span>
                                                <ChevronRight size={16} className="text-stone-300 group-hover:text-orange-400 opacity-0 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <p className="text-xs text-stone-400 mb-4 font-medium">Rejoignez le Think Tank</p>
                                <Link href="/contact" className="block w-full text-center py-3 border border-stone-200 rounded font-bold text-xs uppercase tracking-wide hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">
                                    Devenir Membre
                                </Link>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
