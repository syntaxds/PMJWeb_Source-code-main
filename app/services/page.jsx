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
                  ? 'Door-to-door freight, customs clearance, and distribution across Indonesia and Southeast Asia. We coordinate trucks, barges, and vessels under one dispatch — so your tonne only gets handed off between PMJ operators.'
                  : 'Pengiriman door-to-door, bea cukai, dan distribusi di seluruh Indonesia dan Asia Tenggara. Kami mengoordinasikan truk, tongkang, dan kapal dalam satu dispatch — sehingga muatan Anda hanya berpindah tangan antara operator PMJ.'}
              </p>
              <ul>
                <li>{EN ? 'Domestic land & sea freight' : 'Pengiriman darat & laut domestik'}</li>
                <li>{EN ? 'International ocean freight' : 'Pengiriman laut internasional'}</li>
                <li>{EN ? 'Customs clearance & documentation' : 'Bea cukai & dokumentasi'}</li>
                <li>{EN ? 'Warehousing & last-mile distribution' : 'Pergudangan & distribusi last-mile'}</li>
                <li>{EN ? 'Live telematics tracking' : 'Pelacakan telematika langsung'}</li>
              </ul>
              <Link href="/contact" className="pmj-btn pmj-btn-dark">{t.cta.quote}</Link>
            </div>
            <div>
              <img src="/materi/PMJ-AREA-73.jpg" alt="" />
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
                  ? 'Fleet of 120+ excavators, wheel loaders, bulldozers, dump trucks, and support vehicles — maintained by PMJ mechanics on 72-hour inspection cycles. Rent with our operators or bring your own.'
                  : 'Armada 120+ excavator, wheel loader, bulldozer, dump truck, dan kendaraan pendukung — dirawat oleh mekanik PMJ dalam siklus inspeksi 72 jam. Sewa dengan operator kami atau bawa operator sendiri.'}
              </p>
              <ul>
                <li>{EN ? 'Excavators (5T – 40T class)' : 'Excavator (kelas 5T – 40T)'}</li>
                <li>{EN ? 'Wheel loaders & bulldozers' : 'Wheel loader & bulldozer'}</li>
                <li>{EN ? 'Dump trucks & haulers' : 'Dump truck & hauler'}</li>
                <li>{EN ? 'Mobile cranes & support' : 'Mobile crane & pendukung'}</li>
                <li>{EN ? 'Operator-included or bare rental' : 'Dengan operator atau tanpa operator'}</li>
              </ul>
              <Link href="/contact" className="pmj-btn pmj-btn-dark">{t.cta.quote}</Link>
            </div>
            <div>
              <img src="/materi/PMJ-AREA-59.jpg" alt="" />
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
                  ? 'Export-grade acacia woodchips and biomass pellets from our mill in Pontianak, West Kalimantan. 48,000 MT annual capacity, PEFC-aligned sourcing, and quality certificates issued per shipment.'
                  : 'Woodchip akasia kualitas ekspor dan pelet biomassa dari mill kami di Pontianak, Kalimantan Barat. Kapasitas tahunan 48.000 MT, sumber selaras PEFC, dan sertifikat kualitas per pengiriman.'}
              </p>
              <ul>
                <li>{EN ? 'Acacia woodchips (export grade)' : 'Woodchip akasia (kualitas ekspor)'}</li>
                <li>{EN ? 'Biomass pellets for power generation' : 'Pelet biomassa untuk pembangkit listrik'}</li>
                <li>{EN ? '48,000 MT / year capacity' : 'Kapasitas 48.000 MT / tahun'}</li>
                <li>{EN ? 'Mill-side moisture & density testing' : 'Pengujian kelembaban & densitas di mill'}</li>
                <li>{EN ? 'PEFC-aligned sustainable sourcing' : 'Sumber berkelanjutan selaras PEFC'}</li>
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
                ? 'Need freight, a crane, and biomass on the same project? We\'ll coordinate it end-to-end under a single PO.'
                : 'Butuh freight, crane, dan biomassa di proyek yang sama? Kami akan koordinasikan dari ujung ke ujung dalam satu PO.'}
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
