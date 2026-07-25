'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

// Routes indexed by position — works regardless of active language
const serviceRoutes: Record<string, string[]> = {
  other: [],
}

const MobileMenuItem = ({ cat, t }: { cat: string; t: (key: string) => string | string[] }) => {
  const [open, setOpen] = useState(false)
  const services = t(`services.${cat}`)
  const hasDropdown = cat !== 'about' && cat !== 'immigration' && cat !== 'caf' && cat !== 'training' && cat !== 'business' && cat !== 'insurance' && cat !== 'visas' && cat !== 'indianConsulate' && cat !== 'other' && cat !== 'contact' && Array.isArray(services)
  const routes = serviceRoutes[cat] ?? []

  return (
    <li className="border-b border-gray-100">
      <div
        className="flex cursor-pointer items-center justify-between py-3.5 text-sm font-semibold uppercase tracking-wide text-[#444] transition-colors duration-300 hover:text-[#004a99]"
        onClick={() => hasDropdown && setOpen(!open)}
      >
        {cat === 'about' ? (
          <Link href="/WhoWeAre" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'immigration' ? (
          <Link href="/immigration" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'caf' ? (
          <Link href="/caf" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'training' ? (
          <Link href="/training" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'business' ? (
          <Link href="/business" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'insurance' ? (
          <Link href="/insurance" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'visas' ? (
          <Link href="/visas" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'indianConsulate' ? (
          <Link href="/indian-consulate" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'other' ? (
          <Link href="/other" className="w-full">{t(`nav.${cat}`)}</Link>
        ) : cat === 'contact' ? (
          <Link href="/contact" className="w-full text-[#f37021]">{t('nav.contact')}</Link>
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
  const { t, language, setLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const langs = [
    { code: 'it', label: 'IT' },
    { code: 'en', label: 'EN' },
    { code: 'pa', label: 'PA' },
    { code: 'ur', label: 'UR' },
    { code: 'bn', label: 'BN' },
    { code: 'si', label: 'SI' },
    { code: 'ar', label: 'AR' },
  ] as const

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
    'contact',
  ] as const

  /* shared nav link class — underline style hover instead of full bg */
  const navLinkClass = `
    relative flex min-h-[54px] w-full items-center justify-center px-2 py-2
    text-center text-[9.5px] font-bold uppercase tracking-wide text-[#444]
    transition-colors duration-200 xl:text-[10px]
    hover:text-[#004a99]
    after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[3px]
    after:scale-x-0 after:bg-[#004a99] after:transition-transform after:duration-300
    hover:after:scale-x-100
  `.replace(/\s+/g, ' ').trim()

  return (
    <header className={`sticky top-0 z-[1000] w-full transition-all duration-300 ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.1)]' : 'shadow-[0_1px_4px_rgba(0,0,0,0.04)]'}`}>

      {/* ── Top Bar ── */}
      <div className="bg-[#003a7a] py-2 text-white">
        <div className="container flex items-center justify-between px-4">

          {/* Left — tagline + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-[5px] w-[5px] rounded-full bg-[#f37021] opacity-90" />
              <span className="text-[11px] font-medium tracking-wide text-white/75">
                {t('topBar.story')}
              </span>
            </div>
            <Link
              href="/contact"
              className="rounded border border-[#f37021]/60 bg-[#f37021]/10 px-3 py-[4px] text-[10.5px] font-semibold tracking-wide text-[#f37021] transition-all duration-300 hover:border-[#f37021] hover:bg-[#f37021] hover:text-white"
            >
              {t('topBar.more')}
            </Link>
          </div>

          {/* Right — language switcher */}
          <div className="flex items-center divide-x divide-white/20">
            {langs.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-3 py-1 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                  language === code
                    ? 'text-white'
                    : 'text-white/35 hover:text-white/70'
                }`}
              >
                {label}
                {language === code && (
                  <span className="ml-1 inline-block h-[3px] w-[3px] rounded-full bg-[#f37021] align-middle" />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ── Main Header ── */}
      <div className="bg-white">
        <div className="container flex items-center justify-between gap-4 px-4 py-3 md:py-0">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/images/logo.png"
              alt="AMEI Logo"
              className="h-[44px] w-auto object-contain sm:h-[52px] lg:h-[60px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-end md:flex">
            <ul className="flex items-center">
              {categories.map((cat) => {
                const services = t(`services.${cat}`)
                const routes = serviceRoutes[cat] ?? []
                return (
                  <li key={cat} className="group relative flex flex-1 justify-center">
                    {cat === 'about' ? (
                      <Link href="/WhoWeAre" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'immigration' ? (
                      <Link href="/immigration" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'caf' ? (
                      <Link href="/caf" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'training' ? (
                      <Link href="/training" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'business' ? (
                      <Link href="/business" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'insurance' ? (
                      <Link href="/insurance" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'visas' ? (
                      <Link href="/visas" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'indianConsulate' ? (
                      <Link href="/indian-consulate" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'other' ? (
                      <Link href="/other" className={navLinkClass}>
                        {t(`nav.${cat}`)}
                      </Link>
                    ) : cat === 'contact' ? (
                      <Link
                        href="/contact"
                        className="flex min-h-[50px] w-full items-center justify-center px-1 py-2 text-center text-[9.5px] font-bold uppercase tracking-wide text-[#444] transition-all duration-300 hover:bg-[#004a99] hover:text-white xl:text-[10px]"
                      >
                        {t('nav.contact')}
                      </Link>
                    ) : (
                      <>
                        <span className={`${navLinkClass} cursor-default group-hover:text-[#004a99] group-hover:after:scale-x-100`}>
                          {t(`nav.${cat}`)}
                          <span className="ml-1 text-[7px] transition-transform duration-300 group-hover:rotate-180">▼</span>
                        </span>
                        {/* Dropdown */}
                        <div className="invisible absolute left-0 top-full z-[1001] w-[280px] translate-y-2 overflow-hidden rounded-b-lg rounded-t-none bg-white opacity-0 shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="bg-[#004a99] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white">
                            {t(`nav.${cat}`)}
                          </div>
                          <ul className="max-h-[300px] overflow-y-auto py-1">
                            {Array.isArray(services) && services.map((item: string, idx: number) => (
                              <li key={idx}>
                                <Link
                                  href={routes[idx] ?? '#'}
                                  className="block border-l-[3px] border-transparent px-4 py-2 text-[12px] text-[#555] transition-all duration-200 hover:border-[#004a99] hover:bg-blue-50 hover:pl-5 hover:text-[#004a99]"
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
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden bg-white transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'max-h-[2000px] border-t border-gray-100' : 'max-h-0'}`}>
          <ul className="container flex flex-col px-4 py-2">
            {categories.map((cat) => (
              <MobileMenuItem key={cat} cat={cat} t={t} />
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[3px] bg-gradient-to-r from-[#004a99] via-[#0062cc] to-[#f37021]" />
    </header>
  )
}

export default Header
