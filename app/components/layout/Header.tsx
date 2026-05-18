'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const { t, language, setLanguage } =
    useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-[#004a99] text-white">
        <div className="container-custom flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-4">
            <span>{t('topBar.story')}</span>

            <button
              className="
                rounded-md border border-white/40
                px-3 py-1
                font-medium
                transition-all duration-300
                hover:bg-white hover:text-[#004a99]
              "
            >
              {t('topBar.more')}
            </button>
          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('it')}
              className={`rounded px-2 py-1 transition ${
                language === 'it'
                  ? 'bg-white text-[#004a99]'
                  : 'bg-transparent text-white'
              }`}
            >
              IT
            </button>

            <button
              onClick={() => setLanguage('en')}
              className={`rounded px-2 py-1 transition ${
                language === 'en'
                  ? 'bg-white text-[#004a99]'
                  : 'bg-transparent text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="border-b bg-white shadow-sm">
        <div className="container-custom flex items-center justify-between gap-6 py-5">
          {/* LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={160}
              height={60}
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden flex-1 lg:flex lg:justify-end">
            <ul className="flex w-full max-w-[1000px] items-center justify-between">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="group relative flex flex-1 justify-center"
                >
                  {cat === 'about' ? (
                    <Link
                      href="/WhoWeAre"
                      className="
                        flex min-h-[50px] w-full items-center justify-center
                        px-2 py-3
                        text-center text-[10px] font-bold uppercase tracking-wide
                        text-[#444]
                        transition-all duration-300
                        hover:bg-[#004a99] hover:text-white
                      "
                    >
                      {t(`nav.${cat}`)}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="
                          flex min-h-[50px] w-full items-center justify-center gap-1
                          px-2 py-3
                          text-center text-[10px] font-bold uppercase tracking-wide
                          text-[#444]
                          transition-all duration-300
                          hover:bg-[#004a99] hover:text-white
                        "
                      >
                        {t(`nav.${cat}`)}

                        <ChevronDown
                          size={12}
                          className="
                            transition-transform duration-300
                            group-hover:rotate-180
                          "
                        />
                      </button>

                      {/* DROPDOWN */}
                      <div
                        className="
                          invisible absolute left-0 top-full z-50
                          w-[300px]
                          translate-y-3
                          overflow-hidden rounded-b-xl
                          bg-white opacity-0 shadow-2xl
                          transition-all duration-300
                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <div className="bg-[#004a99] px-4 py-2 text-xs font-medium text-white">
                          {t(`nav.${cat}`)}
                        </div>

                        <ul
                          className="
                            max-h-[300px]
                            overflow-y-auto
                            py-1
                          "
                        >
                          {t(`services.${cat}`)?.map(
                            (
                              item: string,
                              idx: number
                            ) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="
                                    block border-l-[3px] border-transparent
                                    px-4 py-2 text-sm text-[#666]
                                    transition-all duration-200
                                    hover:border-[#004a99]
                                    hover:bg-slate-50
                                    hover:pl-6
                                    hover:text-[#004a99]
                                  "
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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t bg-white lg:hidden">
            <div className="container-custom flex flex-col py-4">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="border-b border-slate-100"
                >
                  {cat === 'about' ? (
                    <Link
                      href="/chi-siamo"
                      className="
                        block py-4 text-sm font-semibold uppercase
                      "
                    >
                      {t(`nav.${cat}`)}
                    </Link>
                  ) : (
                    <div className="py-4">
                      <button
                        className="
                          flex w-full items-center justify-between
                          text-left text-sm font-semibold uppercase
                        "
                      >
                        {t(`nav.${cat}`)}

                        <ChevronDown size={16} />
                      </button>

                      <div className="mt-3 flex flex-col gap-2 pl-3">
                        {t(`services.${cat}`)?.map(
                          (
                            item: string,
                            idx: number
                          ) => (
                            <a
                              key={idx}
                              href="#"
                              className="
                                text-sm text-slate-600
                                transition-colors duration-200
                                hover:text-[#004a99]
                              "
                            >
                              {item}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}