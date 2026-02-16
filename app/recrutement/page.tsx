import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Recrutement - Parole de Chercheurs',
    description: 'Rejoignez l\'équipe de Parole de Chercheurs et participez à la diffusion du savoir.',
};

const jobs = [
    { title: "Journaliste Scientifique (H/F)", type: "CDI", loc: "Télétravail / Paris", dept: "Rédaction" },
    { title: "Data Analyst / Dataviz Expert", type: "Freelance", loc: "Remote", dept: "Tech & Data" },
    { title: "Community Manager", type: "Stage", loc: "Paris", dept: "Communication" }
];

export default function RecrutementPage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <header className="mb-20 text-center">
                    <span className="inline-block py-1 px-4 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                        Carrières
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-serif font-black text-stone-900 mb-6 leading-tight">
                        Rejoignez l'intelligence <br />collective.
                    </h1>
                    <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
                        Nous cherchons des esprits curieux, rigoureux et passionnés pour construire le média de référence sur la science et la société.
                    </p>
                </header>

                <div className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
                    <div className="p-8 border-b border-stone-100 bg-stone-900 text-white">
                        <h2 className="text-2xl font-serif font-bold">Postes ouverts</h2>
                    </div>
                    <div>
                        {jobs.map((job, idx) => (
                            <div key={idx} className="group p-8 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-700 transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-stone-500 font-medium uppercase tracking-wide">
                                        <span>{job.dept}</span>
                                        <span className="text-stone-300">•</span>
                                        <span>{job.type}</span>
                                        <span className="text-stone-300">•</span>
                                        <span>{job.loc}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-stone-400 group-hover:text-stone-900 font-bold text-sm uppercase tracking-wider transition-colors">
                                    Voir l'offre <ArrowRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-stone-600 mb-4">Aucune offre ne correspond à votre profil ?</p>
                    <a href="mailto:contact@paroledechercheurs.net" className="inline-block px-8 py-4 border-2 border-stone-200 hover:border-stone-900 text-stone-900 font-bold rounded-lg transition-all uppercase tracking-widest text-sm">
                        Envoyer une candidature spontanée
                    </a>
                </div>
            </div>
        </div>
    );
}
