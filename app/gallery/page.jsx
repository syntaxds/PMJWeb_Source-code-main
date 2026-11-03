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
        <div className="pmj-page-hero-media">
          <img src={PMJ_GALLERY[0]} alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{t.nav.gallery}</span>
          </div>
          <h1>{t.gallery.title}</h1>
          <p className="pmj-sub">
            {EN
              ? 'From the Pontianak mill floor to the dispatch yard in Bekasi — scenes from our 2026 operations.'
              : 'Dari lantai mill Pontianak hingga halaman dispatch di Bekasi — potret operasi 2026 kami.'}
          </p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-gal-grid">
            {PMJ_GALLERY.map((src, i) => (
              <div key={src} className={`pmj-gal-item ${SPANS[i] || ''}`}>
                <img src={src} alt={`PMJ operations photo ${i + 1}`} loading="lazy" />
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
