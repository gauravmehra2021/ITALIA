'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './visas.css'

const services = [
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
    icon: '👨‍👩‍👧',
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

type Service = (typeof services)[number]

export default function VisasPage() {
  const [activeModal, setActiveModal] = useState<Service | null>(null)

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
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Visti Internazionali</span>
            </nav>

            <div className="vis-hero-badge">🌍 International Visas</div>

            <h1 className="vis-hero-title">Visti Internazionali</h1>

            <p className="vis-hero-desc">
              We assist clients in applying for international visas with proper documentation,
              application support, and consultation services. Our experts ensure your visa
              application is complete, accurate, and submitted on time.
            </p>

            <div className="vis-hero-actions">
              <a href="#services" className="vis-btn-primary">View Visa Types</a>
              <a href="#cta" className="vis-btn-outline">Apply for Visa</a>
            </div>

            <div className="vis-hero-stats">
              {[
                { num: '6',    label: 'Visa Categories' },
                { num: '800+', label: 'Visas Processed' },
                { num: '20+',  label: 'Years Experience' },
                { num: '97%',  label: 'Approval Rate' },
              ].map((s, i) => (
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
              <h2 className="vis-intro-title">
                Expert Visa Assistance for Every Destination
              </h2>
              <p className="vis-intro-body">
                Navigating international visa requirements can be complex and stressful. At AMEI,
                our visa specialists have in-depth knowledge of consular procedures and documentation
                requirements for Italy and the Schengen area. We handle every detail so your
                application has the best possible chance of approval.
              </p>
            </div>

            <div className="vis-intro-visual vis-reveal delay-2">
              <div className="vis-intro-visual-title">Why Choose AMEI</div>
              <ul className="vis-checklist">
                {[
                  'Experienced visa consultants',
                  'Complete document preparation',
                  'Embassy appointment assistance',
                  'Multilingual support team',
                  'Fast and accurate processing',
                  'High visa approval rate',
                ].map((item, i) => (
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
            <span className="vis-section-tag">What We Offer</span>
            <h2 className="vis-section-title">Our Visa Services</h2>
            <p className="vis-section-desc">
              Click on any visa type to learn more about requirements, documents, and how to apply.
            </p>
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
                  Learn More
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
              <h2 className="vis-cta-title">Ready to Apply for Your Visa?</h2>
              <p className="vis-cta-desc">
                Book an appointment with our visa specialists today. We will review your case,
                prepare all required documents, and guide you through every step of the application.
              </p>
            </div>
            <div className="vis-cta-actions">
              <button className="vis-btn-primary">Apply for Visa</button>
              <button className="vis-btn-outline">Call Us Now</button>
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

              <div className="vis-modal-list-title">What&apos;s Included</div>
              <ul className="vis-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="vis-modal-footer">
                <button className="vis-modal-btn vis-modal-btn-primary">Apply for Visa</button>
                <button
                  className="vis-modal-btn vis-modal-btn-secondary"
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
