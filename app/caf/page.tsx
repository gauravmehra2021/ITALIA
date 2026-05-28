'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './caf.css'

const defaultServices = [
  { icon: '📊', title: 'ISEE',                   desc: 'Indicatore della Situazione Economica Equivalente for welfare benefits.',       slug: 'isee' },
  { icon: '🧾', title: '730',                    desc: 'Annual income tax return filing for employees and pensioners.',                 slug: '730' },
  { icon: '💼', title: 'NASpI',                  desc: 'Unemployment benefit application and management.',                             slug: 'naspi' },
  { icon: '👶', title: 'Assegno Unico',           desc: 'Universal child allowance application for families.',                         slug: 'domanda-assegno-unico' },
  { icon: '♿', title: 'Invalidità',              desc: 'Disability recognition and benefit application support.',                     slug: 'invalidita' },
  { icon: '🏦', title: 'Pensione',                desc: 'Pension application, calculation, and retirement planning.',                  slug: 'domanda-di-pensione' },
  { icon: '🔐', title: 'SPID Activation',         desc: 'Digital identity activation for Italian online public services.',             slug: 'attivazione-spid' },
  { icon: '🏠', title: 'IMU',                     desc: 'Municipal property tax calculation and payment assistance.',                  slug: 'imu' },
  { icon: '📋', title: 'CUD',                     desc: 'Single certification of income and withholding taxes.',                      slug: 'cud' },
  { icon: '🧹', title: 'Colf e Badanti',          desc: 'Domestic worker and caregiver contract and contribution management.',         slug: 'colf-e-badanti' },
  { icon: '⚖️', title: 'Successione',             desc: 'Inheritance declaration and estate transfer procedures.',                    slug: 'successione' },
  { icon: '🌾', title: 'Disoccupazione Agricola', desc: 'Agricultural unemployment benefit application and support.',                 slug: 'disoccupazione-agricola' },
]

type Service = (typeof defaultServices)[number]

type HeroStat = { num: string; label: string }

export default function CafPage() {
  const { t } = useLanguage()

  const rawServices = t('caf.services')
  const services: Service[] = Array.isArray(rawServices)
    ? (rawServices as Service[])
    : defaultServices

  const rawStats = t('caf.hero.stats')
  const heroStats: HeroStat[] = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '19+',  label: 'Services Offered' },
        { num: '10K+', label: 'Practices Handled' },
        { num: '20+',  label: 'Years Experience' },
        { num: '98%',  label: 'Satisfaction Rate' },
      ]

  const rawChecklist = t('caf.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Certified CAF & Patronato operators',
        'Fast turnaround on all practices',
        'Multilingual assistance available',
        'Up-to-date with latest regulations',
        'Transparent fees, no hidden costs',
        'In-person and remote support',
      ]

  const heroBadge = t('caf.hero.badge') || '🏛️ CAF & Patronato'
  const heroTitle = t('caf.hero.title') || 'C.A.F. and Patronato'
  const heroDesc = t('caf.hero.desc') || 'Our CAF and Patronato services help individuals and families manage tax, pension, welfare, and administrative procedures quickly and accurately. We assist both Italian and international residents with official documentation and applications.'
  const viewAllText = t('caf.hero.actions.viewAll') || 'View All Services'
  const contactText = t('caf.hero.actions.contact') || 'Contact Us'

  const introTitle = t('caf.intro.title') || 'Complete Tax, Welfare & Administrative Support'
  const introBody = t('caf.intro.body') || 'The CAF (Centro di Assistenza Fiscale) and Patronato services at AMEI cover the full spectrum of fiscal and social security needs. Whether you need to file your tax return, apply for a pension, or activate your SPID digital identity, our certified team handles everything with precision and care — in multiple languages.'
  const introVisualTitle = t('caf.intro.visualTitle') || 'Our Guarantees'

  const sectionTag = t('caf.section.tag') || 'What We Offer'
  const sectionTitle = t('caf.section.title') || 'Our CAF & Patronato Services'
  const sectionDesc = t('caf.section.desc') || 'Click on any service card to learn more about the process, requirements, and how we can help you.'
  const cardCta = t('caf.card.cta') || 'Learn More'

  const ctaTitle = t('caf.cta.title') || 'Need Help With a CAF or Patronato Practice?'
  const ctaDesc = t('caf.cta.desc') || 'Our certified operators are ready to assist you. Book an appointment today and let us handle all the paperwork for you.'
  const ctaBook = t('caf.cta.actions.book') || 'Book Appointment'
  const ctaCall = t('caf.cta.actions.call') || 'Call Us Now'
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.caf-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="caf-hero">
        <div className="container">
          <div className="caf-hero-inner animate-fade-in-up">
            <nav className="caf-hero-breadcrumb">
              <Link href="/">{t('caf.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('caf.breadcrumbCurrent') || 'C.A.F. e Patronato'}</span>
            </nav>

            <div className="caf-hero-badge">{heroBadge}</div>

            <h1 className="caf-hero-title">{heroTitle}</h1>

            <p className="caf-hero-desc">
              {heroDesc}
            </p>

            <div className="caf-hero-actions">
              <a href="#services" className="caf-btn-primary">{viewAllText}</a>
              <Link href="/contact" className="caf-btn-outline">{contactText}</Link>
            </div>

            <div className="caf-hero-stats">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="caf-hero-stat-num">{s.num}</div>
                  <div className="caf-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="caf-intro">
        <div className="container">
          <div className="caf-intro-inner">
            <div className="caf-reveal">
              <h2 className="caf-intro-title">
                {introTitle}
              </h2>
              <p className="caf-intro-body">
                {introBody}
              </p>
            </div>

            <div className="caf-intro-visual caf-reveal delay-2">
              <div className="caf-intro-visual-title">{introVisualTitle}</div>
              <ul className="caf-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="caf-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="caf-services" id="services">
        <div className="container">
          <div className="caf-section-header caf-reveal">
            <span className="caf-section-tag">{sectionTag}</span>
            <h2 className="caf-section-title">{sectionTitle}</h2>
            <p className="caf-section-desc">
              {sectionDesc}
            </p>
          </div>

          <div className="caf-cards-grid">
            {services.map((service, i) => (
              <Link
                key={i}
                href={`/caf/${service.slug}`}
                className={`caf-card caf-reveal delay-${(i % 4) + 1}`}
              >
                <div className="caf-card-icon-wrap">{service.icon}</div>
                <h3 className="caf-card-title">{service.title}</h3>
                <p className="caf-card-desc">{service.desc}</p>
                <span className="caf-card-cta">
                  {cardCta}
                  <span className="caf-card-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="caf-cta" id="cta">
        <div className="container">
          <div className="caf-cta-box caf-reveal">
            <div>
              <h2 className="caf-cta-title">{ctaTitle}</h2>
              <p className="caf-cta-desc">
                {ctaDesc}
              </p>
            </div>
            <div className="caf-cta-actions">
              <Link href="/contact" className="caf-btn-primary">{ctaBook}</Link>
              <a href="tel:+390522172306" className="caf-btn-outline">{ctaCall}</a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
