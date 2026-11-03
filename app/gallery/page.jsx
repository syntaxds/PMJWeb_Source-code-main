'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';
import { PMJ_GALLERY } from '@/lib/pmj-data';

const SPANS = ['wide', '', 'tall', '', 'wide', '', '', 'tall', '', '', 'wide', '', ''];

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const EN = lang === 'en';

  return (
    <div>
      <section className="pmj-page-hero">
        <div
          className="pmj-page-hero-media pmj-noprotect"
          style={{ backgroundImage: `url(${PMJ_GALLERY[0]})` }}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{t.nav.gallery}</span>
          </div>
          <h1>{t.gallery.title}</h1>
          <p className="pmj-sub">
            {EN
              ? 'scenes from our recent operations.'
              : 'potret operasi terkini kami.'}
          </p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-gal-grid">
            {PMJ_GALLERY.map((src, i) => (
              <div key={src} className={`pmj-gal-item ${SPANS[i] || ''}`}>
                <div
                  className="pmj-gal-img pmj-noprotect"
                  style={{ backgroundImage: `url(${src})` }}
                  role="img"
                  aria-label={`PMJ operations photo ${i + 1}`}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pmj-callout">
        <div className="pmj-container pmj-callout-inner">
          <div>
            <div className="pmj-kicker" style={{ color: 'var(--pmj-red)' }}>
              {EN ? 'Want more?' : 'Mau lebih banyak?'}
            </div>
            <h2>{EN ? 'Schedule a site visit.' : 'Jadwalkan kunjungan site.'}</h2>
          </div>
          <div>
            <p>
              {EN
                ? 'Come see the mill, the yard, or the dispatch floor yourself. We host client visits every month.'
                : 'Datang lihat mill, yard, atau dispatch floor langsung. Kami mengundang klien berkunjung setiap bulan.'}
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="pmj-btn pmj-btn-primary">{t.cta.contact}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
