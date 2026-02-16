'use client';

import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu/search when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
    }, [pathname]);

    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                    isTransparent
                        ? "bg-transparent border-transparent text-white"
                        : "bg-white/95 backdrop-blur-md border-stone-200 text-stone-900 shadow-sm"
                )}
            >
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn("lg:hidden p-2 transition-colors z-50 relative", isTransparent ? "text-white hover:text-white/80" : "text-stone-900")}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <Link href="/" className={cn("text-xl md:text-2xl font-serif font-black tracking-tight transition-colors z-50 relative", isTransparent ? "text-white" : "text-stone-900")}>
                        ParoleDe<span className={cn(isTransparent ? "text-orange-400" : "text-orange-700")}>Chercheurs</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={cn("hidden lg:flex items-center gap-8 font-sans font-medium text-sm transition-colors", isTransparent ? "text-white/90" : "text-stone-600")}>
                        <Link href="/sciences" className="hover:text-orange-500 transition-colors">SCIENCES</Link>
                        <Link href="/societe" className="hover:text-orange-500 transition-colors">SOCIÉTÉ</Link>
                        <Link href="/tech" className="hover:text-orange-500 transition-colors">TECH</Link>
                        <Link href="/sante" className="hover:text-orange-500 transition-colors">SANTÉ</Link>
                        <Link href="/outils" className="hover:text-orange-500 transition-colors">OUTILS</Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 z-50 relative">
                        {/* Search Bar */}
                        <div className={cn("flex items-center transition-all duration-300 overflow-hidden", isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0")}>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="w-full pl-3 pr-8 py-1.5 text-sm rounded-md bg-stone-100 border border-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500 text-stone-900"
                                    autoFocus={isSearchOpen}
                                />
                                <button onClick={() => setIsSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={cn("p-2 transition-colors", isTransparent ? "text-white hover:text-white/80" : "text-stone-600 hover:text-stone-900")}
                        >
                            <Search size={20} />
                        </button>

                        <Link href="#" className={cn("hidden sm:block px-4 py-2 text-sm font-medium rounded transition-colors", isTransparent ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm" : "bg-stone-900 text-white hover:bg-stone-800")}>
                            S'abonner
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.725,0,1)]",
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            )}>
                <nav className="flex flex-col items-center gap-8 text-2xl font-serif font-bold text-stone-900">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-700 transition-colors">Accueil</Link>
                    <Link href="/sciences" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-700 transition-colors">Sciences</Link>
                    <Link href="/societe" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-700 transition-colors">Société</Link>
                    <Link href="/tech" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-700 transition-colors">Tech</Link>
                    <Link href="/sante" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-700 transition-colors">Santé</Link>
                    <Link href="/outils" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-700 transition-colors">Outils</Link>
                    <Link href="#" className="px-6 py-3 bg-stone-900 text-white text-lg rounded hover:bg-stone-800 transition-colors mt-4">
                        S'abonner
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
