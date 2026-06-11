'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './whoweare.css'

const WhoWeAre = () => {
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.wwa-reveal, .wwa-reveal-left, .wwa-reveal-right')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const areas = [
    { num: '01', key: 'item1' },
    { num: '02', key: 'item2' },
    { num: '03', key: 'item3' },
    { num: '04', key: 'item4' },
    { num: '05', key: 'item5' },
  ] as const

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="wwa-hero">
        <div className="container">
          <div className="wwa-hero-inner">

            <div className="wwa-hero-badge">🇮🇹 Chi Siamo</div>

            <h1 className="wwa-hero-title">
              {t('about.subtitle')}
            </h1>

            <p className="wwa-hero-subtitle">
              {t('about.welcome')}
            </p>

            <div className="wwa-hero-stats">
              {[
                { num: '20+',  label: 'Years of Experience' },
                { num: '5K+',  label: 'Clients Assisted' },
                { num: '98%',  label: 'Satisfaction Rate' },
                { num: '8',    label: 'Service Areas' },
              ].map((s, i) => (
                <div className="wwa-hero-stat" key={i}>
                  <div className="wwa-hero-stat-num">{s.num}</div>
                  <div className="wwa-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          INTRO
      ════════════════════════════════ */}
      <section className="wwa-intro">
        <div className="container">
          <div className="wwa-intro-inner">

            {/* Left — text */}
            <div>
              <div className="wwa-reveal-left">
                <span className="wwa-intro-eyebrow">SS EUROPA — Sostegno e Soluzioni per l&apos;Europa (by AmEi)</span>
                <h2 className="wwa-intro-title">{t('about.title')}</h2>
                <p className="wwa-intro-text">{t('about.p1')}</p>
              </div>
              <p className="wwa-intro-text wwa-reveal-left wwa-delay-1">{t('about.p2')}</p>
              <p className="wwa-intro-text wwa-reveal-left wwa-delay-2">{t('about.p3')}</p>
            </div>

            {/* Right — card */}
            <div className="wwa-intro-visual wwa-reveal-right wwa-delay-1">
              <div className="wwa-intro-card">
                <div className="wwa-intro-card-title">Our Core Values</div>
                <ul className="wwa-values-list">
                  {[
                    'Professionalism & Expertise',
                    'Multilingual Support',
                    'Transparency & Trust',
                    'Client-First Approach',
                    'Continuous Innovation',
                    'Community Integration',
                  ].map((val, i) => (
                    <li key={i}>
                      <span className="wwa-values-icon">✓</span>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SPECIALIZED AREAS
      ════════════════════════════════ */}
      <section className="wwa-areas">
        <div className="container">

          <div className="wwa-areas-header wwa-reveal">
            <span className="wwa-areas-tag">What We Do</span>
            <h2 className="wwa-areas-title">{t('about.listTitle')}</h2>
            <p className="wwa-areas-desc">
              Our activity is organized into specialized areas to serve every need with precision and expertise.
            </p>
          </div>

          <div className="wwa-areas-grid">
            {areas.map(({ num, key }, i) => {
              const text = t(`about.${key}`) as string
              const words = text.split(' ')
              const title = key === 'item2' ? words.slice(0, 4).join(' ') : words.slice(0, 3).join(' ')
              const body  = key === 'item2' ? words.slice(4).join(' ')  : words.slice(3).join(' ')
              return (
                <div
                  key={key}
                  className={`wwa-area-card wwa-reveal wwa-delay-${(i % 3) + 1}`}
                >
                  <div className="wwa-area-num">{num}</div>
                  <div className="wwa-area-title">{title}</div>
                  <p className="wwa-area-text">{body}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          CLOSING
      ════════════════════════════════ */}
      <section className="wwa-closing">
        <div className="container">
          <div className="wwa-closing-inner">

            <p className="wwa-closing-quote wwa-reveal">
              {t('about.footer1')}
            </p>

            <p className="wwa-closing-highlight wwa-reveal wwa-delay-2">
              {t('about.footer2')}
            </p>

            <div className="wwa-closing-actions wwa-reveal wwa-delay-3">
              <Link href="/" className="wwa-closing-btn-primary">
                <span>Explore Our Services</span>
                <span className="wwa-btn-arrow">→</span>
              </Link>
              <Link href="/contact" className="wwa-closing-btn-outline">
                <span>Contact Us</span>
                <span className="wwa-btn-arrow">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre
