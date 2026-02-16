import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

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
        className={`group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col p-6 ${className}`}
    >
        <div className="mb-4 flex items-center justify-between text-xs text-stone-500 font-medium uppercase tracking-wider">
            <span className="text-blue-700">{article.category}</span>
            <span>{article.date}</span>
        </div>

        <h3 className={`font-serif font-bold text-stone-900 mb-3 group-hover:text-blue-900 transition-colors ${article.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {article.title}
        </h3>

        <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
            {article.excerpt}
        </p>

        <div className="border-t border-stone-100 pt-4 flex items-center justify-between mt-auto">
            <div className="flex items-center text-stone-400 text-xs">
                <Clock size={14} className="mr-1" />
                {article.readTime}
            </div>
            <span className="text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                <ArrowRight size={18} />
            </span>
        </div>
    </Link>
);

const ArticleGrid = () => {
    return (
        <section id="articles" className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">À la Une</h2>
                        <p className="text-stone-500">Sélection de la rédaction</p>
                    </div>
                    <Link href="#" className="hidden md:flex items-center text-stone-900 font-medium hover:text-blue-900 transition-colors">
                        Voir tous les articles <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,_1fr)]">
                    {/* Bento Grid Layout handling */}
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            className={index === 0 ? 'md:col-span-2 md:row-span-2 bg-stone-50' : ''}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="#" className="inline-flex items-center text-stone-900 font-medium border-b border-stone-900 pb-1">
                        Voir tous les articles <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArticleGrid;
