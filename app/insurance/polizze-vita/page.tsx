'use client'

export default function PolizzeVita() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Polizze Vita</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Le <strong>polizze vita</strong> sono strumenti assicurativi che proteggono il futuro economico della tua famiglia in caso di eventi imprevisti, garantendo un capitale o una rendita ai beneficiari designati.</p>
        <p>AMEI ti aiuta a scegliere la polizza vita più adatta alle tue esigenze di protezione e risparmio.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Tipologie di polizze vita</h2>
        <ul className="space-y-2">
          {['Polizza caso morte (protezione per i familiari)', 'Polizza mista (risparmio + protezione)', 'Polizza caso vita (rendita integrativa pensionistica)', 'Polizza infortuni e invalidità permanente', 'Unit linked e index linked (investimento assicurativo)'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Proteggi il futuro della tua famiglia. Vieni da noi per una consulenza gratuita sulle polizze vita.</p>
      </div>
    </div>
  )
}
