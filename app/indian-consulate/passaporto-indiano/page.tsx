'use client'

export default function PassaportoIndiano() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Passaporto Indiano</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA assiste i cittadini indiani residenti in Italia nelle pratiche per il <strong>rilascio e il rinnovo del Passaporto Indiano</strong> tramite il Consolato Generale d'India.</p>
        <p>Il nostro team conosce perfettamente le procedure consolari e vi guida nella preparazione di tutta la documentazione necessaria.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">I nostri servizi</h2>
        <ul className="space-y-2">
          {['Nuovo passaporto per adulti e minori', 'Rinnovo del passaporto scaduto', 'Passaporto in caso di smarrimento o furto', 'Aggiornamento dati (cambio indirizzo, stato civile)', 'Assistenza per la prenotazione dell\'appuntamento consolare'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai bisogno di rinnovare il passaporto indiano? Vieni da noi e gestiamo tutta la pratica per te.</p>
      </div>
    </div>
  )
}
