import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-8"
      >
        <h2 className="text-xs uppercase tracking-widest opacity-40">{t('about.title')}</h2>
        <p className="text-2xl md:text-3xl font-light leading-snug">{t('about.p1')}</p>
        <p className="text-lg opacity-80 font-light leading-relaxed">{t('about.p2')}</p>
        <p className="text-base opacity-60 font-light leading-relaxed">{t('about.p3')}</p>
        <p className="text-base opacity-60 font-light leading-relaxed">{t('about.p4')}</p>
      </motion.div>
    </section>
  );
}
