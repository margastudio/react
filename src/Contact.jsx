import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto border-t border-black/10 flex flex-col items-start space-y-8">
      <div className="space-y-2 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-light">{t('contact.heading')}</h2>
        <p className="text-2xl md:text-4xl font-light opacity-60">{t('contact.subheading')}</p>
      </div>

      <p className="text-sm opacity-60 max-w-md">{t('contact.status')}</p>

      <a 
        href="mailto:margapardeilhan@gmail.com" 
        className="inline-block bg-black text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-neutral-800 transition"
      >
        {t('contact.btn')}
      </a>
    </section>
  );
}
