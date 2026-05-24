'use client'

export default function Naspi() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">NASpI – Indennità di Disoccupazione</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>La <strong>NASpI (Nuova Assicurazione Sociale per l'Impiego)</strong> è l'indennità mensile di disoccupazione riconosciuta ai lavoratori dipendenti che hanno perso involontariamente il lavoro.</p>
        <p>Il nostro patronato vi assiste nella presentazione della domanda NASpI all'INPS, verificando i requisiti e massimizzando l'importo spettante.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Requisiti e assistenza</h2>
        <ul className="space-y-2">
          {['Verifica dei requisiti contributivi (13 settimane negli ultimi 4 anni)', 'Presentazione della domanda entro 68 giorni dalla cessazione', 'Calcolo dell\'importo spettante', 'Assistenza in caso di sospensione o decadenza', 'Supporto per la dichiarazione di disponibilità al lavoro'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai perso il lavoro? Contattaci subito per non perdere il diritto alla NASpI.</p>
      </div>
    </div>
  )
}
