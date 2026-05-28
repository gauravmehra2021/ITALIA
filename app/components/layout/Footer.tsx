'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const rawQuickLinks = t('footer.quickLinks')
  const quickLinks = Array.isArray(rawQuickLinks) ? rawQuickLinks : [
    { label: 'Migrants', href: '/migrants' },
    { label: 'Travelers', href: '/travelers' },
    { label: 'Families', href: '/families' },
    { label: 'Companies', href: '/companies' },
    { label: 'Loans and financing', href: '/loans' },
    { label: 'Other Services', href: '/other-services' },
  ]

  return (
    <footer className="bg-[rgb(37,39,46)] pt-20 text-[14px] leading-[1.6] text-[#b0b0b0]">
      <div className="container">
        {/* Grid */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* About */}
          <div>
            <p className="mb-6 font-medium text-[#eee]">
              {t('footer.aboutText1')}
            </p>

            <p className="text-[12px] leading-6 opacity-60">
              {t('footer.aboutText2')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">
              {t('footer.contactTitle')}
            </h4>

            <div className="space-y-3">
              <p>{t('footer.telephoneLabel')}: 0522 1723060</p>
              <p>{t('footer.emailLabel')}: info@gruppoeuropa.net</p>
              <p>{t('footer.officeLabel')}: Via G. Battista Pergolesi 2/A 20124 Milan</p>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#3b5998] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#00acee] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                t
              </a>

              <a
                href="#"
                className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#c4302b] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                y
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">
              {t('footer.quickLinksTitle')}
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-[#b0b0b0] transition-all duration-300 hover:translate-x-[5px] hover:text-white"
                  >
                    <span className="mr-3 font-bold text-[#004a99]">
                      »
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="footer-title">
              {t('footer.certificationsTitle')}
            </h4>

            <div className="flex flex-col gap-4">
              <div className="h-[45px] rounded border border-white/10 bg-white/5" />
              <div className="h-[45px] rounded border border-white/10 bg-white/5" />
              <div className="h-[45px] rounded border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#004a99] py-8 text-center text-[12px] text-white/80">
        <div className="container">
          <p className="mx-auto max-w-[900px] leading-7">
            {t('footer.bottomLine1')}
            <br />
            {t('footer.bottomLine2')}
            <br />
            {t('footer.bottomLine3')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer