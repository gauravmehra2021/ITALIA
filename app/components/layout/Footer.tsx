import React from "react";

const Footer: React.FC = () => {
  const quickLinks: string[] = [
    "Migrants",
    "Travelers",
    "Families",
    "Companies",
    "Loans and financing",
    "Other Services",
  ];

  return (
    <footer className="bg-[var(--footer-bg)] px-0 pt-20 text-sm leading-6 text-[#b0b0b0]">

      <div className="container mx-auto">

        {/* Footer Grid */}
        <div className="mb-[60px] grid grid-cols-1 gap-[50px] md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* About */}
          <div>
            <p className="mb-[25px] font-medium text-[#eee]">
              Our knowledgeable staff will be happy to answer all your
              questions and needs. Contact your nearest office or contact us.
            </p>

            <p className="text-xs opacity-60">
              Gruppo Europa agencies are managed by independent entrepreneurial
              affiliates who operate under the Gruppo Europa brand under a
              franchising agreement. Gruppo Europa provides support services to
              businesses and individuals.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="relative mb-[30px] pb-[15px] text-[18px] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[40px] after:bg-[var(--primary)]">
              Contact Us
            </h4>

            <div className="space-y-3">
              <p>Telephone: 0522 1723060</p>
              <p>Email: info@gruppoeuropa.net</p>
              <p>Office: Via G. Battista Pergolesi 2/A 20124 Milan</p>
            </div>

            {/* Social Icons */}
            <div className="mt-[25px] flex gap-3">

              <a
                href="#"
                className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#3b5998] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#00acee] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                t
              </a>

              <a
                href="#"
                className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#c4302b] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                y
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="relative mb-[30px] pb-[15px] text-[18px] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[40px] after:bg-[var(--primary)]">
              Quick Links
            </h4>

            <ul className="list-none">
              {quickLinks.map((item: string) => (
                <li key={item} className="mb-3">
                  <a
                    href="#"
                    className="flex items-center text-[#b0b0b0] no-underline transition-all duration-300 before:mr-3 before:font-bold before:text-[var(--primary)] before:content-['»'] hover:translate-x-[5px] hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="relative mb-[30px] pb-[15px] text-[18px] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[40px] after:bg-[var(--primary)]">
              Certifications
            </h4>

            <div className="flex flex-col gap-[15px]">
              <div className="h-[45px] rounded border border-white/10 bg-white/5"></div>

              <div className="h-[45px] rounded border border-white/10 bg-white/5"></div>

              <div className="h-[45px] rounded border border-white/10 bg-white/5"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[var(--primary)] px-0 py-[30px] text-center text-xs text-white/80">
        <div className="container mx-auto">
          <p className="mx-auto max-w-[900px] leading-7">
            Gruppo Europa srl Sole Shareholder (subject to management and
            coordination: Extrabanca SpA) - VAT number 10232730969 - Share
            capital €100,000 fully paid-up - REA-MI 2515624 - Privacy policy
            <br />
            Gruppo Europa srl, an insurance intermediary registered under
            letter E of the RUI (Italian Register of Insurance Intermediaries)
            under no. E000597090
            <br />
            Reserved Area - Website created by DICE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;