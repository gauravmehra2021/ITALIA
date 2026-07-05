'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Modello730() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="🧾"
      title="730 – Dichiarazione dei Redditi"
      subtitle={t('caf.modello730.subtitle')}
      description={t('caf.modello730.description')}
      steps={t('caf.modello730.steps')}
      documents={t('caf.modello730.documents')}
    />
  )
}
