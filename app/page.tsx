import React from "react";

const Home: React.FC = () => {
  const services = [
    {
      icon: "🇮🇹",
      title: "Sartorial Excellence",
      description:
        "Immerse yourself in the world of fine Italian tailoring, where every stitch tells a story of heritage and precision.",
    },
    {
      icon: "🍷",
      title: "Culinary Artistry",
      description:
        "Taste the essence of the Mediterranean with our curated selection of regional delicacies and artisanal flavors.",
    },
    {
      icon: "🏛️",
      title: "Architectural Legacy",
      description:
        "Explore the stunning villas and historic piazzas that have inspired generations of designers and thinkers.",
    },
  ];

  return (
  <>
  
   <>
      {/* Hero Section */}
      <section className="relative flex min-h-[450px] items-center bg-[url('/images/hero.png')] bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/65">
        <div className="container relative z-10 py-24">
          <h1 className="animate-fade-in-up max-w-[900px] text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1.1] text-white">
            WE HELP COMPANIES WITH THE PROCEDURES FOR FOREIGN AND TRAVELLING
            PERSONNEL
          </h1>

          <p
            className="animate-fade-in-up mt-6 text-[clamp(1.1rem,2vw,1.5rem)] font-medium tracking-wide text-[#F37021]"
            style={{ animationDelay: '0.2s' }}
          >
            Discover our services for COMPANIES
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-24">
        {/* Services Grid */}
        <section className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* Card 1 */}
          <div
            className="animate-fade-in-up group flex flex-col rounded bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-t-[#004a99] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t-4 border-transparent"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="mb-5 text-[40px]">
              🇮🇹
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#004a99]">
              Sartorial Excellence
            </h3>

            <p className="mb-5 flex-grow text-[#64748B]">
              Immerse yourself in the world of fine Italian tailoring, where
              every stitch tells a story of heritage and precision.
            </p>

            <a
              href="#"
              className="text-[0.9rem] font-bold uppercase tracking-[1px] text-[#004a99] hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Card 2 */}
          <div
            className="animate-fade-in-up group flex flex-col rounded bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-t-[#004a99] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t-4 border-transparent"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="mb-5 text-[40px]">
              🍷
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#004a99]">
              Culinary Artistry
            </h3>

            <p className="mb-5 flex-grow text-[#64748B]">
              Taste the essence of the Mediterranean with our curated selection
              of regional delicacies and artisanal flavors.
            </p>

            <a
              href="#"
              className="text-[0.9rem] font-bold uppercase tracking-[1px] text-[#004a99] hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Card 3 */}
          <div
            className="animate-fade-in-up group flex flex-col rounded bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-t-[#004a99] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t-4 border-transparent"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="mb-5 text-[40px]">
              🏛️
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#004a99]">
              Architectural Legacy
            </h3>

            <p className="mb-5 flex-grow text-[#64748B]">
              Explore the stunning villas and historic piazzas that have
              inspired generations of designers and thinkers.
            </p>

            <a
              href="#"
              className="text-[0.9rem] font-bold uppercase tracking-[1px] text-[#004a99] hover:underline"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="animate-fade-in-up mt-12">
          <div className="rounded-lg border border-[#eee] bg-white p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:p-16">
            <h2 className="mb-4 text-4xl font-bold text-[#004a99]">
              Ready to start your journey?
            </h2>

            <p className="mx-auto mb-8 max-w-[600px] text-[1.1rem] text-[#64748B]">
              Our experts are here to guide you through every step of your
              international transition.
            </p>

            <button className="inline-block rounded bg-[#004a99] px-10 py-4 text-sm font-bold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:scale-105 hover:bg-[#08345a] hover:shadow-[0_10px_20px_rgba(11,69,117,0.2)]">
              Contact an Expert
            </button>
          </div>
        </section>
      </main>
    </>
  </>
  );
};

export default Home;