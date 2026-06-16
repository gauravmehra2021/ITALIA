'use client'

export default function EVistoIndiano() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">E-Visto Indiano</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>E-Visto Indiano (eVisa)</strong> è il visto elettronico che permette ai cittadini stranieri di visitare l'India per turismo, affari o cure mediche senza dover recarsi fisicamente al consolato.</p>
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA vi assiste nella compilazione della domanda online e nella preparazione dei documenti necessari per ottenere l'eVisa in modo rapido e senza errori.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Tipologie di eVisa</h2>
        <ul className="space-y-2">
          {['e-Tourist Visa (turismo, brevi soggiorni)', 'e-Business Visa (affari e commercio)', 'e-Medical Visa (cure mediche in India)', 'e-Conference Visa (partecipazione a conferenze)', 'Assistenza per visti consolari tradizionali'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Stai pianificando un viaggio in India? Contattaci per ottenere il tuo eVisa senza stress.</p>
      </div>
    </div>
  )
}
