import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-between px-6 pt-32 pb-12 max-w-7xl mx-auto">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-widest opacity-60"
      >
        {t('location')}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-auto max-w-4xl space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
          {t('hero.headline')}
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl font-light">
          {t('hero.sub')}
        </p>
        <p className="text-base opacity-60 max-w-2xl font-light">
          {t('hero.desc')}
        </p>
      </motion.div>

      <motion.a 
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm uppercase tracking-widest hover:opacity-60 transition"
      >
        {t('hero.cta')}
      </motion.a>
    </section>
  );
}
