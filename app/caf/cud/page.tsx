'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Cud() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="📋"
      title="CUD"
      subtitle={t('caf.cud.subtitle')}
      description={t('caf.cud.description')}
      steps={t('caf.cud.steps')}
      documents={t('caf.cud.documents')}
    />
  )
}
