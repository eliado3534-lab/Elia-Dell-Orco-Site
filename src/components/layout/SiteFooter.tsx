import { Instagram, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

const contactItems = [
  { label: 'E-MAIL', value: profile.contact.email, href: profile.contact.emailHref, Icon: Mail },
  { label: 'INSTAGRAM', value: profile.contact.instagram, href: profile.contact.instagramHref, Icon: Instagram },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-mist bg-paper px-6 pb-10 pt-24 text-ink md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index="04" label="Get in touch" tone="light" />
        </Reveal>

        <div className="grid auto-rows-fr gap-px bg-mist md:grid-cols-2">
          {contactItems.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 100} className="h-full">
              <a
                href={href}
                target={/^(https?:|mailto:)/.test(href) ? '_blank' : undefined}
                rel={/^(https?:|mailto:)/.test(href) ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col justify-between gap-12 bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper [container-type:inline-size] md:p-10"
              >
                <div className="flex items-center justify-between font-mono text-[11px] tracking-widest2 text-charcoal/80 transition-colors duration-500 group-hover:text-ash">
                  <span>{label}</span>
                  <Icon className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.5} />
                </div>
                <p className="flex items-baseline gap-2 font-display font-bold text-ink transition-colors duration-500 group-hover:text-paper">
                  <span className="break-all text-[length:clamp(0.95rem,5.4cqw,1.75rem)]">{value}</span>
                  <span className="shrink-0 text-[length:clamp(0.95rem,5.4cqw,1.75rem)] transition-transform duration-500 group-hover:translate-x-1">
                    ↗
                  </span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-mist pt-8 font-mono text-[11px] uppercase tracking-widest2 text-charcoal/80 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ELIA DELL'ORCO</p>
          <p>Multimedia Artist • Composer • Photographer</p>
        </div>
      </div>
    </footer>
  );
}
