'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-background.png"
                    alt="Web de connexions neuronales abstraites"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-stone-950/70 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-medium tracking-widest uppercase text-stone-200">Think Tank Digital 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                        Le Savoir <span className="text-stone-400 font-light italic">n'est pas</span> <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-stone-200 to-stone-400">
                            une Opinion.
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                        Décrypter la complexité du monde par la rigueur scientifique.
                        Analyses, data et perspectives pour un futur éclairé.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both w-full justify-center">
                        <Link href="#articles" className="group relative px-8 py-4 bg-white text-stone-950 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Explorer les analyses <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-stone-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link href="/manifeste" className="group px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2">
                            <Play size={18} className="fill-white" /> Notre Manifeste
                        </Link>
                    </div>

                    {/* Stats removed to air out the design */}
                </div>
            </div>

            {/* Soft gradient at bottom to merge with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-10" />
        </section>
    );
};

export default Hero;
