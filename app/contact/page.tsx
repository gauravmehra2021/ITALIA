'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './contact.css'

const serviceOptions = [
  'Immigration Services',
  'CAF & Patronato',
  'Training & Courses',
  'Business Consultancy',
  'Insurance',
  'Indian Consulate',
  'International Visas',
  'Other Services',
]

export default function ContactPage() {
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
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="cnt-hero">
        <div className="container">
          <div className="cnt-hero-inner">
            <nav className="cnt-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </nav>
            <div className="cnt-hero-badge">📬 Get In Touch</div>
            <h1 className="cnt-hero-title">Contact Us</h1>
            <p className="cnt-hero-desc">
              Have a question or need assistance? Fill in the form and our team will get
              back to you as soon as possible — in your language.
            </p>
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
                  <h2 className="cnt-success-title">Message Sent Successfully!</h2>
                  <p className="cnt-success-text">
                    Thank you for contacting AMEI. Our team will review your request and
                    get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="cnt-form-title">Send Us a Message</h2>
                  <p className="cnt-form-subtitle">
                    Fill in your details below and tell us how we can help you.
                  </p>

                  <form onSubmit={handleSubmit}>

                    {/* Name row */}
                    <div className="cnt-form-row">
                      <div className="cnt-form-group">
                        <label className="cnt-label">First Name *</label>
                        <input
                          className="cnt-input"
                          type="text"
                          placeholder="Your first name"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        />
                      </div>
                      <div className="cnt-form-group">
                        <label className="cnt-label">Last Name *</label>
                        <input
                          className="cnt-input"
                          type="text"
                          placeholder="Your last name"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="cnt-form-row">
                      <div className="cnt-form-group">
                        <label className="cnt-label">Email Address *</label>
                        <input
                          className="cnt-input"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div className="cnt-form-group">
                        <label className="cnt-label">Phone Number</label>
                        <input
                          className="cnt-input"
                          type="tel"
                          placeholder="+39 000 000 0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">Subject *</label>
                      <select
                        className="cnt-select"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">Select a subject...</option>
                        <option>Book an Appointment</option>
                        <option>Request Information</option>
                        <option>Document Assistance</option>
                        <option>Application Status</option>
                        <option>General Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Services */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">Services of Interest</label>
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
                      <label className="cnt-label">Preferred Contact Method</label>
                      <select
                        className="cnt-select"
                        value={form.preferredContact}
                        onChange={(e) => setForm({ ...form, preferredContact: e.target.value })}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="inperson">In-Person Visit</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="cnt-form-group">
                      <label className="cnt-label">Your Message *</label>
                      <textarea
                        className="cnt-textarea"
                        placeholder="Please describe your situation or question in detail..."
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
                        <strong style={{ color: '#0d4a6b', display: 'block', marginBottom: '6px' }}>Privacy Information (GDPR)</strong>
                        Information provided pursuant to Regulation (EU) 2016/679 (GDPR) of 27 April 2016. Gruppo Europa srl, with registered office in Milan, Via Pergolesi 2/a, as Data Controller, informs you that the personal data you provide will be processed exclusively for the purpose of contacting the data subject as per your specific request.
                      </div>

                      <label className="cnt-checkbox-label" style={{ border: 'none', padding: '6px 0', background: 'transparent', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" required onChange={() => {}} />
                        <span className="cnt-checkbox-box" style={{ marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                          <strong style={{ color: '#0d4a6b' }}>*</strong> I have read the information and I consent to the processing of my personal data for the purpose of being contacted as requested.
                        </span>
                      </label>

                      <label className="cnt-checkbox-label" style={{ border: 'none', padding: '6px 0', background: 'transparent', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" onChange={() => {}} />
                        <span className="cnt-checkbox-box" style={{ marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                          I consent to the processing of my data for advertising or promotional purposes.
                        </span>
                      </label>

                      <label className="cnt-checkbox-label" style={{ border: 'none', padding: '6px 0', background: 'transparent', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" onChange={() => {}} />
                        <span className="cnt-checkbox-box" style={{ marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                          I consent to the communication of my data to third parties for their respective marketing and promotional purposes.
                        </span>
                      </label>

                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '12px' }}>
                        Fields marked with <strong style={{ color: '#0d4a6b' }}>*</strong> are required.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="cnt-submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="cnt-submit-spinner" />
                          Sending...
                        </>
                      ) : (
                        <>Send Message →</>
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
                <div className="cnt-info-card-title">Contact Information</div>

                {[
                  { icon: '📞', label: 'Phone', value: '0522 1723060' },
                  { icon: '📧', label: 'Email', value: 'info@gruppoeuropa.net' },
                  { icon: '📍', label: 'Office', value: 'Via G. Battista Pergolesi 2/A\n20124 Milan, Italy' },
                ].map((item, i) => (
                  <div className="cnt-contact-item" key={i}>
                    <div className="cnt-contact-icon">{item.icon}</div>
                    <div>
                      <div className="cnt-contact-label">{item.label}</div>
                      <div className="cnt-contact-value" style={{ whiteSpace: 'pre-line' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="cnt-info-card">
                <div className="cnt-info-card-title">Office Hours</div>
                <div className="cnt-hours-list">
                  {[
                    { day: 'Monday – Friday', time: '9:00 – 18:00', closed: false },
                    { day: 'Saturday',        time: '9:00 – 13:00', closed: false },
                    { day: 'Sunday',          time: 'Closed',        closed: true  },
                  ].map((h, i) => (
                    <div className="cnt-hours-row" key={i}>
                      <span className="cnt-hours-day">{h.day}</span>
                      <span className={h.closed ? 'cnt-hours-closed' : 'cnt-hours-time'}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="cnt-info-card">
                <div className="cnt-info-card-title">Quick Links</div>
                {[
                  { label: 'Immigration Services', href: '/immigration' },
                  { label: 'CAF & Patronato',      href: '/caf' },
                  { label: 'International Visas',  href: '/visas' },
                  { label: 'Who We Are',           href: '/WhoWeAre' },
                ].map((link, i) => (
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
                      borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none',
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
