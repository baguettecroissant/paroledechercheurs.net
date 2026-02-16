type Props = {
    terms: { term: string; definition: string }[];
};

const Glossary = ({ terms }: Props) => {
    if (!terms || !Array.isArray(terms)) return null;

    return (
        <div className="bg-stone-100 rounded-xl p-8 my-12 not-prose">
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-6 border-b border-stone-200 pb-2">
                Glossaire technique
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {terms.map((item) => (
                    <div key={item.term}>
                        <dt className="font-bold text-stone-900 text-sm mb-1">{item.term}</dt>
                        <dd className="text-sm text-stone-600 leading-relaxed">{item.definition}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Glossary;
