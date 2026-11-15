import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import { profile } from '@/data/profile';
import { sectionLinks, worksLinks } from '@/data/navigation';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setWorksOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? 'border-b border-line bg-ink/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            to="/"
            className="group flex items-center font-display text-sm font-bold tracking-[0.18em] text-paper md:text-base"
          >
            {profile.name}
          </Link>

          <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-widest2 text-paper lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setWorksOpen(true)}
              onMouseLeave={() => setWorksOpen(false)}
              onFocus={() => setWorksOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) setWorksOpen(false);
              }}
            >
              <button
                type="button"
                className="flex items-center gap-2 py-6 transition-colors hover:text-ash focus-visible:outline-none"
                aria-haspopup="true"
                aria-expanded={worksOpen}
              >
                WORKS //
              </button>
              <div
                className={`absolute left-1/2 top-full w-[340px] -translate-x-1/2 border border-line bg-ink transition-all duration-300 ${
                  worksOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
              >
                {worksLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setWorksOpen(false)}
                    className="group/item flex items-center justify-between gap-4 border-b border-line px-5 py-4 text-[11px] leading-snug transition-colors last:border-b-0 hover:bg-paper hover:text-ink"
                  >
                    <span className="text-ash group-hover/item:text-charcoal">[{link.number}]</span>
                    <span className="flex-1">{link.label}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>
            {sectionLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-ash">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center border border-line text-paper transition-colors hover:border-paper lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}
    </>
  );
}
