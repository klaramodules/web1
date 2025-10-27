import Header from "../Header";

export default function AboutPage() {
  const mossGreen = "#5A6B4E";
  const beige = "#f5f0e6";

  return (
    <main className="min-h-screen bg-[#f5f0e6] text-gray-900 pt-32 px-4 md:px-0">
      <Header />

      <section className="max-w-3xl mx-auto text-center py-12">
        {/* Rubrik i mossgrönt med beige linje */}
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-3"
            style={{ color: mossGreen, letterSpacing: "0.5px" }}
          >
            About Klara
          </h1>
          <div
            className="mx-auto"
            style={{
              width: "220px",
              height: "2px",
              backgroundColor: beige,
            }}
          ></div>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Klara is a newly founded family company with a clear mission — to make
          owning a high-quality modular home simple, sustainable, and accessible.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Although our company is young, we collaborate with experienced Finnish
          builders and craftsmen who work according to the highest standards of
          quality and precision. Every home is built with care, using durable
          materials and Nordic craftsmanship that stands the test of time.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Our goal is to make Finnish craftsmanship and building excellence
          accessible across Europe — exporting the know-how and quality of
          Finnish construction without flying builders across the continent.
          Each Klara home is designed and built in Finland, then delivered
          ready-to-use, bringing Nordic building tradition to new markets in an
          efficient and sustainable way.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Our team combines design, practicality, and reliability — merging the
          warmth of a family business with the professionalism of Finland’s most
          trusted builders. We believe in honest partnerships, transparent
          communication, and homes that are made to last.
        </p>

        <p className="text-lg leading-relaxed text-gray-800">
          Klara is more than a name — it’s our promise: clear processes,
          transparent quality, and living made simple.
        </p>
      </section>
    </main>
  );
}
