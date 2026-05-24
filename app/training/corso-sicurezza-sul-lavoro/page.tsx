'use client'

export default function CorsoSicurezzaSulLavoro() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Corso Sicurezza sul Lavoro</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>Corso di Sicurezza sul Lavoro</strong> è obbligatorio per tutti i lavoratori ai sensi del D.Lgs. 81/2008. La formazione sulla sicurezza è un diritto e un dovere di ogni lavoratore e datore di lavoro.</p>
        <p>Offriamo corsi di formazione sulla sicurezza per lavoratori, preposti e dirigenti, con attestati riconosciuti a livello nazionale.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Corsi disponibili</h2>
        <ul className="space-y-2">
          {['Formazione generale lavoratori (4 ore)', 'Formazione specifica per rischio basso, medio e alto', 'Corso per preposti (8 ore)', 'Corso per dirigenti (16 ore)', 'Aggiornamento quinquennale obbligatorio'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Sei in regola con la formazione sulla sicurezza? Contattaci per organizzare il corso per te o la tua azienda.</p>
      </div>
    </div>
  )
}
