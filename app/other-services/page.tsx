'use client'

import Link from 'next/link'

const services = [
  { label: 'Traduzioni', href: '/other/traduzioni' },
  { label: 'Creazione CV', href: '/other/creazione-cv' },
  { label: 'Interprete', href: '/other/interprete' },
  { label: 'Attivazione SPID', href: '/caf/attivazione-spid' },
  { label: 'SEND – Notifiche Digitali', href: '/caf/send' },
  { label: 'Compilazione Documenti', href: '/immigration/compilazione-documenti' },
]

export default function OtherServicesPage() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Other Services
      </h1>
      <p className="mb-10 text-[1.1rem] leading-[1.8] text-[#444]">
        Beyond our core services, SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA offers a wide range of additional support to help you navigate daily life in Italy. From professional translations to digital identity activation, we are here to simplify every aspect of your bureaucratic journey.
      </p>

      <div className="mb-12 space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>
          Our additional services are designed to fill the gaps that other agencies leave behind. No matter how small or complex your need, our team is ready to assist you with the same professionalism and care we bring to all our services.
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-[#004a99]">Available Services</h2>
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
