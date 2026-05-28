'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import './caf.css'

const services = [
  { icon: '📊', title: 'ISEE',                   desc: 'Indicatore della Situazione Economica Equivalente for welfare benefits.',       slug: 'isee' },
  { icon: '🧾', title: '730',                    desc: 'Annual income tax return filing for employees and pensioners.',                 slug: '730' },
  { icon: '💼', title: 'NASpI',                  desc: 'Unemployment benefit application and management.',                             slug: 'naspi' },
  { icon: '👶', title: 'Assegno Unico',           desc: 'Universal child allowance application for families.',                         slug: 'domanda-assegno-unico' },
  { icon: '♿', title: 'Invalidità',              desc: 'Disability recognition and benefit application support.',                     slug: 'invalidita' },
  { icon: '🏦', title: 'Pensione',                desc: 'Pension application, calculation, and retirement planning.',                  slug: 'domanda-di-pensione' },
  { icon: '🔐', title: 'SPID Activation',         desc: 'Digital identity activation for Italian online public services.',             slug: 'attivazione-spid' },
  { icon: '🏠', title: 'IMU',                     desc: 'Municipal property tax calculation and payment assistance.',                  slug: 'imu' },
  { icon: '📋', title: 'CUD',                     desc: 'Single certification of income and withholding taxes.',                      slug: 'cud' },
  { icon: '🧹', title: 'Colf e Badanti',          desc: 'Domestic worker and caregiver contract and contribution management.',         slug: 'colf-e-badanti' },
  { icon: '⚖️', title: 'Successione',             desc: 'Inheritance declaration and estate transfer procedures.',                    slug: 'successione' },
  { icon: '🌾', title: 'Disoccupazione Agricola', desc: 'Agricultural unemployment benefit application and support.',                 slug: 'disoccupazione-agricola' },
]

export default function CafPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.caf-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="caf-hero">
        <div className="container">
          <div className="caf-hero-inner animate-fade-in-up">
            <nav className="caf-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>C.A.F. e Patronato</span>
            </nav>

            <div className="caf-hero-badge">🏛️ CAF &amp; Patronato</div>

            <h1 className="caf-hero-title">C.A.F. e Patronato</h1>

            <p className="caf-hero-desc">
              Our CAF and Patronato services help individuals manage tax, pension, welfare, and
              administrative procedures quickly and accurately. We assist both Italian and
              international residents with official documentation and applications.
            </p>

            <div className="caf-hero-actions">
              <a href="#services" className="caf-btn-primary">View All Services</a>
              <Link href="/contact" className="caf-btn-outline">Contact Us</Link>
            </div>

            <div className="caf-hero-stats">
              {[
                { num: '19+',  label: 'Services Offered' },
                { num: '10K+', label: 'Practices Handled' },
                { num: '20+',  label: 'Years Experience' },
                { num: '98%',  label: 'Satisfaction Rate' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="caf-hero-stat-num">{s.num}</div>
                  <div className="caf-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="caf-intro">
        <div className="container">
          <div className="caf-intro-inner">
            <div className="caf-reveal">
              <h2 className="caf-intro-title">
                Complete Tax, Welfare &amp; Administrative Support
              </h2>
              <p className="caf-intro-body">
                The CAF (Centro di Assistenza Fiscale) and Patronato services at AMEI cover the full
                spectrum of fiscal and social security needs. Whether you need to file your tax return,
                apply for a pension, or activate your SPID digital identity, our certified team handles
                everything with precision and care — in multiple languages.
              </p>
            </div>

            <div className="caf-intro-visual caf-reveal delay-2">
              <div className="caf-intro-visual-title">Our Guarantees</div>
              <ul className="caf-checklist">
                {[
                  'Certified CAF & Patronato operators',
                  'Fast turnaround on all practices',
                  'Multilingual assistance available',
                  'Up-to-date with latest regulations',
                  'Transparent fees, no hidden costs',
                  'In-person and remote support',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="caf-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="caf-services" id="services">
        <div className="container">
          <div className="caf-section-header caf-reveal">
            <span className="caf-section-tag">What We Offer</span>
            <h2 className="caf-section-title">Our CAF &amp; Patronato Services</h2>
            <p className="caf-section-desc">
              Click on any service card to learn more about the process, requirements, and how we can help you.
            </p>
          </div>

          <div className="caf-cards-grid">
            {services.map((service, i) => (
              <Link
                key={i}
                href={`/caf/${service.slug}`}
                className={`caf-card caf-reveal delay-${(i % 4) + 1}`}
              >
                <div className="caf-card-icon-wrap">{service.icon}</div>
                <h3 className="caf-card-title">{service.title}</h3>
                <p className="caf-card-desc">{service.desc}</p>
                <span className="caf-card-cta">
                  Learn More
                  <span className="caf-card-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="caf-cta" id="cta">
        <div className="container">
          <div className="caf-cta-box caf-reveal">
            <div>
              <h2 className="caf-cta-title">Need Help With a CAF or Patronato Practice?</h2>
              <p className="caf-cta-desc">
                Our certified operators are ready to assist you. Book an appointment today and let us
                handle all the paperwork for you.
              </p>
            </div>
            <div className="caf-cta-actions">
              <Link href="/contact" className="caf-btn-primary">Book Appointment</Link>
              <a href="tel:+390522172306" className="caf-btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
