'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function DisoccupazioneAgricola() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="🌾"
      title="Disoccupazione Agricola"
      subtitle={t('caf.disoccupazioneAgricola.subtitle')}
      description={t('caf.disoccupazioneAgricola.description')}
      steps={t('caf.disoccupazioneAgricola.steps')}
      documents={t('caf.disoccupazioneAgricola.documents')}
    />
  )
}
