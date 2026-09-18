import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-6 border-t border-black/10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs uppercase tracking-widest opacity-60">
      <div>
        <p className="font-semibold text-black opacity-100 mb-1">Marga Studio</p>
        <p>{t('location')}</p>
      </div>

      <p className="max-w-xs">{t('footer.tagline')}</p>

      <p>{t('footer.rights')}</p>
    </footer>
  );
}
