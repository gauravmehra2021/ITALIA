'use client'

import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function ColfEBadanti() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="🧹"
      title="Colf e Badanti"
      subtitle={t('caf.colfEBadanti.subtitle')}
      description={t('caf.colfEBadanti.description')}
      steps={t('caf.colfEBadanti.steps')}
      documents={t('caf.colfEBadanti.documents')}
    />
  )
}
