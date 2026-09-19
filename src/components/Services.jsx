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
    <section className="marga-section">
      <div className="marga-section-header">
        <h2>{t('services.title')}</h2>
        <span className="marga-section-kicker">Services</span>
      </div>

      <div className="marga-services-grid">
        {services.map((srv, idx) => (
          <div key={idx} className="marga-service">
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
