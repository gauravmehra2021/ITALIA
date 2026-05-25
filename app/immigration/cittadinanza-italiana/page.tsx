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

export default function CittadinanzaItaliana() {
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
              <span>Cittadinanza Italiana</span>
            </nav>
            <span className="imm-detail-icon">🇮🇹</span>
            <h1 className="imm-detail-title">Cittadinanza Italiana</h1>
            <p className="imm-detail-subtitle">
              Complete assistance for Italian citizenship applications — by residence, marriage, or descent.
            </p>
          </div>
        </div>
      </section>

      <div className="imm-detail-body">
        <div className="container">
          <div className="imm-detail-grid">

            <div className="imm-detail-content">
              <span className="imm-detail-label">Overview</span>
              <h2 className="imm-detail-section-title">Acquiring Italian Citizenship</h2>
              <p className="imm-detail-text">
                Ottenere la <strong>Cittadinanza Italiana</strong> è il coronamento di un percorso di integrazione nel nostro Paese. Esistono diverse vie per acquisirla: per residenza, per matrimonio, per discendenza o per naturalizzazione.
              </p>
              <p className="imm-detail-text">
                Il nostro team specializzato vi assiste in tutto l&apos;iter burocratico, dalla verifica dei requisiti fino alla cerimonia di giuramento.
              </p>

              <span className="imm-detail-label">Our Services</span>
              <h2 className="imm-detail-section-title">Percorsi Disponibili</h2>
              <ul className="imm-detail-list">
                {[
                  'Cittadinanza per residenza (10 anni per extracomunitari)',
                  'Cittadinanza per matrimonio con cittadino italiano',
                  'Cittadinanza per discendenza (iure sanguinis)',
                  'Verifica e raccolta documentazione',
                  'Monitoraggio della pratica e supporto fino al giuramento',
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
                        className={link.href === '/immigration/cittadinanza-italiana' ? 'active' : ''}
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
