'use client'

export default function Modello730() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">730 – Dichiarazione dei Redditi</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>Modello 730</strong> è la dichiarazione dei redditi destinata ai lavoratori dipendenti e pensionati. Presentarlo correttamente permette di recuperare le detrazioni fiscali a cui hai diritto.</p>
        <p>Il nostro CAF elabora il tuo 730 in modo preciso e puntuale, garantendoti il massimo rimborso possibile nel rispetto della normativa vigente.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Detrazioni che gestiamo</h2>
        <ul className="space-y-2">
          {['Spese mediche e sanitarie', 'Interessi sul mutuo prima casa', 'Spese per istruzione e università', 'Ristrutturazioni edilizie e bonus casa', 'Spese per figli a carico e familiari'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Non perdere le detrazioni che ti spettano. Affidati al nostro CAF per una dichiarazione dei redditi senza errori.</p>
      </div>
    </div>
  )
}
