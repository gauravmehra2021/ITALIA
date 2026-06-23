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

export default function RicongiungimentoFamiliare() {
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
              <span>Ricongiungimento Familiare</span>
            </nav>
            <span className="imm-detail-icon">👨👩👧👦</span>
            <h1 className="imm-detail-title">Ricongiungimento Familiare</h1>
            <p className="imm-detail-subtitle">
              Family reunification assistance for spouses, children, and parents — we handle all paperwork on your behalf.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">What is Ricongiungimento Familiare?</h2>
              <p className="imm-detail-text">
                Il <strong>Ricongiungimento Familiare</strong> permette ai cittadini stranieri regolarmente soggiornanti in Italia di far venire nel nostro Paese i propri familiari. È un diritto fondamentale che consente di riunire il nucleo familiare nel rispetto delle normative vigenti.
              </p>
              <p className="imm-detail-text">
                SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA vi guida attraverso l&apos;intero processo, dalla verifica dei requisiti necessari fino all&apos;ottenimento del visto di ingresso per i vostri cari.
              </p>

              <span className="imm-detail-label">Our Services</span>
              <h2 className="imm-detail-section-title">I Nostri Servizi</h2>
              <ul className="imm-detail-list">
                {[
                  'Verifica dei requisiti di reddito e alloggio',
                  'Assistenza nella compilazione della domanda di nulla osta',
                  "Supporto per la raccolta dei documenti dei familiari all'estero",
                  'Accompagnamento nelle pratiche consolari',
                  'Assistenza per il permesso di soggiorno per motivi familiari',
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
                        className={link.href === '/immigration/ricongiungimento-familiare' ? 'active' : ''}
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
