"use client";

import { useState } from "react";

const services = [
  {
    title: "UI Design",
    description: "Creating intuitive and visually appealing interfaces.",
  },
  {
    title: "Development",
    description: "Building responsive websites and web applications.",
  },
  {
    title: "Branding",
    description: "Creating unique and memorable brand identities.",
  },
  {
    title: "Animation",
    description: "Bringing designs to life through animation.",
  },
  {
    title: "Motion",
    description: "Creating smooth transitions and interactive experiences.",
  },
];

const ServicesAndSkills = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleSelection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-services-orange text-services-text w-full px-6 py-16">
      <div className="mx-auto w-full max-w-[315px]">
        <p className="text-[10px] font-semibold">Projects</p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight">
          Services and Skills
        </h2>
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-black/30">
              <button
                type="button"
                onClick={() => toggleSelection(index)}
                aria-expanded={openIndex === index}
                aria-controls={`service-panel-${index}`}
                className="flex w-full items-center justify-between py-2 text-left"
              >
                <span className="text-sm font-semibold">{service.title}</span>
                <span className="text-xl" aria-hidden="true">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex == index && (
                <p id={`service-panel-${index}`} className="pb-4 text-sm">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndSkills;
