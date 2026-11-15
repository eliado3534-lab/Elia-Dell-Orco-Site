import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-line px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index="03" label="Education" />
        </Reveal>

        <ol className="relative mt-4">
          {profile.education.map((item, i) => (
            <li key={`${item.period}-${item.school}`} className="group">
              <Reveal delay={i * 100}>
                <div className="grid gap-4 border-b border-line py-8 transition-colors duration-500 group-hover:bg-charcoal/60 md:grid-cols-12 md:gap-8 md:px-4 md:py-10">
                  <p className="font-mono text-sm tracking-widest2 text-ash md:col-span-3">
                    <span className="mr-2 text-paper">•</span>
                    {item.period}
                  </p>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl font-bold uppercase leading-[1.15] text-paper md:text-3xl">
                      {item.school}
                    </h3>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-ash">{item.place}</p>
                  </div>
                  <p className="font-mono text-xs leading-[1.5] text-mist md:col-span-3 md:text-right md:text-sm">
                    → {item.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
