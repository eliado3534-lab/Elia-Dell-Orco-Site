import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { sectionLinks, worksLinks } from '@/data/navigation';

interface MobileMenuProps {
  onNavigate: () => void;
}

export default function MobileMenu({ onNavigate }: MobileMenuProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-ink px-6 pb-10 pt-8 font-mono uppercase tracking-widest2 lg:hidden">
      <p className="mb-4 text-[11px] text-ash">WORKS //</p>
      <ul className="mb-10 border-t border-line">
        {worksLinks.map((link) => (
          <li key={link.to} className="border-b border-line">
            <Link
              to={link.to}
              onClick={onNavigate}
              className="flex items-center justify-between gap-4 py-5 text-sm text-paper transition-colors hover:text-ash"
            >
              <span>
                <span className="mr-3 text-ash">[{link.number}]</span>
                {link.label}
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="space-y-6 text-lg font-display font-bold tracking-normal">
        {sectionLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to} onClick={onNavigate} className="flex items-center gap-3 text-paper transition-colors hover:text-ash">
              {link.label}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
