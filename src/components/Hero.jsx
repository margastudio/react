import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="marga-hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="marga-hero-inner"
      >
        <p className="marga-hero-kicker">{t('location')}</p>

        <h1 className="marga-hero-title">{t('hero.headline')}</h1>

        <div className="marga-hero-copy">
          <p>{t('hero.sub')}</p>
          <p>{t('hero.desc')}</p>
        </div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="marga-hero-cta"
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
}
