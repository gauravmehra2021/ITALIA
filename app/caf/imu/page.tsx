'use client'
import { useLanguage } from '../../context/LanguageContext'
import CafDetailPage from '../CafDetailPage'

export default function Imu() {
  const { t } = useLanguage()
  return (
    <CafDetailPage
      icon="🏠"
      title="IMU"
      subtitle={t('caf.imu.subtitle')}
      description={t('caf.imu.description')}
      steps={t('caf.imu.steps')}
      documents={t('caf.imu.documents')}
    />
  )
}
