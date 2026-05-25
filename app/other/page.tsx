'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './other.css'

const services = [
  {
    icon: '🌐',
    title: 'Translation Services',
    desc: 'Professional document translation in multiple languages.',
    modalDesc:
      'Our certified translators provide accurate and legally recognized translations for all types of documents — from personal certificates to official legal and administrative papers. We cover Italian, English, French, Spanish, Arabic, Hindi, and more.',
    points: [
      'Certified translations for official use',
      'Personal documents: birth, marriage, death certificates',
      'Legal and administrative document translation',
      'Immigration and consular document translation',
      'Apostille coordination for translated documents',
      'Fast turnaround with quality guarantee',
    ],
  },
  {
    icon: '📄',
    title: 'CV Creation',
    desc: 'Professional CV and cover letter writing for the Italian job market.',
    modalDesc:
      'A well-crafted CV is your first step toward employment in Italy. Our team creates professional, ATS-optimized CVs and cover letters tailored to the Italian job market standards, helping you stand out to employers and recruitment agencies.',
    points: [
      'Professional CV in Italian Europass format',
      'Custom CV for specific job applications',
      'Cover letter (lettera di presentazione) writing',
      'LinkedIn profile optimization',
      'CV translation from your native language',
      'Interview preparation tips included',
    ],
  },
  {
    icon: '🗣️',
    title: 'Interpreter Services',
    desc: 'Professional interpreting for appointments, hearings, and meetings.',
    modalDesc:
      'Our professional interpreters assist you in official settings where language barriers can be critical — from medical appointments and legal hearings to police stations and government offices. We provide consecutive and simultaneous interpretation in multiple languages.',
    points: [
      'Medical appointment interpretation',
      'Legal and court hearing interpretation',
      'Police station and questura assistance',
      'Government office and municipality support',
      'Business meeting interpretation',
      'Available in Italian, English, French, Arabic, Hindi, and more',
    ],
  },
]

type Service = (typeof services)[number]

export default function OtherServicesPage() {
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.oth-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="oth-hero">
        <div className="container">
          <div className="oth-hero-inner animate-fade-in-up">
            <nav className="oth-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Altri Servizi</span>
            </nav>

            <div className="oth-hero-badge">✨ Altri Servizi</div>

            <h1 className="oth-hero-title">Altri Servizi</h1>

            <p className="oth-hero-desc">
              Beyond our core services, AMEI offers a range of additional support services to help
              you communicate, present yourself professionally, and navigate daily life in Italy.
              From translations to CV writing and interpreting, we are here to help.
            </p>

            <div className="oth-hero-actions">
              <a href="#services" className="oth-btn-primary">View Services</a>
              <Link href="/contact" className="oth-btn-outline">Send Inquiry</Link>
            </div>

            <div className="oth-hero-stats">
              {[
                { num: '3',    label: 'Services Offered' },
                { num: '20+',  label: 'Languages Covered' },
                { num: '20+',  label: 'Years Experience' },
                { num: '100%', label: 'Client Satisfaction' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="oth-hero-stat-num">{s.num}</div>
                  <div className="oth-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="oth-intro">
        <div className="container">
          <div className="oth-intro-inner">
            <div className="oth-reveal">
              <h2 className="oth-intro-title">
                Supporting You Beyond the Paperwork
              </h2>
              <p className="oth-intro-body">
                Life in Italy involves more than just bureaucratic procedures. At AMEI, we offer
                practical support services that help you communicate effectively, find employment,
                and navigate official appointments with confidence. Our multilingual team is always
                ready to assist you in your own language.
              </p>
            </div>

            <div className="oth-intro-visual oth-reveal delay-2">
              <div className="oth-intro-visual-title">Why Choose AMEI</div>
              <ul className="oth-checklist">
                {[
                  'Certified translators and interpreters',
                  'Over 20 languages available',
                  'Fast turnaround on all services',
                  'Legally recognized translations',
                  'Professional CV writing experts',
                  'Available in-person and remotely',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="oth-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="oth-services" id="services">
        <div className="container">
          <div className="oth-section-header oth-reveal">
            <span className="oth-section-tag">What We Offer</span>
            <h2 className="oth-section-title">Our Additional Services</h2>
            <p className="oth-section-desc">
              Click on any service card to learn more and send us an inquiry.
            </p>
          </div>

          <div className="oth-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`oth-card oth-reveal delay-${i + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="oth-card-icon-wrap">{service.icon}</div>
                <h3 className="oth-card-title">{service.title}</h3>
                <p className="oth-card-desc">{service.desc}</p>
                <span className="oth-card-cta">
                  Learn More
                  <span className="oth-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="oth-cta" id="cta">
        <div className="container">
          <div className="oth-cta-box oth-reveal">
            <div>
              <h2 className="oth-cta-title">Need One of These Services?</h2>
              <p className="oth-cta-desc">
                Send us an inquiry today and our team will get back to you promptly with all the
                information you need to get started.
              </p>
            </div>
            <div className="oth-cta-actions">
              <Link href="/contact" className="oth-btn-primary">Send Inquiry</Link>
              <a href="tel:+390522172306" className="oth-btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="oth-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="oth-modal">
            <div className="oth-modal-header">
              <div className="oth-modal-icon">{activeModal.icon}</div>
              <h3 className="oth-modal-title">{activeModal.title}</h3>
              <p className="oth-modal-subtitle">{activeModal.desc}</p>
              <button className="oth-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="oth-modal-body">
              <p className="oth-modal-desc">{activeModal.modalDesc}</p>

              <div className="oth-modal-list-title">What&apos;s Included</div>
              <ul className="oth-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="oth-modal-footer">
              <Link href="/contact" className="oth-modal-btn oth-modal-btn-primary" onClick={() => setActiveModal(null)}>Send Inquiry</Link>
                <button
                  className="oth-modal-btn oth-modal-btn-secondary"
                  onClick={() => setActiveModal(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
