'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function DomandaDiPensione() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="🏦"
      title="Pensione"
      subtitle={t('caf.pensione.subtitle')}
      description={t('caf.pensione.description')}
      steps={t('caf.pensione.steps')}
      documents={t('caf.pensione.documents')}
    />
  )
}
