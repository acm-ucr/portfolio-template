"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-services-orange text-services-text w-full px-6 py-16"
    >
      <div className="mx-auto w-full max-w-[315px]">
        <p className="text-[10px] font-semibold">Projects</p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight">
          Services and Skills
        </h2>
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-black/30">
              <motion.button
                type="button"
                onClick={() => toggleSelection(index)}
                aria-expanded={openIndex === index}
                aria-controls={`service-panel-${index}`}
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex w-full items-center justify-between py-2 text-left"
              >
                <span className="text-sm font-semibold">{service.title}</span>
                <span className="text-xl" aria-hidden="true">
                  {openIndex === index ? "-" : "+"}
                </span>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`service-panel-${index}`}
                    key={service.title}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-sm">{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesAndSkills;
