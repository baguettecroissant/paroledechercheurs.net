import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales - Parole de Chercheurs',
    description: 'Informations légales et politique de confidentialité.',
};

export default function LegalPage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-serif font-bold text-stone-900 mb-8">Mentions Légales</h1>

                <div className="prose prose-stone max-w-none text-sm">
                    <h2>1. Éditeur du site</h2>
                    <p>
                        Le site <strong>paroledechercheurs.net</strong> est édité à titre personnel.
                        <br />
                        Directeur de la publication : La Rédaction
                        <br />
                        Contact : redaction@paroledechercheurs.net
                    </p>

                    <h2>2. Hébergement</h2>
                    <p>
                        Ce site est hébergé par Vercel Inc.
                        <br />
                        440 N Barranca Ave #4133
                        <br />
                        Covina, CA 91723
                        <br />
                        États-Unis
                    </p>

                    <h2>3. Propriété Intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>

                    <h2>4. Données Personnelles</h2>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                    </p>

                    <h2>5. Affiliation</h2>
                    <p>
                        Parole de Chercheurs participe à divers programmes d'affiliation (dont Amazon Partenaires).
                        Cela signifie que nous pouvons toucher une commission sur les achats effectués via nos liens, sans surcoût pour l'utilisateur.
                        Cette source de revenus permet de financer l'hébergement et le développement du site.
                    </p>
                </div>
            </div>
        </div>
    );
}
