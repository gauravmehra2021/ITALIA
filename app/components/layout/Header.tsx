'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

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
  ]

  return (
    <header className="sticky top-0 z-[1000] w-full">
      {/* Top Bar */}
      <div className="bg-[#004a99] py-1.5 text-white">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[12px]">
              {t('topBar.story')}
            </span>

            <a
              href="#"
              className="rounded border border-white/40 px-3 py-1 text-[12px] font-medium transition-all duration-300 hover:bg-white hover:text-[#004a99]"
            >
              {t('topBar.more')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
        <div className="container flex items-center justify-between gap-5 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <img
              src="/images/logo.svg"
              alt="AMEI Logo"
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-end lg:flex">
            <ul className="flex w-full max-w-[1000px] items-center justify-between">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="group relative flex flex-1 justify-center"
                >
                  {cat === 'about' ? (
                    <Link
                      href="/chi-siamo"
                      className="flex min-h-[50px] w-full items-center justify-center px-1 py-2 text-center text-[9.5px] font-bold uppercase tracking-wide text-[#444] transition-all duration-300 hover:bg-[#004a99] hover:text-white xl:text-[10px]"
                    >
                      {t(`nav.${cat}`)}
                    </Link>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="flex min-h-[50px] w-full items-center justify-center gap-1 px-1 py-2 text-center text-[9.5px] font-bold uppercase tracking-wide text-[#444] transition-all duration-300 hover:bg-[#004a99] hover:text-white xl:text-[10px]"
                      >
                        {t(`nav.${cat}`)}

                        <span className="text-[8px] transition-transform duration-300 group-hover:rotate-180">
                          ▼
                        </span>
                      </a>

                      {/* Dropdown */}
                      <div className="invisible absolute left-0 top-full z-[1001] w-[300px] translate-y-3 overflow-hidden rounded-b-[8px] bg-white opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="bg-[#004a99] px-4 py-2 text-[11px] font-medium text-white">
                          {t(`nav.${cat}`)}
                        </div>

                        <ul className="max-h-[300px] overflow-y-auto py-1">
                          {t(`services.${cat}`) &&
                            t(`services.${cat}`).map(
                              (item: string, idx: number) => (
                                <li key={idx}>
                                  <a
                                    href="#"
                                    className="block border-l-[3px] border-transparent px-4 py-2 text-[12px] text-[#666] transition-all duration-200 hover:border-[#004a99] hover:bg-gray-50 hover:pl-6 hover:text-[#004a99]"
                                  >
                                    {item}
                                  </a>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'translate-y-[7px] rotate-45'
                  : ''
              }`}
            />

            <span
              className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-[2px] w-6 bg-[#004a99] transition-all duration-300 ${
                isMobileMenuOpen
                  ? '-translate-y-[7px] -rotate-45'
                  : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${
            isMobileMenuOpen
              ? 'max-h-[1000px] border-t'
              : 'max-h-0'
          }`}
        >
          <ul className="container flex flex-col py-4">
            {categories.map((cat) => (
              <li
                key={cat}
                className="border-b border-gray-100"
              >
                <a
                  href="#"
                  className="flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-wide text-[#444] transition-colors duration-300 hover:text-[#004a99]"
                >
                  {t(`nav.${cat}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header