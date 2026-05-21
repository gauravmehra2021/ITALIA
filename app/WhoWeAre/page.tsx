'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const WhoWeAre = () => {
  const { t } = useLanguage()

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="container mx-auto max-w-[900px] py-20 text-[var(--text-main)]">
      {/* Header */}
      <header className="reveal fade-down mb-16 text-center">
        <h1 className="mb-5 text-4xl font-extrabold uppercase tracking-wide text-[var(--primary)] md:text-5xl">
          {t('about.subtitle')}
        </h1>

        <p className="text-[1.2rem] font-semibold italic text-[var(--secondary)]">
          {t('about.welcome')}
        </p>
      </header>

      {/* Content */}
      <div className="flex flex-col gap-10">
        {/* Description */}
        <section className="space-y-5">
          <p className="reveal fade-left text-[1.1rem] leading-[1.8]">
            {t('about.p1')}
          </p>

          <p
            className="reveal fade-left text-[1.1rem] leading-[1.8]"
            style={{ transitionDelay: '0.1s' }}
          >
            {t('about.p2')}
          </p>

          <p
            className="reveal fade-left text-[1.1rem] leading-[1.8]"
            style={{ transitionDelay: '0.2s' }}
          >
            {t('about.p3')}
          </p>
        </section>

        {/* Specialized Areas */}
        <section className="reveal fade-up rounded-lg border-l-[5px] border-[var(--primary)] bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <h2 className="mb-6 text-3xl font-bold text-[var(--primary)]">
            {t('about.listTitle')}
          </h2>

          <ul className="space-y-4">
            {(
              ['item1', 'item2', 'item3', 'item4', 'item5'] as const
            ).map((item, i) => {
              const words = t(`about.${item}`).split(' ')

              const strongWords =
                item === 'item2'
                  ? words.slice(0, 4).join(' ')
                  : words.slice(0, 3).join(' ')

              const remainingWords =
                item === 'item2'
                  ? words.slice(4).join(' ')
                  : words.slice(3).join(' ')

              return (
                <li
                  key={item}
                  className="reveal fade-left flex items-start gap-3 rounded-md bg-[#f9f9f9] px-4 py-3 transition-all duration-300 hover:translate-x-[6px] hover:bg-[#f0f4ff]"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <span className="mt-[2px] shrink-0 text-[1.2rem] text-[var(--primary)]">
                    ▸
                  </span>

                  <div className="leading-[1.7]">
                    <strong>{strongWords}</strong> {remainingWords}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="reveal fade-up mt-16 border-t border-[#eee] pt-10">
        <p className="mb-5 font-semibold text-[var(--primary)]">
          {t('about.footer1')}
        </p>

        <p className="mt-10 text-center text-[1.3rem] font-extrabold text-[var(--secondary)]">
          {t('about.footer2')}
        </p>
      </footer>
    </div>
  )
}

export default WhoWeAre