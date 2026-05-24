'use client'

export default function AperturaAttivita() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Apertura Attività</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Aprire un'<strong>attività in Italia</strong> richiede una serie di adempimenti burocratici, fiscali e amministrativi. AMEI vi guida in ogni passo, dalla scelta della forma giuridica fino all'avvio operativo.</p>
        <p>Il nostro team di consulenti aziendali ha esperienza pluriennale nell'assistenza a imprenditori italiani e stranieri che desiderano avviare un'attività in Italia.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">I nostri servizi</h2>
        <ul className="space-y-2">
          {['Scelta della forma giuridica (ditta individuale, SRL, SNC, ecc.)', 'Apertura della Partita IVA e iscrizione alla Camera di Commercio', 'Presentazione della SCIA o DIA al Comune', 'Consulenza su regimi fiscali agevolati', 'Assistenza per licenze e autorizzazioni specifiche'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai un'idea imprenditoriale? Trasformala in realtà con il supporto di AI.</p>
      </div>
    </div>
  )
}
