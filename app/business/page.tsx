'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './business.css'

const services = [
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

type Service = (typeof services)[number]

export default function BusinessPage() {
  const [activeModal, setActiveModal] = useState<Service | null>(null)

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
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Consulenza Aziendale</span>
            </nav>

            <div className="biz-hero-badge">💼 Business Consultancy</div>

            <h1 className="biz-hero-title">Consulenza Aziendale</h1>

            <p className="biz-hero-desc">
              We support startups, companies, and entrepreneurs with business registration, legal
              documentation, and workplace compliance solutions. Our experts simplify every step of
              the process so you can focus on growing your business.
            </p>

            <div className="biz-hero-actions">
              <a href="#services" className="biz-btn-primary">View Services</a>
              <a href="#cta" className="biz-btn-outline">Request Consultation</a>
            </div>

            <div className="biz-hero-stats">
              {[
                { num: '2',    label: 'Core Services' },
                { num: '300+', label: 'Businesses Assisted' },
                { num: '20+',  label: 'Years Experience' },
                { num: '100%', label: 'Legal Compliance' },
              ].map((s, i) => (
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
              <h2 className="biz-intro-title">
                Your Partner for Business Setup &amp; Compliance
              </h2>
              <p className="biz-intro-body">
                Setting up a business in Italy requires navigating complex regulations, tax
                obligations, and safety requirements. At AMEI, our business consultancy team
                provides end-to-end support — from the very first registration step to ongoing
                compliance management — so your business operates smoothly and legally.
              </p>
            </div>

            <div className="biz-intro-visual biz-reveal delay-2">
              <div className="biz-intro-visual-title">Why Choose AMEI</div>
              <ul className="biz-checklist">
                {[
                  'Certified business consultants',
                  'Full legal and tax compliance support',
                  'Multilingual assistance available',
                  'Fast registration turnaround',
                  'Workplace safety documentation experts',
                  'Ongoing post-registration support',
                ].map((item, i) => (
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
            <span className="biz-section-tag">What We Offer</span>
            <h2 className="biz-section-title">Our Business Services</h2>
            <p className="biz-section-desc">
              Click on any service card to learn more about the process, requirements, and how we can help you.
            </p>
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
                  Learn More
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
              <h2 className="biz-cta-title">Ready to Start or Grow Your Business?</h2>
              <p className="biz-cta-desc">
                Our business consultants are ready to assist you. Request a free consultation today
                and let us handle all the registration and compliance paperwork for you.
              </p>
            </div>
            <div className="biz-cta-actions">
              <button className="biz-btn-primary">Request Consultation</button>
              <button className="biz-btn-outline">Call Us Now</button>
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

              <div className="biz-modal-list-title">What&apos;s Included</div>
              <ul className="biz-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="biz-modal-footer">
                <button className="biz-modal-btn biz-modal-btn-primary">Request Consultation</button>
                <button
                  className="biz-modal-btn biz-modal-btn-secondary"
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
