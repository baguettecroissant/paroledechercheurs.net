import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Manifeste - Parole de Chercheurs',
    description: 'Notre mission : décrypter la complexité du monde par la rigueur scientifique. Loin du bruit médiatique, nous donnons la parole à la recherche.',
};

export default function ManifestePage() {
    return (
        <main className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero-background.png"
                    alt="Connexions neuronales"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-[2px]" />

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 text-xs font-bold uppercase tracking-widest mb-6">
                        Notre Raison d'être
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black mb-6">
                        Le Manifeste
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Pourquoi nous avons créé <span className="text-white font-semibold">Parole de Chercheurs</span>.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <p className="text-2xl font-serif text-stone-900 leading-relaxed mb-6">
                        <span className="text-6xl float-left mr-4 mt-[-10px] font-black text-orange-500">N</span>
                        ous vivons une époque paradoxale. Jamais l'humanité n'a produit autant de connaissances, et pourtant, jamais la vérité n'a semblé aussi fragile.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed mb-8">
                        Dans le vacarme des réseaux sociaux et de l'information en continu, l'opinion a remplacé le fait. L'émotion a écrasé l'analyse. La complexité du monde est réduite à des tweets de 280 caractères, polarisant le débat public et nourrissant la défiance envers la science.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Nous refusons cette fatalité. Nous croyons que le citoyen du XXIe siècle a soif de comprendre, pas juste de réagir. Qu'il mérite mieux que des polémiques stériles. Il mérite la nuance, la profondeur et la rigueur.
                    </p>
                </div>
            </section>

            {/* Nos 3 Piliers */}
            <section className="py-20 bg-stone-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

                        {/* Pilier 1 */}
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-serif text-3xl font-bold border border-blue-500/30 mb-6">
                                1
                            </div>
                            <h3 className="text-2xl font-serif font-bold">La Rigueur avant tout</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Ici, pas de "on dit". Chaque affirmation est sourcée. Nos articles s'appuient sur des publications évaluées par les pairs (Peer Review). Nous ne cherchons pas le clic, nous cherchons le juste.
                            </p>
                        </div>

                        {/* Pilier 2 */}
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-400 font-serif text-3xl font-bold border border-orange-500/30 mb-6">
                                2
                            </div>
                            <h3 className="text-2xl font-serif font-bold">La Complexité assumée</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Le monde n'est pas blanc ou noir. Il est gris. Nous prenons le temps d'explorer les nuances, les contradictions et les limites de la science. Simplifier ne veut pas dire simpliste.
                            </p>
                        </div>

                        {/* Pilier 3 */}
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-serif text-3xl font-bold border border-emerald-500/30 mb-6">
                                3
                            </div>
                            <h3 className="text-2xl font-serif font-bold">L'Indépendance totale</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Parole de Chercheurs est un média libre. Nous ne dépendons d'aucun groupe industriel, d'aucun parti politique. Notre seule allégeance est envers la méthode scientifique.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-stone-900 mb-8">
                        Rejoignez le mouvement
                    </h2>
                    <p className="text-xl text-stone-600 mb-12">
                        La science n'est pas une tour d'ivoire. C'est un bien commun qui doit être partagé pour éclairer les décisions démocratiques.
                    </p>
                    <div className="inline-block p-8 bg-white shadow-xl rounded-lg border border-stone-200">
                        <p className="font-serif italic text-2xl text-stone-800 mb-4">
                            "La science ne pense pas."
                        </p>
                        <p className="text-stone-500 uppercase tracking-widest text-sm font-bold">
                            — Martin Heidegger (Provocation choisie)
                        </p>
                        <p className="mt-6 text-stone-600">
                            ... C'est pour cela que nous avons besoin de chercheurs pour la faire parler.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
