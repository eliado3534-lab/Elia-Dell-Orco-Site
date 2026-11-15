import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import ImageSlot from '@/components/ui/ImageSlot';
import Reveal from '@/components/ui/Reveal';
import ScheduleDisclosure from '@/components/works/ScheduleDisclosure';
import type { Work } from '@/data/types';

interface WorkCardProps {
  work: Work;
  index: number;
  imageOnRight?: boolean;
  imageAspect?: string;
}

export default function WorkCard({
  work,
  index,
  imageOnRight = false,
  imageAspect = 'aspect-[4/5]',
}: WorkCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article id={work.id} className="scroll-mt-28 border-t border-line py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${imageOnRight ? 'lg:order-2' : ''}`}>
          <ImageSlot src={work.src} alt={work.title} placeholder={work.placeholder} aspectClassName={imageAspect} />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-10 lg:col-span-7">
          <header>
            <p className="font-mono text-xs uppercase tracking-widest2 text-ash">
              [{number}] // {work.kind}
            </p>
            <h2 className="mt-5 break-words font-display text-4xl font-bold uppercase leading-[1.02] text-paper md:text-6xl">
              {work.title}
            </h2>
          </header>

          <div className="space-y-5 font-display text-base leading-[1.5] text-mist md:text-lg">
            {work.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {(work.meta?.length || work.events?.length) && (
            <dl className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
              {work.meta?.map((item) => (
                <div key={item.label} className="sm:col-span-2">
                  <dt className="font-mono text-[11px] uppercase tracking-widest2 text-ash">{item.label}</dt>
                  <dd className="mt-2 whitespace-pre-line font-mono text-sm leading-[1.5] text-paper">{item.value}</dd>
                </div>
              ))}
              {work.events && work.events.length > 0 && (
                <div className="sm:col-span-2">
                  <dt className="font-mono text-[11px] uppercase tracking-widest2 text-ash">Events</dt>
                  <dd className="mt-3">
                    <ul className="space-y-2 font-mono text-sm leading-[1.5] text-paper">
                      {work.events.map((event) => (
                        <li key={event} className="flex gap-3">
                          <span aria-hidden="true" className="text-ash">•</span>
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          )}

          {work.schedule && <ScheduleDisclosure schedule={work.schedule} />}

          {work.links && work.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {work.links.map((link) => (
                <ExternalLinkButton key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </article>
  );
}
