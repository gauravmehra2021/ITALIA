'use client'

import Link from 'next/link'

const services = [
  { label: 'Apertura Attività', href: '/business/apertura-attivita' },
  { label: 'DVR – Valutazione dei Rischi', href: '/business/documentazione-valutazione-rischi' },
  { label: 'Corso Sicurezza sul Lavoro', href: '/training/corso-sicurezza-sul-lavoro' },
  { label: 'Assicurazioni Aziende', href: '/insurance/assicurazioni-aziende' },
  { label: 'Colf e Badanti', href: '/caf/colf-e-badanti' },
  { label: 'Decreto Flussi (Lavoratori)', href: '/immigration/decreto-flussi' },
  { label: 'Qualifiche Professionali', href: '/training/qualifiche-professionali' },
]

export default function CompaniesPage() {
  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Companies
      </h1>
      <p className="mb-10 text-[1.1rem] leading-[1.8] text-[#444]">
        SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA supports businesses of all sizes with a full range of administrative, legal, and insurance services. From starting a new business in Italy to managing workplace safety and hiring foreign workers, we are your one-stop partner.
      </p>

      <div className="mb-12 space-y-5 text-[1.05rem] leading-[1.8] text-[#444]">
        <p>
          Starting or running a business in Italy involves navigating complex regulations. Our team of business consultants provides expert guidance to ensure your company is fully compliant and protected.
        </p>
        <p>
          We also assist companies in hiring qualified foreign workers through the Decreto Flussi, managing workplace safety documentation, and providing tailored insurance solutions.
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-[#004a99]">Services for Companies</h2>
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
