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
]

export default function CompilazioneDocumenti() {
  return (
    <div className="imm-detail">

      <section className="imm-detail-hero">
        <div className="container">
          <div className="imm-detail-hero-inner animate-fade-in-up">
            <nav className="imm-detail-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/immigration">Immigrazione</Link>
              <span>/</span>
              <span>Compilazione Documenti</span>
            </nav>
            <span className="imm-detail-icon">📂</span>
            <h1 className="imm-detail-title">Compilazione Documenti</h1>
            <p className="imm-detail-subtitle">
              Professional document preparation and verification — accurate forms, translations, and submissions handled for you.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">Document Preparation Service</h2>
              <p className="imm-detail-text">
                La <strong>Compilazione Documenti</strong> è un servizio fondamentale per chi deve affrontare pratiche burocratiche in Italia senza una piena padronanza della lingua o del sistema amministrativo italiano.
              </p>
              <p className="imm-detail-text">
                I nostri operatori esperti vi assistono nella corretta compilazione di moduli, domande e istanze, evitando errori che potrebbero rallentare o bloccare le vostre pratiche.
              </p>

              <span className="imm-detail-label">Our Services</span>
              <h2 className="imm-detail-section-title">Documenti che Compiliamo</h2>
              <ul className="imm-detail-list">
                {[
                  'Moduli per permesso di soggiorno e rinnovo',
                  'Domande per ricongiungimento familiare',
                  'Istanze per la cittadinanza italiana',
                  'Moduli per prestazioni sociali e previdenziali',
                  'Qualsiasi altro documento amministrativo',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="imm-detail-list-icon">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

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
                        className={link.href === '/immigration/compilazione-documenti' ? 'active' : ''}
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
