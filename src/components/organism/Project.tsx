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
    <section
      id="project"
      className="pt-12 lg:pt-36 pb-9 bg-basic dark:bg-dark relative shadow-lg"
    >
      <div className="relative  w-full mx-auto flex justify-center overflow-hidden">
        <img
          src="/project-left.svg"
          alt="pic hero"
          className="absolute -left-20  max-w-full mx-auto -ms-[75px] lg:-ms-[2px]  scale-[1.6] lg:-mt-36 transform lg:scale-[.4]"
        />
        <img
          src="/project-right.svg"
          alt="pic hero"
          className="absolute -right-32  max-w-full mx-auto -ms-[75px] lg:-ms-[2px]  scale-[1.6] lg:-mt-28 transform lg:scale-[.4]"
        />
        <div className="max-w-xl mx-auto text-center mb-16 relative">
          <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>

          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-light">
            Project
          </h2>
          <p className="font-medium text-base text-secondary md:text-lg ">
            Beberapa project yang pernah terlibat dengan berbagai kebutuhan dan
            fitur yang memungkinkan kita untuk mempermudah aktivitas.
          </p>
        </div>
      </div>

      <div className="">
        <CardProject projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Project;
