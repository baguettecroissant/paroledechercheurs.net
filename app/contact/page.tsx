import { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact - Parole de Chercheurs',
    description: 'Contactez la rédaction ou l\'administration de Parole de Chercheurs.',
};

export default function ContactPage() {
    return (
        <div className="bg-stone-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Info Column */}
                    <div>
                        <span className="inline-block py-1 px-4 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                            Contact
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight">
                            Parlons <br /> <span className="text-orange-600">Ensemble.</span>
                        </h1>
                        <p className="text-xl text-stone-600 font-light leading-relaxed mb-12">
                            Vous avez une question, une proposition de contribution ou vous souhaitez simplement échanger avec nous ?
                            Notre équipe est à votre écoute.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-orange-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-1">Email</h3>
                                    <p className="text-stone-500 mb-2">Pour toute demande générale :</p>
                                    <a href="mailto:contact@paroledechercheurs.net" className="text-lg font-serif font-bold text-stone-900 border-b-2 border-orange-200 hover:border-orange-600 transition-colors">
                                        contact@paroledechercheurs.net
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-orange-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-1">Bureaux</h3>
                                    <address className="not-italic text-stone-600 leading-relaxed">
                                        WADE STUDIO LTD<br />
                                        432 Ava Bounty, Morcellement Balaclava<br />
                                        MAURITIUS
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg shadow-stone-200/50 border border-stone-100">
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Envoyez-nous un message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Nom</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="Votre nom" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="votre@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Sujet</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all">
                                    <option>Demande d'information</option>
                                    <option>Proposition d'article</option>
                                    <option>Partenariat</option>
                                    <option>Presse</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Message</label>
                                <textarea id="message" rows={6} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="Votre message..."></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-stone-900 text-white font-bold rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-widest text-sm">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
