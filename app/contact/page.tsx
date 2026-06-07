'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { submitContactForm } from '../lib/contact'
import './contact.css'

type HourRow  = { day: string; time: string; closed: boolean }
type LinkItem = { label: string; href: string }
type ContactItem = { icon: string; label: string; value: string }

export default function ContactPage() {
  const { t } = useLanguage()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    services: [] as string[],
    message: '',
    preferredContact: 'email',
  })
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState<string | null>(null)
  const [consentContact, setConsentContact]       = useState(false)
  const [consentAdvertising, setConsentAdvertising] = useState(false)
  const [consentThirdParty, setConsentThirdParty] = useState(false)

  const rawServiceOptions = t('contact.form.serviceOptions')
  const serviceOptions: string[] = Array.isArray(rawServiceOptions)
    ? (rawServiceOptions as string[])
    : ['Immigration Services','CAF & Patronato','Training & Courses','Business Consultancy','Insurance','Indian Consulate','International Visas','Other Services']

  const rawSubjectOptions = t('contact.form.subjectOptions')
  const subjectOptions: string[] = Array.isArray(rawSubjectOptions)
    ? (rawSubjectOptions as string[])
    : ['Book an Appointment','Request Information','Document Assistance','Application Status','General Inquiry','Other']

  const rawHours = t('contact.sidebar.hours')
  const hours: HourRow[] = Array.isArray(rawHours)
    ? (rawHours as HourRow[])
    : [
        { day: 'Monday – Friday', time: '9:00 – 18:00', closed: false },
        { day: 'Saturday',        time: '9:00 – 13:00', closed: false },
        { day: 'Sunday',          time: 'Closed',        closed: true  },
      ]

  const rawLinks = t('contact.sidebar.links')
  const quickLinks: LinkItem[] = Array.isArray(rawLinks)
    ? (rawLinks as LinkItem[])
    : [
        { label: 'Immigration Services', href: '/immigration' },
        { label: 'CAF & Patronato',      href: '/caf' },
        { label: 'International Visas',  href: '/visas' },
        { label: 'Who We Are',           href: '/WhoWeAre' },
      ]

  const rawContactItems = t('contact.sidebar.contactItems')
  const contactItems: ContactItem[] = Array.isArray(rawContactItems)
    ? (rawContactItems as ContactItem[])
    : [
        { icon: '📞', label: 'Phone',  value: '0522 1723060' },
        { icon: '📧', label: 'Email',  value: 'info@gruppoeuropa.net' },
        { icon: '📍', label: 'Office', value: 'Via G. Battista Pergolesi 2/A\n20124 Milan, Italy' },
      ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.cnt-reveal, .cnt-reveal-left, .cnt-reveal-right')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await submitContactForm({
        ...form,
        consentContact,
        consentAdvertising,
        consentThirdParty,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="cnt-hero">
        <div className="container">
          <div className="cnt-hero-inner">
            <nav className="cnt-hero-breadcrumb">
              <Link href="/">{t('contact.breadcrumbHome') || 'Home'}</Link>
              <span>/</span>
              <span>{t('contact.breadcrumbCurrent') || 'Contact Us'}</span>
            </nav>
            <div className="cnt-hero-badge">{t('contact.hero.badge') || '📬 Get In Touch'}</div>
            <h1 className="cnt-hero-title">{t('contact.hero.title') || 'Contact Us'}</h1>
            <p className="cnt-hero-desc">{t('contact.hero.desc') || ''}</p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="cnt-body">
        <div className="container">
          <div className="cnt-body-inner">

            {/* ── Form ── */}
            <div className="cnt-form-card cnt-reveal-left">
              {submitted ? (
                <div className="cnt-success">
                  <div className="cnt-success-icon">✓</div>
                  <h2 className="cnt-success-title">{t('contact.success.title') || 'Message Sent Successfully!'}</h2>
                  <p className="cnt-success-text">{t('contact.success.text') || ''}</p>
                </div>
              ) : (
                <>
                  <h2 className="cnt-form-title">{t('contact.form.title') || 'Send Us a Message'}</h2>
                  <p className="cnt-form-subtitle">{t('contact.form.subtitle') || ''}</p>

                  <form onSubmit={handleSubmit}>

                    {/* Name row */}
                    <div className="cnt-form-row">
                      <div className="cnt-form-group">
                        <label className="cnt-label">{t('contact.form.firstName') || 'First Name *'}</label>
                        <input
                          className="cnt-input"
                          type="text"
                          placeholder={t('contact.form.firstNamePlaceholder') || 'Your first name'}
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        />
                      </div>
                      <div className="cnt-form-group">
                        <label className="cnt-label">{t('contact.form.lastName') || 'Last Name *'}</label>
                        <input
                          className="cnt-input"
                          type="text"
                          placeholder={t('contact.form.lastNamePlaceholder') || 'Your last name'}
                          required
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="cnt-form-row">
                      <div className="cnt-form-group">
                        <label className="cnt-label">{t('contact.form.email') || 'Email Address *'}</label>
                        <input
                          className="cnt-input"
                          type="email"
                          placeholder={t('contact.form.emailPlaceholder') || 'your@email.com'}
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div className="cnt-form-group">
                        <label className="cnt-label">{t('contact.form.phone') || 'Phone Number'}</label>
                        <input
                          className="cnt-input"
                          type="tel"
                          placeholder={t('contact.form.phonePlaceholder') || '+39 000 000 0000'}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">{t('contact.form.subject') || 'Subject *'}</label>
                      <select
                        className="cnt-select"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">{t('contact.form.subjectPlaceholder') || 'Select a subject...'}</option>
                        {subjectOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Services */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">{t('contact.form.services') || 'Services of Interest'}</label>
                      <div className="cnt-services-grid">
                        {serviceOptions.map((s) => (
                          <label className="cnt-checkbox-label" key={s}>
                            <input
                              type="checkbox"
                              checked={form.services.includes(s)}
                              onChange={() => toggleService(s)}
                            />
                            <span className="cnt-checkbox-box">✓</span>
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Preferred contact */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">{t('contact.form.preferredContact') || 'Preferred Contact Method'}</label>
                      <select
                        className="cnt-select"
                        value={form.preferredContact}
                        onChange={(e) => setForm({ ...form, preferredContact: e.target.value })}
                      >
                        <option value="email">{t('contact.form.preferredOptions.email') || 'Email'}</option>
                        <option value="phone">{t('contact.form.preferredOptions.phone') || 'Phone Call'}</option>
                        <option value="whatsapp">{t('contact.form.preferredOptions.whatsapp') || 'WhatsApp'}</option>
                        <option value="inperson">{t('contact.form.preferredOptions.inperson') || 'In-Person Visit'}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">{t('contact.form.message') || 'Your Message *'}</label>
                      <textarea
                        className="cnt-textarea"
                        placeholder={t('contact.form.messagePlaceholder') || 'Please describe your situation or question in detail...'}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    {/* GDPR Consent */}
                    <div className="cnt-form-group" style={{ marginTop: '8px' }}>
                      <div style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '18px 20px',
                        fontSize: '0.8rem',
                        color: '#64748b',
                        lineHeight: '1.7',
                        marginBottom: '16px'
                      }}>
                        <strong style={{ color: '#0d4a6b', display: 'block', marginBottom: '6px' }}>
                          {t('contact.form.gdpr.title') || 'Privacy Information (GDPR)'}
                        </strong>
                        {t('contact.form.gdpr.body') || ''}
                      </div>

                      <label className="cnt-checkbox-label" style={{ border: 'none', padding: '6px 0', background: 'transparent', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" required checked={consentContact} onChange={(e) => setConsentContact(e.target.checked)} />
                        <span className="cnt-checkbox-box" style={{ marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                          {t('contact.form.gdpr.consent1') || ''}
                        </span>
                      </label>

                      <label className="cnt-checkbox-label" style={{ border: 'none', padding: '6px 0', background: 'transparent', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" checked={consentAdvertising} onChange={(e) => setConsentAdvertising(e.target.checked)} />
                        <span className="cnt-checkbox-box" style={{ marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                          {t('contact.form.gdpr.consent2') || ''}
                        </span>
                      </label>

                      <label className="cnt-checkbox-label" style={{ border: 'none', padding: '6px 0', background: 'transparent', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" checked={consentThirdParty} onChange={(e) => setConsentThirdParty(e.target.checked)} />
                        <span className="cnt-checkbox-box" style={{ marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                          {t('contact.form.gdpr.consent3') || ''}
                        </span>
                      </label>

                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '12px' }}>
                        {t('contact.form.gdpr.required') || 'Fields marked with * are required.'}
                      </p>
                    </div>

                    {error && (
                      <div style={{ color: '#ef4444', fontSize: '0.88rem', marginBottom: '12px', padding: '10px 14px', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                        {error}
                      </div>
                    )}

                    <button type="submit" className="cnt-submit-btn" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="cnt-submit-spinner" />
                          {t('contact.form.sending') || 'Sending...'}
                        </>
                      ) : (
                        <>{t('contact.form.submit') || 'Send Message →'}</>
                      )}
                    </button>

                  </form>
                </>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="cnt-sidebar cnt-reveal-right cnt-delay-1">

              {/* Contact Info */}
              <div className="cnt-info-card">
                <div className="cnt-info-card-title">{t('contact.sidebar.contactTitle') || 'Contact Information'}</div>
                {contactItems.map((item, i) => (
                  <div className="cnt-contact-item" key={i}>
                    <div className="cnt-contact-icon">{item.icon}</div>
                    <div>
                      <div className="cnt-contact-label">{item.label}</div>
                      <div className="cnt-contact-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="cnt-info-card">
                <div className="cnt-info-card-title">{t('contact.sidebar.hoursTitle') || 'Office Hours'}</div>
                <div className="cnt-hours-list">
                  {hours.map((h, i) => (
                    <div className="cnt-hours-row" key={i}>
                      <span className="cnt-hours-day">{h.day}</span>
                      <span className={h.closed ? 'cnt-hours-closed' : 'cnt-hours-time'}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="cnt-info-card">
                <div className="cnt-info-card-title">{t('contact.sidebar.linksTitle') || 'Quick Links'}</div>
                {quickLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '9px 0',
                      fontSize: '0.88rem',
                      color: '#0d4a6b',
                      fontWeight: 600,
                      textDecoration: 'none',
                      borderBottom: i < quickLinks.length - 1 ? '1px solid #f1f5f9' : 'none',
                      transition: 'gap 0.2s ease',
                    }}
                  >
                    <span style={{ color: '#f37021' }}>→</span>
                    {link.label}
                  </Link>
                ))}
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
