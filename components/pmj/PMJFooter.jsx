'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function PMJFooter() {
  const { t } = useLanguage();
  return (
    <footer className="pmj-footer">
      <div className="pmj-container">
        <div className="pmj-footer-grid">
          <div className="pmj-footer-brand">
            <img src="/logo.png" alt="PMJ" />
            <p>
              PT Padas Mustapa Jaya — {t.footer.tag}.<br />
              Bekasi & Pontianak · Indonesia
            </p>
          </div>
          <div>
            <h4>{t.nav.services}</h4>
            <ul>
              <li><Link href="/services">{t.services.s1t}</Link></li>
              <li><Link href="/services">{t.services.s2t}</Link></li>
              <li><Link href="/services">{t.services.s3t}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.nav.about}</h4>
            <ul>
              <li><Link href="/about">{t.nav.about}</Link></li>
              <li><Link href="/clients">{t.nav.clients}</Link></li>
              <li><Link href="/gallery">{t.nav.gallery}</Link></li>
              <li><Link href="/career">{t.nav.career}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.nav.contact}</h4>
            <ul>
              <li>Grand Galaxy City Blok RSA 2 No. 19</li>
              <li>Bekasi, Jawa Barat</li>
              <li>+62 21 38711145</li>
              <li>info@pmjsystem.com</li>
            </ul>
          </div>
        </div>
        <div className="pmj-footer-bottom">
          <span>
            © 2026 PT Padas Mustapa Jaya. {t.footer.rights}{' '}
            <Link href="/privacy-policy">{t.footer.privacy}</Link> · <Link href="/terms-conditions">{t.footer.terms}</Link>
          </span>
          <span>Est. 2018 · Bekasi, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
