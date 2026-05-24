'use client'

export default function CompilazioneDocumenti() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Compilazione Documenti
      </h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La <strong>Compilazione Documenti</strong> è un servizio fondamentale per chi deve affrontare pratiche burocratiche in Italia senza una piena padronanza della lingua o del sistema amministrativo italiano.</p>
        <p>I nostri operatori esperti vi assistono nella corretta compilazione di moduli, domande e istanze, evitando errori che potrebbero rallentare o bloccare le vostre pratiche.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Documenti che compiliamo</h2>
        <ul className="space-y-2">
          {['Moduli per permesso di soggiorno e rinnovo', 'Domande per ricongiungimento familiare', 'Istanze per la cittadinanza italiana', 'Moduli per prestazioni sociali e previdenziali', 'Qualsiasi altro documento amministrativo'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Non lasciare che la burocrazia ti fermi. Vieni da noi e pensiamo a tutto noi.</p>
      </div>
    </div>
  )
}
