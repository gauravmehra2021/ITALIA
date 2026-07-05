'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Invalidita() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="♿"
      title="Invalidità"
      subtitle={t('caf.invalidita.subtitle')}
      description={t('caf.invalidita.description')}
      steps={t('caf.invalidita.steps')}
      documents={t('caf.invalidita.documents')}
    />
  )
}
