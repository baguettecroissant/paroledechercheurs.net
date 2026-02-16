import { CheckCircle2 } from 'lucide-react';

type Props = {
    children: React.ReactNode;
};

const KeyTakeaways = ({ children }: Props) => {
    return (
        <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-6 my-8 not-prose relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <CheckCircle2 size={120} className="text-orange-600" />
            </div>
            <h3 className="font-serif font-bold text-lg text-orange-800 mb-4 flex items-center">
                <CheckCircle2 size={20} className="mr-2" /> Ce qu'il faut retenir
            </h3>
            <div className="space-y-2 text-stone-700 font-medium leading-relaxed relative z-10">
                {children}
            </div>
        </div>
    );
};

export default KeyTakeaways;
