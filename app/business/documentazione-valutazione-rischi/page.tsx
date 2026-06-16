'use client'

export default function DocumentazioneValutazioneRischi() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">DVR – Documento di Valutazione dei Rischi</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>DVR (Documento di Valutazione dei Rischi)</strong> è obbligatorio per tutte le aziende con almeno un dipendente ai sensi del D.Lgs. 81/2008. Deve essere redatto dal datore di lavoro con il supporto del RSPP e del medico competente.</p>
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA vi assiste nella redazione del DVR e nella nomina delle figure obbligatorie per la sicurezza aziendale.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Figure obbligatorie</h2>
        <ul className="space-y-2">
          {['RSPP (Responsabile del Servizio di Prevenzione e Protezione)', 'RLSS (Rappresentante dei Lavoratori per la Sicurezza)', 'Medico Competente per la sorveglianza sanitaria', 'Addetti al primo soccorso e antincendio', 'Redazione e aggiornamento del DVR'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>La sicurezza sul lavoro non è un optional. Contattaci per mettere in regola la tua azienda.</p>
      </div>
    </div>
  )
}
