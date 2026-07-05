'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function AssegnoUnico() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="👶"
      title="Assegno Unico"
      subtitle={t('caf.assegnoUnico.subtitle')}
      description={t('caf.assegnoUnico.description')}
      steps={t('caf.assegnoUnico.steps')}
      documents={t('caf.assegnoUnico.documents')}
    />
  )
}
