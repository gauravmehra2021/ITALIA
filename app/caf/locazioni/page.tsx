'use client'

export default function Locazioni() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Locazioni – Contratti di Affitto</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La gestione dei <strong>contratti di locazione</strong> richiede adempimenti fiscali precisi: registrazione, proroga, risoluzione e cedolare secca. SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA vi assiste in tutte le fasi.</p>
        <p>Il nostro team vi guida nella scelta del regime fiscale più conveniente e gestisce tutti gli adempimenti burocratici legati all'affitto.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Servizi per le locazioni</h2>
        <ul className="space-y-2">
          {['Registrazione del contratto di affitto all\'Agenzia delle Entrate', 'Opzione per la cedolare secca', 'Proroga e rinnovo del contratto', 'Risoluzione anticipata del contratto', 'Assistenza per contratti a canone concordato'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Affitti o sei in affitto? Gestiamo noi tutti gli adempimenti fiscali del tuo contratto.</p>
      </div>
    </div>
  )
}
