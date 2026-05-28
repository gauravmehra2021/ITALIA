'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './business.css'

const defaultServices = [
  {
    icon: '🏢',
    title: 'Apertura Attività',
    desc: 'Business opening and registration support for startups and entrepreneurs.',
    modalDesc:
      'Starting a business in Italy involves multiple bureaucratic steps — from choosing the right legal structure to registering with the Chamber of Commerce and tax authorities. Our team guides you through every step, ensuring your business is fully compliant from day one.',
    points: [
      'Choice of legal structure (ditta individuale, SRL, SNC, etc.)',
      'Chamber of Commerce registration (CCIAA)',
      'VAT number (Partita IVA) opening',
      'INPS and INAIL registration for the business owner',
      'Municipal business license (SCIA/SUAP)',
      'Opening of business bank account guidance',
    ],
  },
  {
    icon: '📋',
    title: 'DVR / RSPP / RLSS Documentation',
    desc: 'Professional workplace risk assessment and safety documentation services.',
    modalDesc:
      'Italian law (D.Lgs. 81/2008) requires all businesses to have a complete workplace risk assessment document (DVR) and designated safety figures. Our certified professionals prepare all mandatory safety documentation and provide the required training for your company.',
    points: [
      'DVR — Documento di Valutazione dei Rischi',
      'RSPP appointment and training (Responsabile del Servizio di Prevenzione)',
      'RLSS — Rappresentante dei Lavoratori per la Sicurezza',
      'Emergency and evacuation plan preparation',
      'Workplace safety signage and compliance check',
      'Annual safety documentation updates',
    ],
  },
]

type Service = (typeof defaultServices)[number]
type HeroStat = { num: string; label: string }

export default function BusinessPage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  const rawServices = t('business.services')
  const services: Service[] = Array.isArray(rawServices) ? (rawServices as Service[]) : defaultServices

  const rawStats = t('business.hero.stats')
  const heroStats = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '2',    label: 'Core Services' },
        { num: '300+', label: 'Businesses Assisted' },
        { num: '20+',  label: 'Years Experience' },
        { num: '100%', label: 'Legal Compliance' },
      ]

  const rawChecklist = t('business.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Certified business consultants',
        'Full legal and tax compliance support',
        'Multilingual assistance available',
        'Fast registration turnaround',
        'Workplace safety documentation experts',
        'Ongoing post-registration support',
      ]

  const heroBadge       = t('business.hero.badge')          || '💼 Business Consultancy'
  const heroTitle       = t('business.hero.title')          || 'Business Consultancy'
  const heroDesc        = t('business.hero.desc')           || ''
  const viewServicesText = t('business.hero.actions.viewServices') || 'View Services'
  const contactText     = t('business.hero.actions.contact') || 'Request Consultation'

  const introTitle      = t('business.intro.title')         || 'Your Partner for Business Setup & Compliance'
  const introBody       = t('business.intro.body')          || ''
  const introVisualTitle = t('business.intro.visualTitle')  || 'Why Choose AMEI'

  const sectionTag      = t('business.section.tag')         || 'What We Offer'
  const sectionTitle    = t('business.section.title')       || 'Our Business Services'
  const sectionDesc     = t('business.section.desc')        || ''
  const cardCta         = t('business.card.cta')            || 'Learn More'

  const ctaTitle        = t('business.cta.title')           || 'Ready to Start or Grow Your Business?'
  const ctaDesc         = t('business.cta.desc')            || ''
  const ctaContact      = t('business.cta.actions.contact') || 'Request Consultation'
  const ctaCall         = t('business.cta.actions.call')    || 'Call Us Now'

  const modalListTitle  = t('business.modal.listTitle')     || "What's Included"
  const modalClose      = t('business.modal.close')         || 'Close'
  const modalContact    = t('business.modal.contact')       || 'Request Consultation'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.biz-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="biz-hero">
        <div className="container">
          <div className="biz-hero-inner animate-fade-in-up">
            <nav className="biz-hero-breadcrumb">
              <Link href="/">{t('business.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('business.breadcrumbCurrent') || 'Business Consultancy'}</span>
            </nav>

            <div className="biz-hero-badge">{heroBadge}</div>

            <h1 className="biz-hero-title">{heroTitle}</h1>

            <p className="biz-hero-desc">{heroDesc}</p>

            <div className="biz-hero-actions">
              <a href="#services" className="biz-btn-primary">{viewServicesText}</a>
              <Link href="/contact" className="biz-btn-outline">{contactText}</Link>
            </div>

            <div className="biz-hero-stats">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="biz-hero-stat-num">{s.num}</div>
                  <div className="biz-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="biz-intro">
        <div className="container">
          <div className="biz-intro-inner">
            <div className="biz-reveal">
              <h2 className="biz-intro-title">{introTitle}</h2>
              <p className="biz-intro-body">{introBody}</p>
            </div>

            <div className="biz-intro-visual biz-reveal delay-2">
              <div className="biz-intro-visual-title">{introVisualTitle}</div>
              <ul className="biz-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="biz-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="biz-services" id="services">
        <div className="container">
          <div className="biz-section-header biz-reveal">
            <span className="biz-section-tag">{sectionTag}</span>
            <h2 className="biz-section-title">{sectionTitle}</h2>
            <p className="biz-section-desc">{sectionDesc}</p>
          </div>

          <div className="biz-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`biz-card biz-reveal delay-${i + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="biz-card-icon-wrap">{service.icon}</div>
                <h3 className="biz-card-title">{service.title}</h3>
                <p className="biz-card-desc">{service.desc}</p>
                <span className="biz-card-cta">
                  {cardCta}
                  <span className="biz-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="biz-cta" id="cta">
        <div className="container">
          <div className="biz-cta-box biz-reveal">
            <div>
              <h2 className="biz-cta-title">{ctaTitle}</h2>
              <p className="biz-cta-desc">{ctaDesc}</p>
            </div>
            <div className="biz-cta-actions">
              <Link href="/contact" className="biz-btn-primary">{ctaContact}</Link>
              <a href="tel:+390522172306" className="biz-btn-outline">{ctaCall}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="biz-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="biz-modal">
            <div className="biz-modal-header">
              <div className="biz-modal-icon">{activeModal.icon}</div>
              <h3 className="biz-modal-title">{activeModal.title}</h3>
              <p className="biz-modal-subtitle">{activeModal.desc}</p>
              <button className="biz-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="biz-modal-body">
              <p className="biz-modal-desc">{activeModal.modalDesc}</p>

              <div className="biz-modal-list-title">{modalListTitle}</div>
              <ul className="biz-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="biz-modal-footer">
                <Link href="/contact" className="biz-modal-btn biz-modal-btn-primary" onClick={() => setActiveModal(null)}>{modalContact}</Link>
                <button
                  className="biz-modal-btn biz-modal-btn-secondary"
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
