'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function AttivazioneSpid() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="🔐"
      title="Attivazione SPID"
      subtitle={t('caf.spid.subtitle')}
      description={t('caf.spid.description')}
      steps={t('caf.spid.steps')}
      documents={t('caf.spid.documents')}
    />
  )
}
