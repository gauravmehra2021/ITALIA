'use client'

export default function Interprete() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Servizio Interprete</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il nostro <strong>servizio di interpretariato</strong> è disponibile per assistere i cittadini stranieri in situazioni in cui la barriera linguistica può rappresentare un ostacolo: uffici pubblici, ospedali, tribunali, questure e molto altro.</p>
        <p>I nostri interpreti qualificati garantiscono una comunicazione precisa e professionale nelle principali lingue parlate dalla nostra comunità.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Dove operiamo</h2>
        <ul className="space-y-2">
          {['Questure e prefetture (pratiche di immigrazione)', 'Ospedali e strutture sanitarie', 'Tribunali e udienze legali', 'Uffici comunali e anagrafe', 'Colloqui di lavoro e riunioni aziendali'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai bisogno di un interprete? Contattaci in anticipo per prenotare il servizio nella tua lingua.</p>
      </div>
    </div>
  )
}
