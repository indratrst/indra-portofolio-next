"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { achievementCategories } from "@/data/dataAchievementGroup";
import { ArrowUpRight, X } from "lucide-react";

export default function Achievement() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentCategory = achievementCategories[selectedCategory];

  const totalCertificates = useMemo(() => {
    return achievementCategories.reduce(
      (acc, category) => acc + category.items.length,
      0
    );
  }, []);

  return (
    <>
      <section
        id="achievement"
        className="relative min-h-[100svh] overflow-hidden bg-[#F4F3EF] text-[#111111] py-20 lg:py-28"
      >
        {/* Subtle Editorial Grid Background */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="mx-auto h-full max-w-full border-x border-[#D8D6D0]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-full flex-col px-5 sm:px-8 lg:px-36">
          
          {/* Editorial Section Header */}
          <div className="flex flex-col justify-between border-b border-[#D8D6D0] pb-12 pt-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#777777]">
                04 / Certifications
              </p>
              <h2 className="mt-6 max-w-[1250px] text-[13vw] font-medium leading-[0.85] tracking-[-0.075em] sm:text-[10vw] lg:text-[6.5vw]">
                Professional <br />
                <span className="block pl-[4vw] lg:pl-[6vw]">
                  Growth<span className="text-[#0d4dbb]">.</span>
                </span>
              </h2>
            </div>

            <p className="mt-8 max-w-md text-sm uppercase tracking-[0.08em] text-[#303030] lg:mt-0 lg:pb-3">
              Certifications, bootcamps, and structured learning experiences that continuously refine my skills as a developer.
            </p>
          </div>

          {/* Editorial Stats Bar */}
          <div className="grid grid-cols-2 border-b border-[#D8D6D0] py-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#777777]">
                Certificates Earned
              </span>
              <p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                {totalCertificates}+
              </p>
            </div>
            <div className="lg:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#777777]">
                Specialization Domains
              </span>
              <p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                {achievementCategories.length}
              </p>
            </div>
            <div className="col-span-2 mt-6 lg:col-span-4 lg:mt-0">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#777777]">
                Learning Journey
              </span>
              <p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                2020+
              </p>
            </div>
          </div>

          {/* Category Filter Tabs (Editorial Pill Badges) */}
          <div className="flex flex-wrap gap-2 pt-10 pb-8">
            {achievementCategories.map((category, index) => {
              const isActive = selectedCategory === index;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isActive
                      ? "border-[#111111] bg-[#111111] text-[#F4F3EF]"
                      : "border-[#D8D6D0] bg-[#EBE9E3] text-[#303030] hover:border-[#111111]"
                  }`}
                >
                  {category.label} [{category.items.length}]
                </button>
              );
            })}
          </div>

          {/* Certificates Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentCategory.items.map((item, idx) => (
                <article
                  key={item.title}
                  className="group relative flex flex-col border border-[#D8D6D0] bg-[#EBE9E3] p-5 transition-colors duration-300 hover:border-[#111111]"
                >
                  {/* Image Container */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#D8D6D0] cursor-pointer"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Card Details */}
                  <div className="mt-5 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-[#777777]">
                        <span>0{idx + 1}</span>
                        <span className="h-px w-4 bg-[#D8D6D0]" />
                        <span>{item.source}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-medium tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#0d4dbb]">
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="group/btn mt-6 flex items-center justify-between border-t border-[#D8D6D0] pt-4 text-[11px] uppercase tracking-[0.15em] text-[#111111] transition-colors hover:text-[#0d4dbb]"
                    >
                      <span>View Certificate</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Footer */}
          <div className="mt-auto border-t border-[#D8D6D0] pt-6">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#777777]">
              Verified Digital Credentials
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox Modal (Editorial Style) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80 backdrop-blur-sm p-5 sm:p-8 lg:p-12"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl border border-[#D8D6D0] bg-[#F4F3EF] p-5 sm:p-8"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-4 mb-6">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#777777]">
                  Preview Certificate
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#111111] transition-colors hover:text-[#0d4dbb]"
                >
                  <span>Close</span>
                  <X size={15} strokeWidth={1.5} />
                </button>
              </div>

              {/* Preview Display */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EBE9E3]">
                <Image
                  src={selectedImage}
                  alt="Certificate Preview"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}