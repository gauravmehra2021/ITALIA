'use client'

export default function Red() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">RED – Redditi da Dichiarare</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il modello <strong>RED</strong> è la dichiarazione reddituale richiesta dall'INPS ai pensionati per verificare il diritto a prestazioni collegate al reddito, come le pensioni di invalidità civile e le integrazioni al minimo.</p>
        <p>Il nostro CAF vi assiste nella compilazione e nell'invio del modello RED nei termini previsti, evitando la sospensione delle prestazioni.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Prestazioni soggette a RED</h2>
        <ul className="space-y-2">
          {['Pensione di invalidità civile', 'Assegno sociale', 'Integrazione al minimo della pensione', 'Maggiorazione sociale', 'Pensione di guerra'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai ricevuto la richiesta RED dall'INPS? Vieni subito da noi per non rischiare la sospensione della tua pensione.</p>
      </div>
    </div>
  )
}
