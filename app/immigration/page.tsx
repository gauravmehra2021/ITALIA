'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './immigration.css'

const defaultServices = [
  {
    icon: '📋',
    title: 'Permesso di Soggiorno',
    desc: 'Support for new applications, renewals, and documentation.',
    modalDesc:
      'We provide complete assistance for obtaining and renewing your Permesso di Soggiorno (Residence Permit). Our experts guide you through every step of the process, ensuring all documents are correctly prepared and submitted.',
    points: [
      'New permit applications for work, family, and study',
      'Renewal of expiring residence permits',
      'Document preparation and verification',
      'Appointment booking at the Questura',
      'Follow-up on application status',
    ],
  },
  {
    icon: '🫂',
    title: 'Ricongiungimento Familiare',
    desc: 'Family reunification assistance for spouses, children, and parents.',
    modalDesc:
      'Our team assists you in bringing your family to Italy through the official family reunification process. We handle all paperwork and liaise with the relevant authorities on your behalf.',
    points: [
      'Eligibility assessment for family reunification',
      'Application preparation for spouses and children',
      'Income and housing requirement guidance',
      'Nulla Osta application support',
      'Visa application assistance for family members',
    ],
  },
  {
    icon: '📝',
    title: 'Decreto Flussi',
    desc: 'Guidance for work permit applications under Decreto Flussi.',
    modalDesc:
      'The Decreto Flussi is the annual quota decree that allows non-EU workers to enter Italy for work. We guide employers and workers through the entire application process from start to finish.',
    points: [
      'Employer and worker eligibility check',
      'Online application submission (click day)',
      'Document collection and preparation',
      'Nulla Osta and visa coordination',
      'Post-arrival permit conversion support',
    ],
  },
  {
    icon: '✈️',
    title: 'Primo Ingresso',
    desc: 'Support for first-time entry procedures into Italy.',
    modalDesc:
      'Entering Italy for the first time involves several bureaucratic steps. We simplify the process by guiding you through all required procedures from the moment you arrive.',
    points: [
      'Dichiarazione di Presenza filing',
      'Codice Fiscale application',
      'Residence registration (Residenza)',
      'Health card (Tessera Sanitaria) assistance',
      'Initial document orientation',
    ],
  },
  {
    icon: '🇮🇹',
    title: 'Cittadinanza Italiana',
    desc: 'Assistance with Italian citizenship applications and paperwork.',
    modalDesc:
      'Acquiring Italian citizenship is a significant milestone. Our specialists assist you in preparing a complete and accurate application, whether by residence, marriage, or descent.',
    points: [
      'Citizenship by long-term residence (10 years)',
      'Citizenship by marriage',
      'Citizenship by descent (Jure Sanguinis)',
      'Document apostille and translation',
      'Application submission and follow-up',
    ],
  },
  {
    icon: '📂',
    title: 'Compilazione Documenti',
    desc: 'Professional document preparation and verification services.',
    modalDesc:
      'Accurate and complete documentation is the foundation of every successful immigration procedure. Our team professionally prepares, reviews, and verifies all your documents.',
    points: [
      'Form filling for all immigration procedures',
      'Document translation and certification',
      'Apostille coordination',
      'Document checklist review',
      'Submission support at relevant offices',
    ],
  },
]

type Service = (typeof defaultServices)[number]

type HeroStat = { num: string; label: string }

export default function ImmigrationPage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  const rawServices = t('immigration.services')
  const services: Service[] = Array.isArray(rawServices) ? (rawServices as Service[]) : defaultServices

  const rawStats = t('immigration.hero.stats')
  const heroStats: HeroStat[] = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '5000+', label: 'Permits Processed' },
        { num: '20+', label: 'Years Experience' },
        { num: '98%', label: 'Success Rate' },
        { num: '6', label: 'Core Services' },
      ]

  const rawChecklist = t('immigration.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Certified immigration consultants',
        'End-to-end document management',
        'Multilingual support team',
        'Fast and transparent process',
        'Thousands of successful cases',
        'Offices across Italy',
      ]

  const heroBadge = t('immigration.hero.badge') || '🌍 Immigration Services'
  const heroTitle = t('immigration.hero.title') || 'Immigration Services'
  const heroDesc = t('immigration.hero.desc') || 'We provide complete immigration assistance for individuals and families who want to live, work, or settle in Italy and Europe. Our team helps clients with legal documentation, application procedures, and government formalities in a smooth and professional manner.'
  const exploreText = t('immigration.hero.actions.explore') || 'Explore Services'
  const contactText = t('immigration.hero.actions.contact') || 'Contact Us'

  const introTitle = t('immigration.intro.title') || 'Your Trusted Partner for Every Immigration Step'
  const introBody = t('immigration.intro.body') || 'Navigating Italian immigration law can be complex and time-consuming. At AMEI, we simplify the entire process — from your first entry into Italy to obtaining permanent residency or citizenship. Our experienced team stays up to date with the latest regulations so you don\'t have to.'
  const introVisualTitle = t('immigration.intro.visualTitle') || 'Why Choose AMEI'

  const sectionTag = t('immigration.section.tag') || 'What We Offer'
  const sectionTitle = t('immigration.section.title') || 'Our Immigration Services'
  const sectionDesc = t('immigration.section.desc') || 'Click on any service card to learn more about the process, requirements, and how we can help you.'

  const ctaTitle = t('immigration.cta.title') || 'Need Help With Your Immigration Process?'
  const ctaDesc = t('immigration.cta.desc') || 'Our experts are ready to assist you. Book a free consultation today and let us guide you through every step of your journey.'
  const ctaBook = t('immigration.cta.actions.book') || 'Book Consultation'
  const ctaCall = t('immigration.cta.actions.call') || 'Call Us Now'
  const cardCta = t('immigration.card.cta') || 'Learn More'

  const modalListTitle = t('immigration.modal.listTitle') || "What's Included"
  const modalClose = t('immigration.modal.close') || 'Close'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.imm-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="imm-hero">
        <div className="container">
          <div className="imm-hero-inner animate-fade-in-up">

            <nav className="imm-hero-breadcrumb">
              <Link href="/">{t('immigration.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('immigration.breadcrumbCurrent') || 'Servizi per l\'Immigrazione'}</span>
            </nav>

            <div className="imm-hero-badge">{heroBadge}</div>

            <h1 className="imm-hero-title">
              {heroTitle}
            </h1>

            <p className="imm-hero-desc">
              {heroDesc}
            </p>

            <div className="imm-hero-actions">
              <a href="#services" className="imm-btn-primary">{exploreText}</a>
              <Link href="/contact" className="imm-btn-outline">{contactText}</Link>
            </div>

            <div className="imm-hero-stats">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="imm-hero-stat-num">{s.num}</div>
                  <div className="imm-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="imm-intro">
        <div className="container">
          <div className="imm-intro-inner">
            <div className="imm-reveal">
              <h2 className="imm-intro-title">
                {introTitle}
              </h2>
              <p className="imm-intro-body">
                {introBody}
              </p>
            </div>

            <div className="imm-intro-visual imm-reveal delay-2">
              <div className="imm-intro-visual-title">{introVisualTitle}</div>
              <ul className="imm-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="imm-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Cards ── */}
      <section className="imm-services" id="services">
        <div className="container">
          <div className="imm-section-header imm-reveal">
            <span className="imm-section-tag">{sectionTag}</span>
            <h2 className="imm-section-title">{sectionTitle}</h2>
            <p className="imm-section-desc">
              {sectionDesc}
            </p>
          </div>

          <div className="imm-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`imm-card imm-reveal delay-${(i % 3) + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="imm-card-icon-wrap">{service.icon}</div>
                <h3 className="imm-card-title">{service.title}</h3>
                <p className="imm-card-desc">{service.desc}</p>
                <span className="imm-card-cta">
                  {cardCta}
                  <span className="imm-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="imm-cta" id="cta">
        <div className="container">
          <div className="imm-cta-box imm-reveal">
            <div>
              <h2 className="imm-cta-title">{ctaTitle}</h2>
              <p className="imm-cta-desc">
                {ctaDesc}
              </p>
            </div>
            <div className="imm-cta-actions">
              <Link href="/contact" className="imm-btn-primary">{ctaBook}</Link>
              <a href="tel:+390522172306" className="imm-btn-outline">{ctaCall}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="imm-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="imm-modal">
            <div className="imm-modal-header">
              <div className="imm-modal-icon">{activeModal.icon}</div>
              <h3 className="imm-modal-title">{activeModal.title}</h3>
              <p className="imm-modal-subtitle">{activeModal.desc}</p>
              <button className="imm-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="imm-modal-body">
              <p className="imm-modal-desc">{activeModal.modalDesc}</p>

              <div className="imm-modal-list-title">{modalListTitle}</div>
              <ul className="imm-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="imm-modal-footer">
              <Link href="/contact" className="imm-modal-btn imm-modal-btn-primary" onClick={() => setActiveModal(null)}>
                  {ctaBook}
                </Link>
                <button
                  className="imm-modal-btn imm-modal-btn-secondary"
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
