'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import './Footer.css'

const quickLinks = [
  { label: 'Who We Are',          href: '/WhoWeAre' },
  { label: 'Immigration Services', href: '/immigration' },
  { label: 'CAF & Patronato',      href: '/caf' },
  { label: 'Training & Courses',   href: '/training' },
  { label: 'Business Consulting',  href: '/business' },
  { label: 'Insurance',            href: '/insurance' },
  { label: 'International Visas',  href: '/visas' },
  { label: 'Other Services',       href: '/other' },
]

const offices = [
  {
    name: 'SS Europa — Mantova',
    address: 'Via Saverio Battinelli No. 8/10\nMantova 46100, Italia',
    phone: '+39 352 071 6656',
  },
]

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">

      {/* ── Top Bar ── */}
      <div className="footer-topbar">
        <div className="container">
          <div className="footer-topbar-inner">
            <p className="footer-topbar-text">
              Your trusted partner for immigration, tax, and administrative services —
              <span> AMEI is here for you.</span>
            </p>
            <div className="footer-topbar-socials">
              <a href="#" className="footer-social-link facebook" aria-label="Facebook">f</a>
              <a href="#" className="footer-social-link twitter"  aria-label="Twitter">t</a>
              <a href="#" className="footer-social-link instagram" aria-label="Instagram">in</a>
              <a href="#" className="footer-social-link youtube"  aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* Col 1 — About */}
            <div className="footer-col footer-col-about">
              <Link href="/" className="footer-about-logo">
                <img src="/images/logo.svg" alt="AMEI Logo" />
              </Link>
              <p className="footer-about-desc">
                AMEI – Associazione Mondo e Italia is your professional partner for
                immigration, tax, welfare, and administrative services in Italy. We
                support individuals, families, and companies with certified expertise
                and multilingual assistance.
              </p>
              <p className="footer-about-legal">
                Gruppo Europa agencies are managed by independent entrepreneurial
                affiliates operating under the Gruppo Europa brand under a franchising
                agreement. Gruppo Europa provides support services to businesses and individuals.
              </p>
            </div>

            {/* Col 2 — Offices & Contact */}
            <div className="footer-col footer-col-contact">
              <h4 className="footer-col-title">Our Offices</h4>

              {offices.map((office, i) => (
                <div className="footer-office-card" key={i}>
                  <div className="footer-office-name">{office.name}</div>
                  <div className="footer-office-address">
                    {office.address.split('\n').map((line, j) => (
                      <span key={j}>{line}<br /></span>
                    ))}
                  </div>
                  <div className="footer-office-phone">
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                  </div>
                </div>
              ))}

              <div className="footer-contact-list" style={{ marginTop: '20px' }}>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">✉</div>
                  <div className="footer-contact-body">
                    <div className="footer-contact-label">Email</div>
                    <div className="footer-contact-value">
                      <a href="mailto:info@gruppoeuropa.net">info@gruppoeuropa.net</a>
                    </div>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">📞</div>
                  <div className="footer-contact-body">
                    <div className="footer-contact-label">Telephone</div>
                    <div className="footer-contact-value">
                      <a href="tel:+390522172306">0522 1723060</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3 — Quick Links */}
            <div className="footer-col footer-col-links">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Certifications */}
            <div className="footer-col footer-col-certs">
              <h4 className="footer-col-title">Certifications</h4>
              <div className="footer-cert-list">
                <div className="footer-cert-item">CAF Certified</div>
                <div className="footer-cert-item">Patronato Authorized</div>
                <div className="footer-cert-item">ISO Compliant</div>
                <div className="footer-cert-item">INPS Partner</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="footer-divider" />

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-bottom-legal">
              Gruppo Europa srl Sole Shareholder (subject to management and coordination: Extrabanca SpA) —
              VAT number 10232730969 — Share capital €100,000 fully paid-up — REA-MI 2515624 — Privacy Policy &nbsp;|&nbsp;
              Gruppo Europa srl, insurance intermediary registered under letter E of the RUI under no. E000597090
            </p>
            <div className="footer-bottom-right">
              Website by{' '}
              <a
                href="https://wa.me/917580099131"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f37021', fontWeight: 600, textDecoration: 'none' }}
              >
                AM
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
