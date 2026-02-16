import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';

const articles = [
    {
        id: 1,
        category: 'Technologie',
        title: "L'impact profond de l'Intelligence Artificielle sur la recherche médicale",
        excerpt: "Au-delà du diagnostic, l'IA redéfinit la découverte de nouveaux traitements. Enquête sur une révolution silencieuse.",
        date: '16 Fév 2026',
        readTime: '8 min',
        featured: true,
        color: 'bg-blue-900',
    },
    {
        id: 2,
        category: 'Société',
        title: "Sociologie des réseaux : la fin de l'anonymat ?",
        excerpt: "Comment nos identités numériques façonnent nos interactions réelles.",
        date: '14 Fév 2026',
        readTime: '5 min',
        featured: false,
        color: 'bg-stone-800',
    },
    {
        id: 3,
        category: 'Environnement',
        title: "Climat 2030 : Les modèles prédictifs s'affinent",
        excerpt: "Les dernières données du GIEC offrent un nouvel éclairage.",
        date: '12 Fév 2026',
        readTime: '6 min',
        featured: false,
        color: 'bg-emerald-800', // Making this one distinct
    },
    {
        id: 4,
        category: 'Histoire',
        title: "Relire la Révolution : nouvelles archives",
        excerpt: "Des documents inédits changent notre vision de 1789.",
        date: '10 Fév 2026',
        readTime: '12 min',
        featured: false,
        color: 'bg-amber-900',
    },
    {
        id: 5,
        category: 'Psychologie',
        title: "Le burn-out cognitif à l'ère du numérique",
        excerpt: "Analyse des mécanismes de la fatigue mentale.",
        date: '08 Fév 2026',
        readTime: '7 min',
        featured: false,
        color: 'bg-rose-900',
    },
    {
        id: 6,
        category: 'Économie',
        title: "La décroissance est-elle inévitable ?",
        excerpt: "Débat entre deux économistes sur l'avenir de la croissance.",
        date: '05 Fév 2026',
        readTime: '10 min',
        featured: false,
        color: 'bg-indigo-900',
    },
];

const ArticleCard = ({ article, className }: { article: typeof articles[0], className?: string }) => (
    <Link
        href="#"
        className={`group relative flex flex-col p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${className}
        ${!className?.includes('bg-stone-900') ? 'bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50' : ''}`}
    >
        <div className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className={`${className?.includes('bg-stone-900') ? 'text-orange-400' : 'text-blue-700'} transition-colors`}>
                {article.category}
            </span>
            <span className={className?.includes('bg-stone-900') ? 'text-stone-400' : 'text-stone-400'}>
                {article.date}
            </span>
        </div>

        <h3 className={`font-serif font-bold mb-4 leading-tight group-hover:text-orange-600 transition-colors 
            ${className?.includes('bg-stone-900') ? 'text-white text-3xl md:text-4xl' : 'text-stone-900 text-xl md:text-2xl'}`}>
            {article.title}
        </h3>

        <p className={`mb-8 leading-relaxed font-light
            ${className?.includes('bg-stone-900') ? 'text-stone-300 text-lg md:text-xl line-clamp-4' : 'text-stone-600 line-clamp-3'}`}>
            {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100/10">
            <div className={`flex items-center text-xs font-medium uppercase tracking-wide
                ${className?.includes('bg-stone-900') ? 'text-stone-400' : 'text-stone-400'}`}>
                <Clock size={16} className="mr-2" />
                {article.readTime}
            </div>
            <span className={`flex items-center text-sm font-bold uppercase tracking-wide transition-all transform group-hover:translate-x-1
                ${className?.includes('bg-stone-900') ? 'text-white' : 'text-stone-900'}`}>
                Lire <ArrowRight size={18} className="ml-2" />
            </span>
        </div>
    </Link>
);

const ArticleGrid = () => {
    // Get all posts and sort by date
    const allPosts = getAllPosts();
    const featuredPost = allPosts.find(p => p.frontMatter.featured) || allPosts[0];
    const otherPosts = allPosts.filter(p => p.slug !== featuredPost?.slug).slice(0, 5);

    // Combine for the grid (Feature + 5 others)
    const displayPosts = [featuredPost, ...otherPosts].filter(Boolean);

    return (
        <section id="articles" className="py-24 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Le Dossier de la Semaine
                        </span>
                        <h2 className="text-5xl lg:text-6xl font-serif font-black text-stone-900 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            À la Une
                        </h2>
                    </div>
                    <Link href="/societe" className="group hidden md:flex items-center text-stone-500 hover:text-stone-900 font-medium transition-colors animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Toutes les publications
                        <span className="ml-2 p-2 rounded-full bg-stone-100 group-hover:bg-stone-200 transition-colors">
                            <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayPosts.map((post, index) => (
                        <div key={post.slug} className={`
                            ${index === 0 ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
                            animate-in fade-in slide-in-from-bottom-8 duration-700
                         `} style={{ animationDelay: `${index * 100}ms` }}>
                            {/* We inline the logical content of ArticleCard here because the data structure 
                                from getAllPosts (post.frontMatter) differs slightly from the mock 'articles' array 
                                in the previous component definition. 
                                We adapt the design to the real data structure.
                             */}
                            <Link
                                href={`/${post.category}/${post.slug}`}
                                className={`group relative flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 h-full
                                ${index === 0
                                        ? 'bg-stone-900 text-white shadow-2xl shadow-stone-900/20 ring-1 ring-white/10'
                                        : 'bg-white text-stone-900 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 border border-stone-100'
                                    }`}
                            >
                                <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em]">
                                    <span className={`${index === 0 ? 'text-orange-400' : 'text-blue-700'} transition-colors`}>
                                        {post.category}
                                    </span>
                                    <span className={index === 0 ? 'text-stone-400' : 'text-stone-400'}>
                                        {post.frontMatter.readTime || '5 min'}
                                    </span>
                                </div>

                                <h3 className={`font-serif font-black mb-6 leading-[1.1] group-hover:text-orange-600 transition-colors 
                                    ${index === 0 ? 'text-3xl md:text-5xl lg:text-5xl' : 'text-2xl'}`}>
                                    {post.frontMatter.title}
                                </h3>

                                <p className={`mb-10 leading-relaxed font-light
                                    ${index === 0 ? 'text-stone-300 text-xl lg:text-2xl max-w-2xl' : 'text-stone-600 text-lg line-clamp-3'}`}>
                                    {post.frontMatter.excerpt}
                                </p>

                                <div className={`mt-auto pt-8 border-t flex items-center justify-between
                                     ${index === 0 ? 'border-white/10' : 'border-stone-100'}`}>
                                    <div className={`flex items-center text-xs font-medium uppercase tracking-wide
                                        ${index === 0 ? 'text-stone-400' : 'text-stone-400'}`}>
                                        <Clock size={16} className="mr-2 opacity-70" />
                                        Lecture
                                    </div>
                                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all transform group-hover:scale-110
                                        ${index === 0 ? 'bg-white text-stone-900' : 'bg-stone-100 text-stone-900 group-hover:bg-stone-900 group-hover:text-white'}`}>
                                        <ArrowRight size={18} />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/societe" className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-lg font-medium">
                        Voir toutes les publications
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArticleGrid;
