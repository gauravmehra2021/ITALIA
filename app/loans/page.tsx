'use client'

export default function LoansPage() {
  const offerings = [
    {
      title: 'Personal Loans',
      desc: 'Flexible personal loans for any need — home renovation, medical expenses, education, or unexpected costs. We help you find the best rate from our network of financial partners.',
    },
    {
      title: 'Business Financing',
      desc: 'Start or grow your business with tailored financing solutions. We assist with loan applications, business plans, and connecting you with the right financial institutions.',
    },
    {
      title: 'Mortgage Assistance',
      desc: 'Buying a home in Italy? We guide you through the mortgage application process, helping you compare offers and secure the most favourable terms.',
    },
    {
      title: 'Microcredit for Migrants',
      desc: 'Dedicated microcredit solutions for migrants and new residents who may not yet have a full credit history in Italy. We work with institutions that understand your situation.',
    },
    {
      title: 'Debt Consolidation',
      desc: 'Struggling with multiple loans? We help you consolidate your debts into a single, more manageable monthly payment with a lower interest rate.',
    },
  ]

  return (
    <div className="container mx-auto max-w-[900px] py-20">
      <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-[#004a99]">
        Loans & Financing
      </h1>
      <p className="mb-10 text-[1.1rem] leading-[1.8] text-[#444]">
        SS EUROPA SOSTEGNO E SOLUZIONI PER L'EUROPA connects you with the best financial solutions available in Italy. Whether you need a personal loan, business financing, or a mortgage, our consultants help you navigate the options and find the right fit for your needs and budget.
      </p>

      <h2 className="mb-6 text-2xl font-bold text-[#004a99]">Our Financial Services</h2>
      <ul className="space-y-4">
        {offerings.map((item, i) => (
          <li key={i} className="rounded-md bg-white px-6 py-4 shadow-sm">
            <h3 className="mb-1 font-bold text-[#004a99]">{item.title}</h3>
            <p className="text-[#555]">{item.desc}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-md border-l-[5px] border-[#004a99] bg-white px-6 py-5 shadow-sm">
        <p className="font-semibold text-[#004a99]">Ready to get started?</p>
        <p className="mt-1 text-[#555]">
          Contact us today for a free, no-obligation consultation. Our financial advisors will assess your situation and guide you towards the best solution.
        </p>
      </div>
    </div>
  )
}
