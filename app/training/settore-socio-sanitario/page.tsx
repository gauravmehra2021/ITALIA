'use client'

export default function SettoreSocioSanitario() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Settore Socio-Sanitario</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>settore socio-sanitario</strong> è uno dei più in crescita in Italia, con una forte domanda di personale qualificato. I nostri corsi preparano professionisti competenti e certificati per operare in questo ambito.</p>
        <p>Offriamo percorsi formativi completi per chi desidera lavorare come operatore socio-sanitario, assistente familiare o in strutture residenziali.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Percorsi formativi</h2>
        <ul className="space-y-2">
          {['Corso OSS (Operatore Socio-Sanitario) – 1000 ore', 'Assistente familiare per anziani e disabili', 'Operatore per l\'infanzia e asili nido', 'Primo soccorso e BLS-D', 'Aggiornamento professionale per operatori già qualificati'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Vuoi lavorare nel settore socio-sanitario? Inizia il tuo percorso formativo con noi.</p>
      </div>
    </div>
  )
}
