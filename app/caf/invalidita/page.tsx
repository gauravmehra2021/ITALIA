import CafDetailPage from '../CafDetailPage'

export default function Invalidita() {
  return (
    <CafDetailPage
      icon="♿"
      title="Invalidità Civile"
      subtitle="Disability recognition and benefit application — our experts guide you through every step of the process."
      description="Il riconoscimento dell'invalidità civile permette di accedere a una serie di benefici economici e agevolazioni. Il processo richiede la presentazione di una domanda all'INPS corredata da documentazione medica, seguita da una visita della commissione medica. Il nostro team vi assiste in ogni fase, dalla raccolta dei documenti alla presentazione della domanda e al monitoraggio dell'iter."
      steps={[
        'Collect all medical documentation certifying your condition',
        'Our operator submits the application to INPS online',
        'INPS schedules a medical commission visit',
        'Attend the medical commission appointment',
        'Receive the official recognition and access your benefits',
      ]}
      documents={[
        'Identity document and tax code',
        'Medical certificates and specialist reports',
        'Hospital discharge summaries',
        'Current medication prescriptions',
        'ISEE certificate (for means-tested benefits)',
      ]}
    />
  )
}
