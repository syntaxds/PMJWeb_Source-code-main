'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import ArrowIcon from './ArrowIcon';

const LINKS = [
  { href: '/', slug: 'home', key: 'home' },
  { href: '/about', slug: 'about', key: 'about' },
  { href: '/services', slug: 'services', key: 'services' },
  { href: '/clients', slug: 'clients', key: 'clients' },
  { href: '/gallery', slug: 'gallery', key: 'gallery' },
  { href: '/career', slug: 'career', key: 'career' },
  { href: '/contact', slug: 'contact', key: 'contact' },
];

export default function PMJNav() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname() || '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mobileOpen]);

  return (
    <header className="pmj-nav">
      <div className="pmj-container pmj-nav-wrap">
        <Link href="/" className="pmj-nav-logo" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="PMJ Padas Mustapa Jaya" />
        </Link>

        {/* Desktop nav */}
        <nav className="pmj-nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.slug}
              href={l.href}
              className={`pmj-nav-link ${isActive(l.href) ? 'active' : ''}`}
            >
              {t.nav[l.key]}
            </Link>
          ))}
          <div className="pmj-lang-toggle" role="tablist" aria-label="Language">
            <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            <button type="button" className={lang === 'id' ? 'on' : ''} onClick={() => setLang('id')}>ID</button>
          </div>
          <Link href="/contact" className="pmj-nav-cta">
            {t.cta.quote}
            <ArrowIcon />
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          className={`pmj-nav-burger ${mobileOpen ? 'open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile slide-down sheet */}
      <div className={`pmj-mobile-sheet ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="pmj-mobile-inner">
          {LINKS.map((l) => (
            <Link
              key={l.slug}
              href={l.href}
              className={`pmj-mobile-link ${isActive(l.href) ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{t.nav[l.key]}</span>
              <ArrowIcon />
            </Link>
          ))}
          <div className="pmj-mobile-actions">
            <div className="pmj-lang-toggle" role="tablist" aria-label="Language">
              <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
              <button type="button" className={lang === 'id' ? 'on' : ''} onClick={() => setLang('id')}>ID</button>
            </div>
            <Link href="/contact" className="pmj-nav-cta" onClick={() => setMobileOpen(false)}>
              {t.cta.quote}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
