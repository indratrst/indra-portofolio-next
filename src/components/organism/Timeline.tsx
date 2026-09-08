"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const learningJourney = [
  {
    id: "frontend",
    category: "Frontend Developer",
    items: [
      {
        period: "Jun - Jul 2022",
        title: "Belajar Dasar Pemrograman Web",
        description:
          "Mempelajari HTML, CSS, semantic web, dan struktur website modern.",
      },
      {
        period: "Jul - Aug 2022",
        title: "Belajar Membuat Front-End Web untuk Pemula",
        description:
          "Membangun aplikasi web interaktif menggunakan JavaScript dan Web Storage.",
      },
      {
        period: "Sep - Oct 2022",
        title: "Belajar Fundamental Front-End Development",
        description:
          "Belajar ES6, Web Components, AJAX, Webpack dan integrasi API.",
      },
      {
        period: "Nov 2022 - Jan 2023",
        title: "Menjadi Front-End Web Developer Expert",
        description:
          "Membangun aplikasi yang responsif, accessible, maintainable dan performant.",
      },
    ],
  },
  {
    id: "backend",
    category: "Backend Developer",
    items: [
      {
        period: "Jan 2023",
        title: "AWS Cloud Practitioner Fundamentals",
        description:
          "Memahami layanan AWS, infrastruktur cloud dan konsep cloud computing.",
      },
      {
        period: "Feb 2023",
        title: "Dasar Pemrograman JavaScript",
        description:
          "Mempelajari JavaScript modern sebagai fondasi pengembangan backend Node.js.",
      },
      {
        period: "Feb - Mar 2023",
        title: "Backend Developer Pemula",
        description:
          "Membangun REST API menggunakan Node.js dan konsep backend modern.",
      },
    ],
  },
  {
    id: "fullstack",
    category: "Fullstack Bootcamp",
    items: [
      {
        period: "Apr 2023",
        title: "Fundamental Programming (Level 1)",
        description:
          "HTML, CSS, JavaScript, Bootstrap, Database dan React dasar.",
      },
      {
        period: "May 2023",
        title: "Development With Framework (Level 2)",
        description:
          "React.js, Laravel, MySQL, Express.js dan MongoDB dengan project akhir aplikasi booking tiket bioskop.",
      },
    ],
  },
  {
    id: "ai",
    category: "AI & Machine Learning",
    items: [
      {
        period: "Apr 2026",
        title: "Ai Praktis Untuk Produktifitas",
        description:
          "Artificial Intelligence (AI) untuk meningkatkan produktivitas dengan tools seperti ChatGPT, Gemini, Claude",
      },
      {
        period: "May 2026",
        title: "Belajar Penggunaan Generative Ai",
        description:
          "Mempelajari penggunaan Generative AI untuk berbagai keperluan seperti pembuatan konten, desain, dan pengembangan aplikasi",
      },
    ],
  },
];

export default function LearningJourney() {
  const [activeTrack, setActiveTrack] = useState("frontend");

  const activeData = learningJourney.find((track) => track.id === activeTrack);

  return (
    <section
      id="timeline"
      className="relative min-h-[100svh] overflow-hidden bg-[#F4F3EF] text-[#111111] py-20 lg:py-28"
    >
      {/* Editorial Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="mx-auto h-full max-w-full border-x border-[#D8D6D0]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-full flex-col px-5 sm:px-8 lg:px-36">
        {/* Editorial Section Header */}
        <div className="flex flex-col justify-between border-b border-[#D8D6D0] pb-12 pt-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#777777]">
              07 / Roadmap & Learning
            </p>
            <h2 className="mt-6 max-w-[1250px] text-[13vw] font-medium leading-[0.85] tracking-[-0.075em] sm:text-[10vw] lg:text-[6.5vw]">
              Learning <br />
              <span className="block pl-[4vw] lg:pl-[6vw]">
                Journey<span className="text-[#0d4dbb]">.</span>
              </span>
            </h2>
          </div>

          <p className="mt-8 max-w-md text-sm uppercase tracking-[0.08em] text-[#303030] lg:mt-0 lg:pb-3">
            My journey through frontend development, backend engineering, fullstack bootcamps, and modern AI tools.
          </p>
        </div>

        {/* Category Filter Tabs (Editorial Pill Badges) */}
        <div className="flex flex-wrap gap-2 pt-10 pb-8 border-b border-[#D8D6D0] max-w-[1440px] mx-auto">
          {learningJourney.map((track) => {
            const isActive = activeTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`border px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive
                    ? "border-[#111111] bg-[#111111] text-[#F4F3EF]"
                    : "border-[#D8D6D0] bg-[#EBE9E3] text-[#303030] hover:border-[#111111]"
                }`}
              >
                {track.category} [{track.items.length}]
              </button>
            );
          })}
        </div>

        {/* Timeline Items */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Active Track Title */}
              <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-[#777777]">
                <BookOpen size={16} strokeWidth={1.5} className="text-[#0d4dbb]" />
                <span className="text-[#111111] font-medium">
                  {activeData?.category}
                </span>
                <span className="h-px w-8 bg-[#D8D6D0]" />
              </div>

              {/* Editorial Timeline Container */}
              <div className="relative max-w-5xl pl-4 sm:pl-8">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 h-full w-px bg-[#D8D6D0]" />

                <div className="flex flex-col gap-8">
                  {activeData?.items.map((item, index) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="group relative border border-[#D8D6D0] bg-[#EBE9E3] p-6 transition-colors duration-300 hover:border-[#111111]"
                    >
                      {/* Timeline Node Dot */}
                      <div className="absolute -left-[21px] sm:-left-[37px] top-7 h-2.5 w-2.5 border border-[#111111] bg-[#0d4dbb]" />

                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <span className="border border-[#D8D6D0] bg-[#F4F3EF] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#777777]">
                            {item.period}
                          </span>
                        </div>

                        <h4 className="mt-2 text-xl font-medium tracking-tight text-[#111111] sm:text-2xl transition-colors duration-300 group-hover:text-[#0d4dbb]">
                          {item.title}
                        </h4>

                        <p className="text-sm leading-relaxed text-[#303030]">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Editorial Footer */}
        <div className="mt-auto border-t border-[#D8D6D0] pt-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#777777]">
            Structured Self-Improvement
          </p>
        </div>
      </div>
    </section>
  );
}