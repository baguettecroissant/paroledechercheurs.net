'use client';

import { Quote, Check } from 'lucide-react';
import { useState } from 'react';

type Props = {
    author: string;
    title: string;
    date: string;
    url: string;
};

const Citation = ({ author, title, date, url }: Props) => {
    const [copied, setCopied] = useState(false);

    // Format: Author. (Year). Title. Parole de Chercheurs. URL
    const year = new Date(date).getFullYear();
    const citationText = `${author}. (${year}). "${title}". Parole de Chercheurs. ${url}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(citationText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 not-prose">
            <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-stone-500 mb-1 flex items-center">
                    <Quote size={12} className="mr-1" /> Citer cet article
                </h4>
                <p className="font-mono text-xs text-stone-600 break-all">
                    {citationText}
                </p>
            </div>
            <button
                onClick={handleCopy}
                className="flex-shrink-0 flex items-center px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded text-xs font-bold transition-colors"
            >
                {copied ? <Check size={14} className="mr-1" /> : <Quote size={14} className="mr-1" />}
                {copied ? 'Copié' : 'Copier'}
            </button>
        </div>
    );
};

export default Citation;
