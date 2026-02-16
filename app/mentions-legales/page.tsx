import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales - Parole de Chercheurs',
    description: 'Informations légales sur l\'éditeur et l\'hébergeur du site Parole de Chercheurs.',
};

export default function MentionsLegalesPage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <header className="mb-16 text-center">
                    <span className="inline-block py-1 px-4 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                        Mentions Légales
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight">
                        Informations Légales
                    </h1>
                    <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
                </header>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                    <div className="prose prose-stone prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-900 
                        prose-p:text-stone-600 prose-p:leading-relaxed prose-p:font-light
                        prose-strong:font-bold prose-strong:text-stone-800
                    ">
                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le site <strong>paroledechercheurs.net</strong> est édité par la société :
                        </p>
                        <p className="bg-stone-50 p-6 rounded-xl border border-stone-100 not-prose text-stone-700 font-medium">
                            <strong className="block text-lg font-serif text-stone-900 mb-2">WADE STUDIO LTD</strong>
                            Société enregistrée auprès du Registrar of Companies de Maurice.<br />
                            Business Registration Number (BRN) : <strong>C25227533</strong><br />
                            File No : <strong>C227533</strong><br />
                            Siège social : <strong>432 Ava Bounty, Morcellement Balaclava, MAURITIUS.</strong>
                        </p>
                        <p>
                            <strong>Email de contact :</strong> <a href="mailto:contact@paroledechercheurs.net" className="text-orange-700 hover:underline">contact@paroledechercheurs.net</a><br />
                            <strong>Directeur de la publication :</strong> Wade Timothy
                        </p>

                        <h2>2. Hébergement</h2>
                        <p>
                            Le site est hébergé par la société :
                        </p>
                        <p className="bg-stone-50 p-6 rounded-xl border border-stone-100 not-prose text-stone-700 font-medium">
                            <strong className="block text-lg font-serif text-stone-900 mb-2">Vercel Inc.</strong>
                            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                            Le stockage des données est assuré sur des serveurs sécurisés.
                        </p>

                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés. La marque "WADE STUDIO LTD" et le nom de domaine "paroledechercheurs.net"
                            sont la propriété exclusive de l'éditeur.
                        </p>
                        <p>
                            Toute reproduction ou représentation, intégrale ou partielle, du site ou de l'un des éléments qui le composent,
                            sans l'autorisation expresse et préalable de l'éditeur, est interdite et constituerait une contrefaçon sanctionnée
                            par le Code de la propriété intellectuelle.
                        </p>

                        <h2>4. Limitation de responsabilité</h2>
                        <p>
                            Le site paroledechercheurs.net s'efforce de fournir des informations aussi précises que possible.
                            Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour,
                            qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                        </p>
                        <p>
                            La société WADE STUDIO LTD n'est pas responsable des dommages directs et indirects causés au matériel de l'utilisateur,
                            lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées,
                            soit de l'apparition d'un bug ou d'une incompatibilité.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
