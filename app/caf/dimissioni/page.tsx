'use client'

export default function Dimissioni() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Dimissioni Volontarie</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Le <strong>Dimissioni Volontarie</strong> devono essere presentate obbligatoriamente in modalità telematica tramite il portale del Ministero del Lavoro. La procedura è obbligatoria per tutti i lavoratori dipendenti del settore privato.</p>
        <p>Il nostro patronato vi assiste nella compilazione e nell'invio telematico delle dimissioni, garantendo la correttezza della procedura.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Il nostro supporto</h2>
        <ul className="space-y-2">
          {['Compilazione del modulo telematico di dimissioni', 'Invio tramite portale ministeriale', 'Consulenza sui diritti spettanti (TFR, ferie residue)', 'Assistenza per la NASpI in caso di dimissioni per giusta causa', 'Supporto per la revoca delle dimissioni entro 7 giorni'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Stai lasciando il lavoro? Vieni da noi per gestire le dimissioni in modo corretto e sicuro.</p>
      </div>
    </div>
  )
}
