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
        className="relative overflow-hidden bg-zinc-950 py-32"
      >
        {/* Glow */}
        <div className="absolute left-1/4 top-0 h-96 w-96 bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-purple-500/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4">
          {/* Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
              Certifications & Achievements
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Continuous Learning &
              <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                {" "}
                Professional Growth
              </span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Certifications, bootcamps, conferences and learning experiences
              that shaped my journey as a Frontend Developer.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-white">
                {totalCertificates}+
              </h3>
              <p className="mt-2 text-zinc-400">Certificates</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-white">
                {achievementCategories.length}
              </h3>
              <p className="mt-2 text-zinc-400">Categories</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-white">2020+</h3>
              <p className="mt-2 text-zinc-400">Learning Journey</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="relative flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
              {achievementCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`relative z-10 rounded-xl px-5 py-3 text-sm font-medium transition-all ${selectedCategory === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  {category.icon} {category.label}

                  {selectedCategory === index && (
                    <motion.div
                      layoutId="active-tab"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute inset-0 -z-10 rounded-xl border border-white/10 bg-white/10"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Current Category */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-zinc-300 backdrop-blur-xl">
              <span>{currentCategory.icon}</span>
              <span>{currentCategory.label}</span>
            </div>
          </div>

          {/* Certificates */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {currentCategory.items.map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div
                    className="relative aspect-[4/3] cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-6">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      {item.source}
                    </span>

                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="mt-6 text-sm text-blue-400 transition hover:text-blue-300"
                    >
                      View Certificate →
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-4xl text-white"
              >
                ×
              </button>

              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage}
                  alt="Certificate"
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