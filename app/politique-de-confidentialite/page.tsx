import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politique de Confidentialité - Parole de Chercheurs',
    description: 'Notre engagement concernant la protection de vos données personnelles.',
};

export default function PolitiqueConfidentialitePage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <header className="mb-16 text-center">
                    <span className="inline-block py-1 px-4 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                        Données Personnelles
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight">
                        Politique de Confidentialité
                    </h1>
                    <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
                </header>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                    <div className="prose prose-stone prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-900 
                        prose-p:text-stone-600 prose-p:leading-relaxed prose-p:font-light
                        prose-strong:font-bold prose-strong:text-stone-800
                    ">
                        <h2>1. Collecte de l'information</h2>
                        <p>
                            Nous recueillons des informations lorsque vous nous contactez par email ou lorsque vous vus inscrivez à notre newsletter.
                            Les données personnelles collectées peuvent inclure votre nom, votre adresse e-mail et votre numéro de téléphone.
                            En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur,
                            y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.
                        </p>

                        <h2>2. Utilisation des informations</h2>
                        <p>
                            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-orange-600">
                            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                            <li>Fournir un contenu publicitaire personnalisé</li>
                            <li>Améliorer notre site Web</li>
                            <li>Améliorer le service client et vos besoins de prise en charge</li>
                            <li>Vous contacter par e-mail</li>
                            <li>Administrer un concours, une promotion, ou une enquête</li>
                        </ul>

                        <h2>3. Confidentialité du commerce en ligne</h2>
                        <p>
                            Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues,
                            échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement,
                            en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction.
                        </p>

                        <h2>4. Divulgation à des tiers</h2>
                        <p>
                            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers.
                            Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires,
                            tant que ces parties conviennent de garder ces informations confidentielles.
                        </p>

                        <h2>5. Protection des informations</h2>
                        <p>
                            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
                            Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés
                            dans un environnement sécurisé.
                        </p>

                        <h2>6. Consentement</h2>
                        <p>
                            En utilisant notre site, vous consentez à notre politique de confidentialité.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
