'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';

const ui = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: August 4, 2026',
    sections: [
      {
        h: '1. Introduction',
        body: [
          'PT Padas Mustapa Jaya ("PMJ", "we", "us") respects your privacy. This Privacy Policy explains what personal data we collect through this website, how we use it, and your rights regarding that data.',
        ],
      },
      {
        h: '2. Data Controller',
        body: [
          'PT Padas Mustapa Jaya, Grand Galaxy City Blok RSA 2 No. 19, Bekasi Selatan, Jawa Barat, Indonesia.',
          'Email: info@pmjsystem.com — Phone: +62 21 38711145.',
        ],
      },
      {
        h: '3. What Information We Collect',
        body: [
          'When you submit our Contact form, we collect: your full name, company/institution, email address, phone number, service of interest, and the message details you provide.',
          'We do not collect payment information, national ID numbers, or any other sensitive personal data through this website.',
        ],
      },
      {
        h: '4. How We Collect It',
        body: [
          'Data is collected only when you actively submit the Contact form on this site.',
          'On our Career page, job applications are sent via your own email application (a "mailto" link) directly to our recruitment email address. That process happens entirely within your own email client and never passes through this website\'s servers.',
        ],
      },
      {
        h: '5. How We Use Your Data',
        body: [
          'We use the information you submit solely to respond to your inquiry, evaluate your service request, or process your job application. We do not use your data for marketing, sell it to third parties, or use it for profiling.',
        ],
      },
      {
        h: '6. Storage & Transmission',
        body: [
          'Contact form submissions are sent by email (via SMTP) directly to our operations inbox, with your name and email set as the reply-to address so we can respond to you.',
          'This website does not store your submission in any database — there is no persistent record kept beyond the email itself.',
        ],
      },
      {
        h: '7. Cookies & Tracking',
        body: [
          'This website does not use analytics, advertising, or tracking cookies or pixels of any kind.',
          'The only data stored in your browser is your language preference (English/Indonesian), saved locally via your browser\'s localStorage under the key "pmj_lang". This never leaves your device and is not accessible to us.',
        ],
      },
      {
        h: '8. Data Retention',
        body: [
          'Since submissions are handled as ordinary business email, they are retained for as long as necessary to respond to your inquiry and to maintain our normal business correspondence records.',
        ],
      },
      {
        h: '9. Sharing With Third Parties',
        body: [
          'We do not sell, rent, or share your data with third parties, except for the email service provider (SMTP) we use strictly to deliver messages to our team.',
        ],
      },
      {
        h: '10. Your Rights',
        body: [
          'You may request access to, correction of, or deletion of any information you have submitted to us by emailing info@pmjsystem.com.',
        ],
      },
      {
        h: "11. Children's Data",
        body: [
          'This website is not directed at children, and we do not knowingly collect personal data from children.',
        ],
      },
      {
        h: '12. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last updated" date at the top of this page.',
        ],
      },
      {
        h: '13. Contact Us',
        body: [
          'If you have any questions about this Privacy Policy, please contact us at info@pmjsystem.com or +62 21 38711145.',
        ],
      },
      {
        h: 'Note',
        body: [
          'This policy describes our current data practices as accurately as possible but has not been reviewed by external legal counsel. We recommend a legal review before relying on this page for formal compliance purposes.',
        ],
      },
    ],
  },
  id: {
    title: 'Kebijakan Privasi',
    updated: 'Terakhir diperbarui: 4 Agustus 2026',
    sections: [
      {
        h: '1. Pendahuluan',
        body: [
          'PT Padas Mustapa Jaya ("PMJ", "kami") menghargai privasi Anda. Kebijakan Privasi ini menjelaskan data pribadi apa yang kami kumpulkan melalui situs ini, bagaimana kami menggunakannya, dan hak Anda atas data tersebut.',
        ],
      },
      {
        h: '2. Pengendali Data',
        body: [
          'PT Padas Mustapa Jaya, Grand Galaxy City Blok RSA 2 No. 19, Bekasi Selatan, Jawa Barat, Indonesia.',
          'Email: info@pmjsystem.com — Telepon: +62 21 38711145.',
        ],
      },
      {
        h: '3. Data yang Kami Kumpulkan',
        body: [
          'Saat Anda mengisi form Contact kami, kami mengumpulkan: nama lengkap, perusahaan/instansi, alamat email, nomor telepon, layanan yang diminati, dan detail pesan yang Anda berikan.',
          'Kami tidak mengumpulkan informasi pembayaran, nomor identitas resmi, atau data pribadi sensitif lainnya melalui situs ini.',
        ],
      },
      {
        h: '4. Cara Kami Mengumpulkan Data',
        body: [
          'Data hanya dikumpulkan saat Anda secara aktif mengisi form Contact di situs ini.',
          'Di halaman Karir, lamaran kerja dikirim melalui aplikasi email Anda sendiri (tautan "mailto") langsung ke alamat email rekrutmen kami. Proses ini sepenuhnya berlangsung di aplikasi email Anda dan tidak pernah melewati server situs ini.',
        ],
      },
      {
        h: '5. Bagaimana Kami Menggunakan Data Anda',
        body: [
          'Kami menggunakan informasi yang Anda kirimkan semata-mata untuk merespons pertanyaan Anda, mengevaluasi permintaan layanan, atau memproses lamaran kerja Anda. Kami tidak menggunakan data Anda untuk pemasaran, menjualnya ke pihak ketiga, atau untuk profiling.',
        ],
      },
      {
        h: '6. Penyimpanan & Transmisi',
        body: [
          'Isian form Contact dikirim melalui email (via SMTP) langsung ke inbox operasional kami, dengan nama dan email Anda diatur sebagai alamat reply-to agar kami dapat membalas Anda.',
          'Situs ini tidak menyimpan isian Anda ke database mana pun — tidak ada catatan permanen yang disimpan selain email itu sendiri.',
        ],
      },
      {
        h: '7. Cookie & Pelacakan',
        body: [
          'Situs ini tidak menggunakan analytics, iklan, atau cookie/pixel pelacak dalam bentuk apa pun.',
          'Satu-satunya data yang disimpan di browser Anda adalah preferensi bahasa (Inggris/Indonesia), disimpan secara lokal melalui localStorage browser Anda dengan key "pmj_lang". Data ini tidak pernah meninggalkan perangkat Anda dan tidak dapat diakses oleh kami.',
        ],
      },
      {
        h: '8. Retensi Data',
        body: [
          'Karena isian ditangani sebagai email bisnis biasa, data disimpan selama diperlukan untuk merespons pertanyaan Anda dan menjaga catatan korespondensi bisnis normal kami.',
        ],
      },
      {
        h: '9. Berbagi dengan Pihak Ketiga',
        body: [
          'Kami tidak menjual, menyewakan, atau membagikan data Anda kepada pihak ketiga, kecuali kepada penyedia layanan email (SMTP) yang kami gunakan semata-mata untuk mengirimkan pesan kepada tim kami.',
        ],
      },
      {
        h: '10. Hak Anda',
        body: [
          'Anda dapat meminta akses, koreksi, atau penghapusan atas informasi yang telah Anda kirimkan kepada kami dengan mengirim email ke info@pmjsystem.com.',
        ],
      },
      {
        h: '11. Data Anak-anak',
        body: [
          'Situs ini tidak ditujukan untuk anak-anak, dan kami tidak dengan sengaja mengumpulkan data pribadi dari anak-anak.',
        ],
      },
      {
        h: '12. Perubahan Kebijakan Ini',
        body: [
          'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan tercermin melalui pembaruan tanggal "Terakhir diperbarui" di bagian atas halaman ini.',
        ],
      },
      {
        h: '13. Hubungi Kami',
        body: [
          'Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di info@pmjsystem.com atau +62 21 38711145.',
        ],
      },
      {
        h: 'Catatan',
        body: [
          'Kebijakan ini menjelaskan praktik data kami saat ini seakurat mungkin, namun belum ditinjau oleh penasihat hukum eksternal. Kami menyarankan peninjauan hukum sebelum menjadikan halaman ini sebagai dasar kepatuhan formal.',
        ],
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
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
