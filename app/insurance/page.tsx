'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './insurance.css'

const defaultServices = [
  {
    icon: '🏥',
    title: 'Health Insurance',
    desc: 'Comprehensive health coverage for individuals and families in Italy.',
    modalDesc:
      'Our health insurance plans provide complete medical coverage including specialist visits, hospitalization, diagnostics, and dental care. We work with leading Italian and European insurers to find the best plan for your needs and budget.',
    points: [
      'Specialist and GP visits coverage',
      'Hospitalization and surgery coverage',
      'Diagnostic tests and lab exams',
      'Dental and vision care options',
      'Emergency medical assistance abroad',
      'Plans for individuals, families, and companies',
    ],
  },
  {
    icon: '🛡️',
    title: 'Life Insurance',
    desc: "Protect your family's financial future with tailored life policies.",
    modalDesc:
      'Life insurance gives you peace of mind knowing your family is financially protected. We offer term life, whole life, and investment-linked policies from top-rated insurers, customized to your personal and financial situation.',
    points: [
      'Term life insurance for income protection',
      'Whole life policies with savings component',
      'Critical illness and disability riders',
      'Mortgage protection life cover',
      'Beneficiary designation assistance',
      'Annual policy review and optimization',
    ],
  },
  {
    icon: '🏠',
    title: 'Home Insurance',
    desc: 'Protect your home and contents against damage, theft, and liability.',
    modalDesc:
      'Our home insurance solutions cover your property against fire, flood, theft, and accidental damage. We also include civil liability coverage to protect you against claims from third parties. Available for owners and tenants.',
    points: [
      'Building and structural damage coverage',
      'Contents and personal belongings protection',
      'Theft and burglary coverage',
      'Water damage and flooding protection',
      'Civil liability for homeowners and tenants',
      'Temporary accommodation during repairs',
    ],
  },
  {
    icon: '🚗',
    title: 'Vehicle Insurance',
    desc: 'Mandatory and comprehensive car and vehicle insurance solutions.',
    modalDesc:
      'We help you find the best vehicle insurance at the most competitive price. From mandatory RCA (third-party liability) to full comprehensive cover, we compare offers from multiple insurers to get you the best deal.',
    points: [
      'RCA — mandatory third-party liability',
      'Kasko — comprehensive collision coverage',
      'Theft and fire protection',
      'Roadside assistance and towing',
      'Legal protection for road accidents',
      'Coverage for motorcycles and commercial vehicles',
    ],
  },
  {
    icon: '🏢',
    title: 'Business Insurance',
    desc: 'Complete insurance solutions to protect your company and employees.',
    modalDesc:
      'Protecting your business is essential. We offer tailored commercial insurance packages covering your premises, equipment, employees, and professional liability — ensuring your business is fully protected against unexpected events.',
    points: [
      'Commercial property and contents insurance',
      'Professional liability (RC Professionale)',
      'Employee accident and health coverage',
      'Business interruption insurance',
      'Cyber risk and data protection coverage',
      'Customized packages for all business sizes',
    ],
  },
]

type Service = (typeof defaultServices)[number]
type HeroStat = { num: string; label: string }

export default function InsurancePage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  const rawServices = t('insurance.services')
  const services: Service[] = Array.isArray(rawServices) ? (rawServices as Service[]) : defaultServices

  const rawStats = t('insurance.hero.stats')
  const heroStats = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '5',   label: 'Insurance Types' },
        { num: '1K+', label: 'Policies Managed' },
        { num: '20+', label: 'Years Experience' },
        { num: '98%', label: 'Client Satisfaction' },
      ]

  const rawChecklist = t('insurance.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Independent insurance brokers',
        'Comparison across multiple insurers',
        'Personalized coverage recommendations',
        'Multilingual assistance available',
        'Claims support and assistance',
        'Annual policy review service',
      ]

  const heroBadge        = t('insurance.hero.badge')           || '🛡️ Insurance Services'
  const heroTitle        = t('insurance.hero.title')           || 'Insurance'
  const heroDesc         = t('insurance.hero.desc')            || ''
  const viewTypesText    = t('insurance.hero.actions.viewTypes') || 'View Insurance Types'
  const quoteText        = t('insurance.hero.actions.quote')   || 'Get a Quote'

  const introTitle       = t('insurance.intro.title')          || 'Complete Protection for Every Aspect of Your Life'
  const introBody        = t('insurance.intro.body')           || ''
  const introVisualTitle = t('insurance.intro.visualTitle')    || 'Why Choose SS EUROPA Insurance'

  const sectionTag       = t('insurance.section.tag')          || 'What We Offer'
  const sectionTitle     = t('insurance.section.title')        || 'Our Insurance Solutions'
  const sectionDesc      = t('insurance.section.desc')         || ''
  const cardCta          = t('insurance.card.cta')             || 'Learn More'

  const ctaTitle         = t('insurance.cta.title')            || 'Get Your Personalized Insurance Quote'
  const ctaDesc          = t('insurance.cta.desc')             || ''
  const ctaQuote         = t('insurance.cta.actions.quote')    || 'Request a Quote'
  const ctaCall          = t('insurance.cta.actions.call')     || 'Call Us Now'

  const modalListTitle   = t('insurance.modal.listTitle')      || "What's Covered"
  const modalClose       = t('insurance.modal.close')          || 'Close'
  const modalQuote       = t('insurance.modal.quote')          || 'Request a Quote'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.ins-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="ins-hero">
        <div className="container">
          <div className="ins-hero-inner animate-fade-in-up">
            <nav className="ins-hero-breadcrumb">
              <Link href="/">{t('insurance.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('insurance.breadcrumbCurrent') || 'Insurance'}</span>
            </nav>

            <div className="ins-hero-badge">{heroBadge}</div>

            <h1 className="ins-hero-title">{heroTitle}</h1>

            <p className="ins-hero-desc">{heroDesc}</p>

            <div className="ins-hero-actions">
              <a href="#services" className="ins-btn-primary">{viewTypesText}</a>
              <Link href="/contact" className="ins-btn-outline">{quoteText}</Link>
            </div>

            <div className="ins-hero-stats">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="ins-hero-stat-num">{s.num}</div>
                  <div className="ins-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="ins-intro">
        <div className="container">
          <div className="ins-intro-inner">
            <div className="ins-reveal">
              <h2 className="ins-intro-title">{introTitle}</h2>
              <p className="ins-intro-body">{introBody}</p>
            </div>

            <div className="ins-intro-visual ins-reveal delay-2">
              <div className="ins-intro-visual-title">{introVisualTitle}</div>
              <ul className="ins-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="ins-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="ins-services" id="services">
        <div className="container">
          <div className="ins-section-header ins-reveal">
            <span className="ins-section-tag">{sectionTag}</span>
            <h2 className="ins-section-title">{sectionTitle}</h2>
            <p className="ins-section-desc">{sectionDesc}</p>
          </div>

          <div className="ins-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`ins-card ins-reveal delay-${(i % 3) + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="ins-card-icon-wrap">{service.icon}</div>
                <h3 className="ins-card-title">{service.title}</h3>
                <p className="ins-card-desc">{service.desc}</p>
                <span className="ins-card-cta">
                  {cardCta}
                  <span className="ins-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ins-cta" id="cta">
        <div className="container">
          <div className="ins-cta-box ins-reveal">
            <div>
              <h2 className="ins-cta-title">{ctaTitle}</h2>
              <p className="ins-cta-desc">{ctaDesc}</p>
            </div>
            <div className="ins-cta-actions">
              <Link href="/contact" className="ins-btn-primary">{ctaQuote}</Link>
              <a href="tel:+390522172306" className="ins-btn-outline">{ctaCall}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="ins-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="ins-modal">
            <div className="ins-modal-header">
              <div className="ins-modal-icon">{activeModal.icon}</div>
              <h3 className="ins-modal-title">{activeModal.title}</h3>
              <p className="ins-modal-subtitle">{activeModal.desc}</p>
              <button className="ins-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="ins-modal-body">
              <p className="ins-modal-desc">{activeModal.modalDesc}</p>

              <div className="ins-modal-list-title">{modalListTitle}</div>
              <ul className="ins-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="ins-modal-footer">
                <Link href="/contact" className="ins-modal-btn ins-modal-btn-primary" onClick={() => setActiveModal(null)}>{modalQuote}</Link>
                <button
                  className="ins-modal-btn ins-modal-btn-secondary"
                  onClick={() => setActiveModal(null)}
                >
                  {modalClose}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
