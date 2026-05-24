'use client'

export default function Imu() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">IMU – Imposta Municipale Unica</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>IMU (Imposta Municipale Unica)</strong> è un'imposta comunale sugli immobili. Si paga su tutti gli immobili posseduti, ad eccezione dell'abitazione principale (salvo le categorie catastali di lusso).</p>
        <p>Il nostro CAF calcola l'IMU dovuta e vi assiste nel pagamento tramite modello F24, rispettando le scadenze di giugno e dicembre.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">I nostri servizi IMU</h2>
        <ul className="space-y-2">
          {['Calcolo dell\'IMU per ogni tipologia di immobile', 'Verifica delle aliquote comunali aggiornate', 'Compilazione e pagamento tramite F24', 'Assistenza per ravvedimento operoso in caso di omesso pagamento', 'Consulenza su esenzioni e agevolazioni'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Non rischiare sanzioni per l'IMU. Affidati al nostro CAF per un calcolo preciso e puntuale.</p>
      </div>
    </div>
  )
}
