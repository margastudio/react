import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="marga-navbar">
      <div className="marga-nav-inner">
        <a href="#" className="marga-brand" aria-label="Marga Studio home">
          <span className="marga-brand-mark" aria-hidden="true" />
          <span>Marga Studio</span>
        </a>

        <div className="marga-nav-links">
          <a href="#work" className="marga-nav-link">{t('nav.work')}</a>
          <a href="#about" className="marga-nav-link">{t('nav.about')}</a>
          <a href="#contact" className="marga-nav-link">{t('nav.contact')}</a>

          <div className="marga-lang-switcher" aria-label="Language switcher">
            {['en', 'es', 'zh'].map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => changeLanguage(lng)}
                className={`marga-lang-btn ${i18n.language.startsWith(lng) ? 'is-active' : ''}`}
                aria-pressed={i18n.language.startsWith(lng)}
              >
                {lng === 'zh' ? '中文' : lng}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden uppercase text-[0.72rem] tracking-[0.16em]"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#f4efe9] text-[#1b1a18] p-6 md:hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-tight">Marga Studio</span>
              <button type="button" onClick={() => setIsOpen(false)} className="uppercase text-xs tracking-[0.16em]">
                Close
              </button>
            </div>

            <div className="flex flex-col gap-6 text-3xl font-light">
              <a href="#work" onClick={() => setIsOpen(false)}>{t('nav.work')}</a>
              <a href="#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
            </div>

            <div className="flex gap-4 border-t border-black/10 pt-6">
              <button type="button" onClick={() => changeLanguage('en')} className={i18n.language.startsWith('en') ? 'font-bold' : 'opacity-50'}>EN</button>
              <button type="button" onClick={() => changeLanguage('es')} className={i18n.language.startsWith('es') ? 'font-bold' : 'opacity-50'}>ES</button>
              <button type="button" onClick={() => changeLanguage('zh')} className={i18n.language.startsWith('zh') ? 'font-bold' : 'opacity-50'}>中文</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
