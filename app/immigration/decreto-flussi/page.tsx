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

export default function DecretoFlussi() {
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
              <span>Decreto Flussi</span>
            </nav>
            <span className="imm-detail-icon">📝</span>
            <h1 className="imm-detail-title">Decreto Flussi</h1>
            <p className="imm-detail-subtitle">
              Expert guidance for work permit applications under the annual Decreto Flussi quota — from click day to permit conversion.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">What is the Decreto Flussi?</h2>
              <p className="imm-detail-text">
                Il <strong>Decreto Flussi</strong> è il provvedimento annuale con cui il Governo italiano stabilisce le quote di lavoratori stranieri non comunitari ammessi in Italia per motivi di lavoro. Le domande vengono presentate online in un giorno specifico, il cosiddetto &quot;click day&quot;.
              </p>
              <p className="imm-detail-text">
                AMEI vi assiste nella presentazione della domanda nei tempi previsti, massimizzando le possibilità di successo grazie alla nostra esperienza pluriennale nel settore.
              </p>

              <span className="imm-detail-label">Our Services</span>
              <h2 className="imm-detail-section-title">Come Possiamo Aiutarti</h2>
              <ul className="imm-detail-list">
                {[
                  'Monitoraggio delle aperture dei click day',
                  'Preparazione anticipata di tutta la documentazione',
                  'Invio telematico della domanda al click day',
                  'Assistenza post-domanda fino al rilascio del nulla osta',
                  'Supporto per il visto di ingresso e il permesso di soggiorno',
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
                        className={link.href === '/immigration/decreto-flussi' ? 'active' : ''}
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
