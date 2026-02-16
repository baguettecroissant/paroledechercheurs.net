type Props = {
    questions: { question: string; answer: string }[];
};

const FAQ = ({ questions }: Props) => {
    if (!questions || !Array.isArray(questions)) return null;

    // Generate Schema.org JSON-LD for FAQPage
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: q.answer,
            },
        })),
    };

    return (
        <div className="mt-16 pt-12 border-t border-stone-200 not-prose">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-8">
                Questions Fréquentes
            </h3>
            <div className="space-y-6">
                {questions.map((q, index) => (
                    <div key={index} className="bg-white border border-stone-100 rounded-lg p-6 shadow-sm">
                        <h4 className="font-bold text-stone-900 mb-2 text-lg">
                            {q.question}
                        </h4>
                        <p className="text-stone-600 leading-relaxed">
                            {q.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
