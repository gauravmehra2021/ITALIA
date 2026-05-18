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
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 text-gray-800">
      {/* Header */}
      <header className="reveal -translate-y-8 opacity-0 transition-all duration-700 text-center mb-16">
        <h1 className="mb-5 text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-blue-700">
          {t('about.subtitle')}
        </h1>

        <p className="text-lg md:text-xl font-semibold italic text-gray-600">
          {t('about.welcome')}
        </p>
      </header>

      {/* Content */}
      <div className="flex flex-col gap-10">
        {/* Main Description */}
        <section>
          <p className="reveal -translate-x-10 opacity-0 transition-all duration-700 mb-5 text-lg leading-8">
            {t('about.p1')}
          </p>

          <p
            className="reveal -translate-x-10 opacity-0 transition-all duration-700 delay-100 mb-5 text-lg leading-8"
          >
            {t('about.p2')}
          </p>

          <p
            className="reveal -translate-x-10 opacity-0 transition-all duration-700 delay-200 text-lg leading-8"
          >
            {t('about.p3')}
          </p>
        </section>

        {/* Specialized Areas */}
        <section className="reveal translate-y-10 opacity-0 transition-all duration-700 rounded-xl border-l-4 border-blue-700 bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-blue-700">
            {t('about.listTitle')}
          </h2>

          <ul className="space-y-4">
            {(['item1', 'item2', 'item3', 'item4', 'item5'] as const).map(
              (item, i) => {
                const text = t(`about.${item}`).split(' ')
                const splitIndex = item === 'item2' ? 4 : 3

                return (
                  <li
                    key={item}
                    className="reveal -translate-x-10 opacity-0 transition-all duration-700 flex items-start gap-3 rounded-lg bg-gray-50 p-4 hover:bg-blue-50 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <span className="mt-1 text-lg text-blue-700">▸</span>

                    <div className="text-base leading-7">
                      <strong>
                        {text.slice(0, splitIndex).join(' ')}
                      </strong>{' '}
                      {text.slice(splitIndex).join(' ')}
                    </div>
                  </li>
                )
              }
            )}
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="reveal translate-y-10 opacity-0 transition-all duration-700 mt-16 border-t border-gray-200 pt-10">
        <p className="mb-5 font-semibold text-blue-700">
          {t('about.footer1')}
        </p>

        <p className="mt-10 text-center text-2xl font-extrabold text-gray-700">
          {t('about.footer2')}
        </p>
      </footer>
    </div>
  )
}

export default WhoWeAre