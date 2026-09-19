import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="marga-footer">
      <div>
        <p className="marga-footer-brand">Marga Studio</p>
        <p>{t('location')}</p>
      </div>

      <p>{t('footer.tagline')}</p>
      <p>{t('footer.rights')}</p>
    </footer>
  );
}
