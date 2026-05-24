'use client'

export default function AttivazioneSpid() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Attivazione SPID</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Lo <strong>SPID (Sistema Pubblico di Identità Digitale)</strong> è l'identità digitale unica che permette di accedere a tutti i servizi online della Pubblica Amministrazione italiana con un unico username e password.</p>
        <p>AMEI vi assiste nell'attivazione dello SPID in modo semplice e veloce, direttamente presso il nostro sportello.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">A cosa serve lo SPID</h2>
        <ul className="space-y-2">
          {['Accesso al portale INPS per pensioni e prestazioni', 'Dichiarazione dei redditi precompilata (Agenzia delle Entrate)', 'Servizi del Comune e della Regione', 'Fascicolo sanitario elettronico', 'Bonus e agevolazioni governative'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Non hai ancora lo SPID? Vieni da noi con un documento d'identità e lo attiviamo subito.</p>
      </div>
    </div>
  )
}
