'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './indian-consulate.css'

const defaultServices = [
  {
    icon: '🛂',
    title: 'Indian Passport',
    desc: 'New passport applications, renewals, and emergency travel documents.',
    modalDesc:
      'We assist Indian nationals residing in Italy with all passport-related services through the Indian Consulate. Whether you need a new passport, a renewal, or an emergency travel document, our team prepares all required documentation and guides you through the consulate process.',
    points: [
      'New passport application for adults and minors',
      'Passport renewal before or after expiry',
      'Emergency Certificate (EC) for urgent travel',
      'Change of address or personal details',
      'Document preparation and verification',
      'Consulate appointment booking assistance',
    ],
  },
  {
    icon: '🖥️',
    title: 'E-Visa India',
    desc: 'Online Indian e-Visa application for tourism, business, and medical visits.',
    modalDesc:
      'The Indian e-Visa is an electronic travel authorization for visiting India for tourism, business, medical, or conference purposes. We assist you in completing the online application correctly, uploading the required documents, and tracking your application status.',
    points: [
      'e-Tourist Visa for leisure and family visits',
      'e-Business Visa for trade and meetings',
      'e-Medical Visa for treatment in India',
      'Online application form completion',
      'Photo and document specification guidance',
      'Application status tracking and support',
    ],
  },
  {
    icon: '🪪',
    title: 'OCI Card',
    desc: 'Overseas Citizen of India card application and renewal assistance.',
    modalDesc:
      'The OCI (Overseas Citizen of India) card grants lifelong visa-free travel to India and various other benefits to persons of Indian origin. We assist with new OCI applications, renewals, and re-issuance due to new passport or change of personal details.',
    points: [
      'New OCI card application',
      'OCI card renewal with new passport',
      'Re-issuance due to personal detail changes',
      'OCI for minors and children',
      'Document preparation and online submission',
      'Consulate follow-up and status tracking',
    ],
  },
  {
    icon: '🏛️',
    title: 'Other Consular Services',
    desc: 'Attestation, Power of Attorney, life certificates, and more.',
    modalDesc:
      'The Indian Consulate offers a range of additional services for Indian nationals abroad. We assist with document attestation, Power of Attorney, life certificates for pension purposes, and other official consular procedures.',
    points: [
      'Document attestation and apostille',
      'Power of Attorney (PoA) preparation',
      'Life certificate for pension (Jeevan Pramaan)',
      'Birth, marriage, and death certificate services',
      'Police Clearance Certificate (PCC)',
      'Surrender of Indian citizenship (renunciation)',
    ],
  },
]

type Service = (typeof defaultServices)[number]
type HeroStat = { num: string; label: string }

export default function IndianConsulatePage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  const rawServices = t('indianConsulate.services')
  const services: Service[] = Array.isArray(rawServices) ? (rawServices as Service[]) : defaultServices

  const rawStats = t('indianConsulate.hero.stats')
  const heroStats = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '4',    label: 'Core Services' },
        { num: '600+', label: 'Cases Handled' },
        { num: '20+',  label: 'Years Experience' },
        { num: '99%',  label: 'Success Rate' },
      ]

  const rawChecklist = t('indianConsulate.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Specialized in Indian consular procedures',
        'Hindi and English speaking staff',
        'Complete document preparation',
        'Consulate appointment assistance',
        'Fast and accurate processing',
        'Trusted by the Indian community in Italy',
      ]

  const heroBadge        = t('indianConsulate.hero.badge')              || '🇮🇳 Indian Consulate Services'
  const heroTitle        = t('indianConsulate.hero.title')              || 'Indian Consulate Services'
  const heroDesc         = t('indianConsulate.hero.desc')               || ''
  const viewServicesText = t('indianConsulate.hero.actions.viewServices') || 'View Services'
  const bookText         = t('indianConsulate.hero.actions.book')       || 'Book Appointment'

  const introTitle       = t('indianConsulate.intro.title')             || 'Your Trusted Partner for Indian Consular Services in Italy'
  const introBody        = t('indianConsulate.intro.body')              || ''
  const introVisualTitle = t('indianConsulate.intro.visualTitle')       || 'Why Choose AMEI'

  const sectionTag       = t('indianConsulate.section.tag')             || 'What We Offer'
  const sectionTitle     = t('indianConsulate.section.title')           || 'Our Consular Services'
  const sectionDesc      = t('indianConsulate.section.desc')            || ''
  const cardCta          = t('indianConsulate.card.cta')                || 'Learn More'

  const ctaTitle         = t('indianConsulate.cta.title')               || 'Need Help With Indian Consulate Services?'
  const ctaDesc          = t('indianConsulate.cta.desc')                || ''
  const ctaBook          = t('indianConsulate.cta.actions.book')        || 'Book Appointment'
  const ctaCall          = t('indianConsulate.cta.actions.call')        || 'Call Us Now'

  const modalListTitle   = t('indianConsulate.modal.listTitle')         || "What's Included"
  const modalClose       = t('indianConsulate.modal.close')             || 'Close'
  const modalBook        = t('indianConsulate.modal.book')              || 'Book Appointment'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.ind-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="ind-hero">
        <div className="container">
          <div className="ind-hero-inner animate-fade-in-up">
            <nav className="ind-hero-breadcrumb">
              <Link href="/">{t('indianConsulate.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('indianConsulate.breadcrumbCurrent') || 'Indian Consulate Services'}</span>
            </nav>

            <div className="ind-hero-badge">{heroBadge}</div>

            <h1 className="ind-hero-title">{heroTitle}</h1>

            <p className="ind-hero-desc">{heroDesc}</p>

            <div className="ind-hero-actions">
              <a href="#services" className="ind-btn-primary">{viewServicesText}</a>
              <Link href="/contact" className="ind-btn-outline">{bookText}</Link>
            </div>

            <div className="ind-hero-stats">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="ind-hero-stat-num">{s.num}</div>
                  <div className="ind-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="ind-intro">
        <div className="container">
          <div className="ind-intro-inner">
            <div className="ind-reveal">
              <h2 className="ind-intro-title">{introTitle}</h2>
              <p className="ind-intro-body">{introBody}</p>
            </div>

            <div className="ind-intro-visual ind-reveal delay-2">
              <div className="ind-intro-visual-title">{introVisualTitle}</div>
              <ul className="ind-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="ind-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="ind-services" id="services">
        <div className="container">
          <div className="ind-section-header ind-reveal">
            <span className="ind-section-tag">{sectionTag}</span>
            <h2 className="ind-section-title">{sectionTitle}</h2>
            <p className="ind-section-desc">{sectionDesc}</p>
          </div>

          <div className="ind-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`ind-card ind-reveal delay-${i + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="ind-card-icon-wrap">{service.icon}</div>
                <h3 className="ind-card-title">{service.title}</h3>
                <p className="ind-card-desc">{service.desc}</p>
                <span className="ind-card-cta">
                  {cardCta}
                  <span className="ind-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ind-cta" id="cta">
        <div className="container">
          <div className="ind-cta-box ind-reveal">
            <div>
              <h2 className="ind-cta-title">{ctaTitle}</h2>
              <p className="ind-cta-desc">{ctaDesc}</p>
            </div>
            <div className="ind-cta-actions">
              <Link href="/contact" className="ind-btn-primary">{ctaBook}</Link>
              <a href="tel:+390522172306" className="ind-btn-outline">{ctaCall}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="ind-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="ind-modal">
            <div className="ind-modal-header">
              <div className="ind-modal-icon">{activeModal.icon}</div>
              <h3 className="ind-modal-title">{activeModal.title}</h3>
              <p className="ind-modal-subtitle">{activeModal.desc}</p>
              <button className="ind-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="ind-modal-body">
              <p className="ind-modal-desc">{activeModal.modalDesc}</p>

              <div className="ind-modal-list-title">{modalListTitle}</div>
              <ul className="ind-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="ind-modal-footer">
                <Link href="/contact" className="ind-modal-btn ind-modal-btn-primary" onClick={() => setActiveModal(null)}>{modalBook}</Link>
                <button
                  className="ind-modal-btn ind-modal-btn-secondary"
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
