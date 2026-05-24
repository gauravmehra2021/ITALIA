'use client'

export default function AssicurazioneCasaEMacchina() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Assicurazione Casa e Macchina</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Proteggere la tua <strong>casa e la tua auto</strong> è fondamentale. AMEI ti offre le migliori soluzioni assicurative al prezzo più competitivo, confrontando le offerte delle principali compagnie del mercato.</p>
        <p>Gestiamo sia le polizze per la casa (incendio, furto, RC) che le polizze auto (RC auto, kasko, furto e incendio).</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Le nostre polizze</h2>
        <ul className="space-y-2">
          {['RC Auto obbligatoria al miglior prezzo', 'Polizza kasko e furto/incendio per l\'auto', 'Assicurazione casa contro incendio e furto', 'RC Capofamiglia per danni a terzi', 'Polizze per moto, scooter e veicoli commerciali'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Vuoi risparmiare sull'assicurazione? Vieni da noi e confrontiamo le migliori offerte per te.</p>
      </div>
    </div>
  )
}
