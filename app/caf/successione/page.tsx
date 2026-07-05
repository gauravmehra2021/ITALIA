'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Successione() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="⚖️"
      title="Successione"
      subtitle={t('caf.successione.subtitle')}
      description={t('caf.successione.description')}
      steps={t('caf.successione.steps')}
      documents={t('caf.successione.documents')}
    />
  )
}
