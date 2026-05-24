'use client'

export default function DisoccupazioneAgricola() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Disoccupazione Agricola</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>indennità di disoccupazione agricola</strong> è una prestazione INPS riconosciuta agli operai agricoli a tempo determinato e indeterminato che hanno lavorato in agricoltura nell'anno precedente.</p>
        <p>Il nostro patronato vi assiste nella presentazione della domanda entro il 31 marzo dell'anno successivo a quello di riferimento.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Chi può richiederla</h2>
        <ul className="space-y-2">
          {['Operai agricoli a tempo determinato (OTD)', 'Operai agricoli a tempo indeterminato (OTI) in caso di sospensione', 'Lavoratori con almeno 2 giornate di lavoro agricolo nell\'anno', 'Iscritti negli elenchi nominativi dei lavoratori agricoli', 'Lavoratori con contribuzione agricola nell\'anno di riferimento'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Lavori in agricoltura? Vieni da noi prima del 31 marzo per richiedere la tua indennità.</p>
      </div>
    </div>
  )
}
