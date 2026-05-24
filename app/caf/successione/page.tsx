'use client'

export default function Successione() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Dichiarazione di Successione</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La <strong>Dichiarazione di Successione</strong> deve essere presentata all'Agenzia delle Entrate entro 12 mesi dalla data del decesso. È obbligatoria quando l'eredità comprende beni immobili o il valore supera determinate soglie.</p>
        <p>Il nostro CAF vi assiste nella raccolta dei documenti necessari e nella presentazione telematica della dichiarazione di successione.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Il nostro supporto</h2>
        <ul className="space-y-2">
          {['Raccolta e verifica di tutta la documentazione necessaria', 'Calcolo delle imposte di successione dovute', 'Presentazione telematica all\'Agenzia delle Entrate', 'Assistenza per il voltura catastale degli immobili', 'Consulenza su esenzioni per coniuge e figli'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai perso un familiare? Lascia a noi la gestione burocratica della successione.</p>
      </div>
    </div>
  )
}
