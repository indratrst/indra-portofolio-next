"use client";

import { ProjectType } from "@/data/type";
import CardProject from "../molecules/Card/CardProject";
import { projectData } from "@/data/dataProject";
import { useMemo } from "react";

const Project: React.FC = () => {
  const filteredProjects = useMemo(() => {
    return projectData;
  }, [projectData]);
  return (
    <section id="project" className="pt-24 pb-12 bg-white dark:bg-slate-800">
      <div className="max-w-xl mx-auto text-center mb-16">
        <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-light">
          Project
        </h2>
        <p className="font-medium text-base text-secondary md:text-lg ">
          Beberapa project yang pernah dibuat untuk menyelesaikan kelas atau
          explore ilmu yang baru dipelajari
        </p>
      </div>
      <div className="grid grid-cols-3 justify-center items-center mt-28 md:gap-2  mb-12">
        {filteredProjects.map((project, index) => (
          <CardProject project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
