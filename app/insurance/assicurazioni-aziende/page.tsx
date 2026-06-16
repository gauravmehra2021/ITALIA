'use client'

export default function AssicurazioniAziende() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Assicurazioni per Aziende</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Le <strong>assicurazioni aziendali</strong> proteggono la tua impresa dai rischi operativi, garantendo continuità aziendale e tutela del patrimonio in caso di eventi imprevisti.</p>
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA offre consulenza assicurativa personalizzata per aziende di ogni dimensione, dalla piccola impresa alla società strutturata.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Polizze aziendali</h2>
        <ul className="space-y-2">
          {['RC Professionale e RC Prodotti', 'Polizza multirischio per uffici e negozi', 'Assicurazione per dipendenti (infortuni e malattia)', 'Polizza D&O (Directors and Officers)', 'Cyber risk e protezione dati aziendali'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Proteggi la tua azienda con le soluzioni assicurative più adatte. Contattaci per una consulenza.</p>
      </div>
    </div>
  )
}
