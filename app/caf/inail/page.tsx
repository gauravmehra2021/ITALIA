'use client'

export default function Inail() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">INAIL – Assicurazione contro gli Infortuni</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>INAIL (Istituto Nazionale Assicurazione Infortuni sul Lavoro)</strong> gestisce l'assicurazione obbligatoria contro gli infortuni sul lavoro e le malattie professionali.</p>
        <p>Il nostro patronato vi assiste nella presentazione delle domande di indennizzo e nella gestione delle pratiche INAIL.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Prestazioni INAIL</h2>
        <ul className="space-y-2">
          {['Indennizzo per infortunio sul lavoro', 'Rendita per inabilità permanente', 'Assegno per assistenza personale continuativa', 'Prestazioni per malattie professionali', 'Assistenza per ricorsi e controversie'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai subito un infortunio sul lavoro? Contattaci subito per tutelare i tuoi diritti.</p>
      </div>
    </div>
  )
}
