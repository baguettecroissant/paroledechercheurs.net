import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-xl font-serif font-bold text-white mb-4 block">
                            Parole de Chercheurs
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Le magazine de l'analyse scientifique et sociétale. Décrypter le monde par la science.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Rubriques</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Sciences</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Société</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Technologie</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Santé</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Environnement</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">À propos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Qui sommes-nous ?</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Comité scientifique</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Recrutement</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Légal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">CGU</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Parole de Chercheurs. Tous droits réservés.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social links placeholders */}
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
