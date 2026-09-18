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
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-8 flex justify-between items-center">
      <a href="#" className="font-semibold text-lg tracking-tight">Marga Studio</a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">
        <a href="#work" className="hover:opacity-60 transition">{t('nav.work')}</a>
        <a href="#about" className="hover:opacity-60 transition">{t('nav.about')}</a>
        <a href="#contact" className="hover:opacity-60 transition">{t('nav.contact')}</a>
        
        {/* Language Switcher */}
        <div className="flex space-x-2 border-l border-white/20 pl-6">
          {['en', 'es', 'zh'].map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`uppercase text-xs ${i18n.language.startsWith(lng) ? 'font-bold underline' : 'opacity-50'}`}
            >
              {lng === 'zh' ? '中文' : lng}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden uppercase text-xs tracking-widest">
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black text-white p-8 flex flex-col justify-between md:hidden z-40"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Marga Studio</span>
              <button onClick={() => setIsOpen(false)} className="uppercase text-xs tracking-widest">Close</button>
            </div>

            <div className="flex flex-col space-y-6 text-2xl font-light">
              <a href="#work" onClick={() => setIsOpen(false)}>{t('nav.work')}</a>
              <a href="#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
            </div>

            <div className="flex space-x-4 border-t border-white/20 pt-6">
              <button onClick={() => changeLanguage('en')} className={i18n.language.startsWith('en') ? 'font-bold' : 'opacity-50'}>EN</button>
              <button onClick={() => changeLanguage('es')} className={i18n.language.startsWith('es') ? 'font-bold' : 'opacity-50'}>ES</button>
              <button onClick={() => changeLanguage('zh')} className={i18n.language.startsWith('zh') ? 'font-bold' : 'opacity-50'}>中文</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
