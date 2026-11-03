'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';
import ArrowIcon from '@/components/pmj/ArrowIcon';
import { PMJ_CLIENTS } from '@/lib/pmj-data';

export default function HomePage() {
  const { lang, t } = useLanguage();
  const EN = lang === 'en';

  return (
    <div>
      {/* HERO */}
      <section className="pmj-hero">
        <div className="pmj-hero-media">
          <Image src="/materi/PMJ-AREA-73.jpg" alt="PMJ operations" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="pmj-container pmj-hero-inner">
          <div className="pmj-hero-eyebrow">
            <span className="pmj-dot" />
            {t.hero.eyebrow}
          </div>
          <h1 className="pmj-hero-title">{t.hero.title}</h1>
          <p className="pmj-hero-sub">{t.hero.sub}</p>
          <div className="pmj-hero-ctas">
            <Link href="/services" className="pmj-btn pmj-btn-primary">
              {t.cta.explore}
              <ArrowIcon />
            </Link>
            <Link href="/contact" className="pmj-btn pmj-btn-outline">{t.cta.contact}</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{t.services.kicker}</div>
              <h2 className="pmj-section-title">{t.services.title}</h2>
            </div>
            <p className="pmj-section-sub">{t.services.sub}</p>
          </Reveal>
          <div className="pmj-svc-grid">
            <Reveal as={Link} href="/services#logistics" className="pmj-svc-card">
              <Image src="/materi/services/logistic2.png" alt="" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="pmj-svc-content">
                <div className="pmj-svc-no">01</div>
                <h3 className="pmj-svc-title">{t.services.s1t}</h3>
                <p className="pmj-svc-desc">{t.services.s1d}</p>
                <span className="pmj-svc-link">
                  {t.cta.explore}
                  <ArrowIcon />
                </span>
              </div>
            </Reveal>
            <Reveal as={Link} href="/services#equipment" className="pmj-svc-card">
              <Image src="/materi/PMJ-AREA-59.jpg" alt="" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="pmj-svc-content">
                <div className="pmj-svc-no">02</div>
                <h3 className="pmj-svc-title">{t.services.s2t}</h3>
                <p className="pmj-svc-desc">{t.services.s2d}</p>
                <span className="pmj-svc-link">
                  {t.cta.explore}
                  <ArrowIcon />
                </span>
              </div>
            </Reveal>
            <Reveal as={Link} href="/services#biomass" className="pmj-svc-card">
              <Image src="/materi/PMJ-AREA-75.jpg" alt="" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="pmj-svc-content">
                <div className="pmj-svc-no">03</div>
                <h3 className="pmj-svc-title">{t.services.s3t}</h3>
                <p className="pmj-svc-desc">{t.services.s3d}</p>
                <span className="pmj-svc-link">
                  {t.cta.explore}
                  <ArrowIcon />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="pmj-block" style={{ paddingTop: 0 }}>
        <div className="pmj-container">
          <Reveal className="pmj-split">
            <div>
              <Image src="/materi/PMJ-AREA-105.jpg" alt="PMJ team on site" width={900} height={560} sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div>
              <div className="pmj-kicker">{t.about.kicker}</div>
              <h3>{t.about.title}</h3>
              <p>{t.about.body}</p>
              <p className="pmj-muted">
                {EN
                  ? 'Our headquarters in Bekasi coordinates all of our fleet. Our mill in Pontianak produces 78,000 MT+ of export-grade woodchips per year. Everything you see on this site — from the chipper to the barge — is owned and operated by PMJ.'
                  : 'Kantor pusat kami di Bekasi mengoordinasikan semua armada. Mill kami di Pontianak memproduksi 78.000 MT+ woodchip kualitas ekspor per tahun. Semua yang Anda lihat di situs ini — mulai dari chipper hingga barge — dimiliki dan dioperasikan oleh PMJ.'}
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
                <Link href="/about" className="pmj-btn pmj-btn-dark">
                  {t.cta.explore}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS BAND */}
      <section className="pmj-block pmj-clients-band">
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{t.clients.kicker}</div>
              <h2 className="pmj-section-title">{t.clients.title}</h2>
            </div>
            <p className="pmj-section-sub">{t.clients.sub}</p>
          </Reveal>
          <Reveal className="pmj-clients-featured">
            {(() => {
              const FEATURED = {
                'PT. Riau Andalan Pulp and Paper': 'https://www.aprilasia.com/id/',
                'PT. PLN EPI Indonesia': 'https://www.plnepi.co.id/',
                'Astra Otopart': 'https://www.astra-otoparts.com/',
                'Bulog': 'https://www.bulog.co.id/',
              };
              return Object.keys(FEATURED)
                .map((name) => PMJ_CLIENTS.find((c) => c.n === name))
                .filter(Boolean)
                .map((c) => (
                  <a
                    className="pmj-featured-card"
                    key={c.n}
                    href={FEATURED[c.n]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={c.n}
                  >
                    <img src={c.l} alt={c.n} loading="lazy" />
                    <div className="pmj-featured-name">{c.n}</div>
                  </a>
                ));
            })()}
          </Reveal>
          <div style={{ marginTop: 32 }}>
            <Link href="/clients" className="pmj-btn pmj-btn-ghost">
              {t.cta.all}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / WHY */}
      <section className="pmj-block">
        <div className="pmj-container pmj-blur-protect">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{EN ? 'Why PMJ' : 'Mengapa PMJ'}</div>
              <h2 className="pmj-section-title">
                {EN ? 'Comprehensive. High quality. Reliable.' : 'Komprehensif. Berkualitas. Andal.'}
              </h2>
            </div>
            <p className="pmj-section-sub">
              {EN
                ? "Three reasons Indonesia's largest mills and utilities keep coming back."
                : 'Tiga alasan mengapa pabrik dan utilitas terbesar di Indonesia selalu kembali.'}
            </p>
          </Reveal>
          <div className="pmj-testi-grid">
            <Reveal className="pmj-testi">
              <blockquote>
                {EN
                  ? '"Every truck, every barge, every shift — we run it. No sub-contractors dressed up as ours. When something moves for a client, a PMJ operator is holding the wheel."'
                  : '"Setiap truk, setiap tongkang, setiap shift — kami yang menjalankan. Tidak ada sub-kontraktor berkedok kami. Saat sesuatu bergerak untuk klien, operator PMJ yang memegang kendali."'}
              </blockquote>
              <div className="pmj-testi-author">
                <div className="pmj-co">{EN ? 'OWNERSHIP' : 'KEPEMILIKAN'}</div>
                <div className="pmj-name">{EN ? 'Everything is ours.' : 'Semuanya milik kami.'}</div>
                <div className="pmj-role">
                  {EN ? 'Fleet, equipment, mill — fully owned and operated.' : 'Armada, alat, mill — dimiliki dan dioperasikan sendiri.'}
                </div>
              </div>
            </Reveal>
            <Reveal className="pmj-testi">
              <blockquote>
                {EN
                  ? '"Telematics on every hauler. Daily tonnage reports signed by the shift lead. Audited safety logs. If a client asks where their load is right now, we can answer in under a minute."'
                  : '"Telematika di setiap hauler. Laporan tonase harian ditandatangani shift lead. Log keselamatan teraudit. Jika klien bertanya di mana muatan mereka saat ini, kami dapat menjawab dalam satu menit."'}
              </blockquote>
              <div className="pmj-testi-author">
                <div className="pmj-co">{EN ? 'DOCUMENTATION' : 'DOKUMENTASI'}</div>
                <div className="pmj-name">{EN ? 'Nothing undocumented.' : 'Tidak ada yang tidak terdokumentasi.'}</div>
                <div className="pmj-role">{EN ? 'Trace every tonne from mill to port.' : 'Lacak setiap ton dari mill ke pelabuhan.'}</div>
              </div>
            </Reveal>
            <Reveal className="pmj-testi">
              <blockquote>
                {EN
                  ? '"Our oldest client has been with us since 2015. Our newest signed last month. We plan in years, not tenders. That\'s why the mills that run 24/7 trust us."'
                  : '"Klien terlama kami bersama kami sejak 2015. Yang terbaru tanda tangan bulan lalu. Kami merencanakan dalam tahun, bukan tender. Itulah mengapa pabrik 24/7 mempercayai kami."'}
              </blockquote>
              <div className="pmj-testi-author">
                <div className="pmj-co">{EN ? 'PARTNERSHIP' : 'KEMITRAAN'}</div>
                <div className="pmj-name">{EN ? 'In it for the long haul.' : 'Komitmen jangka panjang.'}</div>
                <div className="pmj-role">{EN ? 'Average client relationship: 6.4 years.' : 'Rata-rata hubungan klien: 6,4 tahun.'}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section className="pmj-callout">
        <div className="pmj-container pmj-callout-inner">
          <div>
            <div className="pmj-kicker" style={{ color: 'var(--pmj-red)' }}>{t.cta.quote}</div>
            <h2>{EN ? 'Got a lane, a load, or a projects to run?' : 'Punya rute, muatan, atau proyek untuk dijalankan?'}</h2>
          </div>
          <div>
            <p>
              {EN
                ? 'Tell us the tonnage, the origin, and the deadline. An operations lead will reply within one business day with a quote and a timeline.'
                : 'Sampaikan tonase, asal, dan tenggat. Tim operasional akan membalas dalam satu hari kerja dengan penawaran dan timeline.'}
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="pmj-btn pmj-btn-primary">
                {t.cta.quote}
                <ArrowIcon />
              </Link>
              <a href="mailto:info@pmjsystem.com" className="pmj-btn pmj-btn-outline">info@pmjsystem.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
