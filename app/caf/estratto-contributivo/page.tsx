'use client'

export default function EstrattoContributivo() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Estratto Contributivo</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>Estratto Contributivo</strong> è il documento che riepiloga tutta la storia contributiva di un lavoratore presso l'INPS. È fondamentale per pianificare il pensionamento e verificare i contributi versati.</p>
        <p>Il nostro patronato vi aiuta a richiedere e interpretare l'estratto contributivo, identificando eventuali periodi mancanti o errori da correggere.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">A cosa serve</h2>
        <ul className="space-y-2">
          {['Pianificazione del pensionamento', 'Verifica dei contributi versati da tutti i datori di lavoro', 'Identificazione di periodi contributivi mancanti', 'Richiesta di ricongiunzione o totalizzazione contributiva', 'Calcolo della pensione futura'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Vuoi sapere a che punto sei con i contributi? Vieni da noi e analizziamo insieme la tua situazione previdenziale.</p>
      </div>
    </div>
  )
}
