'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';
import { PMJ_CLIENTS } from '@/lib/pmj-data';

export default function ClientsPage() {
  const { lang, t } = useLanguage();
  const EN = lang === 'en';

  const sectors = [
    [EN ? 'Pulp & Paper' : 'Pulp & Kertas', '8'],
    [EN ? 'Energy & Utilities' : 'Energi & Utilitas', '6'],
    [EN ? 'Manufacturing' : 'Manufaktur', '9'],
    [EN ? 'Food & Retail' : 'Makanan & Ritel', '5'],
    [EN ? 'Construction' : 'Konstruksi', '5'],
  ];

  return (
    <div>
      <section className="pmj-page-hero">
        <div className="pmj-page-hero-media">
          <img src="/materi/client-photo.png" alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{t.nav.clients}</span>
          </div>
          <h1>{t.nav.clients}</h1>
          <p className="pmj-sub">{t.clients.sub}</p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{EN ? 'Partners' : 'Mitra'}</div>
              <h2 className="pmj-section-title">
                {EN ? 'Thirty-three names on the board.' : 'Tiga puluh tiga nama di papan.'}
              </h2>
            </div>
            <p className="pmj-section-sub">
              {EN
                ? 'Pulp, energy, construction, food, textiles. The full list — no redactions.'
                : 'Pulp, energi, konstruksi, makanan, tekstil. Daftar lengkap — tanpa sensor.'}
            </p>
          </Reveal>
          <Reveal className="pmj-clients-grid">
            {PMJ_CLIENTS.map((c) => (
              <div className="pmj-client-cell" key={c.n} title={c.n}>
                <img src={c.l} alt={c.n} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>


      <section className="pmj-callout">
        <div className="pmj-container pmj-callout-inner">
          <div>
            <div className="pmj-kicker" style={{ color: 'var(--pmj-red)' }}>
              {EN ? 'Be the next one' : 'Jadi yang selanjutnya'}
            </div>
            <h2>{EN ? 'Get your operation on our board.' : 'Dapatkan operasi Anda di papan kami.'}</h2>
          </div>
          <div>
            <p>
              {EN
                ? 'If you run a mill, a plant, or a project that needs a no-drama operations partner, let\'s scope it.'
                : 'Jika Anda menjalankan pabrik atau proyek yang butuh mitra operasional tanpa drama, mari rinci bersama.'}
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="pmj-btn pmj-btn-primary">{t.cta.quote}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
