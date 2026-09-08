"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { achievementCategories } from "@/data/dataAchievementGroup";

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
        className="bg-[#F4F3EF] text-[#111111] py-24 md:py-32 border-b border-[#D8D6D0]"
      >
        <div className="container mx-auto px-5 md:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111] pb-8 mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                05 / CERTIFICATIONS & LEARNING
              </span>
              <h2 className="mt-3 text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]">
                PROFESSIONAL <br />
                <span className="text-[#0d4dbb]">GROWTH</span>
              </h2>
            </div>
            <p className="max-w-md text-base text-[#777777] font-normal leading-relaxed">
              Certifications, bootcamps, and structured learning experiences that continuously refine my skills as a developer.
            </p>
          </div>

          {/* Minimal Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 pb-12 border-b border-[#D8D6D0]">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#111111]">
                {totalCertificates}+
              </div>
              <div className="text-xs uppercase tracking-wider text-[#777777] mt-1">
                CERTIFICATES EARNED
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#111111]">
                {achievementCategories.length}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#777777] mt-1">
                SPECIALIZATION DOMAINS
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold text-[#111111]">
                2020+
              </div>
              <div className="text-xs uppercase tracking-wider text-[#777777] mt-1">
                LEARNING JOURNEY
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {achievementCategories.map((category, index) => {
              const isActive = selectedCategory === index;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? "bg-[#111111] text-[#F4F3EF] border-[#111111]"
                      : "bg-transparent text-[#777777] border-[#D8D6D0] hover:border-[#111111] hover:text-[#111111]"
                  }`}
                >
                  {category.label} ({category.items.length})
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
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentCategory.items.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col bg-[#EAE8E2] border border-[#D8D6D0] overflow-hidden transition-all duration-300 hover:border-[#111111]"
                >
                  {/* Image Container */}
                  <div
                    className="relative aspect-[16/10] bg-[#D8D6D0] cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-colors duration-300" />
                  </div>

                  {/* Content Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#777777] mb-2 border-b border-[#D8D6D0] pb-1">
                        {item.source}
                      </span>
                      <h3 className="text-lg font-bold text-[#111111] leading-snug group-hover:text-[#0d4dbb] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="mt-6 flex items-center justify-between w-full pt-4 border-t border-[#D8D6D0] text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#0d4dbb] transition-colors"
                    >
                      <span>VIEW CERTIFICATE</span>
                      <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Minimal Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/90 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#F4F3EF] border border-[#D8D6D0] p-4 md:p-6"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8D6D0]">
                <span className="text-xs font-mono uppercase text-[#777777]">
                  PREVIEW CERTIFICATE
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#0d4dbb] transition-colors"
                >
                  [ CLOSE ESC ]
                </button>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] w-full bg-[#EAE8E2]">
                <Image
                  src={selectedImage}
                  alt="Certificate Preview"
                  fill
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