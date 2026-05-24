'use client'

export default function Send() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">SEND – Servizio Notifiche Digitali</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p><strong>SEND (Servizio Notifiche Digitali)</strong> è la piattaforma nazionale per la notifica digitale degli atti della Pubblica Amministrazione. Permette di ricevere comunicazioni ufficiali direttamente in digitale, con valore legale.</p>
        <p>AMEI vi assiste nell'attivazione e nella gestione del servizio SEND, garantendovi di non perdere nessuna comunicazione importante dalla PA.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Vantaggi di SEND</h2>
        <ul className="space-y-2">
          {['Ricezione digitale di atti con valore legale', 'Eliminazione delle raccomandate cartacee', 'Accesso alle notifiche da qualsiasi dispositivo', 'Risparmio di tempo e costi postali', 'Archiviazione sicura di tutti gli atti ricevuti'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Vuoi ricevere le comunicazioni della PA in digitale? Vieni da noi per attivare SEND.</p>
      </div>
    </div>
  )
}
