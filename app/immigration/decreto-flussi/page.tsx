'use client'

export default function DecretoFlussi() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Decreto Flussi
      </h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>Decreto Flussi</strong> è il provvedimento annuale con cui il Governo italiano stabilisce le quote di lavoratori stranieri non comunitari ammessi in Italia per motivi di lavoro.</p>
        <p>AMEI vi assiste nella presentazione della domanda nei tempi previsti, massimizzando le possibilità di successo grazie alla nostra esperienza pluriennale nel settore.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Come possiamo aiutarti</h2>
        <ul className="space-y-2">
          {['Monitoraggio delle aperture dei click day', 'Preparazione anticipata di tutta la documentazione', 'Invio telematico della domanda al click day', 'Assistenza post-domanda fino al rilascio del nulla osta', 'Supporto per il visto di ingresso e il permesso di soggiorno'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Non perdere l'opportunità del Decreto Flussi. Contattaci per essere pronto al prossimo click day.</p>
      </div>
    </div>
  )
}
