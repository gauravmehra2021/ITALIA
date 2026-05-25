'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import './home.css'

const services = [
  { icon: '🌍', title: 'Immigration Services',       desc: 'Residence permits, family reunification, citizenship, and more.',        href: '/immigration' },
  { icon: '🏛️', title: 'CAF & Patronato',            desc: 'Tax returns, ISEE, pensions, and social welfare assistance.',            href: '/caf' },
  { icon: '🎓', title: 'Training & Courses',          desc: 'Language courses, professional qualifications, and safety training.',    href: '/training' },
  { icon: '💼', title: 'Business Consultancy',        desc: 'Business registration, DVR documentation, and compliance support.',      href: '/business' },
  { icon: '🛡️', title: 'Insurance',                  desc: 'Health, life, home, vehicle, and business insurance solutions.',         href: '/insurance' },
  { icon: '🇮🇳', title: 'Indian Consulate',           desc: 'Passport, OCI card, e-Visa, and other consular services.',              href: '/indian-consulate' },
  { icon: '✈️', title: 'International Visas',         desc: 'Tourist, work, student, family, and medical visa assistance.',          href: '/visas' },
  { icon: '🌐', title: 'Other Services',              desc: 'Translations, CV creation, and professional interpreter services.',      href: '/other' },
]

const features = [
  { icon: '🏆', title: '20+ Years Experience',    text: 'Trusted by thousands of clients across Italy and Europe.' },
  { icon: '🌍', title: 'Multilingual Team',        text: 'Support in Italian, English, French, Arabic, Hindi, and more.' },
  { icon: '⚡', title: 'Fast Processing',          text: 'Quick turnaround on all applications and documentation.' },
  { icon: '✅', title: '98% Success Rate',         text: 'Proven track record across all our service categories.' },
  { icon: '🤝', title: 'Client-First Approach',   text: 'Personalized guidance tailored to your specific situation.' },
  { icon: '📋', title: 'Full Compliance',          text: 'Always up to date with the latest Italian and EU regulations.' },
]

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.home-reveal, .home-reveal-left, .home-reveal-right')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="container">
          <div className="home-hero-inner">

            <div className="home-hero-badge">🇮🇹 AMEI — Associazione Mondo e Italia</div>

            <h1 className="home-hero-title">
              We Help You <span>Live, Work</span><br />
              &amp; Thrive in Italy
            </h1>

            <p className="home-hero-desc">
              Complete immigration, administrative, and professional services for individuals,
              families, and businesses. Our certified team guides you through every step —
              in your language.
            </p>

            <div className="home-hero-actions">
              <Link href="/immigration" className="home-btn-primary">
                Explore Services →
              </Link>
              <Link href="/WhoWeAre" className="home-btn-outline">
                Who We Are
              </Link>
            </div>

            <div className="home-hero-stats">
              {[
                { num: '20+',  label: 'Years Experience' },
                { num: '5K+',  label: 'Clients Assisted' },
                { num: '98%',  label: 'Success Rate' },
                { num: '8',    label: 'Service Areas' },
              ].map((s, i) => (
                <div className="home-hero-stat" key={i}>
                  <div className="home-hero-stat-num">{s.num}</div>
                  <div className="home-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          INTRO
      ════════════════════════════════ */}
      <section className="home-intro">
        <div className="container">
          <div className="home-intro-inner">

            <div className="home-reveal-left">
              <span className="home-intro-eyebrow">About AMEI</span>
              <h2 className="home-intro-title">
                Your Trusted Partner for Life in Italy
              </h2>
              <p className="home-intro-text">
                AMEI — Associazione Mondo e Italia — is a professional services organization
                dedicated to helping immigrants, families, and businesses navigate the complexities
                of Italian bureaucracy. With over 20 years of experience, we offer end-to-end
                support across immigration, tax, training, insurance, and more.
              </p>
              <p className="home-intro-text">
                Our multilingual team is committed to making your journey in Italy smooth,
                legal, and stress-free — from your first day to full integration.
              </p>
              <Link href="/WhoWeAre" className="home-intro-btn">
                Learn More About Us
                <span className="home-intro-btn-arrow">→</span>
              </Link>
            </div>

            <div className="home-reveal-right home-delay-1">
              <div className="home-intro-visual">
                <div className="home-intro-visual-title">Why Clients Choose AMEI</div>
                <ul className="home-checklist">
                  {[
                    'Certified immigration consultants',
                    'CAF & Patronato authorized operators',
                    'Multilingual support in 6+ languages',
                    'Fast and transparent processes',
                    'Thousands of successful cases',
                    'Offices across Italy',
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="home-check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICES
      ════════════════════════════════ */}
      <section className="home-services" id="services">
        <div className="container">

          <div className="home-section-header home-reveal">
            <span className="home-section-tag">What We Offer</span>
            <h2 className="home-section-title">Our Complete Service Range</h2>
            <p className="home-section-desc">
              From immigration to insurance — click any service to explore how we can help you.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className={`home-service-card home-reveal home-delay-${(i % 4) + 1}`}
              >
                <div className="home-service-icon">{s.icon}</div>
                <h3 className="home-service-title">{s.title}</h3>
                <p className="home-service-desc">{s.desc}</p>
                <span className="home-service-cta">
                  Learn More
                  <span className="home-service-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════ */}
      <section className="home-why">
        <div className="container">
          <div className="home-why-inner">

            <div className="home-reveal-left">
              <span className="home-intro-eyebrow">Why AMEI</span>
              <h2 className="home-intro-title">
                The Expertise &amp; Care You Deserve
              </h2>
              <p className="home-intro-text">
                We don&apos;t just process paperwork — we build lasting relationships with our
                clients. Our team of certified professionals is dedicated to delivering results
                with transparency, speed, and genuine care for your wellbeing.
              </p>
              <Link href="/WhoWeAre" className="home-intro-btn">
                Discover Our Story
                <span className="home-intro-btn-arrow">→</span>
              </Link>
            </div>

            <div className="home-why-features home-reveal-right home-delay-1">
              {features.map((f, i) => (
                <div key={i} className={`home-why-feature home-reveal home-delay-${(i % 3) + 1}`}>
                  <span className="home-why-feature-icon">{f.icon}</span>
                  <div className="home-why-feature-title">{f.title}</div>
                  <p className="home-why-feature-text">{f.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA
      ════════════════════════════════ */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-box home-reveal">
            <div className="home-cta-text">
              <h2 className="home-cta-title">Ready to Start Your Journey in Italy?</h2>
              <p className="home-cta-desc">
                Our experts are ready to assist you. Book a free consultation today and let us
                guide you through every step — in your language.
              </p>
            </div>
            <div className="home-cta-actions">
              <Link href="/contact" className="home-btn-primary">Get Started →</Link>
              <Link href="/WhoWeAre" className="home-btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
