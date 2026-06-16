'use client'

import Link from 'next/link'

const services = [
  { label: 'Ricongiungimento Familiare', href: '/immigration/ricongiungimento-familiare' },
  { label: 'Assegno Unico Universale', href: '/caf/domanda-assegno-unico' },
  { label: 'ISEE', href: '/caf/isee' },
  { label: 'Colf e Badanti', href: '/caf/colf-e-badanti' },
  { label: 'Invalidità Civile', href: '/caf/invalidita' },
  { label: 'Assicurazioni Sanitarie', href: '/insurance/assicurazioni-sanitarie' },
  { label: 'Polizze Vita', href: '/insurance/polizze-vita' },
  { label: 'Assicurazione Casa e Macchina', href: '/insurance/assicurazione-casa-e-macchina' },
  { label: 'Corsi di Lingua', href: '/training/corsi-di-lingua' },
  { label: 'Creazione CV', href: '/other/creazione-cv' },
]

export default function FamiliesPage() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Families
      </h1>
      <p className="mb-10 text-[1.1rem] leading-[1.8] text-[#444]">
        At SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA, we understand that family is everything. We offer a comprehensive range of services designed to support families at every stage of life in Italy — from reuniting loved ones to securing financial benefits and protecting what matters most.
      </p>

      <div className="mb-12 space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>
          Whether you need to bring your family to Italy, access social benefits, manage domestic staff, or protect your family with the right insurance, our team is here to help.
        </p>
        <p>
          We work with families from all backgrounds, offering multilingual support and personalised guidance through Italy's complex bureaucratic system.
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-[#004a99]">Services for Families</h2>
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
