"use client";

import CardProject from "../molecules/Card/CardProject";
import { projectData } from "@/data/dataProject";

export default function Project() {
  return (
    <section
      id="project"
      className="
        relative
        overflow-hidden
        bg-zinc-950
        py-24
        lg:py-36
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-blue-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-zinc-300
              backdrop-blur-md
            "
          >
            Featured Projects
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-medium
              tracking-tighter
              leading-[0.95]
              text-white
            "
          >
            Selected
            <br />

            <span
              className="
                bg-gradient-to-br
                from-white
                via-white
                to-[#75ff7c]
                bg-clip-text
                text-transparent
              "
            >
              Projects
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            A collection of web applications and digital products
            built using modern frontend technologies.
          </p>
        </div>

        <CardProject projects={projectData} />
      </div>
    </section>
  );
}