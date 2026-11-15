import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { categories } from '@/data/categories';

export default function WorksIndex() {
  return (
    <section id="works" className="scroll-mt-20 border-t border-line px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-8 md:mb-10">
            <SectionHeading index="01" label="Works //" />
            <p className="mt-6 max-w-2xl font-mono text-xs leading-[1.5] tracking-wide text-ash">
              Select a category to enter the archive. Each entry includes its technical format, its performances and
              links to listen or watch.
            </p>
          </div>
        </Reveal>

        <ul className="border-b border-line">
          {categories.map((category, i) => (
            <li key={category.slug} className="border-t border-line">
              <Reveal delay={i * 80}>
                <Link
                  to={`/works/${category.slug}`}
                  className="group relative flex items-center gap-4 overflow-hidden py-6 md:gap-10 md:py-8"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="relative w-12 shrink-0 font-mono text-xs tracking-widest2 text-ash transition-colors duration-300 group-hover:text-charcoal md:w-24 md:text-sm">
                    {category.number} /
                  </span>
                  <div className="relative min-w-0 flex-1 pr-5 md:pr-0">
                    <h3 className="font-display text-[clamp(1.6rem,4.6vw,4.25rem)] font-bold uppercase leading-[0.98] text-paper transition-colors duration-300 group-hover:text-ink">
                      {category.title}
                    </h3>
                  </div>
                  <span className="relative shrink-0 text-2xl text-paper transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink md:text-4xl">
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
