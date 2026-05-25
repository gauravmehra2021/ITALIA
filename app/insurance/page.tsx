'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './insurance.css'

const services = [
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
    desc: 'Protect your family\'s financial future with tailored life policies.',
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

type Service = (typeof services)[number]

export default function InsurancePage() {
  const [activeModal, setActiveModal] = useState<Service | null>(null)

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
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Assicurazioni</span>
            </nav>

            <div className="ins-hero-badge">🛡️ Insurance Services</div>

            <h1 className="ins-hero-title">Assicurazioni</h1>

            <p className="ins-hero-desc">
              Protect your family, home, business, and future with our customized insurance
              solutions. We work with leading insurers to find the best coverage at the most
              competitive price — tailored to your specific needs.
            </p>

            <div className="ins-hero-actions">
              <a href="#services" className="ins-btn-primary">View Insurance Types</a>
              <Link href="/contact" className="ins-btn-outline">Get a Quote</Link>
            </div>

            <div className="ins-hero-stats">
              {[
                { num: '5',    label: 'Insurance Types' },
                { num: '1K+',  label: 'Policies Managed' },
                { num: '20+',  label: 'Years Experience' },
                { num: '98%',  label: 'Client Satisfaction' },
              ].map((s, i) => (
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
              <h2 className="ins-intro-title">
                Complete Protection for Every Aspect of Your Life
              </h2>
              <p className="ins-intro-body">
                At AMEI, we understand that every client has unique insurance needs. Whether you are
                an individual, a family, or a business owner, our insurance specialists analyze your
                situation and recommend the most suitable coverage from a wide range of trusted
                providers — ensuring you are always protected at the right price.
              </p>
            </div>

            <div className="ins-intro-visual ins-reveal delay-2">
              <div className="ins-intro-visual-title">Why Choose AMEI Insurance</div>
              <ul className="ins-checklist">
                {[
                  'Independent insurance brokers',
                  'Comparison across multiple insurers',
                  'Personalized coverage recommendations',
                  'Multilingual assistance available',
                  'Claims support and assistance',
                  'Annual policy review service',
                ].map((item, i) => (
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
            <span className="ins-section-tag">What We Offer</span>
            <h2 className="ins-section-title">Our Insurance Solutions</h2>
            <p className="ins-section-desc">
              Click on any insurance type to learn more about coverage options and request a personalized quote.
            </p>
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
                  Learn More
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
              <h2 className="ins-cta-title">Get Your Personalized Insurance Quote</h2>
              <p className="ins-cta-desc">
                Our insurance specialists are ready to find the best coverage for you. Request a
                free quote today and let us protect what matters most.
              </p>
            </div>
            <div className="ins-cta-actions">
              <Link href="/contact" className="ins-btn-primary">Request a Quote</Link>
              <a href="tel:+390522172306" className="ins-btn-outline">Call Us Now</a>
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

              <div className="ins-modal-list-title">What&apos;s Covered</div>
              <ul className="ins-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="ins-modal-footer">
              <Link href="/contact" className="ins-modal-btn ins-modal-btn-primary" onClick={() => setActiveModal(null)}>Request a Quote</Link>
                <button
                  className="ins-modal-btn ins-modal-btn-secondary"
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
