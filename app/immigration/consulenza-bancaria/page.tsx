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

export default function ConsulenzaBancaria() {
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
              <span>Consulenza Bancaria</span>
            </nav>
            <span className="imm-detail-icon">🏦</span>
            <h1 className="imm-detail-title">Consulenza Bancaria</h1>
            <p className="imm-detail-subtitle">
              Supporto professionale per privati e imprese nella gestione del patrimonio, nell'accesso al credito e nella pianificazione finanziaria.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">Cos'è la Consulenza Bancaria</h2>
              <p className="imm-detail-text">
                La <strong>consulenza bancaria</strong> è un servizio professionale mirato a supportare privati e imprese nella gestione del patrimonio, nell'accesso al credito e nella pianificazione finanziaria.
              </p>
              <p className="imm-detail-text">
                Ecco una panoramica completa per capire come funziona, quali sono i modelli disponibili e a cosa prestare attenzione.
              </p>

              <span className="imm-detail-label">I Nostri Servizi</span>
              <h2 className="imm-detail-section-title">Servizi Bancari Offerti</h2>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Gestione A/C</h3>
                <p className="imm-detail-text">
                  Apertura e gestione di conti correnti per privati e aziende. Assistenza completa per l'operatività bancaria quotidiana, inclusi bonifici nazionali e internazionali, domiciliazione bollette, emissione assegni e gestione dell'home banking. Supporto nella scelta del conto più adatto alle proprie esigenze con analisi delle condizioni e dei costi.
                </p>
              </div>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Mutui</h3>
                <p className="imm-detail-text">
                  Consulenza specializzata per mutui prima casa, seconda casa e acquisto immobiliare. Analisi delle migliori offerte del mercato, assistenza nella raccolta documentale, supporto nella trattativa con gli istituti di credito e accompagnamento fino alla stipula del contratto. Valutazione delle opzioni a tasso fisso, variabile o misto.
                </p>
              </div>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Finanziamento</h3>
                <p className="imm-detail-text">
                  Soluzioni di finanziamento personalizzate per esigenze personali e professionali. Prestiti personali, credito al consumo, finanziamenti per l'acquisto di beni e servizi. Valutazione della capacità di rimborso, confronto tra le diverse proposte degli istituti finanziari e assistenza nella presentazione della domanda.
                </p>
              </div>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Carta di Credito</h3>
                <p className="imm-detail-text">
                  Emissione e gestione di carte di credito, debito e prepagate. Consulenza per la scelta della carta più adatta in base alle proprie abitudini di spesa, con analisi di plafond, condizioni e costi annuali. Assistenza per la richiesta, l'attivazione e la gestione quotidiana delle carte.
                </p>
              </div>

              <div className="imm-detail-card-item">
                <h3 className="imm-detail-card-item-title">Surroga</h3>
                <p className="imm-detail-text">
                  Servizio di surroga e portabilità del mutuo per ottenere condizioni più vantaggiose. Analisi comparativa delle offerte di surroga disponibili sul mercato, gestione dell'intero iter burocratico con passaggio da un istituto all'altro senza costi aggiuntivi. Rinegoziazione delle condizioni del mutuo esistente per ridurre la rata o il tasso di interesse.
                </p>
              </div>
            </div>

            <aside className="imm-detail-sidebar">
              <div className="imm-detail-contact-card">
                <h3 className="imm-detail-contact-title">Need Assistance?</h3>
                <p className="imm-detail-contact-desc">
                  Book a free consultation with our banking experts today.
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
                        className={link.href === '/immigration/consulenza-bancaria' ? 'active' : ''}
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