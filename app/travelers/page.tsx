'use client'

import Link from 'next/link'

const services = [
  { label: 'Richiesta Visto', href: '/visas/richiesta-visto' },
  { label: 'E-Visto Indiano', href: '/indian-consulate/e-visto-indiano' },
  { label: 'Passaporto Indiano', href: '/indian-consulate/passaporto-indiano' },
  { label: 'Carta OCI', href: '/indian-consulate/carta-oci' },
  { label: 'Traduzioni Documenti', href: '/other/traduzioni' },
  { label: 'Assicurazione Casa e Macchina', href: '/insurance/assicurazione-casa-e-macchina' },
]

export default function TravelersPage() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Travelers
      </h1>
      <p className="mb-10 text-[1.1rem] leading-[1.8] text-[#444]">
        Planning a trip abroad or welcoming visitors to Italy? SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA provides all the support you need — from visa applications to document translations — ensuring your travel experience is smooth and stress-free.
      </p>

      <div className="mb-12 space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>
          Whether you need an international visa, an Indian e-visa, or help with travel documentation, our experienced team handles everything quickly and accurately.
        </p>
        <p>
          We also assist with travel insurance, document attestation, and any consular services required before or after your trip.
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-[#004a99]">Services for Travelers</h2>
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
