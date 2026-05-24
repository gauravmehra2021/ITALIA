'use client'

export default function Invalidita() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Invalidità Civile</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il riconoscimento dell'<strong>Invalidità Civile</strong> permette di accedere a una serie di benefici economici e agevolazioni previsti dallo Stato italiano per le persone con ridotta capacità lavorativa.</p>
        <p>Il nostro patronato vi assiste in tutto l'iter: dalla domanda all'INPS, alla visita medica, fino al ricorso in caso di esito negativo.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Benefici ottenibili</h2>
        <ul className="space-y-2">
          {['Pensione di invalidità civile', 'Assegno mensile di assistenza', 'Indennità di accompagnamento', 'Agevolazioni fiscali e tariffarie', 'Collocamento mirato al lavoro (Legge 68/99)'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Contattaci per una valutazione gratuita della tua situazione e per avviare la pratica di invalidità.</p>
      </div>
    </div>
  )
}
