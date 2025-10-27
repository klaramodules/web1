"use client";

import Header from "../Header";
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";

export default function HowItWorksPage() {
  const mossGreen = "#5A6B4E";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={mossGreen} />,
      title: "Order Online",
      text: "Select your preferred Klara model and place your order online. Limited configuration options available (color, layout). Pre-designed and ready-to-go.",
    },
    {
      icon: <Factory size={48} strokeWidth={1.5} color={mossGreen} />,
      title: "Built in Finland",
      text: "Your home is built by experienced Finnish craftsmen in our partner factories. We ensure high Nordic quality and precision.",
    },
    {
      icon: <Truck size={48} strokeWidth={1.5} color={mossGreen} />,
      title: "Delivered",
      text: "Once completed, your home is transported across Europe on a standard trailer. Delivery times vary depending on your location.",
    },
    {
      icon: <Plug size={48} strokeWidth={1.5} color={mossGreen} />,
      title: "Connected & Ready",
      text: "Your house is lifted into place with a crane and connected to electricity and water. Just move in and enjoy!",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f0e6] text-gray-900 pt-32 px-4 md:px-0">
      <Header />

      <section className="max-w-5xl mx-auto text-center py-20">
        {/* Rubrik i mossgrönt med beige linje */}
        <div className="mb-8">
          <h1
            className="text-4xl md:text-5xl font-semibold mb-3"
            style={{ color: mossGreen, letterSpacing: "0.5px" }}
          >
            How It Works
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

        <p className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-800">
          Ordering a Klara home is simple, fast, and transparent. From placing your order online
          to moving into your new home, we handle all steps efficiently. Here’s what you can expect:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-md"
                style={{
                  backgroundColor: beige,
                  color: mossGreen,
                }}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
