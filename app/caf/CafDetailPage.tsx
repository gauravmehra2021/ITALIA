'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import './caf.css'

export interface CafDetailProps {
  icon: string
  title: string
  subtitle: string
  description: string
  steps: string[]
  documents: string[]
}

export default function CafDetailPage({ icon, title, subtitle, description, steps, documents }: CafDetailProps) {
  const { t } = useLanguage()
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
      {/* ── Detail Hero ── */}
      <section className="caf-detail-hero">
        <div className="container">
          <div className="caf-detail-hero-inner animate-fade-in-up">
            <nav className="caf-detail-breadcrumb">
              <Link href="/">{t('caf.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <Link href="/caf">{t('caf.breadcrumbCurrent') || 'C.A.F. e Patronato'}</Link>
              <span>/</span>
              <span>{title}</span>
            </nav>
            <div className="caf-detail-icon">{icon}</div>
            <h1 className="caf-detail-title">{title}</h1>
            <p className="caf-detail-subtitle">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* ── Detail Body ── */}
      <section className="caf-detail-body">
        <div className="container">
          <div className="caf-detail-inner">

            {/* Main Content */}
            <div className="caf-detail-main caf-reveal">
              <h2 className="caf-detail-section-title">{t('caf.detail.aboutTitle')}</h2>
              <p className="caf-detail-text">{description}</p>

              <h2 className="caf-detail-section-title">{t('caf.detail.howItWorksTitle')}</h2>
              <div className="caf-detail-steps">
                {steps.map((step, i) => (
                  <div className="caf-detail-step" key={i}>
                    <div className="caf-detail-step-num">{i + 1}</div>
                    <div className="caf-detail-step-text">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="caf-detail-sidebar caf-reveal delay-2">
              <div className="caf-detail-sidebar-card">
                <div className="caf-detail-sidebar-title">{t('caf.detail.documentsTitle')}</div>
                <ul className="caf-detail-docs-list">
                  {documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div className="caf-detail-sidebar-card">
                <div className="caf-detail-sidebar-title">{t('caf.detail.assistanceTitle')}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                  {t('caf.detail.assistanceDesc')}
                </p>
                <button className="caf-detail-contact-btn">{t('caf.detail.bookBtn')}</button>
                <button className="caf-detail-contact-btn" style={{ marginTop: '10px', background: '#f1f5fb', color: 'var(--primary)' }}>
                  {t('caf.detail.callBtn')}
                </button>
              </div>

              <div className="caf-detail-sidebar-card">
                <div className="caf-detail-sidebar-title">{t('caf.detail.otherServicesTitle')}</div>
                <Link href="/caf" style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {t('caf.detail.backLink')}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
