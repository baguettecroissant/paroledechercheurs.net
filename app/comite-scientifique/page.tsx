import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Comité Scientifique - Parole de Chercheurs',
    description: 'Les experts qui garantissent la rigueur scientifique de nos publications.',
};

const members = [
    { name: "Dr. Sarah Cohen", role: "Sociologue des médias", aff: "CNRS", image: "/images/team/sarah-cohen.png" },
    { name: "Pr. Jean-Marc Weber", role: "Physicien théorique", aff: "École Normale Supérieure", image: "/images/team/jean-marc-weber.png" },
    { name: "Dr. Aïcha N'Diaye", role: "Épidémiologiste", aff: "Institut Pasteur", image: "/images/team/aicha-ndiaye.png" },
    { name: "Thomas Lemaire", role: "Expert Climat", aff: "GIEC (Contributeur)", image: "/images/team/thomas-lemaire.png" },
    { name: "Dr. Yumi Tanaka", role: "Éthique de l'IA", aff: "Université de Tokyo", image: "/images/team/yumi-tanaka.png" },
    { name: "Pr. Elena Rossi", role: "Historienne", aff: "Sorbonne Université", image: "/images/team/elena-rossi.png" }
];

export default function ComiteScientifiquePage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <header className="mb-20 text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                        Gouvernance
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-serif font-black text-stone-900 mb-6 leading-tight">
                        Le Comité Scientifique
                    </h1>
                    <p className="text-xl text-stone-600 font-light leading-relaxed">
                        Ils veillent à la qualité, l'exactitude et la pertinence de nos analyses.
                        Notre comité réunit des esprits brillants venus de tous les horizons de la recherche.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="h-80 bg-stone-200 relative overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">{member.name}</h3>
                                <div className="text-orange-600 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</div>
                                <div className="inline-block px-3 py-1 bg-stone-100 text-stone-500 text-xs rounded-full font-medium">
                                    {member.aff}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
