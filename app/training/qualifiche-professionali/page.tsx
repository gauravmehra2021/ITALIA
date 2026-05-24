'use client'

export default function QualificheProfessionali() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Qualifiche Professionali</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>I nostri corsi di <strong>Qualifica Professionale</strong> permettono di acquisire competenze certificate e spendibili nel mercato del lavoro italiano, aprendo nuove opportunità di impiego.</p>
        <p>Collaboriamo con enti di formazione accreditati per offrire percorsi formativi riconosciuti a livello nazionale e regionale.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Qualifiche disponibili</h2>
        <ul className="space-y-2">
          {['Operatore socio-sanitario (OSS)', 'Addetto alla ristorazione e alla cucina', 'Operatore edile e impiantistico', 'Addetto alla logistica e magazzino', 'Operatore informatico e digitale'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Investi nella tua formazione professionale. Contattaci per scoprire i corsi disponibili.</p>
      </div>
    </div>
  )
}
