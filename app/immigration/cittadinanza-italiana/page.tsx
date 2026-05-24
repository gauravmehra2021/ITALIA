'use client'

export default function CittadinanzaItaliana() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Cittadinanza Italia
      </h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Ottenere la <strong>Cittadinanza Italiana</strong> è il coronamento di un percorso di integrazione nel nostro Paese. Esistono diverse vie per acquisirla: per residenza, per matrimonio, per discendenza o per naturalizzazione.</p>
        <p>Il nostro team specializzato vi assiste in tu tto l'ite r burocratico, dalla verifica dei requisiti fino alla cerimonia di giuramento.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Percorsi disponibili</h2>
        <ul className="space-y-2">
          {['Cittadinanza per residenza (10 anni per extracomunitari)', 'Cittadinanza per matrimonio con cittadino italiano', 'Cittadinanza per discendenza (iure sanguinis)', 'Verifica e raccolta documentazione', 'Monitoraggio della pratica e supporto fino al giuramento'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Diventare cittadino italiano è un traguardo importante. Lascia che AMEI ti accompagni in questo percorso.</p>
      </div>
    </div>
  )
}
