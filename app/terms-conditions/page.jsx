'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';

const ui = {
  en: {
    title: 'Terms & Conditions',
    updated: 'Last updated: August 4, 2026',
    sections: [
      {
        h: '1. Acceptance of Terms',
        body: [
          'By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.',
        ],
      },
      {
        h: '2. About Our Services',
        body: [
          'PT Padas Mustapa Jaya ("PMJ", "we", "us") operates in forestry commodities, logistics, and heavy equipment services. This website is informational and serves as a channel for you to request quotes, inquire about our services, or contact us — it is not a transactional e-commerce platform.',
        ],
      },
      {
        h: '3. Use of This Website',
        body: [
          'You agree to use this website only for lawful purposes. You must not attempt to scrape, misuse, or disrupt the operation of this website, and you must not submit false, misleading, or malicious information through our Contact form.',
        ],
      },
      {
        h: '4. Intellectual Property',
        body: [
          'All content on this website — including text, images, logos, and design — is owned by or licensed to PT Padas Mustapa Jaya and may not be reproduced, distributed, or used without our prior written permission.',
        ],
      },
      {
        h: '5. Accuracy of Information',
        body: [
          'Information on this website (such as our services, capacity, fleet, and client list) is provided for general informational purposes and may be updated without notice. It does not constitute a binding offer or contract for any specific engagement — all business arrangements are subject to a separate agreement between PMJ and the client.',
        ],
      },
      {
        h: '6. Third-Party Links',
        body: [
          'This website does not currently link to third-party websites. If it does in the future, such links are provided for convenience only, and we do not endorse or take responsibility for the content of any third-party site.',
        ],
      },
      {
        h: '7. Limitation of Liability',
        body: [
          'To the fullest extent permitted by law, PT Padas Mustapa Jaya shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.',
        ],
      },
      {
        h: '8. Governing Law',
        body: [
          'These Terms & Conditions are governed by the laws of the Republic of Indonesia. Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent Indonesian courts.',
        ],
      },
      {
        h: '9. Changes to These Terms',
        body: [
          'We may update these Terms & Conditions from time to time. Changes will be reflected by updating the "Last updated" date at the top of this page.',
        ],
      },
      {
        h: '10. Contact Us',
        body: [
          'If you have any questions about these Terms & Conditions, please contact us at info@pmjsystem.com or +62 21 38711145.',
        ],
      },
      {
        h: 'Note',
        body: [
          'This page has not been reviewed by external legal counsel, particularly the governing law/jurisdiction clause above. We recommend a legal review before relying on this page for formal purposes.',
        ],
      },
    ],
  },
  id: {
    title: 'Syarat & Ketentuan',
    updated: 'Terakhir diperbarui: 4 Agustus 2026',
    sections: [
      {
        h: '1. Penerimaan Ketentuan',
        body: [
          'Dengan mengakses atau menggunakan situs ini, Anda setuju untuk terikat pada Syarat & Ketentuan ini. Jika Anda tidak setuju, mohon untuk tidak menggunakan situs ini.',
        ],
      },
      {
        h: '2. Tentang Layanan Kami',
        body: [
          'PT Padas Mustapa Jaya ("PMJ", "kami") bergerak di bidang komoditas kehutanan, logistik, dan alat berat. Situs ini bersifat informatif dan menjadi kanal bagi Anda untuk meminta penawaran, menanyakan layanan kami, atau menghubungi kami — bukan platform transaksi jual-beli.',
        ],
      },
      {
        h: '3. Penggunaan Situs Ini',
        body: [
          'Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah. Anda tidak boleh mencoba melakukan scraping, menyalahgunakan, atau mengganggu operasional situs ini, dan tidak boleh mengirimkan informasi palsu, menyesatkan, atau berbahaya melalui form Contact kami.',
        ],
      },
      {
        h: '4. Hak Kekayaan Intelektual',
        body: [
          'Seluruh konten di situs ini — termasuk teks, gambar, logo, dan desain — dimiliki oleh atau dilisensikan kepada PT Padas Mustapa Jaya dan tidak boleh direproduksi, didistribusikan, atau digunakan tanpa izin tertulis kami.',
        ],
      },
      {
        h: '5. Akurasi Informasi',
        body: [
          'Informasi di situs ini (seperti layanan, kapasitas, armada, dan daftar klien kami) disediakan untuk tujuan informasi umum dan dapat diperbarui sewaktu-waktu tanpa pemberitahuan. Informasi ini bukan merupakan penawaran atau kontrak yang mengikat untuk kerja sama tertentu — seluruh kesepakatan bisnis tunduk pada perjanjian terpisah antara PMJ dan klien.',
        ],
      },
      {
        h: '6. Tautan Pihak Ketiga',
        body: [
          'Situs ini saat ini tidak menautkan ke situs pihak ketiga. Jika di kemudian hari terdapat tautan tersebut, tautan itu hanya disediakan untuk kenyamanan Anda, dan kami tidak bertanggung jawab atas konten situs pihak ketiga mana pun.',
        ],
      },
      {
        h: '7. Batasan Tanggung Jawab',
        body: [
          'Sejauh yang diizinkan oleh hukum, PT Padas Mustapa Jaya tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan Anda menggunakan situs ini.',
        ],
      },
      {
        h: '8. Hukum yang Berlaku',
        body: [
          'Syarat & Ketentuan ini tunduk pada hukum Republik Indonesia. Setiap perselisihan yang timbul dari penggunaan situs ini akan diselesaikan melalui pengadilan Indonesia yang berwenang.',
        ],
      },
      {
        h: '9. Perubahan Ketentuan Ini',
        body: [
          'Kami dapat memperbarui Syarat & Ketentuan ini dari waktu ke waktu. Perubahan akan tercermin melalui pembaruan tanggal "Terakhir diperbarui" di bagian atas halaman ini.',
        ],
      },
      {
        h: '10. Hubungi Kami',
        body: [
          'Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami di info@pmjsystem.com atau +62 21 38711145.',
        ],
      },
      {
        h: 'Catatan',
        body: [
          'Halaman ini belum ditinjau oleh penasihat hukum eksternal, terutama klausul hukum/yurisdiksi di atas. Kami menyarankan peninjauan hukum sebelum menjadikan halaman ini sebagai dasar formal.',
        ],
      },
    ],
  },
};

export default function TermsConditionsPage() {
  const { lang, t } = useLanguage();
  const c = ui[lang];

  return (
    <div>
      <section className="pmj-page-hero" style={{ minHeight: 260 }}>
        <div className="pmj-page-hero-media">
          <img src="/materi/PMJ-AREA-125.jpg" alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{c.title}</span>
          </div>
          <h1>{c.title}</h1>
          <p className="pmj-sub">{c.updated}</p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container" style={{ maxWidth: 820 }}>
          <Reveal>
            {c.sections.map((s, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                <h3>{s.h}</h3>
                {s.body.map((p, j) => (
                  <p key={j} className="pmj-sub" style={{ maxWidth: 'none' }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
