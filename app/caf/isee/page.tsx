import CafDetailPage from '../CafDetailPage'

export default function Isee() {
  return (
    <CafDetailPage
      icon="📊"
      title="ISEE"
      subtitle="Indicatore della Situazione Economica Equivalente — required for accessing welfare benefits and social services."
      description="L'ISEE è lo strumento che misura la situazione economica delle famiglie italiane ed è necessario per accedere a numerose prestazioni sociali agevolate come bonus luce, gas, reddito di cittadinanza, assegno unico, agevolazioni scolastiche e molto altro. Il nostro CAF è autorizzato a raccogliere la documentazione e a presentare la Dichiarazione Sostitutiva Unica (DSU) per il calcolo dell'ISEE."
      steps={[
        'Book an appointment at our office or contact us online',
        'Bring all required documents for your household',
        'Our operator compiles and submits the DSU declaration',
        'Receive your ISEE certificate within a few days',
        'Use your ISEE to access the benefits you are entitled to',
      ]}
      documents={[
        'Identity document and tax code (all family members)',
        'Most recent CU or 730 income declaration',
        'Bank and postal account statements',
        'Property ownership documents (if applicable)',
        'Vehicle registration documents',
        'Disability certificates (if applicable)',
      ]}
    />
  )
}
