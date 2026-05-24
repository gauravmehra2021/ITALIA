'use client'

export default function AltriServiziConsolato() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Altri Servizi Consolato Indiano</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Oltre ai servizi principali, AMEI assiste i cittadini indiani in Italia per una vasta gamma di <strong>pratiche consolari</strong> che richiedono l'intervento del Consolato Generale d'India.</p>
        <p>Il nostro team multilingue (italiano, inglese, hindi, punjabi) è a vostra disposizione per qualsiasi necessità consolare.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Servizi disponibili</h2>
        <ul className="space-y-2">
          {['Attestazione di documenti indiani per uso in Italia', 'Certificati di nascita, matrimonio e morte per uso estero', 'Procura notarile per atti in India', 'Rinuncia alla cittadinanza indiana', 'Assistenza per pratiche di stato civile'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai bisogno di assistenza per pratiche consolari indiane? Siamo il tuo punto di riferimento in Italia.</p>
      </div>
    </div>
  )
}
