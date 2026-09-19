import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="marga-section marga-contact">
      <h2 className="marga-contact-headline">{t('contact.heading')}</h2>
      <p className="marga-contact-sub">{t('contact.subheading')}</p>
      <p className="max-w-md text-sm uppercase tracking-[0.18em] text-[rgba(27,26,24,0.6)]">{t('contact.status')}</p>

      <a href="mailto:histudiomarga@gmail.com" className="marga-contact-cta">
        {t('contact.btn')}
      </a>
    </section>
  );
}
