import CafDetailPage from '../CafDetailPage'

export default function AttivazioneSpid() {
  return (
    <CafDetailPage
      icon="🔐"
      title="Attivazione SPID"
      subtitle="Digital identity activation for Italian online public services — quick, secure, and fully assisted."
      description="Lo SPID (Sistema Pubblico di Identità Digitale) è l'identità digitale che permette di accedere a tutti i servizi online della Pubblica Amministrazione italiana, come INPS, Agenzia delle Entrate, Fascicolo Sanitario e molto altro. Il nostro team vi assiste nell'attivazione dello SPID in modo semplice e veloce, anche per chi non ha dimestichezza con la tecnologia."
      steps={[
        'Choose your identity provider (we recommend the most suitable one)',
        'Bring your documents to our office for identity verification',
        'Our operator completes the registration process with you',
        'Receive your SPID credentials via email and SMS',
        'Start using SPID to access all Italian public services online',
      ]}
      documents={[
        'Valid identity document (ID card or passport)',
        'Tax code (codice fiscale)',
        'Active email address',
        'Active mobile phone number',
        'Italian phone number for SMS verification',
      ]}
    />
  )
}
