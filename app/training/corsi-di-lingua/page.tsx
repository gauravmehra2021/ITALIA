'use client'

export default function CorsiDiLingua() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Corsi di Lingua</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>I nostri <strong>Corsi di Lingua Italiana</strong> sono pensati per stranieri che desiderano imparare o migliorare l'italiano, sia per integrarsi meglio nella vita quotidiana che per soddisfare i requisiti burocratici richiesti.</p>
        <p>Offriamo corsi a tutti i livelli, dal livello base A1 fino al livello avanzato B2, con insegnanti qualificati ed esperti nell'insegnamento dell'italiano come lingua straniera.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">I nostri corsi</h2>
        <ul className="space-y-2">
          {['Italiano per stranieri (livelli A1, A2, B1, B2)', 'Preparazione al test di lingua per il permesso di soggiorno', 'Italiano per il lavoro e la vita quotidiana', 'Corsi intensivi e serali', 'Lezioni individuali e di gruppo'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Impara l'italiano con noi e apri le porte a nuove opportunità in Italia.</p>
      </div>
    </div>
  )
}
