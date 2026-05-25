import CafDetailPage from '../CafDetailPage'

export default function Naspi() {
  return (
    <CafDetailPage
      icon="💼"
      title="NASpI – Disoccupazione"
      subtitle="Unemployment benefit application and management — we handle the entire process for you."
      description="La NASpI (Nuova Assicurazione Sociale per l'Impiego) è l'indennità di disoccupazione riconosciuta ai lavoratori dipendenti che hanno perso involontariamente il lavoro. Il nostro team vi assiste nella presentazione della domanda all'INPS entro i termini previsti, verificando i requisiti e massimizzando il periodo di fruizione del beneficio."
      steps={[
        'Verify eligibility: involuntary job loss and contribution requirements',
        'Collect all required documents',
        'Our operator submits the NASpI application to INPS online',
        'INPS processes the application (usually within 30 days)',
        'Monthly benefit payments begin from the 8th day after job loss',
      ]}
      documents={[
        'Identity document and tax code',
        'Dismissal letter or termination agreement',
        'Last payslip',
        'IBAN bank account details',
        'Employment contract (if available)',
      ]}
    />
  )
}
