'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './training.css'

const services = [
  {
    icon: '🗣️',
    title: 'Corsi di Lingua',
    desc: 'Italian and English language courses for students and workers.',
    modalDesc:
      'Our language courses are designed for all levels — from complete beginners to advanced speakers. We offer Italian for foreigners and English for professionals, with flexible schedules to fit your work and study commitments.',
    points: [
      'Italian language courses for all levels (A1–C2)',
      'English language courses for professionals',
      'Flexible morning, afternoon, and evening schedules',
      'Small groups for personalized attention',
      'Official certification preparation (CILS, CELI, IELTS)',
      'Online and in-person options available',
    ],
  },
  {
    icon: '🎓',
    title: 'Qualifiche Professionali',
    desc: 'Certified professional qualification programs.',
    modalDesc:
      'Our professional qualification programs are officially recognized and designed to help you enter or advance in the Italian job market. We offer certifications across multiple sectors, fully compliant with Italian and European standards.',
    points: [
      'Nationally recognized professional certifications',
      'Programs for construction, logistics, and services',
      'Food handling and HACCP certification',
      'Forklift and machinery operator licenses',
      'Administrative and accounting qualifications',
      'Support for foreign qualification recognition',
    ],
  },
  {
    icon: '🏥',
    title: 'Settore Socio-Sanitario',
    desc: 'Training for healthcare and socio-sanitary sectors.',
    modalDesc:
      'Our socio-sanitary training programs prepare you for a career in healthcare assistance, elderly care, and social services. All courses are accredited and meet the requirements for working in Italian healthcare facilities.',
    points: [
      'OSS (Operatore Socio Sanitario) training course',
      'Elderly and disability care assistance',
      'First aid and emergency response certification',
      'Practical internship placement support',
      'Job placement assistance after certification',
      'Continuing education for existing professionals',
    ],
  },
  {
    icon: '⛑️',
    title: 'Corso Sicurezza sul Lavoro',
    desc: 'Workplace safety certification and training.',
    modalDesc:
      'Workplace safety training is mandatory for all workers in Italy under Legislative Decree 81/2008. Our certified courses cover general safety, specific risk categories, and first aid — fully compliant with Italian law.',
    points: [
      'General workplace safety (low, medium, high risk)',
      'RSPP and ASPP safety manager training',
      'First aid certification (D.Lgs. 81/2008)',
      'Fire prevention and emergency procedures',
      'Construction site safety (POS, PSC)',
      'Refresher courses for existing certifications',
    ],
  },
]

type Service = (typeof services)[number]

export default function TrainingPage() {
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.trn-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  return (
    <>
      {/* ── Hero ── */}
      <section className="trn-hero">
        <div className="container">
          <div className="trn-hero-inner animate-fade-in-up">
            <nav className="trn-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Formazione e Corsi di Lingua</span>
            </nav>

            <div className="trn-hero-badge">🎓 Training &amp; Language Courses</div>

            <h1 className="trn-hero-title">Formazione e Corsi di Lingua</h1>

            <p className="trn-hero-desc">
              We offer professional training programs and language courses designed to improve career
              opportunities and communication skills in Italy and Europe. Our certified instructors
              guide you every step of the way.
            </p>

            <div className="trn-hero-actions">
              <a href="#services" className="trn-btn-primary">View Courses</a>
              <a href="#cta" className="trn-btn-outline">Enroll Now</a>
            </div>

            <div className="trn-hero-stats">
              {[
                { num: '4',    label: 'Course Programs' },
                { num: '500+', label: 'Students Trained' },
                { num: '20+',  label: 'Years Experience' },
                { num: '98%',  label: 'Satisfaction Rate' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="trn-hero-stat-num">{s.num}</div>
                  <div className="trn-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="trn-intro">
        <div className="container">
          <div className="trn-intro-inner">
            <div className="trn-reveal">
              <h2 className="trn-intro-title">
                Build Your Skills, Advance Your Career
              </h2>
              <p className="trn-intro-body">
                At AMEI, we believe education and professional development are the keys to integration
                and success in Italy. Our training programs are designed for immigrants, workers, and
                anyone looking to improve their qualifications — with courses available in multiple
                languages and flexible formats to fit your lifestyle.
              </p>
            </div>

            <div className="trn-intro-visual trn-reveal delay-2">
              <div className="trn-intro-visual-title">Why Choose Our Courses</div>
              <ul className="trn-checklist">
                {[
                  'Certified and accredited programs',
                  'Experienced multilingual instructors',
                  'Flexible schedules for workers',
                  'Official certifications recognized in Italy',
                  'Small class sizes for better learning',
                  'Job placement support after completion',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="trn-check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="trn-services" id="services">
        <div className="container">
          <div className="trn-section-header trn-reveal">
            <span className="trn-section-tag">What We Offer</span>
            <h2 className="trn-section-title">Our Training Programs</h2>
            <p className="trn-section-desc">
              Click on any course card to learn more about the program, schedule, and how to enroll.
            </p>
          </div>

          <div className="trn-cards-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className={`trn-card trn-reveal delay-${i + 1}`}
                onClick={() => setActiveModal(service)}
              >
                <div className="trn-card-icon-wrap">{service.icon}</div>
                <h3 className="trn-card-title">{service.title}</h3>
                <p className="trn-card-desc">{service.desc}</p>
                <span className="trn-card-cta">
                  Learn More
                  <span className="trn-card-arrow">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="trn-cta" id="cta">
        <div className="container">
          <div className="trn-cta-box trn-reveal">
            <div>
              <h2 className="trn-cta-title">Ready to Start Your Training?</h2>
              <p className="trn-cta-desc">
                Enroll in one of our certified programs today. Our team will guide you through the
                registration process and help you choose the right course for your goals.
              </p>
            </div>
            <div className="trn-cta-actions">
              <button className="trn-btn-primary">Enroll Now</button>
              <button className="trn-btn-outline">View Courses</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeModal && (
        <div
          className="trn-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
        >
          <div className="trn-modal">
            <div className="trn-modal-header">
              <div className="trn-modal-icon">{activeModal.icon}</div>
              <h3 className="trn-modal-title">{activeModal.title}</h3>
              <p className="trn-modal-subtitle">{activeModal.desc}</p>
              <button className="trn-modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="trn-modal-body">
              <p className="trn-modal-desc">{activeModal.modalDesc}</p>

              <div className="trn-modal-list-title">What&apos;s Included</div>
              <ul className="trn-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="trn-modal-footer">
                <button className="trn-modal-btn trn-modal-btn-primary">Enroll Now</button>
                <button
                  className="trn-modal-btn trn-modal-btn-secondary"
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
