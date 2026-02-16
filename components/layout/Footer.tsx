import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-stone-950 text-stone-400 py-20 border-t border-stone-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-4 lg:col-span-5">
                        <Link href="/" className="text-2xl font-serif font-black text-white mb-6 block tracking-tight">
                            ParoleDe<span className="text-orange-700">Chercheurs</span>
                        </Link>
                        <p className="text-base leading-relaxed text-stone-500 max-w-sm mb-8">
                            Le magazine de l'analyse scientifique et sociétale.
                            Nous décryptons la complexité du monde par la rigueur de la recherche,
                            pour offrir des perspectives claires sur l'avenir.
                        </p>

                        <div className="flex gap-4">
                            {/* Social Placeholders with improved styling */}
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-700 hover:text-white transition-all cursor-pointer">X</div>
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-700 hover:text-white transition-all cursor-pointer">Li</div>
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-700 hover:text-white transition-all cursor-pointer">Fb</div>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2 md:col-start-6">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Rubriques</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/sciences" className="hover:text-orange-500 transition-colors block">Sciences</Link></li>
                            <li><Link href="/societe" className="hover:text-orange-500 transition-colors block">Société</Link></li>
                            <li><Link href="/tech" className="hover:text-orange-500 transition-colors block">Technologie</Link></li>
                            <li><Link href="/sante" className="hover:text-orange-500 transition-colors block">Santé</Link></li>
                            <li><Link href="/outils" className="hover:text-orange-500 transition-colors block">Outils</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">À propos</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/a-propos" className="hover:text-orange-500 transition-colors block">Qui sommes-nous ?</Link></li>
                            <li><Link href="/comite-scientifique" className="hover:text-orange-500 transition-colors block">Comité scientifique</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-500 transition-colors block">Contact</Link></li>
                            <li><Link href="/recrutement" className="hover:text-orange-500 transition-colors block">Recrutement</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 lg:col-span-3">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h3>
                        <p className="text-sm text-stone-500 mb-4">Recevez l'essentiel de l'analyse chaque semaine.</p>
                        <div className="flex flex-col gap-3">
                            <input type="email" placeholder="Votre email pro" className="bg-stone-900 border border-stone-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-700 transition-colors" />
                            <button className="px-4 py-3 bg-white text-stone-950 font-bold rounded text-sm hover:bg-stone-200 transition-colors">S'abonner</button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
                    <p>&copy; {new Date().getFullYear()} Parole de Chercheurs. Tous droits réservés.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/mentions-legales" className="hover:text-stone-400 transition-colors">Mentions légales</Link>
                        <Link href="/politique-de-confidentialite" className="hover:text-stone-400 transition-colors">Politique de confidentialité</Link>
                        <Link href="/cgu" className="hover:text-stone-400 transition-colors">CGU</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
