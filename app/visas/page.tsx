'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './visas.css'

const defaultServices = [
  {
    icon: '✈️',
    title: 'Tourist Visa',
    desc: 'Short-stay visa for tourism, leisure, and family visits.',
    modalDesc:
      'We assist you in applying for a Schengen tourist visa, ensuring all documentation is correctly prepared and submitted. Our team guides you through the entire process from appointment booking to visa collection.',
    points: [
      'Schengen short-stay visa (up to 90 days)',
      'Application form preparation and review',
      'Document checklist and verification',
      'Embassy appointment booking assistance',
      'Travel insurance guidance',
      'Follow-up on application status',
    ],
  },
  {
    icon: '💼',
    title: 'Work Visa',
    desc: 'Long-stay work visa for employment and professional activities.',
    modalDesc:
      'Obtaining a work visa for Italy requires coordination between the employer, the worker, and Italian authorities. Our experts manage the entire process, from the Nulla Osta to the visa application at the consulate.',
    points: [
      'Work visa under Decreto Flussi quota',
      'Employer Nulla Osta coordination',
      'Document preparation for consulate',
      'Visa application submission support',
      'Post-arrival permit conversion',
      'Guidance for seasonal and permanent work',
    ],
  },
  {
    icon: '🎓',
    title: 'Student Visa',
    desc: 'Study visa for university enrollment and language courses.',
    modalDesc:
      'We assist international students in obtaining the Italian student visa (visto per studio). From university enrollment confirmation to consulate submission, our team ensures a smooth and stress-free process.',
    points: [
      'Student visa (visto per studio) application',
      'University or school enrollment documentation',
      'Proof of financial means preparation',
      'Accommodation documentation support',
      'Health insurance guidance',
      'Residence permit for study after arrival',
    ],
  },
  {
    icon: '👨👩👧',
    title: 'Family Visa',
    desc: 'Visa for family reunification and joining relatives in Italy.',
    modalDesc:
      'The family visa allows relatives of Italian residents or citizens to join them in Italy. We handle all documentation for the Nulla Osta application and the subsequent visa process at the consulate.',
    points: [
      'Family reunification visa application',
      'Nulla Osta request to the Sportello Unico',
      'Income and housing requirement documentation',
      'Consulate appointment and submission support',
      'Residence permit for family reasons',
      'Support for spouses, children, and parents',
    ],
  },
  {
    icon: '🏥',
    title: 'Medical Visa',
    desc: 'Visa for medical treatment and healthcare purposes in Italy.',
    modalDesc:
      'Italy is a destination for medical tourism and specialized treatments. We assist patients and their companions in obtaining the appropriate visa for medical care, including all required documentation from Italian healthcare facilities.',
    points: [
      'Medical visa (visto per cure mediche)',
      'Hospital or clinic invitation letter support',
      'Companion visa for accompanying persons',
      'Document translation and certification',
      'Embassy appointment coordination',
      'Extension support if treatment is prolonged',
    ],
  },
  {
    icon: '🌍',
    title: 'Other Visas',
    desc: 'Business, transit, religious, and other special purpose visas.',
    modalDesc:
      'We assist with a wide range of other visa types including business visas, transit visas, religious visas, and special purpose visas. Our team stays up to date with the latest consular requirements for all visa categories.',
    points: [
      'Business visa for meetings and conferences',
      'Airport and transit visa assistance',
      'Religious and mission visa support',
      'Diplomatic and official visa guidance',
      'Visa renewal and extension support',
      'Consultation for complex visa cases',
    ],
  },
]

type Service = (typeof defaultServices)[number]
type HeroStat = { num: string; label: string }

export default function VisasPage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  const rawServices = t('visas.services')
  const services: Service[] = Array.isArray(rawServices) ? (rawServices as Service[]) : defaultServices

  const rawStats = t('visas.hero.stats')
  const heroStats = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '6',    label: 'Visa Categories' },
        { num: '800+', label: 'Visas Processed' },
        { num: '20+',  label: 'Years Experience' },
        { num: '97%',  label: 'Approval Rate' },
      ]

  const rawChecklist = t('visas.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Experienced visa consultants',
        'Complete document preparation',
        'Embassy appointment assistance',
        'Multilingual support team',
        'Fast and accurate processing',
        'High visa approval rate',
      ]

  const heroBadge        = t('visas.hero.badge')              || '🌍 International Visas'
  const heroTitle        = t('visas.hero.title')              || 'International Visas'
  const heroDesc         = t('visas.hero.desc')               || ''
  const viewTypesText    = t('visas.hero.actions.viewTypes')  || 'View Visa Types'
  const applyText        = t('visas.hero.actions.apply')      || 'Apply for Visa'

  const introTitle       = t('visas.intro.title')             || 'Expert Visa Assistance for Every Destination'
  const introBody        = t('visas.intro.body')              || ''
  const introVisualTitle = t('visas.intro.visualTitle')       || 'Why Choose SS EUROPA SOSTEGNO E SOLUZIONI PER L EUROPA'

  const sectionTag       = t('visas.section.tag')             || 'What We Offer'
  const sectionTitle     = t('visas.section.title')           || 'Our Visa Services'
  const sectionDesc      = t('visas.section.desc')            || ''
  const cardCta          = t('visas.card.cta')                || 'Learn More'

  const ctaTitle         = t('visas.cta.title')               || 'Ready to Apply for Your Visa?'
  const ctaDesc          = t('visas.cta.desc')                || ''
  const ctaApply         = t('visas.cta.actions.apply')       || 'Apply for Visa'
  const ctaCall          = t('visas.cta.actions.call')        || 'Call Us Now'

  const modalListTitle   = t('visas.modal.listTitle')         || "What's Included"
  const modalClose       = t('visas.modal.close')             || 'Close'
  const modalApply       = t('visas.modal.apply')             || 'Apply for Visa'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.vis-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="vis-hero">
        <div className="container">
          <div className="vis-hero-inner animate-fade-in-up">
            <nav className="vis-hero-breadcrumb">
              <Link href="/">{t('visas.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('visas.breadcrumbCurrent') || 'International Visas'}</span>
            </nav>

            <div className="vis-hero-badge">{heroBadge}</div>

            <h1 className="vis-hero-title">{heroTitle}</h1>

            <p className="vis-hero-desc">{heroDesc}</p>

            <div className="vis-hero-actions">
              <a href="#services" className="vis-btn-primary">{viewTypesText}</a>
              <Link href="/contact" className="vis-btn-outline">{applyText}</Link>
            </div>

            <div className="vis-hero-stats">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="vis-hero-stat-num">{s.num}</div>
                  <div className="vis-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="vis-intro">
        <div className="container">
          <div className="vis-intro-inner">
            <div className="vis-reveal">
              <h2 className="vis-intro-title">{introTitle}</h2>
              <p className="vis-intro-body">{introBody}</p>
            </div>

            <div className="vis-intro-visual vis-reveal delay-2">
              <div className="vis-intro-visual-title">{introVisualTitle}</div>
              <ul className="vis-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="vis-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="vis-services" id="services">
        <div className="container">
          <div className="vis-section-header vis-reveal">
            <span className="vis-section-tag">{sectionTag}</span>
            <h2 className="vis-section-title">{sectionTitle}</h2>
            <p className="vis-section-desc">{sectionDesc}</p>
          </div>

          <div className="vis-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`vis-card vis-reveal delay-${(i % 3) + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="vis-card-icon-wrap">{service.icon}</div>
                <h3 className="vis-card-title">{service.title}</h3>
                <p className="vis-card-desc">{service.desc}</p>
                <span className="vis-card-cta">
                  {cardCta}
                  <span className="vis-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vis-cta" id="cta">
        <div className="container">
          <div className="vis-cta-box vis-reveal">
            <div>
              <h2 className="vis-cta-title">{ctaTitle}</h2>
              <p className="vis-cta-desc">{ctaDesc}</p>
            </div>
            <div className="vis-cta-actions">
              <Link href="/contact" className="vis-btn-primary">{ctaApply}</Link>
              <a href="tel:+390522172306" className="vis-btn-outline">{ctaCall}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="vis-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="vis-modal">
            <div className="vis-modal-header">
              <div className="vis-modal-icon">{activeModal.icon}</div>
              <h3 className="vis-modal-title">{activeModal.title}</h3>
              <p className="vis-modal-subtitle">{activeModal.desc}</p>
              <button className="vis-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="vis-modal-body">
              <p className="vis-modal-desc">{activeModal.modalDesc}</p>

              <div className="vis-modal-list-title">{modalListTitle}</div>
              <ul className="vis-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="vis-modal-footer">
                <Link href="/contact" className="vis-modal-btn vis-modal-btn-primary" onClick={() => setActiveModal(null)}>{modalApply}</Link>
                <button
                  className="vis-modal-btn vis-modal-btn-secondary"
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
