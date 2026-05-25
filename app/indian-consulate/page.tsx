'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './indian-consulate.css'

const services = [
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

type Service = (typeof services)[number]

export default function IndianConsulatePage() {
  const [activeModal, setActiveModal] = useState<Service | null>(null)

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
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Servizi Consolato Indiano</span>
            </nav>

            <div className="ind-hero-badge">🇮🇳 Indian Consulate Services</div>

            <h1 className="ind-hero-title">Servizi Consolato Indiano</h1>

            <p className="ind-hero-desc">
              We provide assistance for Indian consulate-related services including passport
              renewals, OCI cards, and visa applications. Our team guides Indian nationals
              residing in Italy through every consular procedure with ease and accuracy.
            </p>

            <div className="ind-hero-actions">
              <a href="#services" className="ind-btn-primary">View Services</a>
              <a href="#cta" className="ind-btn-outline">Book Appointment</a>
            </div>

            <div className="ind-hero-stats">
              {[
                { num: '4',    label: 'Core Services' },
                { num: '600+', label: 'Cases Handled' },
                { num: '20+',  label: 'Years Experience' },
                { num: '99%',  label: 'Success Rate' },
              ].map((s, i) => (
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
              <h2 className="ind-intro-title">
                Your Trusted Partner for Indian Consular Services in Italy
              </h2>
              <p className="ind-intro-body">
                Navigating Indian consulate procedures from abroad can be challenging. At AMEI, we
                specialize in assisting the Indian community in Italy with all consular needs —
                from passport renewals to OCI applications. Our multilingual team ensures your
                documents are correctly prepared and submitted, saving you time and avoiding errors.
              </p>
            </div>

            <div className="ind-intro-visual ind-reveal delay-2">
              <div className="ind-intro-visual-title">Why Choose AMEI</div>
              <ul className="ind-checklist">
                {[
                  'Specialized in Indian consular procedures',
                  'Hindi and English speaking staff',
                  'Complete document preparation',
                  'Consulate appointment assistance',
                  'Fast and accurate processing',
                  'Trusted by the Indian community in Italy',
                ].map((item, i) => (
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
            <span className="ind-section-tag">What We Offer</span>
            <h2 className="ind-section-title">Our Consular Services</h2>
            <p className="ind-section-desc">
              Click on any service card to learn more about the process, required documents, and how we can help you.
            </p>
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
                  Learn More
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
              <h2 className="ind-cta-title">Need Help With Indian Consulate Services?</h2>
              <p className="ind-cta-desc">
                Our specialists are ready to assist you. Book an appointment today and let us
                handle all your consular documentation and procedures.
              </p>
            </div>
            <div className="ind-cta-actions">
              <button className="ind-btn-primary">Book Appointment</button>
              <button className="ind-btn-outline">Call Us Now</button>
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

              <div className="ind-modal-list-title">What&apos;s Included</div>
              <ul className="ind-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="ind-modal-footer">
                <button className="ind-modal-btn ind-modal-btn-primary">Book Appointment</button>
                <button
                  className="ind-modal-btn ind-modal-btn-secondary"
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
