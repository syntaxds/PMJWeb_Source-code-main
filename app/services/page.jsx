'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const EN = lang === 'en';

  return (
    <div>
      <section className="pmj-page-hero">
        <div className="pmj-page-hero-media">
          <img src="/materi/PMJ-AREA-73.jpg" alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{t.nav.services}</span>
          </div>
          <h1>{t.services_page.title}</h1>
          <p className="pmj-sub">{t.services_page.sub}</p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          {/* 01 LOGISTICS */}
          <Reveal className="pmj-svc-row" id="logistics">
            <div>
              <div className="pmj-no">01</div>
              <div className="pmj-kicker" style={{ marginBottom: 8 }}>{EN ? 'Service' : 'Layanan'}</div>
              <h3>{t.services.s1t}</h3>
              <p>
                {EN
                  ? 'Door-to-door freight and distribution across Indonesia and Southeast Asia. We coordinate trucks, barges, and vessels under one dispatch — so your tonne only gets handed off between PMJ operators.'
                  : 'Pengiriman door-to-door dan distribusi di seluruh Indonesia dan Asia Tenggara. Kami mengoordinasikan truk, tongkang, dan kapal dalam satu dispatch — sehingga muatan Anda hanya berpindah tangan antara operator PMJ.'}
              </p>
              <ul>
                <li>{EN ? 'Domestic land & sea freight' : 'Pengiriman darat & laut domestik'}</li>
                <li>{EN ? 'International export freight' : 'Pengiriman laut internasional'}</li>
                <li>{EN ? 'Warehousing & last-mile distribution' : 'Pergudangan & distribusi last-mile'}</li>
              </ul>
              <Link href="/contact" className="pmj-btn pmj-btn-dark">{t.cta.quote}</Link>
            </div>
            <div>
              <img src="/materi/services/logistic2.png" alt="" />
            </div>
          </Reveal>

          {/* 02 EQUIPMENT */}
          <Reveal className="pmj-svc-row rev" id="equipment">
            <div>
              <div className="pmj-no">02</div>
              <div className="pmj-kicker" style={{ marginBottom: 8 }}>{EN ? 'Service' : 'Layanan'}</div>
              <h3>{t.services.s2t}</h3>
              <p>
                {EN
                  ? 'Fleet of excavators, loaders, dump trucks, and support vehicles — maintained by PMJ mechanics on 72-hour inspection cycles. Rent with our operators or bring your own.'
                  : 'Armada excavator, loaders, dump truck, dan kendaraan pendukung yang berkualitas — dirawat oleh mekanik PMJ dalam siklus inspeksi 72 jam. Sewa dengan operator kami atau bawa operator sendiri.'}
              </p>
              <ul>
                <li>{EN ? 'Excavators (PC135 – 200 class)' : 'Excavator (kelas PC135 – 200)'}</li>
                <li>{EN ? 'Wood loaders' : 'loader kayu'}</li>
                <li>{EN ? 'Dump trucks & haulers' : 'Dump truck & hauler'}</li>
                <li>{EN ? 'Operator-included or bare rental' : 'Dengan operator atau tanpa operator'}</li>
              </ul>
              <Link href="/contact" className="pmj-btn pmj-btn-dark">{t.cta.quote}</Link>
            </div>
            <div>
              <img src="/materi/services/he2.png" alt="" />
            </div>
          </Reveal>

          {/* 03 BIOMASS */}
          <Reveal className="pmj-svc-row" id="biomass">
            <div>
              <div className="pmj-no">03</div>
              <div className="pmj-kicker" style={{ marginBottom: 8 }}>{EN ? 'Service' : 'Layanan'}</div>
              <h3>{t.services.s3t}</h3>
              <p>
                {EN
                  ? 'Export-grade woodchips from our mill in Pontianak, West Kalimantan.'
                  : 'Woodchip kualitas ekspor dari mill kami di Pontianak, Kalimantan Barat.'}
              </p>
              <ul>
                <li>{EN ? 'Acacia woodchips* (export grade)' : 'Woodchip akasia* & Rimba Campuran (kualitas ekspor)'}</li>
                <li>{EN ? 'Mill-side moisture & density testing Included' : 'Termasuk Pengujian kelembaban & densitas di mill'}</li>
              </ul>
              <Link href="/contact" className="pmj-btn pmj-btn-dark">{t.cta.quote}</Link>
            </div>
            <div>
              <img src="/materi/PMJ-AREA-75.jpg" alt="" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pmj-callout">
        <div className="pmj-container pmj-callout-inner">
          <div>
            <div className="pmj-kicker" style={{ color: 'var(--pmj-red)' }}>{t.cta.quote}</div>
            <h2>{EN ? 'Three services, one quote.' : 'Tiga layanan, satu penawaran.'}</h2>
          </div>
          <div>
            <p>
              {EN
                ? 'Need freight, a Heavy Equipment, and Woodchip on the same project? We\'ll coordinate it end-to-end under a single PO.'
                : 'Butuh Charter Kapal, Alat Berat, dan Woodchip di proyek yang sama? Kami akan koordinasikan dari ujung ke ujung dalam satu PO.'}
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
