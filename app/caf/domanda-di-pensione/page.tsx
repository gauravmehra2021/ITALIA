import CafDetailPage from '../CafDetailPage'

export default function DomandaDiPensione() {
  return (
    <CafDetailPage
      icon="🏦"
      title="Domanda di Pensione"
      subtitle="Pension application, calculation, and retirement planning — we ensure you receive every benefit you are entitled to."
      description="La domanda di pensione è un passaggio fondamentale per accedere alla pensione di vecchiaia, anticipata o di invalidità. Il nostro Patronato è autorizzato a presentare domande di pensione all'INPS per conto dei cittadini, verificando i contributi versati, calcolando l'importo spettante e gestendo l'intero iter burocratico."
      steps={[
        'Request your contribution statement (estratto contributivo) from INPS',
        'Our operator verifies your eligibility and calculates your pension',
        'We prepare and submit the pension application to INPS',
        'INPS processes the application and may request additional documents',
        'Pension payments begin from the approved start date',
      ]}
      documents={[
        'Identity document and tax code',
        'Contribution statement (estratto contributivo)',
        'Employment history documents',
        'IBAN bank account details',
        'Marriage or family status certificate (if applicable)',
      ]}
    />
  )
}
