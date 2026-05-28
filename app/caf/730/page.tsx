import CafDetailPage from '../CafDetailPage'

export default function Modello730() {
  return (
    <CafDetailPage
      icon="🧾"
      title="730 – Dichiarazione dei Redditi"
      subtitle="Annual income tax return for employees and pensioners — maximize your refund with our certified CAF operators."
      description="Il Modello 730 è la dichiarazione dei redditi destinata ai lavoratori dipendenti e pensionati. Presentarlo correttamente permette di recuperare le detrazioni fiscali a cui hai diritto, come spese mediche, interessi sul mutuo, spese scolastiche e molto altro. Il nostro CAF elabora il tuo 730 in modo preciso e puntuale, garantendoti il massimo rimborso possibile nel rispetto della normativa vigente."
      steps={[
        'Gather all income and expense documents from the previous year',
        'Book an appointment with our CAF operator',
        'Our expert reviews and compiles your 730 declaration',
        'Declaration is submitted electronically to the Revenue Agency',
        'Any refund is credited directly to your payslip or pension',
      ]}
      documents={[
        'Identity document and tax code',
        'CU (Certificazione Unica) from your employer or pension',
        'Medical expense receipts',
        'Mortgage interest statements',
        'School and university fee receipts',
        'Home renovation or energy efficiency invoices',
      ]}
    />
  )
}
