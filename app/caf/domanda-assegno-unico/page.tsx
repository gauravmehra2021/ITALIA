import CafDetailPage from '../CafDetailPage'

export default function AssegnoUnico() {
  return (
    <CafDetailPage
      icon="👶"
      title="Assegno Unico Universale"
      subtitle="Universal child allowance for families with dependent children — we handle the application from start to finish."
      description="L'Assegno Unico Universale è un beneficio economico riconosciuto a tutte le famiglie con figli a carico fino a 21 anni. L'importo varia in base all'ISEE familiare e al numero di figli. Il nostro CAF vi assiste nella presentazione della domanda all'INPS, verificando i requisiti e assicurando che riceviate l'importo massimo spettante."
      steps={[
        'Calculate your ISEE (we can help with this too)',
        'Book an appointment with our CAF operator',
        'Our operator submits the application to INPS',
        'INPS verifies the application and confirms eligibility',
        'Monthly payments are credited directly to your bank account',
      ]}
      documents={[
        'Identity document and tax code (both parents)',
        'Tax codes of all dependent children',
        'Current ISEE certificate',
        'IBAN bank account details',
        'Disability certificate for children (if applicable)',
      ]}
    />
  )
}
