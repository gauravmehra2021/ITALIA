'use client'

export default function Traduzioni() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Traduzioni</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA offre servizi di <strong>traduzione professionale</strong> di documenti ufficiali e personali in diverse lingue. Le nostre traduzioni sono accurate, rapide e, dove richiesto, giurate presso il Tribunale.</p>
        <p>Disponiamo di traduttori qualificati per le principali lingue parlate dalla nostra comunità: italiano, inglese, hindi, punjabi, urdu, arabo e altre.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Documenti che traduciamo</h2>
        <ul className="space-y-2">
          {['Documenti di identità (passaporto, carta d\'identità)', 'Certificati di nascita, matrimonio e morte', 'Diplomi, titoli di studio e certificati professionali', 'Contratti, atti notarili e documenti legali', 'Traduzioni giurate per uso ufficiale'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai bisogno di una traduzione? Vieni da noi con il tuo documento e lo traduciamo in tempi rapidi.</p>
      </div>
    </div>
  )
}
