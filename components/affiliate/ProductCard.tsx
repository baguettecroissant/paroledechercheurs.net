import React from 'react';
import { Check, X, Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

type ProductCardProps = {
    name: string;
    image?: string;
    rating: number;
    price: string;
    features: string[];
    pros: string[];
    cons: string[];
    link: string;
    badge?: string;
};

const ProductCard = ({ name, image, rating, price, features = [], pros = [], cons = [], link, badge }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-8 not-prose">
            {badge && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm font-bold uppercase tracking-wider">
                    {badge}
                </div>
            )}

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Image & Main Info */}
                <div className="md:col-span-1 flex flex-col items-center justify-center">
                    <div className="bg-stone-100 w-full aspect-square rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        {/* Placeholder if no image provided */}
                        {image ? (
                            <img src={image} alt={name} className="object-contain max-h-40" />
                        ) : (
                            <span className="text-stone-400">Image Produit</span>
                        )}
                    </div>
                    <div className="text-center">
                        <h3 className="font-serif font-bold text-lg mb-2">{name}</h3>
                        <div className="flex items-center justify-center gap-1 text-amber-400 text-sm mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < Math.floor(rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(rating) ? 0 : 2} />
                            ))}
                            <span className="text-stone-500 ml-1">({rating}/5)</span>
                        </div>
                        <div className="text-xl font-bold text-stone-900 mb-4">{price}</div>
                    </div>
                </div>

                {/* Details (Pros/Cons) */}
                <div className="md:col-span-2 flex flex-col justify-between">
                    <div className="mb-6">
                        <h4 className="font-bold text-sm uppercase text-stone-500 mb-3 tracking-wider">Pourquoi on aime</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            {pros.map((pro, i) => (
                                <li key={i} className="flex items-start text-sm text-stone-700">
                                    <Check size={16} className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                                    {pro}
                                </li>
                            ))}
                        </ul>

                        {cons.length > 0 && (
                            <>
                                <h4 className="font-bold text-sm uppercase text-stone-500 mb-3 tracking-wider">Points faibles</h4>
                                <ul className="space-y-1">
                                    {cons.map((con, i) => (
                                        <li key={i} className="flex items-start text-sm text-stone-600">
                                            <X size={16} className="text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    <a
                        href={link}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg transform active:scale-95 transition-transform"
                    >
                        <ShoppingCart size={18} />
                        Voir l'offre au meilleur prix
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
