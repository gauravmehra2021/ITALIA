import CafDetailPage from '../CafDetailPage'

export default function Imu() {
  return (
    <CafDetailPage
      icon="🏠"
      title="IMU – Imposta Municipale"
      subtitle="Municipal property tax calculation and payment assistance — avoid errors and penalties with our expert support."
      description="L'IMU (Imposta Municipale Unica) è la tassa comunale sugli immobili. Si applica a seconde case, immobili commerciali e terreni agricoli. Il calcolo corretto dell'IMU richiede la conoscenza delle aliquote comunali aggiornate e delle eventuali esenzioni. Il nostro CAF vi assiste nel calcolo preciso dell'importo dovuto e nella compilazione del modello F24 per il pagamento."
      steps={[
        'Provide details of all properties subject to IMU',
        'Our operator retrieves the current municipal tax rates',
        'We calculate the exact amount due for each property',
        'Prepare the F24 payment form for June and December deadlines',
        'Submit payment and keep records for future reference',
      ]}
      documents={[
        'Identity document and tax code',
        'Property deeds or cadastral data',
        'Previous year IMU payment receipts',
        'Rental contracts (if property is rented)',
        'Disability or exemption certificates (if applicable)',
      ]}
    />
  )
}
