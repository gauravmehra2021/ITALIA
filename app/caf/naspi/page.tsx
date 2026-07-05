'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Naspi() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="💼"
      title="NASpI – Disoccupazione"
      subtitle={t('caf.naspi.subtitle')}
      description={t('caf.naspi.description')}
      steps={t('caf.naspi.steps')}
      documents={t('caf.naspi.documents')}
    />
  )
}
