'use client'

export default function DomandaDiPensione() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Domanda di Pensione</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La <strong>Domanda di Pensione</strong> è il passo fondamentale per accedere al trattamento pensionistico. Esistono diverse tipologie di pensione, ognuna con requisiti specifici di età e contribuzione.</p>
        <p>Il nostro patronato vi assiste nella scelta del tipo di pensione più vantaggioso e nella presentazione della domanda all'INPS nei tempi corretti.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Tipologie di pensione</h2>
        <ul className="space-y-2">
          {['Pensione di vecchiaia (67 anni + 20 anni di contributi)', 'Pensione anticipata (42 anni e 10 mesi di contributi)', 'Quota 103 e altre uscite anticipate', 'Pensione di reversibilità per superstiti', 'Pensione di inabilità'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Stai per andare in pensione? Vieni da noi per pianificare al meglio il tuo futuro previdenziale.</p>
      </div>
    </div>
  )
}
