"use client";

import CardProject from "../molecules/Card/CardProject";
import { projectData } from "@/data/dataProject";

export default function Project() {
  return (
    <section
      id="project"
      className="relative min-h-[100svh] overflow-hidden bg-[#F4F3EF] text-[#111111] py-20 lg:py-10"
    >
      {/* Subtle editorial grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="mx-auto h-full max-w-full border-x border-[#D8D6D0]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] flex-col px-5 sm:px-8 lg:px-36">
        {/* Editorial Section Header */}
        <div className="flex flex-col justify-between border-b border-[#D8D6D0] pb-12 pt-6 lg:flex-row lg:items-end">
          <div>
            {/* Category Badge / Sub-label */}
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#777777]">
              03 / Works
            </p>

            {/* Display Heading */}
            <h2 className="mt-6  text-[13vw] font-medium leading-[0.85] tracking-[-0.075em] sm:text-[10vw] lg:text-[6.5vw]">
              Selected <br />
              <span className="block pl-[4vw] lg:pl-[6vw]">
                Projects<span className="text-[#0d4dbb]">.</span>
              </span>
            </h2>
          </div>

          {/* Editorial Description */}
          <p className="mt-8 max-w-md text-sm uppercase tracking-[0.08em] text-[#303030] lg:mt-0 lg:pb-3">
            A curated collection of web applications and digital products built using modern frontend technologies.
          </p>
        </div>

        {/* Project Showcase Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Anda dapat meloop CardProject di sini */}
          <div className="lg:col-span-12 mx-auto max-w-[1440px]">
            {/* Implementasi komponen CardProject */}
            <CardProject projects={projectData} />  
          </div>
        </div>

        {/* Editorial Bottom Divider */}
        <div className="mt-auto border-t border-[#D8D6D0] pt-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#777777]">
            Project
          </p>
        </div>
      </div>
    </section>
  );
}