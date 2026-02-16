import React from 'react';

type ComparisonTableProps = {
    products: {
        name: string;
        price: string;
        rating: string;
        features: string[];
        link: string;
    }[];
};

const ProductComparison = ({ products }: ComparisonTableProps) => {
    return (
        <div className="overflow-x-auto my-8 border border-stone-200 rounded-xl shadow-sm not-prose">
            <table className="w-full text-sm text-left text-stone-600 bg-white">
                <thead className="text-xs text-stone-700 uppercase bg-stone-100 border-b border-stone-200">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-serif font-bold text-stone-900">Modèle</th>
                        <th scope="col" className="px-6 py-4 font-bold">Note</th>
                        <th scope="col" className="px-6 py-4 font-bold">Points Clés</th>
                        <th scope="col" className="px-6 py-4 font-bold">Prix</th>
                        <th scope="col" className="px-6 py-4 font-bold text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                            <th scope="row" className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    {product.rating}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <ul className="list-disc list-inside text-xs space-y-1">
                                    {product.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="px-6 py-4 font-bold text-stone-900">
                                {product.price}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-xs px-4 py-2 text-center inline-block transition-colors"
                                >
                                    Voir
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductComparison;
