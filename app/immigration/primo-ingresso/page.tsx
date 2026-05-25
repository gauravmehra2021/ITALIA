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

export default function PrimoIngresso() {
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
              <span>Primo Ingresso</span>
            </nav>
            <span className="imm-detail-icon">✈️</span>
            <h1 className="imm-detail-title">Primo Ingresso</h1>
            <p className="imm-detail-subtitle">
              Step-by-step support for first-time entry into Italy — from visa guidance to residence registration.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">First Entry into Italy</h2>
              <p className="imm-detail-text">
                Il <strong>Primo Ingresso</strong> in Italia richiede una serie di adempimenti burocratici che possono risultare complessi per chi non conosce il sistema italiano. Dalla dichiarazione di presenza al codice fiscale, ogni passo è fondamentale per regolarizzare la propria posizione.
              </p>
              <p className="imm-detail-text">
                AMEI vi accompagna fin dal primo momento, aiutandovi a comprendere i requisiti e le procedure necessarie per entrare e soggiornare regolarmente in Italia.
              </p>

              <span className="imm-detail-label">Our Services</span>
              <h2 className="imm-detail-section-title">Servizi per il Primo Ingresso</h2>
              <ul className="imm-detail-list">
                {[
                  'Consulenza sulla tipologia di visto più adatta',
                  'Assistenza nella preparazione dei documenti per il visto',
                  'Supporto per la dichiarazione di presenza o il permesso di soggiorno',
                  'Orientamento ai servizi del territorio',
                  "Assistenza per l'iscrizione anagrafica",
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
                        className={link.href === '/immigration/primo-ingresso' ? 'active' : ''}
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
