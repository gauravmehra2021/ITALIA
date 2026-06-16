'use client'

export default function CartaOci() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Carta OCI – Overseas Citizen of India</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La <strong>Carta OCI (Overseas Citizen of India)</strong> è un documento che garantisce ai cittadini di origine indiana residenti all'estero una serie di diritti e privilegi in India, incluso il visto a vita per visitare il paese.</p>
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA vi assiste nella richiesta della carta OCI e nel suo rinnovo, gestendo tutta la documentazione richiesta dal Consolato Indiano.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Vantaggi della carta OCI</h2>
        <ul className="space-y-2">
          {['Visto a vita per visitare l\'India senza restrizioni', 'Parità di trattamento con i cittadini indiani per molte attività', 'Possibilità di aprire conti bancari e investire in India', 'Accesso a tariffe nazionali per musei e monumenti', 'Nessun obbligo di registrazione alla polizia per soggiorni prolungati'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Sei di origine indiana? La carta OCI ti connette alle tue radici. Contattaci per richiederla.</p>
      </div>
    </div>
  )
}
