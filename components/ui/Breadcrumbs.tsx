import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

type BreadcrumbItem = {
    label: string;
    href: string;
};

type Props = {
    items: BreadcrumbItem[];
    className?: string;
};

const Breadcrumbs = ({ items, className }: Props) => {
    return (
        <nav aria-label="Breadcrumb" className={`flex items-center text-xs font-medium text-stone-500 uppercase tracking-wide ${className}`}>
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="hover:text-stone-900 transition-colors flex items-center">
                        <Home size={14} />
                        <span className="sr-only">Accueil</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        <ChevronRight size={12} className="mx-2 text-stone-300" />
                        {index === items.length - 1 ? (
                            <span className="text-orange-600 font-bold" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} className="hover:text-stone-900 transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
