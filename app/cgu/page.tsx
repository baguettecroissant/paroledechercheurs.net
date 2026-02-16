import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Conditions Générales d\'Utilisation - Parole de Chercheurs',
    description: 'Conditions régissant l\'accès et l\'utilisation du site Parole de Chercheurs.',
};

export default function CGUPage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <header className="mb-16 text-center">
                    <span className="inline-block py-1 px-4 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                        CGU
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight">
                        Conditions Générales d'Utilisation
                    </h1>
                    <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
                </header>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                    <div className="prose prose-stone prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-900 
                        prose-p:text-stone-600 prose-p:leading-relaxed prose-p:font-light
                        prose-strong:font-bold prose-strong:text-stone-800
                    ">
                        <h2>1. Objet</h2>
                        <p>
                            Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités de mise à disposition
                            du site paroledechercheurs.net et les conditions d'utilisation du Service par l'Utilisateur.
                        </p>

                        <h2>2. Accès au site</h2>
                        <p>
                            Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet.
                            Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.)
                            sont à sa charge.
                        </p>

                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet
                            d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
                        </p>

                        <h2>4. Responsabilité</h2>
                        <p>
                            Les sources des informations diffusées sur le site paroledechercheurs.net sont réputées fiables mais le site
                            ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
                        </p>
                        <p>
                            Le site ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute,
                            suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
                        </p>

                        <h2>5. Liens hypertextes</h2>
                        <p>
                            Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens,
                            il sortira du site paroledechercheurs.net. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens
                            et ne saurait, en aucun cas, être responsable de leur contenu.
                        </p>

                        <h2>6. Modification des conditions</h2>
                        <p>
                            L'éditeur se réserve la possibilité de modifier, à tout moment et sans préavis, les présentes conditions d’utilisation
                            afin de les adapter aux évolutions du site et/ou de son exploitation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
