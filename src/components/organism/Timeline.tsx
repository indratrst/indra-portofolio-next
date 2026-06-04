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
      className="relative overflow-hidden bg-zinc-950 py-32"
    >
      {/* Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 bg-purple-500/10 blur-[120px]" />

      {/* Grid */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
          bg-[size:80px_80px]
          [mask-image:radial-gradient(circle_at_center,black,transparent)]
        "
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
            Learning Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Continuous
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Learning
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            My journey through frontend development, backend engineering and
            fullstack bootcamps.
          </p>
        </div>

        {/* Tabs */}

        <div className="mb-20 flex justify-center">
          <div
            className="
              flex flex-wrap gap-2
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-2
              backdrop-blur-xl
            "
          >
            {learningJourney.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`
                  rounded-xl
                  px-5
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  ${
                    activeTrack === track.id
                      ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                      : "text-zinc-400 hover:text-white"
                  }
                `}
              >
                {track.category}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack}
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
          >
            <div className="mb-12 flex items-center gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <BookOpen className="h-5 w-5 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {activeData?.category}
              </h3>
            </div>

            <div className="relative max-w-4xl">
              {/* Vertical Line */}

              <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

              <div className="space-y-10">
                {activeData?.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="relative pl-16"
                  >
                    {/* Dot */}

                    <div
                      className="
                        absolute
                        left-0
                        top-8
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-zinc-900
                      "
                    >
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-green-400" />
                    </div>

                    {/* Card */}

                    <div
                      className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-8
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/[0.05]
                      "
                    >
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-2
                          text-xs
                          text-zinc-400
                        "
                      >
                        {item.period}
                      </span>

                      <h4 className="mt-5 text-xl font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-4 leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
