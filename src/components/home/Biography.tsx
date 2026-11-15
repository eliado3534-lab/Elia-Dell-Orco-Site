import ImageSlot from '@/components/ui/ImageSlot';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

export default function Biography() {
  return (
    <section id="biography" className="scroll-mt-20 bg-paper px-6 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <ImageSlot
            src={profile.bioImage.src}
            alt="Black and white outdoor portrait of Elia Dell'Orco"
            placeholder={profile.bioImage.placeholder}
            aspectClassName="aspect-[4/5]"
            className="border-charcoal"
          />
        </Reveal>

        <div className="flex flex-col gap-6 lg:col-span-8">
          <Reveal>
            <SectionHeading index="02" label="Biography" tone="light" />
            <h3 className="mt-10 font-display text-3xl font-bold uppercase leading-[1.05] md:text-5xl">
              Biography
            </h3>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest2 text-charcoal/80">
              Born: {profile.born.date} — {profile.born.place}
            </p>
          </Reveal>

          <Reveal delay={150}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="font-display text-xl leading-[1.5] md:text-2xl">
                <span className="mr-2 font-mono text-sm text-charcoal/80">✦</span>
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
