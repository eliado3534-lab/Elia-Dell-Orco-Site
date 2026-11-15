import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import PhotoGallery from '@/components/works/PhotoGallery';
import WorkCard from '@/components/works/WorkCard';
import { categories, getCategoryBySlug } from '@/data/categories';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const otherCategories = categories.filter((item) => item.slug !== category.slug);
  const galleryIndex = String(category.works.length + 1).padStart(2, '0');

  return (
    <div className="px-6 pb-24 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Link
            to="/#works"
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-ash transition-colors hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
            ALL CATEGORIES
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <header className="mt-12 border-b border-line pb-16 md:pb-20">
            <p className="font-mono text-xs uppercase tracking-widest2 text-ash">
              {category.number} / {category.summary}
            </p>
            <h1 className="mt-6 font-display text-[clamp(1.9rem,9vw,8rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-paper">
              {category.title}
            </h1>
            {category.intro?.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-10 max-w-2xl font-display text-lg leading-[1.5] text-mist md:text-xl">
                {paragraph}
              </p>
            ))}
          </header>
        </Reveal>

        <div>
          {category.works.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              index={i}
              imageOnRight={i % 2 === 1}
              imageAspect={category.coverAspect}
            />
          ))}
        </div>

        {category.gallery && (
          <PhotoGallery index={galleryIndex} title={category.gallery.title} images={category.gallery.images} />
        )}

        <section className="mt-24 border-t border-line pt-12">
          <SectionHeading index="//" label="Other categories" />
          <ul className="mt-8 grid gap-px bg-line md:grid-cols-3">
            {otherCategories.map((item) => (
              <li key={item.slug} className="bg-ink">
                <Link
                  to={`/works/${item.slug}`}
                  className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-500 hover:bg-paper hover:text-ink"
                >
                  <span className="font-mono text-xs tracking-widest2 text-ash group-hover:text-charcoal">{item.number} /</span>
                  <span className="flex items-end justify-between gap-4 font-display text-xl font-bold uppercase leading-[1.1]">
                    {item.title}
                    <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
