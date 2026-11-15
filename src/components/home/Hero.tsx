import { Link } from 'react-router-dom';
import ImageSlot from '@/components/ui/ImageSlot';
import Reveal from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section className="grid-lines relative flex min-h-screen flex-col px-6 pb-10 pt-24 md:px-10 md:pb-12 md:pt-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-widest2 text-ash">
            <span>[00] PORTFOLIO // INDEX</span>
            <span>FROSINONE / IT — TALLINN / EE</span>
          </div>
        </Reveal>

        <div className="grid flex-1 items-end gap-6 py-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_min(27rem,35%)] lg:gap-8 lg:py-8">
          <div className="[container-type:inline-size]">
            <h1 className="animate-[rise_1s_ease-out_both] break-words font-display text-[length:max(2.75rem,14cqw)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-paper">
              <span className="block">Elia</span>
              <span className="block">Dell'Orco</span>
            </h1>

            <Reveal delay={200}>
              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-widest2 text-paper lg:mt-8 lg:mb-16">
                {profile.roles.map((role, i) => (
                  <li key={role} className="flex items-center gap-5">
                    <span className="flex items-baseline gap-2">
                      <span className="text-[10px] text-ash">{String(i + 1).padStart(2, '0')}</span>
                      {role}
                    </span>
                    {i < profile.roles.length - 1 && <span aria-hidden className="h-3.5 w-px bg-line" />}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Link
              to="/#works"
              className="mt-6 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-widest2 text-ash transition-colors active:text-paper lg:hidden"
            >
              WORKS
              <span aria-hidden>↓</span>
            </Link>
          </div>

          <Reveal delay={250}>
            <div className="relative lg:translate-y-3">
              <ImageSlot
                src={profile.heroImage.src}
                alt="Elia Dell'Orco playing electric guitar on stage"
                placeholder={profile.heroImage.placeholder}
                aspectClassName="aspect-[3/4] lg:max-h-[62vh]"
              />
            </div>
          </Reveal>
        </div>

        <Link
          to="/#works"
          className="group hidden items-center gap-3 self-start font-mono text-[11px] uppercase tracking-widest2 text-ash transition-colors hover:text-paper lg:flex"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-line transition-transform duration-500 group-hover:translate-y-1 group-hover:border-paper">
            ↓
          </span>
          SCROLL TO WORKS
        </Link>
      </div>
    </section>
  );
}
