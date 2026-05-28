import CafDetailPage from '../CafDetailPage'

export default function ColfEBadanti() {
  return (
    <CafDetailPage
      icon="🧹"
      title="Colf e Badanti"
      subtitle="Domestic worker and caregiver contract and contribution management — full compliance made simple."
      description="La gestione di colf e badanti richiede la corretta stipula del contratto di lavoro domestico, il versamento dei contributi INPS e il rispetto del CCNL di settore. Il nostro team vi assiste nella redazione del contratto, nel calcolo e versamento dei contributi trimestrali e nella gestione di eventuali pratiche di assunzione o cessazione del rapporto di lavoro."
      steps={[
        'Define the employment terms (hours, salary, duties)',
        'Our operator drafts the domestic work contract',
        'Register the worker with INPS for social contributions',
        'We calculate and submit quarterly contribution payments',
        'Manage any contract changes, renewals, or terminations',
      ]}
      documents={[
        'Identity documents of employer and worker',
        'Tax codes of both parties',
        'Worker\'s residence permit (if non-EU)',
        'IBAN bank account of the worker',
        'Previous contract (if renewal)',
      ]}
    />
  )
}
