'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { PMJ_I18N } from '@/lib/pmj-data';

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: PMJ_I18N.en });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('pmj_lang');
      if (stored === 'en' || stored === 'id') setLangState(stored);
    } catch {}
    setReady(true);
  }, []);

  const setLang = (v) => {
    setLangState(v);
    try { localStorage.setItem('pmj_lang', v); } catch {}
  };

  const value = { lang, setLang, t: PMJ_I18N[lang], ready };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
