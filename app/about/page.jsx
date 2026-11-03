'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const EN = lang === 'en';
  const p = t.about_page;

  return (
    <div>
      <section className="pmj-page-hero">
        <div className="pmj-page-hero-media">
          <img src="/materi/PMJ-AREA-105.jpg" alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{t.nav.about}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="pmj-sub">{t.about.body}</p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-split">
            <div>
              <div className="pmj-kicker">{p.vision_t}</div>
              <h3>{p.vision}</h3>
            </div>
            <div>
              <img src="/materi/PMJ-AREA-84.jpg" alt="PMJ crew" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pmj-block" style={{ background: 'var(--pmj-gray-50)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{p.mission_t}</div>
              <h2 className="pmj-section-title">
                {EN ? 'Four commitments to every client.' : 'Empat komitmen untuk setiap klien.'}
              </h2>
            </div>
          </Reveal>
          <div className="pmj-mission-grid">
            {t.mission.map((m, i) => (
              <Reveal key={i} className="pmj-mission-card">
                <div className="pmj-mission-n">M.0{i + 1}</div>
                <div className="pmj-mission-t">{m}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{p.values_t}</div>
              <h2 className="pmj-section-title">
                {EN ? 'How we show up to work.' : 'Bagaimana kami hadir dalam bekerja.'}
              </h2>
            </div>
            <p className="pmj-section-sub">{p.values_sub}</p>
          </Reveal>
          <Reveal className="pmj-vals">
            {t.values.map((v, i) => (
              <div className="pmj-val" key={i}>
                <div className="pmj-val-n">{String(i + 1).padStart(2, '0')}</div>
                <h4>{v[0]}</h4>
                <p>{v[1]}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pmj-statband">
        <div className="pmj-container">
          <div className="pmj-statband-grid">
            <div className="pmj-statband-item"><div className="v">2014</div><div className="l">{EN ? 'Founded' : 'Didirikan'}</div></div>
            <div className="pmj-statband-item"><div className="v">3</div><div className="l">{EN ? 'Divisions' : 'Divisi'}</div></div>
            <div className="pmj-statband-item"><div className="v">33+</div><div className="l">{EN ? 'Active clients' : 'Klien aktif'}</div></div>
            <div className="pmj-statband-item"><div className="v">99.2%</div><div className="l">{EN ? 'Operational uptime' : 'Uptime operasional'}</div></div>
          </div>
        </div>
      </section>

      <section className="pmj-callout">
        <div className="pmj-container pmj-callout-inner">
          <div>
            <div className="pmj-kicker" style={{ color: 'var(--pmj-red)' }}>
              {EN ? 'Work with us' : 'Bekerja dengan kami'}
            </div>
            <h2>
              {EN
                ? 'Build your next shift with an operator who stays.'
                : 'Bangun shift Anda berikutnya dengan operator yang bertahan.'}
            </h2>
          </div>
          <div>
            <p>
              {EN
                ? 'Most RFPs we win are from clients who already know us. See what we do for them — then let\'s talk about you.'
                : 'Sebagian besar RFP yang kami menangkan berasal dari klien lama. Lihat apa yang kami lakukan untuk mereka — lalu mari bicarakan proyek Anda.'}
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/clients" className="pmj-btn pmj-btn-primary">
                {EN ? 'See our clients' : 'Lihat klien kami'}
              </Link>
              <Link href="/contact" className="pmj-btn pmj-btn-outline">{t.cta.contact}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
