"use client";

import Image from "next/image";
import { ProjectType } from "@/data/type";
import CategoryStack from "../CategoryStack";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  projects: ProjectType[];
}

export default function CardProject({
  projects,
}: ProjectCardProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-white/20
            hover:bg-white/[0.07]
          "
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <Image
              width={1200}
              height={700}
              src={project.image}
              alt={project.title}
              className="
                h-auto
                w-full
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <ArrowUpRight
                className="
                  text-zinc-500
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                size={22}
              />
            </div>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <CategoryStack
                categories={project.categories}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}