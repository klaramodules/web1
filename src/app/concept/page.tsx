"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../Header";

export default function Concept() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8] text-gray-900 pt-32 px-4 md:px-0">
      <Header />

      {/* Intro Section */}
      <section className="max-w-3xl mx-auto text-center py-12">
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-3"
            style={{ color: forestGreen, letterSpacing: "0.5px" }}
          >
            Explore Our Concept
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

        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          Our modular homes are designed for flexibility, comfort, and Nordic durability.
          Built in Finland, delivered ready-to-use across Europe.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Whether you want a guest house, a tiny home, or a rental property,
          Klara has the perfect solution. Our plug & play homes combine modern design,
          sustainable materials, and efficient construction.
        </p>
      </section>

      {/* Large Image (Fasad 1) */}
      <section className="flex flex-col items-center mb-20">
        <div className="relative w-full max-w-4xl cursor-pointer rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/fasad1.png"
            alt="Facade 1"
            width={1600}
            height={1200}
            className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedImage("/fasad1.png")}
          />
        </div>
      </section>

      {/* Pitch Sections */}
      <section className="max-w-4xl mx-auto grid gap-12 md:grid-cols-3 py-16 px-4 md:px-0">
        {/* Investor Pitch */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ color: forestGreen }}
          >
            For Investors
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Klara offers plug & play modular homes built with Finnish quality and designed for efficient, standard trailer transport — a unique logistics advantage that reduces cost and complexity.
            The European small home market is expanding rapidly, driven by the demand for flexible and sustainable living solutions.
            Our scalable business model is based on standardized home types, clear margins, and low production risk.
            We invite investors to join us early in a growing export venture with strong demand and a clear path to profitability.
          </p>
        </div>

        {/* Homeowners Pitch */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ color: forestGreen }}
          >
            For Homeowners
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Dreaming of extra space — without the hassle of construction or permits?
            Our ready-made modular homes are delivered straight to your property, fully finished and ready to use.
            No need for contractors or long building projects — simply choose your model, prepare your site, and move in.
            Finnish craftsmanship, smart layouts, and timeless design make it easy to create your perfect guest house, studio, or rental cabin.
          </p>
        </div>

        {/* Tiny House Pitch */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ color: forestGreen }}
          >
            For Tiny House Enthusiasts
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Klara homes are made for those who value freedom, simplicity, and sustainability.
            Built in Finland with precision and care, our tiny houses can be placed almost anywhere — by the sea, in the forest, or in the mountains.
            Choose an off-grid model with solar power and independent water solutions for complete autonomy.
            Designed for life on your terms — ready, mobile, and built to last.
          </p>
        </div>
      </section>

      {/* Three Large Images */}
      <section className="max-w-4xl mx-auto flex flex-col items-center space-y-10 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: forestGreen }}>
          Our model
        </h2>

        {/* Floorplan */}
        <div className="relative w-full max-w-4xl cursor-pointer rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/floorplan2.png"
            alt="Floorplan 2"
            width={1600}
            height={1200}
            className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedImage("/floorplan2.png")}
          />
        </div>

        {/* Fasad 2 & 3 */}
        {["/fasad2.png", "/fasad3.png"].map((src, index) => (
          <div key={index} className="relative w-full max-w-4xl cursor-pointer rounded-2xl shadow-lg overflow-hidden">
            <Image
              src={src}
              alt={`Facade ${index + 2}`}
              width={1600}
              height={1200}
              className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Full view"
            width={1600}
            height={1200}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}
