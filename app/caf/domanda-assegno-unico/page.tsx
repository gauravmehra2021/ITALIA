'use client'

export default function DomandaAssegnoUnico() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Assegno Unico Universale</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>Assegno Unico Universale</strong> è un sostegno economico mensile riconosciuto alle famiglie per ogni figlio a carico fino a 21 anni (senza limiti di età per i figli disabili).</p>
        <p>Il nostro CAF vi assiste nella presentazione della domanda all'INPS, calcolando l'importo spettante in base all'ISEE familiare.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Chi può richiederlo</h2>
        <ul className="space-y-2">
          {['Lavoratori dipendenti e autonomi', 'Pensionati', 'Disoccupati', 'Cittadini italiani, UE e stranieri con permesso di soggiorno', 'Famiglie con figli a carico fino a 21 anni'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Vieni al nostro sportello per verificare il tuo diritto all'assegno unico e presentare la domanda.</p>
      </div>
    </div>
  )
}
