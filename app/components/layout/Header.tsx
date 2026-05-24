'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import translationsData from '../../translations/languages.json'

// Routes indexed by position — works regardless of active language
const serviceRoutes: Record<string, string[]> = {
  immigration: [
    '/immigration/permesso-di-soggiorno',
    '/immigration/ricongiungimento-familiare',
    '/immigration/decreto-flussi',
    '/immigration/primo-ingresso',
    '/immigration/cittadinanza-italiana',
    '/immigration/compilazione-documenti',
  ],
  caf: [
    '/caf/isee',
    '/caf/730',
    '/caf/naspi',
    '/caf/domanda-assegno-unico',
    '/caf/invalidita',
    '/caf/dimissioni',
    '/caf/red',
    '/caf/locazioni',
    '/caf/assegno-sociale',
    '/caf/estratto-contributivo',
    '/caf/cud',
    '/caf/imu',
    '/caf/successione',
    '/caf/domanda-di-pensione',
    '/caf/colf-e-badanti',
    '/caf/inail',
    '/caf/disoccupazione-agricola',
    '/caf/attivazione-spid',
    '/caf/send',
  ],
  training: [
    '/training/corsi-di-lingua',
    '/training/qualifiche-professionali',
    '/training/settore-socio-sanitario',
    '/training/corso-sicurezza-sul-lavoro',
  ],
  business: [
    '/business/apertura-attivita',
    '/business/documentazione-valutazione-rischi',
  ],
  insurance: [
    '/insurance/assicurazioni-sanitarie',
    '/insurance/polizze-vita',
    '/insurance/assicurazione-casa-e-macchina',
    '/insurance/assicurazioni-aziende',
  ],
  indianConsulate: [
    '/indian-consulate/passaporto-indiano',
    '/indian-consulate/e-visto-indiano',
    '/indian-consulate/carta-oci',
    '/indian-consulate/altri-servizi',
  ],
  visas: [
    '/visas/richiesta-visto',
  ],
  other: [
    '/other/traduzioni',
    '/other/creazione-cv',
    '/other/interprete',
  ],
}

type Translations = typeof translationsData
type Lang = keyof Translations

const MobileMenuItem = ({ cat, t }: { cat: string; t: (key: string) => string | string[] }) => {
  const [open, setOpen] = useState(false)
  const services = t(`services.${cat}`)
  const hasDropdown = cat !== 'about' && Array.isArray(services)
  const routes = serviceRoutes[cat] ?? []

  return (
    <li className="border-b border-gray-100">
      <div
        className="flex cursor-pointer items-center justify-between py-3.5 text-sm font-semibold uppercase tracking-wide text-[#444] transition-colors duration-300 hover:text-[#004a99]"
        onClick={() => hasDropdown && setOpen(!open)}
      >
        {cat === 'about' ? (
          <Link href="/WhoWeAre" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : (
          <span className="w-full">{t(`nav.${cat}`)}</span>
        )}
        {hasDropdown && (
          <span className={`text-[10px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
        )}
      </div>
      {hasDropdown && Array.isArray(services) && (
        <ul className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] pb-2' : 'max-h-0'}`}>
          {services.map((item: string, idx: number) => (
            <li key={idx}>
              <Link
                href={routes[idx] ?? '#'}
                className="block border-l-[3px] border-[#004a99] bg-gray-50 px-4 py-2 text-[13px] text-[#555] hover:text-[#004a99]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const Header = () => {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = [
    'about',
    'immigration',
    'caf',
    'training',
    'business',
    'insurance',
    'indianConsulate',
    'visas',
    'other',
  ] as const

  return (
    <header className="sticky top-0 z-[1000] w-full">
      {/* Top Bar */}
      <div className="bg-[#004a99] py-1.5 text-white">
        <div className="container flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span className="hidden text-[12px] sm:inline">
              {t('topBar.story')}
            </span>
            <a
              href="#"
              className="rounded border border-white/40 px-3 py-1 text-[11px] font-medium transition-all duration-300 hover:bg-white hover:text-[#004a99] sm:text-[12px]"
            >
              {t('topBar.more')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
        <div className="container flex items-center justify-between gap-4 px-4 py-3 lg:py-5">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/images/logo.svg"
              alt="AMEI Logo"
              className="h-[44px] w-auto object-contain sm:h-[52px] lg:h-[60px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-end lg:flex">
            <ul className="flex w-full max-w-[1000px] items-center justify-between">
              {categories.map((cat) => {
                const services = t(`services.${cat}`)
                const routes = serviceRoutes[cat] ?? []
                return (
                  <li key={cat} className="group relative flex flex-1 justify-center">
                    {cat === 'about' ? (
                      <Link
                        href="/WhoWeAre"
                        className="flex min-h-[50px] w-full items-center justify-center px-1 py-2 text-center text-[9.5px] font-bold uppercase tracking-wide text-[#444] transition-all duration-300 hover:bg-[#004a99] hover:text-white xl:text-[10px]"
                      >
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : (
                      <>
                        <span className="flex min-h-[50px] w-full cursor-default items-center justify-center gap-1 px-1 py-2 text-center text-[9.5px] font-bold uppercase tracking-wide text-[#444] transition-all duration-300 group-hover:bg-[#004a99] group-hover:text-white xl:text-[10px]">
                          {t(`nav.${cat}`)}
                          <span className="text-[8px] transition-transform duration-300 group-hover:rotate-180">
                            ▼
                          </span>
                        </span>

                        {/* Dropdown */}
                        <div className="invisible absolute left-0 top-full z-[1001] w-[300px] translate-y-3 overflow-hidden rounded-b-[8px] bg-white opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="bg-[#004a99] px-4 py-2 text-[11px] font-medium text-white">
                            {t(`nav.${cat}`)}
                          </div>
                          <ul className="max-h-[300px] overflow-y-auto py-1">
                            {Array.isArray(services) && services.map((item: string, idx: number) => (
                              <li key={idx}>
                                <Link
                                  href={routes[idx] ?? '#'}
                                  className="block border-l-[3px] border-transparent px-4 py-2 text-[12px] text-[#666] transition-all duration-200 hover:border-[#004a99] hover:bg-gray-50 hover:pl-6 hover:text-[#004a99]"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'max-h-[2000px] border-t' : 'max-h-0'}`}>
          <ul className="container flex flex-col px-4 py-2">
            {categories.map((cat) => (
              <MobileMenuItem key={cat} cat={cat} t={t} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
