'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function PermessoDiSoggiorno() {
  const { t } = useLanguage()
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Permesso di Soggiorno
      </h1>
      <div className="space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>Il <strong>Permesso di Soggiorno</strong> è il documento obbligatorio per tutti i cittadini extracomunitari che intendono soggiornare in Italia per un periodo superiore a 90 giorni.</p>
        <p>Il nostro team di esperti vi assiste in ogni fase della procedura: dalla raccolta della documentazione necessaria, alla compilazione del modulo, fino alla presentazione allo Sportello Unico per l'Immigrazione.</p>
        <h2 className="text-2xl font-bold text-[#004a99]">Cosa offriamo</h2>
        <ul className="space-y-2">
          {['Consulenza personalizzata sulla tipologia di permesso più adatta alla vostra situazione', 'Assistenza nella raccolta e verifica dei documenti richiesti', 'Compilazione e invio del kit postale', 'Monitoraggio della pratica fino al rilascio del permesso', 'Supporto per il rinnovo del permesso di soggiorno'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-md bg-white px-4 py-3 shadow-sm">
              <span className="text-[#004a99]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Contattaci oggi stesso per una consulenza gratuita. Siamo qui per semplificare il tuo percorso burocratico in Italia.</p>
      </div>
    </div>
  )
}
