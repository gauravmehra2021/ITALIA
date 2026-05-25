import CafDetailPage from '../CafDetailPage'

export default function Successione() {
  return (
    <CafDetailPage
      icon="⚖️"
      title="Dichiarazione di Successione"
      subtitle="Inheritance declaration and estate transfer procedures — we handle the complex paperwork on your behalf."
      description="La dichiarazione di successione deve essere presentata all'Agenzia delle Entrate entro 12 mesi dalla data del decesso. È obbligatoria quando l'eredità comprende beni immobili o quando il valore supera determinate soglie. Il nostro CAF vi assiste nella raccolta dei documenti, nel calcolo delle imposte di successione e nella presentazione della dichiarazione."
      steps={[
        'Collect all documents relating to the deceased and the estate',
        'Our operator identifies all assets and liabilities of the estate',
        'We calculate the applicable inheritance taxes',
        'Prepare and submit the succession declaration to the Revenue Agency',
        'Handle property transfers and cadastral updates',
      ]}
      documents={[
        'Death certificate of the deceased',
        'Identity documents and tax codes of all heirs',
        'Will or family status certificate',
        'Property deeds and cadastral data',
        'Bank account statements of the deceased',
        'Vehicle registration documents',
      ]}
    />
  )
}
