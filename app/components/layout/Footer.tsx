export default function Footer() {
  return (
    <footer className="bg-[#25272e] text-white mt-20">
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-slate-300 leading-7">
            Our knowledgeable staff will be happy to answer all your questions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-slate-300">
            <p>Telephone: 0522 1723060</p>
            <p>Email: info@gruppoeuropa.net</p>
            <p>Milan Office</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>Migrants</li>
            <li>Families</li>
            <li>Companies</li>
            <li>Insurance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Certifications
          </h3>

          <div className="flex gap-3">
            <div className="w-16 h-16 bg-white/20 rounded"></div>
            <div className="w-16 h-16 bg-white/20 rounded"></div>
            <div className="w-16 h-16 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}