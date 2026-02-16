import { getAllPosts } from '@/lib/mdx';
import Hero from '@/components/home/Hero';
import FeaturedSection from '@/components/home/FeaturedSection';
import CategorySection from '@/components/home/CategorySection';
import TrustSignals from '@/components/home/TrustSignals';

export default function Home() {
  // 1. Get all posts
  const allPosts = getAllPosts();

  // 2. Select Featured Post (latest or specific one)
  // For now, let's pick the first one as featured
  const featuredPost = allPosts.find((p) => p.frontMatter.featured) || allPosts[0];

  // 3. Filter Secondary Posts (exclude featured)
  const secondaryPosts = allPosts
    .filter((p) => p.slug !== featuredPost.slug)
    .slice(0, 3);

  // 4. Group by Categories
  // Helper to get posts for a category, excluding featured
  const getCategoryPosts = (cat: string) =>
    allPosts
      .filter(p => p.category.toLowerCase() === cat.toLowerCase() && p.slug !== featuredPost.slug)
      .slice(0, 4);

  const sciencesPosts = getCategoryPosts('sciences');
  const societePosts = getCategoryPosts('societe');
  const techPosts = getCategoryPosts('tech');
  const santePosts = getCategoryPosts('sante');
  const outilsPosts = getCategoryPosts('outils');

  return (
    <main className="bg-stone-50 min-h-screen">
      {/* 0. Original Hero Section (RESTORED) */}
      <Hero />

      {/* 0.5 Trust Signals (Restored) */}
      <TrustSignals />

      {/* 1. Featured Section (Now 'Le Dossier de la Semaine' or similar to avoid redundancy with Hero) */}
      <FeaturedSection
        id="articles"
        featuredPost={featuredPost}
        secondaryPosts={secondaryPosts}
      />

      {/* 2. Sciences (Grid) */}
      <CategorySection
        title="Sciences"
        categorySlug="sciences"
        posts={sciencesPosts}
        color="blue"
        variant="grid"
      />

      {/* 3. Société (List/Editorial) */}
      <CategorySection
        title="Société"
        categorySlug="societe"
        posts={societePosts}
        color="orange"
        variant="list"
      />

      {/* 4. Tech (Grid) */}
      <CategorySection
        title="Technologie"
        categorySlug="tech"
        posts={techPosts}
        color="purple"
        variant="grid"
      />

      {/* 5. Santé (List) */}
      <CategorySection
        title="Santé"
        categorySlug="sante"
        posts={santePosts}
        color="emerald"
        variant="list"
      />

      {/* 6. Outils (Simple Grid) */}
      <CategorySection
        title="Outils"
        categorySlug="outils"
        posts={outilsPosts}
        color="stone"
        variant="grid"
      />
    </main>
  );
}
