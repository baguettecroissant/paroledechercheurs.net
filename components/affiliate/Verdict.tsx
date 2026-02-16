import React from 'react';
import { Star } from 'lucide-react';

type VerdictProps = {
    score: number;
    summary: string;
    bestFor: string;
};

const Verdict = ({ score, summary, bestFor }: VerdictProps) => {
    return (
        <div className="bg-stone-100 border-l-4 border-orange-600 p-6 rounded-r-lg my-8 not-prose">
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 flex items-center">
                Verdict de la Rédaction
                <span className="ml-auto flex items-center bg-white px-3 py-1 rounded-full border border-stone-200 shadow-sm">
                    <span className="text-orange-600 font-bold text-lg mr-1">{score}</span>
                    <span className="text-stone-400 text-sm">/10</span>
                </span>
            </h3>
            <p className="text-stone-700 mb-4 leading-relaxed">
                {summary}
            </p>
            <div className="font-bold text-stone-900 text-sm uppercase tracking-wide">
                Idéal pour : <span className="text-orange-700 normal-case">{bestFor}</span>
            </div>
        </div>
    );
};

export default Verdict;
