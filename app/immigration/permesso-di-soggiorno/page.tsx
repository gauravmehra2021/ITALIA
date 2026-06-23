'use client'

import Link from 'next/link'
import '../immigration.css'

const navLinks = [
  { icon: '📋', label: 'Permesso di Soggiorno',       href: '/immigration/permesso-di-soggiorno' },
  { icon: '👨👩👧👦', label: 'Ricongiungimento Familiare', href: '/immigration/ricongiungimento-familiare' },
  { icon: '📝', label: 'Decreto Flussi',               href: '/immigration/decreto-flussi' },
  { icon: '✈️', label: 'Primo Ingresso',               href: '/immigration/primo-ingresso' },
  { icon: '🇮🇹', label: 'Cittadinanza Italiana',       href: '/immigration/cittadinanza-italiana' },
  { icon: '📂', label: 'Compilazione Documenti',       href: '/immigration/compilazione-documenti' },
  { icon: '🌐', label: 'Mediazione Culturale',         href: '/immigration/mediazione-culturale' },
  { icon: '🏦', label: 'Consulenza Bancaria',          href: '/immigration/consulenza-bancaria' },
]

export default function PermessoDiSoggiorno() {
  return (
    <div className="imm-detail">

      {/* ── Hero ── */}
      <section className="imm-detail-hero">
        <div className="container">
          <div className="imm-detail-hero-inner animate-fade-in-up">
            <nav className="imm-detail-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/immigration">Immigrazione</Link>
              <span>/</span>
              <span>Permesso di Soggiorno</span>
            </nav>
            <span className="imm-detail-icon">📋</span>
            <h1 className="imm-detail-title">Permesso di Soggiorno</h1>
            <p className="imm-detail-subtitle">
              Complete assistance for obtaining and renewing your Italian residence permit — from document preparation to final approval.
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            {/* Main Content */}
            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">What is the Permesso di Soggiorno?</h2>
              <p className="imm-detail-text">
                Il <strong>Permesso di Soggiorno</strong> è il documento obbligatorio per tutti i cittadini extracomunitari che intendono soggiornare in Italia per un periodo superiore a 90 giorni. Senza questo documento, non è possibile lavorare, accedere ai servizi sanitari o iscriversi all&apos;anagrafe.
              </p>
              <p className="imm-detail-text">
                Il nostro team di esperti vi assiste in ogni fase della procedura: dalla raccolta della documentazione necessaria, alla compilazione del modulo, fino alla presentazione allo Sportello Unico per l&apos;Immigrazione.
              </p>

              <span className="imm-detail-label">Our Services</span>
              <h2 className="imm-detail-section-title">Cosa Offriamo</h2>
              <ul className="imm-detail-list">
                {[
                  'Consulenza personalizzata sulla tipologia di permesso più adatta alla vostra situazione',
                  'Assistenza nella raccolta e verifica dei documenti richiesti',
                  'Compilazione e invio del kit postale',
                  'Monitoraggio della pratica fino al rilascio del permesso',
                  'Supporto per il rinnovo del permesso di soggiorno',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="imm-detail-list-icon">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="imm-detail-sidebar">
              <div className="imm-detail-contact-card">
                <h3 className="imm-detail-contact-title">Need Assistance?</h3>
                <p className="imm-detail-contact-desc">
                  Book a free consultation with our immigration experts today.
                </p>
                <a href="#" className="imm-detail-contact-btn">Book Appointment</a>
                <a href="#" className="imm-detail-contact-btn imm-detail-contact-btn-outline">Call Us Now</a>
              </div>

              <div className="imm-detail-nav-card">
                <div className="imm-detail-nav-title">Other Services</div>
                <ul className="imm-detail-nav-list">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={link.href === '/immigration/permesso-di-soggiorno' ? 'active' : ''}
                      >
                        <span className="imm-detail-nav-icon">{link.icon}</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  )
}
