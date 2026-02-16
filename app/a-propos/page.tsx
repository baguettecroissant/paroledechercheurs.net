import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'À Propos - Parole de Chercheurs',
    description: 'Notre mission : décrypter la complexité du monde par la rigueur scientifique.',
};

export default function AboutPage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <header className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">
                        Manifeste
                    </h1>
                    <div className="h-1 w-20 bg-orange-700 mx-auto"></div>
                </header>

                <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-stone-900">
                    <p className="lead text-xl md:text-2xl text-stone-600 font-light italic mb-12 text-center">
                        "Dans un monde saturé d'opinions, nous avons choisi le camp de la preuve."
                    </p>

                    <h2>Notre Mission</h2>
                    <p>
                        Parole de Chercheurs est né d'un constat simple : la parole scientifique est souvent inaudible ou déformée.
                        Notre ambition est de créer un pont direct entre la recherche académique et le grand public.
                    </p>
                    <p>
                        Nous fonctionnons comme un <strong>Think Tank digital</strong>, sélectionnant les travaux les plus pertinents pour éclairer les débats de société, les avancées technologiques et les enjeux environnementaux.
                    </p>

                    <h2>Notre Approche</h2>
                    <ul>
                        <li><strong>Rigueur :</strong> Chaque article s'appuie sur des sources vérifiables.</li>
                        <li><strong>Indépendance :</strong> Nos analyses sont libres de toute influence commerciale cachée.</li>
                        <li><strong>Pédagogie :</strong> La complexité n'est pas une excuse pour l'inintelligibilité.</li>
                    </ul>

                    <div className="bg-white border-l-4 border-orange-700 p-8 my-12 shadow-sm rounded-r-xl">
                        <h3 className="mt-0 text-orange-800">Un héritage d'excellence</h3>
                        <p className="mb-0">
                            Ce domaine a historiquement hébergé des travaux cités par les plus grandes institutions (CNRS, Wikipédia, OpenEdition).
                            Nous honorons cet héritage en maintenant un standard de qualité intransigeant.
                        </p>
                    </div>

                    <h2>L'Équipe</h2>
                    <p>
                        Notre rédaction est composée de journalistes scientifiques, de chercheurs associés et d'analystes spécialisés.
                    </p>
                </div>
            </div>
        </div>
    );
}
