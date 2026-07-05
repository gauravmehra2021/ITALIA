'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Isee() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="📊"
      title="ISEE"
      subtitle={t('caf.isee.subtitle')}
      description={t('caf.isee.description')}
      steps={t('caf.isee.steps')}
      documents={t('caf.isee.documents')}
    />
  )
}
