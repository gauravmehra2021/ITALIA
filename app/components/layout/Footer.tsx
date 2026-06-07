'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import './Footer.css'

const offices = [
  {
    name: 'SS Europa — Mantova',
    address: 'Via Saverio Battinelli No. 8/10\nMantova 46100, Italia',
    phone: '+39 376 148 7097',
  },
]

const Footer = () => {
  const { t } = useLanguage()

  const quickLinks = (() => {
    const raw = t('footer.quickLinks')
    return Array.isArray(raw) ? raw : []
  })()

  const certs = (() => {
    const raw = t('footer.certs')
    return Array.isArray(raw) ? raw : ['CAF Certified', 'Patronato Authorized', 'ISO Compliant', 'INPS Partner']
  })()

  return (
    <footer className="footer">

      {/* ── Top Bar ── */}
      <div className="footer-topbar">
        <div className="container">
          <div className="footer-topbar-inner">
            <p className="footer-topbar-text">
              {t('footer.topBarText') || 'Your trusted partner for immigration, tax, and administrative services — AMEI is here for you.'}
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
                {t('footer.aboutDesc') || 'AMEI – Associazione Mondo e Italia is your professional partner for immigration, tax, welfare, and administrative services in Italy.'}
              </p>
              <p className="footer-about-legal">
                {t('footer.aboutText2') || 'Gruppo Europa agencies are managed by independent entrepreneurial affiliates operating under the Gruppo Europa brand under a franchising agreement.'}
              </p>
            </div>

            {/* Col 2 — Offices & Contact */}
            <div className="footer-col footer-col-contact">
              <h4 className="footer-col-title">{t('footer.officesTitle') || 'Our Offices'}</h4>

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
                    <div className="footer-contact-label">{t('footer.emailLabel') || 'Email'}</div>
                    <div className="footer-contact-value">
                      <a href="mailto:sseuropa@yahoo.com">sseuropa@yahoo.com</a>
                    </div>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">📞</div>
                  <div className="footer-contact-body">
                    <div className="footer-contact-label">{t('footer.telephoneLabel') || 'Telephone'}</div>
                    <div className="footer-contact-value">
                      <a href="tel:+390376148097">03761487097</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3 — Quick Links */}
            <div className="footer-col footer-col-links">
              <h4 className="footer-col-title">{t('footer.quickLinksTitle') || 'Quick Links'}</h4>
              <ul className="footer-links-list">
                {quickLinks.map((link: { label: string; href: string }) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Certifications */}
            <div className="footer-col footer-col-certs">
              <h4 className="footer-col-title">{t('footer.certificationsTitle') || 'Certifications'}</h4>
              <div className="footer-cert-list">
                {certs.map((cert: string) => (
                  <div key={cert} className="footer-cert-item">{cert}</div>
                ))}
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
              {t('footer.bottomLine1')} &nbsp;|&nbsp; {t('footer.bottomLine2')}
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
