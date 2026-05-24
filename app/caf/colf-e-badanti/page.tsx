'use client'

export default function ColfEBadanti() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Colf e Badanti</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>L'assunzione di <strong>colf e badanti</strong> richiede specifici adempimenti burocratici e contributivi. Il datore di lavoro domestico ha obblighi precisi verso l'INPS e il lavoratore.</p>
        <p>AMEI vi assiste in tutte le pratiche legate al lavoro domestico, dalla stipula del contratto al pagamento dei contributi trimestrali.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">I nostri servizi</h2>
        <ul className="space-y-2">
          {['Stipula del contratto di lavoro domestico (CCNL)', 'Comunicazione di assunzione all\'INPS', 'Calcolo e pagamento dei contributi trimestrali', 'Gestione delle buste paga mensili', 'Assistenza per TFR, ferie e malattia'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Hai assunto una colf o una badante? Gestiamo noi tutti gli adempimenti burocratici e contributivi.</p>
      </div>
    </div>
  )
}
