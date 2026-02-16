import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative bg-stone-900 text-white overflow-hidden py-20 lg:py-32">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                    Édition Numérique
                </span>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                    Décrypter le monde <br className="hidden md:block" /> par la science
                </h1>
                <p className="text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Analyses, tribunes et regards d'experts sur les enjeux contemporains.
                    Une lecture rigoureuse pour comprendre les défis de demain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="#articles" className="px-8 py-3 bg-white text-stone-900 font-medium rounded hover:bg-stone-100 transition-colors shadow-lg shadow-white/10">
                        Lire les analyses
                    </Link>
                    <Link href="#" className="px-8 py-3 border border-stone-600 text-white font-medium rounded hover:bg-stone-800 transition-colors">
                        Notre manifeste
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
