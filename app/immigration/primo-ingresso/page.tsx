'use client'

export default function PrimoIngresso() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Primo Ingresso
      </h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>Primo Ingresso</strong> in Italia richiede una serie di adempimenti burocratici che possono risultare complessi per chi non conosce il sistema italiano.</p>
        <p>AMEI vi accompagna fin dal primo momento, aiutandovi a comprendere i requisiti e le procedure necessarie per entrare e soggiornare regolarmente in Italia.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Servizi per il primo ingresso</h2>
        <ul className="space-y-2">
          {['Consulenza sulla tipologia di visto più adatta', 'Assistenza nella preparazione dei documenti per il visto', 'Supporto per la dichiarazione di presenza o il permesso di soggiorno', 'Orientamento ai servizi del territorio', 'Assistenza per l\'iscrizione anagrafica'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Inizia il tuo percorso in Italia con il piede giusto. Siamo qui per guidarti in ogni passo.</p>
      </div>
    </div>
  )
}
