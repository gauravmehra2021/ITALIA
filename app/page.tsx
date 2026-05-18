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
      {/* Hero Section */}
      <section
        className="flex min-h-[450px] h-[60vh] items-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/hero.png')",
        }}
      >
        <div className="container mx-auto px-5">

          <h1 className="mb-6 max-w-[900px] text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl xl:text-6xl">
            WE HELP COMPANIES WITH THE PROCEDURES FOR FOREIGN AND TRAVELLING
            PERSONNEL
          </h1>

          <p className="text-lg font-medium tracking-wide text-[var(--secondary)] md:text-2xl">
            Discover our services for COMPANIES
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-5 py-24">

        {/* Services */}
        <section className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-t-[4px] hover:border-[var(--primary)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="mb-5 text-[40px]">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-black">
                {service.title}
              </h3>

              <p className="mb-5 flex-grow text-[var(--text-muted)]">
                {service.description}
              </p>

              <a
                href="#"
                className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-12">

          <div className="rounded-lg border border-[#eee] bg-white p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-md:px-5 max-md:py-10">

            <h2 className="mb-4 text-3xl font-bold text-black md:text-5xl">
              Ready to start your journey?
            </h2>

            <p className="mx-auto mb-8 max-w-[600px] text-lg text-[var(--text-muted)]">
              Our experts are here to guide you through every step of your
              international transition.
            </p>

            <button className="inline-block rounded bg-[var(--primary)] px-10 py-4 text-sm font-bold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:scale-105 hover:bg-[#08345a] hover:shadow-[0_10px_20px_rgba(11,69,117,0.2)]">
              Contact an Expert
            </button>

          </div>
        </section>
      </main>
    </>
  );
};

export default Home;