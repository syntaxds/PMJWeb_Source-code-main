'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';
import ArrowIcon from '@/components/pmj/ArrowIcon';

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const EN = lang === 'en';
  const c = t.contact;

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    details: '',
    website: '', // honeypot
  });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', msg: EN ? 'Sending…' : 'Mengirim…' });

    const payload = {
      name: form.name,
      email: form.email,
      subject: `[${form.service || (EN ? 'General' : 'Umum')}] ${form.company || form.name}`,
      message: `${EN ? 'Service of interest' : 'Layanan yang diminati'}: ${form.service || '-'}\n${EN ? 'Company' : 'Perusahaan'}: ${form.company || '-'}\n${EN ? 'Phone' : 'Telepon'}: ${form.phone || '-'}\n\n${form.details}`,
      website: form.website,
    };

    try {
      const res = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus({
          state: 'success',
          msg: EN ? 'Thanks — we\'ll reply within one business day.' : 'Terima kasih — kami akan membalas dalam satu hari kerja.',
        });
        setForm({ name: '', company: '', email: '', phone: '', service: '', details: '', website: '' });
      } else {
        setStatus({
          state: 'error',
          msg: data.message || (EN ? 'Could not send. Please try again.' : 'Gagal mengirim. Coba lagi.'),
        });
      }
    } catch {
      setStatus({
        state: 'error',
        msg: EN ? 'Network error. Please try again.' : 'Gangguan jaringan. Coba lagi.',
      });
    }
  };

  return (
    <div>
      <section className="pmj-page-hero" style={{ minHeight: 320 }}>
        <div className="pmj-page-hero-media">
          <img src="/materi/PMJ-AREA-125.jpg" alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{t.nav.home}</Link> / <span>{t.nav.contact}</span>
          </div>
          <h1>{c.title}</h1>
          <p className="pmj-sub">{c.sub}</p>
        </div>
      </section>

      <section className="pmj-block">
        <div className="pmj-container">
          <div className="pmj-contact-grid">
            <Reveal className="pmj-contact-info">
              <div className="pmj-info-card">
                <div className="pmj-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <div className="pmj-info-t">{c.ho}</div>
                  <div className="pmj-info-v">Grand Galaxy City Blok RSA 2 No. 19</div>
                  <div className="pmj-info-s">Bekasi Selatan, Jawa Barat 17147 — Indonesia</div>
                </div>
              </div>
              <div className="pmj-info-card">
                <div className="pmj-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <div className="pmj-info-t">{c.so}</div>
                  <div className="pmj-info-v">{EN ? 'Biomass Mill — Pontianak' : 'Mill Biomassa — Pontianak'}</div>
                  <div className="pmj-info-s">{EN ? 'West Kalimantan, Indonesia' : 'Kalimantan Barat, Indonesia'}</div>
                </div>
              </div>
              <div className="pmj-info-card">
                <div className="pmj-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9z" /></svg>
                </div>
                <div>
                  <div className="pmj-info-t">{c.ph}</div>
                  <div className="pmj-info-v">+62 21 38711145</div>
                  <div className="pmj-info-s">+62 812 1234 5678 — Operations</div>
                </div>
              </div>
              <div className="pmj-info-card">
                <div className="pmj-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
                </div>
                <div>
                  <div className="pmj-info-t">{c.em}</div>
                  <div className="pmj-info-v">info@pmjsystem.com</div>
                  <div className="pmj-info-s">operations@pmjsystem.com</div>
                </div>
              </div>
              <div className="pmj-info-card">
                <div className="pmj-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <div>
                  <div className="pmj-info-t">{c.hrs}</div>
                  <div className="pmj-info-v">{c.hrsVal}</div>
                  <div className="pmj-info-s">{EN ? '24/7 dispatch for active contracts' : 'Dispatch 24/7 untuk kontrak aktif'}</div>
                </div>
              </div>
            </Reveal>

            <Reveal as="form" className="pmj-form" onSubmit={onSubmit} noValidate>
              <h3>{EN ? 'Request a quote' : 'Minta penawaran'}</h3>

              {/* honeypot (hidden from humans) */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={set('website')}
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                aria-hidden="true"
              />

              <div className="pmj-form-row">
                <div className="pmj-field">
                  <label>{EN ? 'Full name' : 'Nama lengkap'}</label>
                  <input required placeholder={EN ? 'Jane Doe' : 'Budi Santoso'} value={form.name} onChange={set('name')} />
                </div>
                <div className="pmj-field">
                  <label>{EN ? 'Company' : 'Perusahaan'}</label>
                  <input placeholder={EN ? 'PT Example' : 'PT Contoh'} value={form.company} onChange={set('company')} />
                </div>
              </div>
              <div className="pmj-form-row">
                <div className="pmj-field">
                  <label>{c.em}</label>
                  <input type="email" required placeholder="you@company.com" value={form.email} onChange={set('email')} />
                </div>
                <div className="pmj-field">
                  <label>{c.ph}</label>
                  <input type="tel" placeholder="+62 ..." value={form.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className="pmj-field">
                <label>{EN ? 'Service of interest' : 'Layanan yang diminati'}</label>
                <select value={form.service} onChange={set('service')}>
                  <option value="">{EN ? '— select —' : '— pilih —'}</option>
                  <option>{t.services.s1t}</option>
                  <option>{t.services.s2t}</option>
                  <option>{t.services.s3t}</option>
                  <option>{EN ? 'Multiple services' : 'Beberapa layanan'}</option>
                </select>
              </div>
              <div className="pmj-field">
                <label>{EN ? 'Project details' : 'Rincian proyek'}</label>
                <textarea
                  required
                  placeholder={EN ? 'Lane, tonnage, timeline...' : 'Rute, tonase, timeline...'}
                  value={form.details}
                  onChange={set('details')}
                />
              </div>
              <button className="pmj-btn pmj-btn-primary" type="submit" disabled={status.state === 'sending'}>
                {status.state === 'sending'
                  ? EN ? 'Sending…' : 'Mengirim…'
                  : EN ? 'Send message' : 'Kirim pesan'}
                <ArrowIcon />
              </button>
              <div
                className="pmj-small pmj-muted"
                style={{
                  marginTop: 14,
                  minHeight: 18,
                  color: status.state === 'error' ? 'var(--pmj-red)' : status.state === 'success' ? 'var(--pmj-ink)' : 'var(--pmj-gray-500)',
                }}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
