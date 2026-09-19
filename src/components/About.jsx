import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="marga-section">
      <div className="marga-section-header">
        <h2>{t('about.title')}</h2>
        <span className="marga-section-kicker">About</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="marga-about-layout"
      >
        <div className="marga-about-copy">
          <p>{t('about.p1')}</p>
          <p className="marga-about-support">{t('about.p2')}</p>
          <p className="marga-about-support">{t('about.p3')}</p>
          <p className="marga-about-support">{t('about.p4')}</p>
        </div>

        <div className="marga-about-portrait">
          <img
            src="/images/marga-profile.png"
            alt="Marga Studio"
            className="marga-about-photo"
          />
          <span className="marga-about-note">Argentina / China</span>
        </div>
      </motion.div>
    </section>
  );
}
