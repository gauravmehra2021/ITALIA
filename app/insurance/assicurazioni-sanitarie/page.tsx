'use client'

export default function AssicurazioniSanitarie() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">Assicurazioni Sanitarie</h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Le <strong>assicurazioni sanitarie</strong> integrano il Servizio Sanitario Nazionale, garantendo accesso rapido a visite specialistiche, esami diagnostici e ricoveri in strutture private senza lunghe attese.</p>
        <p>SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA collabora con le principali compagnie assicurative per offrirti la polizza sanitaria più adatta alle tue esigenze e al tuo budget.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Coperture disponibili</h2>
        <ul className="space-y-2">
          {['Visite specialistiche e accertamenti diagnostici', 'Ricovero ospedaliero in strutture convenzionate', 'Interventi chirurgici programmati e d\'urgenza', 'Cure dentistiche e oculistiche', 'Polizze individuali, familiari e aziendali'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span><span>{item}</span>
            </li>
          ))}
        </ul>
        <p>La tua salute è la cosa più importante. Contattaci per trovare la polizza sanitaria giusta per te.</p>
      </div>
    </div>
  )
}
