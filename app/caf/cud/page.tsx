import CafDetailPage from '../CafDetailPage'

export default function Cud() {
  return (
    <CafDetailPage
      icon="📋"
      title="CUD – Certificazione Unica"
      subtitle="Single certification of income and withholding taxes — essential for your tax return and benefit applications."
      description="Il CUD (ora denominato Certificazione Unica o CU) è il documento rilasciato dal datore di lavoro o dall'ente pensionistico che certifica i redditi percepiti e le ritenute fiscali operate nell'anno precedente. È indispensabile per la compilazione del Modello 730 e per molte pratiche previdenziali. Il nostro CAF vi assiste nel recupero e nella verifica del CUD."
      steps={[
        'Request your CU from your employer or pension provider',
        'Bring the document to our office for verification',
        'Our operator checks the data for accuracy',
        'Use the CU for your 730 tax return or benefit applications',
        'We archive a copy for your records',
      ]}
      documents={[
        'Identity document and tax code',
        'Previous year payslips (for verification)',
        'Contact details of your employer or pension provider',
      ]}
    />
  )
}
