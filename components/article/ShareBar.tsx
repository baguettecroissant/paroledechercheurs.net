'use client';

import { Facebook, Linkedin, Twitter, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

type Props = {
    title: string;
    url: string; // Should be full URL if possible, or relative
};

const ShareBar = ({ title, url }: Props) => {
    const [copied, setCopied] = useState(false);
    const fullUrl = typeof window !== 'undefined' ? window.location.href : `https://paroledechercheurs.net${url}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    };

    return (
        <div className="flex items-center gap-2">
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-all" aria-label="Share on Twitter">
                <Twitter size={20} />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-400 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all" aria-label="Share on LinkedIn">
                <Linkedin size={20} />
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" aria-label="Share on Facebook">
                <Facebook size={20} />
            </a>
            <button onClick={handleCopy} className="p-2 text-stone-400 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all" aria-label="Copy Link">
                {copied ? <Check size={20} className="text-orange-600" /> : <LinkIcon size={20} />}
            </button>
        </div>
    );
};

export default ShareBar;
