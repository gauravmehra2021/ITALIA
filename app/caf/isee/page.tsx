'use client'

export default function Isee() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">ISEE</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'<strong>ISEE (Indicatore della Situazione Economica Equivalente)</strong> è lo strumento che misura la situazione economica delle famiglie italiane ed è necessario per accedere a numerose prestazioni sociali agevolate.</p>
        <p>Il nostro CAF è autorizzato a raccogliere la documentazione e a presentare la Dichiarazione Sostitutiva Unica (DSU) per il calcolo dell'ISEE.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Quando serve l'ISEE</h2>
        <ul className="space-y-2">
          {['Bonus sociale per luce, gas e acqua', 'Reddito di cittadinanza e assegno unico', 'Agevolazioni per asili nido e mense scolastiche', 'Accesso a borse di studio universitarie', 'Riduzione tariffe per servizi comunali'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Vieni al nostro sportello con i tuoi documenti e calcoliamo il tuo ISEE gratuitamente.</p>
      </div>
    </div>
  )
}
