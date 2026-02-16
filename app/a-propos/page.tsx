import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Qui sommes-nous ? - Parole de Chercheurs',
    description: 'Découvrez la mission, la vision et la méthode de Parole de Chercheurs, le Think Tank Digital.',
};

export default function QuiSommesNousPage() {
    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-40 bg-stone-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-hero.png"
                        alt="Réseau de connexions abstraites"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/60 to-stone-50" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-300">Think Tank Digital</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        Élever le débat <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400">
                            par la Preuve.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Depuis 2008, <span className="text-white font-medium">Parole de Chercheurs</span> décrypte les mutations de notre monde en redonnant la voix à la science, loin du bruit médiatique.
                    </p>
                </div>
            </section>

            {/* Stats / Credibility Section */}
            <section className="relative z-20 -mt-20 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: TrendingUp, value: "15 Ans", label: "d'expertise" },
                            { icon: Users, value: "500+", label: "Chercheurs contributeurs" },
                            { icon: Globe, value: "120 Pays", label: "Lectorat international" },
                            { icon: CheckCircle2, value: "100%", label: "Indépendant" },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-900/5 border border-stone-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                                <stat.icon className="w-8 h-8 text-orange-600 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                                <div className="text-4xl font-serif font-black text-stone-900 mb-1">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                <Image
                                    src="/images/about-mission.png"
                                    alt="Recherche et innovation"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 z-0" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stone-200 rounded-full blur-3xl opacity-50 z-0" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="block text-sm font-bold text-orange-600 tracking-widest uppercase mb-4">Notre Mission</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight">
                                Contre la désinformation, <br />la rigueur.
                            </h2>
                            <div className="prose prose-lg prose-stone text-stone-600 font-light space-y-6">
                                <p className="text-xl text-stone-800 font-normal">
                                    Dans une ère de post-vérité, nous construisons un refuge pour la pensée complexe et nuancée.
                                </p>
                                <p>
                                    Notre mission est double : <strong>vulgariser sans simplifier</strong> et <strong>analyser sans juger</strong>.
                                    Nous sommes convaincus que les grandes décisions de demain — qu'elles soient climatiques, technologiques ou sociétales —
                                    ne peuvent être prises sans un éclairage scientifique rigoureux.
                                </p>
                                <p>
                                    Nous ne sommes pas un média d'opinion. Nous sommes un média de médiation entre le laboratoire et la place publique.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-stone-200">
                                <h3 className="font-serif font-bold text-xl text-stone-900 mb-4">Nos piliers éditoriaux</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Transparence totale des sources et des méthodes.",
                                        "Pluridisciplinarité : croiser les regards pour comprendre le tout.",
                                        "Indépendance structurelle vis-à-vis des pouvoirs financiers."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                            </div>
                                            <span className="text-stone-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology / "Manifesto" style section */}
            <section className="py-24 bg-stone-900 text-stone-300">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-16">
                        "Le savoir n'est utile que s'il est partagé."
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div>
                            <div className="text-5xl font-serif font-black text-stone-800 mb-6 relative">
                                01
                                <span className="absolute top-0 left-0 text-orange-500/20 mix-blend-overlay">01</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Identification</h3>
                            <p className="leading-relaxed">Nous repérons les signaux faibles et les recherches émergentes qui transformeront les paradigmes de demain.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-serif font-black text-stone-800 mb-6 relative">
                                02
                                <span className="absolute top-0 left-0 text-orange-500/20 mix-blend-overlay">02</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Traduction</h3>
                            <p className="leading-relaxed">Nous transformons le jargon académique en récits intelligibles pour les décideurs et citoyens, sans perdre la substance.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-serif font-black text-stone-800 mb-6 relative">
                                03
                                <span className="absolute top-0 left-0 text-orange-500/20 mix-blend-overlay">03</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Diffusion</h3>
                            <p className="leading-relaxed">Nous portons ces analyses au cœur du débat public pour influencer positivement la prise de décision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-stone-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                        Participez à la conversation
                    </h2>
                    <p className="text-xl text-stone-500 max-w-2xl mx-auto mb-10 font-light">
                        Rejoignez nos 50,000 abonnés et recevez chaque semaine une dose d'intelligence collective.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-stone-900 text-white font-bold rounded-lg hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Rejoignez notre réseau
                        </Link>
                        <Link href="/recrutement" className="px-8 py-4 bg-white text-stone-900 border border-stone-200 font-bold rounded-lg hover:bg-stone-50 transition-colors">
                            Voir les offres d'emploi
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
