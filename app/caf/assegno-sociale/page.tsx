'use client'

export default function AssegnoSociale() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Assegno Sociale</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>Assegno Sociale</strong> è una prestazione economica erogata dall'INPS a favore dei cittadini che hanno compiuto 67 anni e si trovano in condizioni economiche disagiate.</p>
        <p>Il nostro patronato vi assiste nella verifica dei requisiti e nella presentazione della domanda all'INPS.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Requisiti principali</h2>
        <ul className="space-y-2">
          {['Età minima di 67 anni', 'Residenza in Italia da almeno 10 anni continuativi', 'Reddito personale o familiare entro i limiti stabiliti', 'Cittadinanza italiana, UE o permesso di soggiorno UE di lungo periodo', 'Assenza di altri trattamenti pensionistici superiori alla soglia'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Pensi di avere diritto all'assegno sociale? Vieni da noi per una verifica gratuita.</p>
      </div>
    </div>
  )
}
