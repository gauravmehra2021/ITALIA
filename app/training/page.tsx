'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './training.css'

const defaultServices = [
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

type Service = (typeof defaultServices)[number]

type HeroStat = { num: string; label: string }

export default function TrainingPage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<Service | null>(null)

  const rawServices = t('training.services')
  const services: Service[] = Array.isArray(rawServices) ? (rawServices as Service[]) : defaultServices

  const rawStats = t('training.hero.stats')
  const heroStats = Array.isArray(rawStats)
    ? (rawStats as HeroStat[])
    : [
        { num: '4',    label: 'Course Programs' },
        { num: '500+', label: 'Students Trained' },
        { num: '20+',  label: 'Years Experience' },
        { num: '98%',  label: 'Satisfaction Rate' },
      ]

  const rawChecklist = t('training.intro.checklist')
  const checklist: string[] = Array.isArray(rawChecklist)
    ? (rawChecklist as string[])
    : [
        'Certified and accredited programs',
        'Experienced multilingual instructors',
        'Flexible schedules for workers',
        'Official certifications recognized in Italy',
        'Small class sizes for better learning',
        'Job placement support after completion',
      ]

  const heroBadge = t('training.hero.badge') || '🎓 Training & Language Courses'
  const heroTitle = t('training.hero.title') || 'Training & Language Courses'
  const heroDesc = t('training.hero.desc') || 'We offer professional training programs and language courses designed to improve career opportunities and communication skills in Italy and Europe. Our certified instructors guide you every step of the way.'
  const viewCoursesText = t('training.hero.actions.viewCourses') || 'View Courses'
  const enrollText = t('training.hero.actions.enroll') || 'Enroll Now'

  const introTitle = t('training.intro.title') || 'Build Your Skills, Advance Your Career'
  const introBody = t('training.intro.body') || 'At AMEI, we believe education and professional development are the keys to integration and success in Italy. Our training programs are designed for immigrants, workers, and anyone looking to improve their qualifications — with courses available in multiple languages and flexible formats to fit your lifestyle.'
  const introVisualTitle = t('training.intro.visualTitle') || 'Why Choose Our Courses'

  const sectionTag = t('training.section.tag') || 'What We Offer'
  const sectionTitle = t('training.section.title') || 'Our Training Programs'
  const sectionDesc = t('training.section.desc') || 'Click on any course card to learn more about the program, schedule, and how to enroll.'
  const cardCta = t('training.card.cta') || 'Learn More'

  const ctaTitle = t('training.cta.title') || 'Ready to Start Your Training?'
  const ctaDesc = t('training.cta.desc') || 'Enroll in one of our certified programs today. Our team will guide you through the registration process and help you choose the right course for your goals.'
  const ctaEnroll = t('training.cta.actions.enroll') || 'Enroll Now'
  const ctaView = t('training.cta.actions.view') || 'View Courses'
  const modalListTitle = t('training.modal.listTitle') || "What's Included"
  const modalClose = t('training.modal.close') || 'Close'

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
              <Link href="/">{t('training.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('training.breadcrumbCurrent') || 'Training & Language Courses'}</span>
            </nav>

            <div className="trn-hero-badge">{heroBadge}</div>

            <h1 className="trn-hero-title">{heroTitle}</h1>

            <p className="trn-hero-desc">
              {heroDesc}
            </p>

            <div className="trn-hero-actions">
              <a href="#services" className="trn-btn-primary">{viewCoursesText}</a>
              <Link href="/contact" className="trn-btn-outline">{enrollText}</Link>
            </div>

            <div className="trn-hero-stats">
              {heroStats.map((s, i) => (
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
                {introTitle}
              </h2>
              <p className="trn-intro-body">
                {introBody}
              </p>
            </div>

            <div className="trn-intro-visual trn-reveal delay-2">
              <div className="trn-intro-visual-title">{introVisualTitle}</div>
              <ul className="trn-checklist">
                {checklist.map((item, i) => (
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
            <span className="trn-section-tag">{sectionTag}</span>
            <h2 className="trn-section-title">{sectionTitle}</h2>
            <p className="trn-section-desc">
              {sectionDesc}
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
                  {cardCta}
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
              <h2 className="trn-cta-title">{ctaTitle}</h2>
              <p className="trn-cta-desc">
                {ctaDesc}
              </p>
            </div>
            <div className="trn-cta-actions">
              <Link href="/contact" className="trn-btn-primary">{ctaEnroll}</Link>
              <a href="#services" className="trn-btn-outline">{ctaView}</a>
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

              <div className="trn-modal-list-title">{modalListTitle}</div>
              <ul className="trn-modal-list">
                {activeModal.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="trn-modal-footer">
              <Link href="/contact" className="trn-modal-btn trn-modal-btn-primary" onClick={() => setActiveModal(null)}>{ctaEnroll}</Link>
                <button
                  className="trn-modal-btn trn-modal-btn-secondary"
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
