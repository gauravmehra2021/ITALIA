'use client'

import Link from 'next/link'

const services = [
  { label: 'Permesso di Soggiorno', href: '/immigration/permesso-di-soggiorno' },
  { label: 'Ricongiungimento Familiare', href: '/immigration/ricongiungimento-familiare' },
  { label: 'Decreto Flussi', href: '/immigration/decreto-flussi' },
  { label: 'Primo Ingresso', href: '/immigration/primo-ingresso' },
  { label: 'Cittadinanza Italiana', href: '/immigration/cittadinanza-italiana' },
  { label: 'Compilazione Documenti', href: '/immigration/compilazione-documenti' },
  { label: 'Attivazione SPID', href: '/caf/attivazione-spid' },
  { label: 'Corsi di Lingua', href: '/training/corsi-di-lingua' },
]

export default function MigrantsPage() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Migrants
      </h1>
      <p className="mb-10 text-[1.1rem] leading-[1.8] text-[#444]">
        AMEI is your trusted partner for every step of your journey in Italy. Whether you have just arrived or have been living here for years, we provide complete support for all immigration-related needs — from your first residence permit to Italian citizenship.
      </p>

      <div className="mb-12 space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>
          Moving to a new country comes with complex bureaucratic challenges. Our multilingual team understands your needs and guides you through every procedure with professionalism and care.
        </p>
        <p>
          We assist thousands of migrants every year, offering personalised consultancy, document preparation, and full follow-up until your case is resolved.
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-[#004a99]">Services for Migrants</h2>
      <ul className="space-y-3">
        {services.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-all hover:translate-x-1 hover:bg-[#f0f4ff]"
            >
              <span className="text-[#004a99]">▸</span>
              <span>{s.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
