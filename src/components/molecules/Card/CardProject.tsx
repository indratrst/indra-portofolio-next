"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/data/type";
import CategoryStack from "../CategoryStack";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  projects: ProjectType[];
}

export default function CardProject({ projects }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-20 py-8">
      {projects.map((project, index) => {
        const formattedIndex = String(index + 1).padStart(2, "0");
        // Cek genap/ganjil untuk membuat pola selang-seling (zig-zag)
        const isEven = index % 2 !== 0;

        return (
          <article
            key={index}
            className="group relative border-b border-[#D8D6D0] pb-16"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* KOLOM GAMBAR (Ukuran diperkecil: lg:col-span-5) */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden"
                  >
                    <div className="relative  w-full overflow-hidden bg-[#EBE9E3]">
                      <Image
                        width={1440}
                        height={600}
                        src={project.image}
                        alt={project.title}
                        priority={index === 0}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out "
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden bg-[#EBE9E3]">
                    <Image
                      width={1200}
                      height={600}
                      src={project.image}
                      alt={project.title}
                      priority={index === 0}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* KOLOM KONTEN TEKS (lg:col-span-7) */}
              <div
                className={`flex flex-col justify-between lg:col-span-7 ${
                  isEven ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
                }`}
              >
                <div>
                  {/* Nomor Urut & Category */}
                  <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.14em] text-[#777777]">
                    <span>{formattedIndex}</span>
                    <span className="h-px w-6 bg-[#D8D6D0]" />
                    <span>Selected Work</span>
                  </div>

                  {/* Judul Project */}
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#0d4dbb]"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>

                  {/* Deskripsi */}
                  <p className="mt-4 text-sm leading-relaxed text-[#303030]">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Link CTA */}
                <div className="mt-8">
                  <div className="pb-6">
                    <CategoryStack categories={project.categories} />
                  </div>

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#111111] transition-colors hover:text-[#0d4dbb]"
                    >
                      View Project
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </article>
        );
      })}
    </div>
  );
}