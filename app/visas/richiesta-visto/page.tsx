'use client'

export default function RichiestaVisto() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Richiesta Visto Internazionale</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>AMEI vi assiste nella <strong>richiesta di visti internazionali</strong> per qualsiasi paese del mondo. Che si tratti di un visto turistico, di lavoro, di studio o di ricongiungimento familiare, il nostro team conosce le procedure consolari di numerosi paesi.</p>
        <p>Vi guidiamo nella preparazione della documentazione corretta, riducendo al minimo il rischio di rifiuto della domanda di visto.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Visti che gestiamo</h2>
        <ul className="space-y-2">
          {['Visti turistici per USA, Canada, Australia, UK e altri paesi', 'Visti di lavoro e trasferimento aziendale', 'Visti per studio e programmi di scambio', 'Visti per ricongiungimento familiare all\'estero', 'Visti per cure mediche e trattamenti sanitari'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Stai pianificando un viaggio o un trasferimento all'estero? Contattaci per la tua richiesta di visto.</p>
      </div>
    </div>
  )
}
