import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { title: t('services.s1_title'), desc: t('services.s1_desc') },
    { title: t('services.s2_title'), desc: t('services.s2_desc') },
    { title: t('services.s3_title'), desc: t('services.s3_desc') },
    { title: t('services.s4_title'), desc: t('services.s4_desc') }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <h2 className="text-xs uppercase tracking-widest opacity-40 mb-12">{t('services.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((srv, idx) => (
          <div key={idx} className="space-y-2 border-l border-black/10 pl-6 py-2">
            <h3 className="text-xl font-medium">{srv.title}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
