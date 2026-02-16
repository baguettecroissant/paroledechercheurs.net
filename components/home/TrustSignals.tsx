const TrustSignals = () => {
    return (
        <section className="py-8 bg-stone-100 border-b border-stone-200">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">
                    Recommandé et cité par
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Mock Logos - In a real project, use actual SVGs or Images */}
                    <div className="text-xl font-serif font-bold text-stone-700">CNRS</div>
                    <div className="text-xl font-serif font-bold text-stone-700">Wikipédia</div>
                    <div className="text-xl font-serif font-bold text-stone-700">OpenEdition</div>
                    <div className="text-xl font-serif font-bold text-stone-700">Sorbonne Université</div>
                    <div className="text-xl font-serif font-bold text-stone-700">Le Monde</div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
