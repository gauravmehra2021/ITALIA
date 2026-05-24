'use client'

export default function Cud() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">CUD – Certificazione Unica</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La <strong>Certificazione Unica (CU)</strong>, precedentemente nota come CUD, è il documento che certifica i redditi da lavoro dipendente, pensione e assimilati percepiti nell'anno precedente.</p>
        <p>Il nostro CAF vi assiste nel recupero e nella lettura della Certificazione Unica, necessaria per la compilazione del modello 730.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Utilizzi della CU</h2>
        <ul className="space-y-2">
          {['Compilazione del modello 730', 'Richiesta di prestazioni sociali agevolate', 'Verifica delle ritenute fiscali operate dal datore di lavoro', 'Documentazione per pratiche bancarie e finanziarie', 'Calcolo dell\'ISEE'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai bisogno della tua CU? Vieni da noi e ti aiutiamo a recuperarla e interpretarla.</p>
      </div>
    </div>
  )
}
