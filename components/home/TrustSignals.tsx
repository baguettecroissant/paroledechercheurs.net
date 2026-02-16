const TrustSignals = () => {
    return (
        <section className="py-12 bg-stone-900 border-b border-stone-800">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-10 animate-in fade-in zoom-in duration-700 delay-300">
                    Recommandé et cité par
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {/* Mock Logos - Styled as 'Logos' in gray uppercase */}
                    <div className="text-3xl font-serif font-black text-stone-600 tracking-tighter uppercase">CNRS</div>
                    <div className="text-2xl font-serif font-bold text-stone-600 uppercase tracking-wide">Wikipédia</div>
                    <div className="text-2xl font-serif font-bold text-stone-600 uppercase tracking-widest">OpenEdition</div>
                    <div className="text-xl font-serif font-black text-stone-600 uppercase tracking-widest leading-none text-center">Sorbonne<br /><span className="text-xs font-sans font-medium opacity-80 tracking-[0.3em]">Université</span></div>
                    <div className="text-3xl font-serif font-black text-stone-600 italic tracking-tighter">Le Monde</div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
