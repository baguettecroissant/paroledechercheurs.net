import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-9xl font-serif font-black text-stone-200">404</h1>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-[-2rem] mb-6 relative z-10">
                Page Introuvable
            </h2>
            <p className="text-lg text-stone-600 max-w-md mb-8">
                L'hypothèse que cette page existe a été réfutée par l'observation empirique.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-stone-900 text-white font-bold rounded hover:bg-orange-600 transition-colors"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}
