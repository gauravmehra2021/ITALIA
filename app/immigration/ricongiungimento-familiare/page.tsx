'use client'

export default function RicongiungimentoFamiliare() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Ricongiungimento Familiare
      </h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>Ricongiungimento Familiare</strong> permette ai cittadini stranieri regolarmente soggiornanti in Italia di far venire nel nostro Paese i propri familiari.</p>
        <p>AMEI vi guida attraverso l'intero processo, dalla verifica dei requisiti necessari fino all'ottenimento del visto di ingresso per i vostri cari.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">I nostri servizi</h2>
        <ul className="space-y-2">
          {['Verifica dei requisiti di reddito e alloggio', 'Assistenza nella compilazione della domanda di nulla osta', 'Supporto per la raccolta dei documenti dei familiari all\'estero', 'Accompagnamento nelle pratiche consolari', 'Assistenza per il permesso di soggiorno per motivi familiari'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Riunire la famiglia è un diritto. Noi siamo al vostro fianco per renderlo realtà nel minor tempo possibile.</p>
      </div>
    </div>
  )
}
