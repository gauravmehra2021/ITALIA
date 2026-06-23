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

export default function MediazioneCulturale() {
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
              <span>Mediazione Culturale</span>
            </nav>
            <span className="imm-detail-icon">🌐</span>
            <h1 className="imm-detail-title">Mediazione Culturale</h1>
            <p className="imm-detail-subtitle">
              Un ponte sociale ed emotivo tra culture — professionisti specializzati che facilitano l'integrazione e la comunicazione interculturale.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Il Ruolo</span>
              <h2 className="imm-detail-section-title">Il Ruolo del Mediatore Interculturale</h2>
              <p className="imm-detail-text">
                Il <strong>mediatore interculturale</strong> non è un semplice interprete, ma un professionista specializzato che agisce come ponte sociale ed emotivo.
              </p>

              <span className="imm-detail-label">Competenze</span>
              <h2 className="imm-detail-section-title">Le sue competenze chiave includono:</h2>
              <ul className="imm-detail-list">
                <li>
                  <span className="imm-detail-list-icon">▸</span>
                  <strong>Competenze linguistiche e culturali:</strong> Conosce a fondo i codici sociali, le abitudini e le normative sia del Paese d'origine sia di quello ospitante.
                </li>
                <li>
                  <span className="imm-detail-list-icon">▸</span>
                  <strong>Capacità di ascolto attivo:</strong> Decodifica i bisogni profondi e lo stato d'animo dell'utente, offrendo orientamento chiaro e supporto umano.
                </li>
              </ul>

              <span className="imm-detail-label">Ambiti di Intervento</span>
              <h2 className="imm-detail-section-title">Ambiti di Intervento</h2>
              <p className="imm-detail-text">
                I nostri servizi di mediazione interculturale si sviluppano in tre macro-aree strategiche:
              </p>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Sanità</h3>
                <p className="imm-detail-text">
                  Garantiamo il diritto alla salute facilitando l'accesso ai servizi medici, l'orientamento ospedaliero e la comprensione della documentazione sanitaria.
                </p>
              </div>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Pubblica Amministrazione e Forze dell'Ordine</h3>
                <p className="imm-detail-text">
                  Supportiamo uffici immigrazione, questure e autorità locali nella gestione delle pratiche burocratiche e nelle procedure di identificazione.
                </p>
              </div>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Scuola e Terzo Settore</h3>
                <p className="imm-detail-text">
                  Accompagniamo le famiglie straniere nel dialogo con il personale scolastico e promuoviamo progetti inclusivi per una reale integrazione sul territorio.
                </p>
              </div>
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
                        className={link.href === '/immigration/mediazione-culturale' ? 'active' : ''}
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