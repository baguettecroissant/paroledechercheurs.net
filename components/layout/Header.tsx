import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="border-b border-stone-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <button className="lg:hidden p-2 text-stone-600">
                    <Menu size={24} />
                </button>

                <Link href="/" className="text-2xl lg:text-3xl font-serif font-bold tracking-tight text-stone-900">
                    Parole de Chercheurs<span className="text-blue-900">.net</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-stone-600 text-sm">
                    <Link href="#" className="hover:text-blue-900 transition-colors">SCIENCES</Link>
                    <Link href="#" className="hover:text-blue-900 transition-colors">SOCIÉTÉ</Link>
                    <Link href="#" className="hover:text-blue-900 transition-colors">TECH</Link>
                    <Link href="#" className="hover:text-blue-900 transition-colors">SANTÉ</Link>
                    <Link href="#" className="hover:text-blue-900 transition-colors">À PROPOS</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-stone-600 hover:text-blue-900 transition-colors">
                        <Search size={20} />
                    </button>
                    <Link href="#" className="hidden sm:block px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded hover:bg-blue-900 transition-colors">
                        S'abonner
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
