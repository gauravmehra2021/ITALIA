import CafDetailPage from '../CafDetailPage'

export default function DisoccupazioneAgricola() {
  return (
    <CafDetailPage
      icon="🌾"
      title="Disoccupazione Agricola"
      subtitle="Agricultural unemployment benefit application — we ensure seasonal agricultural workers receive their entitled benefits."
      description="La disoccupazione agricola è un'indennità riconosciuta ai lavoratori agricoli a tempo determinato (OTD) che hanno lavorato in agricoltura nell'anno precedente. La domanda deve essere presentata all'INPS entro il 31 marzo dell'anno successivo a quello in cui si è verificata la disoccupazione. Il nostro Patronato vi assiste nella presentazione della domanda nei termini previsti."
      steps={[
        'Verify your agricultural work days in the previous year',
        'Collect all required documents',
        'Our operator submits the application to INPS before March 31st',
        'INPS verifies the agricultural work days with employers',
        'Benefit is paid directly to your bank account',
      ]}
      documents={[
        'Identity document and tax code',
        'Agricultural work certificates from employers',
        'INPS contribution statement',
        'IBAN bank account details',
        'Residence permit (if non-EU worker)',
      ]}
    />
  )
}
